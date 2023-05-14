import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Box, Button, Typography } from "@mui/material";
import { FiArrowDownRight, FiArrowDownLeft } from "react-icons/fi";
import RightSide from "./RightSide";

const DetailsFooter = () => {
	const { t } = useTranslation("slider");
	const { locale } = useRouter();
	return (
		<>
			{/* Right Footer AR / EN */}
			{locale === "ar" ? (
				<Box
					sx={{
						width: { xs: "100%", md: "80%", xl: "60%" },
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: {
							xs: "column",
							sm: "row-reverse",
							md: "row-reverse",
							xl: "row-reverse",
						},
						marginY: { xs: "2rem", md: ".5rem", xl: ".5rem" },
						border: {
							xs: "1px solid #FBFBFB",
							md: "transparent",
							xl: "transparent",
						},
						background: {
							xs: "#FBFBFB",
							md: "transparent",
							xl: "transparent",
						},
						borderRadius: "24px",
						paddingY: "1rem",
					}}
				>
					<RightSide />
				</Box>
			) : (
				<Box
					sx={{
						width: { xs: "100%", md: "80%", xl: "60%" },
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: {
							xs: "column",
							sm: "row",
							md: "row",
							xl: "row-reverse",
						},
						marginY: { xs: "2rem", md: ".5rem", xl: ".5rem" },
						border: {
							xs: "1px solid #FBFBFB",
							md: "transparent",
							xl: "transparent",
						},
						background: {
							xs: "#FBFBFB",
							md: "transparent",
							xl: "transparent",
						},
						borderRadius: "24px",
						paddingY: "1rem",
					}}
				>
					<RightSide />
				</Box>
			)}
			{/* Button AR / EN */}
			<Box
				sx={{
					width: { xs: "100%", md: "30%", xl: "30%" },
					display: "flex",
					alignItems: "end",
					justifyContent: { xs: "center", md: "", xl: "" },
					marginTop: { sm: "1rem" },
				}}
			>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: {
							xs: "center",
							md: "end",
							xl: "end",
						},
					}}
				>
					{locale === "ar" ? (
						<Button
							sx={{
								borderRadius: "16px",
								paddingX: "18px",
								height: "59px",
								width: "311px",
								display: "flex",
								background: "#31E716",
								justifyContent: "space-around",
								flexDirection: "row-reverse",
								alignItems: "center",
							}}
						>
							<Typography
								sx={{
									letterSpacing: "0.02em",
									fontSize: "32px",
									fontWeight: 400,
									lineHeight: "40px",
									color: "#343132",
								}}
							>
								{t("button")}
							</Typography>
							{locale === "ar" ? (
								<FiArrowDownLeft size={42} color="#343132" />
							) : (
								<FiArrowDownRight size={42} color="#343132" />
							)}
						</Button>
					) : (
						<Button
							sx={{
								borderRadius: "16px",
								paddingX: "18px",
								height: "59px",
								width: "311px",
								display: "flex",
								background: "#31E716",
							}}
						>
							<Typography
								sx={{
									letterSpacing: "0.02em",
									fontSize: "32px",
									fontWeight: 400,
									lineHeight: "40px",
									color: "#343132",
								}}
							>
								{t("button")}
							</Typography>
							{locale === "ar" ? (
								<FiArrowDownLeft size={42} color="#343132" />
							) : (
								<FiArrowDownRight size={42} color="#343132" />
							)}
						</Button>
					)}
				</Box>
			</Box>
		</>
	);
};

export default DetailsFooter;
