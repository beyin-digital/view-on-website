import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Stripe } from 'stripe';

import { AllConfigType } from 'src/config/config.type';
import { StripeCreateCustomerDto } from './dto/stripe-create-customer.dto';
import { StripeCreateSetupIntentDto } from './dto/stripe-create-setup-intent.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class StripeService {
  public readonly stripe: Stripe;

  constructor(
    private configService: ConfigService<AllConfigType>,
    private usersService: UsersService,
  ) {
    this.stripe = new Stripe(this.configService.get('stripe').secretKey, {
      apiVersion: '2022-11-15',
    });
  }

  public async createCustomer(
    createStripeCustomerDTO: StripeCreateCustomerDto,
  ): Promise<Stripe.Customer> {
    return this.stripe.customers.create({
      email: createStripeCustomerDTO.email,
      name: createStripeCustomerDTO.name,
    });
  }

  public async createSetupIntent(
    setupIntentDto: StripeCreateSetupIntentDto,
  ): Promise<Stripe.SetupIntent> {
    const user = await this.usersService.findOne({
      stripeCustomerId: setupIntentDto.customerId,
    });
    return this.stripe.setupIntents.create({
      customer: user?.stripeCustomerId as string,
      automatic_payment_methods: {
        enabled: true,
      },
    });
  }
}
