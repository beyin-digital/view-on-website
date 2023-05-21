import React from "react";
import { Box } from "@mui/system";

// components
import { Background } from "./Background";
import Header from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FooterMobile from "../Footer/FooterMobile";
import { BackgroundImageSlider } from "../Slider/BackgroundImage";
interface Props {
	children: React.ReactNode;
}
const LayoutSubscribe: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Box
				sx={{
					width: "2162px",
					maxWidth: "100%",
					overflow: "hidden",
					height: { xs: "100%", md: "96vh" },
				}}
			>
				<Box
					sx={{
						margin: "auto",
						height: { xs: "100%", md: "90vh", xl: "96vh" },
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						position: "relative",
					}}
				>
					<BackgroundImageSlider />

					<Header />
					<Box
						className="LayoutBox"
						sx={{
							position: "relative",
							width: { xs: "564px", sm: "100%", md: "100%", xl: "100%" },
							height: { xs: "100%", sm: "100%", md: "650px", xl: "650px" },
							background: "rgba(251, 251, 251, 0.6)",
							border: "1px solid #FBFBFB",
							backdropFilter: "blur(100px)",
							borderRadius: "30px",
							transform: { xs: "skew(0deg, 0deg)", sm: "skew(-16deg, 0deg)" },
							// overflow: { xs: "", md: "hidden", xl: "hidden" },
							margin: { xs: "5rem auto", sm: "3rem auto" },
							zIndex: "999",
							paddingX: "2rem",
							paddingY: "7px",
						}}
					>
						{children}
					</Box>
				</Box>
			</Box>
			{/* <Footer /> */}
			{/* <FooterMobile /> */}
		</>
	);
};

export default LayoutSubscribe;