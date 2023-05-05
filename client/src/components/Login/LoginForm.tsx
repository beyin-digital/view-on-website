import { useEffect, useState } from "react";
import {
	Box,
	Typography,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";

import { useRouter } from "next/router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";

import { getMeFn, loginUserFn } from "@/api/authApi";
import { useStateContext } from "@/contexts";

import LoginTextSignUp from "./LoginTextSignUp";
import { ButtonLogin } from "../Button";
import Link from "next/link";

const loginSchema = object({
	identifier: string().min(1, "Email address or keyword is required"),
	password: string()
		.min(1, "Password is required")
		.min(8, "Password must be more than 8 characters")
		.max(32, "Password must be less than 32 characters"),
});

export type LoginInput = TypeOf<typeof loginSchema>;

const LoginForm = () => {
	const router = useRouter();

	const [showPassword, setShowPassword] = useState(false);

	const [values, setValues] = useState({
		identifier: "",
		password: "",
	});

	const handleClickShowPassword = () => setShowPassword(show => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const stateContext = useStateContext();

	const query = useQuery(["authUser"], getMeFn, {
		enabled: false,
		select: data => data.data.user,
		retry: 1,
		onSuccess: data => {
			stateContext.dispatch({ type: "SET_USER", payload: data });
		},
	});

	const { mutate: loginUser, isLoading } = useMutation(
		(userData: any) => loginUserFn(userData),
		{
			onSuccess: () => {
				query.refetch();
				toast.success("You successfully logged in");
				router.push("/");
			},
			onError: (error: any) => {
				if (Array.isArray((error as any).response.data.error)) {
					(error as any).response.data.error.forEach((el: any) =>
						toast.error(el.message, {
							position: "top-right",
						})
					);
				} else {
					toast.error((error as any).response.data.message, {
						position: "top-right",
					});
				}
			},
		}
	);

	const handleSubmit = () => {
		console.log(values);
		loginUser({
			identifier: values.identifier,
			password: values.password,
		});
	};

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
				}}
			>
				<OutlinedInput
					name='identifier'
					value={values.identifier}
					sx={{
						width: "100",
						height: { xs: "47px", md: "50px", xl: "65px" },
						fontSize: {
							xs: "18px",
							sm: "22px",
							md: "28px",
							xl: "32px",
						},
						lineHeight: "28px",
						background: "#FBFBFB",
						border: "0.897277px solid #E3E3E3",
						borderRadius: "10px",
						marginY: ".5rem",
						boxShadow:
							" 0px 27.8156px 45.7611px rgba(0, 0, 0, 0.03)",
						".mui-style-1d3z3hw-MuiOutlinedInput-notchedOutline": {
							border: 0,
						},
					}}
					onChange={e =>
						setValues({ ...values, identifier: e.target.value })
					}
					placeholder='Email or #keyword'
				/>
				<OutlinedInput
					name='password'
					value={values.password}
					sx={{
						width: "100",
						height: { xs: "47px", md: "50px", xl: "65px" },
						fontSize: {
							xs: "18px",
							sm: "22px",
							md: "28px",
							xl: "32px",
						},
						lineHeight: "28px",
						background: "#FBFBFB",
						border: "0.897277px solid #E3E3E3",
						borderRadius: "10px",
						marginY: ".5rem",
						boxShadow:
							" 0px 27.8156px 45.7611px rgba(0, 0, 0, 0.03)",

						".mui-style-1d3z3hw-MuiOutlinedInput-notchedOutline": {
							border: 0,
						},
					}}
					type={showPassword ? "text" : "password"}
					endAdornment={
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge='end'
							>
								{showPassword ? (
									<VisibilityOff />
								) : (
									<Visibility />
								)}
							</IconButton>
						</InputAdornment>
					}
					onChange={e =>
						setValues({ ...values, password: e.target.value })
					}
					placeholder='Password'
				/>
			</Box>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "end",
					alignItems: "end",
				}}
			>
				<Link
					href=''
					style={{
						textDecoration: "none",
						color: "inherit",
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "13px", xl: "16px" },
							fontWeight: "300",
							lineHeight: "14px",
						}}
					>
						Forgot Password?
					</Typography>
				</Link>
			</Box>
			<Box
				sx={{
					marginY: "2rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<ButtonLogin
					name='login'
					type='submit'
					onClick={handleSubmit}
				/>
				<LoginTextSignUp />
			</Box>
		</>
	);
};

export default LoginForm;
