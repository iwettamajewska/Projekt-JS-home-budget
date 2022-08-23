let nameIncome = document.querySelector("#name-input");
let amountCost = document.querySelector("#amount-input");
let sumIncomeExpense = document.querySelector("#add-btn");
let restSum = document.querySelector("#rest-sum");
let unorderedListin = document.querySelector("#un-list-in");
let unorderedListexp = document.querySelector("#un-list-exp");
let incomeForm = document.querySelector("#income-form");
const income = [];

incomeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let addItems = {
    name: nameIncome.value,
    amount: amountCost.value,
    id: Math.random(),
  };
  income.push(addItems);

  addIncomeList();
  
});

function addIncomeList() {
    // divy texty
    unorderedListin.innerText = "";

    income.forEach((item) => {
      const li = document.createElement("li");
      const editButton = document.createElement("button");
      const delateButton = document.createElement("button");
      editButton.textContent = "Edytuj";
      delateButton.textContent = "Usuń";
      const span = document.createElement("span");
      span.textContent = `${item.name} : ${item.amount} zł`;
      li.appendChild(span);
      li.appendChild(editButton);
      li.appendChild(delateButton);

      unorderedListin.appendChild(li);
    });
  }