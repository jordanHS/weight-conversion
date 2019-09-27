  import $ from 'jquery'
import weightConversion from './conversion.js'

$(document).ready(function() {
  $("#convert").submit(function(event) {
    event.preventDefault();
 
    let kilogramWeight = parseFloat($("#userWeight").val());
    let meterHeight = parseFloat($("userHeight").val());
  
    let conversion = new weightConversion(kilogramWeight, meterHeight, gramWeight, poundWeight, libraWeight, funtWeight, changWeight, rotalWeight);

    let gramWeight = conversion.gramWeight(kilogramWeight);
    let poundWeight = conversion.poundWeight(kilogramWeight);
    let libraWeight = conversion.libraWeight(gramWeight);
    let funtWeight = conversion.funtWeight(gramWeight);
    let changWeight = conversion.changWeight(kilogramWeight);
    let rotalWeight = conversion.rotalWeight(rotalWeight);
    
    $(".conversion").text(gramWeight);
    $(".conversion").text(poundWeight);
    $(".conversion").text(libraWeight);
    $(".conversion").text(funtWeight);
    $(".conversion").text(changWeight);
    $(".conversion").text(rotalWeight);


    
  
  
  
  
  
  });
});