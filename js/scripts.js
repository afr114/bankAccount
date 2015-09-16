function bankAccount(firstName, lastName, initialDeposit){
  this.customerName = firstName + " " + lastName;
  this.initialDeposit = initialDeposit;
  this.balance = initialDeposit;
}

bankAccount.prototype.withdraw = function(withdrawAmount) {
  this.balance -= withdrawAmount;
}

bankAccount.prototype.deposit = function(depositAmount) {
  this.balance += depositAmount;
}
