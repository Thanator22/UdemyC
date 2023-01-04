import { render, screen } from "@testing-library/react";
import HeaderCartButton from "./HeaderCartButton";

test("render headercartbutton", () => {
	render(<HeaderCartButton />);

	const ele = screen.getByText("Your Cart", { exact: false });
	expect(ele).toBeInTheDocument();
});
