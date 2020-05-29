const scripts = require("../package.test.json").scripts;
const assert = require("assert");

describe("create scripts to find and fix lint errors", function () {
  it("@add-lint-script", function () {
    assert.ok(
      scripts.lint,
      "The `scripts` object doesn't have a key named `lint`."
    );

    assert.equal(
      scripts.lint,
      'npx standard "src/*.js"',
      'The value for the key `lint` is not set to `npx standard \\"src/*.js\\"`.'
    );
  });

  it("@add-lint-fix-script", function () {
    assert.ok(
      scripts["lint-fix"],
      "The `scripts` object doesn't have a key named `lint-fix`."
    );

    assert.equal(
      scripts["lint-fix"],
      'npx standard "src/*.js" --fix',
      'The value for the key `lint-fix` is not set to `npx standard \\"src/*.js\\" --fix`.'
    );
  });
});
