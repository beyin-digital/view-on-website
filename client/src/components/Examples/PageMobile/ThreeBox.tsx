import { Box, Typography } from "@mui/material";

const ThreeBox = () => {
	return (
		<>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					top: "-5rem",
					background: "#EAEDED",
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", md: "100%" },
						height: "80vh",
						background: "url('/images/layoutBoxThree.png')",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
 						position: "relative",
						overflow: "hidden",
					}}
				>
					<Box
						sx={{
							position: "absolute",
							bottom: { xs: "10rem", sm: "0", md: "-1rem" },
							right: { xs: "0rem", md: "0" },
							width: { xs: "400px", sm: "500px", md: "700px" },
							height: { xs: "400px", sm: "500px", md: "700px" },
						}}
					>
						<img
							src="/images/pic.png"
							alt=""
							style={{
								width: "100%",
								height: "auto",
							}}
						/>
					</Box>
					<Box
						sx={{
							width: { xs: "70%", sm: "45%", md: "300px", lg: "40%" },
							marginX: { xs: "1rem", md: "" },
							position: "absolute",
							bottom: "3rem",
							left: { xs: "1rem", sm: "5.8", md: "5.8rem", lg: "" },
						}}
					>
						<Typography
							sx={{
								width: { xs: "195px", md: "70%" },
								fontSize: "20px",
								fontWeight: "500",
								lineHeight: "18px",
								marginY: "1rem",
							}}
						>
							Let your physical conversions flourish
						</Typography>
						<Typography
							sx={{
								width: { xs: "100%", md: "100%" },
								fontSize: { xs: "14px", md: "20px" },
								lineHeight: { xs: "12px", md: "20px" },
								fontWeight: "300",
							}}
						>
							Please provide your keyword’s sub-link Please provide your
							keyword’s sub-link Please provide your keyword’s sub-link Please
							provide your keyword’s sub-link
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ThreeBox;
