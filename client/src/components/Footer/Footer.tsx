import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Footer = () => {
	const { t } = useTranslation("common");

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
	const links = [
		{ id: 1, link: "/privacy", title: "footer_privacy" },
		{ id: 2, link: "/terms", title: "footer_terms" },
		{ id: 3, link: "/contact", title: "footer_contact" },
	];
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
					top: "-.3rem",
					position: "relative",
				}}
			>
				<Box
					sx={{
						width: "100%",
						display: { xs: "flex", md: "flex", xl: "flex" },
						alignItems: "center",
						justifyContent: { xs: "center", md: "start", xl: "start" },
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
									margin: "0 1rem",
								}}
							/>
						</Link>
					))}
				</Box>
				<Box
					sx={{
						width: { xs: "", sm: "90%", xl: "50%" },
						display: "flex",
						alignItems: "center",
						justifyContent: "space-around",
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
					</Link>

					{links.map((item) => (
						<Link
							key={item.id}
							href={item.link}
							title={`${t(item.title)}`}
							sx={{
								textDecoration: "none",
								color: "inherit",
							}}
						>
							<Typography
								fontSize="20px"
								fontWeight="400"
								lineHeight="32px"
								textAlign="center"
								textTransform={"capitalize"}
							>
								{`${t(item.title)}`}
							</Typography>
						</Link>
					))}
				</Box>
			</Box>
		</>
	);
};

export default Footer;
