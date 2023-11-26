//$('#nav').css("color", "white");
let navContainer = $("#nav").children();
$(navContainer).css("color", "white");

$("#nav").css("background-color", "#145");

let listContainer = $("ul").children();
$(listContainer).each(function(index){
    
    if(index % 2 === 0){
        $(this).css("background-color", "#ccc")
    }else{
        $(this).css("background-color", "#aaa")
    }
    index++;
});

$("#myInput").val("Samuel")