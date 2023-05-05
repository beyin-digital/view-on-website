import { Box, Typography } from "@mui/material";

const TwoBox = () => {
	return (
		<>
			<Box
				sx={{
					position: "relative",
					top: "-5rem",
					background: "#EAEDED",
				}}
				className="ExampleBoxTwo"
			>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", sm: "100%", md: "100%" },
							height: { xs: "60vh", sm: "80vh", md: "80vh", xl: "80vh" },
							paddingX: "1rem",
							position: "relative",
						}}
					>
						<Box
							sx={{
								width: { xs: "100%", md: "50%" },
								position: "absolute",
								top: { xs: "", md: "20%", xl: "20%" },
							}}
							className="ExampleBoxTwoText"
						>
							<Box
								sx={{
									marginTop: { xs: "4rem", xl: "7rem" },
									marginX: { xs: "0", md: "2rem" },
								}}
								className="ExampleBoxTwoText"
							>
								<Typography
									sx={{
										width: { xs: "40%", sm: "25%", md: "50%" },
										height: "100%",
										fontSize: "20px",
										fontWeight: "500",
										lineHeight: "18px",

										marginY: "1rem",
									}}
								>
									Physical conversion in less than 1 minute!
								</Typography>
								<Typography
									sx={{
										width: { xs: "38%", sm: "30%", md: "80%" },
										height: "100%",
										fontSize: { xs: "13px", sm: "20px", md: "20px" },
										lineHeight: { xs: "12px", sm: "20px", md: "20px" },
										fontWeight: "300",
										marginY: "1rem",
									}}
								>
									Please provide your keyword’s sub-link Please provide your
									keyword’s sub-link Please provide your keyword’s sub-link
									Please provide your keyword’s sub-link
								</Typography>
							</Box>
						</Box>
						<Box
							sx={{
								width: { xs: "75%", sm: "70%", md: "60%" },
								height: "100%",
								background: "url(/images/layoutBoxTwo.png)",
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								position: "absolute",
								bottom: "0",
								right: "0",
								top:"-2rem"
							}}
						>
							<Box
								sx={{
									height: { xs: "360px", sm: "450px", md: "432px" },
									position: "absolute",
									bottom: "0",
									right: { xs: "-5rem", sm: "0", md: "0" },
								}}
								className="ExampleBoxTwoPic"
							>
								<img
									src="/images/mobile.png"
									alt=""
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
									}}
								/>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default TwoBox;
