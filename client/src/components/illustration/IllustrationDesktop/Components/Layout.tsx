import React from "react";
import { Box } from "@mui/material";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import { BackgroundImage } from "@/components/Slider/BackgroundImage";
import { ButtonStyleDesktop } from ".";

interface Props {
	children: React.ReactNode;
}
const LayoutDesktop: React.FC<Props> = ({ children }) => {
	const { locale } = useRouter();

	return (
		<div className="IllustrationDesktop">
			<Box
				sx={{
					width: "2192px",
					maxWidth: "100%",
					height: { xs: "100%", md: "100vh", xl: "88vh" },
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
						height: { xs: "100%", md: "100vh", xl: "100vh" },
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						position: "fixed",
						overflow: "hidden",
					}}
				>
					<BackgroundImage />
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
							display: "flex",
							alignItems: "center",
							justifyContent: "end",
							paddingX: "2rem",
							marginTop: "2rem",
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
					{locale === "ar" ? (
						<Box
							sx={{
								paddingLeft: "15rem",
								zIndex: "999999",
							}}
						>
							<ButtonStyleDesktop />
						</Box>
					) : (
						<Box
							sx={{
								paddingRight: "15rem",
								zIndex: "999999",
							}}
						>
							<ButtonStyleDesktop />
						</Box>
					)}
				</Box>
			</Box>
			<Footer />
		</div>
	);
};

export default LayoutDesktop;
