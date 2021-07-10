
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: [
    "test"
  ],
  testMatch: [
    "**/__test__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  }
};
