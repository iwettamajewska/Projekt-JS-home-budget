let nameIncome = document.querySelector("#name-input-income");
let amountCostExpense = document.querySelector("#amount-input-expense");
let nameExpense = document.querySelector("#name-input-expense");
let amountCost = document.querySelector("#amount-input");
let restSum = document.querySelector("#rest-sum");
let unorderedListIn = document.querySelector("#un-list-in");
let unorderedListExp = document.querySelector("#un-list-exp");
let incomeForm = document.querySelector("#income-form");
let expenseForm = document.querySelector("#expense-form");

let income = [];
let expense = [];

incomeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let addItems = {
    name: nameIncome.value,
    amount: amountCost.value,
    id: Math.random(),
  };
  income.push(addItems);

  addList("income");
});

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let addItems = {
    name: nameExpense.value,
    amount: amountCostExpense.value,
    id: Math.random(),
  };
  expense.push(addItems);

  addList("expense");
});

function addList(type) {
  const list = type === "income" ? unorderedListIn : unorderedListExp;

  list.innerText = "";

  const source = type === "income" ? income : expense;

  source.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("li-income");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    editButton.textContent = "Edytuj";
    editButton.classList.add("edit-btn", "li-btn", "btn", "btn-light");
    deleteButton.textContent = "Usuń";
    deleteButton.classList.add("delete-btn", "li-btn", "btn", "btn-light");
    let itemName = document.createElement("span");
    itemName.classList.add("item-name");
    let itemNameValue = document.createElement("span");
    itemNameValue.classList.add("item-name-value");
    itemName.textContent = `${item.name}`;
    itemNameValue.textContent = `${item.amount} `;
    let currency = document.createElement("span");
    currency.classList.add("currency");
    currency.textContent = `zł`;
    li.appendChild(itemName);
    li.appendChild(itemNameValue);
    li.appendChild(currency);

    const boxForButtons = document.createElement("span");
    boxForButtons.classList.add("box-buttons");
    li.appendChild(boxForButtons);
    boxForButtons.appendChild(editButton);
    boxForButtons.appendChild(deleteButton);
    const boxForSpan = document.createElement("span");
    boxForSpan.classList.add("boxSpan");
    li.appendChild(boxForSpan);
    const saveButton = document.createElement("button");
    const cancelButton = document.createElement("button");
    saveButton.textContent = "Zapisz";
    saveButton.classList.add(
      "save-btn",
      "li-btn",
      "display-none",
      "btn",
      "btn-light"
    );
    cancelButton.textContent = "Anuluj";
    cancelButton.classList.add(
      "cancel-btn",
      "li-btn",
      "display-none",
      "btn",
      "btn-light"
    );
    boxForButtons.appendChild(saveButton);
    boxForButtons.appendChild(cancelButton);
    calculateSum();

    list.appendChild(li);
    const itemNameAmount = itemNameValue.textContent;
    const itemNameVal = itemName.textContent;

    editButton.addEventListener("click", function () {
      editButton.classList.add("display-none");
      deleteButton.classList.add("display-none");
      saveButton.classList.remove("display-none");
      cancelButton.classList.remove("display-none");
      itemName.setAttribute("contenteditable", "true");
      itemNameValue.setAttribute("contenteditable", "true");
    });

    saveButton.addEventListener("click", function () {
      const alert = list.querySelector(".alert");

      if (!/^(\d+(?:[\.\,]\d{2})?)$/.test(itemNameValue.textContent)) {
        if (!alert) {
          const alert = document.createElement("div");
          alert.classList.add("alert");
          alert.textContent = "Wprowadź wartości liczbowe";
          list.appendChild(alert);
        }
      } else {
        if (alert) {
          list.removeChild(alert);
        }
        editButton.classList.remove("display-none");
        deleteButton.classList.remove("display-none");
        saveButton.classList.add("display-none");
        cancelButton.classList.add("display-none");
        itemName.setAttribute("contenteditable", "false");
        itemNameValue.setAttribute("contenteditable", "false");
        const newArr = source.map((element) =>
          element.id === item.id
            ? {
                ...element,
                name: itemName.textContent.trim(),
                amount: itemNameValue.textContent.trim(),
              }
            : element
        );
        type === "income" ? (income = newArr) : (expense = newArr);
        calculateSum();
      }
    });

    cancelButton.addEventListener("click", function () {
      editButton.classList.remove("display-none");
      deleteButton.classList.remove("display-none");
      saveButton.classList.add("display-none");
      cancelButton.classList.add("display-none");
      itemName.setAttribute("contenteditable", "false");
      itemNameValue.setAttribute("contenteditable", "false");
      itemName.textContent = itemNameVal;
      itemNameValue.textContent = itemNameAmount;
      calculateSum();
      addList(type);
    });

    deleteButton.addEventListener("click", (event) =>
      deleteItem(item, event, type, source)
    );
  });
}

function deleteItem(item, event, type, source) {
  event.preventDefault();

  const newArr = source.filter((element) => element.id !== item.id);
  type === "income" ? (income = newArr) : (expense = newArr);
  addList(type);
  calculateSum();
}

function calculateSum() {
  let incomeSum = income.reduce((acc, item) => {
    return Number(acc) + Number(item.amount);
  }, 0);
  document.getElementById("sum-income").innerHTML = incomeSum.toFixed(2);

  let expenseSum = expense.reduce((acc, item) => {
    return Number(acc) + Number(item.amount);
  }, 0);
  document.getElementById("sum-expense").innerHTML = expenseSum.toFixed(2);

  const difference = calculateDifference(incomeSum, expenseSum);

  showText(incomeSum, expenseSum, difference);
}

function calculateDifference(incomeSum, expenseSum) {
  return incomeSum - expenseSum;
}

function showText(incomeSum, expenseSum, difference) {
  if (incomeSum > expenseSum) {
    document.getElementById(
      "rest-sum"
    ).innerHTML = `Możesz jeszcze wydać <strong class="rest-sum-number">${difference.toFixed(
      2
    )}</strong> zł.`;
  } else if (difference === 0) {
    document.getElementById(
      "rest-sum"
    ).innerHTML = `Bilans wynosi <strong class="rest-sum-number">zero</strong>`;
  } else if (difference < 0) {
    document.getElementById(
      "rest-sum"
    ).innerHTML = `Bilans jest ujemny. Jesteś na minusie <strong class="rest-sum-number">${difference.toFixed(
      2
    )}</strong> zł.`;
  }
}
