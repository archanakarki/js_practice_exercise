$(document).ready(function(){
//This changes the group of properies in css of an element at once
//css({properties: "value"}) can be used instead of css("properties", "value") individually

    $("img").css({
        width : "300px",
        height: "300px"
    });

    //.attr() to get or set the attribute of an element
    //Adding :first-of-type will only make changes to the first image
    //jQuery's :first mehod can also be used for this case but it is said to be bit slower as it doesnot use the built in css selector
    $("img:first-of-type").attr("src", "https://images.pexels.com/photos/1282273/pexels-photo-1282273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    
    
    //To select the last image use 
    //first option = adding .last() as following example
    $("img").last().attr("src", "https://images.pexels.com/photos/1282273/pexels-photo-1282273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");

    //val() - to get the value of input or checkboxes or dropdown menus
    $("select").val();


    //adding class
    $("h1").addClass("green");

    /*removing class
    $("h1").removeClass("red");

    toggle class
    $("h1").toggleClass("toggleExample");*/


});




