import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'app/js/main.jsx',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    nodeResolve({
      module: true,
      jsnext: true,
      main: true,
      extensions: [ '.js', '.json' ],
      preferBuiltins: false
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ],
  dest: 'app/dist/bundle.js',
  format: 'iife'
};
