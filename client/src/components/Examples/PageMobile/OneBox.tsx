import { Box, Typography } from "@mui/material";

const OneBox = () => {
	return (
		<>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					background: "rgba(251, 251, 251, 0.5)",
					border: " 0.484848px solid #FBFBFB",
					backdropFilter: "blur(48.4848px)",
					borderRadius: "14.5455px",
					overflow: "hidden",
					position: "relative",
					height: "80vh",
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", sm: "100%", md: "100%" },
						height: "100%",

						overflow: "hidden",
						paddingX: "1rem",
						position: { xs: "", sm: "", md: "relative" },
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", sm: "70%", md: "60%" },
							height: "258px",
							borderRadius: "34px",
							background: "url('/images/slid.png')",
							backgroundRepeat: "no-repeat",
							backgroundSize:"cover",
							marginY: "1rem",
							position: { xs: "relative", sm: "absolute" },
							right: { xs: "", sm: "6rem", md: "10rem" },
						}}
					></Box>
					<Box
						sx={{
							position: "relative",
							paddingX: "0rem",
							height: "100%",
							display: "flex",
							alignItems: { xs: "", sm: "center" },
							marginX: { xs: "", sm: "2rem" },
						}}
					>
						<Box
							sx={{
								width: { xs: "60%", sm: "212px", md: "50%" },
								height: "134px",
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "14px", md: "24px" },

									marginY: { xs: "3rem", sm: "4rem" },
								}}
							>
								Place it your way
							</Typography>
							<Typography
								sx={{
									fontSize: { xs: "14px", md: "20px" },
									lineHeight: { xs: "12px", md: "20px" },
									fontWeight: "300",
									marginY: ".8rem",
								}}
							>
								Please provide your keyword’s sub-link Please provide your
								keyword’s sub-link Please provide your keyword’s sub-link Please
								provide your keyword’s sub-link
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							width: { xs: "400px", sm: "60%", md: "555px" },
							height: "441px",
							position: "absolute",
							top: "15rem",
							right: { xs: "0rem", sm: "3rem", md: "0rem" },
							zIndex: "9999",
						}}
					>
						<img src="/images/phone.png" alt="" />
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default OneBox;
