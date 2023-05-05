"use client";

import {
	Box,
	styled,
	Paper,
	Avatar,
	Typography,
	Divider,
	OutlinedInput,
	Button,
	Switch,
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

const AntSwitch = styled(Switch)(({ theme }) => ({
	width: 43,
	height: 22,
	padding: 0,
	display: "flex",
	"&:active": {
		"& .MuiSwitch-thumb": {
			width: 15,
		},
		"& .MuiSwitch-switchBase.Mui-checked": {
			transform: "translateX(9px)",
		},
	},
	"& .MuiSwitch-switchBase": {
		padding: 0,
		"&.Mui-checked": {
			transform: "translateX(22px)",
			color: "#fff",
			"& + .MuiSwitch-track": {
				opacity: 1,
				backgroundColor:
					theme.palette.mode === "dark" ? "#0DA7F6" : "#0DA7F6",
			},
		},
	},
	"& .MuiSwitch-thumb": {
		boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
		width: 22,
		height: 22,
		borderRadius: 11,
		transition: theme.transitions.create(["width"], {
			duration: 200,
		}),
	},
	"& .MuiSwitch-track": {
		borderRadius: 18 / 2,
		opacity: 1,
		backgroundColor:
			theme.palette.mode === "dark"
				? "rgba(255,255,255,.35)"
				: "rgba(0,0,0,.25)",
		boxSizing: "border-box",
	},
}));

const DashboardSecurityPage = () => {
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
			</Box>
			<Divider sx={{ marginTop: "38px" }} />
			{/* Input fields */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					marginX: "92px",
					marginTop: "66px",
				}}
			>
				<Box
					sx={{
						width: "650px",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<Typography fontSize='36px'>
						Change your password:
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
				<Box sx={{ display: "flex", alignItems: "flex-start" }}>
					<Box sx={{ textAlign: "left" }}>
						<Typography fontSize='36px'>
							Two Factor Authentication
						</Typography>
						<Typography fontSize='14px'>
							We will send you a verification email overtime you
							login
						</Typography>
					</Box>
					<AntSwitch sx={{ marginLeft: "100px" }} />
				</Box>
			</Box>
			<Typography
				textAlign='left'
				marginLeft='92px'
				marginTop='100px'
				sx={{ cursor: "pointer" }}
			>
				Delete account
			</Typography>
		</Item>
	);
};

export default DashboardSecurityPage;
