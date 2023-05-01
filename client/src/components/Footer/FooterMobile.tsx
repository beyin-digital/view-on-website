import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Divider from "@mui/material/Divider";
const FooterMobile = () => {
	const links = [
		{ id: 11, name: "contact", link: "/contact" },
		{ id: 22, name: "Learn More", link: "/" },
		{ id: 33, name: "Privacy Policy", link: "/privacy" },
		{ id: 44, name: "T&C", link: "/terms" },
	];
	const icons = [
		{
			id: 11,
			name: "faceBook",
			link: "/https://facebook.com",
			icon: "/icons/facebook.svg",
		},
		{
			id: 22,
			name: "twitter",
			link: "/https://twitter.com",
			icon: "/icons/twitter.svg",
		},
		{
			id: 33,
			name: "instagram",
			link: "/https://instagram.com",
			icon: "/icons/insta.svg",
		},
	];
	return (
		<>
			<Box
				sx={{
					width: "100%",
					height: { xs: "100vh", sm: "50%", md: "50vh", xl: "50vh" },
					display: { xs: "flex", md: "none", xl: "none" },
					alignItems: "end",
					justifyContent: "center",
					position: "relative",
					marginTop: { xs: "0", sm: "5rem" },
					// flexDirection: "column",
				}}
			>
				<Box
					sx={{
						position: "absolute",
						left: { xs: "-20rem", sm: "-40rem" },
						bottom: { xs: "2rem", sm: "-50rem" },
						// width:"40vw"
					}}
				>
					<img
						src="/images/swirl.svg"
						style={{
							width: "100%",
							// height: "100%",
						}}
					/>
					<Image src="/images/swirl.svg" alt="" fill />
				</Box>
				<Box
					sx={{
						width: "100%",
						// height:"100%",
						border: "1px solid #E3E3E3",
						height: { xs: "65%", sm: "40vh", md: "30vh", xl: "30vh" },
						backdropFilter: "blur(50px)",
						borderRadius: "15px 15px 0px 0px",
						background: "rgba(251, 251, 251, 0.6)",
						display: "flex",
						// alignItems: "center",
						justifyContent: "start",
						flexDirection: "column",
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: { xs: "column", sm: "row", md: "row", xl: "row" },
						}}
					>
						<Box
							sx={{
								width: { xs: "90%", md: "50%", xl: "40%" },
								height: "100%",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									marginY: "1rem",
								}}
							>
								<Image src="/images/logo.svg" alt="logo" width={150} height={80} />
								<Typography
									sx={{
										fontSize: { xs: "20px", xl: "24px" },
										fontWeight: "800",
										lineHeight: "28px",
										marginY: ".5rem",
									}}
									color="#343132"
								>
									AN E-LABEL STAMP
								</Typography>
							</Box>
							<Typography
								sx={{
									fontSize: "14px",
									fontWeight: "400",
									lineHeight: "16px",
									marginY: ".2rem",
								}}
								color="#343132"
							>
								Be distantly directed to what you see!
							</Typography>
							{/* box icons */}
							<Box
								sx={{
									width: { xs: "90%", md: "50%", xl: "40%" },
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									margin: "1rem 0",
								}}
							>
								{icons.map((item) => (
									<Link href={item.link} key={item.id}>
										<Image
											src={item.icon}
											alt={item.name}
											height={30}
											width={30}
											style={{
												margin: "0 2rem",
											}}
										/>
									</Link>
								))}
							</Box>
						</Box>
						<Typography
							sx={{
								border: "1px solid #E3E3E3",
								width: "100%",
								marginY: ".5rem",
								display: { xs: "block", sm: "none" },
							}}
						/>

						<Box
							sx={{
								width: { xs: "90%", sm: "30%", md: "50%", xl: "40%" },
								height: { xs: "50%", sm: "200px", md: "100%", xl: "100%" },
								display: "flex",
								alignItems: {
									xs: "start",
									sm: "start",
									md: "center",
									xl: "center",
								},
								justifyContent: "space-around",
								flexDirection: {
									xs: "column",
									sm: "column",
									md: "row",
									xl: "row",
								},
								paddingX: { xs: "1rem", sm: "0", md: "0", xl: "0" },
							}}
						>
							{links.map((item) => (
								<Link
									href={item.link}
									title={item.name}
									key={item.id}
									style={{
										textDecoration: "none",
										color: "#343132",
									}}
								>
									<Typography
										fontSize="20px"
										fontWeight="400"
										// fontFamily="GilroyRegular"
										lineHeight="32px"
										textAlign="center"
									>
										{item.name}
									</Typography>
								</Link>
							))}
						</Box>
					</Box>
					<Typography
						sx={{
							border: "1px solid #E3E3E3",
							width: "100%",
							marginY: ".5rem",
							display: { xs: "block", sm: "none" },
						}}
					/>
					<Box
						sx={{
							width: "100%",
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Typography
							sx={{
								marginY: ".5rem",

								textAlign: "center",
							}}
						>
							All Rights Reserved View On Website Portal Co LLC 2023
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default FooterMobile;
