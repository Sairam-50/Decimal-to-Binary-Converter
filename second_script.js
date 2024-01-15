const callStack=[
    `a(): returns "freeCodeCamp " + b()`,
    `b(): returns "is " + c()`,
    `c(): returns "awesome!"`
];


const a = () => {
    return "freeCodeCamp " + b()
}

const b = () => {
    return "is " + c()
}

const c = () => {
    return "awesome!"
}
console.log(a());
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
let binary = "";
result.innerText=binary;
if(input===0){
    binary="0";
}
while(input>0){
 input=Math.floor(input/2);
//  In the previous version of this function, you pushed the remainder of input divided by 2 to binaryArray. Then later you reversed and joined the entries into a binary number string.

// But it would be easier to use string concatenation within the loop to build the binary string from right to left, so you won't need to reverse it later.

binary=(input%2)+binary;
// Finally, you need to handle cases where input is 0. Rather than update the DOM and return early like you did before, you can update the binary string and let the rest of the code in the function run.
}
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
