var code = require('../main');
var expect = require('chai').expect;

describe("leapYear", function(){
  it("give us true", function() {
    expect(code.leapYear()).to.equal("true")
  })
})
