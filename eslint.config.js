export default [
    {
        rules: {
            semi: "error",
            "prefer-const": "error",
            "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
            ]
        },
        plugins: ["unused-imports"]
    }
];