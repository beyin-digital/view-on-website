import { Box, OutlinedInput } from "@mui/material";
import React from "react";
import { ButtonLogin } from "../Button";
import LoginTextSignUp from "../Login/LoginTextSignUp";

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
				<ButtonLogin
					name="send"
					onClick={() => {
						// router.push("/");
					}}
				/>
				<LoginTextSignUp />
			</Box>
		</>
	);
};

export default FormRequest;
