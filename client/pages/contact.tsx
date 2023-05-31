import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import ContactDetails from "@/components/ContactDetails";

const Contact = () => {
	const { t } = useTranslation("contact");
	const cards = [
		{
			id: 1,
			name: "Technical Support",
			text: "For technical support please contact us through:",
			iconEmail: "",
			email: "Support@viewonwebsite.com",
			iconPhone: "",
			phone: "+971 50 1234 567",
		},
		{
			id: 2,
			name: "Technical Support",
			text: "For technical support please contact us through:",
			iconEmail: "",
			email: "Support@viewonwebsite.com",
			iconPhone: "",
			phone: "+971 50 1234 567",
		},
		{
			id: 3,
			name: "Technical Support",
			text: "For technical support please contact us through:",
			iconEmail: "",
			email: "Support@viewonwebsite.com",
			iconPhone: "",
			phone: "+971 50 1234 567",
		},
	];

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
			{/* <Layout>
				<h1 />
				<ContactDetails />
			</Layout> */}
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
