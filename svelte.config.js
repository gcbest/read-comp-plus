// eslint-disable-next-line import/no-extraneous-dependencies
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
        preprocess: sveltePreprocess({
                postcss: true,
                scss: {
                        includePaths: ['src'],
                        postcss: {
                                plugins: [require('autoprefixer')],
                        },
                },
        }),
};
