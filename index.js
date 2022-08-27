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
    // divy texty
    unorderedListin.innerText = ""; //dlaczego to się czyści na początku?

    income.forEach((item) => {
      const li = document.createElement("li");
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
      li.appendChild(editButton);
      li.appendChild(deleteButton);

      unorderedListin.appendChild(li);


      editButton.addEventListener('click', editTask);
}) 

}




  //     editButton.addEventListener('click', function() {
  //     editButton.innerHTML = '<button class="save-button">Zapisz</button>';
  //
      

    function createModal() {
        const modal = document.createElement('span');
        modal.classList.add('span-editable-modal');
        const modalInput = document.createElement('input');
        modalInput.classList.add('input-editable-modal');
        const modalText = event.target.textContent;
        modalInput.value = modalText;
        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn')
        saveButton.textContent = 'Zapisz';
        modal.appendChild(modalInput);
        modal.appendChild(saveButton);
        return modal;
      }

       

      function editTask(event) {
        const modal = createModal();
        event.li.appendChild(modal);
      }

      





  //   let saveButton = document.querySelector(".edit-btn");



  //   document.addEventListener("DOMContentLoaded", function() {
  //     let editButton = document.querySelector(".edit-btn");

  //     myBtn.addEventListener("click", function() {
  //       editButton.classList.add("save-btn");
  //     })
  // });






// editButton.addEventListener('click', functiom () {
// let zzzdsgdg = document.querySelector('wallet')

//   });
 


// Dlaczego li dodają się w poziomie a nie pionie?


// do czego się odnosi? nie ma zmiennych i klas.
// dlaczego math.random?
//   name: nameIncome.value,
//   amount: amountCost.value,
//   id: Math.random(),
  