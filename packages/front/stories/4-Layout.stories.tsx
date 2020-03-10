import React from "react";
import Layout from "../src/components/layout";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Component|Layout",
  component: Layout,
  operators: [withKnobs],
};

export const Default = () => {
  return (
    <Layout>
      <div></div>
    </Layout>
  );
};
