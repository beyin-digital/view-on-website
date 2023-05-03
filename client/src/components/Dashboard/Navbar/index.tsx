"use client";
import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

const Navbar = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	const hashtags = [
		{
			keyword: "VOW",
			slug: "vow",
		},
		{
			keyword: "BE",
			slug: "be",
		},
		{
			keyword: "AI",
			slug: "ai",
		},
		{
			keyword: "Pro",
			slug: "pro",
		},
		{
			keyword: "Smart Device",
			slug: "smart-device",
		},
	];
	return (
		<Box
			sx={{
				position: "sticky",
				top: 0,
				zIndex: 20,
				width: "100%",
				height: "80px",
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-end",
				margin: "0 auto 26px auto",
			}}
		>
			<Box
				sx={{
					height: "100%",
					width: "1544px",
					display: "flex",
					alignItems: "center",
					paddingLeft: "26px",
					marginRight: "24px",
					background: "rgba(251, 251, 251, 0.5)",
					border: "1px solid #E3E3E3",
					backdropFilter: "blur(100px)",
					borderRadius: "0px 0px 15px 15px",
				}}
			>
				<Typography fontSize='32px' fontWeight={600}>
					My #Hashtags
				</Typography>
				<Tabs
					sx={{
						marginLeft: "45px",
						height: "100%",
					}}
					value={value}
					onChange={handleChange}
					variant='scrollable'
					scrollButtons={false}
				>
					{hashtags.map((hashtag, index) => (
						<Tab
							sx={{
								minWidth: "163px",
								fontSize: "24px",
								marginTop: "20px",
								fontWeight: value === index ? 600 : 400,
								color: "black",
							}}
							key={index}
							label={`#` + hashtag.keyword}
						/>
					))}
				</Tabs>
			</Box>
		</Box>
	);
};

export default Navbar;
