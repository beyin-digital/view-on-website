import { Box, Typography, Link } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Footer = ({ onClick }: any) => {
	const { t } = useTranslation("common");

	const links = [
		{ id: 1, link: "/privacy", title: "footer_privacy" },
		{ id: 2, link: "/terms", title: "footer_terms" },
		{ id: 3, link: "/contact", title: "footer_contact" },
	];
	const icons = [
		{
			id: 1,
			icon: "/icons/facebook.svg",
			alt: "Facebook icon",
			link: "https://facebook.com",
		},
		{
			id: 2,
			icon: "/icons/twitter.svg",
			alt: "Twitter icon",
			link: "https://twitter.com",
		},
		{
			id: 3,
			icon: "/icons/instagram.svg",
			alt: "Instagram icon",
			link: "https://instagram.com",
		},
		{
			id: 4,
			icon: "/icons/linkedin.svg",
			alt: "Instagram icon",
			link: "https://linkedin.com",
		},
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
							width: { xs: "100%", md: "50%", xl: "35%" },
							display: { xs: "none", md: "flex" },
							alignItems: "center",
							justifyContent: "end",
						}}
					>
						<Link
							href="/illustration"
							title="View On Website Illustration Page"
							style={{
								textDecoration: "none",
								color: "inherit",
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
						</Link>

						{links.map((item) => (
							<Link
								key={item.id}
								href={item.link}
								title={`${t(item.title)}`}
								sx={{
									textDecoration: "none",
									color: "inherit",
									margin: "auto .8rem",
									fontSize: "20px",
									fontWeight: "400",
									lineHeight: "30px",
								}}
								textTransform={"capitalize"}
							>
								{`${t(item.title)}`}
							</Link>
						))}
					</Box>
				</>
			</Box>
		</footer>
	);
};

export default Footer;
