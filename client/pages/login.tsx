import { Box, Typography } from "@mui/material";
import Head from "next/head";

import { useRouter } from "next/router";

// button
import { ButtonLogin } from "@/components/Button";

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
						paddingX: "1rem",
						transform: "skew(16deg, 0deg)",
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", md: "80%", xl: "75%" },
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "end",
						}}
					>
						<Box
							sx={{
								width: "610px",
								height: "600px",
								paddingX: "1rem",
							}}
						>
							<LoginDetails />
							<LoginForm />
							<Box
								sx={{
									marginY: "4rem",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<ButtonLogin
									name="login"
									onClick={() => {
										router.push("/");
									}}
								/>
								<LoginTextSignUp />
							</Box>
						</Box>
					</Box>
				</Box>
			</Layout>
			{/* <Typography>Or login with</Typography> */}
		</>
	);
};

export default LoginPage;
