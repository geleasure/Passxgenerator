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
