// Assignment Code

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



// the possible arrays for the password
var lowerLetterArry = ['abcdefghijglmnopqrstuvwxyz']
var upperLetterArry = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var specialArray = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
var numberArray = ['123456789']


//links to the button from the html
var generateBtn = document.querySelector("#generate");


//the main function
function generatePassword() {



// sets the empty variables
var passwordRequirements = ''
var generatedPassword = ''






// prompt to chose a password length
  var passwordLength = prompt('input length between 8 and 128');
// checks to make sure the length is alright and if it isnt alerts to tell you whats wrong
  if (passwordLength < 8 || passwordLength > 128){
    alert('woah now buddy you need a password of least 8 to continue')        
    return
  }
  // if (passwordLength > 128){
  //   alert("easy there slugger, your password can't be over 128 long!")
  //   return
  // }
  // if (passwordLength){
  //   alert("sorry buddy, you can only input numbers here, not letters!")
  //   console.log(passwordLength.charAt[1])
  //   return
  // }

//the prompts for what to make the password with
  var numbers = confirm('would you like to use numbers?');
  var uppercase = confirm('would you like uppercase letters?');
  var lowercase = confirm('would you like lowercase letters?');
  var special = confirm('would you like special characters?');




console.log(passwordLength);

//alert if they didnt say yes to anything
if (!numbers && !uppercase && !lowercase && !special){
  alert('wrong call friendo, you need to add somthing or what will i make your password with?')
  return
}
// if they selected numbers then this is added
if (numbers){
passwordRequirements = passwordRequirements.concat(numberArray)
//  if they selected uppercase then this is added
}
if (uppercase){
    passwordRequirements = passwordRequirements.concat(upperLetterArry)
  
    }
 //   if they selected lowercase then this is added
 if (lowercase){
  passwordRequirements = passwordRequirements.concat(lowerLetterArry)
 
} 
// if they selected special character then this is added
if (special){
 passwordRequirements = passwordRequirements.concat(specialArray)
 }
 console.log(passwordRequirements)
//takes the selected imputs and compiles the password
 for (var i = 0; i < passwordLength; i++) {
  var randomPassword = passwordRequirements.charAt(Math.floor(Math.random() * passwordRequirements.length));
  generatedPassword = generatedPassword.concat(randomPassword)
}
//returns the new password
return generatedPassword;
}


//takes the value of the generated password and pushes it to the html
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//adds the function to the button
generateBtn.addEventListener("click", writePassword);