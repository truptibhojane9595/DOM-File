function validateform() {
    let retrunval = true;
    clearerror();
    let name = document.forms["myforms"]["fname"].value;
    if (name.length < 3) {
        seterror("name", "Length of name is to short");
        retrunval = false;
    }

    let email = document.forms["myforms"]["femail"].value;
    if (!email.endsWith(".com")) {
        seterror("email", "email is not valid");
        retrunval = false;
    }

    let phone = document.forms["myforms"]["fphone"].value;
    if (phone.length != 10) {
        seterror("phone", "phone number should be a 10 digits");
        retrunval = false;
    }
    if (
        !phone.startsWith(9) &&
        !phone.startsWith(8) &&
        !phone.startsWith(7) &&
        !phone.startsWith(6)
    ) {
        seterror("phone", "*Phone number should start with 9, 8, 7 or 6");
        retrunval = false;
    }

    let password = document.forms["myforms"]["femail"].value;
    if (password.length < 6) {
        seterror("pass", "password should be at least 6 character");
        retrunval = false;
    }
    let cpassword = document.forms["myforms"]["femail"].value;
    if (password != cpassword) {
        seterror("cpass", " password and confirm password should me match");
        retrunval = false;
    }
    return retrunval;
}

function seterror(id, error) {
    let element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function clearerror() {
    error.document.getElementsByClassName("formerror");
    for (let items of error) {
        items.innerHTML = "";
    }
}