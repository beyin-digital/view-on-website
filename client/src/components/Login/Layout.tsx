import React from "react";
import Header from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FooterMobile from "../Footer/FooterMobile";
import { Box } from "@mui/system";
import Image from "next/image";
import { Link, Typography } from "@mui/material";

interface Props {
	children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
	const icon = [
		{
			id: 1,
			icon: "/icons/google.svg",
			alt: "Google Icon",
			title: "Google Icon",
			link: "https://google.com",
		},
		{
			id: 2,
			icon: "/icons/apple.svg",
			alt: "Apple Icon",
			title: "Apple Icon",
			link: "https://apple.com",
		},
		// {
		// 	id: 1,
		// 	icon: "/icons/facebookColor.svg",
		// 	alt: "Facebook Icon",
		// 	title: "Facebook Icon",
		// 	link: "https://facebook.com",
		// },
		// {
		// 	id: 1,
		// 	icon: "/icons/linkedin.svg",
		// 	alt: "LinkedIn Icon",
		// 	title: "LinkedIn Icon",
		// 	link: "https://linkedin.com",
		// },
	];
	return (
		<>
			<Box
				sx={{
					width: "2162px",
					maxWidth: "100%",
					background: "#EAEDED",
					overflow: "hidden",
				}}
			>
				<Box
					sx={{
						maxWidth: "100%",
						margin: "auto",
						height: { xs: "100%", md: "100vh", xl: "100vh" },
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						position: "relative",
					}}
				>
					<Header />
					<Box
						sx={{
							width: "100%",
						}}
					>
						<Image
							fill
							src="/images/swirl.svg"
							alt=""
							style={{
								// objectFit:"cover",
								top: "-43rem",
								position: "absolute",
							}}
						/>
					</Box>
					<Box
						sx={{
							position: "relative",
							right: { xs: "0%", sm: "0%", md: "10%", xl: "20%" },
							maxWidth: "100%",
							width: "100%",
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
							transform: "skew(-16deg, 0deg)",
							// transform: { xs: "skew(-10deg, 0deg)", xl: "skew(-20deg, 0deg)" },
							overflow: { xs: "", md: "hidden", xl: "hidden" },
							margin: "3rem auto",
						}}
					>
						{children}
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							position: "relative",
							// left: { xs: "", md: "-5rem", xl: "-20rem" },
							top: "-2rem",
						}}
					>
						<Typography>Or login with</Typography>
						<Box
							sx={{
								// width: "60%",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-evenly",
								margin: "auto 1rem",
							}}
						>
							{icon.map((item) => (
								<Link href={item.link} key={item.id}>
									<Image
										src={item.icon}
										alt={item.alt}
										title={item.title}
										height={35}
										width={35}
										style={{
											margin: "auto .2rem",
										}}
									/>
								</Link>
							))}
						</Box>
					</Box>

					<Footer />
					<FooterMobile />
				</Box>
			</Box>
		</>
	);
};

export default Layout;
