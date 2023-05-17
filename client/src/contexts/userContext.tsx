import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import { User } from "@/types/user";
import { api } from "@/utils/api";
import useDebounce from "@/hooks/useDebounce";

export interface IUserContext {
	token: string | null;
	refreshToken: string | null;
	user: User | null;
	values: {
		identifier: string;
		password: string;
		confirmPassword: string;
		fullName: string;
		email: string;
	};
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleLogin?: (e: React.FormEvent<HTMLFormElement>) => void;
	handleSignup?: (e: React.FormEvent<HTMLFormElement>) => void;
	updateUser: (values: any) => void;
	logout: () => void;
	resendOTP: (email: string) => void;
	verifyOtp: (otp: string) => void;
}

export const UserContext = createContext<IUserContext>({
	token: null,
	refreshToken: null,
	user: null,
	values: {
		identifier: "",
		password: "",
		fullName: "",
		email: "",
		confirmPassword: "",
	},
	handleChange: (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {},
	handleLogin: (e: React.FormEvent<HTMLFormElement>) => {},
	handleSignup: (e: React.FormEvent<HTMLFormElement>) => {},
	updateUser: (values: any) => {},
	logout: () => {},
	resendOTP: (email: string) => {},
	verifyOtp: (otp: string) => {},
});

export const UserProvider = ({ children }: any) => {
	const router = useRouter();
	const [values, setValues] = useState({
		identifier: "",
		email: "",
		fullName: "",
		password: "",
		confirmPassword: "",
	});

	const emailDebounceValue = useDebounce(values.email, 500);

	const [token, setToken] = useState<string | null>(null);
	const [refreshToken, setRefreshToken] = useState<string | null>(null);

	const [user, setUser] = useState<User | null>(null);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const res = await api.post("/auth/email/login", {
				identifier: values.identifier,
				password: values.password,
			});
			const data = res.data;

			if (res.status >= 400) {
				throw new Error();
			}
			if (data.user.twoFactorAuth) {
				setUser(data.user);
				router.push("/verification");
				return;
			}
			setToken(data.token);
			setRefreshToken(data.refreshToken);
			setUser(data.user);
			localStorage.setItem("token", data.token);
			localStorage.setItem("refreshToken", data.refreshToken);
			localStorage.setItem("user", JSON.stringify(data.user));
			setValues({
				identifier: "",
				email: "",
				fullName: "",
				password: "",
				confirmPassword: "",
			});
			router.push("/dashboard");
		} catch (err) {
			toast.error("Error logging in. Please try again.", {
				position: "top-right",
				autoClose: 5000,
			});
		}
	};

	const verifyOtp = async (otp: string) => {
		try {
			const res = await api.post("/auth/email/confirm", {
				otp,
			});
			const data = res.data;
			if (res.status >= 400) {
				throw new Error();
			}

			setToken(data.token);
			setRefreshToken(data.refreshToken);
			setUser(data.user);

			localStorage.setItem("token", data.token);
			localStorage.setItem("refreshToken", data.refreshToken);
			localStorage.setItem("user", JSON.stringify(data.user));
			setValues({
				identifier: "",
				email: "",
				fullName: "",
				password: "",
				confirmPassword: "",
			});
			toast.success("Email verified successfully", {
				position: "top-right",
				autoClose: 5000,
			});

			router.push("/dashboard");
		} catch (e) {
			toast.error("Error verifying otp. Please try again.", {
				position: "top-right",
				autoClose: 5000,
			});
		}
	};

	const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const res = await api.post("/auth/email/register", {
				fullName: values.fullName,
				email: values.email,
				password: values.password,
			});
			const data = res.data;

			if (res.status >= 400) {
				throw new Error();
			}
			router.push(`/verification?newUser=${values.email}`);

			setValues({
				identifier: "",
				email: "",
				fullName: "",
				password: "",
				confirmPassword: "",
			});
		} catch (err) {
			toast.error("Error signing up. Please try again.", {
				position: "bottom-right",
				autoClose: 5000,
			});
		}
	};

	const checkEmail = async (email: string) => {
		try {
			const res = await api.get("/auth/email/check", {
				params: {
					email,
				},
			});
			const data = res.data;
			if (res.status >= 400) {
				throw new Error();
			}
			if (data.exists) {
				toast.error("Email already exists", {
					position: "bottom-right",
					autoClose: 5000,
				});
			}
		} catch (err) {
			toast.error("Error checking email", {
				position: "top-right",
				autoClose: 5000,
			});
		}
	};

	const refreshAccessToken = async () => {
		const refreshToken = localStorage.getItem("refreshToken");
		if (refreshToken) {
			api.post("/auth/refreshToken", { refreshToken })
				.then(res => {
					if (res.status >= 400) {
						throw new Error();
					}
					const data = res.data;
					setToken(data.token);
					setRefreshToken(data.refreshToken);
					localStorage.setItem("token", data.token);
					localStorage.setItem("refreshToken", data.refreshToken);
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	const logout = () => {
		setToken(null);
		setRefreshToken(null);
		setUser(null);
		localStorage.removeItem("token");
		localStorage.removeItem("refreshToken");
		localStorage.removeItem("user");
		router.push("/login");
	};

	const updateUser = async (values: any) => {
		try {
			const res = await api.patch(
				"/auth/me",
				{ ...values },
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (res.status >= 400) {
				throw new Error();
			}

			const data = res.data;
			toast.success("User updated successfully", {
				position: "top-right",
				autoClose: 5000,
			});
		} catch (error) {
			toast.error("Error updating user", {
				position: "top-right",
				autoClose: 5000,
			});
		}
	};

	const resendOTP = async (email: string) => {
		try {
			const res = await api.post("/auth/email/resend/otp", {
				email,
			});
			if (res.status >= 400) {
				throw new Error();
			}
			toast.success("OTP sent successfully", {
				position: "bottom-right",
			});
		} catch (error) {
			toast.error("Error sending OTP", {});
		}
	};

	const getUserDetails = async () => {
		if (token) {
			try {
				const res = await api.get("/auth/me", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				const data = res.data;
				setUser(data);
			} catch (err) {
				console.log(err);
			}
		}
	};

	useEffect(() => {
		const tokenFromStorage = localStorage.getItem("token");

		if (tokenFromStorage) {
			setToken(tokenFromStorage);
			getUserDetails();
		}

		if (emailDebounceValue) {
			if (emailDebounceValue.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
				checkEmail(emailDebounceValue);
			}
		}
	}, [token, emailDebounceValue]);

	return (
		<UserContext.Provider
			value={{
				token,
				refreshToken,
				user,
				values,
				handleChange,
				handleLogin,
				handleSignup,
				updateUser,
				resendOTP,
				logout,
				verifyOtp,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
