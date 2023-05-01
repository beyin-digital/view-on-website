import Header from "@/components/Navbar/Navbar";
import Layout from "@/components/Layout/Layout";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
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

const SliderDesktop = () => {
	const check = [
		{ id: 1, title: "Easy to Read from Distance" },
		{ id: 1, title: "Continuous Analytical Reports" },
		{ id: 1, title: "Profile Chart Dashboard" },
		{ id: 1, title: "SEO Supported Keyword" },
	];
	const images = [
		{ id: 1, img: "/images/card.png" },
		{ id: 2, img: "/images/card.png" },
		{ id: 3, img: "/images/card.png" },
		{ id: 4, img: "/images/card.png" },
		{ id: 5, img: "/images/card.png" },
		{ id: 6, img: "/images/card.png" },
		{ id: 7, img: "/images/card.png" },
		{ id: 8, img: "/images/card.png" },
	];
	return (
		<Box
			sx={{
				width: "100%",
				background: "#EAEDED",
				overflow: "hidden",
			}}
			className="SliderDesktop"
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
						top: "-2.5rem",
						right: { xs: "0%", sm: "0%", md: "10%", xl: "20%" },
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
						transform: { xs: "skew(-10deg, 0deg)", xl: "skew(-20deg, 0deg)" },
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
								justifyContent: "end",
							}}
						>
							<Box
								sx={{
									width: { xs: "", md: "95%", xl: "80%" },
									height: "90%",
									transform: {
										xs: "skew(10deg, 0deg)",
										xl: "skew(20deg, 0deg)",
									},
									paddingX: "6rem",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-around",
								}}
							>
								<Box sx={{}}>
									<Typography
										sx={{
											fontSize: "40px",
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
												fontSize: "40px",
												fontWeight: "400",
												lineHeight: "45px",
											}}
										>
											#Keyword
										</Typography>
									</Typography>
								</Box>
								<Box
									className="oop"
									sx={{
										height: "300px",
										width: "100%",
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
									>
										{images.map((item) => (
											<SwiperSlide
												key={item.id}
												style={{
													// width: "80%",
													// height: "289px",
													objectFit: "cover",
												}}
											>
												<img
													src={item.img}
													alt=""
													style={{
														// width: "100%",
														// height: "100%",
														objectFit: "cover",
													}}
												/>
											</SwiperSlide>
										))}
									</Swiper>
								</Box>
								<Box
									sx={{
										height: "100px",
										width: "100%",
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
									}}
								>
									<Box
										sx={{
											width: "60%",
											height: "100%",
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
										}}
									>
										<Box
											sx={{
												width: "20%",
												height: "100%",
												display: "flex",
												flexDirection: "column",
												justifyContent: "center",
											}}
										>
											<Typography
												sx={{
													fontSize: "40px",
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
												}}
											>
												One time payment
											</Typography>
										</Box>
										<Box
											sx={{
												width: "20%",
												height: "100%",
												display: "flex",
												flexDirection: "column",
												justifyContent: "center",
											}}
										>
											<Typography
												sx={{
													fontSize: "40px",
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
												}}
											>
												Yearly renewal
											</Typography>
										</Box>
										<Box
											sx={{
												width: "40%",
												height: "100%",
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
															width: "85%",
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
											width: "30%",
											display: "flex",
											alignItems: "end",
										}}
									>
										<Box
											sx={{
												width: "100%",
												display: "flex",
												justifyContent: "end",
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
				<Footer />
				<FooterMobile />
			</Box>
		</Box>
	);
};

export default SliderDesktop;
