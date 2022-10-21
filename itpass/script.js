$(function(){
    $(".btn").on("click" , function(){
        $(this).text($(this).parent().data("ans")).off("click");
    });
});
