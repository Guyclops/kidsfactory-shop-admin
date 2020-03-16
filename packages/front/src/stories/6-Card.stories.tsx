import React from "react";
import InfoCard from "../components/card/InfoCard";
import { Card } from "@material-ui/core";
import { text, withKnobs } from "@storybook/addon-knobs";
import MiniCard from "../components/card/MiniCard";

export default {
  title: "Component|Card",
  component: Card,
  decorators: [withKnobs],
};

export const Default = () => {
  const title = text("title", "제목");
  return <InfoCard title={title} />;
};

export const Mini = () => {
  const title = text("title", "제목");
  const content = text("content", "내용");
  const color = text("color", "rgb(32, 83, 134)");
  return <MiniCard title={title} content={content} color={color} />;
};
