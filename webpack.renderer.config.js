// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  optimization: {
    splitChunks: {
      name: "library",
      chunks: "initial"
    }
  },
  resolve: {
    alias: {
      "@static": path.resolve(__dirname, "static")
    }
  }
};
