import React, { useContext } from "react";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Dashboard/Navbar"), {
	ssr: false,
});
const Sidebar = dynamic(() => import("@/components/Dashboard/Sidebar"), {
	ssr: false,
});
const FooterMobile = dynamic(() => import("../Footer/FooterMobile"), {
	ssr: false,
});

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	const pathname = usePathname();
	const router = useRouter();
	const { locale } = useRouter();

	const { token } = useContext(UserContext);

	if (!token)
		return (
			<>
				{/* Background */}
				<Box
					sx={{
						position: "fixed",
						height: "100vh",
						width: "100%",
						maxWidth: "100%",
						minHeight: "100vh",
						display: "flex",
						flexDirection: "column",

						background: "url('/images/swirl.webp')",
						backgroundPositionY: "-1000px",
						backgroundPositionX: "-500px",
						backgroundRepeat: "no-repeat",
						margin: "0 auto",
					}}
				/>
				<Box
					sx={{
						zIndex: 1,
						position: "fixed",
						height: "100vh",
						width: "100%",
						background: "rgba(221, 250, 255, 0.17)",
						backdropFilter: "blur(38px)",
					}}
				/>
			</>
		);
	return (
		<>
			{/* Background */}
			<Box
				sx={{
					position: "fixed",
					height: "100vh",
					width: "100%",
					maxWidth: "100%",
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",

					background: "url('/images/swirl.webp')",
					backgroundPositionY: "-1000px",
					backgroundPositionX: "-500px",
					backgroundRepeat: "no-repeat",
					margin: "0 auto",
				}}
			/>
			{/* Glassmorphism effect */}
			<Box
				sx={{
					zIndex: 1,
					position: "fixed",
					height: "100vh",
					width: "100%",
					background: "rgba(221, 250, 255, 0.17)",
					backdropFilter: "blur(38px)",
				}}
			/>
			{/* Main container */}
			<Box
				sx={{
					zIndex: 30,
					position: "absolute",
					minHeight: "100vh",
					width: "100%",
					maxWidth: "1920px",
				}}
			>
				{pathname === "/dashboard" && <Navbar />}
				{/* Sidebar and Content body */}
				<Box
					sx={{
						marginTop: pathname === "/dashboard" ? "0px" : "106px",
						justifyContent: "space-between",
						alignItems: "flex-start",
					}}
				>
					{/* Sidebar */}
					<Sidebar />
					{/* Desktop Body container */}
					{locale === "ar" ? (
						<Box
							sx={{
								position: { xs: "absolute", xl: "fixed" },
								left: "0",
								display: { xs: "none", md: "flex" },
								width: {
									xs: "100%",
									md: "70%",
									xl: "80%",
								},
								maxWidth: "1544px",
								minHeight: "100vh",
								paddingX: { xs: "10px", md: "30px" },
							}}
						>
							{children}
						</Box>
					) : (
						<Box
							sx={{
								position: { xs: "absolute", xl: "fixed" },
								right: "0",
								display: { xs: "none", md: "flex" },
								width: {
									xs: "100%",
									md: "70%",
									xl: "80%",
								},
								maxWidth: "1544px",
								maxHeight: "100vh",
								paddingX: { xs: "10px", md: "30px" },
							}}
						>
							{children}
						</Box>
					)}
					{/* Mobile Body container */}
					<Box
						sx={{
							position: "absolute",
							display: { xs: "flex", md: "none", lg: "none" },
							width: "100%",
							minHeight: "100%",
							height: "100vh",
						}}
					>
						{children}
						<>
							<Box
								sx={{
									zIndex: "999999999",
									width: "100%",
									bottom: "0",
									marginTop: "15rem",
								}}
							>
								<Box
									sx={{
										height: "50vh",
										display: "flex",
										alignItems: "end",
									}}
								>
									<FooterMobile />
								</Box>
							</Box>
						</>
					</Box>
				</Box>
			</Box>
		</>
	);
}
