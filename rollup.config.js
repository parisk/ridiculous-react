import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
  entry: 'static/js/main.jsx',
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
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  dest: 'static/dist/bundle.js',
  format: 'iife'
};
