import Head from "next/head";
import IllustrationTablet from "@/components/illustration/IllustrationTablet";
import IllustrationDesktop from "@/components/illustration/IllustrationDesktop";
import IllustrationMobile from "@/components/illustration/IllustrationMobile";

const Illustration = () => {
	return (
		<>
			<Head>
				<title>ViewOnWebsite - Login Page</title>
				<meta name="description" content="" />
				<meta name="keyword" content="" />
				<meta property="og:image" content="" />
			</Head>
			<IllustrationTablet />
			<IllustrationDesktop />
			<IllustrationMobile />
		</>
	);
};

export default Illustration;
