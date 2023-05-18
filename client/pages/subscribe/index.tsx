import { useState } from "react";

import Layout from "@/components/Layout/Layout";
import {
	Typography,
	Box,
	OutlinedInput,
	FormControl,
	Button,
	Grid,
} from "@mui/material";
import { NextPage } from "next";
import { BsHash } from "react-icons/bs";
import {
	FiArrowUpRight,
	FiArrowUpLeft,
	FiArrowDownRight,
	FiArrowDownLeft,
} from "react-icons/fi";
import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import { useTranslation } from "next-i18next";

const SubscribePage: NextPage = () => {
	const { t } = useTranslation("subscribe");

	const router = useRouter();
	const [values, setValues] = useState({
		hashtag: "",
		sublinks: "",
	});
	const { locale } = useRouter();
	// const isRTL = locale === "ar";
	return (
		<Layout>
			<Grid
				sx={{
					paddingX: { xs: ".5rem", sm: "1rem", md: "2rem", xl: "2rem" },
					height: "100%",
					transform: "skew(16deg, 0deg)",
					display: "flex",
					alignItems: "center",
					justifyContent: { xs: "center", md: "flex-end" },
					// border: "1px solid",
				}}
				className="SubscribePageLayout"
			>
				<>
					<Box
						sx={{
							width: { xs: "80%", md: "70%" },
							height: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: { xs: "center", xl: "space-evenly" },
							marginX: { xs: "1px", md: "5rem" },
						}}
					>
						<Box
							sx={{
								marginY: { xs: "2rem", md: "1rem", xl: "0rem" },
								marginX: { xs: ".5rem", md: "1rem", xl: "1rem" },
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "18px", sm: "20px", md: "25px", xl: "40px" },
									lineHeight: "92.5%",
								}}
							>
								{/* Reserve your{" "} */}
								{t("text_one")}
								<Typography
									component={"span"}
									sx={{
										fontSize: {
											xs: "18px",
											sm: "20px",
											md: "25px",
											xl: "40px",
										},
										margin: "0 -5px 0 5px",
										borderRadius: "8px",
										lineHeight: "92.5%",
										background:
											"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
									}}
								>
									#{t("text_keyword")}
								</Typography>{" "}
								{t("text_two")}
							</Typography>
						</Box>
						<Box
							sx={{
								marginY: { xs: "2rem", md: "1rem", xl: "1rem" },
							}}
						>
							<FormControl sx={{ width: { xs: "100%", md: "90%", xl: "90%" } }}>
								<OutlinedInput
									sx={{
										width: "100%",
										height: { xs: "63px", md: "80px", xl: "80px" },
										fontSize: {
											xs: "18px",
											sm: "22px",
											md: "28px",
											xl: "32px",
										},
										lineHeight: "28px",
										background: "#FBFBFB",
										borderRadius: "20px",
										".MuiOutlinedInput-notchedOutline": {
											border: "0",
										},
										"&:hover > .MuiOutlinedInput-notchedOutline": {
											border: "0",
										},
									}}
									value={values.hashtag}
									onChange={(e) =>
										setValues({ ...values, hashtag: e.target.value })
									}
									placeholder={`${t("input_hashtag_one")}`}
									startAdornment={<BsHash color="#31E716" size={90} />}
									endAdornment={
										locale === "ar" ? (
											<FiArrowUpLeft color="#343132" size={90} />
										) : (
											<FiArrowUpRight color="#343132" size={90} />
										)
									}
									className={`${
										values.hashtag.length === 1 ||
										values.hashtag.length === 2 ||
										values.hashtag.length === 3
											? "borderSubscribeInput"
											: ""
									}`}
								/>

								<Box width="100%" display="flex" justifyContent="space-between">
									<Typography
										sx={{
											fontSize: {
												xs: "13px",
												sm: "20px",
												md: "22px",
												xl: "28px",
											},
										}}
									>
										{/* The hashtag keyword you've chosen is premium */}
										{/* {t("text_hashtag")} */}
									</Typography>
									{values.hashtag.length === 1 ||
									values.hashtag.length === 2 ||
									values.hashtag.length === 3 ? (
										<Typography
											sx={{
												cursor: "pointer",
												backgroundImage:
													"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
												backgroundClip: "text",
												WebkitBackgroundClip: "text",
												color: "transparent",
												fontSize: { xs: "20px", md: "24px", xl: "28px" },
											}}
										>
											{t("availableP")}
										</Typography>
									) : values.hashtag.length >= 4 ? (
										<Typography
											sx={{
												cursor: "pointer",
												backgroundImage:
													"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
												backgroundClip: "text",
												WebkitBackgroundClip: "text",
												color: "transparent",
												fontSize: { xs: "20px", md: "24px", xl: "28px" },
											}}
										>
											{t("available")}
										</Typography>
									) : null}
								</Box>
								{/* </FormHelperText> */}
							</FormControl>
						</Box>
						<Box>
							<Box sx={{ width: { xs: "100%", md: "90%", xl: "90%" } }}>
								<Typography
									sx={{
										fontSize: {
											xs: "15px",
											sm: "20px",
											md: "25px",
											xl: "40px",
										},
										marginY: { xs: "1rem", xl: "1rem" },
									}}
								>
									{/* Please provide your keyword's sub-link */}
									{t("text_input_sublink")}
								</Typography>
								<OutlinedInput
									sx={{
										width: "100%",
										fontSize: {
											xs: "18px",
											sm: "22px",
											md: "28px",
											xl: "32px",
										},
										lineHeight: "28px",
										height: { xs: "63px", md: "80px", xl: "80px" },
										borderRadius: "20px",
										background: "#FBFBFB",
										paddingX: "10px",
										boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.05)",
										".MuiOutlinedInput-notchedOutline": {
											border: "0",
										},
										"&:hover > .MuiOutlinedInput-notchedOutline": {
											border: "0",
										},
									}}
									placeholder={`${t("input_hashtag_two")}`}
								/>
							</Box>
						</Box>
						<Box>
							<Box
								sx={{
									width: "100%",
									display: "flex",
									justifyContent: { xs: "center", md: "end", xl: "end" },
									marginY: { xs: "2rem", xl: "1rem" },
								}}
							>
								<Button
									sx={{
										borderRadius: "16px",
										paddingX: "18px",
										height: "59px",
										width: "311px",
										display: "flex",
										justifyContent: "space-around",
										background: "#31E716",
										"&:hover": {
											background: "#31E716",
											color: "#343132",
										},
									}}
									onClick={() => router.push(`/subscribe/${values.hashtag}`)}
								>
									<Typography
										sx={{
											letterSpacing: "0.02em",
											fontSize: "32px",
											fontWeight: "400",
											lineHeight: "40px",
											color: "#343132",
										}}
									>
										{/* Reserve */}
										{t("button")}
									</Typography>
									<FiArrowDownRight
										size={42}
										color="#343132"
										className="left"
									/>
									<FiArrowDownLeft
										size={42}
										color="#343132"
										className="right"
									/>
								</Button>
							</Box>
						</Box>
					</Box>
				</>
			</Grid>
		</Layout>
	);
};
export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || "", ["common", "subscribe"])),
		},
	};
};
export default SubscribePage;
