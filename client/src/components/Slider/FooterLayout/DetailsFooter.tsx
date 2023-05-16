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
			{locale === "ar" ? (
				<Box
					sx={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						flexDirection: { xs: "column-reverse", md: "row-reverse" },
						justifyContent: "center",
						marginTop: { xs: "3rem", sm: "0", xl: "0" },
					}}
				>
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
								// marginY: { xs: "2rem", md: ".5rem", xl: ".5rem" },
								border: {
									xs: "1px solid #FBFBFB",
									md: "transparent",
									xl: "transparent",
								},
								background: {
									xs: "rgba(251, 251, 251, 0.6)",
									md: "transparent",
									xl: "transparent",
								},
								borderRadius: "24px",
								backdropFilter: { xs: "blur(100px)", md: "blur(0px)" },
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
							marginY: { sm: "2rem" },
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
							) : (
								<Button
									sx={{
										borderRadius: "16px",
										paddingX: "18px",
										height: "59px",
										width: "311px",
										display: "flex",
										background: "#31E716",
										"&:hover": {
											background: "#31E716",
											color: "#343132",
										},
									}}
									// variant="contained"
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
							)}
						</Box>
					</Box>
				</Box>
			) : (
				<Box
					sx={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						flexDirection: { xs: "column-reverse", md: "row" },
						justifyContent: "center",
						marginTop: { xs: "3rem", sm: "0", xl: "0" },
					}}
				>
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
								// marginY: { xs: "2rem", md: ".5rem", xl: ".5rem" },
								border: {
									xs: "1px solid #FBFBFB",
									md: "transparent",
									xl: "transparent",
								},
								background: {
									xs: "rgba(251, 251, 251, 0.6)",
									md: "transparent",
									xl: "transparent",
								},
								borderRadius: "24px",
								backdropFilter: { xs: "blur(100px)", md: "blur(0px)" },
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
							marginY: { sm: "2rem" },
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
							) : (
								<Button
									sx={{
										borderRadius: "16px",
										paddingX: "18px",
										height: "59px",
										width: "311px",
										display: "flex",
										background: "#31E716",
										"&:hover": {
											background: "#31E716",
											color: "#343132",
										},
									}}
									// variant="contained"
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
							)}
						</Box>
					</Box>
				</Box>
			)}
		</>
	);
};

export default DetailsFooter;
