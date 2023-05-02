import Header from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Box } from "@mui/system";
import Image from "next/image";
import { Grid, Link, Typography } from "@mui/material";

const IllustrationTablet = () => {
	return (
		<>
			<Box
				sx={{
					width: "100%",
					background: "#EAEDED",
					overflow: "hidden",
					marginTop: "5rem",
				}}
				className="IllustrationTablet"
			>
				<Box
					sx={{
						maxWidth: "100%",
						margin: "auto",
						height: { xs: "100%", md: "120vh", xl: "100vh" },
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
								top: "-43rem",
								position: "absolute",
							}}
						/>
					</Box>
					<Box
						sx={{
							position: "relative",

							// right: { xs: "0%", sm: "0%", md: "10%", xl: "14%" },
							maxWidth: "100%",
							width: "100%",
							height: { xs: "100%", sm: "100%", md: "100%", xl: "650px" },
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
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
							// borderRadius: "30px",
							// transform: "skew(-16deg, 0deg)",
						}}
					>
						<Box
							sx={{
								height: "90vh",
								width: { xs: "98%", xl: "80%" },
								display: "flex",
								flexDirection: "column",
								// transform: "skew(16deg, 0deg)",
							}}
						>
							{/* Header Top */}
							<Box
								sx={{
									height: "280px",
									display: "flex",
									justifyContent: "space-between",
									position: "relative",
									marginTop: "1rem",
								}}
							>
								<Box
									sx={{
										width: "100%",
										height: "280px",
										display: "flex",
										flexDirection: "column",
									}}
								>
									<Box
										sx={{
											width: { xs: "100%" },
											marginBottom: "1rem",
										}}
									>
										<Typography
											sx={{
												fontSize: { xs: "30px", md: "50px", xl: "64px" },
												fontWeight: "600",
												lineHeight: "45px",
											}}
										>
											The Call to Action Everyone Already Knows !
										</Typography>
									</Box>
									<Box
										sx={{
											height: "50px",
											width: "419px",
											background:
												" linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
											borderRadius: "7px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											marginBottom: "1rem",
										}}
									>
										<Typography
											sx={{
												fontSize: "40px",
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
											width: "100%",
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
										width: "70%",
										height: "280px",
										display: "flex",
										alignItems: "",
										justifyContent: "center",
										flexDirection: "column",
										position: "relative",
									}}
								>
									<img
										src="/images/illustrationPic.png"
										style={{
											width: "100%",
										}}
										alt=""
									/>
									<Box
										sx={{
											width: "257px",
											height: "90px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											position: "absolute",
											bottom: "0rem",
											right: "5rem",
											zIndex: "9999999999",
										}}
									>
										<Typography
											sx={{
												fontSize: { md: "20px", xl: "24px" },
												lineHeight: "22px",
												fontWeight: "500",
												position: "relative",
												zIndex: "9999999999",
												background: "transparent",
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
									width: "100%",
								}}
							>
								<Box
									sx={{
										width: { xs: "100%", md: "95%" },
										height: "100%",
										display: "flex",
										justifyContent: { xs: "space-around", md: "start" },
										position: "relative",
									}}
								>
									<Box
										sx={{
											width: { xs: "100%", md: "25%", xl: "203px" },
											height: "100%",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
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
											width: { xs: "500px", md: "200px" },
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<img
											src="/icons/arrow.png"
											style={{
												width: "100%",
												height: "auto",
											}}
										/>
									</Box>
									<Box
										sx={{
											height: "126px",
											paddingTop: "1rem",
										}}
									>
										<img src="/images/illustrationPicCenter.png" />
									</Box>

									<Box
										sx={{
											width: "10px",
											height: { xs: "", md: "150px" },
											position: "absolute",
											right: { xs: "20rem", sm: "20rem", md: "35rem" },
											top: "-8rem",
										}}
										className="illustrationArrowsUp"
									>
										<img
											src="/icons/arrowUp.png"
											style={{
												height: "100%",
											}}
										/>
									</Box>
									<Box
										sx={{
											width: "10px",
											height: { xs: "", md: "150px" },
											position: "absolute",
											right: { xs: "20rem", sm: "20rem", md: "23rem" },
											top: "-8rem",
										}}
										className="illustrationArrowsright"
									>
										<img
											src="/icons/arrowupright.png"
											style={{
												height: "100%",
											}}
										/>
									</Box>
								</Box>
							</Box>
							{/* Three Option */}
							<Box
								sx={{
									width: "100%",
									height: "400px",
									display: "flex",
									alignItems: "center",
									justifyContent: { xs: "", md: "space-around" },
									flexDirection: "column",
								}}
							>
								<Grid
									justifyContent="space-between"
									alignItems="center"
									container
									sx={{
										flexDirection: { xs: "", md: "row" },
									}}
								>
									<Grid
										item
										md={3}
										sx={{
											marginLeft: ".5rem",
										}}
										sm={12}
									>
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
															fontSize: "35px",
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
															fontSize: "20px",
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
									<Grid
										item
										md={4}
										sx={{
											marginLeft: "1rem",
										}}
										sm={12}
									>
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
															fontSize: "35px",
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
															fontSize: "20px",
															lineHeight: "20px",
															fontWeight: "400",
														}}
													>
														Put and shape it the
														<span
															style={{
																fontWeight: "600",
																margin: "auto 2px",
															}}
														>
															way you like wherever you like
														</span>
													</Typography>
												</Box>
											</Box>
										</Box>
									</Grid>
									<Grid
										item
										md={4}
										sx={{
											marginLeft: "1rem",
										}}
										sm={12}
									>
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
															fontSize: "35px",
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
															fontSize: "20px",
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
									width: "97%",
									marginX: "1rem",
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
				</Box>
			</Box>
		</>
	);
};

export default IllustrationTablet;
