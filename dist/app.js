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
};
const addNewTask = () => {
    if (todoInput.value !== "") {
        newTodo = document.createElement("li");
        newTodo.textContent = todoInput.value;
        createTools();
        ulList.appendChild(newTodo);
        todoInput.value = "";
        alertInfo.textContent = "";
    }
    else {
        alertInfo.textContent = "Brak zadań na liście";
    }
};
const createTools = () => {
    const toolsPanel = document.createElement("div");
    toolsPanel.classList.add("tools");
    newTodo.appendChild(toolsPanel);
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete");
    completeBtn.innerHTML = '<i class="ti ti-circle-check-filled"></i>';
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.textContent = "EDIT";
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = '<i class="ti ti-circle-x"></i>';
    toolsPanel.append(completeBtn, editBtn, deleteBtn);
};
document.addEventListener("DOMContentLoaded", main);
