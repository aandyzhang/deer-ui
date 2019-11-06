const outputModule = process.env.OUTPUT_MODULE;
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: outputModule || false
      }
    ],
	"@babel/preset-react",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
  ].filter(Boolean)
};