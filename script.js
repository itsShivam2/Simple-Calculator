const display = document.querySelector("#display");
const buttons = Array.from(document.querySelectorAll("button"));
let input_string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (display.innerHTML != "" && event.target.innerHTML == '=')
    {
      display.innerHTML = eval(input_string);
    }

    else if (display.innerHTML == "" && event.target.innerHTML == '=')
    {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 3000);
    }
      
    else if (event.target.innerHTML == 'C')
    {
      input_string = "";
      display.innerHTML = input_string;
    }
      
    else if (event.target.innerHTML=='←')
    {
      input_string = display.innerHTML;
      display.innerHTML = input_string.substr(0, input_string.length - 1);  
    }
      
    else
    {
      input_string += event.target.innerHTML;
      display.innerHTML = input_string;
    }

  });
});
