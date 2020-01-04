import babel from "rollup-plugin-babel";
module.exports = {
  input: "src/index.js",
  external: ["gsap"],
  output: {
    globals: { gsap: "gsap" },
    file: "dist/index.js",
    format: "umd",
    name: "timelineDown"
  },
  plugins: [babel()]
};
