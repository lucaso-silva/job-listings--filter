const selectInput = document.querySelector("select");
const filterItensArea = document.querySelector(".filter-options");

export default function createFilterItem() {
    const newDiv = document.createElement("div");
    const newItemFilter = document.createElement("p");
    let selectValeu = selectInput.value;
    newItemFilter.classList.add("option");
    //newItemFilter.classList.add(selectValeu.toLowerCase());    * Need to use the optgroup label as class.
    newItemFilter.textContent = selectValeu;

    const newItemCloseBtn = document.createElement("span")
    newItemCloseBtn.textContent = "X";

    newDiv.appendChild(newItemFilter);
    newDiv.appendChild(newItemCloseBtn);

    filterItensArea.appendChild(newDiv);
}