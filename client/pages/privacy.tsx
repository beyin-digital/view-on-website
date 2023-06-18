import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Head from "next/head";

const PrivacyDetails = dynamic(() => import("@/components/PrivacyDetails"), {
	ssr: false,
});
const Navbar = dynamic(() => import("@/components/Navbar/Navbar"), {
	ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer/Footer"), {
	ssr: false,
});
const FooterMobile = dynamic(() => import("@/components/Footer/FooterMobile"), {
	ssr: false,
});

const Privacy = () => {
	const { t } = useTranslation("privacy");

	return (
		<>
			<Head>
				<title>VIEW ON WEBSITE - {t("meta_title")} </title>
				<meta name="description" content={`${t("meta_description")}`} />
				<meta name="keyword" content={`${t("meta_keyword")}`} />
				<link rel="canonical" href="https://www.viewonwebsite.com/subscribe" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>

			{/* <Layout>
        <h1></h1>
      </Layout> */}
			<>
				<Navbar />
				<PrivacyDetails />
				<Footer />
				<FooterMobile />
			</>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", ["common", "privacy"])),
		},
	};
};
export default Privacy;
