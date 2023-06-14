import { useState, Suspense, useEffect } from "react";

// translate hook
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

import dynamic from "next/dynamic";

const PageHome = dynamic(() => import("@/components/Home"), {
	ssr: false,
});
import Head from "next/head";
import Seo from "@/components/Seo";

const HomePage = () => {
	const { t } = useTranslation("home");

	const [isJsLoaded, setIsJsLoaded] = useState(false);

	useEffect(() => {
		setIsJsLoaded(true);
	}, []);
	return (
		<Suspense>
			<Head>
				<title>View On Website - {t("meta_title")} </title>
				<meta name="description" content={`${t("meta_description")}`} />
				<meta name="keyword" content={`${t("meta_keyword")}`} />
				<link
					rel="canonical"
					href=""
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="shortcut icon" href="/favicon.ico" />

			</Head>
			<PageHome anchor={"bottom"} />
		</Suspense>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", [
				"common",
				"home",
				"slider",
			])),
		},
	};
};

export default HomePage;
