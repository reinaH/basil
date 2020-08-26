var keystone = require("keystone");
var utils = require("keystone-utils");
console.log(utils.isObject({})); // true!

var assert = require("assert");
describe("Keystone Test", function () {
  describe("#notin", function () {
    it("should return true", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
