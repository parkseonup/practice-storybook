import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      description: "버튼의 스타일",
    },
    children: {
      control: "text",
      description: "버튼에 출력될 내용",
    },
    disabled: {
      control: "boolean",
      description: "버튼 사용 가능 여부",
    },
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
