import { Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../Navbar/Navbar";
import Footer from "../Footer/FooterLayout";
import { Box } from "@mui/system";

interface Props {
	children: React.ReactNode;
	// onClick:onClick () => void;
}
const Layout: React.FC<Props> = ({ children, onClick }: any) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	return (
		<Box
			sx={{
				width: "100%",
				background: "#EAEDED",
				overflow: "hidden",
			}}
		>
			<Box
				sx={{
					maxWidth: "100%",
					margin: "auto",
					height: "100vh",
					backgroundImage: "url('/images/swirl.png')",
					backgroundSize: "cover",
					backgroundPosition: "bottom",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<Header />
				<Box
					sx={{
						position: "relative",
						right: { xs: "4%", sm: "5%", md: "10%", xl: "20%" },
						maxWidth: "100%",
						width: "2162px",
						height: { xs: "453px", sm: "443px", md: "779px", xl: "779px" },
						background: "rgba(251, 251, 251, 0.6)",
						border: "1px solid #FBFBFB",
						backdropFilter: "blur(100px)",
						borderRadius: "30px",
						transform: {
							xs: "skew(-10deg, 0deg)",
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

				<Footer onClick={onClick} />
			</Box>
		</Box>
	);
};

export default Layout;
