import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import {
	Box,
	Typography,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import LoginTextSignUp from "./LoginTextSignUp";
import { ButtonLogin } from "../Button";
import Link from "next/link";
import { UserContext } from "@/contexts/userContext";

const LoginForm = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(show => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const { token, refreshToken, values, handleChange, handleLogin } =
		useContext(UserContext);

	console.log("Token", token);
	console.log("Refresh Token", refreshToken);

	useEffect(() => {
		if (token) {
			router.push("/dashboard");
		}
	}, [token, refreshToken]);
	return (
		<form onSubmit={handleLogin}>
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
					onChange={handleChange}
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
					onChange={handleChange}
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
				<ButtonLogin name='login' type='submit' />
				<LoginTextSignUp />
			</Box>
		</form>
	);
};

export default LoginForm;
