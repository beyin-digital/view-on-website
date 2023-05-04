import { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ButtonLogin } from "@/components/Button";
import { useRouter } from "next/router";
import { MuiOtpInput } from "mui-one-time-password-input";
import { toast } from "react-toastify";
import { verifyEmailFn } from "@/api/authApi";
import { useMutation } from "@tanstack/react-query";
import { FiArrowUpRight } from "react-icons/fi";

const VerificationPage = () => {
	const router = useRouter();

	const [email, setEmail] = useState(router.query?.email as string);
	const [otp, setOtp] = useState("");

	const handleChange = (newValue: any) => {
		setOtp(newValue);
	};

	const { mutate: verifyEmail, isLoading } = useMutation(
		(verificationCode: string) => verifyEmailFn(verificationCode),
		{
			onSuccess: (data: any) => {
				toast.success(data?.message);
				router.push("/");
			},
			onError(error: any) {
				{
					toast.error((error as any).data.message);
				}
			},
		},
	);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		verifyEmail(otp);
	};

	useEffect(() => {
		const email = router.query?.email as string;
		if (email) {
			setEmail(email);
		}
	}, []);

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
						transform: "skew(16deg, 0deg)",
						marginY: { xs: "7rem", sm: "7rem", md: "1rem", xl: "1rem" },
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
							top: { xs: "10rem", sm: "0", md: "0", xl: "0" },
						}}
					>
						{/* Box top */}
						<Box
							sx={{
								width: "100%",

								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Image src="/icons/message.svg" alt="" height={78} width={78} />
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
								Verification Link Sent
							</Typography>
						</Box>
						<Box
							sx={{
								width: {
									xs: "100%",
									sm: "60%",
									md: "90%",
									xl: "60%",
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
									marginY: "2rem",
								}}
							>
								Enter the authenrication code we sent to Your email{" "}
								<span style={{ fontWeight: "bold" }}>{email}</span> below:
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
									className="otp-input myClassName"
									value={otp}
									onChange={handleChange}
									length={6}
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
									marginTop: {
										xs: "3rem",
										sm: "2rem",
										md: "2rem",
										xl: "2rem",
									},
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
								marginBottom: { xs: "7rem", sm: "7rem", md: "0", xl: "0" },
							}}
						>
							{/* <ButtonLogin name="Verify" onClick={handleSubmit} /> */}
							<Box
								sx={{
									width: { xs: "240px", sm: "300px", md: "300px", xl: "300px" },
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
										width: { xs: "220px", md: "231px", xl: "231px" },
										display: "flex",
										justifyContent: "space-around",
									}}
									onClick={handleSubmit}
									type="submit"
								>
									<Typography
										sx={{
											// fontFamily: "Helvetica Neue",
											letterSpacing: "0.02em",
											fontSize: { xs: "20px", md: "25px", xl: "32px" },
											fontWeight: 400,
											lineHeight: "40px",
											color: "#FBFBFB",
											textTransform: "uppercase",
										}}
									>
										Verify
									</Typography>

									<FiArrowUpRight size={42} color="#FBFBFB" />
								</Button>
							</Box>
						</Box>
					</Container>
				</Grid>
			</Layout>
		</>
	);
};

export default VerificationPage;
