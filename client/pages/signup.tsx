import { Container, Grid } from "@mui/material";
import Head from "next/head";

// layout
import Layout from "@/components/Layout/Layout";

// components
import SignupForm from "@/components/Signup/SignupForm";
import SignupDetails from "@/components/Signup/SignupDetails";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { useTranslation } from "next-i18next";
import Seo from "@/components/Seo";
import { useContext, useEffect } from "react";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/router";

const SignUpPage = () => {
	const { t } = useTranslation("signup");
	const router = useRouter();

	const { token } = useContext(UserContext);
	useEffect(() => {
		if (token) {
			router.push("/dashboard");
		}
	}, [token]);

	return (
		<>
			<Seo title={t("meta_title")} description='' keyword='' />
			<Head>
				<title>{t("meta_title")}</title>
				<meta name='description' content='' />
				<meta name='keyword' content='' />
				<meta property='og:image' content='' />
				<link rel='icon' href='/images/logo.svg' />
			</Head>
			<Layout>
				<Grid
					container
					sx={{
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "end",
						transform: "skew(16deg, 0deg)",
					}}
				>
					<Container
						sx={{
							width: { xs: "100%", md: "70%", xl: "60%" },
							height: "100%",
							marginRight: { xs: "", md: "7rem", xl: "7rem" },
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "space-evenly",
							marginY: {
								xs: "0rem",
								sm: "0rem",
								md: "0rem",
								xl: "1px",
							},
							marginX: "1rem",
							paddingY: "1rem",
						}}
					>
						<SignupDetails />
						<SignupForm />
					</Container>
				</Grid>
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", [
				"common",
				"signup",
			])),
		},
	};
};

export default SignUpPage;
