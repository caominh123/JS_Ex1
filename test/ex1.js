var expect    = require("chai").expect;
var ex1 = require("../app/ex1");

describe("Excerise 1", function() {
  describe("Matched Words", function() {
    it("Words have numbers and characters", function() {
      var case1   = ex1.matchedWords("case 1 with 789abc");
      var case2   = ex1.matchedWords("case 2 with abc789");
      var case3   = ex1.matchedWords("case 3 with abc789abc");
      var case4   = ex1.matchedWords("case 4 with 789abc and abc789 and abc789abc");

      expect(case1).to.deep.equal(['789abc']);
      expect(case2).to.deep.equal(['abc789']);
      expect(case3).to.deep.equal(['abc789abc']);
      expect(case4).to.deep.equal(['789abc','abc789','abc789abc']);
    });
  });

  describe("Variation with '-' character", function() {
    it("Add '-' between number and character", function() {   
        var case1   = ex1.variation(['789abc']);
        var case2   = ex1.variation(['abc789']);
        var case3   = ex1.variation(['abc789abc']);
        var case4   = ex1.variation(['789abc','abc789','abc789abc']);
  
        expect(case1).to.deep.equal(['789-abc']);
        expect(case2).to.deep.equal(['abc-789']);
        expect(case3).to.deep.equal(['abc-789-abc']);
        expect(case4).to.deep.equal(['789-abc','abc-789','abc-789-abc']);
    });
  });
});
