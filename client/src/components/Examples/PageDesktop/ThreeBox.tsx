import { Box, Typography } from "@mui/material";

const ThreeBox = () => {
	return (
		<>
			<Box
				sx={{
					width: "1243.72px",
					maxWidth: "100%",
					// width: "40%",
					borderLeft: "1px solid #FBFBFB",
					borderBottom: "1px solid #FBFBFB",
					borderTop: "1px solid #FBFBFB",
					borderTopLeftRadius: "35px",
					borderBottomLeftRadius: "35px",
					background:
						"radial-gradient(28.05% 49.93% at 21.95% 50.07%, rgba(0, 144, 236, 0.3) 0%, rgba(0, 144, 236, 0.015) 100%)",
					backdropFilter: "blur(100px)",
				}}
			>
				<Box
					sx={{
						transform: {
							xs: "skew(1deg, 0deg)",
							xl: "skew(15deg, 0deg)",
						},
						position: "absolute",
						top: "0",
						bottom: { xs: "", md: "-1rem", xl: "-1rem" },
						right: { xs: "", md: "0rem", xl: "0" },
						width: { md: "450px", xl: "600px" },
						height: { md: "450px", xl: "600px" },
					}}
				>
					<img
						src="/images/pic.png"
						style={{
							width: "100%",
							height: "auto",
						}}
					/>
				</Box>
				<Box
					sx={{
						width: "277px",
						transform: {
							xs: "skew(1deg, 0deg)",
							xl: "skew(15deg, 0deg)",
						},
						position: "absolute",
						bottom: "3rem",
						left: "2.8rem",
					}}
				>
					<Typography
						sx={{
							width: "195px",
							fontSize: "20px",
							fontWeight: "500",
							lineHeight: "15px",
							marginY: "1rem",
						}}
					>
						Be Redirected!
					</Typography>
					<Typography
						sx={{
							fontSize: "14px",
							fontWeight: "300",
							lineHeight: "13px",
						}}
					>
						Your costumers in a Blink will be automatically redirected to your
						Sub-link-URL, your dashboard will show you all the conversions of
						your #keyword, it is your opportunity to optimize, know and to take
						control over your conversion rate.
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default ThreeBox;
