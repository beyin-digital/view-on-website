export interface IUser {
	id: string;
	fullName: string;
	email: string;
<<<<<<< HEAD
	photo?: string;
	createdAt: string;
	updatedAt: string;
	role: any;
}

export interface GenericResponse {
	status: string;
	message: string;
}

export interface ILoginResponse {
	token: string;
	refreshToken: string;
	user: IUser;
}

export interface IUserResponse {
	status: string;
	data: {
		user: IUser;
	};
=======
	createdAt?: Date;
	updatedAt?: Date;
	stripeCustomerId?: string;
	deletedAt?: Date;
	twoFactorAuth?: boolean;
	organisation?: any;
	country?: string;
>>>>>>> origin/feat-api-integration-final
}
