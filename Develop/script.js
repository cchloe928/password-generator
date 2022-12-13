// Assignment code here


function generatePassword () {
  var userChoice = prompt 


  let length = window.prompt ("Enter letters from 8 - 128 Characters");
  console.log (length);

  let uppercase = window.confirm ("uppercase");
  console.log (uppercase);

  let lowercase = window.confirm ("lowercase");
  console.log (lowercase);

  let numbers = window.confirm ("numbers");
  console.log (numbers);

  let symbols = window.confirm ("symbols");
  console.log (symbols);

  const capitolLetters = "ABCDEFGHJIKLMNOPQRSTUVWXYZ"
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const number = "1234567890"
  const symbol = "!@#$%^&*()-=_+[]{}"

  let chosenCharacters = ""



if (uppercase) {
  chosenCharacters += capitolLetters
};

if (lowercase) {
  chosenCharacters += lowerCaseLetters
};


if (numbers) {
  chosenCharacters += numbers
};

if (symbols) {
  chosenCharacters += symbols
};


  let passwordLength = 128;
  let password = '';

  for (let i = 0; i < length; i ++) {
    let getRandomNumber = Math.floor(Math.random() * chosenCharacters.length);

    password += chosenCharacters. substring (getRandomNumber, getRandomNumber + 1)
  }
  return password
  document.getElementById('password').value = password;
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
