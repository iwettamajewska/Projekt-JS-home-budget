let nameIncome = document.querySelector(".name-input");
let amountCost = document.querySelector(".amount-input");
let sumIncomeExpense = document.querySelector(".add-btn");
let restSum = document.querySelector("#rest-sum");
let unorderedListin = document.querySelector("#un-list-in");
let unorderedListexp = document.querySelector("#un-list-exp");
let incomeForm = document.querySelector("#income-form");
let income = [];
let expense = [];




incomeForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let addItems = {
    name: nameIncome.value,
    amount: amountCost.value,
    id: Math.random(),
  };
  income.push(addItems);
  expense.push(addItems)

  addIncomeList();
  
});

function addIncomeList() {
    unorderedListin.innerText = "";

    income.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add('li-income');
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      editButton.textContent = "Edytuj";
      editButton.classList.add('edit-btn', 'li-btn', 'btn', 'btn-outline-light');
      deleteButton.textContent = "Usuń";
      deleteButton.classList.add('delete-btn', 'li-btn', 'btn', 'btn-outline-light');
      let itemName = document.createElement('span');
      itemName.classList.add('item-name');
      let itemNameValue = document.createElement('span');
      itemNameValue.classList.add('item-name-value');
      itemName.textContent = `${item.name}`;
      itemNameValue.textContent = `${item.amount} `;
      let currency = document.createElement('span');
      currency.classList.add('currency');
      currency.textContent = `zł`;
      li.appendChild(itemName);
      li.appendChild(itemNameValue);
      li.appendChild(currency);

      const boxForButtons = document.createElement("span");
      boxForButtons.classList.add("boxButtons");
      li.appendChild(boxForButtons);
      boxForButtons.appendChild(editButton);
      boxForButtons.appendChild(deleteButton);
      const boxForSpan = document.createElement("span")
      boxForSpan.classList.add('boxSpan');
      li.appendChild(boxForSpan);
      const saveButton = document.createElement('button');
      const cancelButton = document.createElement('button');
      saveButton.textContent = "Zapisz";
      saveButton.classList.add('save-btn', 'li-btn', 'display-none', 'btn', 'btn-outline-light');
      cancelButton.textContent = "Anuluj";
      cancelButton.classList.add('cancel-btn', 'li-btn', 'display-none', 'btn', 'btn-outline-light');
      boxForButtons.appendChild(saveButton);
      boxForButtons.appendChild(cancelButton);
      calculateSum();

      unorderedListin.appendChild(li);


      editButton.addEventListener("click", function () {
        editButton.classList.add("display-none");
        deleteButton.classList.add("display-none");
        saveButton.classList.remove("display-none");
        cancelButton.classList.remove("display-none");
        itemName.setAttribute('contenteditable', 'true');
        itemNameValue.setAttribute('contenteditable', 'true');
        calculateSum();
      });
  

      saveButton.addEventListener("click", function () {
        editButton.classList.remove("display-none");
        deleteButton.classList.remove("display-none");
        saveButton.classList.add("display-none");
        cancelButton.classList.add("display-none");
        itemName.setAttribute('contenteditable', 'false');
        itemNameValue.setAttribute('contenteditable', 'false');
        income = income.map((element) => element.id === item.id ? {...element, name: itemName.textContent, amount: itemNameValue.textContent} : element);
        calculateSum();
      });

  
      cancelButton.addEventListener("click", function () {
        editButton.classList.remove("display-none");
        deleteButton.classList.remove("display-none");
        saveButton.classList.add("display-none");
        cancelButton.classList.add("display-none");
        // calculateSum();
      });
  
      let deleteButtonOnClick = document.createAttribute("onclick");
      deleteButtonOnClick.value = "deleteItem(this)";
      deleteButton.setAttributeNode(deleteButtonOnClick);
    });
  }
  

  function deleteItem(item) {
    item.parentNode.parentNode.remove();
    // income.pop();
  }

  function editItem(item) {
  
  }



 
  function calculateSum() {
  let incomeSum = income.reduce((acc, item) => {
  return Number(acc) + Number(item.amount);
  }, 0);
  document.getElementById("sum-income").innerHTML =  incomeSum;
  }
calculateSum();




// te wartosci sa 'na niby' - to taki mój szkic na następne kroki:

// function calculateSumExpense() {
//   let expensSum = outcome.reduce((acc, item) => {
//   return Number(acc) + Number(item.amount);
//   }, 0);
//   document.getElementById("sum-income").innerHTML =  expenseSum;
//   }
//   calculateSumExpense();

// let difference = calculateSum - calculateSumExpense;

// const showText() {
//  if (calculateSum > expenseSum) {
//    “Możesz jeszcze wydać {difference.value} złotych”.
//  } elsfe if (calculateSum && expenseSum === 0) {
//    “Bilans wynosi zero”
//  } else if (difference < 0) {
//    “Bilans jest ujemny. Jesteś na minusie XXX złotych”.
//  }
//  document.getElementById("rest-sum").innerHTML =  incomeSum;
// } 








   /// zrob sobie z tego notatkę:
      
    // function createModal() {
    //     modal.classList.add('span-editable-modal');
    //     const modalInput = document.createElement('input');
    //     modalInput.classList.add('input-editable-modal');
    //     const modalText = event.target.textContent;
    //     modalInput.value = modalText;
    //     const saveButton = document.createElement('button');
    //     saveButton.classList.add('save-btn')
    //     saveButton.textContent = 'Zapisz';
    //     modal.appendChild(modalInput);
    //     modal.appendChild(saveButton);
    //     return modal;
    //   }

       


