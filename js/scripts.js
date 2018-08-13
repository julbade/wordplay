
$(document).ready(function() {
  $("#wordPlay").submit(function(event) {

    var sentence = $("input#1").val();
    var splitSentence = sentence.split(" ");
    var three = splitSentence.filter(function (val){
      return val.length >= 3;
    });
    var reverseThree = three.reverse();
    var string = reverseThree.join(' ');
    alert(string);
    });
    $("#output").show();

    event.preventDefault();
  });
