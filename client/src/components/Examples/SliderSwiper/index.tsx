import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderSwiper() {
	const images = [
		{ id: 1, img: "/images/slid.png" },
		{ id: 2, img: "/images/slid.png" },
		{ id: 3, img: "/images/slid.png" },
		{ id: 4, img: "/images/slid.png" },
		{ id: 5, img: "/images/slid.png" },
		{ id: 6, img: "/images/slid.png" },
	];
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className="mySwiper"
			>
				{images.map((item) => (
					<SwiperSlide
						key={item.id}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
					>
						<img
							src={item.img}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							alt=""
							title=""
							// loading="lazy"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
