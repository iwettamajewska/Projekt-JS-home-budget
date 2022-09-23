let nameIncome = document.querySelector("#name-input");
let amountCost = document.querySelector("#amount-input");
let sumIncomeExpense = document.querySelector("#add-btn");
let restSum = document.querySelector("#rest-sum");
let unorderedListin = document.querySelector("#un-list-in");
let unorderedListexp = document.querySelector("#un-list-exp");
let incomeForm = document.querySelector("#income-form");
const income = [];

// let editList = document.querySelector('')


incomeForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let addItems = {
    name: nameIncome.value,
    amount: amountCost.value,
    id: Math.random(),
  };
  income.push(addItems);

  addIncomeList(); //<= dlaczego ta linijka? nie wystarczyłoby tylko to co na dole w 22 linijce, czyli function addIncomeList() ??
  
});

function addIncomeList() {
    unorderedListin.innerText = ""; //dlaczego to się czyści na początku?

    income.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add('li-income');
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      editButton.textContent = "Edytuj";
      editButton.classList.add('edit-btn', 'li-btn');
      deleteButton.textContent = "Usuń";
      deleteButton.classList.add('delete-btn', 'li-btn');
      const span = document.createElement("span");
      span.textContent = `${item.name} : ${item.amount} zł`;
      span.classList.add('text-in-list');
      li.appendChild(span);
      // li.appendChild(editButton);
      // li.appendChild(deleteButton);

      // NOWE 45-61, zakomentowalam 42-43. Po tych kodach znika mi bullet point:
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
      saveButton.classList.add('save-btn', 'li-btn', 'display-none');
      cancelButton.textContent = "Anuluj";
      cancelButton.classList.add('cancel-btn', 'li-btn', 'display-none');
      boxForButtons.appendChild(saveButton);
      boxForButtons.appendChild(cancelButton);


      unorderedListin.appendChild(li);


      
      // editButton.addEventListener('click', editTask);
        editButton.addEventListener('click', function() {
        editButton.remove();
        editButton.classList.add('display-none');
        deleteButton.classList.add('display-none');
        saveButton.classList.remove('display-none');
        cancelButton.classList.remove('display-none');
     });
}) 

}
      // NOWE:
      




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

       

    //   function editTask(event) {
    //     const modal = createModal();
    //     event.li.appendChild(modal);
    //   }

      





  //   let saveButton = document.querySelector(".edit-btn");



  //   document.addEventListener("DOMContentLoaded", function() {
  //     let editButton = document.querySelector(".edit-btn");

  //     myBtn.addEventListener("click", function() {
  //       editButton.classList.add("save-btn");
  //     })
  // });










// NOTATKI DO SUMOWANIA 24.09:

// const sumInc = sumFn(przychody);
// console.log("tuZZ", sumInc);


// function sumFn(income ) {
//   return income .reduce(
//     (previusValue, currentValue) => previusValue + currentValue,
//     0,);
// }







// editButton.addEventListener('click', functiom () {
// let zzzdsgdg = document.querySelector('wallet')

//   });
 


// Dlaczego li dodają się w poziomie a nie pionie?


// do czego się odnosi? nie ma zmiennych i klas.
// dlaczego math.random?
//   name: nameIncome.value,
//   amount: amountCost.value,
//   id: Math.random(),
  