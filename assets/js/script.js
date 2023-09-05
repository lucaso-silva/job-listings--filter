import createFilterItem from "./createFilterItem.js";

const selectInput = document.querySelector("select");
const buttonClear = document.querySelector("button");
const filterItensArea = document.querySelector(".filter-options");




fetch("data.json").then((response)=>{
    response.json().then((dados)=>{
        dados.map((dado) => {
            console.log(`${dado.company}, ${dado.position}`)
        });
    })
})

selectInput.addEventListener("change", createFilterItem);
buttonClear.addEventListener("click", ()=>{
    filterItensArea.textContent = "";
});