import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Head from "next/head";

import { Drawer } from "@mui/material";
import { Box } from "@mui/material";

import Layout from "@/components/Layout/LayoutHome";
import SliderDesktop from "@/components/Slider";
import HomeDetails from "@/components/Home/HomeDetails";
import Header from "@/components/Navbar/Navbar";

type Anchor = "bottom" | "right";

const HomePage = (anchor: Anchor) => {
	const { t } = useTranslation("home");

	const router = useRouter();
	const [hashtag, setHashtag] = useState("");
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		router.push(`/subscribe/${hashtag}`);
	};

	const [state, setState] = useState({
		top: false,
		bottom: false,
	});
	const toggleDrawer = (anchor: Anchor, open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent,
	) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" ||
				(event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};
	function openModel() {
		setIsDrawerOpen(true);
	}
	function closeModel() {
		setIsDrawerOpen(false);
	}
	return (
		<>
			<Head>
				<title>{t("meta_title")}</title>
				<meta name="description" content="" />
				<meta name="keyword" content="" />
				<meta property="og:image" content="" />
				<link rel="icon" href="/images/logo.svg" />
			</Head>
			<Box
				sx={{
					position: "relative",
					height: "100%",
					width: "100%",
				}}
			>
				<Layout onClick={openModel}>
					<>
						<HomeDetails />
						<Drawer
							anchor="bottom"
							open={isDrawerOpen}
							onClose={() => setIsDrawerOpen(false)}
							onClick={toggleDrawer(anchor, false)}
							onKeyDown={toggleDrawer(anchor, false)}
						>
							<Header />
							<SliderDesktop onClick={closeModel} />
						</Drawer>
					</>
				</Layout>
			</Box>
		</>
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
