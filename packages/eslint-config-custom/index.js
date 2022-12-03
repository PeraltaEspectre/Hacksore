module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["prettier"],
  plugins: ["deprecation"],
  rules: {
    // TODO: get this working
    "deprecation/deprecation": "error", // or "error" to have stricter rule
  },
};
