import { Typography, Box, OutlinedInput } from "@mui/material";
import Link from "next/link";
import { ButtonLogin } from "@/components/Button";
import { useRouter } from "next/router";

const SignupForm = () => {
	const router = useRouter();

	return (
		<>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexDirection: { xs: "column", md: "row", xl: "row" },
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", md: "50%", xl: "50%" },
						height: { xs: "100%", md: "235px", xl: "235px" },
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						justifyContent: "space-evenly",
					}}
				>
					<OutlinedInput
						sx={{
							width: "100%",
							height: "65px",
							fontSize: {
								xs: "18px",
								sm: "22px",
								md: "28px",
								xl: "32px",
							},
							lineHeight: "28px",
							background: "#FBFBFB",
							borderRadius: "15px",
							boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.08)",
							marginY: ".3rem",
						}}
						placeholder='Full name'
					/>
					<OutlinedInput
						sx={{
							width: "100%",
							height: "65px",
							fontSize: {
								xs: "18px",
								sm: "22px",
								md: "28px",
								xl: "32px",
							},
							lineHeight: "28px",
							background: "#FBFBFB",
							borderRadius: "15px",
							boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.08)",
							marginY: ".3rem",
						}}
						placeholder='Password'
					/>
				</Box>
				<Box
					sx={{
						width: { xs: "100%", md: "40%", xl: "40%" },
						height: { xs: "100%", md: "235px", xl: "235px" },

						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						justifyContent: "space-evenly",
					}}
				>
					<OutlinedInput
						sx={{
							width: "100%",
							height: "65px",
							fontSize: {
								xs: "18px",
								sm: "22px",
								md: "28px",
								xl: "32px",
							},
							lineHeight: "28px",
							background: "#FBFBFB",
							borderRadius: "15px",
							boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.08)",
							marginY: ".3rem",
						}}
						placeholder='E-mail'
					/>
					<OutlinedInput
						sx={{
							width: "100%",
							height: "65px",
							fontSize: {
								xs: "18px",
								sm: "22px",
								md: "28px",
								xl: "32px",
							},
							lineHeight: "28px",
							background: "#FBFBFB",
							borderRadius: "15px",
							boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.08)",
							marginY: ".3rem",
						}}
						placeholder='Confirm Password'
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
					marginY: { xs: "1rem", md: "0", xl: "0" },
				}}
			>
				<Typography
					sx={{
						fontSize: { xs: "13px", xl: "16px" },
						fontWight: "300",
					}}
				>
					Already have an account?{" "}
					<Link
						href='/login'
						style={{
							textDecoration: "none",
							color: "#343132",
						}}
					>
						Sign in
					</Link>
				</Typography>
				<ButtonLogin
					name='next'
					onClick={() => router.push("verification")}
				/>
			</Box>
		</>
	);
};

export default SignupForm;
