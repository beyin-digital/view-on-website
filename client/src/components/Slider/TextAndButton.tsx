import { Box, Button, Typography } from "@mui/material";

import { useTranslation } from "next-i18next";
import { Router, useRouter } from "next/router";
import { IconsStyle } from "../Button";

const TextAndButton = () => {
	const { t } = useTranslation("slider");
	const { locale } = useRouter();
	const router = useRouter();

	return (
		<>
			<Box
				sx={{
					width: "100%",
					height: "190px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					marginY: { xs: "3rem", md: "1rem", xl: "1rem" },
					// marginX: "1rem",
					paddingX: "1rem",
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
								marginX:"4px",
								background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
							}}
						>
							{locale === "ar" ? (
								<>#{t("footer_prime")} </>
							) : (
								<>#{t("keyword")}</>
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
								<>#{t("keyword")} </>
							)}
						</Typography>
						?
					</Typography>
				)}
				{/* <ButtonLogin name={`${t("button_two")}`} /> */}
				<Box
					sx={{
						width: {
							xs: "240px",
							sm: "300px",
							md: "300px",
							xl: "320px",
						},
						display: "flex",
						justifyContent: "end",
						background: "#0090EC",
						borderRadius: "16px",
					}}
				>
					<Button
						sx={{
							paddingX: "18px",
							height: "59px",
							width: { xs: "220px", md: "231px", xl: "271px" },
							display: "flex",
							justifyContent: "space-around",
						}}
						onClick={() => router.push("/subscribe")}
						type="submit"
						title={`${t("button_two")}`}
					>
						<Typography
							sx={{
								letterSpacing: "0.02em",
								fontSize: { xs: "20px", md: "25px", xl: "32px" },
								fontWeight: 400,
								lineHeight: "40px",
								color: "#FBFBFB",
								textTransform: "uppercase",
							}}
						>
							{t("button_two")}
						</Typography>
						<IconsStyle />
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default TextAndButton;
