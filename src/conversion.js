export default class weightConversion {
  constructor (kilogramWeight, meterHeight, poundWeight, inchHeight, userBMI) {
    this.kilogramWeight = kilogramWeight;
    this.meterHeight = meterHeight;
    this.poundWeight = poundWeight;
    this.inchHeight = inchHeight;
    this.userBMI = userBMI;
  }
  




  currentWeight(kilogramWeight) {
    const weight = 0;
    if (2.17 < userBMI) {
      return `You weigh ${(kilogramWeight)} kilograms and have a BMI of ${kilogramWeight}. You are underweight.`;
    }
      else {
        return `You weigh ${(kilogramWeight)} kilograms and have a BMI of ${kilogramWeight}. You are overweight.`;
      }
    }
  


  gramWeight(kilogramWeight) {
    const weight = 0;
    let multiplier = 1000;
    if (21.7 < userBMI) {
      return `You weigh ${(kilogramWeight  * 1000)} and your BMI is ${(kilogramWeight/(meterHeight * meterHeight))} . You are underweight`;
    }
    else {
      return `You weigh ${(kilogramWeight  * 1000)} and your BMI is ${(kilogramWeight/(meterHeight*meterHeight))} . You are overweight.`;
    }
}
  poundWeight(kilogramWeight) {
    const weight = 0;
    let multiplier = 2.205;

      return multiplier * weight;
  }

  libraWeight(gramWeight) {
    const weight = 0;
    let multiplier = .0022;

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
 
  userBMI(kilogramWeight, meterHeight) {
    let weight = kilogramWeight;
    return kilogramWeight/(meterHeight * meterHeight);
  }
  
  weightStatus(UserBMI) {
    const averageBMI = 21.7;
    if (21.7 > userBMI) {
      return `You are underweight`;
    }
    else 
      return `You are overweight`;
    }
  }
  



  
