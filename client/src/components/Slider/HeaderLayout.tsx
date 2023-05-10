import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const HeaderLayout = () => {
	const { t } = useTranslation("slider");
	const { locale } = useRouter();
	return (
		<>
			<Box>
				{locale === "ar" ? (
					<Typography
						sx={{
							fontSize: { xs: "25px", md: "30px", xl: "40px" },
							fontWeight: "400",
							lineHeight: "45px",
						}}
					>
						{t("title")}
						<Typography
							component={"span"}
							sx={{
								paddingX: "10px",
								background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
								borderRadius: "7px",
								fontSize: { xs: "25px", md: "30px", xl: "40px" },
								fontWeight: "400",
								lineHeight: "45px",
							}}
						>
							#{t("keyword")}
						</Typography>
						{t("prime")}
					</Typography>
				) : (
					<Typography
						sx={{
							fontSize: { xs: "25px", md: "30px", xl: "40px" },
							fontWeight: "400",
							lineHeight: "45px",
						}}
					>
						{t("title")}
						<Typography
							component={"span"}
							sx={{
								paddingX: "10px",
								background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
								borderRadius: "7px",
								fontSize: { xs: "25px", md: "30px", xl: "40px" },
								fontWeight: "400",
								lineHeight: "45px",
							}}
						>
							#{t("keyword")}
						</Typography>
						{/* {t("prime")} */}
					</Typography>
				)}
			</Box>
		</>
	);
};

export default HeaderLayout;
