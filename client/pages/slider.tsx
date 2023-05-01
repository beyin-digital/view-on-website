import SliderDesktop from "@/components/Slider/SliderDesktop";
import SliderMobile from "@/components/Slider/SliderMobile";
import Head from "next/head";

const Slider = () => {
	return (
		<>
			<Head>
				<title>ViewOnWebsite - Home Page</title>
				<meta name="description" content="" />
				<meta name="keyword" content="" />
				<meta property="og:image" content="" />
			</Head>
			<SliderDesktop />
			<SliderMobile />
		</>
	);
};

export default Slider;