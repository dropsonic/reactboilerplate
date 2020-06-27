module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	},
	plugins: [ '@typescript-eslint' ],
	extends: [ 'airbnb-typescript/base', 'eslint:recommended', 'plugin:@typescript-eslint/recommended' ],
	rules: {
		'no-console': 0
	}
};
