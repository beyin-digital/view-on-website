import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { AiOutlineCheck } from "react-icons/ai";

interface Props {
	onClick: () => void;
	name?: any;
}

export const PackageBoxOne: React.FC<Props> = ({ onClick, name }) => {
	const { t } = useTranslation("subscribe");
	const { locale } = useRouter();

	// animation
	const [hoveredButton, setHoveredButton] = useState(false);
	const handleHoverButton = () => {
		setHoveredButton(!hoveredButton);
	};

	const handleLeave = () => {
		setHoveredButton(false);
	};

	const descCardOne = [
		{ id: 1, desc: "Triple Hashtag Keyword", tKey: "box_one_one" },
		{ id: 2, desc: "Triple Hashtag Keyword", tKey: "box_one_two" },
		{ id: 3, desc: "Triple Hashtag Keyword", tKey: "box_one_three" },
	];
	return (
		<>
			<Box
				sx={{
					width: {
						xs: "90%",
						sm: "314px",
						md: "314px",
						xl: "350px",
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
							width: "200px",
							display: "flex",
							justifyContent: "start",
							// background: "#0090EC",
							borderRadius: "11px",
						}}
						className="ButtonPayCard"
						onMouseEnter={handleHoverButton}
						onMouseLeave={handleLeave}
					>
						<Button
							onClick={onClick}
							sx={{
								paddingX: "10px",
								width: "190px",
								height: "45px",
								display: "flex",
								justifyContent: "space-between",
								marginRight: "8px",
							}}
						>
							<Typography
								sx={{
									letterSpacing: "0.02em",
									fontSize: "30px",
									fontWeight: 400,
									lineHeight: "40px",
									color: "#FBFBFB",
									textTransform: "uppercase",
								}}
							>
								{name}
							</Typography>

							{locale === "ar" ? (
								<FiArrowUpLeft
									size={42}
									color="#FBFBFB"
									className={hoveredButton ? "animated-icon_rtl" : ""}
								/>
							) : (
								<FiArrowUpRight
									size={42}
									color="#FBFBFB"
									className={hoveredButton ? "animated-icon" : ""}
								/>
							)}
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export const PackageBoxTwo: React.FC<Props> = ({ onClick, name }) => {
	const { t } = useTranslation("subscribe");
	const { locale } = useRouter();

	// animation
	const [hoveredButton, setHoveredButton] = useState(false);
	const handleHoverButton = () => {
		setHoveredButton(!hoveredButton);
	};

	const handleLeave = () => {
		setHoveredButton(false);
	};
	const descCardTwo = [
		{ id: 11, desc: "Triple Hashtag Keyword", tKey: "box_two_one" },
		{ id: 22, desc: "Triple Hashtag Keyword", tKey: "box_two_two" },
		{ id: 23, desc: "Triple Hashtag Keyword", tKey: "box_two_three" },
		// { id: 244, desc: "Triple Hashtag Keyword", tKey: "box_two_four" },
	];
	return (
		<>
			<Box
				sx={{
					width: {
						xs: "90%",
						sm: "372px",
						md: "372px",
						xl: "400px",
					},
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
							width: "200px",
							display: "flex",
							justifyContent: "start",
							background: "#0090EC",
							borderRadius: "11px",
						}}
						className="ButtonPayCard"
						onMouseEnter={handleHoverButton}
						onMouseLeave={handleLeave}
					>
						<Button
							onClick={onClick}
							sx={{
								paddingX: "10px",
								width: "190px",
								height: "45px",
								display: "flex",
								justifyContent: "space-between",
								marginRight: "8px",
							}}
						>
							<Typography
								sx={{
									// fontFamily: "Helvetica Neue",
									letterSpacing: "0.02em",
									fontSize: "30px",
									fontWeight: 400,
									lineHeight: "40px",
									color: "#FBFBFB",
									textTransform: "uppercase",
								}}
							>
								{name}
							</Typography>

							{locale === "ar" ? (
								<FiArrowUpLeft
									size={42}
									color="#FBFBFB"
									className={hoveredButton ? "animated-icon_rtl" : ""}
								/>
							) : (
								<FiArrowUpRight
									size={42}
									color="#FBFBFB"
									className={hoveredButton ? "animated-icon" : ""}
								/>
							)}
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export const PackageBoxThree: React.FC<Props> = ({ onClick, name }) => {
	const { t } = useTranslation("subscribe");
	const { locale } = useRouter();

	// animation
	const [hoveredButton, setHoveredButton] = useState(false);
	const handleHoverButton = () => {
		setHoveredButton(!hoveredButton);
	};

	const handleLeave = () => {
		setHoveredButton(false);
	};
	const descCardThree = [
		{ id: 111, desc: "Triple Hashtag Keyword", tKey: "box_three_one" },
		{ id: 222, desc: "Triple Hashtag Keyword", tKey: "box_three_two" },
		{ id: 233, desc: "Triple Hashtag Keyword", tKey: "box_three_three" },
	];
	return (
		<>
			<Box
				sx={{
					width: {
						xs: "90%",
						sm: "314px",
						md: "314px",
						xl: "350px",
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
							width: "200px",
							display: "flex",
							justifyContent: "start",
							background: "#0090EC",
							borderRadius: "11px",
						}}
						className="ButtonPayCard"
						onMouseEnter={handleHoverButton}
						onMouseLeave={handleLeave}
					>
						<Button
							onClick={onClick}
							sx={{
								paddingX: "10px",
								width: "190px",
								height: "45px",
								display: "flex",
								justifyContent: "space-between",
								marginRight: "8px",
							}}
						>
							<Typography
								sx={{
									// fontFamily: "Helvetica Neue",
									letterSpacing: "0.02em",
									fontSize: "30px",
									fontWeight: 400,
									lineHeight: "40px",
									color: "#FBFBFB",
									textTransform: "uppercase",
								}}
							>
								{name}
							</Typography>
							{locale === "ar" ? (
								<FiArrowUpLeft
									size={42}
									color="#FBFBFB"
									className={hoveredButton ? "animated-icon_rtl" : ""}
								/>
							) : (
								<FiArrowUpRight
									size={42}
									color="#FBFBFB"
									className={hoveredButton ? "animated-icon" : ""}
								/>
							)}{" "}
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};
