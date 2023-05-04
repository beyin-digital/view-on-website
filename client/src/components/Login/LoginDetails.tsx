import { Box, Typography } from "@mui/material";
import Image from "next/image";

const LoginDetails = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "5rem",
					marginBottom: "1rem",
				}}
			>
				<Image src="/images/logo.svg" alt="logo" width={150} height={80} />
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginY: { xs: "4rem", md: "1rem", xl: "2rem" },
				}}
			>
				<Typography
					fontWeight="100"
					sx={{
						fontSize: { xs: "24px", md: "30px", xl: "40px" },
						fontWeight: "300",
						lineHeight: "37px",
					}}
				>
					Welcome Back
				</Typography>
			</Box>
		</>
	);
};

export default LoginDetails;
