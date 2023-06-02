import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import { useState } from "react";

import dynamic from "next/dynamic";
import { icons, links } from "../Layout/GLobal";
const ModalFooter = dynamic(() => import("./ModalFooter"), {
	ssr: false,
});
const TextViewOnWeb = dynamic(() => import("../Home/TextViewOnWeb"), {
	ssr: false,
});

const FooterMobile = () => {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const router = useRouter();

	// modal
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	function closeModel() {
		setOpen(false);
		// console.log("hi");
	}
	function openModel() {
		setOpen(true);
		// console.log("hi");
	}

	return (
		<>
			<Box
				sx={{
					height: { xs: "60vh", sm: "60vh", md: "" },
					width: "100%",
					display: { xs: "flex", sm: "flex", md: "none", xl: "none" },
					alignItems: "flex-end",
					justifyContent: "flex-end",
					position: "relative",
					background: "url('/images/swirl.webp')",
					backgroundPositionY: { xs: "0px", sm: "-5px" },
					backgroundPositionX: { xs: "-650px", sm: "-600px" },
				}}
			>
				<Box
					sx={{
						width: "100%",
						height: { xs: "100", sm: "42vh" },
						display: { xs: "flex", sm: "flex", md: "none", xl: "none" },
						alignItems: "end",
						justifyContent: "end",
						position: "relative",
						marginTop: { xs: "0", sm: "5rem" },
					}}
				>
					<Box
						sx={{
							width: "100%",
							border: "1px solid #E3E3E3",
							height: { xs: "100%", sm: "100%", md: "400px", xl: "30vh" },
							backdropFilter: "blur(50px)",
							borderRadius: "15px 15px 0px 0px",
							background: "rgba(251, 251, 251, 0.6)",
							display: "flex",
							justifyContent: "end",
							flexDirection: "column",
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: {
									xs: "column",
									sm: "row",
									md: "row",
									xl: "row",
								},
							}}
						>
							<Box
								sx={{
									width: { xs: "90%", md: "50%", xl: "40%" },
									height: "100%",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										marginTop: "1rem",
									}}
								>
									<Link href="/" title="logo View On Website">
										<Image
											src="/images/logo.svg"
											alt="Logo View On Website "
											title="Logo View On Website "
											width={100}
											height={50}
										/>
									</Link>

									<Typography
										sx={{
											fontSize: { xs: "8px", xl: "10px" },
											fontWeight: "600",
											lineHeight: "12px",
										}}
										color="#343132"
									></Typography>
								</Box>
								<TextViewOnWeb />

								<Typography
									sx={{
										fontSize: "14px",
										fontWeight: "400",
										lineHeight: "16px",
										marginY: ".5rem",
									}}
									color="#343132"
								>
									Be distantly directed to what you see!
								</Typography>
								{/* box icons */}
								<Box
									sx={{
										width: { xs: "90%", md: "50%", xl: "40%" },
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										margin: ".5rem 0",
									}}
								>
									{icons.map((item) => (
										<Link
											href={item.link}
											key={item.id}
											target="_blank"
											title={item.alt}
										>
											<Image
												src={item.icon}
												alt={item.alt}
												height={17}
												width={17}
												style={{
													margin: "0 10px",
												}}
											/>
										</Link>
									))}
								</Box>
							</Box>
							<Typography
								sx={{
									border: "1px solid #E3E3E3",
									width: "100%",
									marginY: ".5rem",
									display: { xs: "block", sm: "none" },
								}}
							/>

							<Box
								sx={{
									width: { xs: "90%", sm: "30%", md: "50%", xl: "40%" },
									height: { xs: "50%", sm: "200px", md: "100%", xl: "100%" },
									display: "flex",
									alignItems: {
										xs: "start",
										sm: "start",
										md: "center",
										xl: "center",
									},
									justifyContent: "space-around",
									flexDirection: {
										xs: "column",
										sm: "column",
										md: "row",
										xl: "row",
									},
									paddingX: { xs: "1rem", sm: "0", md: "0", xl: "0" },
								}}
							>
								{links.map((item) => (
									<Link
										href={item.link}
										title={`${t(item.title)}`}
										locale={router.locale}
										key={item.id}
										style={{
											textDecoration: "none",
											color: "#343132",
										}}
									>
										<Typography
											sx={{
												fontSize: { xs: "14px", sm: "20px" },
												fontWeight: "400",
												lineHeight: "25px",
												textAlign: "center",
												textTransform: "capitalize",
											}}
										>
											{t(item.title)}
										</Typography>
									</Link>
								))}
								<>
									<Typography
										sx={{
											fontSize: { xs: "14px", sm: "20px" },
											fontWeight: "400",
											lineHeight: "25px",
											textAlign: "center",
											textTransform: "capitalize",
											cursor: "pointer",
										}}
										onClick={openModel}
									>
										{t("footer_learn")}
									</Typography>
									<ModalFooter
										open={open}
										onClick={closeModel}
										close={handleClose}
									/>
								</>
							</Box>
						</Box>
						<Typography
							sx={{
								border: "1px solid #E3E3E3",
								width: "100%",
								display: { xs: "block", sm: "none" },
							}}
						/>
						<Box
							sx={{
								width: "100%",
								height: "50px",
								display: "flex",
								alignItems: "end",
								justifyContent: "center",
							}}
						>
							<Typography
								sx={{
									textAlign: "center",
									fontSize: { xs: "10px", md: "13px" },
									// lineHeight: "15px",
									fontWeight: "400",
								}}
							>
								All Rights Reserved View On Website Portal Co LLC 2023
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default FooterMobile;
