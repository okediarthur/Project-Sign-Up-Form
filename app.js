function checkPassword(form){
    // get passwords from the fields in the form
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // check if passwords match

    if(password != confirmPassword){
        alert("* Passwords do not match.");
        return false;
    } else{
        alert("Passwords Match!");
        return true;
    }

}