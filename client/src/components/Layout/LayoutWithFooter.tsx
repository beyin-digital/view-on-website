import { Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../Navbar/Navbar";
import Footer from "../Footer/FooterLayout";
import { Box } from "@mui/system";
import FooterMobile from "../Footer/FooterMobile";

interface Props {
	children: React.ReactNode;
	// onClick:onClick () => void;
}
const Layout: React.FC<Props> = ({ children, onClick }: any) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	return (
		<Box
			sx={{
				overflow: "hidden",
			}}
		>
			<Box
				sx={{
					width: "2162px",
					maxWidth: "100%",
					// height: { xs: "100vh", md: "100vh", xl: "100%" },
					background: "#EAEDED",
					overflow: "hidden",
					marginY: "auto",
				}}
			>
				<Box
					sx={{
						maxWidth: "100%",
						margin: "auto",
						height: { xs: "100vh", md: "100vh", xl: "100vh" },
						maxHeight: "100%",
						backgroundImage: "url('/images/swirl.png')",
						backgroundSize: "cover",
						backgroundPosition: "bottom",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
					className="LayoutHomeMobile"
				>
					<Header />

					<Box
						sx={{
							position: "relative",
							right: { xs: "13%", sm: "16%", md: "15%", xl: "25%" },
							// maxWidth: "100%",
							width: { xs: "115%", sm: "100%", md: "100%", xl: "100%" },
							height: { xs: "445px", sm: "443px", md: "589px", xl: "589px" },
							background: "rgba(251, 251, 251, 0.6)",
							border: "1px solid #FBFBFB",
							backdropFilter: "blur(100px)",
							borderRadius: "30px",
							transform: {
								xs: "skew(-16deg, 0deg)",
								sm: "skew(-16deg, 0deg)",
								md: "skew(-16deg, 0deg)",
								xl: "skew(-16deg, 0deg)",
							},
							overflow: "hidden",
							margin: "3rem auto",
						}}
					>
						{children}
					</Box>
					{/* <Footer /> */}
				</Box>
				{/* <Footer /> */}
			</Box>
			<Box className="LayoutHomeMobileBox" />
			<Box
				sx={{
					width: "100%",
					position: "relative",
					bottom: "-.4rem",
				}}
			>
				<Footer />
			</Box>
		</Box>
	);
};

export default Layout;
