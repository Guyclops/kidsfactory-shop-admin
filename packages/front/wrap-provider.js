import React from "react";
import { Provider } from "mobx-react";
import store from "./src/stores/index";
import moment from "moment-timezone";
moment.tz.setDefault("Asia/Seoul");

const WrapProvider = ({ element }) => <Provider {...store}>{element}</Provider>;

export default WrapProvider;
