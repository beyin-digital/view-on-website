import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import NextLink from "next/link";

import { Box, Button, Modal, Typography } from "@mui/material";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";

type IntrinsicAttributes = {
	open: boolean;
	close: () => void;
	onClick: () => void;
};

const ModalFooter = (props: IntrinsicAttributes) => {
	// translate hook
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const router = useRouter();
	const [hovered, setHovered] = useState(false);
	const [hoveredTwo, setHoveredTwo] = useState(false);
	const [hoveredButton, setHoveredButton] = useState(false);

	const handleHover = () => {
		setHovered(!hovered);
	};

	const handleHoverTwo = () => {
		setHoveredTwo(!hoveredTwo);
	};
	const handleHoverButton = () => {
		setHoveredButton(!hoveredButton);
	};

	const handleLeave = () => {
		setHoveredButton(false);
	};
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Modal
				open={props.open}
				onClose={props.close}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className="swiper-blur"
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						position: "absolute" as "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					<Box
						sx={{
							width: "100%",
							maxWidth: "100%",
							height: "100%",
							bgcolor: "transparent",
							paddingX: "1rem",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							position: "relative",
						}}
					>
						<Box
							sx={{
								border: "1px solid #FBFBFB",
								borderRadius: "20px",
								position: "relative",
								width: { xs: "90%", sm: "500px", md: "500px", xl: "500px" },
								height: { xs: "600px", md: "700px", xl: "700px" },
								paddingX: "1rem",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
							}}
							className="modalBlur"
						>
							{/* Text Header */}
							<Box
								sx={{
									width: "100%",
									height: "150px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									marginY: ".5rem",
								}}
							>
								<Typography
									sx={{
										fontSize: { xs: "30px", md: "40px" },
										fontWeight: "400",
										lineHeight: "37px",
										color: "#343132",
									}}
								>
									{t("modal_title")}
								</Typography>
							</Box>
							{/* Box One */}
							<Box
								sx={{
									width: "100%",
									height: { xs: "250px", sm: "150px" },
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									flexDirection: "column",
									marginY: ".5rem",
								}}
							>
								{locale === "ar" ? (
									<Box
										sx={{
											width: "100%",
											height: "59px",
											display: "flex",
											alignItems: "center",
											// justifyContent: "center",
											justifyContent: { xs: "center", sm: "space-evenly" },
											flexDirection: { xs: "column", sm: "row-reverse" },
										}}
									>
										<Box
											sx={{
												width: "20%",
											}}
										>
											<Typography
												sx={{
													fontSize: { xs: "50px", md: "64px" },
													fontWeight: "400",
													lineHeight: "59px",
												}}
												className="numModal"
											>
												01
											</Typography>
										</Box>
										<Box
											sx={{
												width: { xs: "80%", sm: "50%" },
											}}
										>
											<Typography
												sx={{
													fontSize: { xs: "16px", sm: "20px" },
													textAlign: "right",
													fontWeight: "400",
													lineHeight: "20px",
													color: "#343132",
												}}
											>
												{t("modal_text_one")}
											</Typography>
										</Box>
									</Box>
								) : (
									<Box
										sx={{
											width: "100%",
											height: "59px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											flexDirection: { xs: "column", sm: "row" },
										}}
									>
										<Box
											sx={{
												width: "20%",
												marginX: "1rem",
											}}
										>
											<Typography
												sx={{
													fontSize: { xs: "50px", md: "64px" },
													fontWeight: "400",
													lineHeight: "59px",
												}}
												className="numModal"
											>
												01
											</Typography>
										</Box>
										<Box
											sx={{
												width: "70%",
											}}
										>
											<Typography
												sx={{
													fontSize: { xs: "16px", sm: "20px" },
													fontWeight: "400",
													lineHeight: "18px",
													color: "#343132",
												}}
											>
												{t("modal_text_one")}
											</Typography>
										</Box>
									</Box>
								)}

								{/* button */}
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									{locale === "ar" ? (
										<Button
											onClick={() => router.push("/illustration")}
											onMouseEnter={handleHoverButton}
											onMouseLeave={handleLeave}
											sx={{
												borderRadius: "16px",
												paddingX: "18px",
												height: "59px",
												width: { xs: "100%", sm: "300px", xl: "311px" },
												display: "flex",
												background:
													"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
												flexDirection: "row-reverse",
											}}
											className="ButtonAnimation"
										>
											<Typography
												sx={{
													letterSpacing: "0.02em",
													fontSize: { xs: "15px", sm: "23px", xl: "32px" },
													fontWeight: "700",
													lineHeight: "40px",
													color: "#343132",
													textTransform: "uppercase",
												}}
											>
												{t("nav_getStarted")}
											</Typography>

											<FiArrowUpLeft
												size={42}
												color="#343132"
												className={hoveredButton ? "animated-icon_rtl" : ""}
											/>
										</Button>
									) : (
										<Button
											onClick={() => router.push("/illustration")}
											onMouseEnter={handleHoverButton}
											onMouseLeave={handleLeave}
											sx={{
												borderRadius: "16px",
												paddingX: "18px",
												height: "59px",
												width: { xs: "100%", sm: "300px", xl: "311px" },
												display: "flex",
												background:
													"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
											}}
											className="ButtonAnimation"
										>
											<Typography
												sx={{
													letterSpacing: "0.02em",
													fontSize: { xs: "15px", sm: "23px", xl: "32px" },
													fontWeight: "700",
													lineHeight: "40px",
													color: "#343132",
													textTransform: "uppercase",
												}}
											>
												{t("nav_getStarted")}
											</Typography>
											<FiArrowUpRight
												size={42}
												color="#343132"
												className={hoveredButton ? "animated-icon" : ""}
											/>
										</Button>
									)}
								</Box>
							</Box>
							{/* Box Two */}
							<Box
								sx={{
									width: "100%",
									height: { xs: "250px", sm: "150px" },
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									flexDirection: "column",
									marginY: ".5rem",
								}}
							>
								{locale === "ar" ? (
									<Box
										sx={{
											width: "100%",
											height: "59px",
											display: "flex",
											alignItems: "center",
											justifyContent: { xs: "center", sm: "space-evenly" },
											flexDirection: { xs: "column", sm: "row-reverse" },
										}}
									>
										<Box
											sx={{
												width: "20%",
												// marginX: "1rem",
											}}
										>
											<Typography
												sx={{
													fontSize: { xs: "50px", md: "64px" },
													fontWeight: "400",
													lineHeight: "59px",
												}}
												className="numModal"
											>
												02
											</Typography>
										</Box>
										<Box
											sx={{
												width: { xs: "80%", sm: "50%" },
											}}
										>
											<Typography
												sx={{
													fontSize: { xs: "16px", sm: "20px" },
													fontWeight: "400",
													lineHeight: "22px",
													color: "#343132",
													textAlign: "right",
												}}
											>
												{t("modal_text_two")}
											</Typography>
										</Box>
									</Box>
								) : (
									<Box
										sx={{
											width: "100%",
											height: "59px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											flexDirection: { xs: "column", sm: "row" },
										}}
									>
										<Box
											sx={{
												width: "20%",
												marginX: "1rem",
											}}
										>
											<Typography
												sx={{
													fontSize: { xs: "50px", md: "64px" },
													fontWeight: "400",
													lineHeight: "59px",
												}}
												className="numModal"
											>
												02
											</Typography>
										</Box>
										<Box
											sx={{
												width: "70%",
											}}
										>
											<Typography
												sx={{
													fontSize: { xs: "16px", sm: "20px" },
													fontWeight: "400",
													lineHeight: "18px",
													color: "#343132",
												}}
											>
												{t("modal_text_two")}
											</Typography>
										</Box>
									</Box>
								)}
								{/* button */}
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<>
										<Box
											sx={{
												display: "flex",
												alginItems: "center",
												justifyContent: "end",
												height: "60px",
												width: { xs: "80%", sm: "90%" },
												marginX: { xs: ".4rem", sm: "1rem" },
												marginY: "1rem",
												paddingX: { xs: ".5rem", sm: "2rem" },
												cursor: "pointer",
											}}
										>
											{locale === "ar" ? (
												<Box
													sx={{
														width: { xs: "100%", sm: "330px" },

														height: "46px",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														// paddingX: "3rem",
														background: "#31E716",
														borderRadius: "12px",
													}}
												>
													<Box
														sx={{
															width: "280px",
															height: "46px",
															display: "flex",
															alignItems: "center",
															justifyContent: "space-between",
															paddingX: "3rem",
															background: "#31E716",
															borderRadius: "12px",
															flexDirection: "row-reverse",
														}}
														className={`icon-container ${
															hovered ? "hovered" : ""
														}`}
														onMouseEnter={handleHover}
														onMouseLeave={handleHover}
													>
														<NextLink
															href="/example"
															locale={router.locale}
															title="illustration View On Website Page"
															style={{
																textDecoration: "none",
															}}
														>
															<Typography
																sx={{
																	fontSize: { xs: "15px", sm: "20px" },
																	fontWeight: "700",
																	lineHeight: "39px",
																	color: "#343132",
																	textTransform: "uppercase",
																}}
															>
																{t("button_modal")}
															</Typography>
														</NextLink>
														<NextLink
															href="/example"
															locale={router.locale}
															title="illustration View On Website Page"
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
																className="icon-left_rtl"
															>
																<path
																	d="M18.4205 0.691288L21.4906 3.76137L8.30463 16.9473L37.7467 16.9474L37.7467 21.2762L8.30463 21.2762L21.4906 34.4621L18.4205 37.5322L7.11275e-05 19.1117L18.4205 0.691288Z"
																	fill="#343132"
																/>
															</svg>
														</NextLink>
													</Box>
												</Box>
											) : (
												<Box
													sx={{
														width: { xs: "100%", sm: "330px" },
														height: "46px",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",

														background: "#31E716",
														borderRadius: "12px",
													}}
												>
													<NextLink
														href="/example"
														locale={router.locale}
														title="illustration View On Website Page"
														style={{
															textDecoration: "none",
														}}
													>
														<Box
															sx={{
																width: "300px",
																height: "46px",
																display: "flex",
																alignItems: "center",
																justifyContent: "space-between",
																paddingLeft: "1rem",
																paddingRight: "3rem",
																// marginX:"5rem",
																background: "#31E716",
																borderRadius: "12px",
															}}
															className={`icon-container ${
																hovered ? "hovered" : ""
															}`}
															onMouseEnter={handleHover}
															onMouseLeave={handleHover}
														>
															<NextLink
																href="/example"
																locale={router.locale}
																title="illustration View On Website Page"
																style={{
																	textDecoration: "none",
																}}
															>
																<Typography
																	sx={{
																		fontSize: { xs: "15px", sm: "20px" },
																		fontWeight: "700",
																		lineHeight: "39px",
																		color: "#343132",
																		textTransform: "uppercase",
																	}}
																>
																	{t("button_modal")}
																</Typography>
															</NextLink>
															<svg
																width="26"
																height="25"
																viewBox="0 0 26 25"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																className="icon-left"
															>
																<path
																	d="M13.5335 0.0334638L11.4665 2.10039L20.344 10.9778L0.522155 10.9778L0.522154 13.8922L20.344 13.8922L11.4665 22.7697L13.5335 24.8366L25.935 12.435L13.5335 0.0334638Z"
																	fill="#343132"
																/>
															</svg>
														</Box>
													</NextLink>
												</Box>
											)}
										</Box>
									</>
								</Box>
							</Box>
							{/* Box Three */}
							<Box
								sx={{
									width: "100%",
									height: { xs: "250px", sm: "150px" },
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									flexDirection: "column",
									marginY: ".5rem",
								}}
							>
								{locale === "ar" ? (
									<Box
										sx={{
											width: "100%",
											height: "59px",
											display: "flex",
											alignItems: "center",
											// justifyContent: "center",
											justifyContent: { xs: "center", sm: "space-evenly" },
											flexDirection: { xs: "column", sm: "row-reverse" },
										}}
									>
										<Box
											sx={{
												width: "20%",
											}}
										>
											<Typography
												sx={{
													fontSize: { xs: "50px", md: "64px" },
													fontWeight: "400",
													lineHeight: "59px",
												}}
												className="numModal"
											>
												03
											</Typography>
										</Box>
										<Box
											sx={{
												width: { xs: "80%", sm: "50%" },
											}}
										>
											<Typography
												sx={{
													fontSize: { xs: "16px", sm: "20px" },
													textAlign: "right",
													fontWeight: "400",
													lineHeight: "18px",
													color: "#343132",
												}}
											>
												{t("modal_text_three")}
											</Typography>
										</Box>
									</Box>
								) : (
									<Box
										sx={{
											width: "100%",
											height: "59px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											flexDirection: { xs: "column", sm: "row" },
										}}
									>
										<Box
											sx={{
												width: "20%",
												marginX: "1rem",
											}}
										>
											<Typography
												sx={{
													fontSize: { xs: "50px", md: "64px" },
													fontWeight: "400",
													lineHeight: "59px",
												}}
												className="numModal"
											>
												03
											</Typography>
										</Box>
										<Box
											sx={{
												width: "70%",
											}}
										>
											<Typography
												sx={{
													fontSize: { xs: "16px", sm: "20px" },
													fontWeight: "400",
													lineHeight: "18px",
													color: "#343132",
												}}
											>
												{t("modal_text_three")}
											</Typography>
										</Box>
									</Box>
								)}
								{/* button */}
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									{/* <LinkSubscribe /> */}

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
											{locale === "ar" ? (
												<Box
													sx={{
														width: "277px",
														height: "46px",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														// paddingX: "1rem",
														background: "#31E716",
														borderRadius: "12px",
													}}
												>
													<Box
														sx={{
															width: "260px",
															height: "46px",
															display: "flex",
															alignItems: "center",
															justifyContent: "space-between",
															paddingX: "1rem",
															background: "#31E716",
															borderRadius: "12px",
															flexDirection: "row-reverse",
														}}
														className={`icon-container ${
															hoveredTwo ? "hovered" : ""
														}`}
														onMouseEnter={handleHoverTwo}
														onMouseLeave={handleHoverTwo}
													>
														<NextLink
															href="/subscribe"
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
																{t("subscribe")}
															</Typography>
														</NextLink>
														<NextLink
															href="/subscribe"
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
																className="icon-left_rtl"
															>
																<path
																	d="M18.4205 0.691288L21.4906 3.76137L8.30463 16.9473L37.7467 16.9474L37.7467 21.2762L8.30463 21.2762L21.4906 34.4621L18.4205 37.5322L7.11275e-05 19.1117L18.4205 0.691288Z"
																	fill="#343132"
																/>
															</svg>
														</NextLink>
													</Box>
												</Box>
											) : (
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
														className={`icon-container ${
															hoveredTwo ? "hovered" : ""
														}`}
														onMouseEnter={handleHoverTwo}
														onMouseLeave={handleHoverTwo}
													>
														<NextLink
															href="/subscribe"
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
																{t("subscribe")}
															</Typography>
														</NextLink>
														<NextLink
															href="/subscribe"
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
																className="icon-left"
															>
																<path
																	d="M13.5335 0.0334638L11.4665 2.10039L20.344 10.9778L0.522155 10.9778L0.522154 13.8922L20.344 13.8922L11.4665 22.7697L13.5335 24.8366L25.935 12.435L13.5335 0.0334638Z"
																	fill="#343132"
																/>
															</svg>
														</NextLink>
													</Box>
												</Box>
											)}
										</Box>
									</>
								</Box>
							</Box>
						</Box>
						<Box
							sx={{
								cursor: "pointer",
								bottom: "20rem",
								right: "-.3rem",
								zIndex: "9999999",
								position: "relative",
							}}
							onClick={props.onClick}
						>
							<AiFillCloseCircle
								onClick={props.onClick}
								size={30}
								color="#FBFBFB"
							/>
						</Box>
					</Box>
				</Box>
			</Modal>
		</Box>
	);
};

export default ModalFooter;
