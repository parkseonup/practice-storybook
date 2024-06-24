import { Meta, StoryObj } from "@storybook/react";
import Icon, { Icons } from "../components/Icon";

const meta = {
  title: "Assets/Icon",
  component: Icon,
  argTypes: {
    type: {
      control: "select",
      description: "아이콘 종류",
    },
    size: {
      control: "select",
      description: "아이콘 사이즈",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallIcon: Story = {
  args: {
    type: "MENU",
    size: "sm",
  },
};

export const MediumIcon: Story = {
  args: {
    type: "MENU",
    size: "md",
  },
};

export const LargeIcon: Story = {
  args: {
    type: "MENU",
    size: "lg",
  },
};

export const IconTypes = {
  render: () => {
    return (
      <div className="flex gap-4">
        {(Object.keys(Icons) as (keyof typeof Icons)[]).map((iconType) => (
          <button
            className="flex flex-col items-center justify-center gap-2 w-[120px] h-[68px] border border-gray-500 rounded-md"
            onClick={() => copyText(iconType)}
          >
            <Icon type={iconType} size="md" />
            <p className="text-white text-[10px]">{iconType}</p>
          </button>
        ))}
      </div>
    );
  },
};

const copyText = (text: string) => {
  try {
    navigator.clipboard.writeText(text);
    alert(`클립보드에 "${text}"이 복사되었습니다.`);
  } catch (error) {
    alert(`"${text}" 복사 실패`);
  }
};
