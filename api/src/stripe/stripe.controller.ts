import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Headers,
  Req,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { StripeService } from './stripe.service';
import { StripeCreateSetupIntentDto } from './dto/stripe-create-setup-intent.dto';
import RequestWithRawBody from './interfaces/request-with-raw-body';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CreateCheckoutSessionDto } from './dto/create-checkout-session.dto';
import { UnsubscribeDto } from './dto/unsubscribe.dto';

@ApiTags('Stripe')
@Controller({ path: 'stripe', version: '1' })
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @ApiOperation({
    summary:
      "Creates a setup intent for the user, which is used to add a payment method to the user's account",
  })
  @Post('create-setup-intent')
  @HttpCode(HttpStatus.OK)
  async createSetupIntent(
    @Body() setupIntentDto: StripeCreateSetupIntentDto,
  ): Promise<any> {
    return this.stripeService.createSetupIntent(setupIntentDto);
  }

  @ApiOperation({
    summary:
      "Creates a checkout session for the user, which is can also be used to add a payment method to the user's account",
  })
  @Post('payment')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  async createCheckoutSession(
    @Req() request,
    @Body() createCheckoutSessionDto: CreateCheckoutSessionDto,
  ): Promise<any> {
    return this.stripeService.createCheckoutSession(
      request.user,
      createCheckoutSessionDto,
    );
  }

  @ApiOperation({
    summary:
      "Creates a setup intent for the user, which is used to add a payment method to the user's account",
  })
  @Delete('unsubscribe')
  async unsubscribeFromKeyword(
    @Req() req,
    @Body() unsubscribeDto: UnsubscribeDto,
  ) {
    return this.stripeService.unsubscribeFromKeyword(req.user, unsubscribeDto);
  }

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
