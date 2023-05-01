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

const LoginForm = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
				}}
			>
				<OutlinedInput
					sx={{
						width: "100",
						height: "65px",
						fontSize: {
							xs: "18px",
							sm: "22px",
							md: "28px",
							xl: "32px",
						},
						lineHeight: "28px",
						background: "#FBFBFB",
						border: "0.897277px solid #E3E3E3",
						borderRadius: "10px",
						marginY: ".5rem",
						boxShadow: " 0px 27.8156px 45.7611px rgba(0, 0, 0, 0.03)",
						".mui-style-1d3z3hw-MuiOutlinedInput-notchedOutline": {
							border: 0,
						},
					}}
					placeholder="UserName"
				/>
				<OutlinedInput
					sx={{
						width: "100",
						height: "65px",
						fontSize: {
							xs: "18px",
							sm: "22px",
							md: "28px",
							xl: "32px",
						},
						lineHeight: "28px",
						background: "#FBFBFB",
						border: "0.897277px solid #E3E3E3",
						borderRadius: "10px",
						marginY: ".5rem",
						boxShadow: " 0px 27.8156px 45.7611px rgba(0, 0, 0, 0.03)",

						".mui-style-1d3z3hw-MuiOutlinedInput-notchedOutline": {
							border: 0,
						},
					}}
					placeholder="Password"
				/>
			</Box>

			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "end",
					alignItems: "end",
				}}
			>
				<Typography
					sx={{
						fontSize: { xs: "13px", xl: "16px" },
						fontWeight: "300",
						lineHeight: "14px",
					}}
				>
					Forgot Password?
				</Typography>
			</Box>
		</>
	);
};

export default LoginForm;
