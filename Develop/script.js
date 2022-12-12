// Assignment code here

function generatePassword () {
  var userChoice = prompt 

  let result = window.confirm ("Generate Password");
  console.log (result);

  let length = window.confirm ("length");
  console.log (length);

  let uppercase = window.confirm ("uppercase");
  console.log (uppercase);

  let lowercase = window.confirm ("lowercase");
  console.log (lowercase);

  let numbers = window.confirm ("numbers");
  console.log (numbers);

  let symbols = window.confirm ("symbols");
  console.log (symbols);

};




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
