import * as React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../index";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "버튼 컴포넌트",
  },
};

export const Text = () => {
  const name = text("name", "title");
  return (
    <Button onClick={action("clicked")} name={name}>
      Hello Button
    </Button>
  );
};

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
