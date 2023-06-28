import { useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import NextLink from "next/link";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";
import { icons, links } from "../Layout/GLobal";
const ModalFooter = dynamic(() => import("./ModalFooter"), {
	ssr: false,
});

const Footer = ({ onClick }: any) => {
	const { t } = useTranslation("common");
	const router = useRouter();

	// modal
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	function closeModel() {
		setOpen(false);
	}
	function openModel() {
		setOpen(true);
	}

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row", xl: "row" },
					alignItems: "center",
					justifyContent: {
						xs: "start",
						md: "space-between",
						xl: "space-between",
					},
					zIndex: "999",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",

						width: { xs: "40%", lg: "50%" },
						justifyContent: "space-between",
						flexDirection: { xs: "column", md: "row", xl: "row" },
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", md: "30%", lg: "25%" },

							display: "flex",
							alignItems: "end",
							justifyContent: { xs: "center", md: "start", xl: "start" },
							margin: { xs: " .1rem 0", sm: "2rem 0", md: "0", xl: "0" },
							zIndex: "999",
							paddingY: ".5rem",
						}}
					>
						{icons.map((item) => (
							<Link
								key={item.id}
								title={item.alt}
								href={item.link}
								target="_blank"
							>
								<Image
									src={item.icon}
									alt={item.alt}
									title={item.alt}
									height={30}
									width={30}
									style={{
										margin: "auto 1rem",
									}}
								/>
							</Link>
						))}
					</Box>
					<Box
						sx={{
							width: { xs: "100%", md: "45%", lg: "30%" },

							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						{/* Modal Slider Cards Keywords */}
						<Box
							sx={{
								// width: "253px",
								width: { xs: "220px", md: "263px", lg: "253px" },
								height: "60px",
								lineHeight: "92.5%",
								background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
								borderRadius: "11px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								position: "relative",
								bottom: { xs: "0", md: "-.8rem", xl: "-.9rem" },
								cursor: "pointer",
								paddingX: "1rem",
								// marginBottom:"-.5rem"
							}}
							onClick={onClick}
						>
							<Typography
								sx={{
									 
									fontSize: "32px",
								}}
								fontWeight="700"
								lineHeight="92.5%"
								textAlign="center"
								className="premium"
							>
								{t("premium")}
							</Typography>
						</Box>
					</Box>
				</Box>
				<>
					<Box
						sx={{
							width: { xs: "100%", md: "50%", lg: "40%" },
							// width: "40%",
							display: { xs: "none", md: "flex" },
							alignItems: "center",
							justifyContent: "end",
							height: "100%",
							flexDirection: { xs: "column", md: "row", xl: "row" },
						}}
					>
						<NextLink
							href="/"
							style={{
								textDecoration: "none",
								color: "inherit",
								cursor: "pointer",
							}}
						>
							<Box
								sx={{
									border: "1px solid #343132",
									borderRadius: "34px",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-around",
									width: { xs: "100px", lg: "130px" },
								}}
							>
								<Typography
									fontSize="20px"
									fontWeight="400"
									lineHeight="32px"
									textAlign="center"
									textTransform={"capitalize"}
								>
									{t("footer_play")}
								</Typography>
								<Image
									src="/icons/play.png"
									alt={t("footer_learn")}
									title={`${t("footer_learn")}`}
									width={20}
									height={20}
								/>
							</Box>
						</NextLink>
						<NextLink
							href="#"
							locale={router.locale}
							title="View On Website  Modal"
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
							onClick={openModel}
						>
							<Box
								sx={{
									border: "1px solid #343132",
									borderRadius: "34px",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-around",
									width: { xs: "120px", lg: "130px" },
									margin: "auto .3rem",
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
								<Image
									src="/icons/i.svg"
									alt="View On Website Icon more"
									title="View On Website Icon more"
									width={20}
									height={20}
								/>
							</Box>
						</NextLink>
						<>
							<ModalFooter
								open={open}
								onClick={closeModel}
								close={handleClose}
							/>
						</>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								marginY: { xs: "1rem", md: "0" },
							}}
						>
							{links.map((item) => (
								<NextLink
									key={item.id}
									href={item.link}
									title={`${t(item.title)}`}
									locale={router.locale}
									style={{
										textDecoration: "none",
										color: "inherit",
										margin: "auto .8rem",
										fontSize: "20px",
										fontWeight: "400",
										lineHeight: "30px",
										textTransform: "capitalize",
									}}
								>
									{`${t(item.title)}`}
								</NextLink>
							))}
						</Box>
					</Box>
				</>
			</Box>
		</>
	);
};

export default Footer;
