const path = require("path");

module.exports = {
  entry: "./main.js", // Giriş noktası
  output: {
    path: path.resolve(__dirname, "dist"), // Çıkış dizini
    filename: "bundle.js", // Çıktı dosya adı
  },
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      fs: false, // veya uygun bir alternatif
    },
  },
  module: {
    rules: [
      // Diğer modül yükleyicileri ve kural tanımları
    ],
  },
};
