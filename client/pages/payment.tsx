import { ButtonLogin } from "@/components/Button";
import Layout from "@/components/Layout/Layout";
import {
	Box,
	Grid,
	Container,
	Typography,
	OutlinedInput,
	InputAdornment,
} from "@mui/material";
import { useRouter } from "next/router";

const PaymentPage = () => {
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
						transform:"skewX(16deg)",
					}}
				>
					<Container
						sx={{
							width: { xs: "100%", md: "100%", xl: "60%" },
							height: "100%",
							marginRight: { xs: "0", md: "-4rem", xl: "10rem" },
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "space-around",
							position: "relative",
						}}
					>
						<Box
							sx={{
								width: { xs: "100%", sm: "90%", md: "80%", xl: "80%" },
								height: "100%",
								display: "flex",
								flexDirection: "column",
								alignItems: "start",
								justifyContent: { xs: "space-evenly", xl: "space-around" },
								position: "relative",
								top: { xs: "10rem", sm: "7rem", md: "0", xl: "0" },
							}}
						>
							<Box>
								<Typography
									sx={{
										fontSize: { xs: "20px", md: "30px", xl: "40px" },
										fontWeight: "300",
									}}
								>
									Please fill up your payment method
								</Typography>
							</Box>

							<Box
								sx={{
									width: { xs: "100%", xl: "80%" },
								}}
							>
								<OutlinedInput
									sx={{
										width: "100%",
										height: "57px",
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
												mx: "1rem",
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
										height: "57px",
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
												mx: "1rem",
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
											height: "57px",
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
													mx: "1rem",
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
											height: "57px",
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
													mx: "1rem",
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
								}}
							>
								<Box>
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
										justifyContent: "end",
										position: { xs: "relative", md: "", xl: "absolute" },
										right: "0rem",
									}}
								>
									<ButtonLogin name="Finish" onClick={() => router.push("/")} />
								</Box>
							</Box>
						</Box>
					</Container>
				</Grid>
			</Layout>
		</>
	);
};

export default PaymentPage;
