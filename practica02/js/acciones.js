$(function(){
   $("blockquote")
       .on("mouseover",function(e){
           original=$(this).html();
           $(this).css({
               "background-color": "#D2D918",
               "cursor": "pointer",
               "text-decoration":"underline"
           })
        })
       .on("mouseout",function(e){
           $(this).css({
               "background-color":"#d9d4bb",
               "text-decoration":"none"
           })
        })
       .on("click",function(e){
           window.location=($(this).attr("cite"));
       });

});