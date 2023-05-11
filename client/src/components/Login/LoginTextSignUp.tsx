import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const LoginTextSignUp = () => {
	const { t } = useTranslation("common");

	return (
		<>
			<Box>
				<Typography
					sx={{
						fontSize: { xs: "13px", xl: "16px" },
						fontWeight: "300",
						lineHeight: "14px",
						marginY: "1rem",
						textAlign: "center",
					}}
				>
					{t("account")}
					<Link
						href={"/signup"}
						style={{
							textDecoration: "none",
							color: "#0090EC",
						}}
						title="View On Website SignUp"
					>
						{t("create_account")}
					</Link>
				</Typography>
			</Box>
		</>
	);
};

export default LoginTextSignUp;
