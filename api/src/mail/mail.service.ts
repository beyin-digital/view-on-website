import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { I18nContext } from 'nestjs-i18n';
import { MailData } from './interfaces/mail-data.interface';
import { AllConfigType } from 'src/config/config.type';
import { MaybeType } from '../utils/types/maybe.type';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService<AllConfigType>,
  ) {}

  async userSignUp(mailData: MailData<{ otp: string }>): Promise<void> {
    const i18n = I18nContext.current();
    let emailConfirmTitle: MaybeType<string>;
    let text1: MaybeType<string>;
    let text2: MaybeType<string>;
    let text3: MaybeType<string>;

    if (i18n) {
      [emailConfirmTitle, text1, text2, text3] = await Promise.all([
        i18n.t('common.confirmEmail'),
        i18n.t('confirm-email.text1'),
        i18n.t('confirm-email.text2'),
        i18n.t('confirm-email.text3'),
      ]);
    }

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: emailConfirmTitle,
      template: 'activation',
      context: {
        title: emailConfirmTitle,
        otp: `${mailData.data.otp}`,
        actionTitle: emailConfirmTitle,
        app_name: this.configService.get('app.name', { infer: true }),
        text1,
        text2,
        text3,
      },
    });
  }

  async forgotPassword(mailData: MailData<{ token: string }>): Promise<void> {
    const i18n = I18nContext.current();
    let resetPasswordTitle: MaybeType<string>;
    let text1: MaybeType<string>;
    let text2: MaybeType<string>;
    let text3: MaybeType<string>;
    let text4: MaybeType<string>;

    if (i18n) {
      [resetPasswordTitle, text1, text2, text3, text4] = await Promise.all([
        i18n.t('common.resetPassword'),
        i18n.t('reset-password.text1'),
        i18n.t('reset-password.text2'),
        i18n.t('reset-password.text3'),
        i18n.t('reset-password.text4'),
      ]);
    }

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: resetPasswordTitle,
      template: 'reset-password',
      context: {
        title: resetPasswordTitle,
        url: `${this.configService.get('app.frontendDomain', {
          infer: true,
        })}/change-password?token=${mailData.data.token}`,
        actionTitle: resetPasswordTitle,
        app_name: this.configService.get('app.name', {
          infer: true,
        }),
        text1,
        text2,
        text3,
        text4,
      },
    });
  }

  async twoFactorAuth(mailData: MailData<{ otp: string }>): Promise<void> {
    const i18n = I18nContext.current();
    let emailTwoFactorAuthTitle: MaybeType<string>;
    let text1: MaybeType<string>;
    let text2: MaybeType<string>;
    let text3: MaybeType<string>;

    if (i18n) {
      [emailTwoFactorAuthTitle, text1, text2, text3] = await Promise.all([
        i18n.t('common.twoFactorAuthentication'),
        i18n.t('two-factor-auth.text1'),
        i18n.t('two-factor-auth.text2'),
        i18n.t('two-factor-auth.text3'),
      ]);
    }

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: emailTwoFactorAuthTitle,
      template: 'two-factor-auth',
      context: {
        title: emailTwoFactorAuthTitle,
        otp: `${mailData.data.otp}`,
        actionTitle: emailTwoFactorAuthTitle,
        app_name: this.configService.get('app.name', { infer: true }),
        text1,
        text2,
        text3,
      },
    });
  }

  async paymentConfirmation(
    mailData: MailData<{
      amount: number;
      renewalDate: string;
      keyword: string;
      renewalPrice: number;
      receiptUrl: string;
    }>,
  ): Promise<void> {
    const i18n = I18nContext.current();
    let emailPaymentConfirmationTitle: MaybeType<string>;
    let helloAnd: MaybeType<string>;
    let thank_you_for_your_payment: MaybeType<string>;
    let of: MaybeType<string>;
    let for_as_a_word: MaybeType<string>;
    let hashtag: MaybeType<string>;
    let your_payment_has_been_processed_and_you_can_find_your_receipt_here: MaybeType<string>;
    let receipt: MaybeType<string>;
    let your_subscription_will_be_renewed_on: MaybeType<string>;
    let for_the_amount_of: MaybeType<string>;

    if (i18n) {
      [
        emailPaymentConfirmationTitle,
        helloAnd,
        thank_you_for_your_payment,
        of,
        for_as_a_word,
        hashtag,
        your_payment_has_been_processed_and_you_can_find_your_receipt_here,
        receipt,
        your_subscription_will_be_renewed_on,
        for_the_amount_of,
      ] = await Promise.all([
        i18n.t('common.paymentConfirmation'),
        i18n.t('common.helloAnd'),
        i18n.t('subscription-payment.thank_you_for_your_payment'),
        i18n.t('subscription-payment.of'),
        i18n.t('subscription-payment.for'),
        i18n.t('subscription-payment.hashtag'),
        i18n.t(
          'subscription-payment.your_payment_has_been_processed_and_you_can_find_your_receipt_here',
        ),
        i18n.t('subscription-payment.receipt'),
        i18n.t('subscription-payment.your_subscription_will_be_renewed_on'),
        i18n.t('subscription-payment.for_the_amount_of'),
      ]);
    }

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: emailPaymentConfirmationTitle,
      template: 'subscription-payment-confirmation',
      context: {
        title: emailPaymentConfirmationTitle,
        amount: `${mailData.data.amount}`,
        renewalDate: `${mailData.data.renewalDate}`,
        keyword: `${mailData.data.keyword}`,
        renewalPrice: `${mailData.data.renewalPrice}`,
        receiptUrl: `${mailData.data.receiptUrl}`,
        actionTitle: emailPaymentConfirmationTitle,
        app_name: this.configService.get('app.name', { infer: true }),
        helloAnd,
        thank_you_for_your_payment,
        of,
        hashtag,
        your_payment_has_been_processed_and_you_can_find_your_receipt_here,
        receipt,
        your_subscription_will_be_renewed_on,
        for_the_amount_of,
        for_as_a_word,
      },
    });
  }
}
