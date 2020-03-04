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

import pkg from "./package.json";
import path from "path";

console.log(path.resolve(__dirname, "/src/assets/scss/base.scss"));
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
    // typescript({
    //   rollupCommonJSResolveHack: true,
    //   clean: true
    // }),
    // resolve: ["", ".vue", ".scss"],
    // entries: [
    //   {
    //     find: "base",
    //     replacement: path.resolve(__dirname, "src/assets/scss/base.scss")
    //   }
    // ]
    alias({
      entries: [
        {
          find: "base",
          replace: path.resolve(__dirname, "/src/assets/scss/base.scss")
        }
      ]
    }),
    resolve(),
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
