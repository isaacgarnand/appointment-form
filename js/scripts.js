$(function(){    
  $("form#urname").submit(function(event){
    event.preventDefault();
    var inputName = $("#name").val();
    var inputDesc = $("#desc").val();
    var inputDate = $("#date").val(); 
    var timeThru = $("#thru").val();
  $("#output").text(inputName); 
  $("#output2").text(inputDesc);
  $("#output3").text(inputDate);
  $("#output4").text(timeThru);
});
});

