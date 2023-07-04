import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { BackgroundHome } from "@/components/Layout/Background";
import { useRouter } from "next/router";

const Header = dynamic(() => import("@/components/Navbar/Navbar"), {
	ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer/FooterHome"), {
	ssr: false,
});
interface Props {
	children: React.ReactNode;
	onClick: any;
}
const Layout: React.FC<Props> = ({ children, onClick }) => {
	const { locale } = useRouter();

	return (
		<Box
			sx={{
				maxWidth: "100%",
				// overflowX: "auto",
				maxHeight: "100vh",
				minHeight: "100vh",
				height: "100%",
			}}
			className="HomeWatchSize"
		>
			{/* <Header /> */}
			{locale === "ar" ? (
				<Box
					sx={{
						margin: "auto",
						width: "100%",
						position: { xs: "relative", md: "" },
						minHeight: { xs: "100vh", md: "100vh", xl: "100vh" },
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						overflow: "hidden",
						maxHeight: "100%",
					}}
				>
					<BackgroundHome />

					<Header />

					<Box
						className="LayoutBoxHomeAl"
						sx={{
							position: "relative",
							maxWidth: "1920px",
							width: { xs: "110%", sm: "100%", md: "90%", lg: "80%" },
							minHeight: { xs: "414px", sm: "500px", md: "550px", lg: "590px" },
							background: "rgba(251, 251, 251, 0.6)",
							border: "1px solid #FBFBFB",
							backdropFilter: "blur(100px)",
							borderRadius: "30px",
							transform: "skew(-16deg, 0deg)",
							margin: "3rem auto",
							zIndex: "999",
							paddingX: "2rem",
							paddingY: "7px",
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-start",
							marginLeft: { xs: "-1rem", sm: "3rem", md: "10rem", lg: "16rem" },
						}}
					>
						{children}
					</Box>

					<Footer onClick={onClick} />
				</Box>
			) : (
				<Box
					sx={{
						margin: "auto",
						width: "100%",
						position: { xs: "relative", md: "" },
						minHeight: { xs: "100vh", md: "100vh", xl: "100vh" },
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						overflow: "hidden",
						maxHeight: "100%",
					}}
				>
					<BackgroundHome />

					<Header />

					<Box
						className="LayoutBoxHomeAl"
						sx={{
							position: "relative",
							maxWidth: "1920px",
							width: { xs: "110%", sm: "100%", md: "100%", xl: "100%" },
							height: { xs: "434px", sm: "500px", md: "550px", lg: "590px" },
							background: "rgba(251, 251, 251, 0.6)",
							border: "1px solid #FBFBFB",
							backdropFilter: "blur(100px)",
							borderRadius: "30px",
							transform: "skew(-16deg, 0deg)",
							margin: "3rem auto",
							zIndex: "999",
							paddingX: "2rem",
							paddingY: "7px",
							display: "flex",
							alignItems: { xs: "flex-start", sm: "baseline", md: "center" },
							justifyContent: "end",
							marginLeft: {
								xs: "-1rem",
								sm: "-3rem",
								md: "-10rem",
								lg: "-16rem",
							},
						}}
					>
						{children}
					</Box>

					<>
						<Footer onClick={onClick} />
					</>
				</Box>
			)}
		</Box>
	);
};

export default Layout;
