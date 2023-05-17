import Image from "next/image";
import { Box, Grid, Link, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export const HeaderLayoutMobile = () => {
	const { t } = useTranslation("illustration");
	const { locale } = useRouter();
	return (
		<>
			<Box
				sx={{
					height: "280px",
					display: "flex",
					justifyContent: "space-between",
					position: "relative",
					marginTop: "1rem",
				}}
			>
				<Box
					sx={{
						width: "100%",
						height: "280px",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Box
						sx={{
							width: { xs: "100%" },
							marginBottom: "1rem",
						}}
					>
						<Typography
							sx={{
								fontSize: { xs: "30px", md: "50px", xl: "64px" },
								fontWeight: "600",
								lineHeight: "45px",
							}}
						>
							{t("title")}
						</Typography>
					</Box>
					<Box
						sx={{
							height: "50px",
							width: "419px",
							background: " linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
							borderRadius: "7px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginBottom: "1rem",
						}}
					>
						<Typography
							sx={{
								fontSize: "40px",
								lineHeight: "37px",
								color: "#FBFBFB",
							}}
						>
							ViewOnWebsite.com
						</Typography>
					</Box>
					<Box
						sx={{
							height: "33px",
							width: "100%",
							paddingY: "10px",
						}}
					>
						<Typography
							sx={{
								fontSize: "24px",
								fontWeight: "",
								lineHeight: "22px",
							}}
						>
							{t("desc_one")}
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						width: "70%",
						height: "280px",
						display: "flex",
						alignItems: "",
						justifyContent: "center",
						flexDirection: "column",
						position: "relative",
					}}
				>
					<img
						src="/images/swirlIllustrationLeft.svg"
						alt="View On Website swirl Illustration Left icon"
						title="View On Website swirl Illustration Left icon"
						style={{
							position: "absolute",
							top: "-5rem",
							width: "300px",
							right: "16rem",
							zIndex: "-1",
						}}
					/>
					<img
						src="/images/illustrationPic.png"
						style={{
							width: "100%",
						}}
						alt=""
					/>

					{locale === "ar" ? (
						<Box
							sx={{
								width: "257px",
								height: "90px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								position: "absolute",
								bottom: "0rem",
								left: "0rem",
								zIndex: "9999999999",
							}}
						>
							<Typography
								sx={{
									fontSize: { md: "20px", xl: "24px" },
									lineHeight: "22px",
									fontWeight: "500",
									position: "relative",
									zIndex: "9999999999",
									background: "transparent",
								}}
							>
								{t("desc_three")}
							</Typography>
						</Box>
					) : (
						<Box
							sx={{
								width: "257px",
								height: "90px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								position: "absolute",
								bottom: "0rem",
								right: "5rem",
								zIndex: "9999999999",
							}}
						>
							<Typography
								sx={{
									fontSize: { md: "20px", xl: "24px" },
									lineHeight: "22px",
									fontWeight: "500",
									position: "relative",
									zIndex: "9999999999",
									background: "transparent",
								}}
							>
								{t("desc_three")}
							</Typography>
						</Box>
					)}
				</Box>
			</Box>
		</>
	);
};
export const MainContainerMobile = () => {
	const { t } = useTranslation("illustration");
	const { locale } = useRouter();
	return (
		<>
			<Box
				sx={{
					height: "500px",
					width: "100%",
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", md: "95%" },
						height: "100%",
						display: "flex",
						justifyContent: { xs: "space-around", md: "start" },
						position: "relative",
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", md: "25%", xl: "203px" },
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Typography
							sx={{
								fontSize: "24px",
								lineHeight: "22px",
							}}
						>
							{t("desc_two")}
						</Typography>
					</Box>
					{locale === "ar" ? (
						<Box
							sx={{
								width: "290px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<img
								src="/icons/arrowAR.png"
								style={{
									width: "100%",
								}}
							/>
						</Box>
					) : (
						<Box
							sx={{
								width: "290px",

								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<img
								src="/icons/arrow.png"
								style={{
									width: "100%",
								}}
							/>
						</Box>
					)}
					<Box
						sx={{
							height: "126px",
							paddingTop: "1rem",
						}}
					>
						{locale === "ar" ? (
							<img src="/images/illustrationPicCenterAR.png" />
						) : (
							<img src="/images/illustrationPicCenter.png" />
						)}
					</Box>

					{locale === "ar" ? (
						<Box
							sx={{
								width: "10px",
								height: { xs: "", md: "150px" },
								position: "absolute",
								left: { xs: "20rem", sm: "20rem", md: "35rem" },
								top: "-8rem",
							}}
							className="illustrationArrowsUp"
						>
							<img
								src="/icons/arrowUpAR.png"
								style={{
									height: "100%",
								}}
							/>
						</Box>
					) : (
						<Box
							sx={{
								width: "10px",
								height: { xs: "", md: "150px" },
								position: "absolute",
								right: { xs: "20rem", sm: "20rem", md: "35rem" },
								top: "-8rem",
							}}
							className="illustrationArrowsUp"
						>
							<img
								src="/icons/arrowUp.png"
								style={{
									height: "100%",
								}}
							/>
						</Box>
					)}

					{locale === "ar" ? (
						<Box
							sx={{
								width: "10px",
								height: { xs: "", md: "150px" },
								position: "absolute",
								left: { xs: "20rem", sm: "20rem", md: "18rem" },
								top: "-8rem",
							}}
							className="illustrationArrowsright"
						>
							<img
								src="/icons/arrowuprightAR.png"
								style={{
									height: "100%",
								}}
							/>
						</Box>
					) : (
						<Box
							sx={{
								width: "10px",
								height: { xs: "", md: "150px" },
								position: "absolute",
								right: { xs: "20rem", sm: "20rem", md: "23rem" },
								top: "-8rem",
							}}
							className="illustrationArrowsright"
						>
							<img
								src="/icons/arrowupright.png"
								style={{
									height: "100%",
								}}
							/>
						</Box>
					)}
				</Box>
			</Box>
		</>
	);
};
export const ThreeOptionMobile = () => {
	const { t } = useTranslation("illustration");
	const { locale } = useRouter();
	return (
		<>
			<Box
				sx={{
					width: "100%",
					height: "400px",
					display: "flex",
					alignItems: "center",
					justifyContent: { xs: "", md: "space-around" },
					flexDirection: "column",
				}}
			>
				<Grid
					justifyContent="space-between"
					alignItems="center"
					container
					sx={{
						flexDirection: { xs: "", md: "row" },
						marginY: "1.2rem",
					}}
				>
					<Grid
						item
						md={3}
						sx={{
							marginLeft: ".5rem",
						}}
						sm={12}
					>
						<Box
							sx={{
								height: "60px",
								display: "flex",
								alignItems: "center",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<Box>
									<Typography
										sx={{
											fontSize: "35px",
											lineHeight: "60px",
											marginRight: ".5rem",
										}}
									>
										01
									</Typography>
								</Box>
								<Box
									sx={{
										width: "100%",
									}}
								>
									<Typography
										sx={{
											fontSize: "20px",
											lineHeight: "20px",
											fontWeight: "400",
										}}
									>
										{t("text_one")}
										<span
											style={{
												fontWeight: "600",
												margin: "auto 2px",
											}}
										>
											#{t("text_one_bold")}
										</span>
									</Typography>
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid
						item
						md={4}
						sx={{
							marginLeft: "1rem",
						}}
						sm={12}
					>
						<Box
							sx={{
								height: "60px",
								display: "flex",
								alignItems: "center",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<Box>
									<Typography
										sx={{
											fontSize: "35px",
											lineHeight: "60px",
											marginRight: ".5rem",
										}}
									>
										03
									</Typography>
								</Box>
								<Box
									sx={{
										width: "100%",
									}}
								>
									<Typography
										sx={{
											fontSize: "20px",
											lineHeight: "20px",
											fontWeight: "400",
										}}
									>
										{t("text_two")}
										<span
											style={{
												fontWeight: "600",
												margin: "auto 2px",
											}}
										>
											{t("text_two_bold")}
										</span>
									</Typography>
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid
						item
						md={4}
						sx={{
							marginLeft: "1rem",
						}}
						sm={12}
					>
						<Box
							sx={{
								height: "60px",
								display: "flex",
								alignItems: "center",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<Box>
									<Typography
										sx={{
											fontSize: "35px",
											lineHeight: "60px",
											marginRight: ".5rem",
										}}
									>
										03
									</Typography>
								</Box>
								<Box
									sx={{
										width: "100%",
									}}
								>
									<Typography
										sx={{
											fontSize: "20px",
											lineHeight: "20px",
											fontWeight: "400",
										}}
									>
										{t("text_three")}
										<span
											style={{
												fontWeight: "600",
												margin: "auto 2px",
											}}
										>
											{t("text_three_bold")}
										</span>

										{t("text_three_text")}
									</Typography>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};
export const ButtonStyleMobile = () => {
	const { t } = useTranslation("illustration");
	const { locale } = useRouter();
	return (
		<>
			<Box
				sx={{
					display: "flex",
					alginItems: "center",
					justifyContent: "end",
					height: "60px",
					width: "97%",
					marginX: "1rem",
					paddingX: "1rem",
					cursor: "pointer",
				}}
			>
				<Box
					sx={{
						width: "277px",
						height: "46px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						paddingX: "1rem",
						background: "#31E716",
						borderRadius: "12px",
					}}
				>
					<Link
						href="/example"
						title="Example View On Website Page"
						sx={{
							textDecoration: "none",
						}}
					>
						<Typography
							sx={{
								fontSize: "20px",
								fontWeight: "700",
								lineHeight: "39px",
								color: "#343132",
								textTransform: "uppercase",
							}}
						>
							{t("button")}
						</Typography>
					</Link>
					{locale === "ar" ? (
						<svg
							width="38"
							height="38"
							viewBox="0 0 38 38"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.4205 0.691288L21.4906 3.76137L8.30463 16.9473L37.7467 16.9474L37.7467 21.2762L8.30463 21.2762L21.4906 34.4621L18.4205 37.5322L7.11275e-05 19.1117L18.4205 0.691288Z"
								fill="#343132"
							/>
						</svg>
					) : (
						<svg
							width="26"
							height="25"
							viewBox="0 0 26 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.5335 0.0334638L11.4665 2.10039L20.344 10.9778L0.522155 10.9778L0.522154 13.8922L20.344 13.8922L11.4665 22.7697L13.5335 24.8366L25.935 12.435L13.5335 0.0334638Z"
								fill="#343132"
							/>
						</svg>
					)}
				</Box>
			</Box>
		</>
	);
};
