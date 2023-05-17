import Layout from "@/components/Layout/Layout";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { MuiOtpInput } from "mui-one-time-password-input";
import React, { useContext, useEffect } from "react";
import { UserContext } from "@/contexts/userContext";
import useCountdown from "@/hooks/useCountdown";
import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { useTranslation } from "next-i18next";
import { IconsStyle } from "@/components/Button";

const VerificationPage = () => {
	const { t } = useTranslation("verification");

	const router = useRouter();
	const [otp, setOtp] = React.useState("");
	const handleChange = (newValue: any) => {
		setOtp(newValue);
	};

	const { secondsLeft, start } = useCountdown();

	const { user, values, verifyOtp, resendOTP } = useContext(UserContext);

	useEffect(() => {
		start(10);
	}, [user]);

	return (
		<>
			<Head>
				<title>{t("meta_title")}</title>
				<meta name="description" content="" />
				<meta name="keyword" content="" />
				<meta property="og:image" content="" />
				<link rel="icon" href="/images/logo.svg" />
			</Head>
			<Layout>
				<Grid
					sx={{
						width: "100%",
						height: { xs: "90%", md: "100%" },
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						transform: "skew(16deg, 0deg)",
					}}
				>
					<Container
						sx={{
							width: { xs: "100%", md: "50%", xl: "50%" },
							height: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "space-evenly",
							position: "relative",
							marginY: {
								xs: "4rem",
								sm: "4rem",
								md: "1rem",
								xl: "0rem",
							},
							paddingY: "1rem",
						}}
						className="VerificationPageCenter"
					>
						<Box
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Image
								src="/icons/message.svg"
								alt="View On Website Icon message"
								title="View On Website Icon message"
								height={78}
								width={78}
							/>
							<Typography
								sx={{
									fontSize: {
										xs: "22px",
										md: "27px",
										xl: "32px",
									},
									fontWight: "300",
									lineHeight: "29px",
								}}
							>
								{t("title")}
							</Typography>
						</Box>
						<Box
							sx={{
								width: {
									xs: "100%",
									sm: "60%",
									md: "90%",
									xl: "70%",
								},
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "20px", xl: "24px" },
									fontWight: "100",
									color: "#A0A9AB",
									lineHeight: "28px",
									textAlign: "center",
									marginBottom: "2rem",
									paddingX: ".5rem",
								}}
							>
								Enter the authenrication code we sent to Your email{" "}
								{router.query.newUser ? router.query.newUser : user?.email}{" "}
								below:
								{t("desc")}
							</Typography>
							<Box
								sx={{
									width: "100%",
									height: "75px",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-evenly",
								}}
							>
								<MuiOtpInput
									value={otp}
									onChange={handleChange}
									length={6}
									className="myClassName "
									sx={{
										".MuiOutlinedInput-root": {
											borderRadius: "50%",
											width: {
												xs: "40px",
												sm: "74px",
												md: "74px",
												xl: "74px",
											},
											height: {
												xs: "40px",
												sm: "74px",
												md: "74px",
												xl: "74px",
											},
											paddingX: "1px",
										},
									}}
								/>
							</Box>
							<Typography
								sx={{
									fontSize: { xs: "15px", xl: "18px" },
									fontWight: "400",
									color: "#A0A9AB",
									lineHeight: "27px",
									textAlign: "center",
									marginY: {
										xs: "1rem",
										sm: "2rem",
										md: "1rem",
										xl: "2rem",
									},
								}}
							>
								{t("resend")}
							</Typography>
						</Box>
						<Box
							sx={{
								width: "300px",
								display: "flex",
								justifyContent: {
									xs: "center",
									md: "end",
									xl: "end",
								},
								position: {
									xs: "absolute",
									md: "absolute",
									xl: "absolute",
								},
								bottom: { xs: "1rem", md: "1rem", xl: "1rem" },
								right: { xs: "", md: "-5rem", xl: "-5rem" },
							}}
						>
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
										width: {
											xs: "220px",
											md: "231px",
											xl: "271px",
										},
										display: "flex",
										justifyContent: "space-around",
									}}
									onClick={() => router.push("/payment")}
									type="submit"
									title={`${t("button")}`}
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
										{t("button")}
									</Typography>
									<IconsStyle />
								</Button>
							</Box>
						</Box>
					</Container>
				</Grid>
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", [
				"common",
				"verification",
			])),
		},
	};
};

export default VerificationPage;
