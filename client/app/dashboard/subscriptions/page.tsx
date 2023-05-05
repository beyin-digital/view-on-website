"use client";

import {
	styled,
	Paper,
	Typography,
	Avatar,
	Box,
	Button,
	Divider,
} from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "rgba(251, 251, 251, 0.8)",
	border: "1px solid #E3E3E3",
	backdropFilter: "blur(100px)",
	textAlign: "center",
	height: "100%",
	borderRadius: "16px",
	color: theme.palette.text.secondary,
}));
const DashboardSubscriptionsPage = () => {
	return (
		<Item
			sx={{
				height: "822px",
				width: "100%",
			}}
		>
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
				<Button
					sx={{
						background: "#31E816",
						width: "311px",
						height: "59px",
						borderRadius: "16px",
						fontSize: "32px",
						fontWeight: "400",
						color: "#343132",
					}}
					endIcon={<FiArrowUpRight size={40} />}
				>
					ADD MORE
				</Button>
			</Box>
			<Divider sx={{ marginTop: "38px", marginX: "57px" }} />
			<Box
				sx={{
					marginTop: "54px",
					marginLeft: "92px",
					display: "flex",
					flexDirection: "column",
					alignItems: "start",
				}}
			>
				<Typography fontSize='36px'>Your Plans:</Typography>
				{/* Subscription cards */}
				<Box
					sx={{
						display: "flex",
						width: "100%",
						justifyContent: "flex-start",
					}}
				>
					{/* Regular sub card */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							height: "343px",
							width: "312px",
							marginRight: "50px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
								height: "59px",
								backgroundColor: "#31E716",
								borderRadius: "16px",
							}}
						>
							<Typography fontSize='32px'>
								#SMARTDEVICE
							</Typography>
						</Box>
						<Box
							sx={{
								height: "222px",
								width: "100%",
								display: "flex",
								flexDirection: "column",
								background: "#FBFBFB99",
								borderRadius: "24px",
							}}
						>
							{/* Price and duration */}
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									marginX: "38px",
									marginTop: "28px",
								}}
							>
								{/* Price */}
								<Box>
									<Typography
										fontSize='32px'
										textAlign='left'
									>
										$299
									</Typography>
									<Typography textAlign='left'>
										Paid
									</Typography>
								</Box>
								{/* Length */}
								<Box>
									<Typography fontSize='20px'>
										6 months <br />
										package
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									marginTop: "32px",
									height: "48px",
								}}
							>
								<Typography>Date bought: 1/2/2023</Typography>
								<Typography>Next renewal: 2/8/2023</Typography>
							</Box>
						</Box>
						<Typography fontSize='14px'>Unsubscribe</Typography>
					</Box>
					{/* Premium Card */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							height: "343px",
							width: "374px",
							marginRight: "50px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
								height: "59px",
								background:
									"linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
								borderRadius: "16px",
							}}
						>
							<Typography fontSize='32px'>#VOW</Typography>
						</Box>
						<Box
							sx={{
								height: "222px",
								width: "100%",
								display: "flex",
								flexDirection: "column",
								background: "#FBFBFB99",
								borderRadius: "24px",
							}}
						>
							{/* Price and duration */}
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									marginX: "38px",
									marginTop: "28px",
								}}
							>
								{/* Price */}
								<Box>
									<Typography
										fontSize='32px'
										textAlign='left'
									>
										$100k
									</Typography>
									<Typography textAlign='left'>
										Paid
									</Typography>
								</Box>
								{/* Length */}
								<Box>
									<Typography
										fontSize='32px'
										textAlign='left'
									>
										$3.65
									</Typography>
									<Typography textAlign='left'>
										Yearly renewal
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									marginTop: "32px",
									height: "48px",
								}}
							>
								<Typography>Date bought: 1/2/2023</Typography>
								<Typography>Next renewal: 2/8/2023</Typography>
							</Box>
						</Box>
						<Typography fontSize='14px'>Unsubscribe</Typography>
					</Box>
				</Box>
			</Box>
		</Item>
	);
};

export default DashboardSubscriptionsPage;
