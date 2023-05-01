import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Navbar";
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
import Image from "next/image";
import { BsHash } from "react-icons/bs";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

import { ButtonStyle } from "@/components/Button";
import { useState } from "react";
import { useRouter } from "next/router";

const SubscribePage: NextPage = () => {
	const router = useRouter();
	const descCardOne = [
		{ id: 1, desc: "Triple Hashtag Keyword" },
		{ id: 2, desc: "Triple Hashtag Keyword" },
		{ id: 2, desc: "Triple Hashtag Keyword" },
	];
	const descCardTwo = [
		{ id: 11, desc: "Triple Hashtag Keyword" },
		{ id: 22, desc: "Triple Hashtag Keyword" },
		{ id: 23, desc: "Triple Hashtag Keyword" },
	];
	const descCardThree = [
		{ id: 111, desc: "Triple Hashtag Keyword" },
		{ id: 222, desc: "Triple Hashtag Keyword" },
		{ id: 233, desc: "Triple Hashtag Keyword" },
	];

	const [values, setValues] = useState({
		hashtag: router.query.tag || "",
		subLinks: "",
	});
	return (
		<>
			<Header />
			<Box
				sx={{
					width: "100%",
					background: "#EAEDED",
					overflow: "hidden",
					position: "relative",
				}}
			>
				<Box
					sx={{
						maxWidth: "100%",
						margin: "auto",
						height: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<>
						<img
							src="/images/swirl.svg"
							style={{
								position: "absolute",
								top: "-102rem",
							}}
						/>
					</>
					{/* layout section */}
					<Box
						sx={{
							position: "relative",
							right: { xs: "0%", sm: "10%", md: "10%", xl: "20%" },
							maxWidth: "100%",
							width: "100%",
							height: { xs: "100%", sm: "540px", md: "650px", xl: "650px" },
							background: {
								xs: "",
								md: "rgba(251, 251, 251, 0.6)",
								xl: "rgba(251, 251, 251, 0.6)",
							},
							border: { xs: "", md: "", xl: "1px solid #FBFBFB" },
							backdropFilter: { xs: "", md: "blur(100px)", xl: "blur(100px)" },
							borderRadius: "30px",
							transform: { xs: "skew(-10deg, 0deg)", xl: "skew(-20deg, 0deg)" },
							overflow: "hidden",
							margin: "3rem auto",
						}}
					>
						<Grid
							sx={{
								marginLeft: {
									xs: "0px",
									sm: "120px",
									md: "140px",
									xl: "160px",
								},
								paddingX: "2rem",
								height: "100%",
								transform: {
									xs: "skewX(10deg)",
									xl: "skewX(20deg)",
								},
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
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
									<Box
										sx={{
											marginY: { xs: "2rem", md: "1rem", xl: "1rem" },
										}}
									>
										<Typography
											sx={{
												fontSize: {
													xs: "18px",
													sm: "20px",
													md: "30px",
													xl: "40px",
												},
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
											before someone else does
										</Typography>
									</Box>
									<Box>
										<FormControl
											sx={{ width: { xs: "100%", md: "90%", xl: "90%" } }}
										>
											<OutlinedInput
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
													".mui-style-1d3z3hw-MuiOutlinedInput-notchedOutline": {
														border: "0",
													},
												}}
												className="borderGr"
												value={values.hashtag}
												placeholder="Enter your unique hashtag keyword"
												startAdornment={<BsHash color="#31E716" size={90} />}
												endAdornment={
													<FiArrowUpRight color="#343132" size={90} />
												}
											/>
											{/* <FormHelperText id="outlined-weight-helper-text"> */}
											<Box
												width="100%"
												display="flex"
												justifyContent="space-between"
											>
												<Typography
													sx={{
														fontSize: {
															xs: "10px",
															sm: "20px",
															md: "24px",
															xl: "28px",
														},
													}}
												>
													The hashtag keyword you've chosen is premium
												</Typography>
												<Typography
													onClick={() =>
														router.push(`${router.asPath}/premium`)
													}
													sx={{
														cursor: "pointer",
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
											{/* </FormHelperText> */}
										</FormControl>
									</Box>
									<Box>
										<Box
											sx={{
												width: { xs: "100%", md: "90%", xl: "90%" },
												marginY: "1rem",
											}}
										>
											<Typography
												sx={{
													fontSize: {
														xs: "12px",
														sm: "20px",
														md: "30px",
														xl: "40px",
													},
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
													height: "90px",
													borderRadius: "20px",
													background: "#FBFBFB",
													paddingX: "10px",
													boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.05)",
												}}
												placeholder="Enter hashtag keyword"
											/>
										</Box>
									</Box>
									<Box>
										<Box
											sx={{
												width: "100%",
												display: "flex",
												justifyContent: "end",
												marginY: { xs: "2rem", xl: "1rem" },
											}}
										>
											<Button
												sx={{
													borderRadius: "16px",
													paddingX: "18px",
													height: "59px",
													width: "311px",
													display: "flex",
													background: "#31E716",
													// marginRight: { xs: "10rem", xl: "4rem" },
												}}
											>
												<Typography
													sx={{
														letterSpacing: "0.02em",
														fontSize: "32px",
														fontWeight: "400",
														lineHeight: "40px",
														color: "#343132",
													}}
												>
													Reserve
												</Typography>
												<FiArrowDownRight size={42} color="#343132" />
											</Button>
										</Box>
									</Box>
								</Box>
							</Container>
						</Grid>
					</Box>
					{/* package box */}
					<Box
						sx={{
							width: "100%",
							height: { xs: "100%", xl: "100vh" },
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Box
							sx={{
								width: { xs: "100%", xl: "80%" },
								height: { xs: "100%", xl: "560px" },
								display: "flex",
								alignItems: "center",
								justifyContent: "space-evenly",
								flexDirection: { xs: "column", md: "row", xl: "row" },
							}}
						>
							<Box
								sx={{
									width: "314px",
									height: "467",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-around",
									flexDirection: "column",
									border: "1px solid #FBFBFB",
									borderRadius: "24px",
									background: "rgba(251, 251, 251, 0.6)",
									backdropFilter: "blur(100px)",
									marginY: "1rem",
								}}
							>
								{/* card Header */}
								<Box
									sx={{
										height: "70px",
										width: "100%",
										borderBottom: "1px solid #FBFBFB",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Typography
										sx={{
											fontSize: { xs: "20px", xl: "24px" },
											fontWeight: "",
										}}
									>
										Monthly Package
									</Typography>
								</Box>
								{/* card price */}
								<Box
									sx={{
										height: "60px",
										marginY: "1rem",
									}}
								>
									<Typography
										sx={{
											fontSize: { xs: "22px", md: "33px", xl: "44px" },
											fontWeight: "",
										}}
									>
										$99
									</Typography>
								</Box>
								{/* card body */}
								<Box
									sx={{
										width: "100%",
										height: "200px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										flexDirection: "column",
									}}
								>
									{descCardOne.map((item) => (
										<Box
											key={item.id}
											sx={{
												width: "90%",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												marginY: ".3rem",
											}}
										>
											<Image
												src="/icons/check.svg"
												alt=""
												width={30}
												height={30}
											/>
											<Typography
												sx={{
													fontSize: { xs: "18px", xl: "20px" },
													fontWeight: "",
													marginX: "1rem",
												}}
											>
												{item.desc}
											</Typography>
										</Box>
									))}
								</Box>
								{/* card button */}
								<Box
									sx={{
										height: "100px",
										width: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<ButtonStyle />
								</Box>
							</Box>

							<Box
								sx={{
									width: "371px",
									height: "551px",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-around",
									flexDirection: "column",
									border: "1px solid #FBFBFB",
									borderRadius: "28px",
									background:
										" linear-gradient(270deg, rgba(0, 144, 236, 0.1) 0%, rgba(49, 231, 22, 0.1) 100%)",
									backdropFilter: "blur(117px)",
									boxShadow: "0px 72px 86px rgba(0, 0, 0, 0.07)",
									marginY: "1rem",
								}}
							>
								{/* card Header */}
								<Box
									sx={{
										height: "70px",
										width: "100%",
										borderBottom: "1px solid #FBFBFB",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Typography
										sx={{
											fontSize: { xs: "20px", xl: "24px" },
											fontWeight: "",
										}}
									>
										Yearly Package
									</Typography>
								</Box>
								{/* card price */}
								<Box
									sx={{
										height: "60px",
										marginY: "1rem",
									}}
								>
									<Typography
										sx={{
											fontSize: { xs: "22px", md: "33px", xl: "44px" },
											fontWeight: "",
										}}
									>
										$399
									</Typography>
								</Box>
								{/* card body */}
								<Box
									sx={{
										width: "100%",
										height: "200px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										flexDirection: "column",
									}}
								>
									{descCardTwo.map((item) => (
										<Box
											key={item.id}
											sx={{
												width: "90%",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												marginY: ".3rem",
											}}
										>
											<Image
												src="/icons/check.svg"
												alt=""
												width={30}
												height={30}
											/>
											<Typography
												sx={{
													fontSize: { xs: "18px", xl: "20px" },
													fontWeight: "",
													marginX: "1rem",
												}}
											>
												{item.desc}
											</Typography>
										</Box>
									))}
								</Box>
								{/* card button */}
								<Box
									sx={{
										height: "100px",
										width: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<ButtonStyle />
								</Box>
							</Box>

							<Box
								sx={{
									width: "314px",
									height: "467",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-around",
									flexDirection: "column",
									border: "1px solid #FBFBFB",
									borderRadius: "24px",
									background: "rgba(251, 251, 251, 0.6)",
									backdropFilter: "blur(100px)",
									marginY: "1rem",
								}}
							>
								{/* card Header */}
								<Box
									sx={{
										height: "70px",
										width: "100%",
										borderBottom: "1px solid #FBFBFB",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Typography
										sx={{
											fontSize: { xs: "20px", xl: "24px" },
											fontWeight: "",
										}}
									>
										6 Months Package
									</Typography>
								</Box>
								{/* card price */}
								<Box
									sx={{
										height: "60px",
										marginY: "1rem",
									}}
								>
									<Typography
										sx={{
											fontSize: { xs: "22px", md: "33px", xl: "44px" },
											fontWeight: "",
										}}
									>
										$299
									</Typography>
								</Box>
								{/* card body */}
								<Box
									sx={{
										width: "100%",
										height: "200px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										flexDirection: "column",
									}}
								>
									{descCardThree.map((item) => (
										<Box
											key={item.id}
											sx={{
												width: "90%",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												marginY: ".3rem",
											}}
										>
											<Image
												src="/icons/check.svg"
												alt=""
												width={30}
												height={30}
											/>
											<Typography
												sx={{
													fontSize: { xs: "18px", xl: "20px" },
													fontWeight: "",
													marginX: "1rem",
												}}
											>
												{item.desc}
											</Typography>
										</Box>
									))}
								</Box>
								{/* card button */}
								<Box
									sx={{
										height: "100px",
										width: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<ButtonStyle />
								</Box>
							</Box>
						</Box>
					</Box>
					<Footer />
				</Box>
			</Box>
		</>
	);
};

export default SubscribePage;
