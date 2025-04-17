const form = document.getElementById("transaction-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const transactionList = document.getElementById("transaction-list");
const balanceDisplay = document.getElementById("balance");
const incomeDisplay = document.getElementById("income");
const expensesDisplay = document.getElementById("expenses");

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
    li.style.borderLeftColor = transaction.amount < 0 ? "#f44336" : "#4caf50"; 
    transactionList.appendChild(li);
  });
  updateBalance();
}

function updateBalance() {
    const incomes = transactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions.filter(t => t.amount < 0).reduce((sum, t) => sum + t.amount, 0);
    const total = incomes + expenses;

    incomeDisplay.textContent = `R$ ${incomes.toFixed(2)}`;
    expensesDisplay.textContent = `R$ ${Math.abs(expenses).toFixed(2)}`;
    balanceDisplay.textContent = `R$ ${total.toFixed(2)}`;
}
