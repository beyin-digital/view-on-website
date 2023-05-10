import { Box } from "@mui/material";
import Image from "next/image";

interface Props {
	children: React.ReactNode;
}

const LayoutHomeBg: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Box
				sx={{
					width: "100%",
					height: "300px",
					display: "flex",
					alignItems: "start",
					justifyContent: "end",
					marginLeft: { xl: "-3rem" },
				}}
			>
				<Box
					sx={{
						width: { xs: "100%", md: "100%", xl: "100%" },
					}}
					className="BoxHomeLayoutCenter"
				>
					<Box
						sx={{
							width: { xs: "100%", sm: "500px", md: "740px", xl: "740px" },
							height: {
								xs: "",
								sm: "300px",
								md: "370px",
								xl: "360px",
							},
							display: "flex",
							alignItems: "center",
							justifyContent: {
								xs: "",
								sm: "",
								md: "center",
								xl: "center",
							},
							flexDirection: "column",
							backgroundRepeat: "no-repeat",
							backgroundSize: "contain",
							position: "relative",
							transform: {
								xs: "skew(16deg, 0deg)",
								sm: "skew(16deg, 0deg)",
								md: "skew(16deg, 0deg)",
								xl: "skew(16deg, 0deg)",
							},
							backgroundImage: "url('/images/cut-out-parallelogram.png')",
						}}
						className="parallelogram"
					>
						{children}
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default LayoutHomeBg;
