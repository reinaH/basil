var keystone = require("keystone");
var utils = require("keystone-utils");
console.log(utils.isObject({})); // true!

var utils = keystone.utils;

var assert = require("assert");
describe("Keystone Test", function () {
  describe("#noop", function () {
    it("should return true", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
