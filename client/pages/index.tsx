import Layout from "@/components/Layout/LayoutWithFooter";
import Head from "next/head";
import HomeDetails from "@/components/Home/HomeDetails";

const HomePage = () => {
	return (
		<>
			<Head>
				<title>ViewOnWebsite - Home Page</title>
				<meta name="description" content="" />
				<meta name="keyword" content="" />
				<meta property="og:image" content="" />
			</Head>
			<Layout>
				<>
					<HomeDetails />
				</>
			</Layout>
		</>
	);
};

export default HomePage;
