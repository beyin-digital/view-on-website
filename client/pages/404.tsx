import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import Head from "next/head";
import dynamic from "next/dynamic";

const ErrorDetails = dynamic(() => import("@/components/404"), {
	ssr: false,
});

const ErrorPage = () => {
	const { t } = useTranslation("error");

	return (
		<>
			<Head>
				<title>{t("meta_title")} </title>
				<meta name="description" content={`${t("meta_desc")}`} />
				<meta name="keyword" content={`${t("meta_keyword")}`} />
				<link
					rel="canonical"
					href="https://wiewonwebsite.com/en/illustration"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<>
				<ErrorDetails />
			</>
		</>
	);
};
export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", ["common", "error"])),
		},
	};
};
export default ErrorPage;
