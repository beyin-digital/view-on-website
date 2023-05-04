import React from "react";
import Header from "../Navbar/Navbar";
import Footer from "../Footer/FooterLayout";
import { Box } from "@mui/system";
import Image from "next/image";

interface Props {
	children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Box
			sx={{
				position: "relative",
				height: "100vh",
				overflow: "hidden",
			}}
		>
			<Header />

			<Box
				sx={{
					width: "100%",
					background: "#EAEDED",
					overflow: "hidden",
					position: "relative",
					display: "flex",
				}}
			>
				<Box
					sx={{
						width: "100%",
						position: "relative",
					}}
				>
					<img
						src="/images/swirl.svg"
						alt=""
						style={{
							top: "-81rem",
							left: "-48rem",
							position: "absolute",
						}}
					/>
				</Box>

				<Box
					sx={{
						maxWidth: "100%",
						margin: "auto",
						height: "95vh",

						position: "relative",
						display: { xs: "flex", sm: "flex", md: "block", xl: "block" },
						alignItems: { xs: "center", sm: "center", md: "", xl: "" },
						justifyContent: { xs: "center", sm: "center", md: "", xl: "" },
					}}
				>
					<Box
						sx={{
							position: "relative",
							right: { xs: "4%", sm: "5%", md: "10%", xl: "20%" },
							maxWidth: "100%",
							width: "2162px",
							height: { xs: "420px", sm: "443px", md: "670px", xl: "670px" },
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
							margin: {
								xs: "1.5rem auto",
								sm: "3rem auto",
								md: "3rem auto",
								xl: "3rem auto",
							},
						}}
					>
						{children}
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					width: "100%",
					height: "auto",
					position: "absolute",
					bottom: "0",
				}}
			>
				<Footer />
			</Box>
		</Box>
	);
};

export default Layout;
