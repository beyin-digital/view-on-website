import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Box, Button, Typography } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import { FiArrowDownRight, FiArrowDownLeft } from "react-icons/fi";

const RightSide = () => {
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
					width: {
						xs: "100%",
						sm: "40%",
						md: "40%",
						xl: "50%",
					},
					display: "flex",
					alignItems: "center",
					justifyContent: {
						xs: "space-between",
						sm: "space-around",
						md: "space-around",
						xl: "space-around",
					},
					flexDirection: {
						xs: "row",
						sm: "row",
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
						{/* {t("text_num")} */}
						3.65$
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
						{/* {t("more_dolor")} */}
						{/* {t("dolor")} */}
						{/* {t("num_more")} */}
						1M
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
				}}
			>
				{locale === "ar" ? (
					<>
						{check.map((item) => (
							<Box
								key={item.id}
								sx={{
									display: "flex",
									alignItems: "center",
									height: { xs: "30px", xl: "25px" },
									flexDirection: "row-reverse",
								}}
							>
								<CheckIcon fontSize="small" />
								<Box
									sx={{
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
					</>
				) : (
					<>
						{check.map((item) => (
							<Box
								key={item.id}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									height: { xs: "30px", xl: "25px" },
									// flexDirection:"row-reverse"
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
					</>
				)}
			</Box>
		</>
	);
};

export default RightSide;
