import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import { User } from "@/types/user";
import { api } from "@/utils/api";

export interface IUserContext {
	token: string | null;
	refreshToken: string | null;
	user: User | null;
	values: {
		identifier: string;
		password: string;
	};
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleLogin?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const UserContext = createContext<IUserContext>({
	token: null,
	refreshToken: null,
	user: null,
	values: { identifier: "", password: "" },
	handleChange: (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {},
	handleLogin: (e: React.FormEvent<HTMLFormElement>) => {},
});

export const UserProvider = ({ children }: any) => {
	const router = useRouter();
	const [values, setValues] = useState({
		identifier: "",
		email: "",
		fullName: "",
		password: "",
	});

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
			console.log(data);
			toast.success("Login successful", {
				position: "top-right",
				autoClose: 5000,
			});

			setToken(data.token);
			setRefreshToken(data.refreshToken);
			setUser(data.user);

			localStorage.setItem("token", data.token);
			localStorage.setItem("refreshToken", data.refreshToken);
			localStorage.setItem("user", JSON.stringify(data.user));

			router.push("/dashboard");
		} catch (err) {
			toast.error("Error logging in. Please try again.", {
				position: "top-right",
				autoClose: 5000,
			});
		}
	};

	const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const res = await api.post("/auth/email/register", {
				fullName: values.identifier,
				email: values.password,
				password: values.password,
			});
			const data = res.data;

			if (res.status >= 400) {
				throw new Error();
			}
			console.log(data);
			toast.success("Signup successful", {
				position: "top-right",
				autoClose: 5000,
			});

			router.push("/verification");
		} catch (err) {
			toast.error("Error signing up. Please try again.", {
				position: "top-right",
				autoClose: 5000,
			});
		}
	};

	const refreshAccesToken = () => {
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
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		const refreshToken = localStorage.getItem("refreshToken");
		const user = localStorage.getItem("user");

		if (token && refreshToken && user) {
			const decodedToken: any = jwt.decode(token);
			const now = new Date();

			if (decodedToken.exp * 1000 < now.getTime()) {
				refreshAccesToken();
				// router.push("/dashboard");
			} else {
				setToken(token);
				setRefreshToken(refreshToken);
				setUser(JSON.parse(user));
				// router.push("/dashboard");
			}
		}
	}, []);

	return (
		<UserContext.Provider
			value={{
				token,
				refreshToken,
				user,
				values,
				handleChange,
				handleLogin,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
