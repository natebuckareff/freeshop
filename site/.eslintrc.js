module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:astro/recommended'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['react', '@typescript-eslint'],
            settings: {
                react: {
                    version: 'detect',
                },
            },
            extends: [
                'plugin:react/recommended',
                'plugin:react-hooks/recommended',
                'plugin:react/jsx-runtime',
            ],
        },
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
            rules: {
                // override/add rules settings here, such as:
                // "astro/no-set-html-directive": "error"
            },
        },
    ],
};
