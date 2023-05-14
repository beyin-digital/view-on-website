import { useState } from "react";
import { Grid, Box } from "@mui/material";
import Header from "@/components/Home/HeaderHome";
import TextViewOnWeb from "@/components/Home/TextViewOnWeb";
import LayoutHomeBg from "@/components/Home/LayoutHomeBg";

import HomeForm from "./HomeForm";

const HomeDetails = () => {
	return (
		<>
			<>
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
									xs: "skew(16deg, 0deg)",
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
										xs: "center",
										sm: "center",
										md: "space-evenly",
										xl: "",
									},
								}}
								className="boxHomeBlack"
							>
								<HomeForm />
								<Box
									sx={{
										marginBottom: {
											xs: "1rem",
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
			</>
		</>
	);
};

export default HomeDetails;
