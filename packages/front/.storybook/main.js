module.exports = {
  stories: ["../**/*.stories.(js|mdx|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-docs",
    "@storybook/preset-typescript",
    "@storybook/addon-viewport",
  ],
  webpackFinal: async config => {
    config.resolve.mainFields = ["browser", "module", "main"];
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]],
            plugins: [
              require.resolve("@babel/plugin-proposal-class-properties"),
              require.resolve("babel-plugin-remove-graphql-queries"),
            ],
          },
        },
        require.resolve("react-docgen-typescript-loader"),
      ],
    });
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
