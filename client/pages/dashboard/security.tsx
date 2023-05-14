import { useContext, useEffect, useState } from "react";

import RootLayout from "@/components/Dashboard/Layout";
import { UserContext } from "@/contexts/userContext";
import {
	Box,
	styled,
	Paper,
	Avatar,
	Typography,
	Divider,
	OutlinedInput,
	Button,
	Switch,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Modal from "@/components/Dashboard/Modal";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Head from "next/head";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "rgba(251, 251, 251, 0.8)",
	border: "1px solid #E3E3E3",
	backdropFilter: "blur(100px)",
	textAlign: "center",
	height: "100%",
	borderRadius: "16px",
	color: theme.palette.text.secondary,
}));

const AntSwitch = styled(Switch)(({ theme }) => ({
	width: 43,
	height: 22,
	padding: 0,
	display: "flex",
	"&:active": {
		"& .MuiSwitch-thumb": {
			width: 15,
		},
		"& .MuiSwitch-switchBase.Mui-checked": {
			transform: "translateX(9px)",
		},
	},
	"& .MuiSwitch-switchBase": {
		padding: 0,
		"&.Mui-checked": {
			transform: "translateX(22px)",
			color: "#fff",
			"& + .MuiSwitch-track": {
				opacity: 1,
				backgroundColor:
					theme.palette.mode === "dark" ? "#0DA7F6" : "#0DA7F6",
			},
		},
	},
	"& .MuiSwitch-thumb": {
		boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
		width: 22,
		height: 22,
		borderRadius: 11,
		transition: theme.transitions.create(["width"], {
			duration: 200,
		}),
	},
	"& .MuiSwitch-track": {
		borderRadius: 18 / 2,
		opacity: 1,
		backgroundColor:
			theme.palette.mode === "dark"
				? "rgba(255,255,255,.35)"
				: "rgba(0,0,0,.25)",
		boxSizing: "border-box",
	},
}));

