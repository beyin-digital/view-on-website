import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Navbar";
import {
	Typography,
	Box,
	OutlinedInput,
	FormControl,
	Button,
	Grid,
} from "@mui/material";
import Image from "next/image";
import { BsHash } from "react-icons/bs";
import {
	FiArrowUpRight,
	FiArrowDownRight,
	FiArrowDownLeft,
	FiArrowUpLeft,
} from "react-icons/fi";
import CheckIcon from "@mui/icons-material/Check";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";
import FooterMobile from "@/components/Footer/FooterMobile";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Layout from "@/components/Layout/LayoutSubscribe";

const SubscribePage: NextPage = () => {
	const { t } = useTranslation("subscribe");
	const router = useRouter();
	const { locale } = useRouter();

	const descCardOne = [
		{ id: 1, desc: "Triple Hashtag Keyword", tKey: "box_one_one" },
		{ id: 2, desc: "Triple Hashtag Keyword", tKey: "box_one_two" },
		{ id: 3, desc: "Triple Hashtag Keyword", tKey: "box_one_three" },
	];
	const descCardTwo = [
		{ id: 11, desc: "Triple Hashtag Keyword", tKey: "box_two_one" },
		{ id: 22, desc: "Triple Hashtag Keyword", tKey: "box_two_two" },
		{ id: 23, desc: "Triple Hashtag Keyword", tKey: "box_two_three" },
		// { id: 244, desc: "Triple Hashtag Keyword", tKey: "box_two_four" },
	];
	const descCardThree = [
		{ id: 111, desc: "Triple Hashtag Keyword", tKey: "box_three_one" },
		{ id: 222, desc: "Triple Hashtag Keyword", tKey: "box_three_two" },
		{ id: 233, desc: "Triple Hashtag Keyword", tKey: "box_three_three" },
	];

	const checks = [
		{ id: 1, title: "Easy to Read from Distance", tKey: "checks_one" },
		{ id: 2, title: "Continuous Analytical Reports", tKey: "checks_two" },
		{ id: 3, title: "Profile Chart Dashboard", tKey: "checks_three" },
		{ id: 4, title: "SEO Supported Keyword", tKey: "checks_four" },
	];

	const [values, setValues] = useState({
		hashtag: router.query.tag || "",
		subLinks: "",
	});
	let price = "";
	switch (values.hashtag.length) {
		case 1:
			price = "1m";
			break;
		case 2:
			price = "100k";
			break;
		case 3:
			price = "10k";
			break;
		default:
			price = "";
			break;
	}
	return (
		<Box
			sx={{
				width: "2162px",
				maxWidth: "100%",
				overflow: "hidden",
				position: "relative",
				height:
					values.hashtag.length >= 4 ? "100%" : { xs: "100%", md: "100vh" },
			}}
		>
			<Layout>
				<Grid
					sx={{
						paddingX: { xs: ".5rem", sm: "1rem", md: "2rem", xl: "2rem" },
						height: "100%",
						transform: { xs: "skew(0deg, 0deg)", sm: "skew(16deg, 0deg)" },

						display: "flex",
						alignItems: "center",
						justifyContent: { xs: "center", md: "flex-end" },
					}}
					className="SubscribePageLayout"
				>
					<>
						<Box
							sx={{
								width: { xs: "90%", sm: "80%", md: "70%" },
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
										fontSize: {
											xs: "18px",
											sm: "20px",
											md: "25px",
											xl: "40px",
										},
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

											// padding: "2px",
											margin: "0 -5px 0 5px",
											borderRadius: "8px",
											lineHeight: "92.5%",
											background:
												"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
										}}
									>
										#{t("text_keyword")}
									</Typography>{" "}
									{/* before someone else does */}
									{t("text_two")}
								</Typography>
							</Box>
							<Box
								sx={{
									marginY: { xs: ".5rem", sm: "2rem", md: "1rem", xl: "1rem" },
								}}
							>
								<FormControl
									sx={{ width: { xs: "100%", md: "90%", xl: "90%" } }}
								>
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
											border: "1px solid #E3E3E3",
											".MuiOutlinedInput-notchedOutline": {
												border: "0",
												padding: "9px",
											},
											"&:hover > .MuiOutlinedInput-notchedOutline": {
												border: "0",
											},
										}}
										// className="borderSubscribeInput"
										value={values.hashtag}
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

									<Box
										width="100%"
										display="flex"
										justifyContent="space-between"
									>
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
										<Box
											sx={{
												width: { xs: "28%", md: "25%", xl: "22%" },
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
												flexDirection: {
													xs: "column",
													md: "row",
													xl: "row",
												},
											}}
										>
											<Typography
												onClick={() => router.push(`${router.asPath}/premium`)}
												sx={{
													cursor: "pointer",
													color: "#31E716 ",
													backgroundClip: "text",
													WebkitBackgroundClip: "text",
													fontSize: {
														xs: "18px",
														md: "24px",
														xl: "28px",
													},
													alignItems: "center",
													display: "flex",
													paddingX: ".3rem",
												}}
											>
												{/* <GoPrimitiveDot size={"20px"} color="#31E816" /> */}
												{t("available")}
											</Typography>
											<Typography
												onClick={() => router.push(`${router.asPath}/premium`)}
												sx={{
													cursor: "pointer",
													display: values.hashtag.length <= 3 ? "flex" : "none",

													backgroundImage:
														"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
													backgroundClip: "text",
													WebkitBackgroundClip: "text",
													color: "transparent",
													fontSize: {
														xs: "18px",
														md: "24px",
														xl: "28px",
													},
													alignItems: "center",
													// display: "flex",
													paddingX: ".3rem",
												}}
											>
												{/* <GoPrimitiveDot size={"20px"} color="#31E816" /> */}
												{t("text_premium")}
											</Typography>
										</Box>
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
										// label={`${t("input_hashtag_two")}`}
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
										justifyContent: "space-between",
										marginBottom: { xs: "2rem", xl: "1rem" },
										flexDirection: {
											xs: "column",
											md: "column",
											xl: "row",
										},
										alignItems: "center",
									}}
								>
									<Box
										sx={{
											height: { xs: "100%", md: "100%", xl: "100px" },
											width: { xs: "100%", md: "80%", xl: "90%" },
											marginY: ".8rem",
											display: "flex",
											justifyContent: {
												xs: "",
												md: "space-around",
												xl: "space-around",
											},
											alignItems: "center",
											flexDirection: {
												xs: "column",
												md: "row",
												xl: "row",
											},
										}}
									>
										<Box
											sx={{
												width: { xs: "100%", md: "40%", xl: "30%" },
												display: "flex",
												height: "100%",
												justifyContent: "space-between",
												alignItems: "center",
												marginY: "1rem",
											}}
										>
											<Box
												sx={{
													width: { xs: "100%", md: "100%", xl: "70%" },
													height: "100%",
													display: "flex",
													alignItems: "center",
													justifyContent: "space-evenly",
													flexDirection: "column",
												}}
											>
												<Typography
													sx={{
														fontSize: {
															xs: "20px",
															sm: "40px",
															md: "40px",
															xl: "40px",
														},
														lineHeight: "37px",
														fontWeight: "400",
														color: "#343132",
														textTransform: "uppercase",
													}}
												>
													{price}
												</Typography>
												{values.hashtag.length < 4 && (
													<Typography
														sx={{
															fontSize: {
																xs: "14px",
																sm: "16px",
																md: "16px",
																xl: "16px",
															},
															lineHeight: "14px",
															fontWeight: "400",
															color: "#343132",
															textTransform: "capitalize",
															marginY: ".6rem",
														}}
													>
														{t("cash_one")}
													</Typography>
												)}
											</Box>
										</Box>
										{values.hashtag.length < 4 && (
											<Box
												sx={{
													width: { xs: "100%", md: "60%", xl: "40%" },
													height: "100%",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
												}}
											>
												<Box
													sx={{
														height: "100%",
														display: "flex",
														justifyContent: "center",
														flexDirection: "column",
													}}
												>
													{checks.map((item) => (
														<Box
															key={item.id}
															sx={{
																display: "flex",
																alignItems: "center",
																justifyContent: "space-between",
																height: { xs: "25px", xl: "45px" },
															}}
														>
															<AiOutlineCheck
																fontSize="small"
																color="#455154"
															/>
															<Box
																sx={{
																	width: "100%",
																	paddingX: ".5rem",
																	paddingY: ".2rem",
																}}
															>
																<Typography
																	sx={{
																		fontSize: {
																			xs: "14px",
																			sm: "16px",
																			md: "16px",
																			xl: "16px",
																		},
																		fontWeight: "400",
																		lineHeight: "14px",
																		color: "#343132",
																		textTransform: "capitalize",
																	}}
																>
																	{t(item.tKey)}
																</Typography>
															</Box>
														</Box>
													))}
												</Box>
											</Box>
										)}
									</Box>
									{/* Button Reserve Or Pay || Button Inder Code !!  */}

									{values.hashtag.length > 3 && (
										<ButtonStyle
											name={`${t("button")}`}
											color="#343132"
											bg="#31E716"
											onClick={() => {}}
											iconColor="#343132"
										/>
									)}
									{values.hashtag.length < 4 && (
										<ButtonStyle
											name={`${t("pay")}`}
											color="#FBFBFB"
											bg="#0090EC"
											onClick={() => {}}
											iconColor="#FBFBFB"
										/>
									)}
								</Box>
							</Box>
						</Box>
					</>
				</Grid>
			</Layout>

			{/* package box */}
			<Box
				sx={{
					width: "100%",
					height: { xs: "100%", xl: "100vh" },
					// display: "flex",
					display: values.hashtag.length >= 4 ? "flex" : "none",
					// height: values.hashtag.length >= 4 ? "100%" : "100%",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", xl: "80%" },
						height: { xs: "100%", xl: "560px" },
						display: "flex",
						alignItems: "center",
						justifyContent: "space-evenly",
						flexDirection: { xs: "column", md: "row", xl: "row" },
					}}
				>
					<Box
						sx={{
							width: { xs: "90%", sm: "314px", md: "314px", xl: "350px" },
							height: "467",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-around",
							flexDirection: "column",
							border: "1px solid #FBFBFB",
							borderRadius: "24px",
							background: "rgba(251, 251, 251, 0.6)",
							backdropFilter: "blur(100px)",
							marginY: "1rem",
						}}
					>
						{/* card Header */}
						<Box
							sx={{
								height: "70px",
								width: "100%",
								borderBottom: "1px solid #FBFBFB",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "24px", xl: "28px" },
									fontWeight: "600",
									color: "#58696D",
								}}
							>
								{t("box_one_title")}
							</Typography>
						</Box>
						{/* card price */}
						<Box
							sx={{
								height: "60px",
								marginY: "1rem",
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "33px", md: "40px", xl: "51px" },
									fontWeight: "600",
									color: "#31E716",
								}}
							>
								$99
							</Typography>
						</Box>
						{/* card body */}
						<Box
							sx={{
								width: "100%",
								height: "200px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
							}}
						>
							{descCardOne.map((item) => (
								<Box
									key={item.id}
									sx={{
										width: "90%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										marginY: ".3rem",
									}}
								>
									<Image src="/icons/check.svg" alt="" width={30} height={30} />
									<Typography
										sx={{
											fontSize: { xs: "15px", md: "18px", xl: "20px" },
											fontWeight: "400",
											marginX: { xs: ".1rem", md: "1rem" },
											width: "90%",
										}}
									>
										{t(item.tKey)}
									</Typography>
								</Box>
							))}
						</Box>
						{/* card button */}
						<Box
							sx={{
								height: "100px",
								width: "100%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							{/* <ButtonStyle /> */}
							<Box
								sx={{
									width: "180px",
									display: "flex",
									justifyContent: "end",
									background: "#0090EC",
									borderRadius: "11px",
								}}
							>
								<Button
									sx={{
										paddingX: "18px",
										width: "140px",
										height: "45px",
										display: "flex",
										justifyContent: "space-between",
									}}
								>
									<Typography
										sx={{
											// fontFamily: "Helvetica Neue",
											letterSpacing: "0.02em",
											fontSize: "32px",
											fontWeight: 400,
											lineHeight: "40px",
											color: "#FBFBFB",
											textTransform: "uppercase",
										}}
									>
										{t("pay")}
									</Typography>

									<FiArrowUpRight size={42} color="#FBFBFB" />
								</Button>
							</Box>
						</Box>
					</Box>

					<Box
						sx={{
							width: { xs: "90%", sm: "372px", md: "372px", xl: "400px" },
							height: "551px",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-around",
							flexDirection: "column",
							border: "1px solid #FBFBFB",
							borderRadius: "28px",
							background:
								"radial-gradient(163.29% 99.69% at 90.76% 58.8%, rgba(0, 144, 236, 0.1) 0%, rgba(0, 145, 237, 0) 100%)",
							// " linear-gradient(270deg, rgba(0, 144, 236, 0.1) 0%, rgba(49, 231, 22, 0.1) 100%)",
							backdropFilter: "blur(117px)",
							boxShadow: "0px 72px 86px rgba(0, 0, 0, 0.07)",
							marginY: "1rem",
							marginX: "1rem",
							paddingX: ".2rem",
						}}
					>
						{/* card Header */}
						<Box
							sx={{
								height: "70px",
								width: "100%",
								borderBottom: "1px solid #FBFBFB",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "24px", xl: "28px" },
									fontWeight: "600",
									color: "#58696D",
								}}
							>
								{t("box_two_title")}
							</Typography>
						</Box>
						{/* card price */}
						<Box
							sx={{
								height: "60px",
								marginY: "1rem",
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "33px", md: "40px", xl: "51px" },
									fontWeight: "600",
									color: "#31E716",
								}}
							>
								$399
							</Typography>
						</Box>
						{/* card body */}
						<Box
							sx={{
								width: "100%",
								height: "200px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
							}}
						>
							{descCardTwo.map((item) => (
								<Box
									key={item.id}
									sx={{
										width: "90%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										marginY: ".3rem",
									}}
								>
									<Image src="/icons/check.svg" alt="" width={30} height={30} />
									<Typography
										sx={{
											fontSize: { xs: "15px", md: "18px", xl: "20px" },
											fontWeight: "400",
											marginX: { xs: ".1rem", md: "1rem" },
											width: "90%",
										}}
									>
										{t(item.tKey)}
									</Typography>
								</Box>
							))}
						</Box>
						{/* card button */}
						<Box
							sx={{
								height: "100px",
								width: "100%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							{/* <ButtonStyle /> */}
							<Box
								sx={{
									width: "180px",
									display: "flex",
									justifyContent: "end",
									background: "#0090EC",
									borderRadius: "11px",
								}}
							>
								<Button
									sx={{
										paddingX: "18px",
										width: "140px",
										height: "45px",
										display: "flex",
										justifyContent: "space-between",
									}}
								>
									<Typography
										sx={{
											// fontFamily: "Helvetica Neue",
											letterSpacing: "0.02em",
											fontSize: "32px",
											fontWeight: 400,
											lineHeight: "40px",
											color: "#FBFBFB",
											textTransform: "uppercase",
										}}
									>
										{t("pay")}
									</Typography>

									<FiArrowUpRight size={42} color="#FBFBFB" />
								</Button>
							</Box>
						</Box>
					</Box>

					<Box
						sx={{
							width: { xs: "90%", sm: "314px", md: "314px", xl: "350px" },
							height: "467",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-around",
							flexDirection: "column",
							border: "1px solid #FBFBFB",
							borderRadius: "24px",
							background: "rgba(251, 251, 251, 0.6)",
							backdropFilter: "blur(100px)",
							marginY: "1rem",
						}}
					>
						{/* card Header */}
						<Box
							sx={{
								height: "70px",
								width: "100%",
								borderBottom: "1px solid #FBFBFB",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "24px", xl: "28px" },
									fontWeight: "600",
									color: "#58696D",
								}}
							>
								{t("box_three_title")}
							</Typography>
						</Box>
						{/* card price */}
						<Box
							sx={{
								height: "60px",
								marginY: "1rem",
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "33px", md: "40px", xl: "51px" },
									fontWeight: "600",
									color: "#31E716",
								}}
							>
								$299
							</Typography>
						</Box>
						{/* card body */}
						<Box
							sx={{
								width: "100%",
								height: "200px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
							}}
						>
							{descCardThree.map((item) => (
								<Box
									key={item.id}
									sx={{
										width: "90%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										marginY: ".3rem",
									}}
								>
									<Image src="/icons/check.svg" alt="" width={30} height={30} />
									<Typography
										sx={{
											fontSize: { xs: "15px", md: "18px", xl: "20px" },
											fontWeight: "400",
											marginX: { xs: ".1rem", md: "1rem" },
											width: "90%",
										}}
									>
										{t(item.tKey)}
									</Typography>
								</Box>
							))}
						</Box>
						{/* card button */}
						<Box
							sx={{
								height: "100px",
								width: "100%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							{/* <ButtonStyle /> */}
							<Box
								sx={{
									width: "180px",
									display: "flex",
									justifyContent: "end",
									background: "#0090EC",
									borderRadius: "11px",
								}}
							>
								<Button
									sx={{
										paddingX: "18px",
										width: "140px",
										height: "45px",
										display: "flex",
										justifyContent: "space-between",
									}}
								>
									<Typography
										sx={{
											// fontFamily: "Helvetica Neue",
											letterSpacing: "0.02em",
											fontSize: "32px",
											fontWeight: 400,
											lineHeight: "40px",
											color: "#FBFBFB",
											textTransform: "uppercase",
										}}
									>
										{t("pay")}
									</Typography>

									<FiArrowUpRight size={42} color="#FBFBFB" />
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Footer />
			<FooterMobile />
		</Box>
	);
};
export async function getStaticPaths({}: any) {
	return {
		paths: [
			{ params: { tag: "a" } },
			{ params: { tag: "aa" } },
			{ params: { tag: "aaa" } },
			{ params: { tag: "aaaa" } },
		],
		fallback: true,
	};
}
export async function getStaticProps({ params, locale }: any) {
	return {
		props: {
			...(await serverSideTranslations(locale || "", ["common", "subscribe"])),
		},
	};
}
export default SubscribePage;

interface ButtonStyleProps {
	name: string;
	color: any;
	bg: any;
	iconColor: any;
	onClick?: () => void;
}

const ButtonStyle = (props: ButtonStyleProps) => {
	const router = useRouter();
	const { locale } = useRouter();
	return (
		<>
			<Button
				sx={{
					borderRadius: "16px",
					paddingX: "18px",
					height: "59px",
					width: {
						xs: "100%",
						sm: "311px",
						md: "311px",
						xl: "311px",
					},
					display: "flex",
					background: props.bg,
					justifyContent: "space-around",
					"&:hover": {
						background: props.bg,
						color: props.color,
					},
				}}
				onClick={props.onClick}
				type="submit"
			>
				<Typography
					sx={{
						letterSpacing: "0.02em",
						fontSize: "32px",
						fontWeight: "400",
						lineHeight: "40px",
						color: props.color,
						textTransform: "capitalize",
					}}
				>
					{props.name}
					{/* {t("button")} */}
				</Typography>
				{locale === "ar" ? (
					<FiArrowDownLeft size={42} color={props.iconColor} />
				) : (
					<FiArrowDownRight size={42} color={props.iconColor} />
				)}
			</Button>
		</>
	);
};
