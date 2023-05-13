import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

const SwiperSlider = () => {
	const { t } = useTranslation("slider");

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
		<>
			<Box
				sx={{
					height: {
						xs: "600px",
						sm: "600px",
						md: "400px",
						xl: "300px",
					},
					width: "100%",
					maxWidth: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					background: "transparent",
				}}
				className="swiper-blurr oop"
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
					pagination={{
						type: "fraction",
						renderFraction: function (currentClass, totalClass) {
							return (
								'<span class="' +
								currentClass +
								'"> </span>' +
								`${t("of")}` +
								'<span class="' +
								totalClass +
								'"> </span>'
							);
						},
						clickable: true,
					}}
					autoplay={{ delay: 4000, disableOnInteraction: false }} // تحديد فترة التأخير بين كل انتقال
					direction={"horizontal"}
					style={{
						background: "transparent",
					}}
				>
					{images.map((item) => (
						<SwiperSlide
							key={item.id}
							style={{
								width: "100%",
								borderRadius: "32px",
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
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
								className="swiper-blur"
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
		</>
	);
};

export default SwiperSlider;
