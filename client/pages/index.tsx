import { useState } from "react";
import Layout from "@/components/Layout/LayoutWithFooter";
import { Box, Button } from "@mui/material";

import { useRouter } from "next/router";
import Head from "next/head";
import ArrowUpright from "../public/icons/arrowUpright";
import HomeDetails from "@/components/Home/HomeDetails";
import { Drawer, Typography, IconButton } from "@mui/material";

import SliderDesktop from "@/components/Slider/SliderDesktop";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { useTranslation } from "next-i18next";

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
	return (
		<>
			<Head>
				<title>{t("meat_title")}</title>
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
				<Box
					sx={{
						position: "absolute",
						bottom: "0",
						left: "0",
						right: "0",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						zIndex: "999999999",
					}}
				>
					<Button
						sx={{
							height: "50px",
							width: "250px",
							// border:"1px solid ",
							marginLeft: "-19rem",
							background: "transparent",
							color: "transparent",
						}}
						// onClick={() => setIsDrawerOpen(true)}
					>
						{/* mohamed */}
					</Button>
				</Box>
				<Layout>
					<>
						<HomeDetails />
						<Drawer
							anchor="bottom"
							open={isDrawerOpen}
							onClose={() => setIsDrawerOpen(false)}
							onClick={toggleDrawer(anchor, false)}
							onKeyDown={toggleDrawer(anchor, false)}
						>
							<SliderDesktop />
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
			...(await serverSideTranslations(locale || "", ["common", "home"])),
		},
	};
};

export default HomePage;
