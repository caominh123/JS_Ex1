var expect = require("chai").expect;
var request = require("request");
describe("Excerise 1 API", function() {
  describe("Matched Words", function() {
    var url =
      "http://localhost:3000/matchedWords?a=sentence 1 with 123abc and abc123 and abc123abc";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns words have numbers and characters", function(done) {
      request(url, function(error, response, body) {
        expect(response.body).to.equal('["123abc","abc123","abc123abc"]');
        done();
      });
    });
  });

  describe("Variation with '-' character", function() {
    var url = "http://localhost:3000/variation?c=123abc,abc123,abc123abc";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns words added '-' between number and character", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.deep.equal('["123-abc","abc-123","abc-123-abc"]');
        done();
      });
    });
  });
});
