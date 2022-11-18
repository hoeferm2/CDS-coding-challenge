const formEl = $('#info-form')
const firstNameEl = $('input[name="first-name"]')
const lastNameEl = $('input[name="last-name"]')
const phoneNumEl = $('input[name="phone-number"]')
const emailEl = $('input[name="email-address"]')
const promoCodeEl = $('input[name="promo-code"]')
const howDidEl = $('select[name="how-did"]')
const otherSelectedEl = $('input[name="other-selected"]')
const termsConditionsEl = $('input[name="terms-conditions"]')


// adds and removes text box based on  whether or not the option "Other..." was selected. 
function addTextForOther (event) {
  event.preventDefault()
  if (howDidEl.val() == "Other...") {
    $("#how-did-form").append('<input type="text" class="form-control" name="other-selected" id="other-selected" maxlength="255" required><label for="promo-code" class="form-label" id="is-required-other"> Is required*</label>');
  } else {
    $("#other-selected").remove()
    $("#is-required-other").remove()
  }
}

// on seleciton of howDidEl.val the required attribute is removed from promocode. Changes bottom label of promo-code-div
function switchRequired(event) {
  event.preventDefault()
  if (howDidEl.val() != "") {
    console.log(howDidEl.val())
    $('#promo-code').attr('required',false)
    $('#is-required-promo').html("Optional*")
  } else {
    $('#promo-code').attr('required',true)
    $('#is-required-promo').html("Is required*")
  }
  console.log('This worked')
}



function handleFormSubmit(event) {
    event.preventDefault();
    // log values 
    console.log('First Name:', firstNameEl.val());
    console.log('Last Name:', lastNameEl.val());
    console.log('Phone Number:', phoneNumEl.val());
    console.log('Email:', emailEl.val());
    console.log('Promo Code:', promoCodeEl.val());
    console.log('How you found out about us:',howDidEl.val() + otherSelectedEl.val())
    console.log("Read terms and condtions?" + termsConditionsEl.val())


    //clear inputs
    $('input[type="text"]').val('');
    $('input[type="email"]').val('');
    $('input[type="number]').val('');
    $('input[type="checkbox"]').prop('checked', false);
}



// promoCodeEl.on('keyup',disableDropDown)
howDidEl.on('change',addTextForOther)
howDidEl.on('change',switchRequired)
formEl.on('submit', handleFormSubmit)