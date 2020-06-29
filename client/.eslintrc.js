module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [ '@typescript-eslint' ],
	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'react-app',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier/react'
	],
	env: {
		browser: true,
		// es6: true,
		jest: true
	},
	rules: {}
};
