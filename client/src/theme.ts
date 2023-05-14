import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const ibm = IBM_Plex_Sans_Arabic({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["IBM Plex Sans Arabic", "sans-serif"],
	preload: false,
});

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#556cd6",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
	},
	typography: {
		fontFamily: ibm.style.fontFamily,
	},
});

export default theme;
