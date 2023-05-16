import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import Slid from "./Slid";

const SwiperSlider = () => {
	const { t } = useTranslation("slider");
	const [isVertical, setIsVertical] = useState(true);
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

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 610) {
				setIsVertical(true);
			} else {
				setIsVertical(false);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<>
			<Box
				sx={{
					height: {
						xs: "100%",
						sm: "300px",
						md: "250px",
						xl: "250px",
					},
					width: "100%",
					maxWidth: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					background: "#ffffff00",
				}}
				
			>
				<Swiper
					direction={isVertical ? "vertical" : "horizontal"}
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
					modules={[EffectCoverflow, Pagination]}
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
					autoplay={{ delay: 4000, disableOnInteraction: false }} // تحديد فترة التأخير بين كل انتقال					direction={isVertical ? "vertical" : "horizontal"}
					style={{
						background: "#ffffff00",
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

								zIndex: "9",
								position: "relative",
							}}
						>
							<img
								src="/images/card.png"
								style={{
									width: "auto",
								}}
								className="ImageSlider"
							/>
							<Box
								sx={{
									position: "absolute",
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
										marginY: ".2rem",
									}}
								>
									#{item.num}
								</Typography>
								{/* <Slid num={name} onNameChange={handleNameChange} /> */}
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
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</>
	);
};

export default SwiperSlider;
