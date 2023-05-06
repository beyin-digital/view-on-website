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
					overflow: { xs: "", md: "hidden", xl: "hidden" },
					position: "relative",
					height: { xs: "80vh", sm: "80vh", md: "80vh", xl: "80vh" },
					transform: "skew(-16deg, 0deg)",
					right: { xs: "-1rem", sm: "-1rem", md: "-5rem" },
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", sm: "100%", md: "100%" },
						height: "100%",

						overflow: "hidden",
						paddingX: "1rem",
						position: { xs: "", sm: "", md: "relative" },
						transform: "skew(16deg, 0deg)",
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", sm: "70%", md: "60%" },
							height: "258px",
							marginY: "1rem",
							position: { xs: "relative", sm: "absolute" },
							right: { xs: "", sm: "6rem", md: "10rem" },
						}}
					>
						<img
							src="/images/slid.png"
							alt=""
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								borderRadius: "34px",
							}}
						/>
					</Box>
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
								width: { xs: "60%", sm: "322px", md: "50%" },
								height: "134px",
								marginY: "1rem",
							}}
						>
							<Typography
								sx={{
									fontSize: "20px",
									fontWeight: "500",
									lineHeight: "18px",

									marginY: { xs: "10px", sm: "2rem" },
								}}
								className="ExampleBoxOnePlace"
							>
								See it
							</Typography>
							<Typography
								sx={{
									fontSize: { xs: "14px", sm: "20px", md: "20px" },
									lineHeight: { xs: "12px", sm: "20px", md: "20px" },
									fontWeight: "300",
									marginY: ".8rem",
								}}
							>
								Making your #keyword visible will help customers easily interact
								with it to be redirected to your product or service sub-link.
								You can shape your #keyword as you desire.
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							width: { xs: "400px", sm: "60%", md: "555px" },
							height: "441px",
							position: "absolute",
							// bottom: "0",
							top: "17rem",
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
