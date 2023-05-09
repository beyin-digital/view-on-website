import Image from "next/image";
import { Grid, Link, Typography, Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export const HeaderLayoutDesktop = () => {
	const { t } = useTranslation("illustration");
	const { locale } = useRouter();
	return (
		<>
			<Box
				sx={{
					height: "100%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					position: "relative",
				}}
			>
				<Box
					sx={{
						height: "240px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
					}}
				>
					<Box
						sx={{
							height: "126px",
							width: { xs: "60%", xl: "788px" },
						}}
					>
						<Typography
							sx={{
								fontSize: { xs: "30px", md: "50px", xl: "64px" },
								fontWeight: "600",
								lineHeight: "60px",
							}}
						>
							{t("title")}
						</Typography>
					</Box>

					<Box
						sx={{
							height: "33px",
							width: { xs: "60%", xl: "419px" },
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
				{locale === "ar" ? (
					<Box
						sx={{
							width: "600px",
							height: "240px",
							position: "absolute",
							left: "-12%",
							top: "-10%",
						}}
					>
						<img
							src="/images/illustrationPicAR.png"
							style={{
								width: "100%",
								objectFit: "cover",
							}}
						/>
						<Box
							sx={{
								width: "257px",
								height: "90px",

								display: "flex",
								alignItems: "",
								justifyContent: "end",
								position: "absolute",
								bottom: { xs: "", md: "-10rem", xl: "-5rem" },
								left: { md: "9rem", xl: "9rem" },
							}}
						>
							<Typography
								sx={{
									fontSize: { md: "20px", xl: "24px" },
									lineHeight: "22px",
									fontWeight: "500",
								}}
							>
								{t("desc_three")}
							</Typography>
						</Box>
					</Box>
				) : (
					<Box
						sx={{
							width: "600px",
							height: "240px",
							position: "absolute",
							right: "-10%",
							top: "-10%",
						}}
					>
						<img
							src="/images/illustrationPic.png"
							style={{
								width: "100%",
								objectFit: "cover",
							}}
						/>
						<Box
							sx={{
								width: "257px",
								height: "90px",

								display: "flex",
								alignItems: "",
								justifyContent: "end",
								position: "absolute",
								bottom: { xs: "", md: "-10rem", xl: "-5rem" },
								right: { md: "9rem", xl: "9rem" },
							}}
						>
							<Typography
								sx={{
									fontSize: { md: "20px", xl: "24px" },
									lineHeight: "22px",
									fontWeight: "500",
								}}
							>
								{t("desc_three")}
							</Typography>
						</Box>
					</Box>
				)}
			</Box>
		</>
	);
};

export const MainContainerDesktop = () => {
	const { t } = useTranslation("illustration");
	const { locale } = useRouter();
	return (
		<>
			<Box
				sx={{
					height: "500px",
				}}
			>
				<Box
					sx={{
						width: "72%",
						height: "100%",
						display: "flex",
						justifyContent: "space-between",
						position: "relative",
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", md: "80%", xl: "303px" },
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
							width: "344px",
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
								position: "absolute",
								left: "8rem",
								top: "-5rem",
							}}
						>
							<img src="/icons/arrowUpAR.png" />
						</Box>
					) : (
						<Box
							sx={{
								width: "10px",
								position: "absolute",
								right: "7rem",
								top: "-6rem",
							}}
						>
							<img src="/icons/arrowUp.png" />
						</Box>
					)}
				</Box>
			</Box>
		</>
	);
};

export const ThreeOptionDesktop = () => {
	const { t } = useTranslation("illustration");

	return (
		<>
			<Box
				sx={{
					width: "100%",
					height: "65px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Grid container>
					<Grid item xs={3}>
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
											fontSize: { xs: "40px", xl: "64px" },
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
										paddingX: "5px",
									}}
								>
									<Typography
										sx={{
											fontSize: "24px",
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
					<Grid item xs={4}>
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
											fontSize: { xs: "40px", xl: "64px" },
											lineHeight: "60px",
											marginRight: ".5rem",
										}}
									>
										02
									</Typography>
								</Box>
								<Box
									sx={{
										width: "100%",
										paddingX: "5px",
									}}
								>
									<Typography
										sx={{
											fontSize: "24px",
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
					<Grid item xs={4}>
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
											fontSize: { xs: "40px", xl: "64px" },
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
										paddingX: "5px",
									}}
								>
									<Typography
										sx={{
											fontSize: "24px",
											lineHeight: "20px",
											fontWeight: "400",
										}}
									>
										{t("text_three")}
										<span
											style={{
												fontWeight: "600",
												margin: "auto 4px",
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

export const ButtonStyleDesktop = () => {
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
					width: "90%",
					marginX: "1rem",
					marginY: ".5rem",
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
						href=""
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
