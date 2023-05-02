import { useState } from "react";

import Layout from "@/components/Layout/Layout";
import {
	Typography,
	Box,
	OutlinedInput,
	FormControl,
	Button,
	Grid,
	Container,
} from "@mui/material";
import { NextPage } from "next";
import { BsHash } from "react-icons/bs";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { useRouter } from "next/router";

const SubscribePage: NextPage = () => {
	const router = useRouter();
	const [values, setValues] = useState({
		hashtag: "",
		sublinks: "",
	});
	return (
		<Layout>
			<Grid
				sx={{
					marginLeft: { xs: "0px", sm: "120px", md: "140px", xl: "160px" },
					paddingX: "2rem",
					height: "100%",
					transform: "skewX(16deg)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Container>
					<Box
						sx={{
							height: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: { xs: "center", xl: "space-evenly" },
							margin: { xs: "0", md: "0", xl: "1rem auto 0rem 5rem" },
						}}
					>
						<Box
							sx={{
								marginY: { xs: "2rem", md: "1rem", xl: "1rem" },
							}}
						>
							<Typography
								sx={{
									fontSize: { xs: "18px", sm: "20px", md: "30px", xl: "40px" },
								}}
							>
								Reserve your{" "}
								<span
									style={{
										padding: "4px 8px",
										borderRadius: "8px",
										lineHeight: "92.5%",
										background:
											"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
									}}
								>
									#keyword
								</span>{" "}
								before someone else does
							</Typography>
						</Box>
						<Box
							sx={{
								marginY: { xs: "2rem", md: "1rem", xl: "1rem" },
							}}
						>
							<FormControl sx={{ width: "90%" }}>
								<OutlinedInput
									sx={{
										width: "100%",
										height:"97px",
										fontSize: {
											xs: "18px",
											sm: "22px",
											md: "28px",
											xl: "32px",
										},
										lineHeight: "28px",
										background: "#FBFBFB",
										".mui-style-1d3z3hw-MuiOutlinedInput-notchedOutline": {
											border: "0",
										},
									}}
									value={values.hashtag}
									onChange={(e) =>
										setValues({ ...values, hashtag: e.target.value })
									}
									placeholder="Enter your unique hashtag keyword"
									startAdornment={<BsHash color="#31E716" size={90} />}
									endAdornment={<FiArrowUpRight color="#343132" size={90} />}
									className="borderSubscribeInput"
								/>
								{/* <FormHelperText id="outlined-weight-helper-text"> */}
								<Box width="100%" display="flex" justifyContent="space-between">
									<Typography
										sx={{
											fontSize: {
												xs: "18px",
												sm: "20px",
												md: "24px",
												xl: "28px",
											},
										}}
									>
										The hashtag keyword you've chosen is premium
									</Typography>
									<Typography
										sx={{
											cursor: "pointer",
											backgroundImage:
												"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
											backgroundClip: "text",
											WebkitBackgroundClip: "text",
											color: "transparent",
											fontSize: { xs: "20px", md: "24px", xl: "28px" },
										}}
									>
										Premium
									</Typography>
								</Box>
								{/* </FormHelperText> */}
							</FormControl>
						</Box>
						<Box>
							<Box sx={{ width: "90%" }}>
								<Typography
									sx={{
										fontSize: { xs: "20px", md: "30px", xl: "40px" },
										marginY: { xs: "1rem", xl: "1rem" },
									}}
								>
									Please provide your keyword's sub-link
								</Typography>
								<OutlinedInput
									label="Please provide your keyword's sub-link"
									sx={{
										width: "100%",
										fontSize: {
											xs: "18px",
											sm: "22px",
											md: "28px",
											xl: "32px",
										},
										lineHeight: "28px",
										height: "97px",
										borderRadius: "20px",
										background: "#FBFBFB",
										paddingX: "10px",
										boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.05)",
									}}
									placeholder="Enter hashtag keyword"
								/>
							</Box>
						</Box>
						<Box>
							<Box
								sx={{
									width: "100%",
									display: "flex",
									justifyContent: "end",
									marginY: { xs: "2rem", xl: "1rem" },
								}}
							>
								<Button
									sx={{
										borderRadius: "16px",
										paddingX: "18px",
										height: "59px",
										width: "311px",
										display: "flex",
										background: "#31E716",
										// marginRight: { xs: "10rem", xl: "4rem" },
									}}
									onClick={() => router.push(`/subscribe/${values.hashtag}`)}
								>
									<Typography
										sx={{
											letterSpacing: "0.02em",
											fontSize: "32px",
											fontWeight: "400",
											lineHeight: "40px",
											color: "#343132",
										}}
									>
										Reserve
									</Typography>
									<FiArrowDownRight size={42} color="#343132" />
								</Button>
							</Box>
						</Box>
					</Box>
				</Container>
			</Grid>
		</Layout>
	);
};

export default SubscribePage;
