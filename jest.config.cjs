module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['<rootDir>/jest.setup.js'],
  };