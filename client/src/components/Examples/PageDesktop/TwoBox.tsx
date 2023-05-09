import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const TwoBox = () => {
	const { t } = useTranslation("example");
	const { locale } = useRouter();

	return (
		<>
			{locale === "ar" ? (
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
						zIndex:"9"
					}}
				>
					<Box
						sx={{
							transform: "skew(-16deg, 0deg)",
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
							{t("box_two_title")}
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
							{t("box_two_desc")}
						</Typography>
					</Box>
					<Box
						sx={{
							transform: "skew(-16deg, 0deg)",
							height: "432px",
							position: "absolute",
							bottom: "0",
							right: "0",
						}}
					>
						<img
							src="/images/mobile.png"
							alt="View On Website Photo Inter Keyword"
							title="View On Website Photo Inter Keyword"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</Box>
				</Box>
			) : (
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
				>
					<Box
						sx={{
							transform: "skew(16deg, 0deg)",
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
							{t("box_two_title")}
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
							{t("box_two_desc")}
						</Typography>
					</Box>
					<Box
						sx={{
							transform: "skew(16deg, 0deg)",
							height: "432px",
							position: "absolute",
							bottom: "0",
							right: "0",
						}}
					>
						<img
							src="/images/mobile.png"
							alt="View On Website Photo Inter Keyword"
							title="View On Website Photo Inter Keyword"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</Box>
				</Box>
			)}
		</>
	);
};

export default TwoBox;
