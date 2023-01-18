import {
	render,
	screen,
	waitFor,
} from "../../../test-utils/testing-library-utils";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import userEvent from "@testing-library/user-event";

test("handles error for scoops and toppings routes", async () => {
	server.resetHandlers(
		rest.get("http://54.90.34.166:3030/scoops", (req, res, ctx) =>
			res(ctx.status(500))
		),
		rest.get("http://54.90.34.166:3030/toppings", (req, res, ctx) =>
			res(ctx.status(500))
		)
	);

	render(<OrderEntry setOrderPhase={jest.fn()} />);

	await waitFor(async () => {
		const alerts = await screen.findAllByRole("alert");
		expect(alerts).toHaveLength(2);
	});
});

test("disable order button if there are no scoops ordered", async () => {
	const user = userEvent.setup();
	render(<OrderEntry setOrderPhase={jest.fn()} />);

	// order button should be disabled at first, even before options load
	const orderButton = screen.getByRole("button", { name: /order sundae/i });
	expect(orderButton).toBeDisabled();

	// expect button to be enabled after adding scoop
	const vanillaInput = await screen.findByRole("spinbutton", {
		name: "Vanilla",
	});
	await user.clear(vanillaInput);
	await user.type(vanillaInput, "1");
	expect(orderButton).toBeEnabled();

	// expect button to be disabled again after removing scoop
	await user.clear(vanillaInput);
	await user.type(vanillaInput, "0");
	expect(orderButton).toBeDisabled();
});
