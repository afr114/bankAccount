describe('bankAccount', function(){
  it("creates a new bank account", function(){
    var testAccount = new bankAccount("John", "Smith", 20);
    expect(testAccount.customerName).to.equal("John Smith");
    expect(testAccount.initialDeposit).to.equal(20);
    expect(testAccount.balance).to.equal(20);
  });

  it("removes an amount out of the bank account", function(){
    var testAccount = new bankAccount("John", "Smith", 20);
    testAccount.withdraw(20);
    expect(testAccount.balance).to.equal(0);
  })
  it("adds an amount to the bank account", function(){
    var testAccount = new bankAccount("John", "Smith", 20);
    testAccount.deposit(10);
    expect(testAccount.balance).to.equal(30);
  })
});
