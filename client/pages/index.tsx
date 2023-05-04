import { useState } from "react";
import Layout from "@/components/Layout/LayoutWithFooter";
import { Grid, Box, OutlinedInput } from "@mui/material";
import Header from "@/components/Home/Header";
import TextViewOnWeb from "@/components/Home/TextViewOnWeb";
import LayoutHomeBg from "@/components/Home/LayoutHomeBg";
import { useRouter } from "next/router";
import Head from "next/head";
import ArrowUpright from "../public/icons/arrowUpright";
import HomeDetails from "@/components/Home/HomeDetails";
import { Drawer, Typography, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SliderDesktop from "@/components/Slider/SliderDesktop";

type Anchor = "bottom" | "right";

const HomePage = (anchor: Anchor) => {
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
				<title>ViewOnWebsite - Home Page</title>
				<meta name="description" content="" />
				<meta name="keyword" content="" />
				<meta property="og:image" content="" />
			</Head>
			<Box
				sx={{
					position: "relative",
					height: "100%",
					width: "100%",
				}}
			>
				<IconButton
					onClick={() => setIsDrawerOpen(true)}
					size="large"
					edge="start"
					// color="inherit"
					aria-label="logo"
					sx={{
						position: "absolute",
						zIndex: "99999999",
						bottom: "0",
						left: "0",
						right: "0",

						padding: "20px",
						marginLeft: "0",

						transition: "0",
						"&hover":{
							background:"red"
						}
					}}
				>
					{/* <MenuIcon /> */}
				</IconButton>
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

export default HomePage;
