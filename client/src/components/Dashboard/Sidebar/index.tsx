"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { AiFillCreditCard, AiFillInstagram } from "react-icons/ai";
import {
	BsFacebook,
	BsFillShieldLockFill,
	BsLinkedin,
	BsTwitter,
} from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { BiHome } from "react-icons/bi";

const Sidebar = () => {
	const router = useRouter();
	const pathname = usePathname();

	const links = [
		{
			name: "Home Page",
			icon: (
				<BiHome
					size={24}
					color={pathname === "/dashboard" ? "white" : ""}
				/>
			),
			href: "/dashboard",
		},
		{
			name: "Profile",
			icon: (
				<FaUserAlt
					color={pathname === "/dashboard/profile" ? "white" : ""}
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
						pathname === "/dashboard/subscriptions" ? "white" : ""
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
					color={pathname === "/dashboard/security" ? "white" : ""}
					size={24}
				/>
			),
			href: "/dashboard/security",
		},
		{
			name: "Logout",
			icon: (
				<IoIosLogOut
					color={pathname === "/dashboard/logout" ? "white" : ""}
					size={24}
				/>
			),
			href: "/dashboard/logout",
		},
	];
	return (
		<Box
			sx={{
				position: "fixed",
				height: "821px",
				width: { xs: "100%", md: "240px", xl: "319px" },
				background: "rgba(251, 251, 251, 0.9)",
				border: "1px solid #E3E3E3",
				backdropFilter: "blur(100px)",
				borderRadius: "0px 30px 30px 0px",
			}}
		>
			{/* Logo and title section */}
			<Box
				sx={{
					height: "84px",
					display: "flex",
					marginBottom: "19px",
					alignItems: "center",
					paddingLeft: "20px",
				}}
			>
				<Image
					src='/images/logo.svg'
					width={74}
					height={37}
					alt='logo'
				/>
				<Box
					style={{
						marginLeft: "20px",
						display: "flex",
						flexDirection: "column",
						height: "50px",
						alignItems: "flex-start",
					}}
				>
					<Typography fontSize='32px'>Dashboard</Typography>
					<Link
						href='/'
						style={{
							color: "#0090EC",
							fontSize: 13,
							fontWeight: 500,
							textDecoration: "none",
						}}
					>
						ViewOnWebsite.com
					</Link>
				</Box>
			</Box>

			<Divider />

			{/* Options */}
			<Box
				sx={{
					height: "300px",
					width: "302px",
					margin: "5px auto 55px auto",
				}}
			>
				{links.map((link, index) => (
					<Box
						key={index}
						onClick={() => router.push(link.href)}
						sx={{
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							height: "60px",
							background: pathname === link.href ? "#0090EC" : "",
							borderRadius: "2px",
						}}
					>
						{link.icon}
						<Typography
							sx={{ width: "200px", marginLeft: "10px" }}
							fontSize='20px'
							fontWeight={500}
							color={pathname === link.href ? "#FBFBFB" : "#000"}
						>
							{link.name}
						</Typography>
					</Box>
				))}
			</Box>
			<Divider style={{ marginBottom: "33px" }} />

			<Link
				href='/contact'
				style={{
					marginLeft: "56px",
					textDecoration: "none",
				}}
			>
				Contact Us
			</Link>

			<Divider style={{ marginTop: "170px" }} />
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginTop: "27px",
					width: "158px",
					marginLeft: "60px",
				}}
			>
				<Link href='https://instagram.com/vow' target='_blank'>
					<BsFacebook size={20} color='#343132' />
				</Link>
				<Link href='https://instagram.com/vow' target='_blank'>
					<BsTwitter size={20} color='#343132' />
				</Link>
				<Link href='https://instagram.com/vow' target='_blank'>
					<AiFillInstagram size={20} color='#343132' />
				</Link>
				<Link href='https://instagram.com/vow' target='_blank'>
					<BsLinkedin size={20} color='#343132' />
				</Link>
			</Box>
		</Box>
	);
};

export default Sidebar;
