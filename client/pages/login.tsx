import { Box } from "@mui/material";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { useTranslation } from "next-i18next";
import { UserContext } from "@/contexts/userContext";
import { useContext, useEffect, useMemo } from "react";
import { useRouter } from "next/router";

// components
import dynamic from "next/dynamic";
const LoginForm = dynamic(() => import("@/components/Login/LoginForm"), {
	ssr: false,
});
const LoginDetails = dynamic(() => import("@/components/Login/LoginHeader"), {
	ssr: false,
});
const Layout = dynamic(() => import("@/components/Layout/LayoutLogin"), {
	ssr: false,
});
import Head from "next/head";
import Seo from "@/components/Seo";

const LoginPage = () => {
	const { t } = useTranslation("login");
	const router = useRouter();
	const { token, user } = useContext(UserContext);

	const boxStyle = useMemo(
		() => ({
			display: "flex",
			alignItems: "center",
			width: "100%",
			height: "100%",
			justifyContent: "center",
			paddingX: { xs: "2rem", md: "5rem", xl: "5rem" },
			transform: "skew(16deg, 0deg)",
		}),
		[],
	);

	useEffect(() => {
		if (token) {
			if (router.query.redirect === "subscribe") {
				router.push(
					`/${router.locale}/subscribe?hashtag=${router.query.hashtag}&sublink=${router.query.sublink}`,
				);
				return;
			} else {
				router.push(`/${router.locale}/dashboard`);
			}
		}
	}, [token]);

	return (
		<>
			<Head>
				<title>VIEW ON WEBSITE - {t("meta_title")} </title>
				<meta name="description" content={`${t("meta_description")}`} />
				<meta name="keyword" content={`${t("meta_keyword")}`} />
				<link rel="canonical" href="https://www.viewonwebsite.com/illustration" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="shortcut icon" href="/favicon.ico" />
					<meta name="msapplication-config" content="/pwa/browserconfig.xml" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/pwa/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/pwa/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/pwa/favicon-16x16.png"
				/>
				<link
					rel="mask-icon"
					href="/pwa/safari-pinned-tab.svg"
					color="#171b1c"
				/>
				<meta name="msapplication-TileColor" content="#000000" />
				<meta
					name="msapplication-TileImage"
					content="/pwa/mstile-144x144.png"
				/>
				<meta name="theme-color" content="#ffffff" />
				<link rel="manifest" href="/pwa/manifest.json" />
			</Head>

			<Layout>
				<Box sx={boxStyle}>
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
							<>
								<LoginForm />
							</>
						</Box>
					</Box>
				</Box>
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", ["common", "login"])),
		},
	};
};

export default LoginPage;