const DashboardSecurityPage = () => {
	const router = useRouter();
	const { updateUser, user, token } = useContext(UserContext);

	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(show => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const [twoFactorAuth, setTwoFactorAuth] = useState<boolean>();

	const [values, setValues] = useState({
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
	});
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleChangeTwoFactorAuth = (value?: boolean | undefined) => {
		if (value === false) {
			updateUser({ twoFactorAuth: false });
		} else {
			updateUser({ twoFactorAuth: true });
		}
	};

	const handleChangePassword = () => {
		updateUser({
			oldPassword: values.currentPassword,
			password: values.newPassword,
		});
	};

	useEffect(() => {
		if (user) {
			if (user.twoFactorAuth === true) {
				setTwoFactorAuth(true);
			}
		}
	}, []);

	if (!user) {
		return <div>loading...</div>;
	}

	return (
		<>
			<Head>
				<title>Dashboard - Security</title>
			</Head>
			<RootLayout>
				<Item
					sx={{
						display: {
							xs: "none",
							sm: "none",
							md: "block",
							lg: "block",
							xl: "block",
						},
						height: "822px",
						width: "100%",
					}}
				>
					{/* Name, profile photo, email  */}
					<Box
						style={{
							display: "flex",
							marginTop: "65px",
							marginLeft: "92px",
							marginRight: "92px",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						{/* Name and profile photo */}
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<Avatar
								sx={{
									bgcolor: "#6BBF52",
									width: "83px",
									height: "83px",
									fontSize: "40px",
									borderRadius: "21px",
								}}
								variant='square'
							>
								MA
							</Avatar>
							<Typography
								sx={{
									fontSize: "36px",
									fontWeight: "bold",
									marginLeft: "50px",
								}}
							>
								{user?.fullName}
							</Typography>
						</Box>
					</Box>
					<Divider sx={{ marginTop: "38px" }} />
					{/* Input fields */}
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							marginX: "92px",
							marginTop: "66px",
						}}
					>
						<Box
							sx={{
								width: "650px",
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
							}}
						>
							<Typography fontSize='36px'>
								Change your password:
							</Typography>

							<OutlinedInput
								value={values.currentPassword}
								placeholder='Current Password'
								sx={{
									height: "57px",
									width: "100%",
									marginTop: "45px",
									fontSize: "24px",
									background: "white",
									borderRadius: "15px",
								}}
								type={showPassword ? "text" : "password"}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
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
								onChange={e => {
									setValues({
										...values,
										currentPassword: e.target.value,
									});
								}}
							/>
							<OutlinedInput
								value={values.newPassword}
								placeholder='New Password'
								sx={{
									height: "57px",
									width: "100%",
									marginTop: "24px",
									fontSize: "24px",
									background: "white",
									borderRadius: "15px",
								}}
								onChange={e => {
									setValues({
										...values,
										newPassword: e.target.value,
									});
								}}
							/>
							<OutlinedInput
								value={values.confirmPassword}
								placeholder='Confirm Password'
								sx={{
									height: "57px",
									width: "100%",
									marginTop: "24px",
									fontSize: "24px",
									background: "white",
									borderRadius: "15px",
								}}
								onChange={e => {
									setValues({
										...values,
										confirmPassword: e.target.value,
									});
								}}
							/>
							<Box
								sx={{
									width: "100%",
									display: "flex",
									flexDirection: "row-reverse",
									marginTop: "32px",
								}}
							>
								<Button
									onClick={handleChangePassword}
									disableRipple
									variant='contained'
									sx={{
										height: "63px",
										width: "255px",
										background: "#0090EC",
										borderRadius: "15px",
										color: "#FBFBFB",
										fontWeight: 400,
										fontSize: "24px",
										boxShadow: "none",
										textTransform: "none",
									}}
								>
									Save Changes
								</Button>
							</Box>
						</Box>
						<Box sx={{ display: "flex", alignItems: "flex-start" }}>
							<Box sx={{ textAlign: "left" }}>
								<Typography fontSize='36px'>
									Two Factor Authentication
								</Typography>
								<Typography fontSize='14px'>
									We will send you a verification email
									everytime you login
								</Typography>
							</Box>
							<Switch
								sx={{ marginLeft: "100px" }}
								checked={twoFactorAuth}
								onChange={e => {
									if (user?.twoFactorAuth === true) {
										handleOpen();
									} else {
										handleChangeTwoFactorAuth();
										setTwoFactorAuth(true);
									}
									console.log("Clicked");
								}}
							/>
						</Box>
					</Box>
					<Typography
						textAlign='left'
						marginLeft='92px'
						marginTop='100px'
						sx={{ cursor: "pointer" }}
					>
						Delete account
					</Typography>
				</Item>

				{/* Mobile Profile View */}
				<Box
					sx={{
						display: {
							xs: "block",
							sm: "block",
							md: "none",
							lg: "none",
							xl: "none",
						},
						width: "100%",
						height: "100vh",
						padding: "0px 27px",
					}}
				>
					{/* Name, profile photo, email */}
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<Avatar
							sx={{
								bgcolor: "#6BBF52",
								width: "46px",
								height: "43px",
								fontSize: "20px",
								borderRadius: "8px",
							}}
							variant='square'
						>
							{user?.fullName.split(" ")[0].charAt(0)}
							{user?.fullName.split(" ")[1].charAt(0)}
						</Avatar>
						<Box>
							<Typography
								sx={{
									fontSize: "20px",
									fontWeight: "bold",
									marginLeft: "7px",
								}}
							>
								{user?.fullName}
							</Typography>
							<Typography
								sx={{
									fontSize: "16px",
									fontWeight: "bold",
									marginLeft: "7px",
									color: "#8C8C8C",
								}}
							>
								{user?.email}
							</Typography>
						</Box>
					</Box>

					<Typography
						sx={{
							fontSize: "20px",
							fontWeight: "400",
							margin: "44px  0 22px 0",
						}}
					>
						Change your account info:
					</Typography>
					{/* Current Password, New Password and confirm new Password */}
					<Box
						sx={{
							width: "100%",
							height: "353px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<OutlinedInput
							value={values?.currentPassword}
							placeholder='Current Password'
							sx={{
								height: "57px",
								width: "100%",
								fontSize: "24px",
								background: "white",
								borderRadius: "15px",
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
							onChange={e => {
								setValues({
									...values,
									currentPassword: e.target.value,
								});
							}}
						/>
						<OutlinedInput
							value={values?.newPassword}
							placeholder='New Password'
							sx={{
								height: "57px",
								width: "100%",
								fontSize: "24px",
								background: "white",
								borderRadius: "15px",
							}}
							onChange={e => {
								setValues({
									...values,
									newPassword: e.target.value,
								});
							}}
						/>

						<OutlinedInput
							value={values?.confirmPassword}
							placeholder='Confirm New Password'
							sx={{
								height: "57px",
								width: "100%",
								fontSize: "24px",
								background: "white",
								borderRadius: "15px",
							}}
							onChange={e => {
								setValues({
									...values,
									confirmPassword: e.target.value,
								});
							}}
						/>

						<Button color='error' sx={{ alignSelf: "flex-start" }}>
							Delete Account
						</Button>

						<Button
							sx={{
								background: "#0090EC",
								height: "44px",
								width: "209px",
								borderRadius: "13px",
								fontSize: "20px",
								fontWeight: 400,
								color: "white",
							}}
						>
							Save Changes
						</Button>
					</Box>
				</Box>

				<Modal
					title='Two factor Authentication off'
					open={open}
					handleClose={handleClose}
				>
					<Box>
						<Typography>
							You're about to disable two factor authentication.
							Are you sure about this action?
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							position: "absolute",
							bottom: 0,
							width: "90%",
							justifyContent: "space-between",
							margin: "0 auto",
							paddingBottom: "21px",
						}}
					>
						<Button
							color='info'
							variant='contained'
							sx={{ height: "42px", width: "154px" }}
							onClick={() => {
								handleChangeTwoFactorAuth(false);
								handleClose();
							}}
						>
							Sure
						</Button>
						<Button
							color='error'
							variant='contained'
							sx={{ height: "42px", width: "154px" }}
							onClick={() => {
								handleClose();
								setTwoFactorAuth(false);
							}}
						>
							Cancel
						</Button>
					</Box>
				</Modal>
			</RootLayout>
		</>
	);
};

export default DashboardSecurityPage;
