import Layout from "@/components/Layout/Layout";
import PaymentDetails from "@/components/PaymentDetails.tsx";

import { useRouter } from "next/router";


const PaymentPage = () => {
	const router = useRouter();
	return (
		<>
			<Layout>
				<PaymentDetails />
			</Layout>
		</>
	);
};

export default PaymentPage;
