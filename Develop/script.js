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

function generatePassword() {

  // created arrays to hold possible characters
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let numericChars = "0123456789".split("");
  let specialChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?".split("");
  
// created prompt text 
  let passwordLength = parseInt(prompt("How many characters would you like to use? (8-128)"));
  let includeLowercase = confirm("would you like to include lowercase characters?");
  let includeUppercase = confirm("would you like to include uppercase characters?");
  let includeNumbers = confirm("would you like to include numbers?");
  let includeSpecial = confirm("would you like to include special characters?")

  // check to see if password length is valid 
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("please enter a valid password length");
    return "";
    // check to see if at least one password criteria is selected 
  } else if (!includeLowercase && !includeUppercase && !includeSpecial && !includeNumbers) {
    alert("please select at least one character type");
    return "";
  }else {
    // concatenates all char arrays into one array 
    var allChars = [];
    if (includeLowercase){
      allChars = allChars.concat(lowercaseChars);
    }
    if (includeUppercase){
      allChars = allChars.concat(uppercaseChars);
    }
    if (includeSpecial){
      allChars = allChars.concat(specialChars);
    }
    if (includeNumbers){
      allChars = allChars.concat(numericChars);
    }
    // generates the password based on criteria 
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
    return password; 
    }
  }
