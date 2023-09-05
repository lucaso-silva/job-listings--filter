import createFilterItem from "./createFilterItem.js";
import createCard from "./createCard.js";

const selectInput = document.querySelector("select");
const buttonClear = document.querySelector("button");
const filterItensArea = document.querySelector(".filter-options");




fetch("data.json").then((response)=>{
    response.json().then((data)=>{
        data.map((item) => {
            createCard(item);
        });
    })
})

selectInput.addEventListener("change", createFilterItem);
buttonClear.addEventListener("click", ()=>{
    filterItensArea.textContent = "";
});