import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "./i18n";
import App from "./App";
import StoreWrapper from "./store";

test("render /feeinfo page", () => {
  render(
    <StoreWrapper>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </StoreWrapper>
  );
  const accountText = screen.getByText(/kodability/i);
  expect(accountText).toBeInTheDocument();
});
