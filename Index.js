
/**
 * Simple Calculator Functionality
 * I did this calculator following a tutorial from youtube.
 * Im gonna comment the code to understand it better.
 */


/**
 * In this section, we get the display ID element from the HTML and defined as a Constant.
 * then create three functions: appendToDisplay, calculate, and clearDisplay.
 */
const display = document.getElementById('display');
// appendToDisplay function to add input to the display using the display.value property.
// It takes an input parameter and appends it to the current value of the display.
function appendToDisplay(input){
  display.value += input
}
// calculate function to evaluate the expression in the display.
// It uses the eval function to compute the result and updates the display with the result.
// If there's an error during evaluation, it catches the error and displays 'Error 404'.
//using try and catch to handle errors.
function calculate(value) {
    try {
    display.value = eval(display.value)
    }
    catch (error) {
        display.value = 'Error 404'
    }
}
// clearDisplay function to clear the display by setting its value to an empty string.
function clearDisplay() {
    display.value = '';

}