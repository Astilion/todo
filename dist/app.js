let todoInput; //miejsce, gdzie użytkownik wpisuje treść zadania
let alertInfo; //info o braku zadań / konieczności wpisania tekstu
let addBtn; // przycisk ADD - dodaje nowe elementy do listy
let ulList; // lista zadań, tagi UL
let newTodo; // nowo dadany LI, nowe zadanie
let allTasks; //lista wszystkich podanych li
let idNumber = 0;
let popup; // popup
let popupInfo; // tekst w popupie, jak się doda pusty tekst
let editedTodo; // edytowany Todo
let popupInput; // input w popupie
let popupAddBtn; // przycisk "zatwierdź" w popupupie
let popupCloseBtn; // przycisk "anuluj" w poppupie
const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};
const prepareDOMElements = () => {
    // pobieramy wszystkie element
    todoInput = document.querySelector(".todo__input");
    alertInfo = document.querySelector(".alert-info");
    addBtn = document.querySelector(".add-btn");
    ulList = document.querySelector(".todo__list ul");
    popup = document.querySelector(".popup");
    popupInfo = document.querySelector(".popup__info");
    allTasks = document.getElementsByTagName("li");
    popupInput = document.querySelector(".popup__input");
    popupAddBtn = document.querySelector(".accept");
    popupCloseBtn = document.querySelector(".cancel");
};
const prepareDOMEvents = () => {
    addBtn.addEventListener("click", addNewTask);
    ulList.addEventListener('click', checkClick);
};
const addNewTask = () => {
    if (todoInput.value !== "") {
        newTodo = document.createElement("li");
        newTodo.setAttribute('id', idNumber);
        newTodo.textContent = todoInput.value;
        createTools();
        ulList.appendChild(newTodo);
        todoInput.value = "";
        alertInfo.textContent = "";
        idNumber++;
    }
    else {
        alertInfo.textContent = "Wpisz treść zadania!";
    }
};
const createTools = () => {
    const toolsPanel = document.createElement("div");
    toolsPanel.classList.add("tools");
    toolsPanel.innerHTML = `<button class="complete"><i class="ti ti-circle-check-filled"></i>
    </button>
    <button class="edit">Edit</button>
    <button class="delete"><i class="ti ti-circle-x"></i>
    </button>`;
    newTodo.appendChild(toolsPanel);
};
const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.classList.toggle('completed');
    }
    else if ()
        ;
};
document.addEventListener("DOMContentLoaded", main);
