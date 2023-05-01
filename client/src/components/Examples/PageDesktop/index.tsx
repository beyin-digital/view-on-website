import { Box } from "@mui/material";

// footer
import Footer from "@/components/Footer/Footer";

// components
import OneBox from "./OneBox";
import TwoBox from "./TwoBox";
import ThreeBox from "./ThreeBox";

const PageDesktop = () => {
	return (
		<>
			<Box
				className="PageDesktop"
				sx={{
					// height: "100vh",
					width: "100%",
					overflow: "hidden",
					// background: "rgba(251, 251, 251, 0.5)",
					// backdropFilter: "blur(100px)",
				}}
			>
				<Box
					my="auto"
					sx={{
						height: { xs: "100%", md: "90vh", xl: "88vh" },
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: { xs: "100%", md: "110vw", xl: "110vw" },
						overflow: "hidden",
						position: "relative",
						marginLeft: { xs: "", md: "-5rem", xl: "-5rem" },
						// background: "rgba(251, 251, 251, 0.5)",
						// backdropFilter: "blur(100px)",
					}}
				>
					<Box
						sx={{
							position: "absolute",
							top: "-90rem",
						}}
					>
						<img src="/images/swirl.png" />
					</Box>
					<Box
						m="auto"
						sx={{
							height: { xs: "100%", md: "600px", xl: "590px" },
							width: { xs: "100%", md: "200vw", xl: "200vw" },
							maxWidth: "100%",
							borderTop: "1px solid #FBFBFB",
							borderBottom: "1px solid #FBFBFB",
							display: "flex",
							flexDirection: { xs: "column", md: "row", xl: "row" },
							transform: { xs: "skew(0deg, 0deg)", xl: "skew(-15deg, 0deg)" },
							overflow: "hidden",
							background: "rgba(251, 251, 251, 0.6)",
							marginX: { xs: "", md: "3rem", xl: "0" },
							position: "relative",
						}}
					>
						{/* Slider One */}
						<OneBox />
						<Box
							sx={{
								position: "absolute",
								top: "19rem",
								right: { xs: "", sm: "", md: "", lg: "55rem", xl: "64rem" },
								zIndex: "9",
								width: { xs: "", sm: "", md: "", lg: "300px", xl: "320px" },
								height: { xs: "", sm: "", md: "", lg: "300px", xl: "320px" },
							}}
						>
							<img
								src="/icons/arrowLeftExample.png"
								style={{
									width: "100%",
								}}
							/>
						</Box>
						{/* Slider Two */}
						<TwoBox />
						<>
							<Box
								sx={{
									position: "absolute",
									top: { xs: "", sm: "", md: "", lg: "9rem", xl: "12.5rem" },
									right: { xs: "", sm: "", md: "", lg: "18rem", xl: "22.3rem" },
									width: { xs: "", sm: "", md: "", lg: "500px", xl: "600px" },
									height: { xs: "", sm: "", md: "", lg: "500px", xl: "600px" },

									zIndex: "9",
								}}
							>
								<img
									src="/icons/arrowExample.png"
									style={{
										width: "100%",
										// height: "100%",
									}}
								/>
							</Box>
							{/* Slider Three */}
							<ThreeBox />
						</>
					</Box>
				</Box>
			</Box>
			{/* <Footer /> */}
		</>
	);
};

export default PageDesktop;
