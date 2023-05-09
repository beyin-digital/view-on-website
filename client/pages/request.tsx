import Layout from "@/components/Layout/Layout";
import DetailsHeader from "@/components/Request/DetailsHeader";
import FormRequest from "@/components/Request/FormRequest";
import { Box, Grid } from "@mui/material";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { useTranslation } from "next-i18next";
import Head from "next/head";

const Request = () => {
	const { t } = useTranslation("request");

	return (
		<>
			<Head>
				<title>{t("meat_title")}</title>
				<meta name="description" content="" />
				<meta name="keyword" content="" />
				<meta property="og:image" content="" />
				<link rel="icon" href="/images/logo.svg" />
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
						transform: {
							xs: "skew(10deg, 0deg)",
							sm: "skew(16deg, 0deg)",
							md: "skew(16deg, 0deg)",
							xl: "skew(16deg, 0deg)",
						},
						paddingX: "1rem",
						// marginY: { xs: "7rem", sm: "7rem", md: "1rem", xl: "1rem" },
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

							// top: { xs: "10rem", sm: "0", md: "0", xl: "0" },
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
