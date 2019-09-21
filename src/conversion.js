export default class weightConversion {
  constructor (kilogramWeight, meterHeight, poundWeight, inchHeight, userBMI) {
    this.kilogramWeight = kilogramWeight;
    this.meterHeight = meterHeight;
    this.poundWeight = poundWeight;
    this.inchHeight = inchHeight;
    this.userBMI = userBMI;
  
  }
  
  userBMI(kilogramWeight, meterHeight) {
    let BMI = kilogramWeight / (meterHeight * meterHeight)
    if (userBMI < 21.7) 
      return `Your BMI is ${(kilogramWeight / (meterHeight * meterHeight))}. You are underweight.`;
    else {
        return `Your BMI is ${(kilogramWeight / (meterHeight * meterHeight))}. You are overweight.`
    }
  }
    


  currentWeight(kilogramWeight) {
    let weight = 0;
    if (2.17 < metricBMi) {
      return `You weigh ${(kilogramWeight)} kilograms and have a BMI of ${(kilogramWeight / (meterHeight * meterHeight))}.`;
    }
      else {
        return `You weigh ${(kilogramWeight)} kilograms and have a BMI of ${kilogramWeight}.`;
      }
    }
  


  gramWeight(kilogramWeight) {
    let weight = 0;
    const multiplier = 1000;
    if (21.7 < userBMI) {
      return `You weigh ${(kilogramWeight  * 1000)} grams and your BMI is ${(kilogramWeight/(meterHeight * meterHeight))}.`;
    }
    else {
      return `You weigh ${(kilogramWeight  * 1000)} grams and your BMI is ${(kilogramWeight/(meterHeight*meterHeight))} .`;
    }
}
  poundWeight(kilogramWeight) {
    let weight = 0;
    const multiplier = 2.205;

      return multiplier * weight;
  }

  libraWeight(gramWeight) {
    let weight = 0;
    const multiplier = .0022;

    return multiplier * weight;
  }

  funtWeight(gramWeight) {
    const weight = 0;
    let multiplier = .0024;

    return multiplier * weight; 
  }
  
  changWeight(kilogramWeight) {
    const weight = 0;
    let multiplier = 1.2;

    return multiplier * weight;
  }

  rotalWeight(gramWeight) {
    const weight = 0;
    let multiplier = .002;

    return multiplier * weight;
  }
}