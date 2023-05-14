import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Headers,
  Req,
} from '@nestjs/common';
import { StripeService } from './stripe.service';
import { StripeCreateSetupIntentDto } from './dto/stripe-create-setup-intent.dto';
import RequestWithRawBody from './interfaces/request-with-raw-body';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Stripe')
@Controller({ path: 'stripe', version: '1' })
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('create-setup-intent')
  @HttpCode(HttpStatus.OK)
  async createSetupIntent(
    @Body() setupIntentDto: StripeCreateSetupIntentDto,
  ): Promise<any> {
    return this.stripeService.createSetupIntent(setupIntentDto);
  }

  @Post('webhooks')
  webhooks(
    @Headers('stripe-signature') signature: string,
    @Req() request: RequestWithRawBody,
  ) {
    const event = this.stripeService.webhooks(
      signature,
      request.rawBody as any,
    );
    return this.stripeService.processEvent(event);
  }
}
