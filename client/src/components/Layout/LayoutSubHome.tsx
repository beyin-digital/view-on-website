// import React, { useState, useEffect } from "react";
// import { Box } from "@mui/system";

// // components

// // components
// import dynamic from "next/dynamic";
// import { Background } from "./Background";
// const Header = dynamic(() => import("../Navbar/NavbarSubscribe"), {
// 	ssr: false,
// });
// const Footer = dynamic(() => import("../Footer/Footer"), {
// 	ssr: false,
// });
// const FooterMobile = dynamic(() => import("../Footer/FooterMobile"), {
// 	ssr: false,
// });

// interface Props {
// 	children: React.ReactNode;
// 	nameOne?: any;
// 	linkOne?: any;
// 	nameTwo?: any;
// 	linkTwo?: any;
// 	nameThree?: any;
// 	linkThree?: any;
// 	nameFour?: any;
// 	linkFour?: any;
// }
// const LayoutSubHome: React.FC<Props> = ({
// 	children,
// 	nameOne,
// 	linkOne,
// 	nameTwo,
// 	linkTwo,
// 	nameThree,
// 	linkThree,
// 	nameFour,
// 	linkFour,
// }) => {
// 	const [showSlider, setShowSlider] = useState(false);

// 	useEffect(() => {
// 		const timer = setTimeout(() => {
// 			setShowSlider(true);
// 		}, 300);

// 		return () => clearTimeout(timer);
// 	}, []);

// 	return (
// 		<>
// 			<Box
// 				sx={{
// 					maxWidth: "100%",
// 					overflow: "hidden",
// 				}}
// 			>
// 				<Box
// 					sx={{
// 						margin: "auto",
// 						width: "100%",
// 						position: { xs: "relative", md: "fixed" },
// 						height: { xs: "", md: "100vh", xl: "100vh" },
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "space-between",
// 						// position: "relative",
// 					}}
// 				>
// 					<Background />
// 					<Header
// 						nameOne={nameOne}
// 						linkOne={linkOne}
// 						nameTwo={nameTwo}
// 						linkTwo={linkTwo}
// 						nameThree={nameThree}
// 						linkThree={linkThree}
// 						nameFour={nameFour}
// 						linkFour={linkFour}
// 					/>

// 					<Box
// 						className="LayoutBox"
// 						sx={{
// 							position: "relative",
// 							width: { xs: "564px", sm: "100%", md: "100%", xl: "100%" },
// 							height: { xs: "100%", sm: "100%", md: "650px", xl: "650px" },
// 							background: "rgba(251, 251, 251, 0.6)",
// 							border: "1px solid #FBFBFB",
// 							backdropFilter: "blur(100px)",
// 							borderRadius: "30px",
// 							transform: "skew(-16deg, 0deg)",
// 							margin: "3rem auto",
// 							zIndex: "999",
// 							paddingX: "2rem",
// 							paddingY: "7px",
// 						}}
// 					>
// 						{children}
// 					</Box>

// 					<Footer />
// 					<FooterMobile />
// 				</Box>
// 			</Box>
// 			<Footer />
// 		</>
// 	);
// };

// export default LayoutSubHome;
import React from 'react'

const LayoutSubHome = () => {
  return <div>LayoutSubHome</div>
}

export default LayoutSubHome
