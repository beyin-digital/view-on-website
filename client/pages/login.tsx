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
	// const router = useRouter();

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
	];
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
							justifyContent: { xs: "center", xl: "end" },
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
									display: { xs: "none", sm: "flex", md: "none", xl: "none" },
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
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
						</Box>
					</Box>
				</Box>
			</Layout>
		</>
	);
};

export default LoginPage;
