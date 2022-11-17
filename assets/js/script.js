const formEl = $('#info-form')
const firstNameEl = $('input[name="first-name"]')
const lastNameEl = $('input[name="last-name"]')
const phoneNumEl = $('input[name="phone-number"]')
const emailEl = $('input[name="email-address"]')
const promoCodeEl = $('input[name="promo-code"]')
const howDidEl = $('input[name="how-did"]')
const termsConditionsEl = $('input[name="terms-conditions"]')

function handleFormSubmit(event) {
    event.preventDefault();

    console.log('First Name:', firstNameEl.val());
    console.log('Last Name:', lastNameEl.val());
    console.log('Phone Number:', phoneNumEl.val());
    console.log('Email:', emailEl.val());
    console.log('Promo Code:', promoCodeEl.val());
    console.log('How you found out about us:',howDidEl.val())
}

formEl.on('submit', handleFormSubmit)