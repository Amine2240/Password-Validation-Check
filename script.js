let circle1 = document.querySelector(".c1");
let circle2 = document.querySelector(".c2");
let circle3 = document.querySelector(".c3");
let circle4 = document.querySelector(".c4");
let circle5 = document.querySelector(".c5");
let check1 = document.querySelector(".ch1");
let check2 = document.querySelector(".ch2");
let check3 = document.querySelector(".ch3");
let check4 = document.querySelector(".ch4");
let check5 = document.querySelector(".ch5");
let input = document.getElementById("password");
let slash = document.getElementById("slash");
let eye = document.querySelector(".fa-eye");
let see = document.getElementById("see");

see.addEventListener("click", () => {
  slash.classList.toggle("off");
  if (input.type === "text") {
    input.setAttribute("type", "password");
  } else {
    input.setAttribute("type", "text");
  }
});

input.onkeyup = function () {
  //8 caracters
  if (input.value.length >= 8) {
    circle1.classList.add("activ");
    check1.classList.add("desactiv");
  } else {
    circle1.classList.remove("activ");
    check1.classList.remove("desactiv");
  }

  //1 number
  let onenumber = /[0-9]/;
  let hasonenumber = onenumber.test(input.value);
  if (hasonenumber == true) {
    circle2.classList.add("activ");
    check2.classList.add("desactiv");
  } else {
    circle2.classList.remove("activ");
    check2.classList.remove("desactiv");
  }

  //lowercase

  const lowercase = /[a-z]/;

  const hasLowercase = lowercase.test(input.value);

  if (hasLowercase == true) {
    circle3.classList.add("activ");
    check3.classList.add("desactiv");
  } else {
    circle3.classList.remove("activ");
    check3.classList.remove("desactiv");
  }

  //special symbol
  let specialsym = /[!-$]/;
  let hasspecialsym = specialsym.test(input.value);
  if (hasspecialsym == true) {
    circle4.classList.add("activ");
    check4.classList.add("desactiv");
  } else {
    circle4.classList.remove("activ");
    check4.classList.remove("desactiv");
  }

  //uppercase
  let uppercase = /[A-Z]/;
  let hasuppercase = uppercase.test(input.value);
  if (hasuppercase == true) {
    circle5.classList.add("activ");
    check5.classList.add("desactiv");
  } else {
    circle5.classList.remove("activ");
    check5.classList.remove("desactiv");
  }
};
