import { Meta, StoryObj } from "@storybook/react";
import IconButton from "../components/IconButton";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  args: {
    type: "MENU",
    size: "sm",
    onClick: fn(),
  },
  argTypes: {
    type: {
      control: "select",
      description: "아이콘 종류",
    },
    size: {
      control: "select",
      description: "버튼 사이즈",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
