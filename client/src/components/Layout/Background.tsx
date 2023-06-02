import { Box } from "@mui/material";
import { useRouter } from "next/router";

export const Background = () => {
	return (
		<Box
			sx={{
				width: "100vw",
			}}
		>
			<Box
				sx={{
					position: "fixed",
					height: "100vh",
					width: "100%",
					maxWidth: "100%",
					minHeight: "100%",
					background: "url('/images/swirl.webp')",
					backgroundPositionY: {
						xs: "-1544px",
						sm: "-1544px",
						md: "-1100px",
						xl: "-1000px",
					},
					backgroundPositionX: { xs: "-800px", md: "-600px", xl: "-300px" },
					backgroundRepeat: "no-repeat",
				}}
				className="ImageBgHom"
			/>
		</Box>
	);
};
export const BackgroundHome = () => {
	const { locale } = useRouter();

	return (
		<Box
			sx={{
				width: "100vw",
			}}
		>
			{locale === "ar" ? (
				<Box
					sx={{
						position: { xs: "absolute", sm: "fixed" },
						height: { xs: "890px", sm: "100vh" },
						width: { xs: "503px", sm: "100%" },
						maxWidth: { sm: "100%" },
						minHeight: { sm: "100%" },
						background: "url('/images/swirl.webp')",
						backgroundPositionY: {
							xs: "-1056px",
							sm: "-1044px",
							md: "-1100px",
							xl: "-1000px",
						},
						backgroundPositionX: { xs: "-1006px", md: "-600px", xl: "-300px" },
						backgroundRepeat: "no-repeat",
					}}
					className="ImageBgHom"
				/>
			) : (
				<Box
					sx={{
						position: { xs: "absolute", sm: "fixed" },
						height: { xs: "890px", sm: "100vh" },
						width: { xs: "867px", sm: "100%" },
						maxWidth: { sm: "100%" },
						minHeight: { sm: "100%" },
						background: "url('/images/swirl.webp')",
						backgroundPositionY: {
							xs: "-1123px",
							sm: "-1044px",
							md: "-1100px",
							xl: "-1000px",
						},
						backgroundPositionX: { xs: "-974px", md: "-600px", xl: "-300px" },
						backgroundRepeat: "no-repeat",
					}}
					className="ImageBgHom"
				/>
			)}
		</Box>
	);
};
