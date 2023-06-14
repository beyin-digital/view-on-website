import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// components
import { icons, links } from "../Layout/GLobal";

import dynamic from "next/dynamic";
const ModalFooter = dynamic(() => import("./ModalFooter"), {
	ssr: false,
});

const Footer = () => {
	// translate hook
	const { t } = useTranslation("common");
	const { locale } = useRouter();
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
					width: "100%",
					display: { xs: "none", sm: "none", md: "flex", xl: "flex" },
					flexDirection: { xs: "column", md: "row", xl: "row" },
					alignItems: "center",
					justifyContent: {
						xs: "space-between",
						md: "space-between",
						xl: "space-between",
					},

					marginY: "-.2rem",
					marginBottom: ".1rem",
					position: "relative",
					zIndex: "9",
				}}
			>
				<Box
					sx={{
						width: "100%",
						display: { xs: "flex", md: "flex", xl: "flex" },
						alignItems: "center",
					}}
				>
					{icons.map((item) => (
						<Link
							key={item.id}
							title={`${item.alt}`}
							href={item.link}
							target="_blank"
						>
							<Image
								src={item.icon}
								alt={item.alt}
								title={`${item.alt}`}
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
					<Box
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
								width: "143px",
							}}
							onClick={openModel}
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
								alt={t("footer_learn")}
								title={`${t("footer_learn")}`}
								width={20}
								height={20}
							/>
							{/* modal */}
						</Box>
						<ModalFooter open={open} onClick={closeModel} close={handleClose} />
					</Box>

					{links.map((item) => (
						<Link
							key={item.id}
							href={item.link}
							title={`${t(item.title)}`}
							locale={router.locale}
							style={{
								textDecoration: "none",
								color: "inherit",
							}}
							// target="_blank"
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
