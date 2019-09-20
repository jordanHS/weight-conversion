  import $ from 'jquery'
import weightConversion from './conversion.js'

$(document).ready(function() {
  $("#convert").submit(function(event) {
    event.preventDefault();
 
    let kilogramWeight = parseInt($("#userWeight").val());
  });
});