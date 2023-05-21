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
import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import "swiper/swiper-bundle.min.css";

import SwiperLabel from "./SwiperLabel";

SwiperCore.use([Navigation, Thumbs]);

type ReactIdSwiperRef = {
	swiper: any;
};

const SwiperSlider: React.FC<ReactIdSwiperRef> = () => {
	const { t } = useTranslation("slider");
	const [isVertical, setIsVertical] = useState(true);
	const [sliderValue, setSliderValue] = useState(0); // حالة لتخزين قيمة السلايدر الأول

	const keywords = [
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
	const [selectedKeyword, setSelectedKeyword] = useState(keywords[0]); // حالة لتخزين الصورة المحددة

	const swiperRef = useRef<ReactIdSwiperRef>(null);
	const handleSlideChange = (swiper: SwiperCore) => {
		if (swiperRef.current) {
			const swiperInstance = swiperRef.current.swiper;
			const currentIndex = swiperInstance.realIndex;
			setSelectedKeyword(keywords[currentIndex]);
		}
	};

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
						sm: "400px",
						md: "250px",
						xl: "250px",
					},
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					background: "transparent",
					flexDirection: { xs: "column-reverse", md: "row" },
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
					// loop={true}
					spaceBetween={3}
					modules={[EffectCoverflow, Pagination, Thumbs]}
					onSlideChange={handleSlideChange}
					ref={swiperRef}
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
					autoplay={{ delay: 4000, disableOnInteraction: false }}
					style={{
						// background: "transparent",
						position: "relative",
					}}
				>
					{keywords.map((keyword, index) => (
						<SwiperSlide
							key={index}
							style={{
								width: "100%",
								// height: "100%",
								borderRadius: "32px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								// background: "rgba(251, 251, 251, 0.25)",
								/* Stroke */

								// border: "1.63722px solid #E3E3E3",
								// // boxShadow: "0px 4px 168px rgba(0, 59, 97, 0.1)",
								// backdropFilter: "blur(10px)",
							}}
						>
							<img
								src="/images/card.png"
								style={{
									width: "800px",
								}}
								className="ImageSlider"
							/>

							<Box
								sx={{
									width: "800px",
									position: "absolute",
									zIndex: "999999",
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
									#{keyword}
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
				<SwiperLabel selectedKeyword={selectedKeyword} />
			</Box>
		</>
	);
};

export default SwiperSlider;