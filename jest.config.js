module.exports = {
  projects: [
    {
      runner: "prettier",
      displayName: "lint:prettier",
      moduleFileExtensions: ["tsx", "json", "md"],
      testMatch: ["**/*.tsx", "**/*.json", "**/*.md"]
    },
    {
      runner: "eslint",
      displayName: "lint:eslint",
      moduleFileExtensions: ["tsx"],
      testMatch: ["**/*.tsx"]
    }
  ]
};
