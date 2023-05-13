import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const BackgroundImage = () => {
	return (
		<>
			<Box
				sx={
					{
						// width: "100%",
					}
				}
			>
				{/* <Image
					fill
					src="/images/swirl.svg"
					alt=""
					style={{
						// objectFit:"cover",
						top: "-30rem",
						position: "absolute",
					}}
				/> */}
				<img
					src="/images/swirl.svg"
					style={{
						top: "-80rem",
						position: "absolute",
						left:"-10rem"
					}}
				/>
			</Box>
		</>
	);
};

export default BackgroundImage;
