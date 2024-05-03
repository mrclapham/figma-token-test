import type { Meta, StoryObj } from "@storybook/react";
import { ButtonMod } from "./ButtonMod";

const meta = {
  title: "Components/ButtonMod",
  component: ButtonMod,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: () => {
      console.log("Button clicked");
    },
  },
} satisfies Meta<typeof ButtonMod>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    variant: "secondary",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Button",
  },
};
