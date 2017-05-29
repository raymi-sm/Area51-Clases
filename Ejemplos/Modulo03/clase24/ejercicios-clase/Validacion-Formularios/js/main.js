$(document).ready(function(){
  $('#form').validate({
    rules: {
      name: {
        required: true
      },
      age: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: 'Por favor ingresa tu nombre'
      },
      email: {
        required: 'Por favor ingresa tu correo electronico',
        email: 'Por favor ingresa un correo electrónico válido'
      }
    }
  })
});







/*$('#form').validate({ 
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


$.validator.addMethod('age_check', function(value) {
    if (value >= 18){
      return true;
    }
});

$.validator.addMethod('phone_check', function(value) {
    if (value.length === 9){
      return true;
    }
});*/