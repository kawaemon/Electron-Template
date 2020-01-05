import * as path from "path";

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
