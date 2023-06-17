import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

import Head from "next/head";
import dynamic from "next/dynamic";
import Seo from "@/components/Seo";

const Layout = dynamic(() => import("@/components/Layout/Layout"), {
	ssr: false,
});
const ContactDetails = dynamic(() => import("@/components/ContactDetails"), {
	ssr: false,
});

const Contact = () => {
	const { t } = useTranslation("contact");

	return (
		<>
			<Head>
				<title>VIEW ON WEBSITE - {t("meta_title")} </title>
				<meta name="description" content={`${t("meta_description")}`} />
				<meta name="keyword" content={`${t("meta_keyword")}`} />
				<link rel="canonical" href="https://www.viewonwebsite.com/example" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<h1 />
				<ContactDetails />
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", ["common", "contact"])),
		},
	};
};
export default Contact;
