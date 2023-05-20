export interface User {
	id: string;
	fullName: string;
	email: string;
	createdAt?: Date;
	updatedAt?: Date;
	stripeCustomerId?: string;
	deletedAt?: Date;
	twoFactorAuth?: boolean;
	organisation?: any;
	country?: string;
}
