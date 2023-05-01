import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { StripeCreateSetupIntentDto } from './dto/stripe-create-setup-intent.dto';

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
}
