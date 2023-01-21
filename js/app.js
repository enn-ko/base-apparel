let mainPage = document.querySelector('.main-page');
let form = document.getElementById('form');
let email = document.getElementById('email');
let emailError = document.querySelector('.error-message');
let errorIcon = document.querySelector('.error-icon');
let submit = document.getElementById('submit');
let configContainer = document.getElementById('config-container');

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regEx.test(email.value)){
        mainPage.classList.add('hide');
        configContainer.removeAttribute('hidden');
    }else{
        email.classList.add('error');
        emailError.classList.add('active');
        errorIcon.classList.remove('hide');
        submit.classList.add('error-btn');
        console.log('error')
    }
        // emailError.classList.remove('hide');
})
email.addEventListener("keyup", ()=>{
    emailError.classList.remove('active');
    errorIcon.classList.add('hide');
    submit.classList.remove('error-btn');
})