import React from "react";
import { Provider } from "mobx-react";
import Store from "./src/stores/index";

const root = new Store();

const WrapProvider = ({ element }) => <Provider {...root}>{element}</Provider>;

export default WrapProvider;
