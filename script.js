function add()
{num1=Number(document.getElementById("num1").value);
num2=Number(document.getElementById("num2").value);
add=num1+num2;
document.getElementById("result").value=add;
}

function clear1()
{document.getElementById("result").value="";
document.getElementById("num1").value="";
document.getElementById("num2").value="";
}