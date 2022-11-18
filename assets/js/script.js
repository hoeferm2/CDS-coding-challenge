const formEl = $('#info-form')
const firstNameEl = $('input[name="first-name"]')
const lastNameEl = $('input[name="last-name"]')
const phoneNumEl = $('input[name="phone-number"]')
const emailEl = $('input[name="email-address"]')
const promoCodeEl = $('input[name="promo-code"]')
const howDidEl = $('select[name="how-did"]')
const termsConditionsEl = $('input[name="terms-conditions"]')




function handleFormSubmit(event) {
    event.preventDefault();
    // log values 
    console.log('First Name:', firstNameEl.val());
    console.log('Last Name:', lastNameEl.val());
    console.log('Phone Number:', phoneNumEl.val());
    console.log('Email:', emailEl.val());
    console.log('Promo Code:', promoCodeEl.val());
    console.log('How you found out about us:',howDidEl.val())


    //clear inputs
    $('input[type="text"]').val('');
    $('input[type="email"]').val('');
    $('input[type="number]').val('');
    $('input[type="checkbox"]').prop('checked', false);
}

// function disableDropDown (event) {
//   event.preventDefault()
//   if (promoCodeEl.val != "") {
//     $('select[name="how-did"]').attr('disabled',true)
//   }
//    else if (promoCodeEl.val.len = 0) {
//     $('select[name="how-did"]').removeAttr('disabled')
//   }
//   console.log(promoCodeEl.val())
// } 

function addTextForOther (event) {
  event.preventDefault()
  if (howDidEl.val() == "Other...") {
    $(formEl).append('required')
  } else {
    console.log('No need to describe.')
  }
}


function switchRequired(event) {
  event.preventDefault()
  if (howDidEl.val() != "") {
    $('input[name="promo-code"]').attr('required',false)
  } else {
    $('input[name="promo-code"]').attr('required',true)
  }
  console.log('This worked')
}

function otherInput(event) {
  event.preventDefault()
}

// promoCodeEl.on('keyup',disableDropDown)
howDidEl.on('change',addTextForOther)
howDidEl.on('change',switchRequired)
formEl.on('submit', handleFormSubmit)