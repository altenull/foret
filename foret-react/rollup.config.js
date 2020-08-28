import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url';

import packageJson from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

export default {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.module,
      format: 'es',
    },
  ],
  plugins: [
    peerDepsExternal(), // prevents Rollup from bundling the peer dependencies we've defined in package.json
    resolve(), // efficiently bundles third party dependencies we've installed in node_modules
    commonjs(), // enables transpilation into CommonJS (CJS) format
    typescript(),
    babel({ extensions, include: ['src/**/*'], babelHelpers: 'runtime' }),
    url({
      // by default, rollup-plugin-url will not handle font files
      include: ['**/*.ttf'],
      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: Infinity,
    }),
  ],
};
