import React, { useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { IoIosLogOut, IoMdClose } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { AiFillCreditCard, AiFillInstagram } from "react-icons/ai";
import {
	BsFacebook,
	BsFillShieldLockFill,
	BsLinkedin,
	BsTwitter,
} from "react-icons/bs";
import Link from "next/link";
import Modal from "../Modal";
import { UserContext } from "@/contexts/userContext";

const Navbar = () => {
	const [value, setValue] = React.useState(0);
	const pathname = usePathname();
	const router = useRouter();
	const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

	const { logout } = useContext(UserContext);

	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const links = [
		{
			name: "Home Page",
			icon: (
				<MdHomeFilled
					size={24}
					color={pathname === "/dashboard" ? "#FBFBFB" : ""}
				/>
			),
			href: "/dashboard",
		},
		{
			name: "Profile",
			icon: (
				<FaUserAlt
					color={pathname === "/dashboard/profile" ? "#FBFBFB" : ""}
					size={24}
				/>
			),
			href: "/dashboard/profile",
		},
		{
			name: "Subscriptions",
			icon: (
				<AiFillCreditCard
					color={
						pathname === "/dashboard/subscriptions" ? "#FBFBFB" : ""
					}
					size={24}
				/>
			),
			href: "/dashboard/subscriptions",
		},
		{
			name: "Security",
			icon: (
				<BsFillShieldLockFill
					color={pathname === "/dashboard/security" ? "#FBFBFB" : ""}
					size={24}
				/>
			),
			href: "/dashboard/security",
		},
		{
			name: "Logout",
			icon: (
				<IoIosLogOut
					color={pathname === "/dashboard/logout" ? "#FBFBFB" : ""}
					size={24}
				/>
			),
			href: "/dashboard/logout",
		},
	];
	const hashtags = [
		{
			keyword: "VOW",
			slug: "vow",
		},
		{
			keyword: "BE",
			slug: "be",
		},
		{
			keyword: "AI",
			slug: "ai",
		},
		{
			keyword: "Pro",
			slug: "pro",
		},
		{
			keyword: "Smart Device",
			slug: "smart-device",
		},
	];
	return (
		<>
			{/* Desktop Navbar */}
			<Box
				sx={{
					position: "sticky",
					top: 0,
					zIndex: 20,
					width: "100%",
					height: { xs: "60px", md: "60px", xl: "80px" },
					display: { xs: "none", md: "flex", xl: "flex" },
					alignItems: "center",
					justifyContent: "flex-end",
					margin: "0 auto 26px auto",
				}}
			>
				<Box
					sx={{
						height: "100%",
						width: { xs: "100%", md: "1080px", xl: "1544px" },
						display: "flex",
						alignItems: "center",
						paddingLeft: "26px",
						marginRight: "24px",
						background: "rgba(251, 251, 251, 0.5)",
						border: "1px solid #E3E3E3",
						backdropFilter: "blur(100px)",
						borderRadius: "0px 0px 15px 15px",
					}}
				>
					<Typography
						fontSize={{ xs: "24px", md: "24px", xl: "32px" }}
						fontWeight={600}
					>
						My #Hashtags
					</Typography>
					<Tabs
						sx={{
							marginLeft: { xs: "30px", md: "30px", xl: "45px" },
							height: "100%",
						}}
						value={value}
						onChange={handleChange}
						variant='scrollable'
						scrollButtons={false}
					>
						{hashtags.map((hashtag, index) => (
							<Tab
								sx={{
									minWidth: "163px",
									fontSize: {
										xs: "16px",
										md: "16px",
										xl: "24px",
									},
									marginTop: {
										xs: "10px",
										md: "10px",
										xl: "20px",
									},
									fontWeight: value === index ? 600 : 400,
									color: "black",
								}}
								key={index}
								label={`#` + hashtag.keyword}
							/>
						))}
					</Tabs>
				</Box>
			</Box>

			{/* Mobile Header */}
			<Box
				sx={{
					position: "sticky",
					top: 0,
					zIndex: 20,
					height: "94px",
					display: { xs: "flex", md: "none", xl: "none" },
					alignItems: "center",
					background: "rgba(251, 251, 251, 0.6)",
					paddingX: "24px",
					border: "1px solid #FBFBFB",
					backdropFilter: "blur(100px)",
				}}
			>
				<Box
					sx={{
						margin: "0 auto",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
						height: "37px",
					}}
				>
					{mobileNavOpen ? (
						<IoMdClose
							size={33}
							onClick={() => {
								setMobileNavOpen(!mobileNavOpen);
							}}
						/>
					) : (
						<BiMenu
							size={33}
							onClick={() => {
								setMobileNavOpen(!mobileNavOpen);
							}}
						/>
					)}
					<Typography fontSize='24px' fontWeight='600'>
						Dashboard
					</Typography>
					<Image
						src='/images/logo.svg'
						alt='logo'
						width={74}
						height={37}
					/>
				</Box>
			</Box>
			{/* Menu List */}
			{mobileNavOpen && (
				<Box
					sx={{
						position: "absolute",
						display: "flex",
						zIndex: 999,
						flexDirection: "column",
						background: "rgba(251, 251, 251, 0.6)",
						backdropFilter: "blur(100px)",
						width: "100%",
						alignItems: "center",
						height: "930px",
						top: "94px",
					}}
				>
					{links.map(link => (
						<Box
							key={link.name}
							onClick={() => {
								if (link.name === "Logout") {
									handleOpen();
									return;
								}
								router.push(link.href);
								setMobileNavOpen(false);
								console.log("Clicked");
							}}
							sx={{
								display: "flex",
								cursor: "pointer",
								width: "80%",
								height: "59px",
								borderRadius: "7px",
								background:
									pathname === link.href ? "#0090EC" : "",
								marginTop: "13px",
							}}
						>
							<Box
								sx={{
									width: "20%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									height: "100%",
								}}
							>
								{link.icon}
							</Box>
							<Box
								sx={{
									width: "80%",
									display: "flex",
									alignItems: "center",
									height: "100%",
								}}
							>
								<Typography
									fontSize='20px'
									fontWeight={
										pathname === link.href ? 600 : 400
									}
									color={
										pathname === link.href
											? "#FBFBFB"
											: "#000"
									}
								>
									{link.name}
								</Typography>
							</Box>
						</Box>
					))}
					<Box
						sx={{
							display: "flex",
							marginTop: "125px",
							width: "50%",
							height: "24px",
							justifyContent: "space-between",
						}}
					>
						<Link href='https://instagram.com/vow' target='_blank'>
							<BsFacebook size={17.5} color='#343132' />
						</Link>
						<Link href='https://instagram.com/vow' target='_blank'>
							<BsTwitter size={17.5} color='#343132' />
						</Link>
						<Link href='https://instagram.com/vow' target='_blank'>
							<AiFillInstagram size={17.5} color='#343132' />
						</Link>
						<Link href='https://instagram.com/vow' target='_blank'>
							<BsLinkedin size={17.5} color='#343132' />
						</Link>
					</Box>
				</Box>
			)}
			<Modal title='Log Out' open={open} handleClose={handleClose}>
				<Box>
					<Typography>
						You're about to Log out of your View On Website
						Dashboard?
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						position: "absolute",
						bottom: 0,
						width: "90%",
						justifyContent: "space-between",
						margin: "0 auto",
						paddingBottom: "21px",
					}}
				>
					<Button
						color='info'
						variant='contained'
						sx={{ height: "42px", width: "154px" }}
						onClick={() => {
							logout();
						}}
					>
						Log out
					</Button>
					<Button
						color='error'
						variant='contained'
						sx={{ height: "42px", width: "154px" }}
						onClick={() => {
							handleClose();
						}}
					>
						Cancel
					</Button>
				</Box>
			</Modal>
		</>
	);
};

export default Navbar;
