import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Grid, Typography, Box } from "@mui/material";

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
					<Typography
						sx={{
							fontSize: { xs: "40px", xl: "40px" },
							fontWeight: "600",
							lineHeight: "37px",
							color: "#FBFBFB",
							background: " linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
							borderRadius: "7px",
							paddingY: ".3rem",
							paddingX: ".5rem",
							width: "419px",
						}}
					>
						ViewOnWebsite.com
					</Typography>
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
							width: "100%",
							height: "100%",
						}}
					>
						<img
							src="/images/swirlIllustration.webp"
							alt="View On Website swirl Illustration Right icon"
							title="View On Website swirl Illustration Right icon"
							style={{
								position: "absolute",
								top: "-5rem",
								width: "300px",
								left: "9rem",
							}}
							loading="lazy"
						/>
						<Box
							sx={{
								width: "600px",
								height: "240px",
								position: "absolute",
								left: "-12%",
								top: "-22%",
							}}
						>
							<img
								src="/images/illustrationPicAR.webp"
								alt="View On Website swirl Illustration photo"
								title="View On Website swirl Illustration photo"
								style={{
									width: "100%",
									objectFit: "cover",
								}}
								loading="lazy"
							/>
							<Box
								sx={{
									width: "257px",
									height: "90px",

									display: "flex",
									alignItems: "",
									justifyContent: "end",
									position: "absolute",
									bottom: { xs: "", md: "-10rem", xl: "-6rem" },
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
					</Box>
				) : (
					<Box
						sx={{
							width: "100%",
							height: "100%",
						}}
					>
						<img
							src="/images/swirlIllustrationLeft.webp"
							alt="View On Website swirl Illustration Left icon"
							title="View On Website swirl Illustration Left icon"
							style={{
								position: "absolute",
								top: "-5rem",
								width: "300px",
								right: "9rem",
							}}
							loading="lazy"
						/>
						<Box
							sx={{
								width: "600px",
								height: "240px",
								position: "absolute",
								right: "-10%",
								top: "-22%",
							}}
						>
							<img
								src="/images/illustrationPic.webp"
								alt="View On Website swirl Illustration photo"
								title="View On Website swirl Illustration photo"
								style={{
									width: "100%",
									objectFit: "cover",
								}}
								loading="lazy"
							/>
							<Box
								sx={{
									width: "257px",
									height: "90px",
									display: "flex",
									alignItems: "",
									justifyContent: "end",
									position: "absolute",
									bottom: { xs: "", md: "-10rem", xl: "-6rem" },
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
								alt="arrow icon View On Website"
								title="arrow icon View On Website"
								style={{
									width: "100%",
								}}
								loading="lazy"
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
								alt="arrow icon View On Website"
								title="arrow icon View On Website"
								style={{
									width: "100%",
								}}
								loading="lazy"
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
							<img src="/images/illustrationPicCenterAR.png" loading="lazy" />
						) : (
							<img src="/images/illustrationPicCenter.png" loading="lazy" />
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
							<img
								src="/icons/arrowUpAR.png"
								alt="arrow icon View On Website"
								loading="lazy"
								title="arrow icon View On Website"
							/>
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
							<img
								src="/icons/arrowUp.png"
								alt="arrow icon View On Website"
								title="arrow icon View On Website"
								loading="lazy"
							/>
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
					height: "70px",
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
	const { t } = useTranslation(["illustration", "common"]);
	const { locale } = useRouter();
	const router = useRouter();
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
					marginY: "1rem",
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
					<NextLink
						href="/example"
						locale={router.locale}
						title="Example View On Website Page"
						style={{
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
					</NextLink>
					<>
						<>
							{locale === "ar" ? (
								<NextLink
									href="/example"
									locale={router.locale}
									title="Example View On Website Page"
									style={{
										textDecoration: "none",
									}}
								>
									<svg
										width="26"
										height="26"
										viewBox="0 0 38 38"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M18.4205 0.691288L21.4906 3.76137L8.30463 16.9473L37.7467 16.9474L37.7467 21.2762L8.30463 21.2762L21.4906 34.4621L18.4205 37.5322L7.11275e-05 19.1117L18.4205 0.691288Z"
											fill="#343132"
										/>
									</svg>
								</NextLink>
							) : (
								<NextLink
									href="/example"
									locale={router.locale}
									title="Example View On Website Page"
									style={{
										textDecoration: "none",
									}}
								>
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
								</NextLink>
							)}
						</>
					</>
				</Box>
			</Box>
		</>
	);
};

export const BackgroundImage = () => {
	const { locale } = useRouter();
	return (
		<>
			{locale === "ar" ? (
				<>
					<img
						src="/images/swirl.webp"
						alt="Background View On Website"
						title="Background View On Website"
						style={{
							top: "-18rem",
							right: "-19rem",
							position: "absolute",
							width: "1100px",
						}}
						loading="lazy"
					/>
				</>
			) : (
				<>
					<img
						src="/images/swirl.webp"
						alt="Background View On Website"
						title="Background View On Website"
						style={{
							top: "-15rem",
							left: "-12rem",
							position: "absolute",
							width: "1100px",
						}}
						loading="lazy"
					/>
				</>
			)}
		</>
	);
};
