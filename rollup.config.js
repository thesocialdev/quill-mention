import localResolve from "rollup-plugin-local-resolve";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "docs/quill.mention.min.js",
        format: "umd",
        name: "QuillMention",
        plugins: [terser()],
        globals: {
          quill: "Quill",
        },
      },
    ],
    external: ["quill"],
    plugins: [
      localResolve(),
      babel({
        exclude: ["node_modules/**"],
      }),
      postcss({
        extract: true,
        minimize: true,
      }),
    ],
  },
  {
    input: "src/index.js",
    output: [
      {
        file: pkg.main,
        format: "umd",
        name: "QuillMention",
      },
    ],
    external: ["quill"],
    plugins: [
      localResolve(),
      babel({
        exclude: ["node_modules/**"],
      }),
      postcss({
        extract: "quill.mention.css",
      }),
    ],
  },
];
