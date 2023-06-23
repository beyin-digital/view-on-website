import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Head from "next/head";

const Navbar = dynamic(() => import("@/components/Navbar/Navbar"), {
	ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer/Footer"), {
	ssr: false,
});
const FooterMobile = dynamic(() => import("@/components/Footer/FooterMobile"), {
	ssr: false,
});
const TermsDetails = dynamic(() => import("@/components/TermsDetails"), {
	ssr: false,
});
const Terms = () => {
	const { t } = useTranslation("terms");

	return (
		<>
			<Head>
				<title>VIEW ON WEBSITE - {t("meta_title")} </title>
				<meta name="description" content={`${t("meta_description")}`} />
				<meta name="keyword" content={`${t("meta_keyword")}`} />
				<link rel="canonical" href="https://www.viewonwebsite.com" />
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

			{/* <Layout>
        <h1></h1>
      </Layout> */}
			<>
				<Navbar />
				<>
					<TermsDetails />
				</>
				<Footer />
				<FooterMobile />
			</>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", ["common", "terms"])),
		},
	};
};
export default Terms;
