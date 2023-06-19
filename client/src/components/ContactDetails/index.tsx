import { Box, Typography, Link } from "@mui/material";
import { useTranslation } from "next-i18next";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const ContactDetails = () => {
	const { t } = useTranslation("contact");

	const cards = [
		{
			id: 1,
			name: "title_one",
			text: "text",
			iconEmail: "",
			email: "support@viewonwebsite.com ",
			iconPhone: "564582253",
			phone: "+971564582253",
		},
		{
			id: 2,
			name: "title_two",
			text: "text",
			iconEmail: "",
			email: "business@viewonwebsite.com",
			iconPhone: "50 776 9111",
			phone: "+971507769111",
		},
		{
			id: 3,
			name: "title_three",
			text: "text",
			iconEmail: "press@viewonwebsite.com",
			email: "Press@ViewOnWebsite.com",
			iconPhone: "52 873 8551",
			phone: "+971528738551",
		},
	];
	return (
		<>
			<Box
				sx={{
					width: "90%",
					height: "100%",
					display: "flex",
					alginItems: "center",
					justifyContent: "end",
					transform: "skew(16deg, 0deg)",
					marginY: { xs: "8rem", md: "auto" },
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "start",
						justifyContent: "center",
						flexDirection: "column",
						width: { xs: "95%", md: "85%", lg: "70%" },
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
								height: { xs: "100%", sm: "170px" },
								width: "100%",
							}}
							key={item.id}
						>
							<Typography
								sx={{
									fontSize: { xs: "20px", md: "30px", xl: "40px" },
									fontWeight: "400",
									lineHeight: "37px",
									px: { xs: "2rem", md: "0" },
								}}
							>
								{t(item.name)}
							</Typography>
							<Typography
								sx={{
									fontSize: { xs: "16px", sm: "20px", md: "24px" },
									fontWeight: "400",
									lineHeight: "22px",
									px: { xs: "2rem", md: "0" },
								}}
							>
								{t(item.text)}
							</Typography>
							<Box
								sx={{
									width: { xs: "100%", md: "80%" },
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									flexDirection: { xs: "column", lg: "row" },
									px: { xs: ".2rem", sm: "2rem", md: "0" },
								}}
							>
								<Link
									href={`mailto:${item.email}`}
									target="_blank"
									style={{
										textDecoration: "none",
										color: "inherit",
										width: "100%",
									}}
								>
									<Box
										sx={{
											width: { xs: "100%", md: "100%" },
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											marginY: { xs: ".5rem", md: "0" },
										}}
									>
										{/* icon */}
										<MdEmail size={25} />
										<Typography
											sx={{
												fontSize: { xs: "16px", sm: "20px" },
												fontWeight: "400",
												lineHeight: "18px",
												width: { xs: "90%", lg: "90%" },
												textTransform: "capitalize",
											}}
										>
											{item.email}
										</Typography>
									</Box>
								</Link>
								<Link
									href={`https://api.whatsapp.com/send?phone=${item.iconPhone}`}
									target="_blank"
									style={{
										textDecoration: "none",
										color: "inherit",
										width: "100%",
									}}
								>
									<Box
										sx={{
											width: { xs: "100%", md: "100%" },
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											marginY: { xs: ".5rem", md: "0" },
										}}
									>
										{/* icon */}
										<RiWhatsappFill size={25} />
										<Typography
											sx={{
												width: { xs: "90%", lg: "90%" },
												fontSize: { xs: "16px", sm: "20px" },

												fontWeight: "400",
												lineHeight: "18px",
											}}
										>
											{item.phone}
										</Typography>
									</Box>
								</Link>
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</>
	);
};

export default ContactDetails;
