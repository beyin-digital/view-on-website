import { Box, Typography } from "@mui/material";

const OneBox = () => {
	return (
		<>
			<Box
				sx={{
					width: "1243.72px",
					maxWidth: "100%",
					// width: "36%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					position: "relative",
					backdropFilter: "blur(100px)",
					right: "-1.5rem",
				}}
			>
				<Box>
					<Box
						sx={{
							transform: {
								xs: "skew(0deg, 0deg)",
								xl: "skew(15deg, 0deg)",
							},
							width: { md: "400px", xl: "422px" },
							height: "258px",
							borderRadius: "34px",
							background: "url('/images/slid.png')",
							marginY: "1rem",
							overflow: "hidden",
						}}
					></Box>
					<Box
						sx={{
							position: "relative",
							transform: {
								xs: "skew(0deg, 0deg)",
								xl: "skew(15deg, 0deg)",
							},
							paddingX: "0rem",
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-evenly",
						}}
					>
						<Box
							sx={{
								width: "212px",
								height: "134px",
								position: "absolute",
								left: { md: "2rem", xl: "4rem" },
								top: { md: "0", xl: "" },
							}}
						>
							<Typography
								sx={{
									fontSize: "20px",
									marginY: ".8rem",
								}}
							>
								Place it your way
							</Typography>
							<Typography
								sx={{
									fontSize: "14px",
									marginY: ".8rem",
									lineHeight: "13px",
									fontWeight: "300",
								}}
							>
								Please provide your keyword’s sub-link Please provide your
								keyword’s sub-link Please provide your keyword’s sub-link Please
								provide your keyword’s sub-link
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							width: "860x",
							height: "441px",
							position: "absolute",
							bottom: "-2rem",
							right: "-8rem",
							transform: {
								xs: "skew(1deg, 0deg)",
								xl: "skew(15deg, 0deg)",
							},
						}}
					>
						<img
							src="/images/phone.png"
							alt=""
							style={{
								width: "100%",
								height: "100%",
							}}
						/>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default OneBox;
