import React from "react";
import Layout from "../../components/layout";
import { withKnobs } from "@storybook/addon-knobs";
import WrapStorybook from "../wrap-storybook";

export default {
  title: "Component|Layout",
  component: Layout,
  operators: [withKnobs],
};

export const Default = () => {
  return (
    <WrapStorybook>
      <Layout>
        <div></div>
      </Layout>
    </WrapStorybook>
  );
};
