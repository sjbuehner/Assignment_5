document.addEventListener("DOMContentLoaded", init, false);

function init(){
    function enter(event){
       var valEvent = event.target.value;
        if (valEvent === "+" || valEvent === "-" || valEvent === "*" || valEvent === "/"){
            result.value += " " + valEvent + " ";
        } else if (valEvent === "="){
        calculate();
        } else if(valEvent === "clear"){ 
            cleanCalc();
        } else {
        result.value += valEvent;
        }
    }
        myCalculator.addEventListener("click", enter, false);
}
        
    function calculate(){
    var mathCalc = document.getElementById("result");
        var answer = eval(mathCalc.value);
        document.getElementById("result").value = answer;
    }
    
    function cleanCalc(){
        document.getElementById("result").value = " ";
        }
        
  

//var one = document.getElementById("one");
//var two = document.getElementById("two");
//var three = document.getElementById("three");
//var four = document.getElementById("four");
//var five = document.getElementById("five");
//var six = document.getElementById("six");
//var seven = document.getElementById("seven");
//var eight = document.getElementById("eight");
//var nine = document.getElementById("nine");
//var zero = document.getElementById("zero");
//var btnPlus = document.getElementById("plus");
//var subtract = document.getElementById("subtract");
//var multiply = document.getElementById("multiply");
//var divide = document.getElementById("divide");
//var period = document.getElementById("period");
//var equal = document.getElementById("equal");




//one.addEventListener("click", event, false);
//two.addEventListener("click", event, false);
//three.addEventListener("click", event, false);
//four.addEventListener("click", event, false);
//five.addEventListener("click", event, false);
//six.addEventListener("click", event, false);
//seven.addEventListener("click", event, false);
//eight.addEventListener("click", event, false);
//nine.addEventListener("click", event, false);
//zero.addEventListener("click", event, false);
//btnPlus.addEventListener("click", event, false);
//subtract.addEventListener("click", event, false);
//multiply.addEventListener("click", event, false);
//divide.addEventListener("click", event, false);
//period.addEventListener("click", event, false);
//equal.addEventListener("click", calculate, false);

