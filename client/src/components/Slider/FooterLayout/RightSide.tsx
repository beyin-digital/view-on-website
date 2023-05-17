import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Box, Button, Typography } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import { FiArrowDownRight, FiArrowDownLeft } from "react-icons/fi";

const RightSide = () => {
	const { t } = useTranslation("slider");
	const { locale } = useRouter();

	const check = [
		{ id: 1, title: "Easy to Read from Distance", tKey: "list_one" },
		{ id: 1, title: "Continuous Analytical Reports", tKey: "list_two" },
		{ id: 1, title: "Profile Chart Dashboard", tKey: "list_three" },
		{ id: 2, title: "SEO Supported Keyword", tKey: "list_four" },
	];
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				flexDirection: { xs: "column-reverse",sm:"row", md:"row" },
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					width: {
						xs: "70%",
						sm: "60%",
						md: "50%",
						xl: "50%",
					},
				}}
			>
				{/* Check components */}
				<>
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
									justifyContent: "center",
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
											// textAlign:"right"
										}}
									>
										{t(item.tKey)}
									</Typography>
								</Box>
							</Box>
						))}
					</>
				)}
				</>
			</Box>
			{/*  */}
			<Box
				sx={{
					width: {
						xs: "100%",
						sm: "60%",
						md: "60%",
						xl: "50%",
					},
					display: "flex",
					alignItems: "center",
					justifyContent: { xs: "space-between", md: "space-around" },
					flexDirection: "row-reverse",
					marginY: { xs: "1rem", md: "", xl: "" },
					paddingX: "1rem",
				}}
			>
				<Box
					sx={{
						width: { xs: "50%", md: "35%", xl: "45%" },
						height: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						marginX: "1rem",
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
						$3.65
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
						width: { xs: "50%", md: "20%", xl: "45%" },
						height: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
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
						$1M
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
		</Box>
	);
};

export default RightSide;
