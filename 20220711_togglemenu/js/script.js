// let view = true;
// $(".toggleMenu").click(function(){
//     if( view == true){
//         $(".topMenu").addClass("active");
//         $(".toggleMenu").addClass("view");
//         view = false;
//     }else{
//         $(".topMenu").removeClass("active");
//         $(".toggleMenu").removeClass("view");
//         view = true;
//     }
// })


let view = true;
$(".toggleMenu").click(function(){

    if(view == true){
        $(".toggleMenu").addClass("view")
        $(".topMenu").addClass("active");
        view =false
    
    }else{
        $(".toggleMenu").removeClass("view");
        $(".topMenu").removeClass("active");
        view =true
    }
})