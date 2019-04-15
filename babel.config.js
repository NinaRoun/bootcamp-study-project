module.exports = {
  presets: [
    [
      '@babel/preset-react',//@babel/preset-env
      {
        targets: {
          node: 'current'
        },
      },
      'jest'
    ]
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs']
    }
  }
}
