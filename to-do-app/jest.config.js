// jest.config.js
module.exports = {
  preset: "ts-jest/presets/default", // Adjust as necessary
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy", // Mock CSS, LESS, SCSS imports
    "\\.(svg)$": "jest-transform-stub", // Mock SVG imports if needed
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true, // Enable coverage collection
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // Collect coverage from TypeScript files
    "!src/**/*.d.ts", // Exclude type definition files
    "!src/**/index.ts", // Exclude entry points (if needed)
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "json", "html"], // Report formats
};
