import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import Image from "next/image";
import { links } from "../Layout/GLobal";

import ModalFooter from "../Footer/ModalFooter";

const FooterNav = () => {
	const { t } = useTranslation("common");
	const router = useRouter();

	// modal
	const [open, setOpen] = useState(false);

	function openModel() {
		setOpen(true);
	}
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "space-around",
					flexDirection: { xs: "column", sm: "row" },
					paddingX: "1rem",
					alignItems: { xs: "start", sm: "center" },
				}}
			>
				<Box
					sx={{
						width: { xs: "50%", sm: "50%" },
						display: "flex",
						justifyContent: "space-around",
						flexDirection: "column",
					}}
				>
					<Link
						href="https://youtube.com"
						style={{
							textDecoration: "none",
							color: "inherit",
							cursor: "pointer",
							marginTop: ".5rem",
							marginBottom: ".5rem",
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
					</Link>

					{/*  */}
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
						<ModalFooter
							open={open}
							onClick={() => {
								handleClose();
							}}
							// close={handleClose}
						/>
					</Box>
				</Box>
				{/*  */}
				<Box
					sx={{
						width: { xs: "50%", sm: "50%" },
						display: "flex",
						justifyContent: "space-around",
						flexDirection: "column",
					}}
				>
					{links.map((link) => (
						<Link
							key={t(link.title)}
							title={`${t(link.title)}`}
							href={link.link}
							style={{
								textDecoration: "none",
							}}
						>
							<Box
								sx={{
									height: "35px",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<Typography
									fontSize="18px"
									fontWeight={"400"}
									lineHeight="27px"
									color="#343132"
									textTransform={"capitalize"}
								>
									{t(link.title)}
								</Typography>
							</Box>
						</Link>
					))}
				</Box>
			</Box>
		</>
	);
};

export default FooterNav;
