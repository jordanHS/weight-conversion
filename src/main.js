  import $ from 'jquery';
import weightConversion from './conversion.js';

$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();
 
    let kilogramWeight = parseInt($("#userWeight").val());
    let meterHeight = parseInt($("userHeight").val());
    
  
    let conversion = new weightConversion();

    let gramWeight = conversion.gramWeight(kilogramWeight, meterHeight);
    let poundWeight = conversion.poundWeight;
    let libraWeight = conversion.libraWeight(gramWeight);
    let funtWeight = conversion.funtWeight(gramWeight);
    let changWeight = conversion.changWeight(kilogramWeight);
    let rotalWeight = conversion.rotalWeight(gramWeight);
    let userBMI = conversion.userBMI;
    
    $("#gramWeight").text(gramWeight);
    $("#poundWeight").text(poundWeight);
    $("libraWeight").text(libraWeight);
    $("#funtWeight").text(funtWeight);
    $("changWeight").text(changWeight);
    $("rotalWeight").text(rotalWeight);
    $("#userBMI").text(userBMI);


    
  
  
  
  
  
  });
});