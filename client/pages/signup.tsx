import { Container, Grid } from "@mui/material";
import Head from "next/head";

// components
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("@/components/Layout/Layout"), {
	ssr: false,
});
const SignupForm = dynamic(() => import("@/components/Signup/SignupForm"), {
	ssr: false,
});
const SignupDetails = dynamic(
	() => import("@/components/Signup/SignupDetails"),
	{
		ssr: false,
	},
);

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { GetServerSideProps } from "next";

import { useTranslation } from "next-i18next";
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
			<Head>
				<title>{t("meta_title")} </title>
				<meta name="description" content="" />
				<meta name="keyword" content="" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<Layout
				nameOne=""
				linkOne=""
				nameTwo={t("nav_subscribe")}
				linkTwo="/subscribe"
				nameThree={t("nav_examples")}
				linkThree="/example"
				nameFour={t("nav_login")}
				linkFour="/login"
			>
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
						<>
							<SignupForm />
						</>
					</Container>
				</Grid>
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", ["common", "signup"])),
		},
	};
};

export default SignUpPage;
