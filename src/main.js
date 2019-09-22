  import $ from 'jquery'
import weightConversion from './conversion.js'

$(document).ready(function() {
  $("#convert").submit(function(event) {
    event.preventDefault();
 
    let kilogramWeight = parseFloat($("#userWeight").val());
    let meterHeight = parseFloat($("userHeight").val());
  
    let conversion = new weightConversion(kilogramWeight, meterHeight, gramWeight, poundWeight, libraWeight, funtWeight, changWeight, rotalWeight);

    let gramWeight = conversion.gramWeight(kilogramWeight, multiplier);
    let poundWeight = conversion.poundWeight(kilogramWeight, multiplier);
    let libraWeight = conversion.libraWeight(gramWeight, multiplier);
    let funtWeight = conversion.funtWeight(gramWeight, multiplier);
    let changWeight = conversion.changWeight(kilogramWeight, multiplier);
    let rotalWeight = conversion.rotalWeight(rotalWeight, multiplier);
    
    $(".conversion").text(gramWeight);
    $(".conversion").text(poundWeight);
    $(".conversion").text(libraWeight);
    $(".conversion").text(funtWeight);
    $(".conversion").text(changWeight);
    $(".conversion").text(rotalWeight);


    
  
  
  
  
  
  });
});