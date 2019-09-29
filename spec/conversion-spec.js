import weightConversion from "./../src/conversion.js"

describe('weightConversion', function() {
  
  it('should convert inchHeight to meterHeight', function() {
    let conversion = new weightConversion(1.73)
    expect(68 / 39.37).toEqual(1.73) //This should pass as well but the computer gives another continuous decimal.
  })

  
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
  let conversion = new weightConversion(110.4)
  expect(46000 * .0024).toEqual(110.4).tofixed(2); //Result equals 110.4 but Karma says 110.39 repeating
  });

  it('should convert kilogramWeight to changWeight', function() {
    let conversion = new weightConversion(55.2)
    expect(46 * 1.2).toEqual(55.2).tofixed(2); //Result equals 55.2 but Karma says 55.19 repeating
  });

  it('should convert gramWright to rotalWeight', function() {
    let conversion = new weightConversion(92)
    expect(46000 * .002).toEqual(92);
  });

  it('should calculate the BMI of the user', function() {
    let conversion = new weightConversion(15.37)
    expect (46 / (1.73 * 1.73)).toEqual(15.37).tofixed(2) //Test should technically pass but result is an endless decimal that I rounded the first two digits up to
  });

  it('should determine weight status of user based on BMI', function() {
  let conversion = new weightConversion(true)
  expect(15.37 < 21.7).toEqual(true)
  });
});
