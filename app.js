var num1 = [];
var num2 = [];



function input() {

    num1.push(document.getElementById("userNum1").value);
    num2.push(document.getElementById("userNum2").value);

    document.getElementById("userNum1").innerHTML = num1;
    document.getElementById("userNum2").innerHTML = num2;

    compNum1 = num1 - "9999";
    compNum2 = num2 - "9999";

    compNum1 = -compNum1;
    compNum2 = -compNum2;

    document.getElementById("comp1").innerHTML = "Computer 1st Number: &nbsp;" + compNum1;
    document.getElementById("comp2").innerHTML = "Computer 2nd Number: &nbsp;" + compNum2;


    result = (+compNum1 + +compNum2 + +num1 + +num2);

    document.getElementById("result").innerHTML ="Result: &nbsp;" + result;;


    return false;
}