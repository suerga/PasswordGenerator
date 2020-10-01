// Assignment Code
var generateBtn = document.querySelector("#generate");

// set length of the password
var length = prompt("length of password", "type a number from 8-128");
// make it a number
length = +length;

// set criteria for password
// contain lowercase letters in password
var hasLower = confirm("Password contains lower letters?");
// contain uppercase letters in password
var hasUpper = confirm("Password contains upper letters?");
// contain numbers in password
var hasNumber = confirm("Password contains numbers?");
// contain special symbols in password
var hasSymbol = confirm("Password contains special symbols?");

const randomFunc = {
  lower: generateLower,
  upper: generateUpper,
  number: generateNumber,
  symbol: generateSymbol,
};

console.log(length);
console.log(hasLower);
console.log(hasUpper);
console.log(hasNumber);
console.log(hasSymbol);

// passwordText.value = generatePassword(

//   hasLower,
//   hasUpper,
//   hasNumber,
//   hasSymbol,
//   length
// );

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  // Doesn't have a selected type
  if (typesCount === 0) {
    return "";
  }

  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

const typesCount = lower + upper + number + symbol;
console.log(typesCount);

// Write password to the #password input

// // 5 criteria are included as input
// function writePassword(lower, upper, number, symbol, length) {
//   var password = generatePassword(
//     hasLower,
//     hasUpper,
//     hasNumber,
//     hasSymbol,
//     length
//   );

//   var passwordText = document.querySelector("#password");

//   const array = [lower, upper, number, symbol];

//   console.log(array);

//   // create  a loop that extract element from array
//   // display password

//   passwordText.value = password;
// }

// console.log(array);

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(lower, upper, number, symbol, length) {
  // 1. int pw va
  // 2. filter out unchecked type
  // 3. loop over the length call a generator function
  // 4. add final pw to pw variable and return it

  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;

  // check or uncheck
  const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  // no need to be here

  for (let i = 0; i < length; i++) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
}

// generator function

// generate a random lowecase letter
function generateLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(generateLower());

// generate a random uppercase letter
function generateUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(generateUpper());

// generate a random number
function generateNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(generateNumber());

// generate a random special symbol
function generateSymbol() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(generateSymbol());
