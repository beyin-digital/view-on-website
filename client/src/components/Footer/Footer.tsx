import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Footer = () => {
	const { t } = useTranslation("common");

	return (
		<>
			<Box
				sx={{
					width: "100%",
					display: { xs: "none", sm: "none", md: "flex", xl: "flex" },
					flexDirection: { xs: "column", md: "row", xl: "row" },
					alignItems: "center",
					justifyContent: {
						xs: "space-between",
						md: "space-between",
						xl: "space-between",
					},
				}}
			>
				<Box
					sx={{
						width: "100%",
						display: { xs: "flex", md: "flex", xl: "flex" },
						alignItems: "center",
						justifyContent: { xs: "center", md: "start", xl: "start" },
						margin: { xs: " 2rem 0", xl: "0" },
					}}
				>
					<Image
						src="/icons/facebook.svg"
						alt=""
						height={30}
						width={30}
						style={{
							margin: "0 2rem",
						}}
					/>
					<Image
						src="/icons/twitter.svg"
						alt=""
						height={30}
						width={30}
						style={{
							margin: "0 2rem",
						}}
					/>
					<Image
						src="/icons/insta.svg"
						alt=""
						height={30}
						width={30}
						style={{
							margin: "0 2rem",
						}}
					/>
				</Box>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-around",
					}}
				>
					<Box
						sx={{
							border: "1px solid #343132",
							borderRadius: "34px",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-around",
							width: "143px",
						}}
					>
						<Typography
							fontSize="20px"
							fontWeight="400"
							lineHeight="32px"
							textAlign="center"
							textTransform={"capitalize"}
						>
							{t("footer_learn")}
						</Typography>
						<Image src="/icons/i.svg" alt="" width={20} height={20} />
					</Box>
					<Typography
						fontSize="20px"
						fontWeight="400"
						lineHeight="32px"
						textAlign="center"
						textTransform={"capitalize"}
					>
						{" "}
						{t("footer_terms")}
					</Typography>
					<Typography
						fontSize="20px"
						fontWeight="400"
						lineHeight="32px"
						textAlign="center"
						textTransform={"capitalize"}
					>
						{t("footer_privacy")}
					</Typography>
					<Typography
						fontSize="20px"
						fontWeight="400"
						lineHeight="32px"
						textAlign="center"
						textTransform={"capitalize"}
					>
						{t("footer_contact")}
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default Footer;
