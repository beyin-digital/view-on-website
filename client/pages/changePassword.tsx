import { ButtonChange } from "@/components/Button";
import ChangePasswordDetails from "@/components/ChangePassword/ChangePasswordDetails";
import ChangePasswordForm from "@/components/ChangePassword/ChangePasswordForm";
import Layout from "@/components/Layout/Layout";
import { Box } from "@mui/material";

const ChangePassword = () => {
	return (
		<>
			<Layout>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						width: "100%",
						height: "100%",
						justifyContent: "center",
						paddingX: "1rem",
						transform: "skew(16deg, 0deg)",
					}}
				>
					<Box
						sx={{
							width: { xs: "100%", md: "80%", xl: "75%" },
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "end",
						}}
					>
						<Box
							sx={{
								width: "728px",
								height: "600px",
								paddingX: "1rem",
							}}
						>
							<ChangePasswordDetails />
							<ChangePasswordForm />
							<Box
								sx={{
									marginY: {xs:"4rem",md:"2rem",xl:"4rem"},
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<ButtonChange
									name="Change password"
									onClick={() => {
										// router.push("/");
									}}
								/>
							</Box>
						</Box>
					</Box>
				</Box>
			</Layout>
		</>
	);
};

export default ChangePassword;
