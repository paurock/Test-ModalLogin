const checkForm = () => {     
    
    const form = document.querySelector(".modal-login-wrapbox__content")

    const myRegExpPhone = form.phone.pattern
    const mobile = form.phone.value
    const password = form.password.value
    const submitButton = form.submitButton

    const isValidatedPhone = mobile.match(myRegExpPhone) ? true : false
    const isValidatedPassword = password.length>=4 ? true : false
    const isValidatePhoneAndPassword = () => isValidatedPhone && isValidatedPassword ? true : false
     
   if (isValidatePhoneAndPassword()) {
    submitButton.style = 'background-color:none; color:white; border:1px solid white; opacity:0.9;'
    submitButton.disabled=false

   } else {
       submitButton.style = 'background-color:none; color:gray; border:1px solid gray; opacity:0.2;'       
       submitButton.disabled=true
   }
   
} 
    
document.querySelector('.modal-login-wrapbox__inputs-phone').addEventListener('keydown', () =>checkForm()) 
document.querySelector('.modal-login-wrapbox__inputs-password').addEventListener('keydown', () =>checkForm()) 