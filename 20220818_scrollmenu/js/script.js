let oneTop = $("#v01").offset().top;
let twoTop = $("#v02").offset().top;
let threeTop = $("#v03").offset().top;

// $(".menuWrap > a").eq(0).click(function(e){
//     e.preventDefault();
//     $(".menuWrap>a").removeClass("active");
//     $(this).addClass("active");
//     $("html,body").stop().animate({scrollTop:oneTop})
// })

// $(".menuWrap > a").eq(1).click(function(e){
//     e.preventDefault();
//     $(".menuWrap>a").removeClass("active");
//     $(this).addClass("active");
//     $("html,body").stop().animate({scrollTop:twoTop})
// })

// $(".menuWrap > a").eq(2).click(function(e){
//     e.preventDefault();
//     $(".menuWrap>a").removeClass("active");
//     $(this).addClass("active");
//     $("html,body").stop().animate({scrollTop:threeTop})
// })



$(".menuWrap > a").click(function(e){
    e.preventDefalut();
    let i =$(this).index();
    let st = $(".scene").eq(i).offset().top;
    $("html,body").stop().animate({scrollTop:st})
})

$(window).on("scroll",function(){
    let scrollY = $(window).scrollTop();
    // let scrollY = pageYOffset;
    console.log(scrollY)
    // if(scrollY >= oneTop)
    // if(oneTop <= scrollY){
    //     $(".menuWrap a").removeClass("active").eq(0).addClass("active")
    // }
    // if(twoTop <= scrollY){
    //     $(".menuWrap a").removeClass("active").eq(1).addClass("active")
    // }
    // if(threeTop <= scrollY){
    //     $(".menuWrap a").removeClass("active").eq(2).addClass("active")
    // }

//     for(let i =0;i<$(".scene").length;i++){
//         if($(".scene").eq(i).offset().top <= scrollY){
//              $(".menuWrap a").removeClass("active").eq(i).addClass("active")
//     }
// }
// Array.forEach(function(item){})
$(".scene").each(function(index){
    if($(this).offset().top <= scrollY){
        $(".menuWrap a").removeClass("active").eq(index).addClass("active");

    }
})
})