function convertingDuritionTime() {
    let secondsNum = document.getElementById("secondsNum").value;
    let result = document.querySelector("span");
    if (secondsNum == 0) {
        console.log("Now");
        result.innerHTML = "Now";
    } else if(secondsNum > 0){
        console.log("it is positive");   
        let hourNum = secondsNum / 3600;
        let minuteNum = (secondsNum % 3600) / 60 ; 
        let secondNum = (secondsNum % 3600) % 60 ; 
        console.log(Math.round(hourNum) +" : hour, " 
        + Math.round(minuteNum)  + " : minute, " 
        + Math.round(secondNum)  + " : seconds");

        result.innerHTML = Math.round(hourNum) +" : hour, " 
        + Math.round(minuteNum)  + " : minute, " 
        + Math.round(secondNum)  + " : seconds";
    }else {
        console.log("it is negative");
        result.innerHTML = "it is negative";
    }

}
//let snum = 0;
//let snum = 3662;
//let snum = -547 ;

//let snum = 10000;
//2h : 46m : 40s
//convertingDuritionTime(snum);