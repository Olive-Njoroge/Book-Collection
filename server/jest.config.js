module.exports = {
  // Look for test files in the "tests" folder or files ending with .test.js or .spec.js
  testMatch: ["**/tests/**/*.test.js", "**/?(*.)+(spec|test).js"],

  // Use Node.js environment since it's a backend project
  testEnvironment: "node",

  // Automatically clear mocks between tests
  clearMocks: true,

  // Collect code coverage information
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.js",          // All JS files in the project
    "!**/index.js",     // Exclude index.js if needed
    "!**/tests/**",     // Exclude tests folder
    "!**/node_modules/**" // Exclude node_modules
  ],
  coverageDirectory: "coverage",

  // Setup files run before the test framework is installed
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],

  // Transform using Babel if you're using ES Modules
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },

  // Show detailed test results
  verbose: true
};
s