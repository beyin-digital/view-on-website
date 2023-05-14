import React from "react";
import Header from "../Navbar/Navbar";
import Footer from "../Footer/FooterHome";
import { Box } from "@mui/system";
import Image from "next/image";

interface Props {
	children: React.ReactNode;
	onClick: () => void;
}
const Layout: React.FC<Props> = ({ children, onClick }) => {
	return (
		<Box
			sx={{
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
						height: { xs: "100vh", md: "100vh", xl: "100vh" },
						backgroundSize: "cover",
						backgroundPosition: "center",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						position: "relative",
					}}
					className="LayoutHomeMobil"
				>
					<Box
						sx={{
							width: "100%",
							display: { xs: "block", sm: "block", md: "none", xl: "none" },
						}}
					>
						<Image
							fill
							src="/images/swirl.svg"
							alt="View On Website Background"
							title="View On Website Background"
							style={{
								top: "-19rem",
								position: "absolute",
							}}
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
							alt="View On Website Background"
							title="View On Website Background"
							style={{
								top: "-13rem",
								position: "absolute",
							}}
						/>
					</Box>
					<Header />
					<Box
						sx={{
							position: "relative",
							width: { xs: "115%", sm: "100%", md: "100%", xl: "100%" },
							height: { xs: "450px", sm: "500px", md: "589px", xl: "589px" },
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
							paddingY: "2rem",
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
