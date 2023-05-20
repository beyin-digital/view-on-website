 import IllustrationTablet from "@/components/illustration/IllustrationTablet/IllustrationTablet";
import IllustrationDesktop from "@/components/illustration/IllustrationDesktop/IllustrationDesktop";
import IllustrationMobile from "@/components/illustration/IllustrationMobile/IllustrationMobile";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { useTranslation } from "next-i18next";
import Header from "@/components/Navbar/Navbar";
import FooterMobile from "@/components/Footer/FooterMobile";
import Seo from "@/components/Seo";
const Illustration = () => {
	const { t } = useTranslation("illustration");

	return (
		<>
			<Seo title={t("meta_title")} description="" keyword="" />
			<Header />
			<IllustrationTablet />
			<IllustrationDesktop />
			<IllustrationMobile />
			<FooterMobile />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", [
				"common",
				"illustration",
			])),
		},
	};
};
export default Illustration;
