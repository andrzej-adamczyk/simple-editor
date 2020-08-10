import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const entry = localStorage.getItem("entry");

let result = "";

if (entry) {
  result = entry;
}

const input = document.querySelector(".input--js");

input.value = result;

const save_button = document.querySelector(".save--js");

save_button.addEventListener("click", () => {
  localStorage.setItem("entry", input.value);
});

const clear_button = document.querySelector(".clear--js");

clear_button.addEventListener("click", () => {
  const element = document.querySelector(".input--js");
  element.value = "";
});

const load_button = document.querySelector(".load--js");

load_button.addEventListener("click", () => {
  const saved = localStorage.getItem("entry");
  console.log(saved);
  const element = document.querySelector(".input--js");
  element.value = saved;
  console.log(element);
});

// const entry = localStorage.getItem("entry");

// console.log(entry);

// let result = "";

// if (entry) {
//   console.log(`wartość entry: ${entry}`);
//   result = entry;
// }

// // const entryInput = document.querySelector(".input--js");
// // entryInput.value = result;

// const button = document.querySelector(".load--js");

// console.log(button);
