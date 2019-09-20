import { weightConversion } from './../src/conversion';

describe('weightConversion', function () {
  
  it('should test for the value of kilogramWeight', function() {
    let conversion = new weightConversion (45.3592)
    expect(conversion.kiloramWeight).toEqual(45.3592)
  });
});