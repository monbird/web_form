$(document).ready(function () {
    $("#personal-info-form").submit(function (event) {
        event.preventDefault(); // powstrzymuje domyslna akcje tego event czyli submit
        var allPassed = formValidation();
        if (allPassed) {
            $("form").html("<div class='alert alert-dark alert-dismissible'>Thank you! Your details have been <strong>saved</strong>.<button id='closeAlert' type='button' class='close' data-dismiss='alert'>&times;</button></div>");
            $("#closeAlert").click(showLama);
        }
    });
    $("#first_name").on('keyup', validateFirstName);
    $("#last_name").on('keyup', validateLastName);
    $("#email").on('keyup', validateEmail);
    $("#phone").on('keyup', validatePhone);
    $("#address").on('keyup', validateAddress);
    $("#add_address").on('keyup', validateAddAddress);
    $("#city").on('keyup', validateCity);
    $("#state").on('change', validateState);
    $("#zip_code").on('keyup', validateZipCode);
});

var regexLetters = /^[A-Za-z]+$/i;
var regexZipCode = /^[0-9]{5}$/i;
var regexEmail = /^\S+@\S+\.\S+$/i;
var regexTel = /^([0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}|\([0-9]{3}\)-[0-9]{3}-[0-9]{4}|\+1{1}-[0-9]{10}|\+1{1}-[0-9]{3}-[0-9]{3}-[0-9]{4})$/i;

function showLama() {
    $("#lama").removeAttr('hidden');
}

function validateFirstName() {
    var field = $("#first_name");
    var value = field.val();
    var errorContainer = field.closest('.form-group').find('.invalid-feedback');

    if (value.length != 0 && regexLetters.test(value)) {
        field.removeClass('is-invalid').addClass('is-valid');
        errorContainer.text("").hide();
        return true;
    } else if (value.length == 0) {
        field.removeClass('is-valid').addClass('is-invalid');
        errorContainer.text("Please enter your first name").show();
        return false;
    } else if (!regexLetters.test(value)) {
        field.removeClass('is-valid').addClass('is-invalid');
        errorContainer.text("Invalid format - only letters are accepted").show();
        return false;
    }
}

function validateLastName() {
    var field = $("#last_name");
    var value = field.val();
    var errorContainer = field.closest('.form-group').find('.invalid-feedback');

    if (value.length != 0 && regexLetters.test(value)) {
        field.removeClass('is-invalid').addClass('is-valid');
        errorContainer.text("").hide();
        return true;
    } else if (value.length == 0) {
        field.removeClass('is-valid').addClass('is-invalid');
        errorContainer.text("Please enter your last name").show();
        return false;
    } else if (!regexLetters.test(value)) {
        field.removeClass('is-valid').addClass('is-invalid');
        errorContainer.text("Invalid format - only letters are accepted").show();
        return false;
    }
}

function validateEmail() {
    var field = $("#email");
    var value = field.val();
    var errorContainer = field.closest('.form-group').find('.invalid-feedback');

    if (value.length != 0 && regexEmail.test(value)) {
        field.removeClass('is-invalid').addClass('is-valid');
        errorContainer.text("").hide();
        return true;
    } else if (value.length == 0) {
        field.removeClass('is-valid').addClass('is-invalid');
        errorContainer.text("Please enter your email address").show();
        return false;
    } else if (!regexEmail.test(value)) {
        field.removeClass('is-valid').addClass('is-invalid');
        errorContainer.text("Please enter a valid email address").show();
        return false;
    }
}

function validatePhone() {
    var field = $("#phone");
    var value = field.val();

    var errorContainer = field.closest('.form-group').find('.invalid-feedback');
    var regex_result = regexTel.test(value);
    if (regex_result) {
        field.removeClass('is-invalid').addClass('is-valid');
        errorContainer.text("").hide();
        return true;
    } else if (value.length == 0) {
        field.removeClass('is-valid').removeClass('is-invalid');
        errorContainer.text("").hide();
        return true;
    } else {
        field.removeClass('is-valid').addClass('is-invalid');
        errorContainer.text("Please enter a valid phone number").show();
        return false;
    }
}

function validateAddress() {
    var field = $("#address");
    var value = field.val();
    var errorContainer = field.closest('.form-group').find('.invalid-feedback');

    if (value.length != 0) {
        field.removeClass('is-invalid').addClass('is-valid');
        errorContainer.text("").hide();
        return true;
    } else {
        field.removeClass('is-valid').addClass('is-invalid');
        errorContainer.text("Please enter your address").show();
        return false;
    }
}

function validateAddAddress() {
    var field = $("#add_address");
    var value = field.val();
    var errorContainer = field.closest('.form-group').find('.invalid-feedback');

    if (value.length != 0) {
        field.removeClass('is-invalid').addClass('is-valid');
        errorContainer.text("").hide();
        return true;
    } else {
        field.removeClass('is-valid').removeClass('is-invalid');
        errorContainer.text("").hide();
        return true;
    }
}

function validateCity() {
    var field = $("#city");
    var value = field.val();
    var errorContainer = field.closest('.form-group').find('.invalid-feedback');

    if (value.length != 0 && regexLetters.test(value)) {
        field.removeClass('is-invalid').addClass('is-valid');
        errorContainer.text("").hide();
        return true;
    } else if (value.length == 0) {
        field.removeClass('is-valid').addClass('is-invalid');
        errorContainer.text("Please enter your city").show();
        return false;
    } else if (!regexLetters.test(value)) {
        field.removeClass('is-valid').addClass('is-invalid');
        errorContainer.text("Invalid format - only letters are accepted").show();
        return false;
    }
}

function validateState() {
    var field = $("#state");
    var value = field.val();
    var errorContainer = field.closest('.form-group').find('.invalid-feedback');

    if (value.length != 0) {
        field.removeClass('is-invalid').addClass('is-valid');
        errorContainer.text("").hide();
        return true;
    } else {
        field.removeClass('is-valid').addClass('is-invalid');
        errorContainer.text("Please choose your state").show();
        return false;
    }
}

function validateZipCode() {
    var field = $("#zip_code");
    var value = field.val();
    var errorContainer = field.closest('.form-group').find('.invalid-feedback');

    if (regexZipCode.test(value)) {
        field.removeClass('is-invalid').addClass('is-valid');
        errorContainer.text("").hide();
        return true;
    } else if (value.length == 0) {
        field.removeClass('is-valid').addClass('is-invalid');
        errorContainer.text("Please enter your zip code").show();
        return false;
    } else if (!regexZipCode.test(value)) {
        field.removeClass('is-valid').addClass('is-invalid');
        errorContainer.text("Invalid format - zip code must contain 5 numbers").show();
        return false;
    }
}

function formValidation() {
    var pass = validateFirstName();
    pass = validateLastName() && pass;
    pass = validateEmail() && pass;
    pass = validatePhone() && pass;
    pass = validateAddress() && pass;
    pass = validateAddAddress() && pass;
    pass = validateCity() && pass;
    pass = validateState() && pass;
    pass = validateZipCode() && pass;
    return pass;
}