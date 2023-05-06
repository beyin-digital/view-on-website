import { Box, Link, Typography } from "@mui/material";
import Head from "next/head";

import { useRouter } from "next/router";

import Image from "next/image";
// button
import { ButtonLogin } from "@/components/Button";
// import { useRouter } from "next/router";

// components
import LoginForm from "@/components/Login/LoginForm";
import LoginDetails from "@/components/Login/LoginDetails";
import LoginTextSignUp from "@/components/Login/LoginTextSignUp";
import Layout from "@/components/Login/Layout";

const LoginPage = () => {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>ViewOnWebsite - Login Page</title>
				<meta name="description" content="" />
				<meta name="keyword" content="" />
				<meta property="og:image" content="" />
			</Head>

			<Layout>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						width: "100%",
						height: "100%",
						justifyContent: "center",
						paddingX: { xs: "2rem", md: "5rem", xl: "5rem" },
						transform: {
							xs: "skew(10deg, 0deg)",
							sm: "skew(16deg, 0deg)",
							md: "skew(16deg, 0deg)",
							xl: "skew(16deg, 0deg)",
						},
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", md: "80%", xl: "75%" },
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: { xs: "center", xl: "end" },
						}}
					>
						<Box
							sx={{
								// width: { xs: "100%", md: "", xl: "" },
								height: "600px",
								paddingX: "1rem",
							}}
						>
							<LoginDetails />
							<LoginForm />
						</Box>
					</Box>
				</Box>
			</Layout>
		</>
	);
};

export default LoginPage;
