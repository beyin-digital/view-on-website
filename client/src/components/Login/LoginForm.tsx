import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import {
	Box,
	Typography,
	OutlinedInput,
	InputAdornment,
	IconButton,
	Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import LoginTextSignUp from "./LoginTextSignUp";
import { IconsStyle } from "../Button";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import Image from "next/image";
import { UserContext } from "@/contexts/userContext";

const LoginForm = () => {
	const { t } = useTranslation("login");

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

	const icon = [
		{
			id: 1,
			icon: "/icons/google.svg",
			alt: "Google Icon",
			title: "Google Icon",
			link: "https://google.com",
		},
		{
			id: 2,
			icon: "/icons/apple.svg",
			alt: "Apple Icon",
			title: "Apple Icon",
			link: "https://apple.com",
		},
	];

	const handleSubmit = () => {
		console.log(values);
	};

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
						height: { xs: "47px", md: "50px", xl: "60px" },
						fontSize: "24px",
						lineHeight: "28px",
						background: "#FBFBFB",
						borderRadius: "10px",
						marginY: ".3rem",
						border: "1 solid #E3E3E3",
						boxShadow:
							" 0px 27.8156px 45.7611px rgba(0, 0, 0, 0.03)",

						".MuiOutlinedInput-notchedOutline": {
							border: "0",
							padding: "9px",
						},
						"&:hover > .MuiOutlinedInput-notchedOutline": {
							border: "0",
						},
					}}
					onChange={handleChange}
					placeholder={`${t("input_email")}`}
				/>
				<OutlinedInput
					name='password'
					value={values.password}
					sx={{
						width: "100",
						height: { xs: "47px", md: "50px", xl: "60px" },
						fontSize: "24px",
						lineHeight: "28px",
						background: "#FBFBFB",
						borderRadius: "10px",
						border: "1 solid #E3E3E3",
						marginY: ".3rem",
						boxShadow:
							" 0px 27.8156px 45.7611px rgba(0, 0, 0, 0.03)",
						".MuiOutlinedInput-notchedOutline": {
							border: "0",
							padding: "9px",
						},
						"&:hover > .MuiOutlinedInput-notchedOutline": {
							border: "0",
						},
					}}
					className='loginButton'
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
					placeholder={`${t("input_password")}`}
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
						{t("forget")}
					</Typography>
				</Link>
			</Box>
			<Box
				sx={{
					marginY: "1rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				{/* login  */}
				<Box
					sx={{
						width: {
							xs: "240px",
							sm: "300px",
							md: "300px",
							xl: "320px",
						},
						display: "flex",
						justifyContent: "end",
						background: "#0090EC",
						borderRadius: "16px",
					}}
				>
					<Button
						sx={{
							paddingX: "18px",
							height: "59px",
							width: { xs: "220px", md: "231px", xl: "271px" },
							display: "flex",
							justifyContent: "space-around",
						}}
						onClick={handleSubmit}
						type='submit'
						title={`${t("login")}`}
					>
						<Typography
							sx={{
								letterSpacing: "0.02em",
								fontSize: {
									xs: "20px",
									md: "25px",
									xl: "32px",
								},
								fontWeight: 400,
								lineHeight: "40px",
								color: "#FBFBFB",
								textTransform: "uppercase",
							}}
						>
							{t("login")}
						</Typography>
						<IconsStyle />
					</Button>
				</Box>
				{/*  */}

				<LoginTextSignUp />
				{/*  */}
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						marginTop: "1rem",
					}}
					className='BoxSignInWith'
				>
					<Typography>{t("sign_up")}</Typography>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-evenly",
							margin: "auto 1rem",
						}}
					>
						{icon.map(item => (
							<Link href={item.link} key={item.id}>
								<Image
									src={item.icon}
									alt={item.alt}
									title={item.title}
									height={35}
									width={35}
									style={{
										margin: "auto .2rem",
									}}
								/>
							</Link>
						))}
					</Box>
				</Box>
			</Box>
		</form>
	);
};

export default LoginForm;
