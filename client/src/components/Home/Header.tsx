import { Box, Typography } from "@mui/material";
const Header = () => {
	return (
		<>
			<Box
				sx={{
					width: { xs: "100%", md: "90%", xl: "85%" },
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Box
					sx={{
						width: { xs: "80%", sm: "80%", md: "650px", xl: "776px" },
					}}
				>
					<Typography
						sx={{
							fontSize: {
								xs: "36px",
								sm: "36px",
								md: "50px",
								xl: "64px",
							},
						}}
						lineHeight="92.5%"
						letterSpacing="0.02em"
						fontWeight="500"
					>
						Get redirected to what you see
					</Typography>
					<Typography
						sx={{
							margin: "1rem auto",
							fontSize: { xs: "21px", md: "30px", xl: "40px" },
							lineHeight: "92.5%",
							fontWeight: "400",
						}}
					>
						Enter the
						<Typography
							component={"span"}
							style={{
								margin: "auto 2px",
								padding: "4px 8px",
								borderRadius: "8px",
								background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
							}}
						>
							#keyword
						</Typography>
						here to get redirected
					</Typography>
				</Box>
				<Box
					sx={{
						width: { xs: "53px", sm: "53px", md: "80px", xl: "103px" },
						height: { xs: "53px", sm: "53px", md: "80px", xl: "103px" },
						marginX: { xs: ".4rem", sm: "1rem", md: "1rem", xl: "1rem" },
					}}
				>
					<img
						src="/icons/play.png"
						alt=""
						style={{
							width: "100%",
							height: "100%",
						}}
					/>
				</Box>
			</Box>
		</>
	);
};

export default Header;
