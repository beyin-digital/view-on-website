import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  //   Param,
  Post,
  Req,
  SerializeOptions,
  UseGuards,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { AuthGuard } from '@nestjs/passport';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller({
  path: 'payment',
  version: '1',
})
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @SerializeOptions({
    groups: ['me'],
  })
  @Post('pay')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  intiatePaymentProcess(
    @Req() req: any,
    @I18n() i18n: I18nContext,
    @Body() data: any,
  ) {
    const lang = i18n.lang;
    return this.paymentService.intiatePaymentProcess(req.user, lang, data);
  }

  @UseGuards(AuthGuard('jwt'))
  @SerializeOptions({
    groups: ['me', 'admin'],
  })
  @Delete('unsubscribe')
  unsubscribe(@Req() req: any, @Body('id') id: number) {
    return this.paymentService.unsubscribe(req.user, id);
  }
}
