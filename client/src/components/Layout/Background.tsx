import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export const Background = () => {
	const { locale } = useRouter();

	return (
		<>
			<Box
				sx={
					{
						// width: "100%",
					}
				}
			>
				<Image
					fill
					src="/images/swirl.svg"
					alt="View On Website Background"
					title="View On Website Background"
					style={{
						top: "-39rem",
						// bottom: "5rem",
						position: "absolute",
					}}
					className="ImageMobile"
				/>
			</Box>
		</>
	);
};

export const BackgroundHome = () => {
	const { locale } = useRouter();

	return (
		<>
			<Box
				sx={{
					display: { xs: "block", sm: "none" },
					width: "100%",

					position: "relative",
				}}
			>
				<img
					src="/images/swirl.svg"
					alt="View On Website Background"
					title="View On Website Background"
					style={{
						top: "-7rem",
						left: "-19rem",
						position: "absolute",
						width: "800px",
					}}
					className="BackgroundHome"
				/>
			</Box>
			<Box
				sx={{
					display: { xs: "none", xl: "block" },
					width: "100%",

					position: "relative",
				}}
			>
				{locale === "ar" ? (
					<img
						src="/images/swirl.svg"
						alt="View On Website Background"
						title="View On Website Background"
						style={{
							bottom: "-54rem",
							left: "12rem",
							position: "absolute",
							width: "100%",
						}}
					/>
				) : (
					<img
						src="/images/swirl.svg"
						alt="View On Website Background"
						title="View On Website Background"
						style={{
							bottom: "-52rem",
							left: "5rem",
							position: "absolute",
							width: "100%",
						}}
					/>
				)}
			</Box>
			<Box
				sx={{
					display: { xs: "none", md: "block", xl: "none" },
					width: "100%",
					position: "relative",
				}}
			>
				{locale === "ar" ? (
					<img
						src="/images/swirl.svg"
						alt="View On Website Background"
						title="View On Website Background"
						style={{
							bottom: "-45rem",
							left: "5rem",
							position: "absolute",
							width: "100%",
						}}
					/>
				) : (
					<img
						src="/images/swirl.svg"
						alt="View On Website Background"
						title="View On Website Background"
						style={{
							bottom: "-45rem",
							left: "5rem",
							position: "absolute",
							width: "100%",
						}}
					/>
				)}
			</Box>
			<Box
				sx={{
					display: { xs: "none", sm: "block", md: "none", xl: "none" },
					width: "100%",
					position: "relative",
				}}
			>
				{locale === "ar" ? (
					<img
						src="/images/swirl.svg"
						alt="View On Website Background"
						title="View On Website Background"
						style={{
							bottom: "-40rem",
							left: "-3rem",
							position: "absolute",
							width: "100%",
						}}
					/>
				) : (
					<img
						src="/images/swirl.svg"
						alt="View On Website Background"
						title="View On Website Background"
						style={{
							top: "-6rem",
							left: "-3rem",
							position: "absolute",
							width: "800px",
						}}
					/>
				)}
			</Box>
		</>
	);
};
