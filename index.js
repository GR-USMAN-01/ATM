var accountNumbers = [];
var pins = [];
var names = [];
var balances = [];

var running = true;
while (running) {
  var choice = prompt(
    "===== GRBL =====\n" +
    "0. Create Account\n" +
    "1. Login\n" +
    "2. Exit"
  );

  if (choice === "0") {
    var accNo = prompt("Enter Account Number");
    var name = prompt("Enter Name");
    var pin = +prompt("Enter PIN");
    var balance = +prompt("Enter Initial Balance");

    var exists = false;

    for (var i = 0; i < accountNumbers.length; i++) {
      if (accountNumbers[i] === accNo) {
        exists = true;
        break;
      }
    }
    if (exists) {
      console.log("Account Number Already Exists. Try Another One");
    } else if (balance < 0) {
      console.log("Balance Can't Be Negative")
    } else {
      accountNumbers.push(accNo);
      pins.push(pin);
      names.push(name);
      balances.push(balance);

      console.log("Your Account Was Creted Successfully\n" + "Account Holder: " + name);
    }
  }

  else if (choice === "1") {
    var logAccNo = prompt("Enter Account Number");
    var logPin = +prompt("Enter PIN");
    var found = false;
    var currentUser;

    for (var i = 0; i < accountNumbers.length; i++) {
      if (accountNumbers[i] === logAccNo && pins[i] === logPin) {
        found = true;
        currentUser = i;
        break;
      }
    }
    if (!found) {
      console.log("Invalid Account Number or PIN");
    } else {
      console.log("Welcome " + names[currentUser]);

      var login = true

      while (login) {

        var option = prompt(
          "Select Option:\n" +
          "0. Check Balance\n" +
          "1. Deposit\n" +
          "2. Withraw\n" +
          "3. Transfer\n" +
          "4. Logout"
        );

        if (option === "0") {
          console.log("Your Balance Is " + balances[currentUser]);
        }

        else if (option === "1") {
          var deposit = +prompt("Enter The Amount You Want To Deposit");
          if (deposit <= 0) {
            console.log("Deposit Amount Must Be Greater Than 0")
          } else {
            balances[currentUser] += deposit;
            console.log("Your Amount Was Succesfully Deposit And Your Current Balance Is " + balances[currentUser]);
          }
        }

        else if (option === "2") {
          var withdraw = +prompt("Enter The Amount You Want To Withdraw");
          if (withdraw <= 0) {
            console.log("Withdraw Amount Must Be Greater Than 0");
          } else if (withdraw > balances[currentUser]) {
            console.log("Insufficient Balance");
          } else {
            balances[currentUser] -= withdraw;
            console.log("Your Amount Was Succesfully Withdraw And Your Current Balance Is " + balances[currentUser]);
          }
        }

        else if (option === "3") {
          var receiverAcc = prompt("Enter Receiver Account Number");
          var transfer = +prompt("Enter the amount you want to Transfer");
          var found = false;
          var receiverUser;
          for (var i = 0; i < accountNumbers.length; i++) {
            if (accountNumbers[i] === receiverAcc) {
              found = true;
              receiverUser = i;
              break;
            }
          }
          if (!found) {
            console.log("Receiver Account Not Found");
          } else if (receiverUser === currentUser) {
            console.log("You Cannot Transfer To Your Own Account");
          } else if (transfer <= 0) {
            console.log("Transfer Amount Must Be Greater Than 0");
          } else if (transfer > balances[currentUser]) {
            console.log("Insufficient Balance");
          } else {
            balances[currentUser] -= transfer;
            balances[receiverUser] += transfer;
            console.log("Transferred Successfully To " + names[receiverUser])
            console.log("Your Current Balance Is " + balances[currentUser]);
          }
        }

        else if (option === "4") {
          login = false;
          console.log("Logged Out Successfully");
        }

        else {
          console.log("Invalid Option");
        }
      }
    }
  }

  else if (choice === "2") {
    running = false;
    console.log("Thank You For Using The Bank");
  }

  else {
    console.log("Invalid Choice");
  }
}