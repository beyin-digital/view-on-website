import { Box, Typography, OutlinedInput, Button } from "@mui/material";

const ChangePasswordForm = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					paddingX: { xs: ".5rem", sm: "2rem", md: "2rem", xl: "2rem" },
				}}
			>
				<OutlinedInput
					sx={{
						width: "100%",
						height: { xs: "47px", md: "50px", xl: "65px" },
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
						width: "100%",
						height: { xs: "47px", md: "50px", xl: "65px" },
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
					marginY: "4rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					paddingX: { xs: ".5rem", sm: "2rem", md: "2rem", xl: "2rem" },
				}}
			>
				<Box
					sx={{
						width: {
							xs: "100%",
							sm: "459px",
							md: "459px",
							xl: "459px",
						},
						display: "flex",
						justifyContent: "center",
						background: "#0090EC",
						borderRadius: "16px",
					}}
				>
					<Button
						sx={{
							paddingX: "0rem",
							height: "59px",
							width: { xs: "100%", md: "431px", xl: "431px" },
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Typography
							sx={{
								// fontFamily: "Helvetica Neue",
								letterSpacing: "0.02em",
								fontSize: {xs:"20px", sm: "25px", xl: "32px" },
								fontWeight: 400,
								lineHeight: { xs: "25px", xl: "40px" },
								color: "#FBFBFB",
								textTransform: "uppercase",
							}}
						>
							Change password
						</Typography>

						{/* <FiArrowUpRight size={42} color="#FBFBFB" /> */}
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default ChangePasswordForm;
