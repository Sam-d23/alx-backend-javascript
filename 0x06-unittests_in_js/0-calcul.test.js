const assert = require("assert");
const { it, describe } = require("mocha");
const findNumber = require("./0-calcul");

describe("findNumber()", function() {

    it(`checking if numbers round`, function() {
      const result = findNumber(1, 2);
      assert.strictEqual(result, 3);
    });
    it(`checking if numbers round`, function() {
      const result = findNumber(1.4, 2.2);
      assert.strictEqual(result, 3);
    });
    it(`checking if numbers round`, function() {
      const result = findNumber(1.6, 2.7);
      assert.strictEqual(result, 5);
    });
    it(`checking if numbers round`, function() {
      const result = findNumber(0, 0);
      assert.strictEqual(result, 0);
    });
    it(`checking if numbers round`, function() {
      const result = findNumber(-1.6, -1.7);
      assert.strictEqual(result, -4);
    });
    it(`checking if numbers round`, function() {
      const result = findNumber(-1.4, -1.3);
	assert.strictEqual(result, -2);
    });
});
