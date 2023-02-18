// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// click button to generate password 
//       V 
// EVENT LISTENER? for click?
// QUERY SELECTOR to assign click to HTML 
// -----------------------------------------------------------------
// then you are given prompts for password criteria 
//                V 
// ???What functions or methods can I use to prompt this???
// ???maybe "if" click =  true call function???
// ???can we convert CLICK EVENT LISTENER to boolean value to call function???
//----------------------------------------------------------------------
// able to select criteria for pass gen
//          V 
// want to be able to select/highlight boxes containing "Length" + "character types" 
//  need to run different functions based on selected criteria 
// ??? can we use a if else statement to run different functions based on selected criteria???
// ??? maybe "if 'lowercase' = true(selected) call [lowercase function] else if 'uppercase' = true(selected) call (uppercase function) etc...???
// maybe if this doesnt work look into  || that we used in rock paper scissors ???
// -----------------------------------------------------------------
// asked password length.
//      V
// ??? how can we convert user input to variables to use in function ???
// I dont want to use a prompt method (i think that looks bad lol) so maybe look into storeInput function in conjunction with getElementById method
// example from MDN:
//   V
// HTML 
//  <input type="text" id="nameInput"> 
//  <button onclick="storeInput()">Submit</button> 
// JS
// function storeInput() {
// let name = document.getElementById("nameInput").value;
// console.log("Hello, " + name + "!");
// } 
// -----------------------------------------------------------------
// input validated and at least 1 character type should be selected 
//                      V
// display selected criteria with confirm box
// Document Object Model (DOM)
// -----------------------------------------------------------------
// when all criteria is selected, and I click generate, generates password matching said criteria 
// ON CLICK needs EVENTLISTENER
// 
// -----------------------------------------------------------------
// password is written to page 
//           V
// Research DOM(Document Object Model) to output result of function 

// FEATURE BRANCH 
// TODO: Make this shit look better in CSS i want to puke