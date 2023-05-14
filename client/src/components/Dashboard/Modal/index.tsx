import React from "react";
import {
	Fade,
	Modal as MUIModal,
	Box,
	Typography,
	IconButton,
} from "@mui/material";

import { Close } from "@mui/icons-material";

const modalStyle = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	background: "rgba(251, 251, 251, 0.5)",
	border: "1px solid #E3E3E3",
	boxShadow: "0px 33px 74px rgba(0, 0, 0, 0.25)",
	borderRadius: "15px",
	backdropFilter: "blur(100px)",
	pt: 2,
	px: "29px",
	pb: "21px",
};

export default function Modal({ children, title, open, handleClose }: any) {
	return (
		<MUIModal
			open={open}
			onClose={handleClose}
			disableAutoFocus
			closeAfterTransition
		>
			<Fade in={open}>
				<Box
					sx={{
						...modalStyle,
						width: { xs: 400, md: 500 },
						height: 360,
					}}
				>
					<Box
						sx={{
							display: "flex",
							width: "100%",
							justifyContent: "space-between",
						}}
					>
						<Typography fontSize='20px' fontWeight={700}>
							{title}
						</Typography>
						<IconButton
							// color='#252D38'
							component='button'
							onClick={handleClose}
						>
							<Close />
						</IconButton>
					</Box>
					<Box sx={{ marginTop: "20px" }}>{children}</Box>
				</Box>
			</Fade>
		</MUIModal>
	);
}
