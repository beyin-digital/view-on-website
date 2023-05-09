import {
	Box,
	Grid,
	Container,
	Typography,
	OutlinedInput,
	InputAdornment,
	Button,
} from "@mui/material";
import { useRouter } from "next/router";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "next-i18next";

const PaymentDetails = () => {
	const { t } = useTranslation("payment");

	const router = useRouter();

	return (
		<>
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
					marginY: { xs: "1rem", sm: "1rem", md: "1rem", xl: "1rem" },
					marginX:"1rem"
				}}
			>
				<Container
					sx={{
						width: { xs: "100%", md: "100%", xl: "60%" },
						height: "100%",
						marginRight: { xs: "2rem", sm: "-1.6rem", md: "-4rem", xl: "10rem" },
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent:"space-evenly",
						position: "relative",
						zIndex: "99",
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", sm: "100%", md: "80%", xl: "80%" },
							height: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: { xs: "center", md: "start", xl: "start" },
							justifyContent: { xs: "space-evenly", xl: "space-evenly" },
							position: "relative",
							// top: { xs: "10rem", sm: "7rem", md: "0", xl: "0" },
						}}
					>
						<Box>
							<Typography
								sx={{
									fontSize: { xs: "20px", md: "30px", xl: "40px" },
									fontWeight: "300",
									margin: { xs: "1rem", md: "", xl: "" },

								}}
							>
								Please fill up your payment method
							</Typography>
						</Box>

						<Box
							sx={{
								width: { xs: "100%", md: "100%", xl: "80%" },
							}}
						>
							<OutlinedInput
								sx={{
									width: "100%",
									height: { xs: "43px", xl: "57px" },
									fontSize: {
										xs: "18px",
										sm: "22px",
										md: "28px",
										xl: "32px",
									},
									lineHeight: "28px",
									background: "#FBFBFB",
									borderRadius: "15px",
									boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.08)",
									marginY: ".5rem",
								}}
								startAdornment={
									<InputAdornment
										position="start"
										sx={{
											mx: { xs: ".2rem", md: ".5rem", xl: "1rem" },
										}}
									>
										<img src="/icons/avatar.svg" alt="Avatar Icon" />
									</InputAdornment>
								}
								placeholder="Cardholder name"
							/>

							<OutlinedInput
								type="number"
								sx={{
									width: "100%",
									height: { xs: "43px", xl: "57px" },
									fontSize: {
										xs: "18px",
										sm: "22px",
										md: "28px",
										xl: "32px",
									},
									lineHeight: "28px",
									background: "#FBFBFB",
									borderRadius: "15px",
									boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.08)",
									marginY: ".5rem",
								}}
								startAdornment={
									<InputAdornment
										position="start"
										sx={{
											mx: { xs: ".2rem", md: ".5rem", xl: "1rem" },
										}}
									>
										<img src="/icons/card.svg" alt="Card Number" />
									</InputAdornment>
								}
								placeholder="4592 7890 1425 7849"
							/>
							<Box
								sx={{
									width: "100%",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<OutlinedInput
									sx={{
										width: "40%",
										height: { xs: "43px", xl: "57px" },
										fontSize: {
											xs: "18px",
											sm: "22px",
											md: "28px",
											xl: "32px",
										},
										lineHeight: "28px",
										background: "#FBFBFB",
										borderRadius: "15px",
										boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.08)",
										marginY: ".5rem",
									}}
									startAdornment={
										<InputAdornment
											position="start"
											sx={{
												mx: { xs: ".2rem", md: ".5rem", xl: "1rem" },
											}}
										>
											<img src="/icons/date.svg" alt="Date Icon" />
										</InputAdornment>
									}
									// type="date"
									// type="number"
									inputProps={{
										min: new Date().toISOString().slice(0, 10),
										inputMode: "numeric",
										pattern: "[0-9]{2}",
									}}
									placeholder="03/24"
								/>

								<OutlinedInput
									type="number"
									sx={{
										width: "40%",
										height: { xs: "43px", xl: "57px" },
										fontSize: {
											xs: "18px",
											sm: "22px",
											md: "28px",
											xl: "32px",
										},
										lineHeight: "28px",
										background: "#FBFBFB",
										borderRadius: "15px",
										boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.08)",
									}}
									inputProps={{
										maxLength: 3,
										pattern: "\\d*",
									}}
									startAdornment={
										<InputAdornment
											position="start"
											sx={{
												mx: { xs: ".2rem", md: ".5rem", xl: "1rem" },
											}}
										>
											<img src="/icons/cvc.svg" alt="CVC Icon" />
										</InputAdornment>
									}
									placeholder="CVC"
								/>
							</Box>
						</Box>
						<Box
							sx={{
								width: "100%",
								justifyContent: "space-between",
								display: "flex",
								alignItems: "center",
								flexDirection: { xs: "column-reverse", md: "row", xl: "row" },
								marginY: { xs: "3rem", md: "", xl: "" },
							}}
						>
							<Box
								sx={{
									marginY: { xs: "3rem", md: "", xl: "" },
								}}
							>
								<Typography
									sx={{
										fontSize: { xs: "20px", xl: "24px" },
										fontWeight: "300",
										color: "green",
									}}
								>
									Payment Method Denied
								</Typography>
								<Typography
									sx={{
										fontSize: { xs: "20px", xl: "24px" },
										fontWeight: "300",
										color: "red",
									}}
								>
									Your payment method is verified
								</Typography>
							</Box>
							<Box
								sx={{
									width: "300px",
									display: "flex",
									justifyContent: { xs: "center", md: "", xl: "end" },
									position: { xs: "relative", md: "", xl: "absolute" },
									right: "0rem",
								}}
							>
								{/* <ButtonLogin name="Finish" onClick={() => router.push("/")} /> */}
								<Box
									sx={{
										width: {
											xs: "240px",
											sm: "300px",
											md: "300px",
											xl: "300px",
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
											width: { xs: "220px", md: "231px", xl: "231px" },
											display: "flex",
											justifyContent: "space-around",
										}}
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
											Finish
										</Typography>

										<FiArrowUpRight size={42} color="#FBFBFB" />
									</Button>
								</Box>
							</Box>
						</Box>
					</Box>
				</Container>
			</Grid>
		</>
	);
};

export default PaymentDetails;
