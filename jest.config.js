module.exports = {
  projects: [
    {
      runner: "prettier",
      displayName: "lint:prettier",
      moduleFileExtensions: ["js", "tsx", "json", "md"],
      testMatch: ["**/*.js", "**/*.tsx", "**/*.json", "**/*.md"],
      testPathIgnorePatterns: ["/node_modules/", "/dist/"]
    },
    {
      runner: "eslint",
      displayName: "lint:eslint",
      moduleFileExtensions: ["js", "tsx"],
      testMatch: ["**/*.js", "**/*.tsx"],
      testPathIgnorePatterns: ["/node_modules/", "/dist/"]
    }
  ]
};
