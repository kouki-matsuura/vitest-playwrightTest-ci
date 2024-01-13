import { AddressForm } from "../../Checkout/AddressForm";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

it("チェックボックスをクリックするとcheck状態が切り替わる", async () => {
  render(<AddressForm />);
  const user = userEvent.setup();
  const start = performance.now();
  const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
  const end = performance.now();
  await user.click(checkbox);
  console.log("getbyrole:", end - start);
  expect(checkbox).toBeChecked();
});

it("チェックボックスをクリックするとcheck状態が切り替わる2", async () => {
  render(<AddressForm />);
  const user = userEvent.setup();
  const start = performance.now();
  const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
  const end = performance.now();
  await user.click(checkbox);
  console.log("getbyrole:", end - start);
  expect(checkbox).toBeChecked();
});

it("チェックボックスをクリックするとcheck状態が切り替わる3", async () => {
  render(<AddressForm />);
  const user = userEvent.setup();
  const start = performance.now();
  const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
  const end = performance.now();
  await user.click(checkbox);
  console.log("getbyrole:", end - start);
  expect(checkbox).toBeChecked();
});
