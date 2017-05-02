
$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
// the above will link jquery with the front end to pull from the <form id in the html

    event.preventDefault();
    // this will cause the answers to display on the same page
    $("#work-responses").show();
    // this will make the responses show from the <span>
    $("input:checkbox[name=work-transportation]:checked").each(function()
    // the above refers to the input being placed into an array[]. checked makes things more specific.
    {
    var workTransportationMode = $(this).val();
    // workTransportationMode is a random name to refer to. $(this) gives reference to the above and tells what the above statements will become below.
    $('#work-responses').append(workTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
    // the above will hide the survey after the responses are submitted to only show the responses on the page.
  });
});
