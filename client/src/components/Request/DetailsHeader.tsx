import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";

const DetailsHeader = () => {
	const { t } = useTranslation("request");

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					marginY: "2rem",
				}}
			>
				<Image src="/images/logo.svg" alt="logo" width={150} height={80} />
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "20px", xl: "40px" },
							fontWeight: "400",
							lineHeight: { xs: "22px", xl: "37px" },
							marginTop: "2rem",
							textAlign: "center",
						}}
						color="#343132"
					>
						{/* Please enter your email address or #keyword */}
						{t("title")}
					</Typography>
					<Typography
						sx={{
							width: { xs: "100%", sm: "100%", md: "605px", xl: "605px" },
							fontSize: { xs: "20px", xl: "24px" },
							fontWeight: "400",
							lineHeight: { xs: "22px", xl: "37px" },
							marginY: ".5rem",
							textAlign: "center",
						}}
						color="#A0A9AB"
					>
						{/* We will send a link to Your email where you can make a new password:{" "} */}
						{t("desc")}
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default DetailsHeader;
