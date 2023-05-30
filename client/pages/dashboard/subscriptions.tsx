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
import { useContext, useEffect, useState } from "react";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Head from "next/head";

import dynamic from "next/dynamic";
import { nFormatter } from "@/utils/nFormatter";
import Modal from "@/components/Dashboard/Modal";

const RootLayout = dynamic(() => import("@/components/Dashboard/Layout"), {
	ssr: false,
});
const Navbar = dynamic(() => import("@/components/Dashboard/Navbar"), {
	ssr: false,
});

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "rgba(251, 251, 251, 0.8)",
	border: "1px solid #E3E3E3",
	backdropFilter: "blur(100px)",
	textAlign: "center",
	height: "100%",
	borderRadius: "16px",
	color: theme.palette.text.secondary,
}));
const ItemMobile = styled(Paper)(({ theme }) => ({
	backgroundColor: "rgba(251, 251, 251, 0.8)",
	border: "1px solid #E3E3E3",
	backdropFilter: "blur(100px)",
	textAlign: "center",
	// height: "100%",
	borderRadius: "16px",
	color: theme.palette.text.secondary,
}));
const DashboardSubscriptionsPage = () => {
	const { t } = useTranslation("subscriptionsDash");
	const router = useRouter();
	const { locale } = useRouter();
	const { getUserSubscriptions, subscriptions, handleUnsubscribe } = useContext(
		KeywordContext,
	);
	const { token, user } = useContext(UserContext);
	const [isScrollable, setIsScrollable] = useState(subscriptions.length > 3);

	useEffect(() => {
		if (token) {
			getUserSubscriptions();
		}
	}, [token]);

	const [open, setOpen] = useState(false);
	const [selectedKeyword, setSelectedKeyword] = useState<any>({});

	const handleOpen = (keyword: any) => {
		setOpen(true);
		setSelectedKeyword(keyword);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Head>
				<title>{t("meta_title")} </title>
				<meta name="description" content={`${t("meta_description")}`} />
				<meta name="keyword" content={`${t("meta_keyword")}`} />
				<link
					rel="canonical"
					href="https://wiewonwebsite.com/en/illustration"
				/>{" "}
				<link rel="icon" href="/favicon.ico" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>{" "}
			<Box
				sx={{
					width: "100%",
					display: { xs: "block", md: "none" },
					position: "absolute",
					top: "0",
					zIndex: "999999",
				}}
			>
				<Navbar />
			</Box>
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
									textTransform: "uppercase",
								}}
								variant="square"
							>
								{user?.fullName?.split(" ")[0]?.charAt(0)?.toUpperCase()}
								{user?.fullName?.split(" ")[1]?.charAt(0)?.toUpperCase()}
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
								router.push(`/${router.locale}/subscribe`);
							}}
							sx={{
								background: "#31E816",
								width: "311px",
								height: "59px",
								borderRadius: "16px",
								fontSize: "32px",
								fontWeight: "400",
								color: "#343132",
								"&:hover ": {
									background: "#31E816",
								},
							}}
							endIcon={
								<>
									{locale === "ar" ? (
										<FiArrowUpLeft
											size={40}
											style={{
												marginRight: "15px",
											}}
										/>
									) : (
										<FiArrowUpRight size={40} />
									)}
								</>
							}
						>
							{t("add_more")}
						</Button>
					</Box>
					<Divider sx={{ marginTop: "38px", marginX: "57px" }} />
					<Box
						sx={{
							marginTop: "54px",
							display: "flex",
							flexDirection: "column",
							alignItems: "start",
						}}
						className="profileDashboard"
					>
						<Typography fontSize="36px">{t("plan")} :</Typography>
						{/* Subscription cards */}
						<Box
							sx={{
								display: "flex",
								width: "100%",
								justifyContent: "flex-start",
								height: "100%",
								overflowX: "auto",
								overflowY: isScrollable ? "hidden" : "auto",
								maxHeight: isScrollable ? "100%" : "auto",
							}}
						>
							{/* Regular sub card */}
							{subscriptions?.map((subscription: any) => (
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										height: "343px",
										width: "300px",
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
											background: subscription?.isPremium
												? "linear-gradient(270deg, #0090EC 0%, #31E716 100%)"
												: "#31E716",

											borderRadius: "16px",
										}}
									>
										<Typography fontSize="32px" fontWeight="bold">
											#{subscription?.letters.toUpperCase()}
										</Typography>
									</Box>
									<Box
										sx={{
											height: "222px",
											width: "300px",
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
												alignItems: "center",
											}}
										>
											{/* Price */}
											<Box>
												<Typography fontSize="32px" textAlign="left">
													$
													{subscription.purchaseAmount >= 999999
														? "1m"
														: subscription.purchaseAmount === 100000
														? nFormatter(subscription.purchaseAmount, 3)
														: subscription.purchaseAmount === 10000
														? nFormatter(subscription.purchaseAmount, 3)
														: nFormatter(subscription.purchaseAmount, 3)}
												</Typography>

												<Typography textAlign="left">{t("paid")}</Typography>
											</Box>
											{/* Length */}
											<Box>
												{subscription?.isPremium ? (
													<>
														<Typography fontSize="20px">
															Premium
															<br /> letter
														</Typography>
													</>
												) : (
													<>
														<Typography fontSize="20px">
															{subscription?.duration}
															ly <br />
														</Typography>
														<Typography>{t("package")}</Typography>
													</>
												)}
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
												{t("date_next")} :
												{new Date(subscription.purchaseDate).toLocaleDateString(
													"en-GB",
												)}
											</Typography>
											{!subscription?.isPremium && (
												<Typography>
													{t("date_bought")} :
													{new Date(
														subscription.renewalDate,
													).toLocaleDateString("en-GB")}
												</Typography>
											)}
										</Box>
									</Box>
									{!subscription.isPremium && (
										<Typography
											sx={{ cursor: "pointer" }}
											onClick={() => {
												handleOpen(subscription);
											}}
											fontSize="14px"
										>
											{t("unsubscribe")}
										</Typography>
									)}
									{t("unsubscribe")}
								</Box>
							))}
						</Box>
					</Box>
				</Item>
				{/* Mobile */}
				<ItemMobile
					sx={{
						display: {
							xs: "block",
							md: "flex",
							lg: "none",
						},
						width: { md: "100%" },
						padding: "17px",
						marginX: { xs: "10px", sm: "15px" },
						flexDirection: "column",
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
								textTransform: "uppercase",
							}}
							variant="square"
						>
							{user?.fullName?.split(" ")[0]?.charAt(0)}
							{user?.fullName?.split(" ")[1]?.charAt(0)}
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
							flexDirection: "column",
							overflowY: isScrollable ? "scroll" : "auto",
							maxHeight: isScrollable ? "100%" : "auto",
						}}
					>
						{subscriptions?.map((subscription: any) => (
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									height: "357px",
									width: "100%",
									marginTop: "42px",
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
									<Typography fontSize="24px" fontWeight={700}>
										#{subscription?.keyword?.letters.toUpperCase()}
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
											flexDirection: { xs: "column", sm: "row" },
											marginX: "38px",
											marginTop: "28px",
											alignItems: "center",
										}}
									>
										{/* Price */}
										<Box>
											<Typography fontSize="32px" textAlign="left">
												${subscription.purchaseAmount}
											</Typography>
											<Typography textAlign="left">
												{subscription.stripeSubscriptionStatus}
											</Typography>
										</Box>
										{/* Length */}
										<Box>
											<Typography fontSize="20px">
												{subscription.duration}
												<br />
												{t("package")}
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
											{t("date_bought")} :
											{new Date(subscription.purchaseDate).toLocaleDateString(
												"en-GB",
											)}
										</Typography>
										<Typography>
											{t("date_next")} :{" "}
											{new Date(subscription.renewalDate).toLocaleDateString(
												"en-GB",
											)}
										</Typography>
									</Box>
								</Box>
								{!subscription.isPremium && (
									<Typography
										sx={{ cursor: "pointer" }}
										onClick={() => {
											handleOpen(subscription);
										}}
										fontSize="14px"
									>
										{t("unsubscribe")}
									</Typography>
								)}
								<Typography
									sx={{ cursor: "pointer" }}
									onClick={() => {
										handleOpen(subscription);
									}}
									fontSize="14px"
								>
									{t("unsubscribe")}
								</Typography>
							</Box>
						))}
					</Box>
				</ItemMobile>
				<Modal
					title="unsubscribe from keyword"
					open={open}
					handleClose={handleClose}
				>
					<Box>
						<Typography>
							you're about to unsubscribe from keyword #
							{selectedKeyword?.letters}
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
							color="info"
							variant="contained"
							sx={{ height: "42px", width: "154px" }}
							onClick={() => {
								handleUnsubscribe(selectedKeyword?.id);
							}}
						>
							Unsubscribe
						</Button>
						<Button
							color="error"
							variant="contained"
							sx={{ height: "42px", width: "154px" }}
							onClick={() => {
								handleClose();
							}}
						>
							{t("cancel_security")}
						</Button>
					</Box>
				</Modal>
			</RootLayout>
		</>
	);
};
export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", [
				"common",
				"subscriptionsDash",
			])),
		},
	};
};

export default DashboardSubscriptionsPage;
