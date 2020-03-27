const scripts = require("../package.json").scripts;
const assert = require("assert");

describe("create scripts for the build process", function() {
  it("should include a build script", function() {
    assert.equal(
      scripts.build,
      "babel src -d build",
      "hey something happended"
    );
  });
});
