import { Box, Grid, OutlinedInput } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import TextViewOnWeb from "./TextViewOnWeb";
import LayoutHomeBg from "./LayoutHomeBg";
import Header from "./Header";

const HomeDetails = () => {
	const router = useRouter();
	const [hashtag, setHashtag] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		router.push(`/subscribe/${hashtag}`);
	};
	return (
		<Grid
			container
			sx={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: { xs: "center", sm: "end", md: "end", xl: "end" },
			}}
		>
			<Box
				sx={{
					width: "80%",

					margin: ".4rem",
				}}
			>
				<Box
					sx={{
						width: "100%",

						height: "220px",
						transform: {
							xs: "skew(10deg, 0deg)",
							sm: "skew(16deg, 0deg)",
							md: "skew(16deg, 0deg)",
							xl: "skew(16deg, 0deg)",
						},
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{/* text header */}
					<Header />
				</Box>
				<LayoutHomeBg>
					<Box
						sx={{
							width: { xs: "100%", sm: "70%", md: "70%", xl: "70%" },
							height: {
								xs: "200px",
								sm: "250px",
								md: "300px",
								xl: "300px",
							},
							display: "flex",
							alignItems: "center",
							flexDirection: "column",
							justifyContent: {
								xs: "start",
								sm: "center",
								md: "space-evenly",
								xl: "",
							},
						}}
					>
						<Box
							display="flex"
							alignItems="center"
							sx={{
								width: { xs: "70%", md: "100%", xl: "100%" },
								justifyContent: {
									xs: "center",
									md: "space-evenly",
									xl: "space-around",
								},
							}}
							className="BoxInputHome"
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<Box
									sx={{
										width: {
											xs: "32px",
											sm: "46px",
											md: "46px",
											xl: "66px",
										},
										height: {
											xs: "32px",
											sm: "46px",
											md: "46px",
											xl: "66px",
										},
									}}
								>
									<img
										src="/icons/hashtag.svg"
										style={{
											width: "100%",
											height: "100%",
										}}
									/>
								</Box>
								<form onSubmit={handleSubmit} className="cursor">
									<OutlinedInput
										value={hashtag}
										onChange={(e) => setHashtag(e.target.value)}
										sx={{
											width: "100%",
											height: "65px",
											fontSize: {
												xs: "18px",
												sm: "22px",
												md: "28px",
												xl: "38px",
											},
											lineHeight: "28px",
											marginY: ".5rem",
											".MuiOutlinedInput-notchedOutline": {
												border: "0",
												padding: "9px",
											},
											"&:hover > .MuiOutlinedInput-notchedOutline": {
												border: "0",
											},
											// "& .MuiOutlinedInput-root": {
											// 	"& fieldset": {
											// 		borderColor: "red",
											// 		borderWidth: "2px",
											// 		transition: "border-width 0.5s",
											// 	},
											// 	"&:hover fieldset": {
											// 		borderColor: "red",
											// 		borderWidth: "2px",
											// 	},
											// 	"&.Mui-focused fieldset": {
											// 		borderColor: "red",
											// 		borderWidth: "2px",
											// 	},
											// },
											"& .MuiInputBase-input": {
												caretColor: "#000",
											},
										}}
										placeholder="Enter Hashtag Keyword"
										className="l"
									/>
									<Box className="i" />
								</form>
							</Box>
							<Box
								onClick={() => router.push(`/subscribe/${hashtag}`)}
								sx={{
									cursor: "pointer",
									width: {
										xs: "32px",
										sm: "46px",
										md: "46px",
										xl: "46px",
									},
									height: {
										xs: "32px",
										sm: "46px",
										md: "46px",
										xl: "46px",
									},
								}}
							>
								<img
									src="/icons/arrowUpRight.svg"
									style={{
										width: "100%",
										height: "100%",
									}}
								/>
							</Box>
						</Box>
						<Box
							sx={{
								marginBottom: {
									xs: "2rem",
									sm: "1.5rem",
									md: "0",
									xl: "0",
								},
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
							className="BoxTextHome"
						>
							<TextViewOnWeb />
						</Box>
					</Box>
				</LayoutHomeBg>
			</Box>
		</Grid>
	);
};

export default HomeDetails;
