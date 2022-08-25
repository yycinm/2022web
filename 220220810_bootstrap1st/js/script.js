$(".cont-2st .btn-group div").click(function(){
    let i = $(this).index();
    $(".cont-2st .btn-group div").removeClass("active");
    $(this).addClass("active");

    let $selector = $(this).attr("data-filter");
    console.log($selector)
    

    $(".cont-2st .view").isotope({
        filter: $selector
    })
})


window.onload = function(){

    $(".cont-2st .btn-group div").eq(0).trigger("click")
}

// window.addEventListener("load",function(){
//     $(".cont-2st .btn-group div").eq(0).trigger("click")
// }) 위에거랑 같음


$("#owlSlide1").owlCarousel({
    loop:true,
    autoplay:true,
    margin:30,
    resposive:{
        0:{items:1},
        760:{items:2},
        990:{items:4}

    }
})

$("#oslide2").owlCarousel({
    // loop:true,
    center:true,
    dots:true,
    nav:true,
    autoplay:true,
    margin:30,
    navText:['<i class="fa-solid fa-circle-chevron-left dots prve"></i>','<i class="fa-solid fa-circle-chevron-right dots next"></i>'],
    resposive:{
        0:{items:1},
        760:{items:2},
        990:{items:4}

    }
})
$(".view .vPopup").magnificPopup({
    type: "image",
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    }
});

console.log(window.innerHeight); //화면 줄이면 줄어듦
const lazyLoad = document.querySelectorAll(".lazy-load");
window.addEventListener("scroll",function(){
 lazyLoad.forEach(function(item){
    console.log(item)
    const rect =item.getBoundingClientRect().top
    console.log(rect);
    if(rect <=window.innerHeight){
        item.classList.add("fade")
    }
 })    
});