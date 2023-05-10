import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

const TextPremium = ({ onClick }: any) => {
	const { t } = useTranslation("slider");

	return (
		<>
			<Box
				sx={{
					width: "100%",
					position: "absolute",
					// top: "7rem",
					top: ".2rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					heigh: "50px",
					transform: "skew(0deg, 0deg)",
				}}
			>
				<Box
					sx={{
						width: "200px",
						height: "40px",
						lineHeight: "92.5%",
						background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
						borderRadius: "11px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						cursor: "pointer",
					}}
					onClick={onClick}
				>
					<Typography
						sx={{
							fontSize: { xs: "25px", xl: "32px" },
							fontWeight: "500",
							lineHeight: "29px",
							background: "",
						}}
					>
						{t("premium")}
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default TextPremium;
