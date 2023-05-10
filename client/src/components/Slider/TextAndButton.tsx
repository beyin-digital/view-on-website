import { Box,  Typography } from "@mui/material";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ButtonLogin } from "../Button";

const TextAndButton = () => {
	const { t } = useTranslation("slider");
	const { locale } = useRouter();
	return (
		<>
			<Box
				sx={{
					width: "100%",
					height: "170px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					margin: "1rem",
				}}
			>
				{locale === "ar" ? (
					<Typography
						sx={{
							fontSize: { xs: "20px", xl: "32px" },
							fontWeight: "400",
							lineHeight: "36px",
							marginY: "1rem",
						}}
					>
						{t("footer_text")}
						<Typography
							component={"span"}
							sx={{
								fontSize: { xs: "20px", xl: "32px" },
								borderRadius: "8px",
								background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
							}}
						>
							{locale === "ar" ? (
								<>#{t("footer_prime")} </>
							) : (
								<>#{t("keyword")} ?</>
							)}
						</Typography>
						{t("prime_two")}
					</Typography>
				) : (
					<Typography
						sx={{
							fontSize: { xs: "20px", xl: "32px" },
							fontWeight: "400",
							lineHeight: "36px",
							marginY: "1rem",
						}}
					>
						{t("footer_text")}
						<Typography
							component={"span"}
							sx={{
								fontSize: { xs: "20px", xl: "32px" },
								borderRadius: "8px",
								background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
							}}
						>
							{locale === "ar" ? (
								<>#{t("footer_prime")} </>
							) : (
								<>#{t("keyword")} ?</>
							)}
						</Typography>
					</Typography>
				)}
				<ButtonLogin name={`${t("button_two")}`} />
			</Box>
		</>
	);
};

export default TextAndButton;
