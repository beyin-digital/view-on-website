import React from "react";
import Header from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FooterMobile from "../Footer/FooterMobile";
import { Box } from "@mui/system";
import Image from "next/image";
import { Grid, Link, Typography } from "@mui/material";

const IllustrationDesktop = () => {
	return (
		<>
			<Box
				sx={{
					width: "2192px",
					maxWidth: "100%",
					background: "#EAEDED",
					overflow: "hidden",
				}}
				className="IllustrationDesktop"
			>
				<Box
					sx={{
						maxWidth: "100%",
						margin: "auto",
						height: { xs: "100%", md: "100vh", xl: "100vh" },
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						position: "relative",
					}}
				>
					<Header />
					<Box
						sx={{
							width: "100%",
						}}
					>
						<Image
							fill
							src="/images/swirl.svg"
							alt=""
							style={{
								// objectFit:"cover",
								top: "-43rem",
								position: "absolute",
							}}
						/>
					</Box>
					<Box
						sx={{
							position: "relative",
							right: { xs: "0%", sm: "0%", md: "10%", xl: "14%" },
							maxWidth: "100%",
							width: "100%",
							height: { xs: "100%", sm: "540px", md: "650px", xl: "650px" },
							background: {
								xs: "transparent",
								md: "rgba(251, 251, 251, 0.6)",
								xl: "rgba(251, 251, 251, 0.6)",
							},
							border: {
								xs: "0",
								md: "1px solid #FBFBFB",
								xl: "1px solid #FBFBFB",
							},
							backdropFilter: { xs: "0", md: "blur(100px)", xl: "blur(100px)" },
							borderRadius: "30px",
							transform: { xs: "skew(-10deg, 0deg)", xl: "skew(-15deg, 0deg)" },
							overflow: { xs: "", md: "hidden", xl: "hidden" },
							margin: "3rem auto",
							display: "flex",
							alignItems: "center",
							justifyContent: "end",
						}}
					>
						<Box
							sx={{
								height: "558px",
								width: { xs: "88%", xl: "80%" },
								transform: { xs: "skew(10deg, 0deg)", xl: "skew(15deg, 0deg)" },
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							{/* Header Box Top */}
							<Box
								sx={{
									// border: "1px solid green",
									height: "100%",
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									position: "relative",
								}}
							>
								<Box
									sx={{
										// border: "1px solid green",
										height: "240px",
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-evenly",
									}}
								>
									<Box
										sx={{
											height: "126px",
											width: { xs: "60%", xl: "788px" },
											// border: "1px solid red",
										}}
									>
										<Typography
											sx={{
												fontSize: { xs: "30px", md: "50px", xl: "64px" },
												fontWeight: "600",
												lineHeight: "60px",
											}}
										>
											The Call to Action Everyone Already Knows !
										</Typography>
									</Box>
									<Box
										sx={{
											height: "50px",
											width: "419px",
											// border: "1px solid red",
											background:
												" linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
											borderRadius: "7px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											// paddingY: "10px",
										}}
									>
										<Typography
											sx={{
												fontSize: "40px",
												// fontWeight: "500",
												lineHeight: "37px",

												color: "#FBFBFB",
											}}
										>
											ViewOnWebsite.com
										</Typography>
									</Box>
									<Box
										sx={{
											height: "33px",
											width: { xs: "60%", xl: "419px" },
											// border: "1px solid red",
											paddingY: "10px",
										}}
									>
										<Typography
											sx={{
												fontSize: "24px",
												fontWeight: "",
												lineHeight: "22px",
											}}
										>
											We simply Revolutionize your physical conversion game!
										</Typography>
									</Box>
								</Box>
								<Box
									sx={{
										width: "600px",
										height: "240px",
										position: "absolute",
										right: "-10%",
										top: "-10%",
									}}
								>
									<img
										src="/images/illustrationPic.png"
										style={{
											width: "100%",
											objectFit: "cover",
										}}
									/>
									<Box
										sx={{
											width: "257px",
											height: "90px",

											display: "flex",
											alignItems: "",
											justifyContent: "end",
											position: "absolute",
											bottom: { xs: "", md: "-10rem", xl: "-5rem" },
											right: { md: "9rem", xl: "9rem" },
										}}
									>
										<Typography
											sx={{
												fontSize: { md: "20px", xl: "24px" },
												lineHeight: "22px",
												fontWeight: "500",
											}}
										>
											To being fully in control of all your physical conversion
											details.
										</Typography>
									</Box>
								</Box>
							</Box>
							{/* Main Box */}
							<Box
								sx={{
									height: "500px",
									// background: "red",
								}}
							>
								<Box
									sx={{
										width: "72%",
										height: "100%",
										display: "flex",
										// alignItems: "center",
										justifyContent: "space-between",
										position: "relative",
									}}
								>
									<Box
										sx={{
											width: { xs: "100%", md: "80%", xl: "303px" },
											height: "100%",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											// border: "1px solid blue",
										}}
									>
										<Typography
											sx={{
												fontSize: "24px",
												lineHeight: "22px",
											}}
										>
											From having no idea where your Physical conversions come
											from..
										</Typography>
									</Box>
									<Box
										sx={{
											width: "290px",
											// border: "1px solid green",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<img
											src="/icons/arrow.png"
											style={{
												width: "100%",
											}}
										/>
									</Box>
									<Box
										sx={{
											width: "344px",
											height: "126px",
											paddingTop: "1rem",
										}}
									>
										<img src="/images/illustrationPicCenter.png" />
									</Box>
									<Box
										sx={{
											width: "10px",
											position: "absolute",
											right: "6rem",
											top: "-6rem",
										}}
									>
										<img src="/icons/arrowUp.png" />
									</Box>
								</Box>
							</Box>
							{/* Three Option */}
							<Box
								sx={{
									width: "100%",
									height: "65px",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<Grid container>
									<Grid item xs={3}>
										<Box
											sx={{
												height: "60px",
												display: "flex",
												alignItems: "center",
											}}
										>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													justifyContent: "space-between",
												}}
											>
												<Box>
													<Typography
														sx={{
															fontSize: { xs: "40px", xl: "64px" },
															lineHeight: "60px",
															marginRight: ".5rem",
														}}
													>
														01
													</Typography>
												</Box>
												<Box
													sx={{
														width: "100%",
													}}
												>
													<Typography
														sx={{
															fontSize: "24px",
															lineHeight: "20px",
															fontWeight: "400",
														}}
													>
														Reserve your
														<span
															style={{
																fontWeight: "600",
																margin: "auto 2px",
															}}
														>
															#Keyword
														</span>
													</Typography>
												</Box>
											</Box>
										</Box>
									</Grid>
									<Grid item xs={4}>
										<Box
											sx={{
												height: "60px",
												display: "flex",
												alignItems: "center",
											}}
										>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													justifyContent: "space-between",
												}}
											>
												<Box>
													<Typography
														sx={{
															fontSize: { xs: "40px", xl: "64px" },
															lineHeight: "60px",
															marginRight: ".5rem",
														}}
													>
														02
													</Typography>
												</Box>
												<Box
													sx={{
														width: "100%",
													}}
												>
													<Typography
														sx={{
															fontSize: "24px",
															lineHeight: "20px",
															fontWeight: "400",
														}}
													>
														Shape it the way you
														<span
															style={{
																fontWeight: "600",
																margin: "auto 2px",
															}}
														>
															like to be seen everywhere
														</span>
													</Typography>
												</Box>
											</Box>
										</Box>
									</Grid>
									<Grid item xs={4}>
										<Box
											sx={{
												height: "60px",
												display: "flex",
												alignItems: "center",
											}}
										>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													justifyContent: "space-between",
												}}
											>
												<Box>
													<Typography
														sx={{
															fontSize: { xs: "40px", xl: "64px" },
															lineHeight: "60px",
															marginRight: ".5rem",
														}}
													>
														03
													</Typography>
												</Box>
												<Box
													sx={{
														width: "100%",
													}}
												>
													<Typography
														sx={{
															fontSize: "24px",
															lineHeight: "20px",
															fontWeight: "400",
														}}
													>
														Use the Dashboard and know
														<span
															style={{
																fontWeight: "600",
																margin: "auto 2px",
															}}
														>
															how, when, where
														</span>
														your conversions happen!
													</Typography>
												</Box>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Box>
							{/* Buttom */}
							<Box
								sx={{
									display: "flex",
									alginItems: "center",
									justifyContent: "end",
									height: "60px",
									width: "90%",
									marginX: "1rem",
									marginY: ".5rem",
									paddingX: "1rem",
									cursor: "pointer",
								}}
							>
								<Box
									sx={{
										width: "277px",
										height: "46px",
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										paddingX: "1rem",
										background: "#31E716",
										borderRadius: "12px",
									}}
								>
									<Link
										href=""
										sx={{
											textDecoration: "none",
										}}
									>
										<Typography
											sx={{
												fontSize: "20px",
												fontWeight: "500",
												lineHeight: "39px",
												color: "#343132",
												textTransform: "uppercase",
											}}
										>
											See how it works
										</Typography>
									</Link>
									<svg
										width="26"
										height="25"
										viewBox="0 0 26 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M13.5335 0.0334638L11.4665 2.10039L20.344 10.9778L0.522155 10.9778L0.522154 13.8922L20.344 13.8922L11.4665 22.7697L13.5335 24.8366L25.935 12.435L13.5335 0.0334638Z"
											fill="#343132"
										/>
									</svg>
								</Box>
							</Box>
						</Box>
					</Box>

					<Footer />
					<FooterMobile />
				</Box>
			</Box>
		</>
	);
};

export default IllustrationDesktop;
