module.exports = {
    extends: ['eslint:recommended', 'prettier', 'turbo'],
    plugins: ['only-warn'],
    parser: '@typescript-eslint/parser',
    env: {
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    ignorePatterns: [
        // Ignore dotfiles
        'node_modules/',
        'dist/',
    ],
    overrides: [
        {
            files: ['**/__tests__/**/*'],
            env: {
                jest: true,
            },
        },
    ],
};
