import antfu from '@antfu/eslint-config'
import oxlint from 'eslint-plugin-oxlint'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(),
  oxlint.configs['flat/recommended'],
).overrideRules({
  'node/prefer-global/process': ['error', 'always'],
  'ts/consistent-type-definitions': 'off',
})
