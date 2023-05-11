import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useState } from "react";
const Footer = ({ onClick }: any) => {
	const { t } = useTranslation("common");

	return (
		<footer>
			<Box
				sx={{
					width: "100%",
					maxWidth: "100%",
					display: { xs: "", md: "flex", xl: "flex" },
					flexDirection: { xs: "column", md: "row", xl: "row" },
					alignItems: "start",
					justifyContent: {
						xs: "space-between",
						md: "space-between",
						xl: "space-between",
					},
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", md: "30%", xl: "30%" },
						display: { xs: "flex", md: "flex", xl: "flex" },
						alignItems: "center",
						justifyContent: { xs: "center", md: "start", xl: "start" },
						margin: { xs: " .1rem 0", sm: "2rem 0", md: "0", xl: "0" },
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
						width: { xs: "100%", md: "70%", xl: "70%" },
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						// flexDirection: { xs: "column-reverse", md: "row", xl: "row" },
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", md: "30%", xl: "30%" },
							display: "flex",
							alignItems: "center",
							justifyContent: {
								xs: "center",
								md: "space-between",
								xl: "space-between",
							},
						}}
					>
						<Box
							sx={{
								width: { xs: "200px", md: "253px", xl: "253px" },
								height: "60px",
								lineHeight: "92.5%",
								background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
								borderRadius: "11px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								position: "relative",
								bottom: "-1rem",
								cursor: "pointer",
							}}
							onClick={onClick}
						>
							<Typography
								sx={{
									fontSize: { xs: "25px", xl: "32px" },
								}}
								fontWeight="400"
								lineHeight="92.5%"
								textAlign="center"
							>
								{t("premium")}
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							width: { xs: "100%", md: "60%", xl: "60%" },
							display: { xs: "none", md: "flex", xl: "flex" },
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
			</Box>
		</footer>
	);
};

export default Footer;
