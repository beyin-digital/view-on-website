import { Controller, Headers, Post, Req } from '@nestjs/common';
import RequestWithRawBody from './interfaces/request-with-raw-body';
import { StripeService } from './stripe.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller({
  path: 'stripe',
  version: '1',
})
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @ApiOperation({
    summary:
      "Webhook endpoint for stripe, which is used to process events from stripe, such as when a user's subscription is canceled",
  })
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
