module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'node',
  testTimeout: 60000,
  transform: {
    '\\.(js|ts)$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          '@babel/preset-typescript'
        ],
        plugins: ['@babel/plugin-transform-runtime']
      }
    ]
  }
}
