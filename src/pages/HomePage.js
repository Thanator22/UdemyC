import { useState } from "react";
import Container from "react-bootstrap/Container";

import OrderConfirmation from "./confirmation/OrderConfirmation";
import OrderEntry from "./entry/OrderEntry";
import OrderSummary from "./summary/OrderSummary";

import { OrderDetailsProvider } from "../contexts/OrderDetails";
function HomePage() {
	const [orderPhase, setOrderPhase] = useState("inProgress");

	let Component = OrderEntry; // default to order page
	switch (orderPhase) {
		case "inProgress":
			Component = OrderEntry;
			break;
		case "review":
			Component = OrderSummary;
			break;
		case "completed":
			Component = OrderConfirmation;
			break;
		default:
	}
	return (
		<OrderDetailsProvider>
			<Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
		</OrderDetailsProvider>
	);
}
export default HomePage;
