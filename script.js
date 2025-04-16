const input =  document.getElementById("expenses-input")
const addButton =  document.getElementById("add-button")
const expensesList = document.getElementById("expenses-list")

addButton.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
    ${input.value}
    <button class = "delete-button">Delete</button>
    `;

    expensesList.appendChild(li);
    input.value = "";

    li.querySelector(".delete-button").addEventListener("click", () => {
        li.remove();
    });
});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addButton.click();
});