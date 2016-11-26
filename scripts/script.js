$(document).ready(function(){
console.log("Document loaded");

    $("button").filter('.showIntro').click(function(){
      console.log("working");
      $('.info').hide("slow");
      $('#intro').show("slow");
    });

    $("button").filter('.showEdu').click(function(){
      console.log("working");
      $('.info').hide("slow");
      $('#edu').show("slow");
    });
    $("button").filter('.showExp').click(function(){
      console.log("working");
      $('.info').hide("slow");
      $('#exp').show("slow");
    });


});
