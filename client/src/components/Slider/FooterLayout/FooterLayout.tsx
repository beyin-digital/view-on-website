import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Box } from "@mui/material";
import DetailsFooter from "./DetailsFooter";

const FooterLayout = () => {
	const { locale } = useRouter();

	return (
		<>
			{locale === "ar" ? (
				<Box
					sx={{
						height: { xs: "100%", md: "100px", xl: "100px" },
						width: "100%",
						display: "flex",
						alignItems: { xs: "", md: "center", xl: "center" },
						justifyContent: "space-between",
						flexDirection: {
							xs: "column",
							md: "row-reverse",
							xl: "row-reverse",
						},
					}}
				>
					<DetailsFooter />
				</Box>
			) : (
				<Box
					sx={{
						height: { xs: "100%", md: "100px", xl: "100px" },
						width: "100%",
						display: "flex",
						alignItems: { xs: "", md: "center", xl: "center" },
						justifyContent: "space-between",
						flexDirection: { xs: "column", md: "row", xl: "row" },
					}}
				>
					<DetailsFooter />
				</Box>
			)}
		</>
	);
};

export default FooterLayout;
