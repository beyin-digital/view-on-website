"use client";

import { Box, styled, Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "rgba(251, 251, 251, 0.8)",
	border: "1px solid #E3E3E3",
	backdropFilter: "blur(100px)",
	padding: theme.spacing(1),
	textAlign: "center",
	height: "100%",
	borderRadius: "16px",
	color: theme.palette.text.secondary,
}));

const DashboardProfilePage = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Item sx={{ height: "822px", width: "100%" }}></Item>
		</Box>
	);
};

export default DashboardProfilePage;
