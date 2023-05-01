import { Box, Button, Typography } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";

export const ButtonLogin = ({ name, onClick }: any) => {
	return (
		<>
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
					onClick={onClick}
				>
					<Typography
						sx={{
							fontFamily: "Helvetica Neue",
							letterSpacing: "0.02em",
							fontSize: "32px",
							fontWeight: 400,
							lineHeight: "40px",
							color: "#FBFBFB",
							textTransform: "uppercase",
						}}
					>
						{name}
					</Typography>

					<FiArrowUpRight size={42} color="#FBFBFB" />
				</Button>
			</Box>
		</>
	);
};

export const ButtonStyle = () => {
	return (
		<>
			<Box
				sx={{
					width: "180px",
					display: "flex",
					justifyContent: "end",
					background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
					borderRadius: "11px",
				}}
			>
				<Button
					sx={{
						paddingX: "18px",
						width: "140px",
						height: "45px",
						display: "flex",
						justifyContent: "space-around",
					}}
				>
					<Typography
						sx={{
							fontFamily: "Helvetica Neue",
							letterSpacing: "0.02em",
							fontSize: "32px",
							fontWeight: 400,
							lineHeight: "40px",
							color: "#343132",
							textTransform: "uppercase",
						}}
					>
						pay
					</Typography>

					<FiArrowUpRight size={42} color="#343132" />
				</Button>
			</Box>
		</>
	);
};
export const ButtonChange = ({ name, onClick }: any) => {
	return (
		<>
			<Box
				sx={{
					width: { xs: "100%", sm: "459px", md: "459px", xl: "459px" },
					display: "flex",
					justifyContent: "center",
					background: "#0090EC",
					borderRadius: "16px",
				}}
			>
				<Button
					sx={{
						paddingX: "1rem",
						height: "59px",
						width: { xs: "100%", md: "431px", xl: "431px" },
						display: "flex",
						justifyContent: "center",
					}}
					onClick={onClick}
				>
					<Typography
						sx={{
							fontFamily: "Helvetica Neue",
							letterSpacing: "0.02em",
							fontSize: "32px",
							fontWeight: 400,
							lineHeight: "40px",
							color: "#FBFBFB",
							textTransform: "uppercase",
						}}
					>
						{name}
					</Typography>

					{/* <FiArrowUpRight size={42} color="#FBFBFB" /> */}
				</Button>
			</Box>
		</>
	);
};
