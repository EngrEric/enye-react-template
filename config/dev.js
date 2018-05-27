import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import json from 'rollup-plugin-json';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'app/index.js',
    output: {
        file: 'build/bundle.js',
        format: 'iife',
        sourcemap: true,
    },
    plugins: [
        resolve({
            browser: true,
            main: true,
            customResolveOptions: {
                moduleDirectory: 'node_modules',
            },
        }),
        postcss({
            plugins: [],
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        cjs({
            exclude: 'node_modules/process-es6/**',
            include: [
                'node_modules/create-react-class/**',
                'node_modules/fbjs/**',
                'node_modules/object-assign/**',
                'node_modules/react/**',
                'node_modules/react-dom/**',
                'node_modules/prop-types/**',
                'node_modules/lodash.isfunction/**',
                'node_modules/classnames/**',
                'node_modules/lodash.isobject/**',
                'node_modules/lodash.tonumber/index.js',
                'node_modules/reactstrap/**',
            ],
            namedExports: {
                'node_modules/react/index.js': [ 'Component', 'createElement' ],
            }
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),

        json(),
        globals(),
        livereload(),
    ],
};
