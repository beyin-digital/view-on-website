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
} from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { GoPrimitiveDot } from "react-icons/go";
import FooterMobile from "@/components/Footer/FooterMobile";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { KeywordContext } from "@/contexts/keywordContext";

const SubscribePage: NextPage = () => {
	const { t } = useTranslation("subscribe");

	const router = useRouter();
	const { locale } = useRouter();

	const descCardOne = [
		{ id: 1, desc: "Triple Hashtag Keyword" },
		{ id: 2, desc: "Triple Hashtag Keyword" },
		{ id: 2, desc: "Triple Hashtag Keyword" },
	];
	const descCardTwo = [
		{ id: 11, desc: "Triple Hashtag Keyword" },
		{ id: 22, desc: "Triple Hashtag Keyword" },
		{ id: 23, desc: "Triple Hashtag Keyword" },
	];
	const descCardThree = [
		{ id: 111, desc: "Triple Hashtag Keyword" },
		{ id: 222, desc: "Triple Hashtag Keyword" },
		{ id: 233, desc: "Triple Hashtag Keyword" },
	];

	const checks = [
		{ id: 1, title: "Easy to Read from Distance", tKey: "checks_one" },
		{ id: 1, title: "Continuous Analytical Reports", tKey: "checks_two" },
		{ id: 1, title: "Profile Chart Dashboard", tKey: "checks_three" },
		{ id: 2, title: "SEO Supported Keyword", tKey: "checks_four" },
	];

	const cash = [
		{ id: 1, num: "10K", title: "One time payment " },
		{ id: 1, num: 3.65, title: "Yearly renewal" },
	];

	const [values, setValues] = useState({
		hashtag: router.query.tag || "",
		subLinks: router.query.sublink || "",
	});

	const { keywordFound, handleSubscription } = useContext(KeywordContext);

	return (
		<>
			<Head>
				<title>{t("meta_title")}</title>
				<meta name='description' content='' />
				<meta name='keyword' content='' />
				<meta property='og:image' content='' />
				<link rel='icon' href='/images/logo.svg' />
			</Head>
			<>
				<Header />
				<Box
					sx={{
						width: "2162px",
						maxWidth: "100%",
						background: "#EAEDED",
						overflow: "hidden",
						position: "relative",
					}}
				>
					<Box
						sx={{
							margin: "auto",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<>
							<img
								src='/images/swirl.svg'
								style={{
									position: "absolute",
									top: "-102rem",
								}}
							/>
						</>
						{/* <Background /> */}

						{/* layout section */}
						<Box
							sx={{
								position: "relative",
								left: { xs: "", md: "-5rem" },
								width: { xs: "100%", md: "100%", xl: "100%" },
								height: {
									xs: "100%",
									sm: "770px",
									md: "750px",
									xl: "650px",
								},
								background: "rgba(251, 251, 251, 0.6)",
								border: "1px solid #FBFBFB",
								backdropFilter: "blur(100px)",
								borderRadius: "30px",
								transform: {
									xs: "skew(0deg, 0deg)",
									md: "skew(-16deg, 0deg)",
									xl: "skew(-16deg, 0deg)",
								},
								overflow: "hidden",
								margin: "3rem 0",
								display: "flex",
								justifyContent: "center",
							}}
							className='SubscribePageLayoutBo'
						>
							<Grid
								sx={{
									marginLeft: {
										xs: "0px",
										sm: "0px",
										md: "140px",
										xl: "160px",
									},
									paddingX: {
										xs: ".5rem",
										sm: "1rem",
										md: "2rem",
										xl: "rem",
									},
									height: "100%",
									transform: {
										xs: "skewX(0deg)",
										md: "skew(16deg, 0deg)",
										xl: "skewX(16deg)",
									},
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
								className='LayoutTagsPadding'
							>
								<>
									<Box
										sx={{
											width: "100%",
											height: "100%",
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-evenly",
											margin: {
												xs: "0",
												md: "0",
												xl: "1rem auto 0rem 5rem",
											},
										}}
									>
										<Box
											sx={{
												marginY: {
													xs: "2rem",
													md: "1rem",
													xl: "1rem",
												},
											}}
										>
											<Typography
												sx={{
													fontSize: {
														xs: "18px",
														sm: "20px",
														md: "30px",
														xl: "40px",
													},
												}}
											>
												{t("text_one")}
												<span
													style={{
														padding: "0px 4px",
														margin: "0px 5px",
														borderRadius: "8px",
														lineHeight: "92.5%",
														background:
															"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
													}}
												>
													#{t("text_keyword")}
												</span>{" "}
												{t("text_two")}
											</Typography>
										</Box>
										<Box>
											<FormControl
												sx={{
													width: {
														xs: "100%",
														md: "90%",
														xl: "90%",
													},
												}}
											>
												<OutlinedInput
													sx={{
														width: "100%",
														height: {
															xs: "63px",
															md: "87px",
															xl: "97px",
														},
														fontSize: {
															xs: "18px",
															sm: "22px",
															md: "28px",
															xl: "32px",
														},
														lineHeight: "28px",
														background: "#FBFBFB",
														borderRadius: "20px",
														border: "1px solid ",
														".MuiOutlinedInput-notchedOutline":
															{
																border: "0",
																padding: "9px",
															},
														"&:hover > .MuiOutlinedInput-notchedOutline":
															{
																border: "0",
															},
													}}
													className='borderSubscribeInput'
													value={values.hashtag}
													placeholder={`${t(
														"input_hashtag_one"
													)}`}
													startAdornment={
														<BsHash
															color='#31E716'
															size={90}
														/>
													}
													endAdornment={
														<FiArrowUpRight
															color='#343132'
															size={90}
														/>
													}
												/>
												{/* <FormHelperText id="outlined-weight-helper-text"> */}
												<Box
													width='100%'
													display='flex'
													justifyContent='space-between'
												>
													{values.hashtag.length >=
														1 ||
														(values.hashtag
															.length <= 3 && (
															<Typography
																sx={{
																	fontSize: {
																		xs: "10px",
																		sm: "20px",
																		md: "24px",
																		xl: "28px",
																	},
																}}
															>
																{t(
																	"text_hashtag"
																)}
															</Typography>
														))}
													<Box
														sx={{
															width: {
																xs: "28%",
																md: "25%",
																xl: "22%",
															},
															display: "flex",
															justifyContent:
																"space-between",
															alignItems:
																"center",
															flexDirection: {
																xs: "column",
																md: "row",
																xl: "row",
															},
														}}
													>
														<Typography
															onClick={() =>
																router.push(
																	`${router.asPath}/premium`
																)
															}
															sx={{
																cursor: "pointer",
																color: "#31E716 ",
																backgroundClip:
																	"text",
																WebkitBackgroundClip:
																	"text",
																fontSize: {
																	xs: "18px",
																	md: "24px",
																	xl: "28px",
																},
																alignSelf:
																	"flex-end",
																alignItems:
																	"center",
																display: "flex",
															}}
														>
															{!keywordFound && (
																<>
																	<GoPrimitiveDot
																		size={
																			"20px"
																		}
																		color='#31E816'
																	/>
																	{t(
																		"available"
																	)}
																</>
															)}
														</Typography>
														<Typography
															onClick={() =>
																router.push(
																	`${router.asPath}/premium`
																)
															}
															sx={{
																cursor: "pointer",
																backgroundImage:
																	"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
																backgroundClip:
																	"text",
																WebkitBackgroundClip:
																	"text",
																color: "transparent",
																fontSize: {
																	xs: "18px",
																	md: "24px",
																	xl: "28px",
																},
																alignItems:
																	"center",
																display: "flex",
																marginX:
																	".3rem",
															}}
														>
															{values.hashtag
																.length >= 1 ||
																(values.hashtag
																	.length <=
																	3 && (
																	<>
																		<GoPrimitiveDot
																			size={
																				"20px"
																			}
																			color='#31E816'
																		/>
																		{t(
																			"text_premium"
																		)}
																	</>
																))}
														</Typography>
													</Box>
												</Box>
											</FormControl>
										</Box>
										<Box
											sx={{
												marginY: "2rem",
											}}
										>
											<Box
												sx={{
													width: {
														xs: "100%",
														md: "90%",
														xl: "90%",
													},
													marginY: "1rem",
												}}
											>
												<Typography
													sx={{
														fontSize: {
															xs: {
																xs: "20px",
																md: "24px",
																xl: "24px",
															},
															md: "30px",
															xl: "40px",
														},
														lineHeight: {
															xs: "22px",
															xl: "30px",
														},
														marginY: ".5rem",
													}}
												>
													{t("text_input_sublink")}
												</Typography>
												<OutlinedInput
													value={values.subLinks}
													sx={{
														width: "100%",
														height: {
															xs: "63px",
															md: "87px",
															xl: "97px",
														},
														fontSize: {
															xs: "18px",
															sm: "22px",
															md: "28px",
															xl: "32px",
														},
														lineHeight: "28px",
														borderRadius: "20px",
														background: "#FBFBFB",
														paddingX: "10px",
														boxShadow:
															"0px 31px 51px rgba(0, 0, 0, 0.05)",
													}}
													placeholder={`${t(
														"input_hashtag_two"
													)}`}
												/>
											</Box>
										</Box>
										{values.hashtag.length >= 1 ||
											(values.hashtag.length <= 3 && (
												<Box>
													<Box
														sx={{
															width: "100%",
															display: "flex",
															justifyContent:
																"space-between",
															marginY: {
																xs: "2rem",
																xl: "1rem",
															},
															flexDirection: {
																xs: "column-reverse",
																md: "column-reverse",
																xl: "row",
															},
															alignItems:
																"center",
														}}
													>
														<Box
															sx={{
																height: {
																	xs: "100%",
																	md: "100px",
																	xl: "100px",
																},
																width: {
																	xs: "100%",
																	xl: "70%",
																},
																marginY:
																	".8rem",
																display: "flex",
																justifyContent:
																	"space-around",
																alignItems:
																	"center",
																flexDirection: {
																	xs: "column",
																	md: "row",
																	xl: "row",
																},
															}}
														>
															<Box
																sx={{
																	width: {
																		xs: "100%",
																		md: "50%",
																		xl: "40%",
																	},
																	display:
																		"flex",
																	height: "100%",
																	justifyContent:
																		"space-between",
																	alignItems:
																		"center",
																	marginY:
																		"1rem",
																}}
															>
																{cash.map(
																	item => (
																		<Box
																			key={
																				item.id
																			}
																			sx={{
																				width: {
																					xs: "100%",
																					md: "45%",
																					xl: "60%",
																				},
																				height: "100%",
																				display:
																					"flex",
																				alignItems:
																					"center",
																				justifyContent:
																					"space-evenly",
																				flexDirection:
																					"column",
																			}}
																		>
																			<Typography
																				sx={{
																					fontSize:
																						{
																							xs: "20px",
																							sm: "40px",
																							md: "40px",
																							xl: "40px",
																						},
																					lineHeight:
																						"37px",
																					fontWeight:
																						"400",
																					color: "#343132",
																					textTransform:
																						"uppercase",
																				}}
																			>
																				${" "}
																				{
																					item.num
																				}
																			</Typography>
																			<Typography
																				sx={{
																					fontSize:
																						{
																							xs: "14px",
																							sm: "16px",
																							md: "16px",
																							xl: "16px",
																						},
																					lineHeight:
																						"14px",
																					fontWeight:
																						"400",
																					color: "#343132",
																					textTransform:
																						"capitalize",
																				}}
																			>
																				{
																					item.title
																				}
																			</Typography>
																		</Box>
																	)
																)}
															</Box>
															<Box
																sx={{
																	width: {
																		xs: "100%",
																		md: "50%",
																		xl: "38%",
																	},
																	height: "100%",
																	display:
																		"flex",
																	alignItems:
																		"center",
																	justifyContent:
																		"center",
																}}
															>
																<Box
																	sx={{
																		height: "100%",
																		display:
																			"flex",
																		justifyContent:
																			"center",
																		flexDirection:
																			"column",
																	}}
																>
																	{checks.map(
																		item => (
																			<Box
																				key={
																					item.id
																				}
																				sx={{
																					display:
																						"flex",
																					alignItems:
																						"center",
																					justifyContent:
																						"space-between",
																					height: {
																						xs: "25px",
																						xl: "45px",
																					},
																				}}
																			>
																				<AiOutlineCheck
																					fontSize='small'
																					color='#455154'
																				/>
																				<Box
																					sx={{
																						width: "100%",
																						paddingX:
																							".5rem",
																					}}
																				>
																					<Typography
																						sx={{
																							fontSize:
																								{
																									xs: "14px",
																									sm: "16px",
																									md: "16px",
																									xl: "16px",
																								},
																							fontWeight:
																								"400",
																							lineHeight:
																								"14px",
																							color: "#343132",
																							textTransform:
																								"capitalize",
																						}}
																					>
																						{t(
																							item.tKey
																						)}
																						{/* {item.title} */}
																					</Typography>
																				</Box>
																			</Box>
																		)
																	)}
																</Box>
															</Box>
														</Box>
														<Button
															sx={{
																borderRadius:
																	"16px",
																paddingX:
																	"18px",
																height: "59px",
																width: {
																	xs: "100%",
																	sm: "311px",
																	md: "311px",
																	xl: "311px",
																},
																display: "flex",
																background:
																	"#31E716",
																// marginRight: { xs: "10rem", xl: "4rem" },
																justifyContent:
																	"space-around",
															}}
														>
															<Typography
																sx={{
																	letterSpacing:
																		"0.02em",
																	fontSize:
																		"32px",
																	fontWeight:
																		"400",
																	lineHeight:
																		"40px",
																	color: "#343132",
																	textTransform:
																		"capitalize",
																}}
															>
																{t("button")}
															</Typography>
															{locale === "ar" ? (
																<FiArrowDownLeft
																	size={42}
																	color='#343132'
																/>
															) : (
																<FiArrowDownRight
																	size={42}
																	color='#343132'
																/>
															)}
														</Button>
													</Box>
												</Box>
											))}
									</Box>
								</>
							</Grid>
						</Box>
						{/* package box */}
						<Box
							sx={{
								width: "100%",
								height: { xs: "100%", xl: "100vh" },
								display: "flex",
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
									flexDirection: {
										xs: "column",
										md: "row",
										xl: "row",
									},
								}}
							>
								<Box
									sx={{
										width: {
											xs: "90%",
											sm: "314px",
											md: "314px",
											xl: "314px",
										},
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
												fontSize: {
													xs: "24px",
													xl: "28px",
												},
												fontWeight: "600",
												color: "#58696D",
											}}
										>
											Monthly Package
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
												fontSize: {
													xs: "33px",
													md: "40px",
													xl: "51px",
												},
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
										{descCardOne.map(item => (
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
												<Image
													src='/icons/check.svg'
													alt=''
													width={30}
													height={30}
												/>
												<Typography
													sx={{
														fontSize: {
															xs: "15px",
															md: "18px",
															xl: "20px",
														},
														fontWeight: "400",
														marginX: {
															xs: ".1rem",
															md: "1rem",
														},
													}}
												>
													{item.desc}
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
												onClick={() => {
													handleSubscription(
														values.hashtag as string,
														values.subLinks as string,
														99,
														"month"
													);
												}}
												sx={{
													paddingX: "18px",
													width: "140px",
													height: "45px",
													display: "flex",
													justifyContent:
														"space-between",
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
														textTransform:
															"uppercase",
													}}
												>
													{t("pay")}
												</Typography>

												<FiArrowUpRight
													size={42}
													color='#FBFBFB'
												/>
											</Button>
										</Box>
									</Box>
								</Box>

								<Box
									sx={{
										width: {
											xs: "90%",
											sm: "372px",
											md: "372px",
											xl: "371px",
										},
										height: "551px",
										display: "flex",
										alignItems: "center",
										justifyContent: "space-around",
										flexDirection: "column",
										border: "1px solid #FBFBFB",
										borderRadius: "28px",
										background:
											" linear-gradient(270deg, rgba(0, 144, 236, 0.1) 0%, rgba(49, 231, 22, 0.1) 100%)",
										backdropFilter: "blur(117px)",
										boxShadow:
											"0px 72px 86px rgba(0, 0, 0, 0.07)",
										marginY: "1rem",
										marginX: "1rem",
										paddingX: "1rem",
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
												fontSize: {
													xs: "24px",
													xl: "28px",
												},
												fontWeight: "600",
												color: "#58696D",
											}}
										>
											Yearly Package
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
												fontSize: {
													xs: "33px",
													md: "40px",
													xl: "51px",
												},
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
										{descCardTwo.map(item => (
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
												<Image
													src='/icons/check.svg'
													alt=''
													width={30}
													height={30}
												/>
												<Typography
													sx={{
														fontSize: {
															xs: "15px",
															md: "18px",
															xl: "20px",
														},
														fontWeight: "400",
														marginX: {
															xs: ".1rem",
															md: "1rem",
														},
													}}
												>
													{item.desc}
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
													justifyContent:
														"space-between",
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
														textTransform:
															"uppercase",
													}}
												>
													{t("pay")}
												</Typography>

												<FiArrowUpRight
													size={42}
													color='#FBFBFB'
												/>
											</Button>
										</Box>
									</Box>
								</Box>

								<Box
									sx={{
										width: {
											xs: "90%",
											sm: "314px",
											md: "314px",
											xl: "314px",
										},
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
												fontSize: {
													xs: "24px",
													xl: "28px",
												},
												fontWeight: "600",
												color: "#58696D",
											}}
										>
											6 Months Package
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
												fontSize: {
													xs: "33px",
													md: "40px",
													xl: "51px",
												},
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
										{descCardThree.map(item => (
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
												<Image
													src='/icons/check.svg'
													alt=''
													width={30}
													height={30}
												/>
												<Typography
													sx={{
														fontSize: {
															xs: "15px",
															md: "18px",
															xl: "20px",
														},
														fontWeight: "400",
														marginX: {
															xs: ".1rem",
															md: "1rem",
														},
													}}
												>
													{item.desc}
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
													justifyContent:
														"space-between",
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
														textTransform:
															"uppercase",
													}}
												>
													{t("pay")}
												</Typography>

												<FiArrowUpRight
													size={42}
													color='#FBFBFB'
												/>
											</Button>
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
						<Footer />
						<FooterMobile />
					</Box>
				</Box>
			</>
		</>
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
			...(await serverSideTranslations(locale || "", [
				"common",
				"subscribe",
			])),
		},
	};
}
export default SubscribePage;
