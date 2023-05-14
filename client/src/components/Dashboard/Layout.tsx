import React, { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/components/Dashboard/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar";
import { UserContext } from "@/contexts/userContext";

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	const pathname = usePathname();
	const router = useRouter();

	const { token, user } = useContext(UserContext);
	useEffect(() => {
		if (!token) router.push("/login");
	}, [user]);

	return (
		<>
			{/* Background */}
			<Box
				sx={{
					position: "fixed",
					height: "100vh",
					width: "100%",
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					background: "url('/images/swirl.svg')",
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
				}}
			>
				<Navbar />
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
					<Box
						sx={{
							position: "absolute",
							right: { xs: "0", md: "24px", xl: "48px" },
							display: { xs: "none", md: "flex" },
							width: {
								xs: "100%",
								md: "1080px",
								xl: "1544px",
							},
							maxWidth: "1544px",
							minHeight: "100vh",
						}}
					>
						{children}
					</Box>
					{/* Mobile Body container */}
					<Box
						sx={{
							position: "absolute",
							display: { xs: "flex", md: "none", lg: "none" },
							width: "100%",
							minHeight: "100vh",
						}}
					>
						{children}
					</Box>
				</Box>
			</Box>
		</>
	);
}
