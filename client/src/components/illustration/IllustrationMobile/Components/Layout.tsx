import React from "react";

import { Box } from "@mui/material";
import { ImageHeader } from "./index";

interface Props {
	children: React.ReactNode;
}
const LayoutMobile: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Box
				sx={{
					width: "100%",
				}}
				className="IllustrationMobile"
			>
				<Box
					sx={{
						maxWidth: "100%",
						height: { xs: "100%", md: "100vh", xl: "100vh" },
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						position: "relative",
						marginY: "2rem",
					}}
				>
					{/* image header background */}
					<ImageHeader />
					<Box
						sx={{
							position: "relative",
							maxWidth: "100%",
							width: "100%",
							height: { xs: "100%", sm: "100%", md: "100%", xl: "650px" },
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							backdropFilter: "blur(100px)",
							border: "1px solid #FBFBFB",
							background: "rgba(251, 251, 251, 0.6)",
						}}
					>
						<Box
							sx={{
								height: "100%",
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
		</>
	);
};

export default LayoutMobile;
