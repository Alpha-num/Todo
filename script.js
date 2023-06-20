let todoContainer = document.querySelector('.todo-container');
let addItemBtn = document.querySelector('.add-btn');
let itemsList = document.querySelector('.todoItemsContainer');
addItemBtn.addEventListener('click', ()=>{
    var inputValue = document.getElementById('my-input').value;
    let listItem = document.createElement('p');
    listItem.textContent = inputValue;
    listItem.className = 'listItem';
    
    deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = '<i class="bi bi-trash"></>';
    deleteBtn.className = 'deleteBtn';
    listItem.appendChild(deleteBtn);

    if(inputValue == ''){
        alert('You need to enter a value');
        return
    }    

    todoContainer.appendChild(listItem)

    deleteBtn.addEventListener('click', ()=>{
        del(listItem);
    })

    if(itemsList.childNodes.length > 0) {
        // Do nothing, because Items List contains items
    }else{
        itemsList.innerHTML = '<p class="empty-label"><i class="bi bi-card-checklist"></i>You have not added any item at the moment</p>'
    }

})

function del(listItem){
    listItem.remove()
}
