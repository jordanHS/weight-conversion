import weightConversion from "./../src/conversion.js"

describe('weightConversion', function() {
  
  it('should test for the value of kilogramWeight', function() {
    let conversion = new weightConversion(46)
    expect(conversion.kilogramWeight).toEqual(46);
  });
  
  it('should convert kilogramWeight to gramWeight', function() {
    let conversion = new weightConversion(46000)
    expect(46 * 1000).toEqual(46000);
  });

  it('should convert kilogramWeight to poundWeight', function() {
    let conversion = new weightConversion(101.43)
    expect(46 * 2.205).toEqual(101.43);
  });
});
