module.exports = {
  collectCoverage: true,
  coverageReporters: ["json", "text"],
  projects: [
    {
      displayName: "test",
      preset: "ts-jest",
      collectCoverage: true,
      coverageReporters: ["json", "text"],
      testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/",
        "/coverage/",
        "/reports/"
      ]
    },
    {
      preset: "jest-runner-prettier",
      displayName: "lint:prettier",
      testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/",
        "/coverage/",
        "/reports/"
      ]
    },
    {
      runner: "eslint",
      displayName: "lint:eslint",
      moduleFileExtensions: ["js", "tsx", "ts"],
      testMatch: ["**/*.js", "**/*.tsx", "**/*.ts"],
      testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/",
        "/coverage/",
        "/reports/"
      ]
    }
  ]
};
