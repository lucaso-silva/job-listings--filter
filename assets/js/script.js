import createFilterItem from "./createFilterItem.js";

const selectInput = document.querySelector("select");
const buttonClear = document.querySelector("button");
const filterItensArea = document.querySelector(".filter-options");

selectInput.addEventListener("change", createFilterItem);
buttonClear.addEventListener("click", ()=>{
    filterItensArea.textContent = "";
});