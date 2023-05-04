import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Footer = ({ onClick }: any) => {
	return (
		<footer>
			<Box
				sx={{
					width: "100%",
					display: { xs: "", md: "flex", xl: "flex" },
					flexDirection: { xs: "column", md: "row", xl: "row" },
					alignItems: "start",
					justifyContent: {
						xs: "space-between",
						md: "space-between",
						xl: "space-between",
					},
				}}
			>
				<Box
					sx={{
						width: "100%",
						display: { xs: "flex", md: "flex", xl: "flex" },
						alignItems: "center",
						justifyContent: { xs: "center", md: "start", xl: "start" },
						margin: { xs: " .1rem 0", sm: "2rem 0", md: "0", xl: "0" },
					}}
				>
					<Image
						src="/icons/facebook.svg"
						alt=""
						height={30}
						width={30}
						style={{
							margin: "0 2rem",
						}}
					/>
					<Image
						src="/icons/twitter.svg"
						alt=""
						height={30}
						width={30}
						style={{
							margin: "0 2rem",
						}}
					/>
					<Image
						src="/icons/insta.svg"
						alt=""
						height={30}
						width={30}
						style={{
							margin: "0 2rem",
						}}
					/>
				</Box>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: {
							xs: "center",
							md: "space-between",
							xl: "space-between",
						},
					}}
				>
					<Box
						sx={{
							width: "253px",
							height: "60px",
							lineHeight: "92.5%",
							background: "linear-gradient(270deg, #0090EC 0%, #31E716 100%)",
							borderRadius: "11px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							position: "relative",
							bottom: "-1rem",
						}}
						onClick={onClick}
					>
						<Typography
							fontSize="32px"
							fontWeight="400"
							lineHeight="92.5%"
							textAlign="center"
						>
							Premium
						</Typography>
						{/* <TemporaryDrawer open={drawerOpen} onClose={handleDrawerClose} /> */}
					</Box>
				</Box>
				<Box
					sx={{
						width: "100%",
						display: { xs: "none", xl: "flex" },
						alignItems: "center",
						justifyContent: { xs: "center", xl: "space-around" },
					}}
				>
					<Box
						sx={{
							border: "1px solid #343132",
							borderRadius: "34px",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-around",
							width: "143px",
						}}
					>
						<Typography
							fontSize="20px"
							fontWeight="400"
							lineHeight="32px"
							textAlign="center"
						>
							Learn More
						</Typography>
						<Image src="/icons/i.svg" alt="" width={20} height={20} />
					</Box>
					<Typography
						fontSize="20px"
						fontWeight="400"
						lineHeight="32px"
						textAlign="center"
					>
						T&C
					</Typography>
					<Typography
						fontSize="20px"
						fontWeight="400"
						lineHeight="32px"
						textAlign="center"
					>
						Privacy Policy
					</Typography>
					<Typography
						fontSize="20px"
						fontWeight="400"
						lineHeight="32px"
						textAlign="center"
					>
						Contact Us
					</Typography>
				</Box>
			</Box>
		</footer>
	);
};

export default Footer;
