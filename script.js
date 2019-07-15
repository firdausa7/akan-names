 var century, year, month, dayOfMonth, dayOfWeek, dayNum;

function input(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("day of month").value);  
}
function validation(){
    if (document.getElementById("century").value == ""){
        alert("please enter a century");
        return false;
    }
    else if(document.getElementById("year").value ==""){
        alert("please enter a year");
        return false;
    }
    else if(document.getElementById("month").value==""){
        alert("please enter a month");
        return false;
    }
    else if(document.getElementById("day of month").value==""){
        alert("please enter a valid date");
        return false;
    }
    else {
        return true;
    }
}

function calculate(){
    input();

    dayOfWeek = (((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7;
    console.log(dayOfWeek);
    
    return (Math.floor(dayOfWeek));
}

function checkDayOfWeek(){
     dayNum = calculate();
      checkGender();
      validation();
}

function checkGender(){
    // var gender = prompt("enter your gender"); //check
    if(document.getElementById("male").value){
        var gender = "male";
    }else {
        var gender = "female";
    }
    switch(gender){
        case "male":
                if (dayNum == 1){
                    document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  kwasi";
                }else if(dayNum == 2){                                                                                 
                    document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is kwadwo";
                }else if(dayNum == 3){
                    document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is kwabena";
                }else if(dayNum == 4){
                    document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is kwaku";
                }else if(dayNum == 5){
                    document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is yaw";
                }else if(dayNum == 6){
                    document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is kofi";
                }else if(dayNum == 7){
                    document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is kwame";
                }
        break;
        case "female":
                if (dayNum == 1){
                    document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  akosua";
                }else if(dayNum == 2){
                    document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is adwoa ";
                }else if(dayNum == 3){
                    document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is abenaa";
                }else if(dayNum == 4){
                    document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is akua";
                }else if(dayNum == 5){
                    document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is yaa";
                }else if(dayNum == 6){
                    document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is afua";
                }else if(dayNum == 7){
                    document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is ama";
                }
        break
        default:
            console.log("pass");
    }
}