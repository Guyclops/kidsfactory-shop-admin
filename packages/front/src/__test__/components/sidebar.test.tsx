import React from "react";
import renderer from "react-test-renderer";

import Sidebar from "../../components/sidebar";

describe("Sidebar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Sidebar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
