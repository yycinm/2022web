var userInput = window.prompt("가위,바위,보를 입력하세요")
console.log(userInput)
if(userInput != "가위" && userInput != "바위" && userInput != "보"){
    alert("가위,바위,보 중 하나를 입력하시오")
}else{
    var num = Math.floor(Math.random()*10);
    console.log(num)
    var comInput ="";
    var result = ""

    if(num<3){
        comInput= "가위";
    }else if(num <6 ){
        comInput = "바위";
    }else{
        comInput = "보";
    }

    if( useInput == "가위"){
        if(comInput == "가위"){
            result = "비김"
        }
        else if(comInput == "바위"){
            result = "컴이 이겼습니다"
        }
        else{
            result = "당신이 이겼습니다"
        }


    }

    if( userInput == "바위"){
        if(comInput == "바위"){
            result = "비김"
        }
        if(comInput == "보"){
            result ="컴이 이겼습니다"
        }
        if(comInput == "가위"){
            result ="당신이 이겼습니다"
        }
    }
    if( userInput == "보"){
        if(comInput == "보"){
            result = "비김"
        }
        if(comInput == "가위"){
            result ="컴이 이겼습니다"
        }
        if(comInput == "바위"){
            result ="당신이 이겼습니다"
        }
  
    }
    console.log("내꺼 : " + userInput)
    console.log("컴 : " + comInput)
    console.log("결과 : " + result)
}



