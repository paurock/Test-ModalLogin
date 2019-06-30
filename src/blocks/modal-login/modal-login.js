const form = document.querySelector(".modal-login-wrapbox__content")

const myRegExpPhone = form.phone.pattern
const mobile = form.phone 
const password = form.password 
const submitButton = form.submitButton

const checkForm = () => {    
    const isValidatedPhone = mobile.value.match(myRegExpPhone) ? true : false
    const isValidatedPassword = password.value.length>=5 ? true : false
    const isValidatePhoneAndPassword = () => isValidatedPhone && isValidatedPassword ? true : false

  if (isValidatedPhone) {
       mobile.style.backgroundPosition = "98% -35px !important"
       mobile.style.background = "none"
    } else {
        mobile.style.backgroundPosition = "98% 0px !important"
        mobile.style.background = "white"
       }
    
   if (isValidatePhoneAndPassword()) {   
    submitButton.style.color = "white"
    submitButton.style.border = "1px solid white"     
    submitButton.disabled=false     
   } else {       
    submitButton.style.border = "0"  
    submitButton.style.border = "1px solid gray"
    submitButton.style.color = "gray"       
    submitButton.disabled=true        
   }   
} 
    
mobile.addEventListener('input', () =>checkForm()) 
password.addEventListener('input', () =>checkForm()) 
 