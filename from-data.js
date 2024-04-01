const form = document.querySelector("form");
const name = document.querySelector("#exampleInputName")
const email = document.querySelector("#exampleInputEmail1");
const subject = document.querySelector("#exampleInputsubject");
const password = document.querySelector("#exampleInputPassword1");

form.addEventListener("submit", formHandler);

function formHandler(e){
    e.preventDefault();
    // console.log(email.value);
    // console.log(password.value);

    const formInfo = {
        Email: email.value,
        password: password.value,
    }

    console.log(formInfo);

    email.value = "",
    password.value = ""
    
}