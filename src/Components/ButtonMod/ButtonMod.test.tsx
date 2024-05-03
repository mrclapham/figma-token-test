import { ButtonMod } from "./ButtonMod";
import { ButtonModProps } from "./ButtonMod";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("should render the button", () => {
    const props = {
      onClick: () => {
        console.log("Button clicked");
      },
      label: "Button",
      variant: "primary",
      size: "md",
    } as ButtonModProps;
    render(<ButtonMod {...props} />);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });
});