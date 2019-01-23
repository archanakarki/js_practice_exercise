//This $(document).ready(function(){}); prevents jQuery from loading jQuery method before loading the actual file.
// $(function(){}); can be alternatively used in place of document ready function mentioned above

$(document).ready(function(){

//Select all the divs and change its background color to purple
$("div").css("background-color", "purple");


//Select all the divs with class highlight and change its width to 200px
$("div.highlight").css("width", "200px");


//Select all the divs with the id third and give it an orange border
$("div#third").css("border", "2px solid orange");


//Bonus exercise: Select all the first division and change the color of the text to pink
$("div:first").css("color", "pink");

});