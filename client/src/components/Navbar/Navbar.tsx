import { useState } from "react";
import {
	AppBar,
	Box,
	Divider,
	Drawer,
	IconButton,
	Toolbar,
	Typography,
	Button,
	// Link,
} from "@mui/material";

import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const Header = () => {
	const router = useRouter();
	const [mobileOpen, setMobileOpen] = useState(false);
	// handle menu click
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const links = [
		{
			label: "Subscribe",
			href: "/subscribe",
		},
		{
			label: "Examples",
			href: "/example",
		},
		{ label: "AR", href: "/ar", sublinks: "/ar/1" },
		{
			label: "Login",
			href: "/login",
		},
	];
	const link = [
		{
			label: "Contact",
			href: "/contact",
		},
		{
			label: "Learn More",
			href: "/",
		},
		{
			label: "Privacy Policy",
			href: "/privacy",
		},
		{
			label: "T&C",
			href: "/terms",
		},
	];

	//menu drawer
	const drawer = (
		<Box onClick={handleDrawerToggle}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					marginX: "1rem",
				}}
			>
				<Box
					sx={{ cursor: "pointer", margin: ".5rem 0", textAlign: "center" }}
					onClick={() => router.push("/")}
				>
					<img src="/images/logo.svg" alt="logo" />
				</Box>
				<AiOutlineClose />
			</Box>
			{/* <Divider /> */}
			<Box
				sx={{
					marginY: "2rem",
				}}
			>
				{links.map((link) => (
					<Link
						key={link.label}
						href={link.href}
						style={{
							textDecoration: "none",
						}}
					>
						<Box
							sx={{
								marginX: "1rem",
								height: "55px",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<Typography
								fontSize="24px"
								fontWeight={"400"}
								lineHeight="37px"
								color="#343132"
							>
								{link.label}
							</Typography>
							<IoIosArrowForward color="#343132" />
						</Box>
					</Link>
				))}
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Button
					onClick={() => {
						router.push("/signup");
					}}
					sx={{
						borderRadius: "16px",
						paddingX: "11px",
						height: "59px",
						display: "flex",
						background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
					}}
				>
					<Typography
						sx={{
							letterSpacing: "0.02em",
							fontSize: "25px",
							fontWeight: 400,
							lineHeight: "40px",
							color: "#343132",
						}}
					>
						Get Started
					</Typography>
					<FiArrowUpRight size={42} color="#343132" />
				</Button>
			</Box>
			<Box
				sx={{
					marginY: "1rem",
				}}
			>
				<Divider light />
			</Box>
			<Box
				sx={{
					width: "100%",
					display: { xs: "flex", md: "flex", xl: "flex" },
					alignItems: "center",
					justifyContent: { xs: "center", md: "start", xl: "start" },
					margin: { xs: " 2rem 0", xl: "0" },
				}}
			>
				<Image
					src="/icons/facebook.svg"
					alt=""
					height={18}
					width={18}
					style={{
						margin: "0 .5rem",
					}}
				/>
				<Image
					src="/icons/twitter.svg"
					alt=""
					height={18}
					width={18}
					style={{
						margin: "0 .5rem",
					}}
				/>
				<Image
					src="/icons/insta.svg"
					alt=""
					height={18}
					width={18}
					style={{
						margin: "0 .5rem",
					}}
				/>
			</Box>
			<Box
				sx={{
					marginX: "1rem",
				}}
			>
				{link.map((link) => (
					<Link
						key={link.label}
						href={link.href}
						style={{
							textDecoration: "none",
						}}
					>
						<Box
							sx={{
								height: "55px",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<Typography
								fontSize="18px"
								fontWeight={"400"}
								lineHeight="27px"
								color="#343132"
							>
								{link.label}
							</Typography>
						</Box>
					</Link>
				))}
			</Box>
		</Box>
	);
	return (
		<>
			<Box>
				<AppBar
					component={"nav"}
					sx={{
						background: "rgba(251, 251, 251, 0.6)",
						backdropFilter: "blur(100px)",
						border: "1px solid #FBFBFB",
						boxShadow: "0px 0px 0px 0px",
					}}
				>
					<Toolbar
						sx={{
							flexDirection: { xs: "row-reverse", md: "row", xl: "row" },
						}}
					>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							sx={{
								mr: 2,
								display: { md: "none" },
							}}
							onClick={handleDrawerToggle}
						>
							{mobileOpen ? (
								<AiOutlineClose color="#343132" />
							) : (
								<MenuIcon
									sx={{
										color: "#343132",
									}}
								/>
							)}
						</IconButton>

						<Box
							component="div"
							sx={{ flexGrow: 1, cursor: "pointer", margin: ".5rem 0" }}
							onClick={() => router.push("/")}
						>
							<img src="/images/logo.svg" alt="logo" />
						</Box>
						<Box
							sx={{
								display: { xs: "none", sm: "none", md: "flex", xl: "flex" },
							}}
						>
							<ul className="navigation-menu">
								{links.map((link) => (
									<li key={`${link.label}1`}>
										<Link
											href={link.href}
											key={link.label}
											style={{ textDecoration: "none" }}
										>
											<Typography
												fontSize="32px"
												fontWeight={400}
												lineHeight="37px"
												color="#343132"
											>
												{link.label}
											</Typography>
										</Link>
									</li>
								))}
							</ul>
						</Box>
						<Button
							onClick={() => router.push("/signup")}
							sx={{
								borderRadius: "16px",
								paddingX: "18px",
								height: "59px",
								display: { xs: "none", md: "flex", xl: "flex" },
								background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
							}}
						>
							<Typography
								sx={{
									letterSpacing: "0.02em",
									fontSize: { md: "20px", xl: "32px" },
									fontWeight: 400,
									lineHeight: "40px",
									color: "#343132",
								}}
							>
								Get Started
							</Typography>
							<FiArrowUpRight size={42} color="#343132" />
						</Button>
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						sx={{
							display: { xs: "block" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: "100%",
								height: "100%",
								background: "transparent",
								// background: "rgba(251, 251, 251, 0.6",
								backdropFilter: "blur(100px)",
								boxShadow:"0px 0px 0px 0px"
							},
							// "& .MuiDrawer-paper": {
							// 	background: "transparent",
							// },
						}}
					>
						{drawer}
					</Drawer>
				</Box>
				<Box>
					<Toolbar />
				</Box>
			</Box>
		</>
	);
};

export default Header;
