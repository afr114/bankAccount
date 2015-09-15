describe('Contact', function(){
  it("creates a new contact with the given specifications", function(){
    var testContact = new Contact("John", "Smith");
    expect(testContact.firstName).to.equal("John");
    expect(testContact.lastName).to.equal("Smith");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("John","Smith");
    expect(testContact.fullName()).to.equal("John Smith");
  });
});

describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("3711 SW Pomona St", "Portland", "Oregon", "Home");
    expect(testAddress.street).to.equal("3711 SW Pomona St");
    expect(testAddress.city).to.equal("Portland");
    expect(testAddress.state).to.equal("Oregon");
    expect(testAddress.category).to.equal("Home");
  });

  it("adds the fullAddress method to all addresses", function(){
    var testAddress = new Address("3711 SW Pomona St","Portland","Oregon", "Home");
    expect(testAddress.fullAddress()).to.equal("3711 SW Pomona St, Portland, Oregon, Home");
  });
});
