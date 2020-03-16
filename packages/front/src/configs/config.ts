const initConfig = {
  // dev | prod
  type: "dev",
  url: {
    dev: `http://localhost:3000`,
    prod: `http://localhost:3000`,
  },
};

const { type, url } = initConfig;

const config = {
  type: type,
  url: url[initConfig.type],
};

export default config;
