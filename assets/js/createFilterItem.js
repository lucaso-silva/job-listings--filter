const selectInput = document.querySelector("select");
const filterItensArea = document.querySelector(".filter-options");

export default function createFilterItem() {
    const newDiv = document.createElement("div");
    const newItemFilter = document.createElement("p");
    let selectValeu = selectInput.value;
    let indexSelectOption = selectInput.selectedIndex;
    newItemFilter.classList.add("option");
    newItemFilter.classList.add(selectInput[indexSelectOption].parentElement.label.toLowerCase());
    newItemFilter.textContent = selectValeu;

    const newItemCloseBtn = document.createElement("span")
    newItemCloseBtn.textContent = "X";

    newDiv.appendChild(newItemFilter);
    newDiv.appendChild(newItemCloseBtn);

    filterItensArea.appendChild(newDiv);
}