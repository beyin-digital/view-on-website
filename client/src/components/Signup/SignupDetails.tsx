import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const SignupDetails = () => {
	const { t } = useTranslation("signup");

	const icon = [
		{
			id: 1,
			icon: "/icons/google.svg",
			alt: "Google Icon",
			title: "Google Icon",
			link: "https://google.com",
		},
		{
			id: 2,
			icon: "/icons/apple.svg",
			alt: "Apple Icon",
			title: "Apple Icon",
			link: "https://apple.com",
		},
		// {
		// 	id: 3,
		// 	icon: "/icons/facebookColor.svg",
		// 	alt: "Facebook Icon",
		// 	title: "Facebook Icon",
		// 	link: "https://facebook.com",
		// },
		{
			id: 4,
			icon: "/icons/linkedin.svg",
			alt: "LinkedIn Icon",
			title: "LinkedIn Icon",
			link: "https://linkedin.com",
		},
	];
	return (
		<>
			<Box
				sx={{
					width: "100%",
					height: { xs: "100%", md: "65px", xl: "65px" },
					display: "flex",
					alignItems: "center",
					justifyContent: {
						xs: "center",
						md: "space-between",
						xl: "space-between",
					},
					flexDirection: { xs: "column-reverse", md: "row", xl: "row" },
					marginY: "2rem",
					// border:"1px solid red"
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", md: "50%", xl: "50%" },
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "20px", md: "30px", xl: "40px" },
							fontWight: "300",
							lineHeight: { xs: "24px", xl: "37px" },
							textAlign: { xs: "center", md: "left", xl: "left" },
							marginY: { xs: "1rem", md: "0", xl: "0" },
						}}
					>
						{/* Please fill up your information */}
						{t("title")}
					</Typography>
				</Box>
				<Box
					sx={{
						width: { xs: "100%", sm: "100%", md: "50%", xl: "30%" },
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: { xs: "column", md: "row", xl: "row" },
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", md: "45%", xl: "100%" },
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							flexDirection: { xs: "column", md: "row", xl: "row" },
						}}
					>
						<Typography
							sx={{
								fontSize: { xs: "18px", xl: "24px" },
								fontWight: "300",
								lineHeight: "22px",
								marginY: { xs: "1rem", md: "0", xl: "0" },
								display: { xs: "none", md: "block", xl: "block" },
								paddingX: "4px",
							}}
						>
							{/* Or sign up with */}
							{t("sign_up")}
						</Typography>
						<Typography
							sx={{
								fontSize: { xs: "18px", xl: "24px" },
								fontWight: "300",
								lineHeight: "22px",
								marginY: { xs: "1rem", md: "0", xl: "0" },
								display: { xs: "block", md: "none", xl: "none" },
							}}
						>
							{/* sign up with */}
							{t("sign_up")}
						</Typography>
						<Box
							sx={{
								alignItems: "center",
								display: { xs: "none", md: "none", xl: "none" },
							}}
						>
							<Typography
								sx={{
									border: "1px solid #6C6C6C",
									width: "50px",
									marginX: ".5rem",
								}}
							></Typography>
							<Typography
								sx={{
									fontSize: { xs: "18px", xl: "24px" },
									fontWight: "300",
									lineHeight: "22px",
									marginY: { xs: "1rem", md: "0", xl: "0" },
								}}
							>
								{/* Or */}
							</Typography>
							<Typography
								sx={{
									border: "1px solid #6C6C6C",
									width: "50px",
									marginX: ".5rem",
								}}
							></Typography>
						</Box>
					</Box>

					<Box
						sx={{
							width: "40%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						{icon.map((item) => (
							<Link href={item.link} key={item.id}>
								<Image
									src={item.icon}
									alt={item.alt}
									title={item.title}
									height={37}
									width={37}
									style={{
										margin: "auto .2rem",
									}}
								/>
							</Link>
						))}
					</Box>
					<Box
						sx={{
							alignItems: "center",
							display: { xs: "flex", md: "none", xl: "none" },
						}}
					>
						<Typography
							sx={{
								border: "1px solid #6C6C6C",
								width: "50px",
								marginX: ".5rem",
							}}
						></Typography>
						<Typography
							sx={{
								fontSize: { xs: "18px", xl: "24px" },
								fontWight: "300",
								lineHeight: "22px",
								marginY: { xs: "1rem", md: "0", xl: "0" },
							}}
						>
							{t("or")}
						</Typography>
						<Typography
							sx={{
								border: "1px solid #6C6C6C",
								width: "50px",
								marginX: ".5rem",
							}}
						></Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default SignupDetails;
