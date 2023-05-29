import { useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import NextLink from "next/link";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";

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
	const icons = [
		{
			id: 1,
			alt: "youtube",
			icon: "/icons/youtube.svg",
			link: "https://instagram.com",
		},
		{
			id: 3,
			alt: "instagram",
			link: "https://instagram.com",
			icon: "/icons/instagram.svg",
		},
		{
			id: 4,
			alt: "faceBook",
			link: "https://facebook.com",
			icon: "/icons/facebook.svg",
		},
	];
	const links = [
		{ id: 1, link: "/privacy", title: "footer_privacy" },
		{ id: 2, link: "/terms", title: "footer_terms" },
		{ id: 3, link: "/contact", title: "footer_contact" },
	];
	return (
		<footer>
			<Box
				sx={{
					width: "100%",
					maxWidth: "100%",
					display: "flex",
					flexDirection: { xs: "column", md: "row", xl: "row" },
					alignItems: "center",
					justifyContent: {
						xs: "space-between",
						md: "space-between",
						xl: "space-between",
					},
					height: { xs: "100%", md: "70px", xl: "70px" },
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", md: "30%", xl: "35%" },
						height: "100%",
						display: "flex",
						alignItems: "end",
						justifyContent: { xs: "center", md: "start", xl: "start" },
						margin: { xs: " .1rem 0", sm: "2rem 0", md: "0", xl: "0" },
						zIndex: "999",
						paddingY: "1rem",
					}}
				>
					{icons.map((item) => (
						<Link key={item.id} title={item.alt} href={item.link}>
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
						width: { xs: "100%", md: "20%", xl: "25%" },
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						overflow: "hidden",
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
							bottom: { xs: "-.5rem", md: "-.8rem", xl: "-1rem" },
							cursor: "pointer",
						}}
						onClick={onClick}
					>
						<Typography
							sx={{
								fontSize: { xs: "25px", xl: "32px" },
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
				<>
					<Box
						sx={{
							width: { xs: "100%", md: "50%", xl: "40%" },
							display: { xs: "none", md: "flex" },
							alignItems: "center",
							justifyContent: "end",
							height: "100%",
						}}
					>
						<NextLink
							href=""
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
									width: "143px",
									margin: "auto .7rem",
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
				</>
			</Box>
		</footer>
	);
};

export default Footer;
