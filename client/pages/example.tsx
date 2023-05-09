import PageDesktop from "@/components/Examples/PageDesktop";
import PageMobile from "@/components/Examples/PageMobile";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Navbar";
import { Box } from "@mui/material";
import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { useTranslation } from "next-i18next";
import PageTablet from "@/components/Examples/PageTablet";
import FooterMobile from "@/components/Footer/FooterMobile";

const Example = () => {
	const { t } = useTranslation("example");

	return (
		<>
			<Head>
				<title>{t("meat_title")}</title>
				<meta name="description" content="" />
				<meta name="keyword" content="" />
				<meta property="og:image" content="" />
				<link rel="icon" href="/images/logo.svg" />
			</Head>
			<Header />
			<Box>
				<PageDesktop />
				<PageTablet />
				<PageMobile />
			</Box>
			<Footer />
			<FooterMobile />
		</>
	);
};
export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", ["common", "example"])),
		},
	};
};

export default Example;
