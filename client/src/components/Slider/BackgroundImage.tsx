import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const BackgroundImage = () => {
	return (
		<>
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
		</>
	);
};

export default BackgroundImage;
