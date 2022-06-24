var userInput = window.prompt("가위,바위,보를 입력하세요")
console.log(userInput)
if(userInput != "가위" && userInput != "바위" && userInput != "보"){
    alert("가위,바위,보를 입력하시오")
}

var num = Math.floor(Math.random()*10);
console.log(num)

var comInput=""
if(num < 3){
    comInput ="가위";
}else if(num < 6 ){
    comInput = "바위";
}else{
    comInput = "보";
}
console.log(comInput)

var useInput=""
if(useInput = "가위"){
    if(comInput = "가위"){
        if(userInput == comInput){
        alert("비겼네요.다음기회에")
    }
    if(comInput == "보"){
        alert("당신이 이겼네요. ^^*")
    }
    if(comInput == "바위"){
        alert("컴퓨터가 이겼습니다 ^^*")}}}

else if(useInput = "바위"){
    if(comInput = "바위"){
        if(userInput == comInput){
        alert("비겼네요.다음기회에")
    }
    if(comInput == "가위"){
        alert("당신이 이겼네요. ^^*")
    }
    if(comInputt == "보"){
        alert("컴퓨터가 이겼습니다 ^^*")}}}

else if(useInput = "바위"){
    if(comInput = "바위"){
        if(userInput == comInput){
        alert("비겼네요.다음기회에")
    }
    if(comInput == "가위"){
        alert("당신이 이겼네요. ^^*")
    }
    if(comInput == "보"){
        alert("컴퓨터가 이겼습니다 ^^*")}}}

        console.log(userInput)

    
// else if(num < 6 ){
//     comInput = "바위";
// }else{
//     comInput = "보";
// }
// console.log(comInput)


// if(comInput = "가위"){
//     if(userInput == comInput){
//     alert("비겼네요.다음기회에")
// }
// if(userInput == "바위"){
//     alert("당신이 이겼네요. ^^*")
// }
// if(userInput == "보"){
//     alert("컴퓨터가 이겼습니다 ^^*")}


// }else if(comInput = "바위"){
//         if(userInput == comInput){
//         alert("비겼네요.다음기회에")
//     }
//     if(userInput == "보"){
//         alert("당신이 이겼네요. ^^*")
//     }
//     if(userInput == "가위"){
//         alert("컴퓨터가 이겼습니다 ^^*")
//     }
// }

  
    

else{
    
    if(userInput == comInput){
        alert("비겼네요.다음기회에")
    }
    if(userInput == "가위"){
        alert("당신이 이겼네요. ^^*")
    }
    if(userInput == "바위"){
        alert("컴퓨터가 이겼습니다 ^^*")
    }
}





