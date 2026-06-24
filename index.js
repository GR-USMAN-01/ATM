var accountNo = prompt("Enter your Account Number");
var balance = +prompt("Enter the amount you want in your Account");

for (var i = 0; i >= 0; i++) {

var option = prompt(
  "Select Option:\n" +
  "0. Exit\n" +
  "1. Check Balance\n" +
  "2. Deposit\n" +
  "3. Withraw\n" +
  "4. Transfer"
);

if (option === "0") {
  console.log("Thank you for using ATM");
  break;
}

if (option === "1"){
  console.log("Your balance is " + balance);
}
else if (option === "2"){
  var Deposit = +prompt("Enter the amount you want to deposit");
  balance += Deposit
  console.log("Your amount was succesfully deposit and your current balance is " + balance);
}

else if (option === "3"){
  var Withraw = +prompt("Enter the amount you want to withraw");
  if (Withraw <= balance){
    balance -= Withraw
    console.log("Your amount was succesfully withraw and your current balance is " + balance);
  }
  else {
    console.log("You don't have enough balance");
  }
}

else if (option === "4"){
    var Transfer = +prompt("Enter the amount you want to Transfer");
  if (Transfer <= balance){
    balance -= Transfer
    console.log("Your amount was succesfully Transfer and your current balance is " + balance);
  }
  else {
    console.log("You don't have enough balance");
  }
}

else {
    console.log("Invalid Option");
}
}


 