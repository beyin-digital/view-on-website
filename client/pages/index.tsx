import { useState } from "react";
import Layout from "@/components/Layout/LayoutWithFooter";
import { Grid, Box, OutlinedInput } from "@mui/material";
import Header from "@/components/Home/Header";
import TextViewOnWeb from "@/components/Home/TextViewOnWeb";
import LayoutHomeBg from "@/components/Home/LayoutHomeBg";
import { useRouter } from "next/router";
import Head from "next/head";
import ArrowUpright from "../public/icons/arrowUpright";

const HomePage = () => {
	const router = useRouter();
	const [hashtag, setHashtag] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		router.push(`/subscribe/${hashtag}`);
	};
	return (
		<>
			<Head>
				<title>ViewOnWebsite - Home Page</title>
				<meta name="description" content="" />
				<meta name="keyword" content="" />
				<meta property="og:image" content="" />
			</Head>
			<Layout>
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
									xs: "skew(5deg, 0deg)",
									sm: "skew(16deg, 0deg)",
									md: "skew(16deg, 0deg)",
									xl: "skew(16deg, 0deg)",
								},
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							{/* text header  */}
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

										<Box
											sx={{
												background: "#000",
												width: "5px",
												height: {
													xs: "30px",
													sm: "30px",
													md: "60px",
													xl: "60px",
												},
												margin: "0 .5rem",
											}}
										/>

										<form onSubmit={handleSubmit}>
											<OutlinedInput
												value={hashtag}
												onChange={(e) => setHashtag(e.target.value)}
												sx={{
													width: "100%",
													fontSize: {
														xs: "18px",
														sm: "22px",
														md: "28px",
														xl: "38px",
													},
													lineHeight: "28px",

													marginY: ".5rem",

													".mui-style-1d3z3hw-MuiOutlinedInput-notchedOutline": {
														border: 0,
													},
												}}
												placeholder="Enter Hashtag Keyword"
											/>
										</form>
									</Box>
									<Box
										onClick={() => router.push(`/subscribe/${hashtag}`)}
										sx={{
											cursor: "pointer",
											width: {
												xs: "22px",
												sm: "46px",
												md: "46px",
												xl: "46px",
											},
											height: {
												xs: "22px",
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

							{/* <Box
								sx={{
									height: {
										xs: "50px",
										sm: "70px",
										md: "100px",
										xl: "120px",
									},
									width: { xs: "80%", md: "70%", xl: "70%" },
									display: "flex",
									alignItems: "center",
									justifyContent: "start",
									border: "1px solid red",
								}}
							>
								<Box
									display="flex"
									alignItems="center"
									justifyContent={"space-around"}
									sx={{
										width: "100%",
										// border:"1px solid"
									}}
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

										<Box
											sx={{
												background: "#000",
												width: "5px",
												height: {
													xs: "30px",
													sm: "30px",
													md: "60px",
													xl: "60px",
												},
												margin: "0 .5rem",
											}}
										/>

										<form onSubmit={handleSubmit}>
											<OutlinedInput
												value={hashtag}
												onChange={(e) => setHashtag(e.target.value)}
												sx={{
													width: "100%",
													fontSize: {
														xs: "18px",
														sm: "22px",
														md: "28px",
														xl: "38px",
													},
													lineHeight: "28px",

													marginY: ".5rem",

													".mui-style-1d3z3hw-MuiOutlinedInput-notchedOutline": {
														border: 0,
													},
													// "input:focus":{
													// 	border:"2px solid red"

													// }
												}}
												placeholder="Enter Hashtag Keyword"
											/>
										</form>
									</Box>
									<Box
										onClick={() => router.push(`/subscribe/${hashtag}`)}
										sx={{
											cursor: "pointer",
											width: {
												xs: "22px",
												sm: "46px",
												md: "46px",
												xl: "46px",
											},
											height: {
												xs: "22px",
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
							</Box> */}
							{/* text bottom  */}
							{/* <TextViewOnWeb /> */}
						</LayoutHomeBg>
					</Box>
				</Grid>
			</Layout>
		</>
	);
};

export default HomePage;
