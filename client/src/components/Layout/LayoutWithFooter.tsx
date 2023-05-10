import React, { useState } from "react";
import Header from "../Navbar/Navbar";
import Footer from "../Footer/FooterLayout";
import { Box } from "@mui/system";

interface Props {
	children: React.ReactNode;
	onClick: () => void;
}
const Layout: React.FC<Props> = ({ children, onClick }) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	return (
		<Box
			sx={{
				overflow: "hidden",
				width: "100%",
				maxWidth: "100%",
			}}
		>
			<Box
				sx={{
					height: { xs: "100vh", md: "100vh", xl: "100%" },
					background: "#EAEDED",
					overflow: "hidden",
					marginY: "auto",
				}}
			>
				<Box
					sx={{
						maxWidth: "100%",
						margin: "auto",
						height: { xs: "100%", md: "100vh", xl: "100vh" },
						maxHeight: "100%",
						backgroundSize: "cover",
						backgroundPosition: "center",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						position: "relative",
					}}
					className="LayoutHomeMobile"
				>
					<img
						src="/images/swirl.png"
						alt="Background View On Website"
						title="Background View On Website"
						style={{
							position: "absolute",
							top: "-10rem",
							width: "100%",
							height: "100%",
						}}
					/>
					<Header />
					<Box
						sx={{
							position: "relative",
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
						}}
						className="BoxHomeLayout"
					>
						{children}
					</Box>
					<Footer onClick={onClick} />
				</Box>
			</Box>
		</Box>
	);
};

export default Layout;
