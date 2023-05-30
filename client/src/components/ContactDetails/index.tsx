import { Box, Typography } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const ContactDetails = () => {
	const cards = [
		{
			id: 1,
			name: "Technical Support",
			text: "For technical support please contact us through:",
			iconEmail: "",
			email: "Support@viewonwebsite.com",
			iconPhone: "",
			phone: "+971 50 1234 567",
		},
		{
			id: 2,
			name: "Technical Support",
			text: "For technical support please contact us through:",
			iconEmail: "",
			email: "Support@viewonwebsite.com",
			iconPhone: "",
			phone: "+971 50 1234 567",
		},
		{
			id: 3,
			name: "Technical Support",
			text: "For technical support please contact us through:",
			iconEmail: "",
			email: "Support@viewonwebsite.com",
			iconPhone: "",
			phone: "+971 50 1234 567",
		},
	];
	return (
		<>
			<Box
				sx={{
					border: "1px solid red",
					width: "100%",
					height: "100%",
					display: "flex",
					alginItems: "center",
					justifyContent: "end",
					transform: "skew(16deg, 0deg)",
				}}
			>
				<Box
					sx={{
						border: "1px solid blue",
						display: "flex",
						alignItems: "start",
						justifyContent: "center",
						flexDirection: "column",
						width: "70%",
						height: "100%",
					}}
				>
					{cards.map((item) => (
						<Box
							sx={{
								display: "flex",
								alignItems: "start",
								justifyContent: "space-around",
								flexDirection: "column",
								height: "170px",
								width: "100%",
								border: "1px solid green",
							}}
							key={item.id}
						>
							<Typography
								sx={{
									fontSize: "40px",
									fontWeight: "400",
									lineHeight: "37px",
								}}
							>
								{item.name}
							</Typography>
							<Typography
								sx={{
									fontSize: "24px",
									fontWeight: "400",
									lineHeight: "22px",
								}}
							>
								{item.text}
							</Typography>
							<Box
								sx={{
									width: "80%",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<Box
									sx={{
										width: "45%",
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
									}}
								>
									{/* icon */}
									<MdEmail size={25} />
									<Typography
										sx={{
											fontSize: "20px",
											fontWeight: "400",
											lineHeight: "18px",
										}}
									>
										{item.email}
									</Typography>
								</Box>
								<Box
									sx={{
										width: "30%",
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
									}}
								>
									{/* icon */}
									<RiWhatsappFill size={25} />
									<Typography
										sx={{
											fontSize: "20px",
											fontWeight: "400",
											lineHeight: "18px",
										}}
									>
										{item.phone}
									</Typography>
								</Box>
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</>
	);
};

export default ContactDetails;
