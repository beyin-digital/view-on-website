import { Box } from "@mui/material";
import Image from "next/image";

const Background = () => {
	return (
		<>
			{/* <Box
				sx={{
					width: "100%",
					// display: { xs: "block", sm: "block", md: "none", xl: "none" },
				}}
			>
				<Image fill src="/images/swirl.svg" alt="" className="ImageMobile" />
			</Box> */}
			<Box
				sx={{
					width: "100%",
					// display: { xs: "", sm: "", md: "block", xl: "block" },
				}}
			>
				<Image
					fill
					src="/images/swirl.svg"
					alt=""
					style={{
						top: "-23rem",
						position: "absolute",
					}}
					className="ImageMobile"
				/>
			</Box>
		</>
	);
};

export default Background;
