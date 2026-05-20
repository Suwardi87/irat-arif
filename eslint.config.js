import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import * as parserVue from 'vue-eslint-parser'
import configPrettier from 'eslint-config-prettier'
import * as parserTypeScript from '@typescript-eslint/parser'
import pluginTypeScript from '@typescript-eslint/eslint-plugin'

export default [
  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      '**/auto-imports.d.ts',
      '**/components.d.ts',
      '**/node_modules/**'
    ],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  configPrettier,

  {
    name: 'app/browser-globals',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        process: 'readonly',
      },
    },
  },

  {
    name: 'app/vue-files',
    files: ['**/*.vue'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        parser: parserTypeScript,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        THREE: 'readonly',
        gsap: 'readonly',
        ScrollTrigger: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
      'vue': pluginVue,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true,
      }],
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-debugger': 'off',
    },
  },

  {
    name: 'app/typescript-files',
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        THREE: 'readonly',
        gsap: 'readonly',
        ScrollTrigger: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-debugger': 'off',
    },
  },
]
