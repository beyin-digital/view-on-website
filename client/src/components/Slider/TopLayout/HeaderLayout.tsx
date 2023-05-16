// import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import Slid from "../CenterLayout/Slid";

const HeaderLayout = ({ num }: any) => {
	const { t } = useTranslation("slider");
	const { locale } = useRouter();

	return (
		<>
			<Box
				sx={{
					width: "100%",
				}}
			>
				{locale === "ar" ? (
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							height: { xs: "100%", md: "100px", xl: "100px" },
							width: "100%",
							flexDirection: {
								xs: "column-reverse",
								md: "row-reverse",
								xl: "row-reverse",
							},
							marginTop: { xs: "1rem", md: "0", xl: "1rem" },
						}}
					>
						<Box>
							<Typography
								sx={{
									fontSize: { xs: "25px", md: "30px", xl: "40px" },
									fontWeight: "400",
									lineHeight: "45px",
								}}
							>
								{t("title")}
								<Typography
									component={"span"}
									sx={{
										paddingX: "4px",
										margin: "auto 5px",
										background:
											"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
										borderRadius: "7px",
										fontSize: { xs: "25px", md: "30px", xl: "40px" },
										fontWeight: "400",
										lineHeight: "45px",
									}}
								>
									#{t("keyword")}
								</Typography>
								{t("prime")}
							</Typography>
						</Box>
						<Box
							sx={{
								position: "relative",
								width: "200px",
								// height:"200px"
							}}
						>
							<img
								src="/images/cut-out-parallelogram.png"
								alt=""
								style={{
									width: "230px",
									height: "100px",
								}}
							/>
							<Box
								sx={{
									position: "absolute",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexDirection: "column",
									top: "0",
									right: "0",
									// marginX:"1rem"
								}}
							>
								<Typography
									sx={{
										fontSize: "36px",
										fontWeight: "600",
										lineHeight: "70px",
										color: "#31E716",
									}}
								>
									#A
								</Typography>
								<Typography
									sx={{
										fontSize: "19px",
										fontWeight: "600",
										lineHeight: "13px",
										color: "#0090EC",
									}}
								>
									ViewOnWebsite.com
								</Typography>
							</Box>
						</Box>
					</Box>
				) : (
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-around",
							height: { xs: "100%", md: "100px", xl: "100px" },
							flexDirection: { xs: "column-reverse", md: "row", xl: "row" },
							marginTop: { xs: "1rem", md: "0", xl: "0" },
						}}
					>
						<Box>
							<Typography
								sx={{
									fontSize: { xs: "25px", md: "30px", xl: "40px" },
									fontWeight: "400",
									lineHeight: { xs: "20px", md: "45px" },
									marginY: { xs: ".5rem", md: "0" },
								}}
							>
								{t("title")}
								<Typography
									component={"span"}
									sx={{
										paddingX: "4px",
										margin: "auto 4px",
										background:
											"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
										borderRadius: "7px",
										fontSize: { xs: "25px", md: "30px", xl: "40px" },
										fontWeight: "400",
										lineHeight: "40px",
									}}
								>
									#{t("keyword")}
								</Typography>
							</Typography>
						</Box>
						<Box
							sx={{
								position: "relative",
								width: "200px",
							}}
						>
							<img
								src="/images/cut-out-parallelogram.png"
								alt=""
								style={{
									width: "230px",
									height: "100px",
								}}
							/>
							<Box
								sx={{
									position: "absolute",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexDirection: "column",
									top: "0",
									right: "0",
								}}
							>
								<>
									<Typography
										sx={{
											fontSize: "36px",
											fontWeight: "600",
											lineHeight: "70px",
											color: "#31E716",
											height: "70px",
										}}
									>
										#A
									</Typography>
									{/* <Slid num={num} /> */}
									<Typography
										sx={{
											fontSize: "19px",
											fontWeight: "600",
											lineHeight: "13px",
											color: "#0090EC",
										}}
									>
										ViewOnWebsite.com
									</Typography>
								</>
							</Box>
						</Box>
					</Box>
				)}
			</Box>
		</>
	);
};

export default HeaderLayout;
