module.exports = {
  presets: ['@babel/preset-env'],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-transform-runtime"],
    ["@babel/plugin-syntax-jsx"],
  ],
};
