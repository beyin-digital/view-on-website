import {
	Container,
	Box,
	Grid,
	Input,
	Typography,
	Divider,
	OutlinedInput,
	TextField,
} from "@mui/material";
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
					marginTop: "4rem",
					marginBottom:{xl:"1rem"}
				}}
			>
				<Image src="/images/logo.svg" alt="logo" width={150} height={80} />
				<Typography
					sx={{
						fontSize: { xs: "20px", xl: "24px" },
						fontWeight: "800",
						lineHeight: "28px",
						marginY: "1rem",
						textAlign: "center",
					}}
					color="#343132"
				>
					AN E-LABEL STAMP
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography
					fontWeight="100"
					sx={{
						fontSize: { xs: "20px", md: "30px", xl: "40px" },

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
