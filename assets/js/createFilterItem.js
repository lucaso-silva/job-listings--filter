const selectInput = document.querySelector("select");
const filterItensArea = document.querySelector(".filter-options");

export default function createFilterItem() {
    const newDiv = document.createElement("div");
    const newItemFilter = document.createElement("p");
    newItemFilter.classList.add("option")
    newItemFilter.textContent = selectInput.value;

    const newItemCloseBtn = document.createElement("span")
    newItemCloseBtn.textContent = "X";

    newDiv.appendChild(newItemFilter);
    newDiv.appendChild(newItemCloseBtn);

    filterItensArea.appendChild(newDiv);
}