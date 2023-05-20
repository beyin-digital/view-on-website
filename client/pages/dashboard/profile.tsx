import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
	Select,
	MenuItem,
	Button,
} from "@mui/material";
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

const DashboardProfilePage = () => {
	const router = useRouter();
	const { updateUser, user, token } = useContext(UserContext);

	const [values, setValues] = useState({
		fullName: "",
		organisation: "",
		country: "",
	});

	useEffect(() => {
		if (user) {
			setValues({
				fullName: user?.fullName,
				organisation: user?.organisation,
				country: "",
			});
		}
	}, []);

	if (!user) {
		return <div>loading...</div>;
	}

	const handleUpdateUser = async () => {
		updateUser({ ...values });
	};
	return (
		<>
			<Head>
				<title>Dashboard | Profile</title>
			</Head>
			<RootLayout>
				{/* Desktop Profile View */}
				<Item
					sx={{
						display: {
							xs: "none",
							sm: "none",
							lg: "block",
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
								{user?.fullName.split(" ")[0].charAt(0)}
								{user?.fullName.split(" ")[1].charAt(0)}
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
						<Typography sx={{ fontSize: "24px" }}>
							{user?.email}
						</Typography>
					</Box>
					<Divider sx={{ marginTop: "38px" }} />
					<Box
						sx={{
							marginTop: "67px",
							marginLeft: "92px",
							width: "650px",
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
						}}
					>
						<Typography fontSize='36px'>
							Change your account info:
						</Typography>

						<OutlinedInput
							value={values?.fullName}
							placeholder='Full Name'
							sx={{
								height: "57px",
								width: "100%",
								marginTop: "45px",
								fontSize: "24px",
								background: "white",
								borderRadius: "15px",
							}}
						/>
						<OutlinedInput
							value={values?.organisation}
							placeholder='Organisation'
							sx={{
								height: "57px",
								width: "100%",
								marginTop: "24px",
								fontSize: "24px",
								background: "white",
								borderRadius: "15px",
							}}
						/>
						<Select
							displayEmpty
							value={values.country}
							renderValue={(selected: any) => {
								if (selected.length === 0) {
									return (
										<Typography
											sx={{
												fontSize: "24px",
												textAlign: "left",
											}}
										>
											Country
										</Typography>
									);
								}
							}}
							sx={{
								height: "57px",
								width: "100%",
								marginTop: "24px",
								background: "white",
								borderRadius: "15px",
							}}
						>
							<MenuItem disabled value=''>
								State
							</MenuItem>
							<MenuItem value={1}>One</MenuItem>
						</Select>

						<Box
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "row-reverse",
								marginTop: "32px",
							}}
						>
							<Button
								onClick={handleUpdateUser}
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
				</Item>

				{/* Mobile Profile View */}
				<Box
					sx={{
						display: {
							xs: "block",
							sm: "block",
							lg: "none",
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
					{/* Full Name Organisation and Country Selection Input */}
					<Box
						sx={{
							width: "100%",
							height: "297px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<OutlinedInput
							value={values?.fullName}
							placeholder='Full Name'
							sx={{
								height: "57px",
								width: "100%",
								fontSize: "24px",
								background: "white",
								borderRadius: "15px",
							}}
						/>
						<OutlinedInput
							value={values?.organisation}
							placeholder='Organisation'
							sx={{
								height: "57px",
								width: "100%",
								fontSize: "24px",
								background: "white",
								borderRadius: "15px",
							}}
						/>
						<Select
							displayEmpty
							value={values.country}
							renderValue={(selected: any) => {
								if (selected.length === 0) {
									return (
										<Typography
											sx={{
												fontSize: "24px",
												textAlign: "left",
											}}
										>
											Country
										</Typography>
									);
								}
							}}
							sx={{
								height: "57px",
								width: "100%",
								background: "white",
								borderRadius: "15px",
							}}
						>
							<MenuItem disabled value=''>
								State
							</MenuItem>
						</Select>

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
			</RootLayout>
		</>
	);
};

export default DashboardProfilePage;
