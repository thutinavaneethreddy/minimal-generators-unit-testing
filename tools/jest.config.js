module.exports = {
  preset: '../jest.preset.js',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', 'files/'],
  testTimeout: 60000,
  coverageDirectory: '../coverage/tools',
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'text', 'lcovonly'],
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.(html|svg)$',
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  displayName: 'tools',
  transform: { '^.+\\.(ts|js|html)$': 'jest-preset-angular' },
};
