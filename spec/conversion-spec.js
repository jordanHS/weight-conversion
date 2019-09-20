import weightConversion from "./../src/conversion.js"

descibe(weightConversion, function() {
  
  it('should test for the value of kilogramWeight', function() {
    let conversion = new weightConversion (45.3592)
    expect(weightConversion.kilogramWeight).toEqual(45.3592);
  });
});