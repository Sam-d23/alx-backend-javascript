const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it(`checking if numbers round`, function() {
      const result = calculateNumber("SUM", 1, 4);
      assert.strictEqual(result, 5);
    });
    it(`checking if numbers round`, function() {
      const result = calculateNumber("SUBTRACT", 7.4, 2.2);
      assert.strictEqual(result, 5);
    });
    it(`checking if numbers round`, function() {
      const result = calculateNumber("SUBTRACT", 4.9, 2.7);
      assert.strictEqual(result, 2);
    });
    it(`checking if numbers round`, function() {
      const result = calculateNumber("DIVIDE", 6, 2);
      assert.strictEqual(result, 3);
    });
    it(`checking if numbers round`, function() {
      const result = calculateNumber("DIVIDE", 1.7, 0);
      assert.strictEqual(result, "Error");
    });
    it(`checking if numbers round`, function() {
      const result = calculateNumber("DIVIDE", 1.2, 5);
      assert.strictEqual(result, 0.2);
    });
});
