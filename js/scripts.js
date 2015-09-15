function Contact(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state, category) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.category = category;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state + ", " + this.category;
}

function resetFields() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
}


$(document).ready(function() {


  $("#add-address").click(function() {
    $("#new-addresses").append(
      '<div class="new-address">' +
      '<div class="form-group">' +
      '<label for="new-street">Street</label>' +
      '<input type="text" class="form-control new-street">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="new-city">City</label>' +
      '<input type="text" class="form-control new-city">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="new-state">State</label>' +
      '<input type="text" class="form-control new-state">' +
      '</div>' + '<div class="form-group">' +
      '<label for="new-state">Type</label>' +
      '<br>' +
      '<select id="new-type">' +
      '<option value="home">Home</option>' +
      '<option value="work">Work</option>' +
      '<option value="vacation">Vacation</option>' +
      '</select>' +
      '</div>'
    );
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    $("#show-header").fadeIn("fast");

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);


    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedCategory = $(this).find("#new-type").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedCategory);
      newContact.addresses.push(newAddress);
    });



    $("#show-header").show();
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");



    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul.addresses").text("");
        newContact.addresses.forEach(function(address) {
          $("ul.addresses").append("<li>" + address.fullAddress() + "</li>")
        });
    });
  resetFields()
  });
});
