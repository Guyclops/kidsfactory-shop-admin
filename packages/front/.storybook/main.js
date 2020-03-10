module.exports = {
  stories: ["../**/*.stories.(js|mdx|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-docs",
    "@storybook/preset-typescript",
    "@storybook/addon-viewport",
  ],
  global: {
    ___loader: {
      enqueue: () => {},
      hovering: () => {},
    },
    __PATH_PREFIX__: "",
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]],
          },
        },
        require.resolve("react-docgen-typescript-loader"),
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
