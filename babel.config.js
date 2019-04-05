module.exports = {
  presets: [
    [
      '@babel/preset-react',
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
