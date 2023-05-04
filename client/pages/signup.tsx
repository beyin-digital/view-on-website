import { Container, Grid } from "@mui/material";

// layout
import Layout from "@/components/Layout/Layout";

// components
import SignupForm from "@/components/Signup/SignupForm";
import SignupDetails from "@/components/Signup/SignupDetails";

const SignUpPage = () => {
	return (
		<Layout>
			<Grid
				container
				sx={{
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					transform: "skewX(16deg)",
				}}
			>
				<Container
					sx={{
						width: { xs: "100%", md: "70%", xl: "70%" },
						height: "100%",
						marginRight: { xs: "", md: "7rem", xl: "7rem" },
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-around",
						marginY: { xs: "0rem", sm: "5rem", md: "1px", xl: "1px" },
					}}
				>
					<SignupDetails />

					<SignupForm />
				</Container>
			</Grid>
		</Layout>
	);
};

export default SignUpPage;
