export default class weightConversion {
  constructor (kilogramWeight, meterHeight, poundWeight, inchHeight, userBMI) {
    this.kilogramWeight = kilogramWeight;
    this.meterHeight = meterHeight;
    this.poundWeight = poundWeight;
    this.inchHeight = inchHeight;
    this.userBMI = userBMI;
   
  }
  
  userBMI(kilogramWeight, meterHeight) {
    let userBMI = kilogramWeight / (meterHeight * meterHeight).toFixed(2)
    if (this.userBMI < 21.7) 
      return `Your BMI is ${(this.kilogramWeight / (this.meterHeight * this.meterHeight).toFixed(2))}. You are underweight.`;
    else {
        return `Your BMI is ${(this.kilogramWeight / (this.meterHeight * this.meterHeight).toFixed(2))}. You are overweight.`
    }
  }
    


  currentWeight(kilogramWeight) {
    let weight = 0;
    if (2.17 < this.userBMI) {
      return `You weigh ${(kilogramWeight)} kilograms and have a BMI of ${(kilogramWeight / (meterHeight * meterHeight)).toFixed(2)}.`;
    }
      else {
        return `You weigh ${(kilogramWeight)} kilograms and have a BMI of ${kilogramWeight}.`;
      }
    }
  


  gramWeight(kilogramWeight, gramMultiplier) {
    let weight = 0;
    const multiplier = 1000;
    if (21.7 < this.userBMI) {
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
    let weight = 0;
    const multiplier = .0024;

    return multiplier * weight; 
  }
  
  changWeight(kilogramWeight) {
    let weight = 0;
    const multiplier = 1.2;

    return multiplier * weight;
  }

  rotalWeight(gramWeight) {
    let weight = 0;
    const multiplier = .002;

    return multiplier * weight;
  }
}