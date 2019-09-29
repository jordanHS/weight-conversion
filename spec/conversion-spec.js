import weightConversion from "./../src/conversion.js"

describe('weightConversion', function() {
  
  it('should convert inchHeight to meterHeight', function() {
    let conversion = new weightConversion(1.727203454406909)
    expect(68 / 39.37).toEqual(1.727203454406909);
  });

  
  it('should test for the value of currentWeight and display weightStaus', function() {
    let conversion = new weightConversion(46)
    expect(conversion.kilogramWeight).toEqual(46);
  });
  
  it('should convert kilogramWeight to gramWeight', function() {
    let conversion = new weightConversion(46000)
    expect(46 * 1000).toEqual(46000);
  });

  it('should convert kilogramWeight to poundWeight', function() {
    let conversion = new weightConversion(101.43)
    expect(46 * 2.21).toEqual(101.66);
  });
  
  it('should convert gramWeight to libraWeight', function() {
    let conversion = new weightConversion(101.2)
    expect(46000 * .0022).toEqual(101.2);
  });

it('should convert gramWeight to funtWeight', function() {
  let conversion = new weightConversion(110.39999999999999)
  expect(46000 * .0024).toEqual(110.39999999999999);
  });

  it('should convert kilogramWeight to changWeight', function() {
    let conversion = new weightConversion(55.199999999999996)
    expect(46 * 1.2).toEqual(55.199999999999996); 
  });

  it('should convert gramWright to rotalWeight', function() {
    let conversion = new weightConversion(92)
    expect(46000 * .002).toEqual(92);
  });

  it('should calculate the BMI of the user', function() {
    let conversion = new weightConversion(15.36970830966621)
    expect (46 / (1.73 * 1.73)).toEqual(15.36970830966621) 
  });

  it('should determine weight status of user based on BMI', function() {
  let conversion = new weightConversion(true)
  expect(15.37 < 21.7).toEqual(true)
  });
});
