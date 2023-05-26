import Head from "next/head";
import { Box, Grid } from "@mui/material";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

// components
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("@/components/Layout/Layout"), {
	ssr: false,
});
const DetailsHeader = dynamic(
	() => import("@/components/Request/DetailsHeader"),
	{
		ssr: false,
	},
);
const FormRequest = dynamic(() => import("@/components/Request/FormRequest"), {
	ssr: false,
});

// import Layout from '@/components/Layout/Layout'
// import DetailsHeader from '@/components/Request/DetailsHeader'
// import FormRequest from '@/components/Request/FormRequest'

const Request = () => {
	const { t } = useTranslation("request");

	return (
		<>
			<Head>
				<title>{t("meta_title")} </title>
				<meta name="description" content={`${t("meta_description")}`} />
				<meta name="keyword" content={`${t("meta_keyword")}`} />
				<link
					rel="canonical"
					href="https://wiewonwebsite.com/en/illustration"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Grid
					container
					sx={{
						width: { xs: "100%", md: "90%", xl: "90%" },
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "end",
						transform: "skew(16deg, 0deg)",
						paddingX: "1rem",
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", md: "70%", xl: "865px" },
							height: { xs: "100%", md: "90%", xl: "90%" },
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "space-around",
							position: "relative",
							paddingX: "1rem",
						}}
					>
						<DetailsHeader />
						<FormRequest />
					</Box>
				</Grid>
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", ["common", "request"])),
		},
	};
};

export default Request;
