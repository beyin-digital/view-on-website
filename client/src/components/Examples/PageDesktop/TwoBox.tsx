import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

interface Position {
	x: number;
	y: number;
}

const TwoBox = () => {
	return (
		<>
			<Box
				sx={{
					width: "700px",
					maxWidth: "100%",
					borderLeft: "1px solid #FBFBFB",
					borderBottom: "1px solid #FBFBFB",
					borderTopLeftRadius: "30px",
					borderBottomLeftRadius: "30px",
					backdropFilter: "blur(100px)",
					background:
						"radial-gradient(19.29% 37.23% at 20.86% 80.45%, rgba(34, 71, 23, 0.3) 0%, rgba(49, 231, 22, 0.012) 100%)",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					position: "relative",
					right: "-1.5rem",
				}}
				// className="hoverMouse"
			>
				<Box
					sx={{
						transform: { xs: "skew(1deg, 0deg)", xl: "skew(15deg, 0deg)" },
						marginTop: "2rem",
						marginX: "2rem",
					}}
				>
					<Typography
						sx={{
							width: { md: "100%", xl: "200px" },
							fontSize: "20px",
							lineHeight: "18px",
							fontWeight: "500",
							marginY: ".5rem",
						}}
					>
						Type the #kyeword.
					</Typography>
					<Typography
						sx={{
							width: { md: "100%", xl: "300px" },
							fontSize: "14px",
							lineHeight: "13px",
							fontWeight: "300",
							marginY: ".5rem",
						}}
					>
						Your customers will quickly type the #keyword they saw in the label
						you displayed and visit your website through our homepage.
					</Typography>
				</Box>
				<Box
					sx={{
						transform: { xs: "skew(1deg, 0deg)", xl: "skew(15deg, 0deg)" },
						height: "432px",
						position: "absolute",
						bottom: "0",
						right: "0",
					}}
				>
					<img
						src="/images/mobile.png"
						alt=""
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
				</Box>
			</Box>
		</>
	);
};

export default TwoBox;
