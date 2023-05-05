import { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import {
	Box,
	Container,
	Grid,
	InputBase,
	Typography,
	TextField,
} from "@mui/material";
import Image from "next/image";
import { ButtonLogin } from "@/components/Button";
import { useRouter } from "next/router";

const VerificationPage = () => {
	const router = useRouter();
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
							<Image
								src='/icons/message.svg'
								alt=''
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
								<InputBase
									sx={{
										borderRadius: "50%",
										width: "60px",
										height: "60px",
										background: "#FFFFFF",
										boxShadow: " 0px 52.5697px 86.4857px rgba(0, 0, 0, 0.03)",
										border: "1.6958px solid #E3E3E3",
										fontSize: "30px",
										".mui-style-yz9k0d-MuiInputBase-input": {
											textAlign: "center",
										},
									}}
									type="number"
								/>

								<InputBase
									sx={{
										borderRadius: "50%",
										width: "60px",
										height: "60px",
										background: "#FFFFFF",
										boxShadow: " 0px 52.5697px 86.4857px rgba(0, 0, 0, 0.03)",
										border: "1.6958px solid #E3E3E3",
										fontSize: "30px",
										".mui-style-yz9k0d-MuiInputBase-input": {
											textAlign: "center",
										},
									}}
									type="number"
								/>
								<InputBase
									sx={{
										borderRadius: "50%",
										width: "60px",
										height: "60px",
										background: "#FFFFFF",
										boxShadow: " 0px 52.5697px 86.4857px rgba(0, 0, 0, 0.03)",
										border: "1.6958px solid #E3E3E3",
										fontSize: "30px",
										".mui-style-yz9k0d-MuiInputBase-input": {
											textAlign: "center",
										},
									}}
									type="number"
								/>
								<InputBase
									sx={{
										borderRadius: "50%",
										width: "60px",
										height: "60px",
										background: "#FFFFFF",
										boxShadow: " 0px 52.5697px 86.4857px rgba(0, 0, 0, 0.03)",
										border: "1.6958px solid #E3E3E3",
										fontSize: "30px",
										".mui-style-yz9k0d-MuiInputBase-input": {
											textAlign: "center",
										},
									}}
									type="number"
								/>
								<InputBase
									sx={{
										borderRadius: "50%",
										width: "60px",
										height: "60px",
										background: "#FFFFFF",
										boxShadow: " 0px 52.5697px 86.4857px rgba(0, 0, 0, 0.03)",
										border: "1.6958px solid #E3E3E3",
										fontSize: "30px",
										".mui-style-yz9k0d-MuiInputBase-input": {
											textAlign: "center",
										},
									}}
									type="number"
								/>
								<InputBase
									sx={{
										borderRadius: "50%",
										width: "60px",
										height: "60px",
										background: "#FFFFFF",
										boxShadow: " 0px 52.5697px 86.4857px rgba(0, 0, 0, 0.03)",
										border: "1.6958px solid #E3E3E3",
										fontSize: "30px",
										".mui-style-yz9k0d-MuiInputBase-input": {
											textAlign: "center",
										},
									}}
									type="number"
								/>
							</Box>
							<Typography
								sx={{
									fontSize: { xs: "15px", xl: "18px" },
									fontWight: "400",
									color: "#A0A9AB",
									lineHeight: "27px",
									textAlign: "center",
									marginY: { xs: "5rem", sm: "2rem", md: "2rem", xl: "2rem" },
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
