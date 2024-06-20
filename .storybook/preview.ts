import type { Preview } from "@storybook/react";
import "../src/index.css";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#000" },
        { name: "light", value: "#fff" },
      ],
    },
  },
  tags: ["autodocs"],
};

export default preview;
