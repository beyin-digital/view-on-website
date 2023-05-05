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
					transform: {
						xs: "skew(10deg, 0deg)",
						sm: "skew(16deg, 0deg)",
						md: "skew(16deg, 0deg)",
						xl: "skew(16deg, 0deg)",
					},
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
						marginY: { xs: "0rem", sm: "0rem", md: "1px", xl: "1px" },
						marginX:"1rem"
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
