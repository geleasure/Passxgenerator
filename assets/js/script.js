// function to generate password string
var generatePassword = function() {
  

    // character pools to be added together based on user input
    var mainCharacterPool = "";
    var lowercasePool = "abcdefghijklmnopqrstuvwxyz"
    var uppercasePool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberPool = "0123456789";
    var specialCharPool = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var password = '';
    
    
    // prompt user to select character type, checks for at least one selection
    while (true) {
      var askLowercase = confirm("Do you want to use LOWERCASE LETTERS?");
      var askUppercase = confirm("Do you want to use UPPERCASE LETTERS?");
      var askNumbers = confirm("Do you want to use NUMBERS?");
      var askSpecialChars = confirm("Do you want to use SPECIAL CHARACTERS?");
      if (askLowercase || askUppercase || askNumbers || askSpecialChars) {
        break;
      }
      else {
        alert("Please select the correct options to create a strong password based on your requierments");
      }
    };


    // prompt user for password length, checks for falsy or negative inputs (non-numeric values passed to Number() will return NaN)
  while (true) {
    askNumCharacters = Number(window.prompt("How many characters would you like to use?"));
    if (askNumCharacters && askNumCharacters > 8 && askNumCharacters < 128) {
      break;
    }
    else if (!askNumCharacters) {
      alert("Try selecting just numbers");
    }
    else if (askNumCharacters <= 8) {
      alert("Password must be more than 8 letters/characters");
    }
    else if (askNumCharacters > 128) {
      alert("Password must be less than 128 letters/characters");
    }
    else {
      alert("I don't know what you did wrong, and I don't think I really care at this point 😁")
    }
  }
