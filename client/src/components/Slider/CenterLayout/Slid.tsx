import { Typography } from "@mui/material";
import React from "react";

const Slid = ({ num }: any) => {
	return (
		<>
			<Typography
				sx={{
					fontSize: {
						xs: "50px",
						sm: "96px",
						ms: "96px",
						xl: "96px",
					},
					fontWeight: "500",
					color: "#31E716",
					lineHeight: "88.8px",
					textAlign: "center",
					textTransform: "uppercase",
					marginY: ".2rem",
				}}
			>
				#{num}
			</Typography>
		</>
	);
};

export default Slid;
