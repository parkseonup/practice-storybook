import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";
import { fn } from "@storybook/test";

const meta = {
  title: "Component/Button",
  component: Button,
  args: {
    onClick: fn(),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FillButton: Story = {
  args: {
    children: "Button",
  },
};

export const DisabledFillButton: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
};

export const OutlineButton: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const OutlineDisabledButton: Story = {
  args: {
    variant: "outline",
    children: "Button",
    disabled: true,
  },
};

export const GhostButton: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const GhostDisabledButton: Story = {
  args: {
    variant: "ghost",
    children: "Button",
    disabled: true,
  },
};
