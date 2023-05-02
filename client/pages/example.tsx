import PageDesktop from "@/components/Examples/PageDesktop";
import PageMobile from "@/components/Examples/PageMobile";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Navbar";
import { Box } from "@mui/material";
import Head from "next/head";

const Example = () => {
	return (
		<>
			<Head>
				<title>ViewOnWebsite - Example Page</title>
				<meta name="description" content="" />
				<meta property="og:image" content="" />
				<meta name="keyword" content="" />
			</Head>
			<Header />
			<Box>
				<PageDesktop />
				{/* <PageMobile /> */}
				<Footer />
			</Box>
		</>
	);
};

export default Example;
