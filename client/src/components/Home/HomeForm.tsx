import { useState } from "react";
import { Grid, Box, OutlinedInput } from "@mui/material";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
const HomeForm = () => {
	const { t } = useTranslation("home");

	const router = useRouter();
	const [hashtag, setHashtag] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		router.push(`/subscribe/${hashtag}`);
	};
	return (
		<>
			<Box
				display="flex"
				alignItems="center"
				sx={{
					width: { xs: "70%", md: "100%", xl: "100%" },
					justifyContent: {
						xs: "center",
						md: "space-evenly",
						xl: "space-around",
					},
				}}
				className="BoxInputHome"
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						marginTop: { xs: "1rem" },
					}}
					className="InputHomeMargin"
				>
					<Box
						sx={{
							width: {
								xs: "32px",
								sm: "46px",
								md: "46px",
								xl: "66px",
							},
							height: {
								xs: "32px",
								sm: "46px",
								md: "46px",
								xl: "66px",
							},
						}}
					>
						<img
							src="/icons/hashtag.svg"
							alt="View On Website Hashtag Icon"
							title="View On Website Hashtag Icon"
							style={{
								width: "100%",
								height: "100%",
							}}
						/>
					</Box>
					<form onSubmit={handleSubmit} className="cursor">
						<OutlinedInput
							value={hashtag}
							onChange={(e) => setHashtag(e.target.value)}
							sx={{
								width: "100%",
								height: "65px",
								fontSize: {
									xs: "18px",
									sm: "22px",
									md: "28px",
									xl: "38px",
								},
								lineHeight: "28px",
								marginY: ".5rem",
								".MuiOutlinedInput-notchedOutline": {
									border: "0",
									padding: "9px",
								},
								"&:hover > .MuiOutlinedInput-notchedOutline": {
									border: "0",
								},
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderWidth: "2px",
										transition: "border-width 0.5s",
									},
									"&:hover fieldset": {
										borderWidth: "2px",
									},
									"&.Mui-focused fieldset": {
										borderWidth: "2px",
									},
								},
								"& .MuiInputBase-input": {
									caretColor: "#000",
								},
							}}
							placeholder={`${t("keyword")}`}
							className="l"
						/>
						<Box className="i" />
					</form>
				</Box>
				<Box
					onClick={() => router.push(`/subscribe/${hashtag}`)}
					sx={{
						cursor: "pointer",
						width: {
							xs: "32px",
							sm: "46px",
							md: "46px",
							xl: "46px",
						},
						height: {
							xs: "32px",
							sm: "46px",
							md: "46px",
							xl: "46px",
						},
					}}
				>
					<img
						src="/icons/arrowUpRight.svg"
						alt="View On Website Arrow Up Left Icon"
						title="View On Website Arrow Up Left Icon"
						style={{
							width: "100%",
							height: "100%",
						}}
						className="left"
					/>
					<img
						src="/icons/arrowUpLeft.svg"
						alt="View On Website Arrow Up Left Icon"
						title="View On Website Arrow Up Left Icon"
						style={{
							width: "100%",
							height: "100%",
						}}
						className="right"
					/>
				</Box>
			</Box>
		</>
	);
};

export default HomeForm;
