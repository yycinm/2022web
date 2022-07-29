$(".itemWrap>li").click(function(){
    let i = $(this).index()
    $("#image>p").hide().eq(i).show()
})

let current =0;
// $(".right").click(function(){
//     current++;
//     if(current==3){current=2}
//     let value =current * -760

//     $(".itemWrap").animate({"left":value},300)
// })
// $(".left").click(function(){
//     current--;
//     if(current<0){current=0}
//     let value =current * -760

//     $(".itemWrap").animate({"left":value},300)
// }) 

function viewCurrent(current){
    let value = current * -760
    $(".itemWrap").animate({"left":value},300)
}

$(".right").click(function(){
    current++;
    if(current==3){current=2}
    viewCurrent(current)
})
$(".left").click(function(){
    current--;
    if(current<0){current=0}
    viewCurrent(current)
})