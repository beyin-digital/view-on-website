import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Box, Typography } from "@mui/material";

const ThreeBox = () => {
	const { t } = useTranslation("example");
	const { locale } = useRouter();

	return (
		<>
			{locale === "ar" ? (
				<Box
					sx={{
						width: "1243.72px",
						maxWidth: "100%",
						borderLeft: "1px solid #FBFBFB",
						borderBottom: "1px solid #FBFBFB",
						borderTop: "1px solid #FBFBFB",
						borderTopLeftRadius: "35px",
						borderBottomLeftRadius: "35px",
						background:
							"radial-gradient(28.05% 49.93% at 21.95% 50.07%, rgba(0, 144, 236, 0.3) 0%, rgba(0, 144, 236, 0.015) 100%)",
						backdropFilter: "blur(100px)",
						position: "relative",
						right: "-2rem",
					}}
				>
					<Box
						sx={{
							transform: "skew(-16deg, 0deg)",
							position: "absolute",
							top: "-1rem",
							left: { xs: "", md: "0rem", xl: "0rem" },
							width: { md: "450px", xl: "500px" },
							height: { md: "450px", xl: "500px" },
						}}
					>
						<img
							src="/images/picAR.png"
							title="Your costumers in a Blink will be automatically redirected to your Sub-link-URL"
							alt="Your costumers in a Blink will be automatically redirected to your Sub-link-URL, your dashboard will show you all the conversions of your #keyword, it is your opportunity to optimize"
							style={{
								width: "100%",
								height: "auto",
							}}
						/>
					</Box>
					<Box
						sx={{
							width: "277px",
							transform: "skew(-16deg, 0deg)",
							position: "absolute",
							bottom: "3rem",
							right: "2.8rem",
						}}
					>
						<Typography
							sx={{
								width: "195px",
								fontSize: "20px",
								fontWeight: "600",
								lineHeight: "15px",
								marginY: "1rem",
							}}
						>
							{t("box_three_title")}
						</Typography>
						<Typography
							sx={{
								fontSize: "14px",
								fontWeight: "400",
								lineHeight: "14px",
							}}
						>
							{t("box_three_desc")}
						</Typography>
					</Box>
				</Box>
			) : (
				<Box
					sx={{
						width: "1243.72px",
						maxWidth: "100%",
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
								xs: "skew(15deg, 0deg)",
								xl: "skew(15deg, 0deg)",
							},
							position: "absolute",
							top: "0",
							bottom: { xs: "", md: "-1rem", xl: "-1rem" },
							right: { xs: "", md: "0rem", xl: "-5rem" },
							width: { md: "500px", xl: "650px" },
							height: { md: "500px", xl: "650px" },
						}}
					>
						<img
							src="/images/pic.png"
							alt="Photo Vow"
							title="Photo Vow"
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
								xs: "skew(15deg, 0deg)",
								xl: "skew(15deg, 0deg)",
							},
							position: "absolute",
							bottom: "1rem",
							left: "2.8rem",
						}}
					>
						<Typography
							sx={{
								width: "195px",
								fontSize: "20px",
								fontWeight: "600",
								lineHeight: "15px",
								marginY: "1rem",
							}}
						>
							{t("box_three_title")}
						</Typography>
						<Typography
							sx={{
								fontSize: "14px",
								fontWeight: "400",
								lineHeight: "14px",
							}}
						>
							{t("box_three_desc")}
						</Typography>
					</Box>
				</Box>
			)}
		</>
	);
};

export default ThreeBox;
