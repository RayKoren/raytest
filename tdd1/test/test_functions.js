var Dino = require('../dino');
var expect= require('chai').expect;

describe('dino', function(){
  var danny = new Dino('danny');
  it("should have a name", function(){
    expect(danny.name).to.equal('danny');
  });
});
