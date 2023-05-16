import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

interface Props {
	children: React.ReactNode;
}
const LayoutDesktop: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Box
				sx={{
					width: "2192px",
					maxWidth: "100%",
					height: { xs: "100%", md: "100vh", xl: "89vh" },
					background: "#EAEDED",
					overflow: "hidden",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				className="IllustrationDesktop"
			>
				<Box
					sx={{
						maxWidth: "100%",
						margin: "auto",
						height: { xs: "100%", md: "100vh", xl: "95vh" },
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						position: "fixed",
					}}
				>
					<Box
						sx={{
							width: "100%",
						}}
					>
						<Image
							fill
							src="/images/swirl.svg"
							alt="Background View On Website"
							title="Background View On Website"
							style={{
								top: "-43rem",
								position: "absolute",
							}}
						/>
					</Box>
					<Box
						sx={{
							position: "relative",
							maxWidth: "100%",
							width: "2192px",
							height: { xs: "100%", sm: "540px", md: "650px", xl: "650px" },
							background: {
								xs: "transparent",
								md: "rgba(251, 251, 251, 0.6)",
								xl: "rgba(251, 251, 251, 0.6)",
							},
							border: {
								xs: "0",
								md: "1px solid #FBFBFB",
								xl: "1px solid #FBFBFB",
							},
							backdropFilter: { xs: "0", md: "blur(100px)", xl: "blur(100px)" },
							borderRadius: "30px",
							overflow: { xs: "", md: "hidden", xl: "hidden" },
							display: "flex",
							alignItems: "center",
							justifyContent: "end",
							paddingX: "2rem",
						}}
						className="IllustrationDesktopLayout"
					>
						<Box
							sx={{
								height: "558px",
								width: { xs: "88%", xl: "80%" },
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
							className="IllustrationDesktopLayoutBox"
						>
							{children}
						</Box>
					</Box>
				</Box>
			</Box>
			<Footer />
		</>
	);
};

export default LayoutDesktop;
