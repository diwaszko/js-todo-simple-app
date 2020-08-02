const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
    let html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>   
    `;

    list.innerHTML += html;

}

const filterTodos = (term) => {

    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));

}

search.addEventListener('keyup', (e) => {
    e.preventDefault();

    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});

list.addEventListener('click', (e) => {
    e.preventDefault();
    // if (e.target.tagName === "I"){           // też zadziała
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    };
});

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if (todo){
        generateTemplate(todo);
        addForm.reset();
    };
});