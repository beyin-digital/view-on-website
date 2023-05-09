import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const OneBox = () => {
	const { t } = useTranslation("example");
	const { locale } = useRouter();

	return (
		<Box
			sx={{
				// transform: "skew(-16deg, 0deg)",
				width: "1243.72px",
				maxWidth: "100%",
				height: "100%",
			}}
			className="OneBoxDesktop"
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					position: "relative",
					backdropFilter: "blur(100px)",
					height: "100%",
				}}
				className="OneBoxDesktopLayout"
			>
				<Box>
					<Box
						sx={{
							width: { md: "400px", xl: "422px" },
							height: "258px",
							borderRadius: "34px",
							background: "url('/images/slid.png')",
							marginY: "1rem",
							overflow: "hidden",
						}}
						className="OneBoxDesktopLayoutSlid"
					></Box>
					<Box
						sx={{
							position: "relative",

							paddingX: "0rem",
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-evenly",
						}}
						className="OneBoxDesktopLayoutSlid"
					>
						<Box
							sx={{
								width: "212px",
								height: "134px",
								position: "absolute",
								// left: { md: "2rem", xl: "4rem" },
								// top: { md: "0", xl: "" },
							}}
							className="OneBoxDesktopLayoutText"
						>
							<Typography
								sx={{
									fontSize: "20px",
									marginY: ".8rem",
								}}
							>
								{t("box_one_title")}
							</Typography>
							<Typography
								sx={{
									fontSize: "14px",
									marginY: ".8rem",
									lineHeight: "13px",
									fontWeight: "300",
								}}
							>
								{t("box_one_desc")}
							</Typography>
						</Box>
					</Box>

					{locale === "ar" ? (
						<Box
							sx={{
								width: "500x",
								height: "350px",
								position: "absolute",
							}}
							className="OneBoxDesktopLayoutImage"
						>
							<img
								src="/images/phoneAR.png"
								alt="Phone Vow Left"
								title="Phone Vow Left"
								style={{
									width: "100%",
									// height: "100%",
								}}
							/>
						</Box>
					) : (
						<Box
							sx={{
								width: "860x",
								height: "441px",
								position: "absolute",
							}}
							className="OneBoxDesktopLayoutImage"
						>
							<img
								src="/images/phone.png"
								alt="Phone Vow Left"
								title="Phone Vow Left"
								style={{
									width: "100%",
									height: "100%",
								}}
							/>
						</Box>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default OneBox;
