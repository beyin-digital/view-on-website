import PageDesktop from "@/components/Examples/PageDesktop";
import PageMobile from "@/components/Examples/PageMobile";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Navbar";
import { Box } from "@mui/material";
 
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { useTranslation } from "next-i18next";
import PageTablet from "@/components/Examples/PageTablet";
import FooterMobile from "@/components/Footer/FooterMobile";
import Seo from "@/components/Seo";

const Example = () => {
	const { t } = useTranslation("example");

	return (
		<>
			<Seo title={t("meta_title")} description="" keyword="" />

			<Header />
			<Box
				sx={{
					height: { xs: "100%", xl: "89vh" },
				}}
			>
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
