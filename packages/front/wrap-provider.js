import React from "react";
import { Provider } from "mobx-react";
import store from "./src/stores/index";

const WrapProvider = ({ element }) => <Provider {...store}>{element}</Provider>;

export default WrapProvider;
