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
      text: `${this.configService.get('app.frontendDomain', {
        infer: true,
      })}/confirm-email/${mailData?.data?.otp} ${emailConfirmTitle}`,
      template: 'activation',
      context: {
        title: emailConfirmTitle,
        actionTitle: emailConfirmTitle,
        otp: mailData?.data?.otp,
        app_name: this.configService.get('app.name', { infer: true }),
        text1,
        text2,
        text3,
      },
    });
  }

  async forgetPassword(mailData: MailData<{ hash: string }>): Promise<void> {
    const i18n = I18nContext.current();
    let forgetPasswordTitle: MaybeType<string>;
    let text1: MaybeType<string>;
    let text2: MaybeType<string>;
    let text3: MaybeType<string>;
    let text4: MaybeType<string>;

    if (i18n) {
      [forgetPasswordTitle, text1, text2, text3, text4] = await Promise.all([
        i18n.t('common.forgetPassword'),
        i18n.t('forget-password.text1'),
        i18n.t('forget-password.text2'),
        i18n.t('forget-password.text3'),
        i18n.t('forget-password.text4'),
      ]);
    }

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: forgetPasswordTitle,
      text: `${this.configService.get('app.frontendDomain', {
        infer: true,
      })}/en/change-password?token=${
        mailData?.data?.hash
      } ${forgetPasswordTitle}`,
      template: 'forget-password',
      context: {
        title: forgetPasswordTitle,
        url: decodeURIComponent(
          `${this.configService.get('app.frontendDomain', {
            infer: true,
          })}/en/change-password?token=${mailData?.data?.hash}`,
        ),
        actionTitle: forgetPasswordTitle,
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
    let twoFactorAuthTitle: MaybeType<string>;
    let text1: MaybeType<string>;
    let text2: MaybeType<string>;
    let text3: MaybeType<string>;

    if (i18n) {
      [twoFactorAuthTitle, text1, text2, text3] = await Promise.all([
        i18n.t('common.twoFactorAuth'),
        i18n.t('two-factor-auth.text1'),
        i18n.t('two-factor-auth.text2'),
        i18n.t('two-factor-auth.text3'),
      ]);
    }

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: twoFactorAuthTitle,
      text: `${this.configService.get('app.frontendDomain', {
        infer: true,
      })}/confirm-email/${mailData?.data?.otp} ${twoFactorAuthTitle}`,
      template: 'two-factor-auth',
      context: {
        title: twoFactorAuthTitle,
        actionTitle: twoFactorAuthTitle,
        otp: mailData?.data?.otp,
        app_name: this.configService.get('app.name', { infer: true }),
        text1,
        text2,
        text3,
      },
    });
  }

  async newSubscription(
    mailData: MailData<{
      letters: string;
      price: number;
      renewalDate: string;
      duration: string;
    }>,
  ): Promise<void> {
    const i18n = I18nContext.current();
    let newSubscriptionTitle: MaybeType<string>;
    let text1: MaybeType<string>;
    let text2: MaybeType<string>;
    let text3: MaybeType<string>;

    if (i18n) {
      [newSubscriptionTitle, text1, text2, text3] = await Promise.all([
        i18n.t('common.newSubscription'),
        i18n.t('new-subscription.text1'),
        i18n.t('new-subscription.text2'),
        i18n.t('new-subscription.text3'),
      ]);
    }

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: newSubscriptionTitle,
      template: 'new-subscription',
      context: {
        title: newSubscriptionTitle,
        letters: mailData?.data?.letters,
        price: mailData?.data?.price.toLocaleString('en-GB'),
        renewalDate: mailData?.data?.renewalDate,
        duration: mailData?.data?.duration,
        app_name: this.configService.get('app.name', { infer: true }),
        text1,
        text2,
        text3,
      },
    });
  }

  async premium(
    mailData: MailData<{
      letters: string;
      price: number;
    }>,
  ): Promise<void> {
    const i18n = I18nContext.current();
    let premiumTitle: MaybeType<string>;
    let text1: MaybeType<string>;
    let text2: MaybeType<string>;
    let text3: MaybeType<string>;

    if (i18n) {
      [premiumTitle, text1, text2, text3] = await Promise.all([
        i18n.t('common.premium'),
        i18n.t('premium.text1'),
        i18n.t('premium.text2'),
        i18n.t('premium.text3'),
      ]);
    }

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: premiumTitle,
      template: 'premium',
      context: {
        title: premiumTitle,
        letters: mailData?.data?.letters,
        price: mailData?.data?.price.toLocaleString('en-GB'),
        app_name: this.configService.get('app.name', { infer: true }),
        text1,
        text2,
        text3,
      },
    });
  }

  async cancelSubscription(mailData: MailData): Promise<void> {
    const i18n = I18nContext.current();
    let subscriptionCancellationTitle: MaybeType<string>;

    if (i18n) {
      [subscriptionCancellationTitle] = await Promise.all([
        i18n.t('common.subscriptionCancellation'),
      ]);
    }

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: subscriptionCancellationTitle,
      template: 'subscription-cancellation',
      context: {
        title: subscriptionCancellationTitle,
      },
    });
  }

  async sendRenewalNotice(mailData: MailData): Promise<void> {
    const i18n = I18nContext.current();
    let renewalNoticeTitle: MaybeType<string>;

    if (i18n) {
      [renewalNoticeTitle] = await Promise.all([
        i18n.t('common.renewalNotice'),
      ]);
    }

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: renewalNoticeTitle,
      template: 'subscription-cancellation',
      context: {
        title: renewalNoticeTitle,
      },
    });
  }

  async sendRenewalFailed(mailData: MailData): Promise<void> {
    const i18n = I18nContext.current();
    let subscriptionRenewalFailedTitle: MaybeType<string>;

    if (i18n) {
      [subscriptionRenewalFailedTitle] = await Promise.all([
        i18n.t('common.subscriptionRenewalFailed'),
      ]);
    }

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: subscriptionRenewalFailedTitle,
      template: 'subscription-renewal-failed',
      context: {
        title: subscriptionRenewalFailedTitle,
      },
    });
  }
}
