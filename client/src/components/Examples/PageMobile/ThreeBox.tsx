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
					top: "-8rem",
					background: "#EAEDED",
				}}
				className="ExampleThreeBox"
			>
				<Box
					sx={{
						width: { xs: "100%", md: "100%" },
						height: { xs: "70vh", sm: "80vh", md: "80vh", xl: "80vh" },
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
							top: { xs: "0", sm: "", md: "0" },
							right: { xs: "-13rem", sm: "-4rem", md: "0rem" },
							width: { xs: "490px", sm: "580px", md: "660px" },
							height: { xs: "400px", sm: "500px", md: "650px" },
						}}
						className="ExampleBoxThreePic"
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
							bottom: { xs: "1rem", sm: "3rem", md: "3rem", xl: "3rem" },
							left: { xs: "1rem", sm: "5.8rem", md: "8rem", lg: "" },
						}}
						className="ExampleBoxThreeText"
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
							Be Redirected!
						</Typography>
						<Typography
							sx={{
								width: { xs: "100%", md: "100%" },
								fontSize: { xs: "14px", sm: "20px", md: "20px" },
								lineHeight: { xs: "12px", sm: "20px", md: "20px" },
								fontWeight: "300",
							}}
						>
							Your costumers in a Blink will be automatically redirected to your
							Sub-link-URL, your dashboard will show you all the conversions of
							your #keyword, it is your opportunity to optimize, know and to
							take control over your conversion rate.
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ThreeBox;
