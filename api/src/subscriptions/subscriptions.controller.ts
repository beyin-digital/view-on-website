import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SubscriptionsService } from './subscriptions.service';
import { AuthGuard } from '@nestjs/passport';
import { PaySubscriptionDto } from './dto/pay-subscription.dto';

@ApiTags('Subscriptions')
@Controller({
  path: 'subscriptions',
  version: '1',
})
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('pay')
  async paySubscription(
    @Req() request,
    @Body() paySubscriptionDto: PaySubscriptionDto,
  ) {
    return this.subscriptionsService.paySubscription(
      request.user,
      paySubscriptionDto,
    );
  }
}
