module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'ignorePatterns': ['dist/**', 'examples/**'],
    'plugins': [
        '@typescript-eslint',
        'brace-rules'
    ],
    'rules': {
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'semi-spacing': [
            'warn'
        ],
        'no-undef': [
            'off'
        ],
        /* 'no-unused-vars' */'@typescript-eslint/no-unused-vars': [ // https://typescript-eslint.io/docs/linting/troubleshooting/#i-am-using-a-rule-from-eslint-core-and-it-doesnt-work-correctly-with-typescript-code
            'warn'
        ],
        'no-else-return': [
            'error'
        ],
        'arrow-parens': [
            'error', 
            'as-needed'
        ],
        'no-cond-assign': [
            'off'
        ],
        'func-call-spacing': [
            'error',
            'never'
        ],
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'never',
                'named': 'never',
                'asyncArrow': 'always'
            }
        ],
        'keyword-spacing': [
            'error',
            {
                'after': true,
                'overrides': {
                    'catch': {'after': false},
                    'do': {'after': false},
                    'for': {'after': false},
                    'function': {'after': false},
                    'if': {'after': false},
                    'while': {'after': false},
                    'switch': {'after': false}
                }
            }
        ],
        'space-before-blocks': [
            'error',
            {
                'functions': 'never',
                'keywords': 'never',
                'classes': 'always'
            }
        ],
        'no-var': [
            'error'
        ],
        'prefer-const': [
            'warn',
            {
                'destructuring': 'all'
            }
        ],
        // 'brace-style': [
        //     'error',
        //     'allman',
        //     {
        //         'allowSingleLine': true
        //     }
        // ],
        'brace-rules/brace-on-same-line': [
            'error',
            {
                'FunctionDeclaration': 'never',
                'FunctionExpression': 'ignore',
                'ArrowFunctionExpression': 'always',
                'IfStatement': 'never',
                'TryStatement': 'never',
                'DoWhileStatement': 'never',
                'WhileStatement': 'never',
                'WithStatement': 'never',
                'ForStatement': 'never',
                'ForInStatement': 'never',
                'ForOfStatement': 'never',
                'SwitchStatement': 'never'
            },
            {
                'allowSingleLine': true
            }
        ],
        'object-shorthand': [
            'error',
            'always',
            {
                'avoidQuotes': true
            }
        ],
        'object-curly-spacing': [
            'error',
            'never'
        ],
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        'no-whitespace-before-property': [
            'error'
        ],
        'no-empty': [
            'error',
            {
                'allowEmptyCatch': true
            }
        ],
        'nonblock-statement-body-position': [
            'error',
            'below'
        ],
        'no-unneeded-ternary': [
            'warn'
        ],
        'no-lonely-if': [
            'error'
        ],
        'no-multi-spaces': 'warn',
        'eol-last': [
            'error',
            'always'
        ],
        'no-template-curly-in-string': 'off'
    }
};
