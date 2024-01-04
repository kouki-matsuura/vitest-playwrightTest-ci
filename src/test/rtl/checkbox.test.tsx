import { AddressForm } from "../../Checkout/AddressForm";
import { fireEvent, render } from "@testing-library/react";
import { it, expect } from "vitest";

it("チェックボックスをクリックするとcheck状態が切り替わる", async () => {
  const { container } = render(<AddressForm />);
  const checkbox = container.querySelector(
    'input[name="saveAddress"]'
  ) as HTMLInputElement;
  fireEvent.click(checkbox);

  expect(checkbox.checked).toBe(true);
});
