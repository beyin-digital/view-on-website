import { Typography, Box, OutlinedInput, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { IconsStyle } from "../Button";
import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";

const SignupForm = () => {
	const { t } = useTranslation("signup");
	const router = useRouter();

	const { values } = useContext(UserContext);
	return (
		<form>
			<Box
				sx={{
					width: "100%",
					height: { xs: "250px", sm: "230px", md: "400px" },
					display: "flex",
					alignItems: "center",
					justifyContent: {
						xs: "center",
						md: "space-between",
						xl: "space-between",
					},
					flexDirection: { xs: "column", md: "row", xl: "row" },
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", sm: "80%", md: "45%", xl: "45%" },
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						justifyContent: {
							xs: "center",
							md: "space-evenly",
							xl: "space-evenly",
						},
					}}
				>
					<OutlinedInput
						value={values.fullName}
						name='fullName'
						sx={{
							width: "100%",
							height: { xs: "47px", md: "50px", xl: "65px" },
							fontSize: "24px",
							lineHeight: "28px",
							background: "#FBFBFB",
							borderRadius: "15px",
							boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.04)",
							marginY: ".2rem",
						}}
						placeholder={`${t("form_name")}`}
					/>
					<OutlinedInput
						value={values.password}
						name='password'
						sx={{
							width: "100%",
							height: { xs: "47px", md: "50px", xl: "65px" },
							fontSize: "24px",
							lineHeight: "28px",
							background: "#FBFBFB",
							borderRadius: "15px",
							boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.04)",
							marginY: ".2rem",
						}}
						placeholder={`${t("form_password")}`}
					/>
				</Box>
				<Box
					sx={{
						width: { xs: "100%", sm: "80%", md: "45%", xl: "45%" },
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						justifyContent: {
							xs: "center",
							md: "space-evenly",
							xl: "space-evenly",
						},
					}}
				>
					<OutlinedInput
						value={values.email}
						name='email'
						sx={{
							width: "100%",
							height: { xs: "47px", md: "50px", xl: "65px" },
							fontSize: "24px",
							lineHeight: "28px",
							background: "#FBFBFB",
							borderRadius: "15px",
							boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.04)",
							marginY: ".2rem",
						}}
						placeholder={`${t("form_email")}`}
					/>
					<OutlinedInput
						sx={{
							width: "100%",
							height: { xs: "47px", md: "50px", xl: "65px" },
							fontSize: "24px",
							lineHeight: "28px",
							background: "#FBFBFB",
							borderRadius: "15px",
							boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.04)",
							marginY: ".2rem",
						}}
						placeholder={`${t("form_confirm")}`}
					/>
				</Box>
			</Box>
			{/* Box Bottom  */}
			<Box
				sx={{
					width: "100%",
					height: { xs: "100%", md: "65px", xl: "65px" },
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexDirection: {
						xs: "column-reverse",
						md: "row",
						xl: "row",
					},
					marginBottom: { xs: "10rem", md: "5rem", xl: "5rem" },
					marginTop: { xs: "1rem", md: "2rem", xl: "2rem" },
					marginY: { xs: "1rem", md: "0", xl: "0" },
				}}
			>
				<Typography
					sx={{
						fontSize: { xs: "13px", xl: "16px" },
						fontWight: "300",
						marginY: { xs: ".5rem", md: "", xl: "" },
					}}
				>
					{t("sign_up_account")}

					<Link
						href='/login'
						style={{
							textDecoration: "none",
							color: "#0090EC",
						}}
					>
						{t("sign_in")}
					</Link>
				</Typography>

				<Box
					sx={{
						width: {
							xs: "240px",
							sm: "300px",
							md: "300px",
							xl: "320px",
						},
						display: "flex",
						justifyContent: "end",
						background: "#0090EC",
						borderRadius: "16px",
					}}
				>
					<Button
						sx={{
							paddingX: "18px",
							height: "59px",
							width: { xs: "220px", md: "231px", xl: "271px" },
							display: "flex",
							justifyContent: "space-around",
						}}
						onClick={() => router.push("verification")}
						type='submit'
						title={`${t("sign_up_button")}`}
					>
						<Typography
							sx={{
								letterSpacing: "0.02em",
								fontSize: {
									xs: "20px",
									md: "25px",
									xl: "32px",
								},
								fontWeight: 400,
								lineHeight: "40px",
								color: "#FBFBFB",
								textTransform: "uppercase",
							}}
						>
							{t("sign_up_button")}
						</Typography>
						<IconsStyle />
					</Button>
				</Box>
			</Box>
		</form>
	);
};

export default SignupForm;
