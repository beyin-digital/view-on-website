import Layout from "@/components/Layout/Layout";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ButtonLogin } from "@/components/Button";
import { useRouter } from "next/router";
import { MuiOtpInput } from "mui-one-time-password-input";
import React from "react";

const VerificationPage = () => {
	const router = useRouter();
	const [otp, setOtp] = React.useState("");
	const handleChange = (newValue: any) => {
		setOtp(newValue);
	};

	return (
		<>
			<Layout>
				<Grid
					container
					sx={{
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						transform: {
							xs: "skew(10deg, 0deg)",
							sm: "skew(16deg, 0deg)",
							md: "skew(16deg, 0deg)",
							xl: "skew(16deg, 0deg)",
						},
					}}
				>
					<Container
						sx={{
							width: { xs: "100%", md: "50%", xl: "50%" },
							height: "100%",
							marginRight: { xs: "0", md: "15rem", xl: "20rem" },
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "space-around",
							position: "relative",
							marginY: { xs: "8rem", sm: "4rem", md: "1rem", xl: "0rem" },
							// border: "1px solid",
						}}
					>
						<Box
							sx={{
								width: "100%",
								// height:"100px",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Image src="/icons/message.svg" alt="" height={78} width={78} />
							<Typography
								sx={{
									fontSize: { xs: "22px", md: "27px", xl: "32px" },
									fontWight: "300",
									lineHeight: "29px",
								}}
							>
								Verification Link Sent
							</Typography>
						</Box>
						<Box
							sx={{
								width: { xs: "100%", sm: "60%", md: "90%", xl: "60%" },
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								// border: "1px solid",
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "20px", xl: "24px" },
									fontWight: "100",
									color: "#A0A9AB",
									lineHeight: "28px",
									textAlign: "center",
									marginY: "2rem",
								}}
							>
								Enter the authenrication code we sent to Your email
								Test@abceed.com below:
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
									className="myClassName"
									sx={{
										".MuiOutlinedInput-root": {
											borderRadius: "50%",
											width: { xs: "40px", sm: "74px", md: "74px", xl: "74px" },
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
									marginY: { xs: "4rem", sm: "2rem", md: "1rem", xl: "2rem" },
								}}
							>
								Resend code
							</Typography>
						</Box>
						<Box
							sx={{
								width: "300px",
								display: "flex",
								justifyContent: { xs: "center", md: "end", xl: "end" },
								position: { xs: "", md: "", xl: "absolute" },
								bottom: { xs: "0rem", md: "0rem", xl: "1rem" },
								right: { xs: "", md: "0rem", xl: "0rem" },
							}}
						>
							<ButtonLogin
								name="Verify"
								onClick={() => router.push("/payment")}
							/>
						</Box>
					</Container>
				</Grid>
			</Layout>
		</>
	);
};

export default VerificationPage;
