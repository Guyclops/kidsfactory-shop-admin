import React from "react";
import { Provider } from "mobx-react";
import store from "../stores";

const WrapStorybook = props => <Provider {...store}>{props.children}</Provider>;

export default WrapStorybook;
