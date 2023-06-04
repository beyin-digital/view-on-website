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
  intiatePaymentProcess(@Req() req: any, @Body() data: any) {
    return this.paymentService.intiatePaymentProcess(req.user, data);
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
