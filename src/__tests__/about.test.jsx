import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import About from "../components/About/About";
test("should render about elements ", () => {
  render(<About />);
  const listElement = screen.getByTestId("about-test-1");
  expect(listElement).toBeInTheDocument();
});
