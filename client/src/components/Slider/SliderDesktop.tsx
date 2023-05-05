import Header from "@/components/Navbar/Navbar";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import FooterMobile from "@/components/Footer/FooterMobile";
import CheckIcon from "@mui/icons-material/Check";
import { FiArrowDownRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { ButtonLogin } from "../Button";

const SliderDesktop = () => {
	const check = [
		// { id: 1, title: "Easy to Read from Distance" },
		{ id: 1, title: "Continuous Analytical Reports" },
		{ id: 2, title: "Profile Chart Dashboard" },
		// { id: 1, title: "SEO Supported Keyword" },
	];
	const images = [
		{ id: 1, num: "a" },
		{ id: 2, num: "b" },
		{ id: 3, num: "c" },
		{ id: 4, num: "d" },
		{ id: 5, num: "e" },
		{ id: 6, num: "f" },
		{ id: 7, num: "g" },
		{ id: 8, num: "h" },
		{ id: 9, num: "i" },
		{ id: 10, num: "j" },
		{ id: 11, num: "k" },
		{ id: 12, num: "l" },
		{ id: 13, num: "m" },
		{ id: 14, num: "n" },
		{ id: 15, num: "o" },
		{ id: 16, num: "p" },
		{ id: 17, num: "q" },
		{ id: 18, num: "r" },
		{ id: 19, num: "s" },
		{ id: 20, num: "t" },
		{ id: 21, num: "u" },
		{ id: 22, num: "v" },
		{ id: 23, num: "w" },
		{ id: 24, num: "x" },
		{ id: 25, num: "y" },
		{ id: 26, num: "z" },
	];
	return (
		<Box
			sx={{
				width: "100%",
				background: "#EAEDED",
				// overflow: "hidden",
			}}
			className="SliderDeskto"
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
					overflow: "hidden",
				}}
			>
				{/* Navbar */}
				<Header />
				{/* background image */}
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
							top: "-37rem",
							position: "absolute",
						}}
					/>
				</Box>
				<Box
					sx={{
						position: "relative",
						marginY: "3rem",
					}}
				>
					{/* Text Premium top layout */}
					<Box
						sx={{
							width: "100%",
							position: "absolute",
							// top: "7rem",
							top: ".2rem",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							heigh: "50px",
							transform: "skew(0deg, 0deg)",
						}}
					>
						<Box
							sx={{
								width: "200px",
								height: "40px",
								lineHeight: "92.5%",
								background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
								borderRadius: "11px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "25px", xl: "32px" },
									fontWeight: "500",
									lineHeight: "29px",
									background: "",
								}}
							>
								Premium
							</Typography>
						</Box>
					</Box>
					{/* layout Box */}
					<Box
						sx={{
							position: "relative",
							top: "2.5rem",
							right: { xs: "0%", sm: "0%", md: "0%", xl: "20%" },
							maxWidth: "100%",
							width: "100%",
							height: { xs: "600px", sm: "600px", md: "500px", xl: "500px" },
							background: {
								xs: "rgba(251, 251, 251, 0.6)",
								md: "rgba(251, 251, 251, 0.6)",
								xl: "rgba(251, 251, 251, 0.6)",
							},
							border: {
								xs: "1px solid #FBFBFB",
								md: "1px solid #FBFBFB",
								xl: "1px solid #FBFBFB",
							},
							backdropFilter: {
								xs: "blur(100px)",
								md: "blur(100px)",
								xl: "blur(100px)",
							},
							borderRadius: "30px",
							transform: { xs: "", md: "", xl: "skew(-16deg, 0deg)" },
							overflow: { xs: "", md: "hidden", xl: "hidden" },
						}}
					>
						<>
							<Box
								sx={{
									width: "100%",
									height: "100%",
									display: "flex",
									alignItems: "center",
									justifyContent: { xs: "center", xl: "end" },
								}}
							>
								<Box
									sx={{
										width: { xs: "100%", md: "100%", xl: "80%" },
										height: "90%",

										transform: { xs: "", md: "", xl: "skew(16deg, 0deg)" },
										paddingX: { xs: "1rem", md: "2rem", xl: "6rem" },
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-around",
									}}
								>
									{/* text top layout */}
									<Box>
										<Typography
											sx={{
												fontSize: { xs: "25px", md: "30px", xl: "40px" },
												fontWeight: "400",
												lineHeight: "45px",
											}}
										>
											Reserve Your Premium{" "}
											<Typography
												component={"span"}
												sx={{
													paddingX: "10px",
													background:
														"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
													borderRadius: "7px",
													fontSize: { xs: "25px", md: "30px", xl: "40px" },
													fontWeight: "400",
													lineHeight: "45px",
												}}
											>
												#Keyword
											</Typography>
										</Typography>
									</Box>
									{/* slider swipre */}
									<Box
										className="oop"
										sx={{
											height: {
												xs: "100%",
												sm: "500px",
												md: "300px",
												xl: "300px",
											},
											width: "100%",
											maxWidth: "100%",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<Swiper
											effect={"coverflow"}
											grabCursor={true}
											centeredSlides={true}
											slidesPerView={2}
											coverflowEffect={{
												rotate: 0,
												stretch: 70,
												depth: 250,
												modifier: 1,
												slideShadows: false,
											}}
											loop={true}
											spaceBetween={30}
											modules={[EffectCoverflow, Pagination, Pagination]}
											className="swiper_container"
											// pagination={{
											// 	type: "fraction",
											// }}
											pagination={{
												type: "fraction",
												renderFraction: function (currentClass, totalClass) {
													return (
														'<span class="' +
														currentClass +
														'"></span>' +
														" of " +
														'<span class="' +
														totalClass +
														'"></span>'
													);
												},
											}}
											autoplay={{ delay: 4000, disableOnInteraction: false }} // تحديد فترة التأخير بين كل انتقال
											direction={"horizontal"}
										>
											{images.map((item) => (
												<SwiperSlide
													key={item.id}
													style={{
														width: "100%",
														borderRadius: "32px",
														// filter: "blur(150px)",
														backdropFilter: "blur(150px)",
														border: "1.63722px solid #E3E3E3",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
													}}
												>
													<Box
														sx={{
															width: {
																xs: "400px",
																sm: "100%",
																md: "100%",
																xl: "100%",
															},
															height: { xs: "150px", md: "189px", xl: "189px" },
															// background: "rgba(251, 251, 251, 0.25)",
															// backdropFilter: "blur(120px)",
															// filter: "blur(150px)",
															border: "1.63722px solid #E3E3E3",
															// boxShadow: "0px 4px 168px rgba(0, 59, 97, 0.1)",
															borderRadius: "32px",
															display: "flex",
															alignItems: "center",
															justifyContent: "center",
															zIndex: "9999999999",
															position: "relative",
														}}
													>
														<Box
															sx={{
																width: "200px",
																height: "100px",
															}}
														>
															<Typography
																sx={{
																	fontSize: {
																		xs: "50px",
																		sm: "96px",
																		ms: "96px",
																		xl: "96px",
																	},
																	fontWeight: "500",
																	color: "#31E716",
																	lineHeight: "88.8px",
																	textAlign: "center",
																	textTransform: "uppercase",
																}}
															>
																# {item.num}
															</Typography>
															<Typography
																sx={{
																	fontSize: {
																		xs: "16px",
																		sm: "20px",
																		md: "20px",
																		xl: "20px",
																	},
																	fontWeight: "500",
																	color: "#0091ED",
																	lineHeight: "18.8px",
																	textAlign: "center",
																}}
															>
																ViewOnWebsite.Com
															</Typography>
														</Box>
													</Box>
												</SwiperSlide>
											))}
										</Swiper>
									</Box>
									{/* footer layout  */}
									<Box
										sx={{
											height: { xs: "100%", md: "100px", xl: "100px" },
											width: "100%",
											display: "flex",
											alignItems: { xs: "", md: "center", xl: "center" },
											justifyContent: "space-between",
											flexDirection: { xs: "column", md: "row", xl: "row" },
										}}
									>
										<Box
											sx={{
												width: { xs: "100%", md: "80%", xl: "60%" },
												display: "flex",
												alignItems: "center",
												justifyContent: "space-between",
												flexDirection: {
													xs: "column",
													sm: "row",
													md: "row",
													xl: "row",
												},
												marginY: { xs: "2rem", md: ".5rem", xl: ".5rem" },
												border: "1px solid #FBFBFB",
												background: {
													xs: "#FBFBFB",
													md: "transparent",
													xl: "transparent",
												},
												borderRadius: "24px",
												paddingY: "1rem",
											}}
										>
											<Box
												sx={{
													width: {
														xs: "100%",
														sm: "40%",
														md: "40%",
														xl: "50%",
													},
													display: "flex",
													alignItems: "center",
													justifyContent: {
														xs: "center",
														md: "space-around",
														xl: "space-around",
													},
													flexDirection: {
														xs: "row",
														sm: "column",
														md: "row",
														xl: "row",
													},
													marginY: { xs: "1rem", md: "", xl: "" },
												}}
											>
												<Box
													sx={{
														width: { xs: "30%", md: "35%", xl: "20%" },
														height: "100%",
														display: "flex",
														flexDirection: "column",
														justifyContent: "center",
													}}
												>
													<Typography
														sx={{
															fontSize: {
																xs: "30px",
																sm: "40px",
																md: "40px",
																xl: "40px",
															},
															lineHeight: "37px",
															fontWeight: "400",
															marginY: ".5rem",
														}}
													>
														$1M
													</Typography>
													<Typography
														sx={{
															fontSize: "16px",
															lineHeight: "14px",
															fontWeight: "300",
															height: { xs: "100%", md: "20px", xl: "20px" },
															color: "#343132",
														}}
													>
														One time payment
													</Typography>
												</Box>
												<Box
													sx={{
														width: { xs: "30%", md: "20%", xl: "20%" },
														height: "100%",
														display: "flex",
														flexDirection: "column",
														justifyContent: "center",
													}}
												>
													<Typography
														sx={{
															fontSize: {
																xs: "30px",
																sm: "40px",
																md: "40px",
																xl: "40px",
															},
															lineHeight: "37px",
															fontWeight: "400",
															marginY: ".5rem",
														}}
													>
														$3.65
													</Typography>
													<Typography
														sx={{
															fontSize: "16px",
															lineHeight: "14px",
															fontWeight: "300",
															height: { xs: "100%", md: "20px", xl: "20px" },
															color: "#343132",
														}}
													>
														Yearly renewal
													</Typography>
												</Box>
											</Box>
											<Box
												sx={{
													width: { xs: "60%", md: "50%", xl: "40%" },
													// height: "100%",
													// border:"1px solid"
												}}
											>
												{check.map((item) => (
													<Box
														key={item.id}
														sx={{
															display: "flex",
															alignItems: "center",
															justifyContent: "space-between",
															height: "25px",
														}}
													>
														<CheckIcon fontSize="small" />
														<Box
															sx={{
																width: "100%",
																paddingX: ".5rem",
															}}
														>
															<Typography
																sx={{
																	fontSize: "16px",
																	fontWeight: "400",
																	lineHeight: "14px",
																}}
															>
																{item.title}
															</Typography>
														</Box>
													</Box>
												))}
											</Box>
										</Box>
										<Box
											sx={{
												width: { xs: "100%", md: "30%", xl: "30%" },
												display: "flex",
												alignItems: "end",
												justifyContent: { xs: "center", md: "", xl: "" },
												marginTop: { sm: "1rem" },
											}}
										>
											<Box
												sx={{
													width: "100%",
													display: "flex",
													justifyContent: {
														xs: "center",
														md: "end",
														xl: "end",
													},
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
													}}
												>
													<Typography
														sx={{
															fontFamily: "Helvetica Neue",
															letterSpacing: "0.02em",
															fontSize: "32px",
															fontWeight: 400,
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
								</Box>
							</Box>
						</>
					</Box>
				</Box>
				{/* text and button */}
				<Box
					sx={{
						width: "100%",
						height: "170px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
						margin: "1rem",
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "20px", xl: "32px" },
							fontWeight: "400",
							lineHeight: "36px",
							marginY: "1rem",
						}}
					>
						Want to look up your own Premium
						<Typography
							component={"span"}
							sx={{
								fontSize: { xs: "20px", xl: "32px" },
								borderRadius: "8px",
								background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
							}}
						>
							#keyword ?
						</Typography>
					</Typography>
					<ButtonLogin name="Subscribe" />
				</Box>
				{/* <Footer />
				<FooterMobile /> */}
			</Box>
			<Footer />
			<FooterMobile />
		</Box>
	);
};

export default SliderDesktop;
