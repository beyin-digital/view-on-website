import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Box, Button, Typography } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import { FiArrowDownRight, FiArrowDownLeft } from "react-icons/fi";

const FooterLayout = () => {
	const { t } = useTranslation("slider");
	const { locale } = useRouter();

	const check = [
		{ id: 1, title: "Continuous Analytical Reports", tKey: "list_one" },
		{ id: 2, title: "Profile Chart Dashboard", tKey: "list_two" },
	];
	return (
		<>
			<Box
				sx={{
					height: { xs: "100%", md: "100px", xl: "100px" },
					width: "100%",
					display: "flex",
					alignItems: { xs: "", md: "center", xl: "center" },
					justifyContent: "space-between",
					flexDirection: { xs: "column", md: "row", xl: "row" },
				}}
				// className="FooterLayoutSlider"
			>
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
							xl: "row",
						},
						marginY: { xs: "2rem", md: ".5rem", xl: ".5rem" },
						border: "1px solid #FBFBFB",
						background: {
							xs: "#FBFBFB",
							md: "transparent",
							xl: "transparent",
						},
						borderRadius: "24px",
						paddingY: "1rem",
					}}
				>
					<Box
						sx={{
							width: {
								xs: "100%",
								sm: "40%",
								md: "40%",
								xl: "50%",
							},
							display: "flex",
							alignItems: "center",
							justifyContent: {
								xs: "center",
								md: "space-around",
								xl: "space-around",
							},
							flexDirection: {
								xs: "row",
								sm: "column",
								md: "row",
								xl: "row",
							},
							marginY: { xs: "1rem", md: "", xl: "" },
						}}
					>
						<Box
							sx={{
								width: { xs: "30%", md: "35%", xl: "23%" },
								height: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<Typography
								sx={{
									fontSize: {
										xs: "30px",
										sm: "40px",
										md: "40px",
										xl: "40px",
									},
									lineHeight: "37px",
									fontWeight: "400",
									marginY: ".5rem",
								}}
							>
								{t("text_num")}
								{t("dolor")}
							</Typography>
							<Typography
								sx={{
									fontSize: "16px",
									lineHeight: "14px",
									fontWeight: "300",
									height: { xs: "100%", md: "20px", xl: "20px" },
									color: "#343132",
								}}
							>
								{t("text_dolor")}
							</Typography>
						</Box>
						<Box
							sx={{
								width: { xs: "30%", md: "20%", xl: "25%" },
								height: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<Typography
								sx={{
									fontSize: {
										xs: "30px",
										sm: "40px",
										md: "40px",
										xl: "40px",
									},
									lineHeight: "37px",
									fontWeight: "400",
									marginY: ".5rem",
								}}
							>
								{t("more_dolor")} 
								{t("num_more")}
							</Typography>
							<Typography
								sx={{
									fontSize: "16px",
									lineHeight: "14px",
									fontWeight: "300",
									height: { xs: "100%", md: "20px", xl: "20px" },
									color: "#343132",
								}}
							>
								{t("text_more")}
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							width: {
								xs: "100%",
								sm: "60%",
								md: "50%",
								xl: "40%",
							},
							// height: "100%",
							// border:"1px solid"
						}}
					>
						{check.map((item) => (
							<Box
								key={item.id}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									height: { xs: "30px", xl: "25px" },
								}}
							>
								<CheckIcon fontSize="small" />
								<Box
									sx={{
										width: "100%",
										paddingX: ".5rem",
									}}
								>
									<Typography
										sx={{
											fontSize: "16px",
											fontWeight: "400",
											lineHeight: "14px",
										}}
									>
										{t(item.tKey)}
									</Typography>
								</Box>
							</Box>
						))}
					</Box>
				</Box>
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
									fontFamily: "Helvetica Neue",
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
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default FooterLayout;
