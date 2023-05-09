import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

const OneBox = () => {
	const { t } = useTranslation("example");

	return (
		<>
			<Box
				sx={{
					maxWidth: "100%",
					width: "100%",
					height: "597px",
					background: "rgba(251, 251, 251, 0.5)",
					border: " 0.484848px solid #FBFBFB",
					backdropFilter: "blur(48.4848px)",
					borderRadius: "14.5455px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					transform: "skew(-16deg, 0deg)",
					position: "relative",
					// right: { xs: "-1rem", sm: "-3rem", md: "-3rem" },
				}}
				className="OneBoxTablet"
			>
				<Box
					sx={{
						width: "492px",
						height: "258px",
						transform: "skew(16deg, 0deg)",
						marginY: "1rem",
					}}
				>
					<img
						src="/images/slid.png"
						alt=""
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							borderRadius: "34px",
						}}
					/>
				</Box>
				<Box
					sx={{
						height: "339px",
						width: "90%",
						transform: "skew(16deg, 0deg)",
						display: "flex",
						alignItems: "center",
						position: "relative",
					}}
					className="OneBoxTabletText"
				>
					<Box
						sx={{
							width: { xs: "60%", md: "50%" },
							paddingX: "4rem",
						}}
					>
						<Typography
							sx={{
								fontSize: { xs: "24px", md: "28px" },
								fontWeight: "500",
								lineHeight: "18px",
							}}
							className="ExampleBoxOnePlace"
						>
							{t("box_one_title")}
						</Typography>
						<Typography
							sx={{
								fontSize: { xs: "20px", md: "24px" },
								lineHeight: { xs: "12px", sm: "20px", md: "20px" },
								fontWeight: "300",
								marginY: ".8rem",
							}}
						>
							{t("box_one_desc")}
						</Typography>
					</Box>
					<Box
						sx={{
							width: "568px",
							height: "441px",
							position: "absolute",
							right: "-6rem",
						}}
					>
						<img
							src="/images/phone.png"
							alt="View On Website Man Look at Phone"
							title="View On Website Man Look at Phone"
							style={{
								width: "100%",
							}}
						/>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default OneBox;
