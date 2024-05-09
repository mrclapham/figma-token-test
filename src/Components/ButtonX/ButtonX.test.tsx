import { ButtonX } from "./ButtonX";
import { ButtonXProps } from "./ButtonX";
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
        } as ButtonXProps;
        render(<ButtonX {...props} />)
        expect(screen.getByText("Button")).toBeInTheDocument();
    });
});