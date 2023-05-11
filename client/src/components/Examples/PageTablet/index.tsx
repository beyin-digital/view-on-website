import { Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import OneBox from "./OneBox";
import TwoBox from "./TwoBox";
import ThreeBox from "./ThreeBox";
import { LinkSubscribe } from "@/components/Button";

const PageTablet = () => {
	const { t } = useTranslation("example");

	return (
		<>
			<Box
				sx={{
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					zIndex: "9999",
				}}
				className="PageTablet"
			>
				<Box
					sx={{
						width: "100%",
						display: { xs: "block", sm: "block", md: "none", xl: "none" },
					}}
				>
					<Image fill src="/images/swirl.svg" alt="" className="ImageMobile" />
				</Box>
				<Box
					sx={{
						width: "100%",
						display: { xs: "none", sm: "none", md: "block", xl: "block" },
					}}
				>
					<Image
						fill
						src="/images/swirl.svg"
						alt="Background Example Page"
						title="Background Example Page"
						style={{
							top: "-33rem",
							position: "absolute",
						}}
					/>
				</Box>
				<Box
					sx={{
						width: "100%",
						marginY: "4rem",
						overflow: "hidden",
					}}
				>
					<Box
						sx={{
							width: "100%",
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}
					>
						<OneBox />
						<TwoBox />
						<ThreeBox />
					</Box>
					<Box
						sx={{
							width: "85%",
							height: "90px",
							display: "flex",
							justifyContent: "end",
							alignItems: "center",
						}}
					>
						<LinkSubscribe />
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default PageTablet;
