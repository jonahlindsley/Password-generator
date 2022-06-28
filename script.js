// Assignment Code

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



// the possible arrays for the password
var lowerLetterArry = ['abcdefghijglmnopqrstuvwxyz']
var upperLetterArry = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var specialArray = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
var numberArray = ['123456789']



var generateBtn = document.querySelector("#generate");



//the main function
function generatePassword() {




var passwordRequirements = ''
var generatedPassword = ''






//the prompts for what to make the password with
  var passwordLength = prompt('input length between 8 and 128');

  if (passwordLength < 8){
  alert('woah now buddy you need a password of least 8 to continue')        
  return}
  if (passwordLength > 128){
    alert("easy there slugger, your password can't be over 128 long!")
    return
  }

  var numbers = confirm('would you like to use numbers?');
  var uppercase = confirm('would you like uppercase letters?');
  var lowercase = confirm('would you like lowercase letters?');
  var special = confirm('would you like special characters?');




console.log(passwordLength);

//alert if they didnt say yes to anything
if (numbers, uppercase, lowercase, special === false){
  alert('wrong call friendo, you need to add somthing or what will i make your password with?')
  return
}
if (numbers){
passwordRequirements = passwordRequirements.concat(numberArray)
 
}
if (uppercase){
    passwordRequirements = passwordRequirements.concat(upperLetterArry)
  
    }

 if (lowercase){
  passwordRequirements = passwordRequirements.concat(lowerLetterArry)
 
} 
if (special){
 passwordRequirements = passwordRequirements.concat(specialArray)
 }
 console.log(passwordRequirements)
//takes the selected imputs and compiles the password
 for (var i = 0; i < passwordLength; i++) {
  var randomPassword = passwordRequirements.charAt(Math.floor(Math.random() * passwordRequirements.length));
  generatedPassword = generatedPassword.concat(randomPassword)
}

console.log(generatedPassword)
return generatedPassword;
}


//takes the value of the generated password and pushes it to the html
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);