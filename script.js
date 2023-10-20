var str = "";
var i = 0;
while (i < document.querySelectorAll(".btn").length) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function() {
    var x1 = this.innerHTML;
    calculate(x1);
  }
  );
  i++;
}
function calculate(x) {
  if (x === "=") {
    str = eval(str);
    document.querySelector("input").value = str;
  }
  else if (x === "AC") {
    str = "";
    document.querySelector("input").value = str;
  }
  else {
    str = str + x;
    document.querySelector("input").value = str;
  }
}
