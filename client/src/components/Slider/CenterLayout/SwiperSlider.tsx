import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import SwiperCore, {
	EffectCoverflow,
	Pagination,
	Navigation,
	Thumbs,
} from "swiper";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import Slid from "./Slid";
import "swiper/swiper-bundle.min.css";

const SwiperSlider = () => {
	const { t } = useTranslation("slider");
	const [isVertical, setIsVertical] = useState(true);
	const thumbsSwiper = useRef<SwiperCore>();
	const images = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
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
					modules={[EffectCoverflow, Pagination, Thumbs]}
					thumbs={{ swiper: thumbsSwiper.current }}
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
					{images.map((item, index) => (
						<SwiperSlide
							key={index}
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
											sm: "60px",
											md: "70px",
											xl: "96px",
										},
										fontWeight: "500",
										color: "#31E716",
										lineHeight: { xs: "48px", md: "88.8px" },
										textAlign: "center",
										textTransform: "uppercase",
										marginY: ".2rem",
									}}
								>
									#{item}
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
						</SwiperSlide>
					))}
				</Swiper>
				{/* <Box
					sx={{
						position: "absolute",
						top: "1rem",
						right: "-1rem",
						width: "300px",
						overflow: "hidden",
					}}
				>
					<Swiper
						id="thumbs"
						spaceBetween={10}
						slidesPerView={1}
						onSwiper={(swiper) => (thumbsSwiper.current = swiper)}
					>
						{images.map((item, index) => (
							<SwiperSlide key={index}>
								<Typography
									sx={{
										fontSize: "36px",
										fontWeight: "600",
										lineHeight: "70px",
										color: "#31E716",
										textTransform: "uppercase",
									}}
								>
									#{item}
								</Typography>
							</SwiperSlide>
						))}
					</Swiper>
				</Box> */}
			</Box>
		</>
	);
};

export default SwiperSlider;
