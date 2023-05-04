export interface IUser {
	id: string;
	fullName: string;
	email: string;
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
}
