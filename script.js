// Assignment code here

var lengthMin = 8;
var lengthMax = 128;
var specialCharacters = "!@#$%^&*()_+={}?";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890"

function generatePassword() {
    var pwordLength = prompt("Please enter desired password length between 8-128 characters")
    console.log(pwordLength)
    while (pwordLength < lengthMin || pwordLength > lengthMax){
        pwordLength = prompt("Please enter a number between 8-128 characters")
        console.log(pwordLength)}
    var pwordCharacters = confirm("Would you like to include special characters?")
    console.log (pwordCharacters)
    var useUpperCase = confirm("Woudld you like to include Upper Case?")
    console.log (useUpperCase)
    var useLowerCase = confirm("Would you like to include lower case?")
    console.log (useLowerCase)
    var useNumbers = confirm("Would you like to include numbers?")
    console.log (useNumbers)
    
    var passArray = ""
    
    if (pwordCharacters && useUpperCase && useLowerCase && useNumbers) {
        var passArray = lowerCase.concat(specialCharacters, upperCase, numbers)
        console.log (passArray)
     }
    else if (useUpperCase && useLowerCase && useNumbers) {
        var passArray = upperCase.concat(lowerCase, numbers)
        console.log (passArray)
    }
    else if (useLowerCase && useNumbers) {
        var passArray = lowerCase.concat(numbers)
        console.log (passArray)
    }
     else if (pwordCharacters && useUpperCase && useNumbers) {
        var passArray = upperCase.concat(specialCharacters, numbers)
        console.log (passArray)
    }
    else if (pwordCharacters && useLowerCase && useNumbers) {
        var passArray = lowerCase.concat(specialCharacters, numbers)
        console.log (passArray)
    }
     else if (pwordCharacters && useNumbers) {
        var passArray = numbers.concat(numbers)
        console.log (passArray)
    }
    else if (useUpperCase && useNumbers) {
        var passArray = upperCase.concat(numbers)
        console.log (passArray)
    }
    else if (useUpperCase && useLowerCase) {
        var passArray = upperCase.concat(lowerCase)
        console.log (passArray)
    }
    else {
        var passArray = lowerCase
        console.log (passArray)
    }

    let password2 = "";
    var passAmount = parseInt(pwordLength)
    for (var i=0; i<pwordLength; i++) {
    password2 += passArray.charAt(Math.floor(Math.random * passAmount))
    }
    
    console.log (password2);

    return password2;

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