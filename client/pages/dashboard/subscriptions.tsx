import RootLayout from "@/components/Dashboard/Layout";
import { KeywordContext } from "@/contexts/keywordContext";
import { UserContext } from "@/contexts/userContext";
import {
	styled,
	Paper,
	Typography,
	Avatar,
	Box,
	Button,
	Divider,
} from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "rgba(251, 251, 251, 0.8)",
	border: "1px solid #E3E3E3",
	backdropFilter: "blur(100px)",
	textAlign: "center",
	height: "100%",
	borderRadius: "16px",
	color: theme.palette.text.secondary,
}));
const DashboardSubscriptionsPage = () => {
	const router = useRouter();
	const { getUserSubscriptions, subscriptions } = useContext(KeywordContext);
	const { token, user } = useContext(UserContext);

	useEffect(() => {
		if (token) {
			getUserSubscriptions();
		}
	}, [token]);

	console.log(subscriptions);
	return (
		<RootLayout>
			<Item
				sx={{
					display: {
						xs: "none",
						md: "none",
						lg: "block",
					},
					height: "822px",
					width: "100%",
				}}
			>
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
							{user?.fullName
								.split(" ")[0]
								.charAt(0)
								.toUpperCase()}
							{user?.fullName
								.split(" ")[1]
								.charAt(0)
								.toUpperCase()}
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
					<Button
						onClick={() => {
							router.push("/subscribe");
						}}
						sx={{
							background: "#31E816",
							width: "311px",
							height: "59px",
							borderRadius: "16px",
							fontSize: "32px",
							fontWeight: "400",
							color: "#343132",
						}}
						endIcon={<FiArrowUpRight size={40} />}
					>
						ADD MORE
					</Button>
				</Box>
				<Divider sx={{ marginTop: "38px", marginX: "57px" }} />
				<Box
					sx={{
						marginTop: "54px",
						marginLeft: "92px",
						display: "flex",
						flexDirection: "column",
						alignItems: "start",
					}}
				>
					<Typography fontSize='36px'>Your Plans:</Typography>
					{/* Subscription cards */}
					<Box
						sx={{
							display: "flex",
							width: "100%",
							justifyContent: "flex-start",
						}}
					>
						{/* Regular sub card */}
						{subscriptions.map(subscription => (
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									height: "343px",
									width: "312px",
									marginRight: "50px",
								}}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
										height: "59px",
										backgroundColor: "#31E716",
										borderRadius: "16px",
									}}
								>
									<Typography fontSize='32px'>
										#
										{subscription?.keyword?.letters.toUpperCase()}
									</Typography>
								</Box>
								<Box
									sx={{
										height: "222px",
										width: "100%",
										display: "flex",
										flexDirection: "column",
										background: "#FBFBFB99",
										borderRadius: "24px",
									}}
								>
									{/* Price and duration */}
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
											marginX: "38px",
											marginTop: "28px",
										}}
									>
										{/* Price */}
										<Box>
											<Typography
												fontSize='32px'
												textAlign='left'
											>
												${subscription.amount}
											</Typography>
											<Typography textAlign='left'>
												{
													subscription.stripeSubscriptionStatus
												}
											</Typography>
										</Box>
										{/* Length */}
										<Box>
											<Typography fontSize='20px'>
												{subscription.duration} <br />
												package
											</Typography>
										</Box>
									</Box>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between",
											marginTop: "32px",
											height: "48px",
										}}
									>
										<Typography>
											Date bought:
											{new Date(
												subscription.purchaseDate
											).toLocaleDateString("en-GB")}
										</Typography>
										<Typography>
											Next renewal:{" "}
											{new Date(
												subscription.renewalDate
											).toLocaleDateString("en-GB")}
										</Typography>
									</Box>
								</Box>
								<Typography fontSize='14px'>
									Unsubscribe
								</Typography>
							</Box>
						))}
						{/* Premium Card */}
						{/* <Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								height: "343px",
								width: "374px",
								marginRight: "50px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "100%",
									height: "59px",
									background:
										"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
									borderRadius: "16px",
								}}
							>
								<Typography fontSize='32px'>#VOW</Typography>
							</Box>
							<Box
								sx={{
									height: "222px",
									width: "100%",
									display: "flex",
									flexDirection: "column",
									background: "#FBFBFB99",
									borderRadius: "24px",
								}}
							>
								Price and duration
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										marginX: "38px",
										marginTop: "28px",
									}}
								>
									Price
									<Box>
										<Typography
											fontSize='32px'
											textAlign='left'
										>
											$100k
										</Typography>
										<Typography textAlign='left'>
											Paid
										</Typography>
									</Box>
									Length
									<Box>
										<Typography
											fontSize='32px'
											textAlign='left'
										>
											$3.65
										</Typography>
										<Typography textAlign='left'>
											Yearly renewal
										</Typography>
									</Box>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										marginTop: "32px",
										height: "48px",
									}}
								>
									<Typography>
										Date bought: 1/2/2023
									</Typography>
									<Typography>
										Next renewal: 2/8/2023
									</Typography>
								</Box>
							</Box>
							<Typography fontSize='14px'>Unsubscribe</Typography>
						</Box> */}
					</Box>
				</Box>
			</Item>

			<Item
				sx={{
					display: {
						xs: "block",
						md: "block",
						lg: "none",
					},
					height: "100vh",
					width: "100%",
					padding: "0px 27px",
					marginTop: "-110px",
				}}
			>
				{/* Name avatar and email */}
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						marginTop: "44px",
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

				<Box
					sx={{
						display: "flex",
						width: "100%",
						minHeight: "100%",
					}}
				>
					{subscriptions.map(subscription => (
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								height: "357px",
								width: "100%",
								marginTop: "42px",
								// marginRight: "50px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "100%",
									height: "59px",
									backgroundColor: "#31E716",
									borderRadius: "13px",
								}}
							>
								<Typography fontSize='20px' fontWeight={700}>
									#
									{subscription.keyword.letters.toUpperCase()}
								</Typography>
							</Box>
							<Box
								sx={{
									height: "222px",
									width: "100%",
									display: "flex",
									flexDirection: "column",
									background: "#FBFBFB99",
									borderRadius: "24px",
								}}
							>
								{/* Price and duration */}
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										marginX: "38px",
										marginTop: "28px",
									}}
								>
									{/* Price */}
									<Box>
										<Typography
											fontSize='32px'
											textAlign='left'
										>
											${subscription.amount}
										</Typography>
										<Typography textAlign='left'>
											{
												subscription.stripeSubscriptionStatus
											}
										</Typography>
									</Box>
									{/* Length */}
									<Box>
										<Typography fontSize='20px'>
											{subscription.duration} <br />
											package
										</Typography>
									</Box>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										marginTop: "32px",
										height: "48px",
									}}
								>
									<Typography>
										Date bought:
										{new Date(
											subscription.purchaseDate
										).toLocaleDateString("en-GB")}
									</Typography>
									<Typography>
										Next renewal:{" "}
										{new Date(
											subscription.renewalDate
										).toLocaleDateString("en-GB")}
									</Typography>
								</Box>
							</Box>
							<Typography fontSize='14px'>Unsubscribe</Typography>
						</Box>
					))}
				</Box>
			</Item>
		</RootLayout>
	);
};

export default DashboardSubscriptionsPage;
