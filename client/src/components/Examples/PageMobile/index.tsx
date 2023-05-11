import { Box } from "@mui/material";

// components
import OneBox from "./OneBox";
import TwoBox from "./TwoBox";
import ThreeBox from "./ThreeBox";

import { LinkSubscribe } from "@/components/Button";
const PageMobile = () => {
	return (
		<Box
			className="PageMobile"
			sx={{
				width: "100%",
				// maxHeight: "100%",
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
					<TwoBox />

					{/* Slider Three */}
					<ThreeBox />
					{/*  */}
					<Box
						sx={{
							width: { xs: "100%", sm: "85%", md: "85%", xl: "85%" },
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
		</Box>
	);
};

export default PageMobile;
