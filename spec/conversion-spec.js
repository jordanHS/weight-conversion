import { weightConversion } from './../src/conversion';

describe('weightConversion', function () {
  
  it('should test for the value of gramWeight', function() {
    let conversion = new weightConversion (45359.2)
    expect(conversion.gramWeight).toEqual(45359.2)
  });
});