import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';

export default [
	{
		ignores: ['dist/**', '**/*.config.js']
	},
	{
		files: ['**/*.{js,jsx}'],
		plugins: {
			react: reactPlugin
		},
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				...globals.browser,
				...globals.es2021
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				},
				sourceType: 'module'
			}
		},
		rules: {
			...js.configs.recommended.rules,
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
			'react/jsx-no-undef': 'error',
			'no-unused-vars': 'error'
		}
	}
];
