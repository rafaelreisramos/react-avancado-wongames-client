/* eslint-disable @typescript-eslint/no-var-requires */
const { name } = require('./package.json')

module.exports = {
  displayName: name,
  name,
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts(x)?',
    '!<rootDir>/src/**/*.stories.tsx',
    '!<rootDir>/src/pages/**/*.ts(x)?',
    '!<rootDir>/src/**/*.mock.ts(x)?'
  ],
  coverageDirectory: '<rootDir>/__coverage__',
  modulePaths: ['<rootDir>/src', '<rootDir>/.jest'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  snapshotResolver: './.jest/snapshotResolver.js'
}
