function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}

function subtractBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 - num2;
}

function addBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 + num2;
}

function equals () {
   num1 = document.getElementById("firstNumber").value;
   num2 = document.getElementById("secondNumber").value;
   document.getElementById("result").innerHTML = num1 * num2;
 
   num3 = document.getElementById("firstNumber").value;
   num4 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num3 / num4;
 
num5 = document.getElementById("firstNumber").value;
num6 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num5 - num6;
 
num7 = document.getElementById("firstNumber").value;
num8 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num7 + num8;
}