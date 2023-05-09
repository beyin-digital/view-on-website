import React from "react";
import Header from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FooterMobile from "../Footer/FooterMobile";
import { Box } from "@mui/system";
import Image from "next/image";
import { Link, Typography } from "@mui/material";

interface Props {
	children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Box
				sx={{
					width: "2162px",
					maxWidth: "100%",
					background: "#EAEDED",
					overflow: "hidden",
					// marginTop: "5rem",
				}}
			>
				<Box
					sx={{
						// maxWidth: "100%",
						margin: "auto",
						height: { xs: "100%", md: "100vh", xl: "100vh" },
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						position: "relative",
					}}
				>
					<Header />
					<Box
						sx={{
							width: "100%",
							display: { xs: "block", sm: "block", md: "none", xl: "none" },
						}}
					>
						<Image
							fill
							src="/images/swirl.svg"
							alt=""
							className="ImageMobile"
						/>
					</Box>
					<Box
						sx={{
							width: "100%",
							display: { xs: "none", sm: "none", md: "block", xl: "block" },
						}}
					>
						<Image
							fill
							src="/images/swirl.svg"
							alt=""
							style={{
								top: "-43rem",
								position: "absolute",
							}}
						/>
					</Box>
					<Box
					className="LayoutBox"
						sx={{
							position: "relative",
							// right: { xs: "10%", sm: "1%", md: "10%", xl: "20%" },
							// maxWidth: "100%",
							width: { xs: "564px", sm: "100%", md: "100%", xl: "100%" },
							height: { xs: "100%", sm: "100%", md: "650px", xl: "650px" },
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
							transform: {
								xs: "skew(-10deg, 0deg)",
								sm: "skew(-16deg, 0deg)",
								md: "skew(-16deg, 0deg)",
								xl: "skew(-16deg, 0deg)",
							},
							// transform: { xs: "skew(-10deg, 0deg)", xl: "skew(-20deg, 0deg)" },
							overflow: { xs: "", md: "hidden", xl: "hidden" },
							margin: "3rem auto",
							zIndex: "999",
							paddingX: "2rem",
						}}
					>
						{children}
					</Box>
					<Footer />
					<FooterMobile />
				</Box>
			</Box>
		</>
	);
};

export default Layout;
