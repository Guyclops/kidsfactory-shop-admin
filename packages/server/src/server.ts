import App from "./app";

const app = new App().application;

app.listen(3000, () => {
  console.log("SERVER START");
});
