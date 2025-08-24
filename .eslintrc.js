module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': 'warn',
    'no-unused-vars': 'warn',
    'global-require': 0,
    quotes: ['error', 'single'],
    indent: 0,
    'no-new': 0,
    camelcase: 0,
    'padded-blocks': 0,
    'no-trailing-spaces': 0,
    'no-mixed-spaces-and-tabs': 0,
    'space-before-function-paren': [0, 'always'],
    'no-multiple-empty-lines': 0
  },
  globals: {
    __SERVICE_URL__: false,
    Vue: false,
    Vuex: false,
    VueRouter: false,
    Fetch: false,
    Hub: false,
    echarts: false,
    axios: false,
    '%=': false,
    global: 'readonly'
  }
}
