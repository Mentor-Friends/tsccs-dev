module.exports = {
    testEnvironment: 'jsdom',
    injectGlobals: true,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  };