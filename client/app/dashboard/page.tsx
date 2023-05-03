"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import {
	Grid,
	Typography,
	Box,
	Paper,
	OutlinedInput,
	Select,
	MenuItem,
	Button,
} from "@mui/material";
import PieChart from "@/components/Dashboard/Home/PieChart";
import LineChart from "@/components/Dashboard/Home/LineChart";

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

const viewsData = [
	{
		id: "today",
		label: "Today",
		value: 1658874,
		color: "hsla(112, 81%, 52%, 1)",
	},
	{
		id: "all-time",
		label: "All time",
		value: 13846847,
		color: "hsla(203, 100%, 46%, 1)",
	},
];

const viewsTimeGraphData = [
	{
		id: "1 may",
		color: "hsla(203, 100%, 46%, 1)",
		data: [
			{
				x: "10 jan",
				y: 298,
			},
			{
				x: "20 jan",
				y: 63,
			},
			{
				x: "30 jan",
				y: 218,
			},
			{
				x: "10 feb",
				y: 142,
			},
			{
				x: "20 feb",
				y: 291,
			},
			{
				x: "30 feb",
				y: 269,
			},
		],
	},
];
const DashboardHomePage = () => {
	const [values, setValues] = React.useState({
		hashtag: "",
		organization: "",
		location: {
			country: "",
			city: "",
		},
	});

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2.5} rowGap={2}>
				{/* First row */}

				{/* First Card */}
				<Grid item xs={3.5} height={380}>
					<Item sx={{ paddingX: "48px" }}>
						{/* Card Title */}
						<Typography
							marginTop='17px'
							variant='h5'
							textAlign='start'
							component='div'
							fontSize='20px'
							fontWeight={400}
						>
							Hashtag Info
						</Typography>

						{/* First inputs container */}
						<Box
							sx={{
								marginTop: "11px",
								height: "101px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							{/* Sublink input */}
							<OutlinedInput
								placeholder='Sublink'
								sx={{
									height: "42px",
									width: "100%",
									background: "white",
									borderRadius: "15px",
								}}
							/>
							{/* Organisation input */}
							<OutlinedInput
								placeholder='Organization'
								sx={{
									height: "42px",
									width: "100%",
									background: "white",
									borderRadius: "15px",
								}}
							/>
						</Box>

						{/* Location inputs */}
						<Box>
							{/* Title */}
							<Typography
								marginTop='40px'
								fontSize='20px'
								variant='h5'
								textAlign='start'
								component='div'
							>
								Location
							</Typography>
							{/* Second inputs container */}
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								{/* Country select */}
								<Select
									displayEmpty
									value={values.location.country}
									renderValue={(selected: any) => {
										if (selected.length === 0) {
											return "Country";
										}
									}}
									sx={{
										height: "42px",
										width: "164px",
										background: "white",
										borderRadius: "15px",
									}}
								>
									<MenuItem disabled value=''>
										Country
									</MenuItem>
									<MenuItem value={1}>One</MenuItem>
								</Select>
								{/* State Select */}
								<Select
									displayEmpty
									value={values.location.country}
									renderValue={(selected: any) => {
										if (selected.length === 0) {
											return "State";
										}
									}}
									sx={{
										height: "42px",
										width: "168px",
										background: "white",
										borderRadius: "15px",
									}}
								>
									<MenuItem disabled value=''>
										State
									</MenuItem>
									<MenuItem value={1}>One</MenuItem>
								</Select>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								flexDirection: "row-reverse",
								marginTop: "20px",
							}}
						>
							<Button
								disableRipple
								variant='contained'
								sx={{
									height: "42px",
									width: "154px",
									background: "#0090EC",
									borderRadius: "7px",
									color: "#FBFBFB",
									fontWeight: 500,
									fontSize: "20px",
									boxShadow: "none",
									textTransform: "none",
								}}
							>
								Update
							</Button>
						</Box>
					</Item>
				</Grid>
				<Grid item xs={3.5} height={380}>
					<Item sx={{ paddingX: "48px" }}>
						<Typography
							marginTop='17px'
							variant='h5'
							textAlign='start'
							component='div'
							fontSize='20px'
							height='57px'
							fontWeight={400}
						>
							Hashtag Details
						</Typography>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								width: "100%",
								height: "59px",
								marginTop: "20px",
								borderRadius: "16px",
								background:
									"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
							}}
						>
							<Typography fontSize='32px' fontWeight={500}>
								#VOW
							</Typography>
						</Box>

						<Typography
							fontSize='14px'
							fontWeight={400}
							align='center'
							marginY='18px'
						>
							Valid
						</Typography>
						{/* Dates */}
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "space-evenly",
								width: "100%",
								height: "106px",
								background: "rgba(251, 251, 251, 0.6)",
								border: "1px solid #FBFBFB",
								backdropFilter: "blur(100px)",
								borderRadius: "24px",
							}}
						>
							<Typography>Date bought: 1/2/2023</Typography>
							<Typography>Next renewal: 2/8/2023</Typography>
						</Box>
						<Typography
							fontSize='14px'
							fontWeight={400}
							align='center'
							marginY='18px'
						>
							Download E-label stamp
						</Typography>
					</Item>
				</Grid>
				<Grid container item xs={2.5} height={380} rowGap={4}>
					<Grid item xs={12} height={161}>
						<Item>
							<Typography
								align='center'
								marginTop='18px'
								fontSize='20px'
								marginX='37px'
							>
								Redirections Last 24 Hours
							</Typography>
							<Typography
								fontSize='36px'
								fontWeight={600}
								lineHeight='54px'
							>
								16,584
							</Typography>
						</Item>
					</Grid>
					<Grid item xs={12} height={161}>
						<Item>
							<Typography
								align='center'
								marginTop='10px'
								fontSize='20px'
								marginX='37px'
							>
								Total Number of Redirections
							</Typography>
							<Typography
								marginTop='14px'
								marginBottom='8px'
								fontSize='14px'
							>
								Since: 20/06/2023
							</Typography>
							<Typography
								fontSize='36px'
								fontWeight={600}
								lineHeight='54px'
							>
								13,846,847
							</Typography>
						</Item>
					</Grid>
				</Grid>
				<Grid item xs={2.5} height={380}>
					<Item>
						<Typography
							align='center'
							marginTop='18px'
							fontSize='20px'
							marginX='37px'
						>
							Today VS All-time
						</Typography>
						<PieChart data={viewsData} />
					</Item>
				</Grid>
				{/* Second Row */}
				<Grid item xs={12} height={419}>
					<Item sx={{ background: "rgba(251, 251, 251, 0.3)" }}>
						<LineChart data={viewsTimeGraphData} />
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
};

export default DashboardHomePage;
