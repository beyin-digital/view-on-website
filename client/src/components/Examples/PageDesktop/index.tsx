import { Box } from "@mui/material";

import { useRouter } from "next/router";

// components
import OneBox from "./OneBox";
import TwoBox from "./TwoBox";
import ThreeBox from "./ThreeBox";
import { LinkSubscribe } from "@/components/Button";

const PageDesktop = () => {
	const { locale } = useRouter();

	return (
		<>
			<Box
				className="PageDesktop"
				sx={{
					width: "1920",
					maxWidth: "100%",
					overflow: "hidden",
				}}
			>
				<Box
					my="auto"
					sx={{
						height: { xs: "100%", md: "90vh", xl: "88vh" },
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: { xs: "100%", md: "110vw", xl: "110vw" },
						overflow: "hidden",
						position: "relative",
						flexDirection: "column",
					}}
					className="PageDesktopMargin"
				>
					<Box
						sx={{
							position: "absolute",
							top: "-90rem",
						}}
					>
						<img
							src="/images/swirl.png"
							alt="Background Example Page"
							title="Background Example Page"
							loading="lazy"
						/>
					</Box>
					<Box
						sx={{
							height: { xs: "100%", md: "600px", xl: "590px" },
							width: { xs: "100%", md: "1920px", xl: "1920px" },
							maxWidth: "100%",
							borderTop: "1px solid #FBFBFB",
							borderBottom: "1px solid #FBFBFB",
							display: "flex",
							flexDirection: { xs: "column", md: "row", xl: "row" },
							overflow: "hidden",
							background: "rgba(251, 251, 251, 0.6)",
							marginX: { xs: "", md: "0rem", xl: "0" },
							position: "absolute",
							left: "0",
						}}
						className="PageDesktopLayout"
					>
						{/* Slider One */}
						<OneBox />

						{locale === "ar" ? (
							<Box
								sx={{
									position: "absolute",
									top: { xs: "12rem", xl: "11rem" },
									right: { xs: "", sm: "", md: "", lg: "55rem", xl: "60rem" },
									zIndex: "91",
									width: { xs: "", sm: "", md: "", lg: "400px", xl: "600px" },
									height: { xs: "", sm: "", md: "", lg: "300px", xl: "320px" },
								}}
								className="sliderArrowsOne"
							>
								<img
									src="/icons/arrowLeftExampleAR.png"
									alt="icon arrow Left"
									title="icon arrow Left"
									style={{
										width: "100%",
									}}
									loading="lazy"
								/>
							</Box>
						) : (
							<Box
								sx={{
									position: "absolute",
									top: { md: "20rem", xl: "18rem" },
									right: {
										// md: "55rem",
										lg: "59rem",
										xl: "63rem",
									},
									zIndex: "91",
									width: { xs: "", sm: "", md: "", lg: "300px", xl: "320px" },
									height: { xs: "", sm: "", md: "", lg: "300px", xl: "320px" },
								}}
								className="sliderArrowsOne"
							>
								<img
									src="/icons/arrowLeftExample.png"
									alt="icon arrow Left"
									title="icon arrow Left"
									style={{
										width: "100%",
									}}
									loading="lazy"
								/>
							</Box>
						)}
						{/* Slider Two */}
						<TwoBox />
						<>
							{locale === "ar" ? (
								<Box
									sx={{
										position: "absolute",
										top: { xs: "", sm: "", md: "", lg: "19rem", xl: "18rem" },
										right: {
											xs: "",
											sm: "",
											md: "",
											lg: "22rem",
											xl: "25.3rem",
										},
										width: { xs: "", sm: "", md: "", lg: "300px", xl: "400px" },
										height: {
											xs: "",
											sm: "",
											md: "",
											lg: "500px",
											xl: "600px",
										},

										zIndex: "9",
									}}
								>
									<img
										src="/icons/arrowExampleAR.png"
										alt="icon arrow Left"
										title="icon arrow Left"
										style={{
											width: "100%",
										}}
										loading="lazy"
									/>
								</Box>
							) : (
								<Box
									sx={{
										position: "absolute",
										top: { xs: "", sm: "", md: "", lg: "10rem", xl: "14.5rem" },
										right: {
											xs: "",
											sm: "",
											md: "",
											lg: "20rem",
											xl: "19.5rem",
										},
										width: { xs: "", sm: "", md: "", lg: "500px", xl: "600px" },
										height: {
											xs: "",
											sm: "",
											md: "",
											lg: "500px",
											xl: "600px",
										},

										zIndex: "9",
									}}
								>
									<img
										src="/icons/arrowExample.png"
										alt="icon arrow Left"
										title="icon arrow Left"
										style={{
											width: "100%",
										}}
										loading="lazy"
									/>
								</Box>
							)}

							{/* Slider Three */}
							<ThreeBox />
						</>
					</Box>
					<Box
						sx={{
							width: "85%",
							height: "90px",
							display: "flex",
							justifyContent: "end",
							alignItems: "center",
							position: "absolute",
							bottom: "0",
						}}
					>
						<LinkSubscribe />
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default PageDesktop;
