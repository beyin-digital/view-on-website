import { Box, Typography } from "@mui/material";

const TextViewOnWeb = () => {
	return (
		<>
			<Box
				sx={{
					height: {
						xs: "50px",
						sm: "70px",
						md: "100px",
						xl: "120px",
					},
					width: "50%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography
					sx={{
						fontSize: {
							xs: "18px",
							sm: "30px",
							md: "50px",
							xl: "64px",
						},
					}}
					fontWeight="600"
 					color="#0090EC"
				>
					ViewOnWebsite.com
				</Typography>
			</Box>
		</>
	);
};

export default TextViewOnWeb;
