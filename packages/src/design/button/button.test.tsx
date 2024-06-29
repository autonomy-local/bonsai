import { suite } from "uvu";
import * as assert from "uvu/assert";

import { render, fireEvent, waitFor } from "solid-testing-library";
import { isInDocument, hasStyle } from "solid-dom-testing";

import { CustomButton } from "./button";
import type { CustomButtonProps } from "./button";


const test = suite("CustomButton");

test.before.each(() => {
	document.body.innerHTML = "";
});

test("default", async () => {
	const props: CustomButtonProps = {
		text: "Default",
		mode: "default",
		eventEmitter: () => {
			console.log("clicked");
		},
		disabled: false,
		description: "default",
	};

	const { getByText } = render(() => <CustomButton {...props} />);
	const button = getByText("Default");

	assert.ok(isInDocument(button));
});

test("secondary", async () => {
	const props: CustomButtonProps = {
		text: "Secondary",
		mode: "secondary",
		eventEmitter: () => {
			console.log("clicked");
		},
		disabled: false,
		description: "secondary",
	};

	const { getByText } = render(() => <CustomButton {...props} />);
	const button = getByText("Secondary");

	assert.ok(isInDocument(button));
});

test("warning", async () => {
	const props: CustomButtonProps = {
		text: "Warning",
		mode: "warning",
		eventEmitter: () => {
			console.log("clicked");
		},
		disabled: false,
		description: "warning",
	};

	const { getByText } = render(() => <CustomButton {...props} />);
	const button = getByText("Warning");

	assert.ok(isInDocument(button));
});

test("danger", async () => {
	const props: CustomButtonProps = {
		text: "Danger",
		mode: "danger",
		eventEmitter: () => {
			console.log("clicked");
		},
		disabled: false,
		description: "danger",
	};

	const { getByText } = render(() => <CustomButton {...props} />);
	const button = getByText("Danger");

	assert.ok(isInDocument(button));
});

test.run();