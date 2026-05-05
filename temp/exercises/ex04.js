let count=0;
let colors=["Red", "Orange", "Yellow", "Green"];
let colorCount;

$("#needy-button").click( function(){

    count = count +1; 

    colorCount=count-1;

    $("#needy-button").html("you clicked me " + count + " and your favourite color today is: " + colors[colorCount] );

    $("#needy-button").css( "background-color", colors[colorCount]);  

    $("html").css( "background-color", colors[colorCount+2]);

// things to try out:
// make the page background color two colors ahead of the button color
// make the page background color one color beyond of the button color

});