import createFilterItem from "./createFilterItem.js";
import createCard from "./createCard.js";
import createSelectOption from "./createSelectOptions.js";

const selectInput = document.querySelector("select");
const buttonClear = document.querySelector("button");
const filterItensArea = document.querySelector(".filter-options");

const jsonData = fetch("data.json");
jsonData.then((response)=>{
    response.json()
    .then((data)=>{
        data.map((item) => {
            createCard(item);
        });
        createSelectOption(data);
    });
})

selectInput.addEventListener("change", createFilterItem);
buttonClear.addEventListener("click", ()=>{
    filterItensArea.textContent = "";
});