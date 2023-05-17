import { Box } from "@mui/material";
import Head from "next/head";

// components
import LoginForm from "@/components/Login/LoginForm";
import LoginDetails from "@/components/Login/LoginHeader";
import Layout from "@/components/Layout/Layout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { useTranslation } from "next-i18next";
import { UserContext } from "@/contexts/userContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
	const { t } = useTranslation("login");

	const router = useRouter();

	const { token } = useContext(UserContext);

	useEffect(() => {
		if (token) {
			router.push("/dashboard");
		}
	}, [token]);

	if (token) {
		return <div>Redirecting to dashboard</div>;
	}
	return (
		<>
			<Head>
				<title>{t("meta_title")}</title>
				<meta name='description' content='' />
				<meta name='keyword' content='' />
				<meta property='og:image' content='' />
				<link rel='icon' href='/images/logo.svg' />
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
						transform: "skew(16deg, 0deg)",
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", md: "90%", xl: "75%" },
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: {
								xs: "center",
								md: "end",
								xl: "end",
							},
						}}
					>
						<Box
							sx={{
								width: "600px",
								height: "550px",
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", [
				"common",
				"login",
			])),
		},
	};
};

export default LoginPage;
