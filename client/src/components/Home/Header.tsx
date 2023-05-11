import { Box, Typography, Button, Modal } from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
	const { t } = useTranslation("home");
	const [open, setOpen] = useState(false);

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
					width: { xs: "100%", md: "90%", xl: "85%" },
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Box
					sx={{
						width: { xs: "85%", sm: "80%", md: "650px", xl: "776px" },
						px: "1.5rem",
					}}
				>
					<Typography
						sx={{
							fontSize: {
								xs: "36px",
								sm: "36px",
								md: "50px",
								xl: "64px",
							},
						}}
						lineHeight="92.5%"
						letterSpacing="0.02em"
						fontWeight="500"
						className="Textredirected"
					>
						{t("title")}
					</Typography>
					<Typography
						sx={{
							margin: "1rem auto",
							fontSize: { xs: "21px", md: "30px", xl: "40px" },
							lineHeight: "92.5%",
							fontWeight: "400",
						}}
					>
						{t("header_text_one")}
						<Typography
							component={"span"}
							sx={{
								fontSize: { xs: "21px", md: "30px", xl: "40px" },
								borderRadius: "8px",
								background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
							}}
						>
							{t("header_text_two")}
						</Typography>

						{t("header_text_three")}
					</Typography>
				</Box>
				<Box
					sx={{
						width: { xs: "53px", sm: "53px", md: "80px", xl: "103px" },
						height: { xs: "53px", sm: "53px", md: "80px", xl: "103px" },
						marginX: { xs: ".4rem", sm: "1rem", md: "1rem", xl: "1rem" },
						cursor: "pointer",
					}}
					className="ImagePlay"
					onClick={openModel}
				>
					<img
						src="/icons/play.png"
						alt="View On Website Play Icon"
						title="View On Website Play Icon"
						style={{
							width: "100%",
							height: "100%",
						}}
					/>
				</Box>
				<Modal
					open={open}
					onClose={closeModel}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					className="swiper-blurr"
					closeAfterTransition
					slotProps={{
						backdrop: {
							timeout: 500,
						},
					}}
				>
					<Box
						sx={{
							width: "100%",
							height: "100vh",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Box
							sx={{
								width: { xs: "100%", md: "800px", xl: "900px" },
								height: { xs: "400px", md: "600px", xl: "600px" },
								bgcolor: "transparent",
								paddingX: "1rem",
							}}
						>
							<ReactPlayer
								url="https://www.youtube.com/watch?v=ryUxrFUk6MY"
								width="100%"
								height="100%"
								playing={true}
							/>
							<Box
								sx={{
									cursor: "pointer",
									bottom: "-3rem",
									zIndex: "9999999",
								}}
								onClick={closeModel}
							>
								<AiOutlineClose
									onClick={closeModel}
									size={42}
									color="#FBFBFB"
								/>
							</Box>
						</Box>
					</Box>
				</Modal>
			</Box>
		</>
	);
};

export default Header;
