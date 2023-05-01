import {
	Typography,
	Box,
	OutlinedInput,
	FormControl,
	Button,
	Grid,
	Container,
} from "@mui/material";
import { NextPage } from "next";
import { BsHash } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import CheckIcon from "@mui/icons-material/Check";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import { useState } from "react";

const subscribePremium: NextPage = () => {
	const router = useRouter();
	const [values, setValues] = useState({
		hashtag: router.query.tag || "",
		subLinks: "",
	});
	return (
		<Layout>
			<Grid
				sx={{
					marginLeft: { xs: "70px", sm: "120px", md: "140px", xl: "160px" },
					height: "100%",
					transform: "skewX(16deg)",
					display: "flex",
				}}
			>
				<Container>
					<Box
						sx={{
							height: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-evenly",
							margin: { xs: "0", md: "0", xl: "1rem auto 0rem 5rem" },
						}}
					>
						<Box>
							<Typography
								sx={{
									fontSize: { xs: "20px", md: "30px", xl: "40px" },
								}}
							>
								Reserve your{" "}
								<span
									style={{
										padding: "4px 8px",
										borderRadius: "8px",
										lineHeight: "92.5%",
										background:
											"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
									}}
								>
									#keyword
								</span>{" "}
								before someone else do
							</Typography>
						</Box>
						{/* box input hashtag */}
						<Box>
							<FormControl
								sx={{ width: { xs: "100%", sm: "100%", md: "90%", xl: "90%" } }}
							>
								<OutlinedInput
									value={values.hashtag}
									sx={{
										width: "100%",
										fontSize: {
											xs: "18px",
											sm: "22px",
											md: "28px",
											xl: "32px",
										},
										lineHeight: "28px",
										background: "#FBFBFB",
										borderRadius: "20px",
										border: "1px solid ",
									}}
									placeholder="Enter your unique hashtag keyword"
									startAdornment={
										<BsHash
											color="#31E716"
											// size={90}
											style={{
												width: "80px",
												height: "40px",
											}}
										/>
									}
									endAdornment={
										<FiArrowUpRight
											color="#343132"
											// size={90}
											style={{
												width: "80px",
												height: "40px",
											}}
										/>
									}
								/>

								<Box width="100%" display="flex" justifyContent="end">
									<Typography
										sx={{
											backgroundImage:
												"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
											backgroundClip: "text",
											WebkitBackgroundClip: "text",
											color: "transparent",
											fontSize: { xs: "20px", md: "24px", xl: "28px" },
										}}
									>
										Premium
									</Typography>
								</Box>
							</FormControl>
						</Box>
						{/* box input sub-link */}
						<Box>
							<Box
								sx={{
									width: { xs: "100%", sm: "100%", md: "90%", xl: "90%" },
									// marginY: "2rem",
								}}
							>
								<Typography
									sx={{
										fontSize: { xs: "20px", md: "30px", xl: "40px" },
									}}
								>
									Please provide your keyword's sub-link
								</Typography>
								<OutlinedInput
									label="Please provide your keyword's sub-link"
									sx={{
										width: "100%",
										fontSize: {
											xs: "18px",
											sm: "22px",
											md: "28px",
											xl: "32px",
										},
										lineHeight: "28px",
										height: { xs: "50px", sm: "", md: "", xl: "90px" },
										borderRadius: "20px",
										background: "#FBFBFB",
										paddingX: "10px",
										boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.05)",
									}}
									placeholder="Enter hashtag keyword"
								/>
							</Box>
						</Box>
						{/* box bottom option and button  */}
						<Box>
							<Box
								sx={{
									width: "100%",
									height: "100%",
									display: "flex",
									alignItems: {
										xs: "start",
										sm: "center",
										md: "center",
										xl: "center",
									},
									justifyContent: "space-between",
									flexDirection: { xs: "column", xl: "row" },
								}}
							>
								{/* box subscribe */}
								<Box
									sx={{
										width: { xs: "100%", xl: "50%" },
										height: "100%",
										alignItems: "center",

										display: "flex",
										flexDirection: {
											xs: "row",
											sm: "row",
											md: "row",
											xl: "row",
										},
										justifyContent: { xs: "space-evenly", xl: "space-between" },
										margin: { xs: ".3rem auto", xl: "0" },
									}}
								>
									<Box
										sx={{
											width: "210px",
											height: "100%",
											display: "flex",
											alignItems: "start",
											justifyContent: {
												xs: "space-around",
												xl: "space-between",
											},
											flexDirection: "column",
											marginY: { xs: ".5rem", xl: " auto " },
										}}
									>
										<Typography
											sx={{
												fontSize: { xs: "20px", md: "30px", xl: "40px" },
												fontWeight: "400",
												color: "#343132",
												lineHeight: "27px",
											}}
										>
											$10K
										</Typography>
										<Typography
											sx={{
												fontSize: { xs: "13px", xl: "16px" },
												fontWeight: "300",
												color: "#343132",
												lineHeight: "14px",
											}}
										>
											One time payment
										</Typography>
									</Box>
									<Box
										sx={{
											width: "210px",
											height: "100%",
											display: "flex",
											alignItems: "start",
											justifyContent: {
												xs: "space-around",
												xl: "space-between",
											},

											flexDirection: "column",
										}}
									>
										<Typography
											sx={{
												fontSize: { xs: "20px", md: "30px", xl: "40px" },
												fontWeight: "400",
												color: "#343132",
												lineHeight: "27px",
											}}
										>
											$3.65
										</Typography>
										<Typography
											sx={{
												fontSize: { xs: "13px", xl: "16px" },
												fontWeight: "300",
												color: "#343132",
												lineHeight: "14px",
											}}
										>
											Yearly renewal
										</Typography>
									</Box>
								</Box>
								{/* box option */}
								<Box
									sx={{
										width: { xs: "100%", sm: "50%", md: "40%", xl: "26%" },
										marginRight: "2rem",
										display: "flex",
										flexDirection: "column",
										marginY: { xs: ".5rem", xl: " auto " },
									}}
								>
									<Box
										sx={{
											width: "100%",
											display: "flex",
											alignItems: "center",
										}}
									>
										<CheckIcon fontSize="small" />
										<Typography
											sx={{
												fontSize: { xs: "13px", xl: "16px" },
												fontWeight: "300",
												color: "#343132",
												lineHeight: "14px",
												margin: "auto .5rem",
											}}
										>
											Continuous Analytical Reports
										</Typography>
									</Box>
									<Box
										sx={{
											width: "100%",
											display: "flex",
											alignItems: "center",
										}}
									>
										<CheckIcon fontSize="small" />
										<Typography
											sx={{
												fontSize: { xs: "13px", xl: "16px" },
												fontWeight: "300",
												color: "#343132",
												lineHeight: "14px",
												margin: "auto .5rem",
											}}
										>
											Profile Chart Dashboard
										</Typography>
									</Box>
								</Box>
								{/* button Pay */}
								<Button
									sx={{
										borderRadius: "16px",
										paddingX: "18px",
										height: "59px",
										width: { xs: "70%", sm: "311px", md: "311px", xl: "211px" },
										display: "flex",
										justifyContent: "space-around",
										background:
											" linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
									}}
								>
									<Typography
										sx={{
											letterSpacing: "0.02em",
											fontSize: "32px",
											fontWeight: 400,
											lineHeight: "40px",
											color: "#343132",
										}}
									>
										PAY
									</Typography>

									<FiArrowUpRight size={42} color="#343132" />
								</Button>
							</Box>
						</Box>
					</Box>
				</Container>
			</Grid>
		</Layout>
	);
};

export default subscribePremium;
