const scripts = require("../package.test.json").scripts;
const assert = require("assert");

describe("create scripts to run the application", function () {
  it("@add-start-script", function () {
    assert.ok(
      scripts.start,
      "The `scripts` object doesn't have a key named `start`."
    );

    assert.equal(
      scripts.start,
      "npm run build && node build/index.js",
      "The value for the key `start` is not set to `npm run build && node build/index.js`."
    );
  });

  it("@add-start-dev-script", function () {
    assert.ok(
      scripts["start-dev"],
      "The `scripts` object doesn't have a key named `start-dev`."
    );

    assert.equal(
      scripts["start-dev"],
      "nodemon --watch src --exec PORT=5000 npm start",
      "The value for the key `start-dev` is not set to `nodemon --watch src --exec PORT=5000 npm start`."
    );
  });

  it("@add-pre-hook-for-start-dev-script", function () {
    assert.ok(
      scripts["prestart-dev"],
      "The `scripts` object doesn't have a key named `prestart-dev`."
    );

    assert.equal(
      scripts["prestart-dev"],
      "npm run lint-fix",
      "The value for the key `prestart-dev` is not set to `npm run lint-fix`."
    );
  });
});
