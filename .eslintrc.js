module.exports = {
  root: true,
  env: {
    node: true
  },
  // 使用插件的编码校验规则
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: 'babel-eslint'
  },
  // 自定义编码校验规则
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: true
      }
    }],
    // allow async-await
    'generator-star-spacing': 'off',
    // 禁止使用 var
    'no-var': 'error',
    // 禁止在函数参数中出现重复名称的参数
    'no-dupe-args': 'error',
    // 禁止在对象字面量中出现重复名称的键名
    'no-dupe-keys': 'error',
    // 禁止在 switch 语句中出现重复测试表达式的 case
    'no-duplicate-case': 'error',
    // 禁止出现多余的分号
    'no-extra-semi': 'error',
    // switch 语句必须有 default
    'default-case': 'off',
    // 表示小数时，禁止省略 0，比如 .5
    'no-floating-decimal': 'error',
    // 禁止重复定义变量
    'no-redeclare': 'error',
    // 禁止将自己赋值给自己
    'no-self-assign': 'error',
    // 禁止将自己与自己比较
    'no-self-compare': 'error',
    // 不能存在未使用的变量、函数以及函数参数
    'no-unused-vars': 0,
    // 必须使用分号结束
    // 'semi': ['error', 'always'],
    // 不允许使用分号结尾
    semi: ['error', 'never'],
    // 方法名后面不需要加空格
    'space-before-function-paren': ['error', { anonymous: 'ignore', named: 'never' }],
    // 使用单引号
    quotes: ['error', 'single'],
    // 变量必须先定义后使用
    'no-use-before-define': [
      'error',
      {
        functions: false,
        variables: false
      }
    ]
  }
}
