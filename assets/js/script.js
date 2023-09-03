import createFilterItem from "./createFilterItem.js";

const selectInput = document.querySelector("select");


console.log(selectInput);

selectInput.addEventListener("change", createFilterItem);

// allOptions.forEach(option => {
//     option.addEventListener("selected", ()=> {
//         console.log("hi!");
//     });
// })