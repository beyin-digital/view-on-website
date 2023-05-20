import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export const BackgroundImage = () => {
	return (
		<>
			<Box>
				<img
					src="/images/swirl.svg"
					style={{
						top: "-80rem",
						position: "absolute",
						left: "-10rem",
						zIndex: "-9",
					}}
				/>
			</Box>
		</>
	);
};

export const BackgroundImageSlider = () => {
	return (
		<>
			<img
				src="/images/swirl.svg"
				style={{
					bottom: "10rem",
					position: "absolute",
					left: "0rem",
					zIndex: "-999999999999",
					width: "100%",
				}}
				className="SliderImageMobileNone"
			/>
			<img
				src="/images/swirl.svg"
				style={{
					top: "-20rem",
					position: "absolute",
					left: "0rem",
					zIndex: "-9",
					width: "100%",
				}}
				className="SliderImageMobile"
			/>
		</>
	);
};
