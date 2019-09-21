export default class weightConversion {
  constructor (kilogramWeight, gramWeight, poundWeight) {
    this.kilogramWeight = kilogramWeight;
    this.gramWeight = gramWeight;
    this.poundWeight = poundWeight;
    

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

}