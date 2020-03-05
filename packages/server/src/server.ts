import App from "./app";
import config from "./configs/config";

const app = new App().application;

app.listen(config.port, () => {
  console.log("SERVER START");
});
