export default class weightConversion {
  constructor (kilogramWeight, meterHeight, poundWeight, inchHeight, userBMI) {
    this.kilogramWeight = kilogramWeight;
    this.meterHeight = meterHeight;
    this.poundWeight = poundWeight;
    this.inchHeight = inchHeight;
    this.userBMI = userBMI;
   
  }
  
  meterHeight() {
    let inchHeight = 0;
    const divider = 39.37;
    this.meterHeight = inchHeight / divider;
  }
  
  userBMI() {
    let kilogramWeight = 0;
    let meterHeight = 0; 
    let userBMI = kilogramWeight / (meterHeight * meterHeight).toFixed(2)
    if (userBMI < 21.7) 
      return `Your BMI is ${(kilogramWeight / (meterHeight * meterHeight).toFixed(2))}. You are underweight.`;
    else {
        return `Your BMI is ${(kilogramWeight / (meterHeight * this.meterHeight).toFixed(2))}. You are overweight.`;
    }
  }
    


  currentWeight() {
    let kilogramWeight = 0;
    let meterHeight = 0;
    let userBMI = 0;
    if (21.7 < userBMI) {
      return `You weigh ${(kilogramWeight)} kilograms and have a BMI of ${(kilogramWeight / (meterHeight * meterHeight)).toFixed(2)}. You are underweight`;
   
    }
    else {
      return `You weigh ${(kilogramWeight)} kilograms and have a BMI of ${(kilogramWeight / (meterHeight * meterHeight)). toFixed(2)}. you are overweight.`;
    }
  } 
  


  gramWeight() {
    let kilogramWeight = 0;
    let meterHeight = 0;
    let userBMI = 0;
    const multiplier = 1000;
    if (21.7 < userBMI) {
      return `You weigh ${(kilogramWeight * multiplier)} grams and your BMI is ${(kilogramWeight/(meterHeight * meterHeight))}.`;
    }
    else {
      return `You weigh ${(kilogramWeight * multiplier)} grams and your BMI is ${(this.kilogramWeight/(meterHeight * meterHeight))} .`;
    }
}
  poundWeight() {
    let kilogramWeight = 0;
    const multiplier = 2.205;

      return multiplier * kilogramWeight;
  }

  libraWeight() {
    let gramWeight = 0;
    const multiplier = .0022;

    return multiplier * gramWeight;
  }

  funtWeight() {
    let gramWeight = 0;
    const multiplier = .0024;

    return multiplier * gramWeight; 
  }
  
  changWeight() {
    let kilogramWeight = 0;
    const multiplier = 1.2;

    return multiplier * kilogramWeight;
  }

  rotalWeight() {
    let gramWeight = 0;
    const multiplier = .002;

    return multiplier * gramWeight;
  }
}