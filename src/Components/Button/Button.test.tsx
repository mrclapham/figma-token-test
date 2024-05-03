import { Button } from "./Button";
import { ButtonProps } from "./Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button", () => {
    it("should render the button", () => {
        const props = {
            onclick: () => {
                console.log("Button clicked");
            },
            label: "Button",
            variant: "primary",
            size: "medium",
        } as ButtonProps;
        render(<Button {...props} />)
        expect(screen.getByText("Button")).toBeInTheDocument();
    });
});