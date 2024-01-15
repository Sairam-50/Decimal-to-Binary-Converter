const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
  // Finally, you should clear the number input by setting its value to an empty string. Then later when you convert several numbers in a row, you won't have to delete the previous number before entering the next one.
  numberInput.value = "";
  const inputs = [];
  const quotients = [];
  const remainders = [];

  if(input === 0) {
    result.innerText = "0";
    return;
  }
  while (input > 0) {
    const quotient = Math.floor(input / 2);
    input = quotient;
    const remainder = input % 2;
    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
  }
  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);
  result.innerText = remainders.reverse().join("");
};

const checkUserInput = () => {
  // It would be helpful to alert users if they don't enter a value into the number input, or the number they enter is invalid. While the input type="number" element makes validation easier by only allowing numbers and some special characters, remember that all values you get from HTML elements are actually strings. Also, if the number input is empty, the value property will be an empty string.

  // A good way to check and normalize numbers in JavaScript is to use the built-in parseInt() function
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
    return;
  }
  decimalToBinary(parseInt(numberInput.value));
};

// Event Listeners.

// Whenever an event listener is triggered by an event, an event object is created automatically.

convertBtn.addEventListener("click", checkUserInput);

// Your Convert button should be working now. But it could get tiring for users to enter in a number, then click that button each time they want to convert from decimal to binary. It would be much more convenient to perform the conversion when the Enter or Return key is pressed.

// The keydown event fires every time a user presses a key on their keyboard, and is a good way to add more interactivity to input elements.

numberInput.addEventListener("keydown", (e) => {
  // If you open your browser's console and type in the number input, you'll see event objects logged to the browser. And if you take a closer look at one of those event objects, you'll see helpful properties like type and target.

  // Since you want to perform an action when the Enter key is pressed, the most helpful property is key, which tells you the string value of the key that was pressed.

  if (e.key === "Enter") {
    checkUserInput();
  }
});
