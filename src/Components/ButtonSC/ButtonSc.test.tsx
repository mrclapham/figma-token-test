import { ButtonSc } from "./ButtonSc";
import { ButtonScProps } from "./ButtonSc";
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
    } as ButtonScProps;
    render(<ButtonSc {...props} />);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });
});