import { Box, Button, OutlinedInput, Typography } from "@mui/material";
import LoginTextSignUp from "../Login/LoginTextSignUp";
import { FiArrowUpRight, FiArrowUpLeft } from "react-icons/fi";
import { useTranslation } from "next-i18next";

const FormRequest = () => {
	const { t } = useTranslation("request");

	return (
		<>
			<Box
				sx={{
					width: { xs: "100%", sm: "100%", md: "565px", xl: "565px" },
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					paddingX: { xs: "", sm: "3rem" },
				}}
			>
				<OutlinedInput
					sx={{
						width: "100%",
						height: { xs: "45px", md: "50px", xl: "65px" },
						fontSize: "24px",
						lineHeight: "28px",
						background: "#FBFBFB",
						border: "0.897277px solid #E3E3E3",
						borderRadius: "10px",
						marginY: ".5rem",
						boxShadow: " 0px 27.8156px 45.7611px rgba(0, 0, 0, 0.03)",
						// delete this once time
						".mui-style-1d3z3hw-MuiOutlinedInput-notchedOutline": {
							border: 0,
						},
					}}
					placeholder={`${t("input")}`}
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
								letterSpacing: "0.02em",
								fontSize: { xs: "20px", md: "25px", xl: "32px" },
								fontWeight: 400,
								lineHeight: "40px",
								color: "#FBFBFB",
								textTransform: "uppercase",
							}}
						>
							{t("send")}
						</Typography>

						<FiArrowUpRight size={42} color="#FBFBFB" className="left" />
						<FiArrowUpLeft size={42} color="#FBFBFB" className="right" />
					</Button>
				</Box>
				<LoginTextSignUp />
			</Box>
		</>
	);
};

export default FormRequest;
