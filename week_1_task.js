
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const passwordError = document.getElementById('password-error');
const submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML ="name required";
        return false;
    }
    nameError.innerHTML ='valid';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('phone').value;

    if(phone.length == 0){
        nameError.innerHTML ="phone number required";
        return false;
    }
    
    phoneError.innerHTML ='valid';
    return true;
}


function validateEmail(){
    var email = document.getElementById('email').value;
    var mailformat = /\s+@\s+\.\s+/;
    
    if(email.match(mailformat)){
        emailError.innerHTML = "invalid";
        return true
        
            if(email.length == 0){
                emailError.innerHTML = "email required";
                return false;
            }
    }
    else{
        emailError.innerHTML = "valid"
        return false;
    }
}


function validatePassword(){
    var password = document.getElementById('phone').value;

    if(password.length == 0){
        passwordError.innerHTML ="password required";
        return false;
    }
    
    passwordError.innerHTML ='valid';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePassword() || !validatePhone()){
        submitError.style.display ='block';
        submitError.innerHTML = "fill the form completely before submit"
        setTimeout(function(){submitError.style.display = 'none';}, 2000);

        return false
    }
    submitError.innerHTML.message = "Form submitted successfully";
alert(message);
}
function submitForm(){
    const form = document.getElementById("myform")
    const errorDiv = document.getElementById("error")
    const successDiv = document.getElementById("success")
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var gender = document.getElementById("gender").value;
        var password = document.getElementById("password").value;

        
    
        //check if all field are filled
        if (!name() || !email() || !number() || !gender() || !password()){
            errorDiv.innerText ="please fill in all fields";
            return;
    }
    
    //check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        errorDiv.innerText = "please enter a valid email address"
        return;
    }
    
    //clear any previous error messages
    errorDiv.innerText = "";
    
    //display success message
    successDiv.innerText = "form submitted successfully"
    var message = "Form submitted successfully";
alert(message);
    });
}
    function submitForm(){
var name = document.getElementById("name").value;    
var email = document.getElementById("email").value;    
var phone = document.getElementById("phone").value;    
var gender = document.getElementById("gender").value;    
var password = document.getElementById("password").value;

var message = "Form submitted successfully";
alert(message);

document.getElementById("name").value = "";    
document.getElementById("email").value = "";    
document.getElementById("phone").value = "";    
document.getElementById("gender").value = "";    
document.getElementById("password").value = "";
    }

/*
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementByClassName('name')[2];
const gender = document.getElementById('gender');
const password = document.getElementById('password');
const successMessage = document.getElementById("success-message");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = name ? name.value : "";
    const emaild = email ? email.value : "";
    const phone = phone ? phone.value : "";
    const genderMF = gender[0].checked ? "Male" : "female"; 
    const password = password ? password.value : "";
    let valid = true;

    if (!emailRegex.test(emaild)){
        successMessage.classList.add("hidden");
        const errorMessage = document.createElement("div");
        errorMessage.innerHTML = "invalid email format, please enter a valid email address.";
        errorMessage.style.color ="red";
        document.getElementById("error-message").appendChild(errorMessage);
        setTimeout(() => {
            errorMessage.style.display = "none";
        },2000);
        valid = false;
    }

    if(valid){
        setTimeout(() => {
            successMessage.style.display ="none"
        }, 2000);
        successMessage.classList.remove("hidden");
        console.log("Name: ", name);
        console.log("Email:", emaild);
        console.log("Phone number: ", phone);
        console.log("Gender: ", genderMF);
        console.log("password: ", password);
    }
})

*/