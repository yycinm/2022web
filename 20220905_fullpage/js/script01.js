$("#fullpage").fullpage({
    menu:".navTop",
    anchors:["m1st","m2st","m3st","m4st"],
    navigation:true,
    navigationPosition:"fp-right",
    navigationTooltips:["first","second","third","forth"],
    responsiveWidth:900,//900미만일떄width값을 사용하겠다
    afterLoad:function(anchorslink,index){
        console.log(anchorslink,index);
        if(index == 1){
            $(".page1 .txtWrap").addClass("move")
        }else{
            $(".page1 .txtWrap").removeClass("move")
        }
        if(index == 2){
            $(".page2 .txtWrap").addClass("move")
        }else{
            $(".page2 .txtWrap").removeClass("move")
        }
        if(index == 3){
            $(".page3 .txtWrap").addClass("move")
        }else{
            $(".page3 .txtWrap").removeClass("move")

        }
        if(index == 4){
            $(".page4 .txtWrap").addClass("move")
        }else{
            $(".page4 .txtWrap").removeClass("move")

        }
        if(index == 3){
            $(".page3 .wrap").addClass("move")
        }else{
            $(".page3 .wrap").removeClass("move")

        }
    }
})

