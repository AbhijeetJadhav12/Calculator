let ids = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "zero",
  "point",
  "add",
  "sub",
  "mul",
  "div",
  "compare",
  "clear",
  "remove",
  "mod",
  "square",
];

let k = 0;
function opera() {
  let choice = 0;
  let first = "";
  let second = "";
  let firstInput = "";
  let result = "";
  for (let i = 0; i < ids.length; i++) {
    let id = ids[i];

    let btn = document.getElementById(id);
    btn.addEventListener("click", function () {
      let temp = btn.value;
      if (temp == "+") {
        firstInput = document.getElementById("quant").value;
        document.getElementById("quant").value = "";
        first = "";
        choice = 1;
      } else if (temp == "-") {
        firstInput = document.getElementById("quant").value;
        document.getElementById("quant").value = "";
        first = "";
        choice = 2;
      } else if (temp == "*") {
        firstInput = document.getElementById("quant").value;
        document.getElementById("quant").value = "";
        first = "";

        choice = 3;
      } else if (temp == "/") {
        firstInput = document.getElementById("quant").value;
        document.getElementById("quant").value = "";
        first = "";
        choice = 4;
      } else if (temp == "C") {
        document.getElementById("quant").value = "";
        first = "";
        firstInput = "";
        second = "";
      } else if (temp == "X") {
        document.getElementById("quant").value = parseInt(
          parseInt(document.getElementById("quant").value) / 10
        );
      } else if (temp == "%") {
        result =
          parseFloat(firstInput) *
          parseFloat(document.getElementById("quant").value);
        document.getElementById("quant").value = "";
        result = parseInt(result / 100);
        document.getElementById("quant").value = "" + result;
      } else if (temp == "square") {
        firstInput = document.getElementById("quant").value
        firstInput=parseFloat(firstInput);
        // alert(firstInput)
        result =firstInput*firstInput
        document.getElementById("quant").value = "";
        document.getElementById("quant").value =result;
      } else if (temp == "=") {
        second = document.getElementById("quant").value;

        switch (choice) {
          case 1:
            result = parseFloat(firstInput) + parseFloat(second);
            document.getElementById("quant").value = result;
            break;
          case 2:
            result = parseFloat(firstInput) - parseFloat(second);
            document.getElementById("quant").value = result;
            break;
          case 3:
            result = parseFloat(firstInput) * parseFloat(second);
            document.getElementById("quant").value = result;
            break;
          case 4:
            result = parseFloat(firstInput) / parseFloat(second);
            document.getElementById("quant").value = result;
            break;
        }
      } else {
        first = first + temp;
        document.getElementById("quant").value = first;
      }
    });
  }
}
