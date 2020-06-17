import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/js/app.js',
  output: {
    format: 'iife',
    file: 'demo/assets/js/app.min.js',
    name: 'abc',
  },
  plugins: [commonjs(), resolve(), babel(), terser()],
};
