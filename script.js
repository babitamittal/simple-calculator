function add()
{num1=Number(document.getElementById("num1").value);
num2=Number(document.getElementById("num2").value);
add=num1+num2;
document.getElementById("result").value=add;
}

// subtraction feature added by subdev1

function subt()
{num1=Number(document.getElementById("num1").value);
num2=Number(document.getElementById("num2").value);
subt=num1-num2;
document.getElementById("result").value=subt;
}


function clear1()
{document.getElementById("result").value="";
document.getElementById("num1").value="";
document.getElementById("num2").value="";
}