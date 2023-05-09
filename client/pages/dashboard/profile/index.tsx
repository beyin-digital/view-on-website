import {
	Box,
	styled,
	Paper,
	Avatar,
	Typography,
	Divider,
	OutlinedInput,
	Select,
	MenuItem,
	Button,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "rgba(251, 251, 251, 0.8)",
	border: "1px solid #E3E3E3",
	backdropFilter: "blur(100px)",
	textAlign: "center",
	height: "100%",
	borderRadius: "16px",
	color: theme.palette.text.secondary,
}));

const DashboardProfilePage = () => {
	return (
		<Item
			sx={{
				height: "822px",
				width: "100%",
			}}
		>
			{/* Name, profile photo, email  */}
			<Box
				style={{
					display: "flex",
					marginTop: "65px",
					marginLeft: "92px",
					marginRight: "92px",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				{/* Name and profile photo */}
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Avatar
						sx={{
							bgcolor: "#6BBF52",
							width: "83px",
							height: "83px",
							fontSize: "40px",
							borderRadius: "21px",
						}}
						variant='square'
					>
						MA
					</Avatar>
					<Typography
						sx={{
							fontSize: "36px",
							fontWeight: "bold",
							marginLeft: "50px",
						}}
					>
						Mehmet Ali
					</Typography>
				</Box>
				<Typography sx={{ fontSize: "24px" }}>
					mohammed@gmail.com
				</Typography>
			</Box>
			<Divider sx={{ marginTop: "38px" }} />
			<Box
				sx={{
					marginTop: "67px",
					marginLeft: "92px",
					width: "650px",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
				}}
			>
				<Typography fontSize='36px'>
					Change your account info:
				</Typography>

				<OutlinedInput
					placeholder='Full Name'
					sx={{
						height: "57px",
						width: "100%",
						marginTop: "45px",
						fontSize: "24px",
						background: "white",
						borderRadius: "15px",
					}}
				/>
				<OutlinedInput
					placeholder='Organisation'
					sx={{
						height: "57px",
						width: "100%",
						marginTop: "24px",
						fontSize: "24px",
						background: "white",
						borderRadius: "15px",
					}}
				/>
				<Select
					displayEmpty
					value=''
					renderValue={(selected: any) => {
						if (selected.length === 0) {
							return (
								<Typography
									sx={{
										fontSize: "24px",
										textAlign: "left",
									}}
								>
									State
								</Typography>
							);
						}
					}}
					sx={{
						height: "57px",
						width: "100%",
						marginTop: "24px",
						background: "white",
						borderRadius: "15px",
					}}
				>
					<MenuItem disabled value=''>
						State
					</MenuItem>
					<MenuItem value={1}>One</MenuItem>
				</Select>

				<Box
					sx={{
						width: "100%",
						display: "flex",
						flexDirection: "row-reverse",
						marginTop: "32px",
					}}
				>
					<Button
						disableRipple
						variant='contained'
						sx={{
							height: "63px",
							width: "255px",
							background: "#0090EC",
							borderRadius: "15px",
							color: "#FBFBFB",
							fontWeight: 400,
							fontSize: "24px",
							boxShadow: "none",
							textTransform: "none",
						}}
					>
						Save Changes
					</Button>
				</Box>
			</Box>
		</Item>
	);
};

export default DashboardProfilePage;
