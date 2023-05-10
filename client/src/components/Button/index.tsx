import { Box, Button, ButtonBaseProps, Link, Typography } from "@mui/material";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { FiArrowUpRight, FiArrowUpLeft } from "react-icons/fi";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

interface ButtonLoginProps extends ButtonBaseProps {
	name: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset" | undefined;
}

export const ButtonLogin = (props: ButtonLoginProps) => {
	const { locale } = useRouter();

	return (
		<>
			<Box
				sx={{
					width: {
						xs: "240px",
						sm: "300px",
						md: "300px",
						xl: "320px",
					},
					display: "flex",
					justifyContent: "end",
					background: "#0090EC",
					borderRadius: "16px",
				}}
			>
				<Button
					sx={{
						paddingX: "18px",
						height: "59px",
						width: { xs: "220px", md: "231px", xl: "271px" },
						display: "flex",
						justifyContent: "space-around",
					}}
					onClick={props.onClick}
					type={props.type}
					title={props.name}
				>
					<Typography
						sx={{
							// fontFamily: "Helvetica Neue",
							letterSpacing: "0.02em",
							fontSize: { xs: "20px", md: "25px", xl: "32px" },
							fontWeight: 400,
							lineHeight: "40px",
							color: "#FBFBFB",
							textTransform: "uppercase",
						}}
					>
						{props.name}
					</Typography>

					{/* <FiArrowUpRight size={42} color="#FBFBFB" /> */}
					{/* <FiArrowUpRight size={42} color="#FBFBFB" className="left" /> */}
					{/* <FiArrowUpLeft size={42} color="#FBFBFB" className="right" /> */}
					{locale === "ar" ? (
						<FiArrowUpLeft size={42} color="#FBFBFB" className="rig" />
					) : (
						<FiArrowUpRight size={42} color="#FBFBFB" className="le" />
					)}
				</Button>
			</Box>
		</>
	);
};

export const ButtonStyle = () => {
	return (
		<>
			<Box
				sx={{
					width: "180px",
					display: "flex",
					justifyContent: "end",
					background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
					borderRadius: "11px",
				}}
			>
				<Button
					sx={{
						paddingX: "18px",
						width: "140px",
						height: "45px",
						display: "flex",
						justifyContent: "space-around",
					}}
					title="payment"
				>
					<Typography
						sx={{
							// fontFamily: "Helvetica Neue",
							letterSpacing: "0.02em",
							fontSize: "32px",
							fontWeight: 400,
							lineHeight: "40px",
							color: "#343132",
							textTransform: "uppercase",
						}}
					>
						pay
					</Typography>

					<FiArrowUpRight size={42} color="#343132" />
				</Button>
			</Box>
		</>
	);
};
export const ButtonChange = ({ name, onClick }: any) => {
	return (
		<>
			<Box
				sx={{
					width: {
						xs: "100%",
						sm: "459px",
						md: "459px",
						xl: "459px",
					},
					display: "flex",
					justifyContent: "center",
					background: "#0090EC",
					borderRadius: "16px",
				}}
			>
				<Button
					sx={{
						paddingX: "1rem",
						height: "59px",
						width: { xs: "100%", md: "431px", xl: "431px" },
						display: "flex",
						justifyContent: "center",
					}}
					onClick={onClick}
					title={name}
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
						{name}
					</Typography>

					{/* <FiArrowUpRight size={42} color="#FBFBFB" /> */}
				</Button>
			</Box>
		</>
	);
};

export const LinkSubscribe = () => {
	const { t } = useTranslation("example");
	const { locale } = useRouter();

	return (
		<Box
			sx={{
				width: {
					xs: "240px",
					sm: "300px",
					md: "300px",
					xl: "300px",
				},
				height: "60px",
				display: "flex",
				justifyContent: "end",
				background: "#31E716",
				borderRadius: "16px",
			}}
		>
			<Link
				sx={{
					paddingX: "18px",
					height: "59px",
					width: { xs: "220px", md: "231px", xl: "261px" },
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
					textDecoration: "none",
				}}
				title={`${t("button")}`}
			>
				<Typography
					sx={{
						// fontFamily: "Helvetica Neue",
						letterSpacing: "0.02em",
						fontSize: { xs: "20px", md: "25px", xl: "32px" },
						fontWeight: "500",
						lineHeight: "40px",
						color: "#343132",
						textTransform: "uppercase",
					}}
				>
					{t("button")}
				</Typography>

				{locale === "ar" ? (
					<AiOutlineArrowLeft size={42} color="#343132" />
				) : (
					<AiOutlineArrowRight size={42} color="#343132" />
				)}
			</Link>
		</Box>
	);
};
