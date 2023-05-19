import Footer from "@/components/Footer/Footer";
import { Box } from "@mui/material";
import React from "react";
import { ButtonStyleMobile } from ".";

interface Props {
	children: React.ReactNode;
}
const LayoutMobile: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Box
				sx={{
					position: "fixed",
					height: "100vh",
					width: "2192px",
					maxWidth: "100%",
				}}
				className="IllustrationTablet"
			>
				<img
					// fill
					src="/images/swirl.svg"
					alt="Background View On Website"
					title="Background View On Website"
					style={{
						top: "-25rem",
						left: "-7rem",
						position: "absolute",
						width: "900px",
					}}
				/>
				<Box
					sx={{
						width: "2192px",
						maxWidth: "100%",
						height: { xs: "100%", md: "88vh", xl: "88vh" },
						background: "#EAEDED",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Box
						sx={{
							maxWidth: "100%",
							margin: "auto",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<Box
							sx={{
								position: "relative",
								maxWidth: "100%",
								width: "100%",
								height: { xs: "100%", sm: "100%", md: "75vh", xl: "650px" },
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
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
								backdropFilter: {
									xs: "0",
									md: "blur(100px)",
									xl: "blur(100px)",
								},
							}}
						>
							<Box
								sx={{
									height: "69vh",
									width: { xs: "98%", xl: "80%" },
									display: "flex",
									flexDirection: "column",
								}}
							>
								{children}
							</Box>
						</Box>
					</Box>
				</Box>

				<Footer />
			</Box>
		</>
	);
};

export default LayoutMobile;
