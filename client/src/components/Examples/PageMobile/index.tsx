import { Box } from "@mui/material";

// components
import OneBox from "./OneBox";
import TwoBox from "./TwoBox";
import ThreeBox from "./ThreeBox";

// footer
import Footer from "@/components/Footer/Footer";
import FooterMobile from "@/components/Footer/FooterMobile";
import { LinkSubscribe } from "@/components/Button";
const PageMobile = () => {
	return (
		<Box
			className="PageMobile"
			sx={{
				width: "100%",
				overflow: "hidden",
			}}
		>
			<Box
				my="auto"
				sx={{
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					position: "relative",
				}}
			>
				<Box
					sx={{
						position: "absolute",
						top: "-90rem",
					}}
				>
					<img src="/images/swirl.png" />
				</Box>
				<Box
					m="auto"
					sx={{
						height: "100%",
						width: "100%",
						maxWidth: "100%",

						margin: "5rem 0",
						position: "relative",
					}}
				>
					{/* Slider One */}
					<OneBox />

					{/* Slider Two */}
					<Box
					// sx={{
					// 	height: "10vh",
					// }}
					/>
					<TwoBox />

					{/* Slider Three */}
					<ThreeBox />
					{/*  */}
					<Box
						sx={{
							width: "85%",
							height: "90px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<LinkSubscribe />
					</Box>
				</Box>
			</Box>
			<FooterMobile />
			{/* <Footer /> */}
		</Box>
	);
};

export default PageMobile;
