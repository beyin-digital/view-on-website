import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

const ThreeBox = () => {
	const { t } = useTranslation("example");

	return (
		<>
			<Box
				sx={{
					maxWidth: "100%",
					width: "100%",
					height: "590px",
					position: "relative",
					top: "-2rem",
					borderRadius: "14px",
					border: "0.484848px solid #FBFBFB",
					backdropFilter: "blur(48.4848px)",
					background:
						"radial-gradient(28.05% 49.93% at 21.95% 50.07%, rgba(0, 144, 236, 0.3) 0%, rgba(0, 144, 236, 0.015) 100%) ",
				}}
				className="ThreeBoxTablet"
			>
				<Box
					sx={{
						// transform: "skew(16deg, 0deg)",
						position: "relative",
						width: "100%",
						height: "100%",
					}}
					className="ThreeBoxTabletLayout"
				>
					<Box
						sx={{
							position: "absolute",
							// top: "0",
							// right: "0",
							width: { sm: "480px", md: "590px" },
							height: "482px",
						}}
						className="ThreeBoxTabletLayoutImage"
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
							position: "absolute",
							// bottom: "0",
							// left: { xs: "", sm: "", md: "2rem" },
							width: { xs: "", sm: "330px", md: "400px" },
							height: "250px",
						}}
						className="ThreeBoxTabletLayoutText"
					>
						<Typography
							sx={{
								fontSize: { xs: "24px", md: "28px" },
								fontWeight: "500",
								lineHeight: "18px",
								marginY: "1rem",
							}}
						>
							{t("box_three_title")}
						</Typography>
						<Typography
							sx={{
								fontSize: { xs: "20px", md: "24px" },
								lineHeight: { xs: "20px", sm: "20px", md: "20px" },
								fontWeight: "300",
							}}
						>
							{t("box_three_desc")}
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ThreeBox;
