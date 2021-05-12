let addTodoButton = document.getElementById('addTodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');

addTodoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    paragraph.innerHTML = inputfield.value;
    todocontainer.appendChild(paragraph);

})







