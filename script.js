const form = document.getElementById("transaction-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const transactionList = document.getElementById("transaction-list");

let transactions = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;

  if (!description || isNaN(amount)) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const transaction = {
    id: Date.now(),
    description,
    amount,
    category,
  };

  transactions.push(transaction);
  renderTransactions();
  form.reset();
});

function renderTransactions() {
  transactionList.innerHTML = "";

  transactions.forEach((transaction) => {
    const li = document.createElement("li");
    li.textContent = `${transaction.description} - R$ ${transaction.amount.toFixed(2)} [${transaction.category}]`;
    li.style.borderLeftColor = transaction.amount < 0 ? "#f44336" : "#4caf50"; // Vermelho para gasto
    transactionList.appendChild(li);
  });
}
