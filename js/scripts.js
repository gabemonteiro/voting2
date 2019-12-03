$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $("#voteCard").show();
  } else if (age === 18) {
    alert("Thank you for doing your part!")
    $("#voteCard ").show();
  } else {
    $("#under-18").show();
  }

  $("form#candidates").submit(function(event){
  event.preventDefault();

  var radioValue = $("input[name='candidates']:checked").val();
  $("#"+radioValue+"Vote").show();
  $("#voteCard").hide();

  });
});
