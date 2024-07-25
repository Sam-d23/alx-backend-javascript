const expect = require("chai").expect;
const {describe, it} = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function() {
    describe("SUM", function() {
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUM", 2, 2)).to.equal(4);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUM", 2.6, 3.6)).to.equal(7);
	});
    });
    describe("SUBTRACT", function() {
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUBTRACT", 1.4, 3.3)).to.equal(-2);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUBTRACT", 5.9, 2.7)).to.equal(3);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUBTRACT", -4.9, -1.7)).to.equal(-3);
	});
    });
    describe("DIVIDE", function() {
	it("checking if numbers round", function() {
	    expect(calculateNumber("DIVIDE", 9, 3)).to.equal(3);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("DIVIDE", 4.9, 1.6)).to.equal(2.5);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("DIVIDE", 3, 0)).to.equal("Error");
	});
    });
});
