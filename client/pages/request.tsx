import Layout from "@/components/Layout/Layout";
import DetailsHeader from "@/components/Request/DetailsHeader";
import FormRequest from "@/components/Request/FormRequest";
import { Box, Grid } from "@mui/material";

const Request = () => {
	return (
		<>
			<Layout>
				<Grid
					container
					sx={{
						width: { xs: "100%", md: "90%", xl: "90%" },
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "end",
						transform: "skew(16deg, 0deg)",
						paddingX: "1rem",
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", md: "70%", xl: "865px" },
							height: { xs: "100%", md: "90%", xl: "90%" },
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "space-around",
							position: "relative",
							top: { xs: "10rem", sm: "0", md: "0", xl: "0" },
						}}
					>
						<DetailsHeader />
						<FormRequest />
					</Box>
				</Grid>
			</Layout>
		</>
	);
};

export default Request;
