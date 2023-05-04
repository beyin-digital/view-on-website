import { Box, Button, OutlinedInput, Typography } from "@mui/material";
import React from "react";
import { ButtonLogin } from "../Button";
import LoginTextSignUp from "../Login/LoginTextSignUp";
import { FiArrowUpRight } from "react-icons/fi";

const FormRequest = () => {
	return (
		<>
			<Box
				sx={{
					// width: "100%",
					width: { xs: "100%", sm: "100%", md: "565px", xl: "565px" },
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
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
						border: "0.897277px solid #E3E3E3",
						borderRadius: "10px",
						marginY: ".5rem",
						boxShadow: " 0px 27.8156px 45.7611px rgba(0, 0, 0, 0.03)",

						".mui-style-1d3z3hw-MuiOutlinedInput-notchedOutline": {
							border: 0,
						},
					}}
					placeholder="Email or #Keyword"
				/>
			</Box>
			<Box
				sx={{
					marginY: "4rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				{/* <ButtonLogin
					name="send"
					onClick={() => {
						// router.push("/");
					}}
				/> */}
				<Box
					sx={{
						width: { xs: "240px", sm: "300px", md: "300px", xl: "300px" },
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
							width: { xs: "220px", md: "231px", xl: "231px" },
							display: "flex",
							justifyContent: "space-around",
						}}
						// onClick={}
						type="submit"
					>
						<Typography
							sx={{
								// fontFamily: "Helvetica Neue",
								letterSpacing: "0.02em",
								fontSize: { xs: "20px", md: "25px", xl: "32px" },
								fontWeight: 400,
								lineHeight: "40px",
								color: "#FBFBFB",
								textTransform: "uppercase",
							}}
						>
							send
						</Typography>

						<FiArrowUpRight size={42} color="#FBFBFB" />
					</Button>
				</Box>
				<LoginTextSignUp />
			</Box>
		</>
	);
};

export default FormRequest;
