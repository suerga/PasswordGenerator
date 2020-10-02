// Assignment Code
var generateBtn = document.querySelector("#generate");

// generate arrays
lowercase = "abcdefghijklmnopqrstuvwxyz";
uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numbers = "0123456789";
symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Write password to the #password input
function writePassword() {
  // set criteria for password
  // set length of the password
  var length = prompt("length of password", "type a number from 8-128");
  // make it a number
  length = +length;
  // contain lowercase letters in password
  var hasLower = confirm("Password contains lower letters?");
  // contain uppercase letters in password
  var hasUpper = confirm("Password contains upper letters?");
  // contain numbers in password
  var hasNumber = confirm("Password contains numbers?");
  // contain special symbols in password
  var hasSymbol = confirm("Password contains special symbols?");

  console.log(length);
  console.log(hasLower);
  console.log(hasUpper);
  console.log(hasNumber);
  console.log(hasSymbol);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generator function
// another way to generate numbers one by one

// function generateLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// console.log(generateLower());

// // generate a random uppercase letter
// function generateUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// console.log(generateUpper());

// // generate a random number
// function generateNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// console.log(generateNumber());

// // generate a random special symbol
// function generateSymbol() {
//   const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// console.log(generateSymbol());
