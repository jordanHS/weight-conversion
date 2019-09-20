import weightConversion from "./../src/conversion.js"

describe('weightConversion', function() {
  
  it('should test for the value of kilogramWeight', function() {
    let conversion = new weightConversion(45.359)
    expect(conversion.kilogramWeight).toEqual(45.359);
  });
  
  it('should convert kilogramWeight to gramWeight', function() {
    let conversion = new weightConversion(45359)
    expect(45.359 * 1000).toEqual(45359);
  });

  it
});
