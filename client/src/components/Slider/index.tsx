// import Header from '@/components/Navbar/Navbar'
import { Box } from "@mui/material";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// components
import dynamic from "next/dynamic";
import { Background } from "../Layout/Background";
const Header = dynamic(() => import("@/components/Navbar/Navbar"), {
	ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer/Footer"), {
	ssr: false,
});
const FooterMobile = dynamic(() => import("@/components/Footer/FooterMobile"), {
	ssr: false,
});
const SwiperSlider = dynamic(() => import("./CenterLayout/SwiperSlider"), {
	ssr: false,
});
const FooterLayout = dynamic(() => import("./FooterLayout/FooterLayout"), {
	ssr: false,
});
const HeaderLayout = dynamic(() => import("./TopLayout/HeaderLayout"), {
	ssr: false,
});
const TextPremium = dynamic(() => import("./TopLayout/TextPremium"), {
	ssr: false,
});
const TextAndButton = dynamic(() => import("./TextAndButton"), {
	ssr: false,
});

const SliderDesktop = ({ onClick, selectedImage }: any) => {
	const { locale } = useRouter();
	const [showSlider, setShowSlider] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSlider(true);
		}, 300);

		return () => clearTimeout(timer);
	}, []);
	return (
		<Box
			sx={{
				width: "100%",
				zIndex: "9999999",
			}}
		>
			{showSlider && <Background />}

			<Header />

			<Box
				sx={{
					maxWidth: "100%",
					maxHeight: "100%",
					margin: "auto",
					height: { xs: "", md: "89vh" },
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					position: "relative",
				}}
			>
				<Box
					sx={{
						position: "relative",
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
							height: { xs: "100%", sm: "100vh", md: "550px", xl: "590px" },
							background: "rgba(251, 251, 251, 0.6)",
							border: "1px solid #FBFBFB",
							backdropFilter: "blur(100px)",
							borderRadius: "30px",
							transform: { xs: "", md: "", xl: "skew(-16deg, 0deg)" },
							overflow: { xs: "hidden", md: "hidden", xl: "hidden" },
							paddingY: "2rem",
							marginTop: { xs: "4rem", md: "0" },
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
											// paddingX: { xs: "1rem", md: "2rem", xl: "6rem" },
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-around",
											alignItems: "end",
										}}
									>
										{/* text top layout */}
										<HeaderLayout selectedImage={selectedImage} />{" "}
										{/* slider swipre */}
										<SwiperSlider swiper="" />
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
										<HeaderLayout selectedImage={selectedImage} />
										{/* slider swipre */}
										<SwiperSlider swiper="" />
										{/* footer layout And Button Reserve   */}
										<FooterLayout />
									</Box>
								)}
							</Box>
						</>
					</Box>
				</Box>
				{/* text and button */}
				{/* <TextAndButton selectedImage={selectedImage} /> */}
			</Box>
			<Footer />
			<FooterMobile />
		</Box>
	);
};

export default SliderDesktop;
