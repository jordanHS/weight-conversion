export default class weightConversion {
  constructor (kilogramWeight, meterHeight, poundWeight, inchHeight) {
    this.kilogramWeight = kilogramWeight;
    this.meterHeight = meterHeight;
    this.poundWeight = poundWeight;
    this.inchHeight = inchHeight;
  }

  gramWeight(kilogramWeight) {
    const weight = 0;
    let multiplier = 1000;
    
    return multiplier * weight;
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
    let heightMultiplier = meterHeight * meterHeight;
    return kilogramWeight/heightMultiplier;
  }
  
  
  
  




}