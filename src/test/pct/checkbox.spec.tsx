import { test, expect } from "@playwright/experimental-ct-react";
import { AddressForm } from "../../Checkout/AddressForm";

test("チェックボックスをクリックするcheck状態が切り替わる", async ({
  mount,
}) => {
  const component = await mount(<AddressForm />);
  const start = performance.now();
  const checkbox = component.getByRole("checkbox");
  const end = performance.now();
  await checkbox.click();
  console.log("getbyrole:", end - start);
  expect(checkbox).toBeChecked();
});

test("チェックボックスをクリックするcheck状態が切り替わる2", async ({
  mount,
}) => {
  const component = await mount(<AddressForm />);
  const start = performance.now();
  const checkbox = component.getByRole("checkbox");
  const end = performance.now();
  await checkbox.click();
  console.log("getbyrole:", end - start);
  expect(checkbox).toBeChecked();
});

test("チェックボックスをクリックするcheck状態が切り替わる3", async ({
  mount,
}) => {
  const component = await mount(<AddressForm />);
  const start = performance.now();
  const checkbox = component.getByRole("checkbox");
  const end = performance.now();
  await checkbox.click();
  console.log("getbyrole:", end - start);
  expect(checkbox).toBeChecked();
});
