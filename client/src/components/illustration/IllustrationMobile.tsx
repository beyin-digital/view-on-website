import Header from "../Navbar/Navbar";
import FooterMobile from "../Footer/FooterMobile";
import { Box } from "@mui/system";
import Image from "next/image";
import { Button, Grid, Link, Typography } from "@mui/material";

const IllustrationMobile = () => {
	return (
		<>
			<Box
				sx={{
					width: "100%",
					background: "#EAEDED",
					overflow: "hidden",
				}}
				className="IllustrationMobile"
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
								top: "-86rem",
								position: "absolute",
							}}
						/>
					</Box>
					<Box
						sx={{
							position: "relative",
							maxWidth: "100%",
							width: "100%",
							height: { xs: "100%", sm: "100%", md: "100%", xl: "650px" },
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Box
							sx={{
								height: "100%",
								width: { xs: "98%", xl: "80%" },
								display: "flex",
								flexDirection: "column",
							}}
						>
							{/* header Page */}
							<Box
								sx={{
									height: { xs: "100%", md: "280px" },
									display: "flex",
									justifyContent: "space-between",
									position: "relative",
									marginTop: { xs: "10rem", sm: "10rem", md: "1rem" },
									alignItems: "center",
									flexDirection: { xs: "column", md: "row" },
									paddingX: { xs: "1rem", sm: "2rem", md: "3rem" },
								}}
							>
								<Box
									sx={{
										width: "100%",
										height: { xs: "auto", sm: "400px", md: "280px" },
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
											width: "100%",
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
												fontSize: { xs: "30px", sm: "40px" },

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
									<Box
										sx={{
											marginTop: { xs: "2rem" },
										}}
									>
										<Typography
											sx={{
												fontSize: { md: "20px", xl: "24px" },
												lineHeight: "22px",
												fontWeight: "500",
												position: "relative",
												zIndex: "99",
												background: "transparent",
											}}
										>
											From having no idea where your conversions come from..
										</Typography>

										<Box
											sx={{
												display: "flex",
												alignItems: { xs: "", md: "center" },
												justifyContent: "center",
												height: { xs: "150px", sm: "150px", md: "200px" },
											}}
										>
											<img src="/icons/arrowDown.png" />
										</Box>
									</Box>
								</Box>
								<Box
									sx={{
										width: "70%",
										height: { xs: "280px", sm: "330px" },
										display: "flex",
										justifyContent: { xs: "start", md: "center" },
										flexDirection: "column",
										position: "relative",
									}}
								>
									<Box
										sx={{
											paddingTop: "1rem",
											display: "flex",

											justifyContent: "center",
										}}
									>
										<img src="/images/illustrationPicCenter.png" />
									</Box>
								</Box>
							</Box>
							{/* Main Box Pic */}
							<Box
								sx={{
									width: "100%",
									height: "500px",

									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									position: "relative",
									flexDirection: "column",
								}}
							>
								<Box
									sx={{
										position: "absolute",
										top: { xs: "-2rem", sm: "-2rem" },

										width: { xs: "100%", sm: "80%" },
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
									className="illustrationBg"
								>
									<img
										src="/images/swirlSmall.svg"
										style={{
											width: "50%",
											// objectFit: "contain",
										}}
									/>
								</Box>
								<Box
									sx={{
										position: "absolute",
										left: { xs: "-6rem", sm: "-6rem" },
										top: { xs: "-11rem", sm: "-11.5rem" },
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										width: "100%",
									}}
									className="illustrationArrowLeftDown"
								>
									<img
										src="/icons/arrowDownLeft.png"
										style={{
											width: "160px",
										}}
									/>
								</Box>
								<Box
									sx={{
										width: { xs: "100%", sm: "70%" },
										// height: "400px",
										position: "relative",
										zIndex: "999",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										flexDirection: "column",
									}}
								>
									<img
										src="/images/illustrationPicMobile.png"
										style={{
											width: "100%",
											objectFit: "cover",
										}}
									/>
									<Typography
										sx={{
											fontSize: { md: "20px", xl: "24px" },
											lineHeight: "22px",
											fontWeight: "400",
											position: "relative",
											zIndex: "9999999999",
											background: "transparent",
											width: "262px",
										}}
									>
										To being fully in control of all your physical conversion
										details.
									</Typography>
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
											marginLeft: "1.5rem",
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
											marginLeft: "2rem",
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
									justifyContent: "center",
									height: "60px",
									width: "90%",
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
					<FooterMobile />
				</Box>
			</Box>
		</>
	);
};

export default IllustrationMobile;
