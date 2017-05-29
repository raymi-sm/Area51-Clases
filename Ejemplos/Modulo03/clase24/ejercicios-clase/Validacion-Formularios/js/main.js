$('#form').validate({ 
    rules: {
      age: {
        age_check: true
     },
      telephone: {
        phone_check: true
      },
      email: {
        email: true
      }          
    },
    messages: {
      name: "Please enter your name",
      age: "You must be at least 18 years of age",
      telephone: "Please enter your telephone",
      email: "Please enter a valid email address",
      agree: "Please accept our policy"
    }
});


$.validator.addMethod('age_check', function(value, element) {
    if (value >= 18){
      return true;
    }
});

$.validator.addMethod('phone_check', function(value, element) {
    if (value.length === 9){
      return true;
    }
});