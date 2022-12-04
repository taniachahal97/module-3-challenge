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


// define strings with characters, numbers and special characters 
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var numericText = "0123456789";
var specialCharacters = "@$#*&-"
var randomPassword = "";

//define function that takes input from users 
function generatePassword(){

  // ask user the length for the password  
  var totalLength = prompt("What length do you want for your password");

  if (totalLength >= 8 && totalLength <= 128)
  {

    // confirm from user if they want to include numeric characters 
    var choice1 = confirm("Do you want to include digits in your password");

    //confirm from user if they want to include Uppercase characters 
    var choice2 = confirm("Do you want to include uppercase letters in your password");

    //confirm from user if they want to include lowercase characters
    var choice3 = confirm("Do you want to include lowercase characters in your password");

    //confirm from user if they want to include special characters 
    var choice4 = confirm("Do you want to include special characters in your password");

    // validate if the user has selected any of the above prompts 

    if(choice1 === true || choice2 === true || choice3 === true || choice4 === true)
    {
      while(randomPassword.length < totalLength)
      {

        if(choice1 === true)
        {
          randomPassword += numericText.charAt(Math.floor(Math.random() * numericText.length));
        }

        if(choice2 === true)
        {
          randomPassword += letters.charAt(Math.floor(Math.random() * letters.length));
        }

        if(choice3 === true)
        {
          randomPassword += lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length));
        }

    
        if(choice4 === true)
        {
          randomPassword += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.lenth));
        }

      }
      
      //return final password value 

      return randomPassword;
    }

    else
    {
      confirm("You must include atleast one character type in your Password");
      confirm("Try Again!!");
    }    

  }

  else
  {
    confirm("The password length should atleast be 8 characters long and should not be more than 128 characters");
    confirm("Try again!!");
  }
 
}