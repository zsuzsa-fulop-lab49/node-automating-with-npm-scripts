const scripts = require("../package.test.json").scripts;
const assert = require("assert");

describe("create scripts for the build process", function () {
  it("@add-build-script", function () {
    assert.ok(
      scripts.build,
      "The `scripts` object doesn't have a key named `build`."
    );

    assert.equal(
      scripts.build,
      "babel src -d build",
      "The value for the key `build` is not set to `babel src -d build`."
    );
  });

  it("@add-build-clean-script", function () {
    assert.ok(
      scripts["build-clean"],
      "The `scripts` object doesn't have a key named `build-clean`."
    );

    assert.equal(
      scripts["build-clean"],
      "rm -rf build",
      "The value for the key `build-clean` is not set to `rm -rf build`."
    );
  });

  it("@add-post-hook-for-build-clean-script", function () {
    assert.ok(
      scripts["postbuild-clean"],
      "The `scripts` object doesn't have a key named `postbuild-clean`."
    );

    assert.equal(
      scripts["postbuild-clean"],
      "npm run build",
      "The value for the key `postbuild-clean` is not set to `npm run build`."
    );
  });
});
