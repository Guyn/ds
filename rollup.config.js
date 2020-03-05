import vue from "rollup-plugin-vue";
import external from "rollup-plugin-peer-deps-external";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import resolve from "@rollup/plugin-node-resolve";
// import typescript from "rollup-plugin-typescript2";
import alias from "@rollup/plugin-alias";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import includePaths from "rollup-plugin-includepaths";

import pkg from "./package.json";
import path from "path";

console.log(path.resolve(__dirname, "/src/assets/scss/base.scss"));

const includePathOptions = {
  include: {},
  paths: ["src", "src/components/", "src/assets/", "src/assets/scss"],
  external: [],
  extensions: [".js", ".svg", ".vue", ".scss", ".css"]
};

export default {
  input: "src/components/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    vue(),
    external(),
    url(),
    svgr(),
    includePaths(includePathOptions),
    resolve(),
    alias({
      entries: [
        {
          find: "@style",
          replacement: path.resolve(__dirname, "src/assets/scss/")
        }
      ]
    }),
    postcss({
      extract: false
    }),
    commonjs(),
    terser(),
    copy({
      targets: [{ src: "./src/assets/", dest: "./dist" }]
    })
  ]
};
