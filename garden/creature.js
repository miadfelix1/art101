$("#crAdd").click(function () {

    // grab the value from the text input and assign it to a variable crName
   let crName=$("#crName").val();
   // test in concole
   console.log(crName); 

   if(crName. length > 2) {
   
   //add this name to a div with a bit of html code attached
   $("#creature-list").append("<div>"+crName+"</div>");
   }


   $("#crName").val(""); // write the value
   //$("#crName").val("");// retrieve the value
});
