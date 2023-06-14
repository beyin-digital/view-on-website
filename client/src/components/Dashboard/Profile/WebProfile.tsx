import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/contexts/userContext";
import {
	Box,
	Avatar,
	Typography,
	Divider,
	OutlinedInput,
	Select,
	MenuItem,
	Button,
} from "@mui/material";

import { useTranslation } from "react-i18next";
import { countries } from "@/utils/countries";

const WebProfile = () => {
	const { t } = useTranslation("profile");

	const router = useRouter();
	const { updateUser, user, token } = useContext(UserContext);

	const [values, setValues] = useState({
		fullName: "",
		organisation: "",
		country: "",
	});

	useEffect(() => {
		if (user) {
			setValues({
				fullName: user?.fullName,
				organisation: user?.organisation,
				country: user?.country as string,
			});
		}
	}, []);

	if (!token) {
		return <></>;
	}
	return (
		<>
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
						variant="square"
					></Avatar>
					<Typography
						sx={{
							fontSize: "36px",
							fontWeight: "bold",
							marginLeft: "50px",
						}}
					>
						{user?.fullName}
					</Typography>
				</Box>
				<Typography sx={{ fontSize: "24px" }}>{user?.email}</Typography>
			</Box>
			<Divider sx={{ marginTop: "38px" }} />
			<Box
				sx={{
					marginTop: "67px",

					width: "650px",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
				}}
				className="profileDashboard"
			>
				<Typography fontSize="36px">{t("change")}</Typography>

				<OutlinedInput
					value={values?.fullName}
					placeholder={`${t("name")}`}
					sx={{
						height: "57px",
						width: "100%",
						marginTop: "45px",
						fontSize: "24px",
						background: "white",
						borderRadius: "15px",
						".MuiOutlinedInput-notchedOutline": {
							border: "0",
							padding: "9px",
						},
						"&:hover > .MuiOutlinedInput-notchedOutline": {
							border: "0",
						},
					}}
					onChange={(e) => {
						setValues({ ...values, fullName: e.target.value });
					}}
				/>
				<OutlinedInput
					value={values?.organisation}
					placeholder={`${t("organization")}`}
					sx={{
						height: "57px",
						width: "100%",
						marginTop: "24px",
						fontSize: "24px",
						background: "white",
						borderRadius: "15px",
						".MuiOutlinedInput-notchedOutline": {
							border: "0",
							padding: "9px",
						},
						"&:hover > .MuiOutlinedInput-notchedOutline": {
							border: "0",
						},
					}}
					onChange={(e) => {
						setValues({ ...values, organisation: e.target.value });
					}}
				/>
				<Select
					displayEmpty
					value={values.country}
					onChange={(e) => {
						setValues({ ...values, country: e.target.value });
					}}
					renderValue={(selected: any) => {
						if (selected?.length === 0) {
							return (
								<Typography
									sx={{
										fontSize: "24px",
										textAlign: "left",
									}}
								>
									{t("country")}
								</Typography>
							);
						}
						return selected;
					}}
					sx={{
						height: "57px",
						width: "100%",
						marginTop: "24px",
						background: "white",
						borderRadius: "15px",
						".MuiOutlinedInput-notchedOutline": {
							border: "0",
						},
						"&:hover > .MuiOutlinedInput-notchedOutline": {
							border: "0",
							borderColor: "transparent",
						},
					}}
					placeholder={`${t("country")}`}
				>
					<MenuItem disabled value="">
						{/* State */}
						{t("country")}
					</MenuItem>
					{countries.map((country) => (
						<MenuItem value={country?.country} key={country?.country}>
							{country?.country}
						</MenuItem>
					))}
				</Select>

				<Box
					sx={{
						width: "100%",
						display: "flex",
						flexDirection: "row-reverse",
						marginTop: "32px",
					}}
				>
					<Button
						onClick={() => {
							if (user) {
								updateUser({
									fullName: values.fullName,
									organisation: values.organisation,
									country: values.country,
								});
							}
						}}
						disabled={
							values.fullName === user?.fullName &&
							values.organisation === user?.organisation &&
							values.country === user?.country
						}
						disableRipple
						variant="contained"
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
							"&: hover": {
								background: "#0090EC",
							},
						}}
					>
						{t("button_profile")}
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default WebProfile;
