const form = document.querySelector(".modal-login-wrapbox__content")

const myRegExpPhone = form.phone.pattern
const mobile = form.phone 
const password = form.password 
const submitButton = form.submitButton

const checkForm = () => {
    const isValidatedPhone = mobile.value.match(myRegExpPhone) ? true : false
    const isValidatedPassword = password.value.length>=5 ? true : false
    const isValidatePhoneAndPassword = () => isValidatedPhone && isValidatedPassword ? true : false
     
   if (isValidatePhoneAndPassword()) {
    submitButton.style = 'background-color:none; color:white; border:1px solid white; opacity:0.9;'
    submitButton.disabled=false

   } else {
       submitButton.style = 'background-color:none; color:gray; border:1px solid gray; opacity:0.2;'       
       submitButton.disabled=true
   }
   
} 
    
mobile.addEventListener('input', () =>checkForm()) 
 password.addEventListener('input', () =>checkForm()) 
 