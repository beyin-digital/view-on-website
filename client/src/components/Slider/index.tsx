import Header from "@/components/Navbar/Navbar";
import { Box } from "@mui/material";

// layout
import Footer from "@/components/Footer/Footer";
import FooterMobile from "@/components/Footer/FooterMobile";

// components
import SwiperSlider from "./SwiperSlider";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";
import TextPremium from "./TextPremium";
import TextAndButton from "./TextAndButton";
import BackgroundImage from "./BackgroundImage";

const SliderDesktop = ({ onClick }: any) => {
	return (
		<Box
			sx={{
				width: "100%",
				background: "#EAEDED",
			}}
		>
			<Box
				sx={{
					maxWidth: "100%",
					margin: "auto",
					height: { xs: "100%", md: "100vh", xl: "100vh" },
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					position: "relative",
					overflow: "hidden",
				}}
			>
				{/* Navbar */}
				<Header />
				{/* background image */}
				<BackgroundImage />
				<Box
					sx={{
						position: "relative",
						marginY: "3rem",
					}}
				>
					{/* Text Premium top layout */}
					<TextPremium onClick={onClick} />
					{/* layout Box */}
					<Box
						sx={{
							position: "relative",
							top: "2.5rem",
							right: { xs: "0%", sm: "0%", md: "0%", xl: "20%" },
							maxWidth: "100%",
							width: "100%",
							height: { xs: "600px", sm: "600px", md: "500px", xl: "500px" },
							background: {
								xs: "rgba(251, 251, 251, 0.6)",
								md: "rgba(251, 251, 251, 0.6)",
								xl: "rgba(251, 251, 251, 0.6)",
							},
							border: {
								xs: "1px solid #FBFBFB",
								md: "1px solid #FBFBFB",
								xl: "1px solid #FBFBFB",
							},
							backdropFilter: {
								xs: "blur(100px)",
								md: "blur(100px)",
								xl: "blur(100px)",
							},
							borderRadius: "30px",
							transform: { xs: "", md: "", xl: "skew(-16deg, 0deg)" },
							overflow: { xs: "", md: "hidden", xl: "hidden" },
						}}
						// className="SLiderLayout"
					>
						<>
							<Box
								sx={{
									width: "100%",
									height: "100%",
									display: "flex",
									alignItems: "center",
									justifyContent: { xs: "center", xl: "end" },
								}}
								// className="sliderBox"
							>
								<Box
									sx={{
										width: { xs: "100%", md: "100%", xl: "80%" },
										height: "90%",

										transform: { xs: "", md: "", xl: "skew(16deg, 0deg)" },
										paddingX: { xs: "1rem", md: "2rem", xl: "6rem" },
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-around",
									}}
									// className="SLiderLayoutBox"
								>
									{/* text top layout */}
									<HeaderLayout /> {/* slider swipre */}
									<SwiperSlider />
									{/* footer layout  */}
									<FooterLayout />
								</Box>
							</Box>
						</>
					</Box>
				</Box>
				{/* text and button */}
				<TextAndButton />
			</Box>
			<Footer />
			<FooterMobile />
		</Box>
	);
};

export default SliderDesktop;
