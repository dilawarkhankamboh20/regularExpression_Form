const username = document.querySelector("#name");
const nameError = document.querySelector(".username");
// user email
const useremail = document.querySelector("#email");
const userEmail = document.querySelector(".useremail");
// user mobile
const usermobile = document.querySelector("#mobile");
const userMobile = document.querySelector(".usermobile");

// username expression
username.addEventListener("blur", (e) => {
  const regex = /^([a-z A-Z]){1,20}$/;
  const nameValue = username.value;
  if (regex.test(nameValue)) {
    nameError.style.display = "none";
    username.style.border = "2px solid grey";
  } else {
    nameError.style.display = "block";
    username.style.border = "2px solid red";
  }
});

// email expression
useremail.addEventListener("blur", (e) => {
  const regex = /^([a-zA-Z]+)@([a-z]+)\.([a-z])/;
  const emailValue = useremail.value;
  if (regex.test(emailValue)) {
    userEmail.style.display = "none";
    useremail.style.border = "2px solid grey";
  } else {
    userEmail.style.display = "block";
    useremail.style.border = "2px solid red";
  }
});

// mobile expression
usermobile.addEventListener("blur", (e) => {
  const regex = /^[0-9]{11}$/;
  const mobileValue = usermobile.value;
  if (regex.test(mobileValue)) {
    userMobile.style.display = "none";
    usermobile.style.border = "2px solid grey";
  } else {
    userMobile.style.display = "block";
    usermobile.style.border = "2px solid red";
  }
});
