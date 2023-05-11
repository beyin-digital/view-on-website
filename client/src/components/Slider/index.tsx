import Header from "@/components/Navbar/Navbar";
import { Box } from "@mui/material";

// layout
import Footer from "@/components/Footer/Footer";
import FooterMobile from "@/components/Footer/FooterMobile";

// components
import SwiperSlider from "./CenterLayout/SwiperSlider";
import FooterLayout from "./FooterLayout/FooterLayout";
import HeaderLayout from "./TopLayout/HeaderLayout";
import TextPremium from "./TopLayout/TextPremium";
import TextAndButton from "./TextAndButton";
import BackgroundImage from "./BackgroundImage";
import { useRouter } from "next/router";

const SliderDesktop = ({ onClick }: any) => {
	const { locale } = useRouter();

	return (
		<Box
			sx={{
				width: "100%",
			}}
		>
			<Box
				sx={{
					maxWidth: "100%",
					margin: "auto",
					height: { xs: "100%", md: "100vh", xl: "95vh" },
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
							height: { xs: "600px", sm: "600px", md: "600px", xl: "500px" },
							// background: "rgba(251, 251, 251, 0.6)",
							border: "1px solid #FBFBFB",
							backdropFilter: "blur(100px)",
							borderRadius: "30px",
							transform: { xs: "", md: "", xl: "skew(-16deg, 0deg)" },
							overflow: { xs: "", md: "hidden", xl: "hidden" },
						}}
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
							>
								{locale === "ar" ? (
									<Box
										sx={{
											width: { xs: "100%", md: "100%", xl: "80%" },
											height: "90%",
											transform: { xs: "", md: "", xl: "skew(16deg, 0deg)" },
											paddingX: { xs: "1rem", md: "2rem", xl: "6rem" },
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-around",
											alignItems: "end",
										}}
									>
										{/* text top layout */}
										<HeaderLayout /> {/* slider swipre */}
										<SwiperSlider />
										{/* footer layout And Button Reserve   */}
										<FooterLayout />
									</Box>
								) : (
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
									>
										{/* text top layout */}
										<HeaderLayout />
										{/* slider swipre */}
										<SwiperSlider />
										{/* footer layout And Button Reserve   */}
										<FooterLayout />
									</Box>
								)}
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
