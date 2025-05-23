module.exports = [
	{
		root: true,
		ignorePatterns: ['node_modules/**', 'dist/**'],
		env: { node: true, jest: true },
		parserOptions: {
			project: 'tsconfig.eslint.json',
			tsConfigRootDir: '.',
			ecmaVersion: 'latest'
		},
		extends: [
			'eslint:recommended',
			'plugin:@typescript-eslint/stylistic-type-checked',
			'plugin:@typescript-eslint/strict-type-checked',
			'plugin:n/recommended',
			'plugin:sonarjs/recommended',
			'plugin:import/recommended',
			'plugin:import/typescript',
			'plugin:typescript-sort-keys/recommended',
			'plugin:unicorn/recommended',
			'plugin:prettier/recommended'
		],
		overrides: [
			{
				files: ['!src/**'],
				rules: {
					'import/no-commonjs': 'off',
					'import/no-default-export': 'off',
					'unicorn/prefer-module': 'off',
					'n/no-unpublished-import': 'off'
				}
			}
		],
		rules: {
			'@typescript-eslint/class-methods-use-this': [
				'error',
				{ ignoreOverrideMethods: true, ignoreClassesThatImplementAnInterface: true }
			],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{ fixStyle: 'inline-type-imports', disallowTypeAnnotations: false }
			],
			'@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
			'@typescript-eslint/explicit-member-accessibility': 'error',
			'@typescript-eslint/method-signature-style': 'error',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					format: ['camelCase'],
					leadingUnderscore: 'allow',
					selector: 'default',
					trailingUnderscore: 'forbid'
				},
				{
					format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
					modifiers: ['const'],
					selector: 'variable'
				},
				{
					format: ['PascalCase'],
					selector: 'typeLike'
				},
				{
					custom: { match: false, regex: '^I[A-Z]' },
					format: ['PascalCase'],
					selector: 'interface'
				},
				{
					format: ['camelCase', 'PascalCase'],
					selector: 'objectLiteralProperty'
				},
				{
					format: null,
					modifiers: ['requiresQuotes'],
					selector: 'objectLiteralProperty'
				},
				{
					format: null,
					selector: 'typeProperty'
				},
				{
					format: ['PascalCase'],
					filter: '^T[A-Z]',
					selector: 'typeParameter'
				},
				{
					format: ['PascalCase'],
					selector: 'enumMember'
				}
			],
			'@typescript-eslint/no-base-to-string': 'off',
			'@typescript-eslint/no-confusing-void-expression': [
				'error',
				{ ignoreVoidOperator: true, ignoreArrowShorthand: true }
			],
			'@typescript-eslint/no-dynamic-delete': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-invalid-this': 'error',
			'@typescript-eslint/no-loop-func': 'error',
			'@typescript-eslint/no-namespace': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-unnecessary-condition': 'off',
			'@typescript-eslint/no-unnecessary-qualifier': 'error',
			'@typescript-eslint/no-unsafe-argument': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'@typescript-eslint/no-unused-expressions': 'error',
			'@typescript-eslint/no-use-before-define': 'error',
			'@typescript-eslint/no-useless-empty-export': 'error',
			'@typescript-eslint/prefer-literal-enum-member': 'off',
			'@typescript-eslint/prefer-readonly': 'error',
			'@typescript-eslint/prefer-regexp-exec': 'error',
			'@typescript-eslint/require-array-sort-compare': 'error',
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/return-await': ['error', 'in-try-catch'],
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
			'import/default': 'off',
			'import/first': 'error',
			'import/namespace': 'off',
			'import/newline-after-import': 'error',
			'import/no-absolute-path': 'error',
			'import/no-amd': 'error',
			'import/no-cycle': 'error',
			'import/no-default-export': 'error',
			'import/no-mutable-exports': 'error',
			'import/no-named-as-default-member': 'off',
			'import/no-namespace': 'error',
			'import/no-relative-packages': 'error',
			'import/no-self-import': 'error',
			'import/no-unresolved': ['error', { ignore: ['^#'] }],
			'import/no-webpack-loader-syntax': 'error',
			'import/order': [
				'error',
				{
					groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
					'newlines-between': 'never'
				}
			],
			'n/handle-callback-err': 'error',
			'n/no-extraneous-import': 'off',
			'n/no-missing-import': 'off',
			'n/no-path-concat': 'error',
			'n/no-process-exit': 'off',
			'n/no-sync': 'error',
			'n/prefer-global/buffer': 'error',
			'n/prefer-global/console': 'error',
			'n/prefer-global/process': 'error',
			'n/prefer-global/text-decoder': 'error',
			'n/prefer-global/text-encoder': 'error',
			'n/prefer-global/url': 'error',
			'n/prefer-global/url-search-params': 'error',
			'n/prefer-promises/dns': 'error',
			'n/prefer-promises/fs': 'error',
			'n/shebang': ['error', { convertPath: { 'src/**/*.ts': ['^src/(.+?)\\.ts$', 'dist/$1.js'] } }],
			'sonarjs/cognitive-complexity': 'off',
			'sonarjs/no-inverted-boolean-check': 'error',
			'sonarjs/no-nested-template-literals': 'off',
			'typescript-sort-keys/interface': ['error', 'asc', { natural: true }],
			'typescript-sort-keys/string-enum': ['error', 'asc', { natural: true }],
			'unicorn/error-message': 'off',
			'unicorn/expiring-todo-comments': 'off',
			'unicorn/explicit-length-check': 'off',
			'unicorn/filename-case': [
				'error',
				{
					cases: { camelCase: true, kebabCase: true, pascalCase: true },
					ignore: ['^[A-Z]+\\.']
				}
			],
			'unicorn/import-style': [
				'error',
				{
					styles: {
						'discord.js': { default: false, named: true },
						fs: { default: false, named: true }
					}
				}
			],
			'unicorn/no-array-reduce': 'off',
			'unicorn/no-await-expression-member': 'off',
			'unicorn/no-null': 'off',
			'unicorn/no-process-exit': 'off',
			'unicorn/no-unsafe-regex': 'error',
			'unicorn/no-unused-properties': 'error',
			'unicorn/prefer-json-parse-buffer': 'error',
			'unicorn/prevent-abbreviations': 'off',
			'unicorn/string-content': [
				'error',
				{
					patterns: {
						'→': '→',
						'←': '←',
						'\\(R\\)': '®',
						'\\(c\\)': '©',
						'\\(tm\\)': '™',
						'\\.\\.\\.': '…',
						'\\bdegC\\b': '℃',
						'\\bdegF\\b': '℉',
						'\\bdeg\\b': '°'
					}
				}
			],
			'array-callback-return': 'error',
			'capitalized-comments': [
				'error',
				'always',
				{ ignoreInlineComments: true, ignoreConsecutiveComments: true }
			],
			curly: 'error',
			'default-case-last': 'error',
			eqeqeq: 'error',
			'guard-for-in': 'error',
			'logical-assignment-operators': 'error',
			'multiline-comment-style': ['error', 'separate-lines'],
			'no-alert': 'error',
			'no-confusing-arrow': 'error',
			'no-else-return': 'error',
			'no-extra-bind': 'error',
			'no-extra-label': 'error',
			'no-floating-decimal': 'error',
			'no-implicit-coercion': 'error',
			'no-implicit-globals': 'error',
			'no-inline-comments': ['error', { ignorePattern: '^$' }],
			'no-iterator': 'error',
			'no-label-var': 'error',
			'no-lone-blocks': 'error',
			'no-lonely-if': 'error',
			'no-mixed-operators': 'error',
			'no-multi-str': 'error',
			'no-new': 'error',
			'no-new-func': 'error',
			'no-new-object': 'error',
			'no-new-wrappers': 'error',
			'no-proto': 'error',
			'no-script-url': 'error',
			'no-sequences': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-unneeded-ternary': 'error',
			'no-unreachable-loop': 'error',
			'no-useless-call': 'error',
			'no-useless-computed-key': 'error',
			'no-useless-concat': 'error',
			'no-useless-rename': 'error',
			'no-useless-return': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'operator-assignment': 'error',
			'prefer-arrow-callback': 'error',
			'prefer-const': ['error', { destructuring: 'all' }],
			'prefer-destructuring': ['error', { array: false, object: true }],
			'prefer-exponentiation-operator': 'error',
			'prefer-named-capture-group': 'error',
			'prefer-numeric-literals': 'error',
			'prefer-object-has-own': 'error',
			'prefer-object-spread': 'error',
			'prefer-regex-literals': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'quote-props': ['error', 'as-needed'],
			radix: ['error', 'as-needed'],
			'require-atomic-updates': 'error',
			'spaced-comment': 'error',
			'symbol-description': 'error',
			yoda: 'error'
		}
	}
];
