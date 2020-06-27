module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	},
	plugins: [ '@typescript-eslint' ],
	extends: [ 'airbnb-typescript/base', 'eslint:recommended', 'plugin:@typescript-eslint/recommended' ],
	env: {
		browser: true,
		es6: true,
		node: true
	},
	rules: {
		'no-console': 0
	}
};
