let mytodos = []
const inputEl = document.querySelector('.inputField input')
const add_btn = document.querySelector('#add_Btn')
const ulEl = document.querySelector('.todoList')
const delete_all = document.querySelector('#clearAll')
const peningTasks = document.querySelector('#peningTasks')
const todosfromLoalStorage = JSON.parse(localStorage.getItem('mytodos'))

if(todosfromLoalStorage){
    mytodos = todosfromLoalStorage
    render()
}

add_btn.addEventListener('click', function (){
    if(inputEl.value) {
        mytodos.push(inputEl.value)
        inputEl.value = ''
        localStorage.setItem('mytodos', JSON.stringify(mytodos))

        inputEl.placeholder = 'Add your new todo'
        inputEl.classList.remove('placeholder')
        render()
    }
    else{
        inputEl.placeholder = 'please, add a todo !!'
        inputEl.classList.add('placeholder')
    }
})

delete_all.addEventListener('click', function (){
    if(mytodos.length !== 0) {
        localStorage.removeItem('mytodos')
        mytodos = []
        render()
    }
    else{
        ulEl.innerHTML = `
        <p class="clear_all_warning"> No Todo Remaining, Enjoy 😎</p>
        `
    }
})

function deleteTask(index){
    mytodos.splice(index, 1)
    localStorage.setItem('mytodos', JSON.stringify(mytodos))
    render()
}

function render(todos=mytodos){
    let todoItems = ''
    todos.forEach((todo, index)=>{
        todoItems +=`
            <li><p>${index+1}. ${todo}</p><button onclick="deleteTask(${index})">
                <img src="./img/delete_icon.svg" alt="">
                </button>
            </li>`
    })
    ulEl.innerHTML = todoItems
    peningTasks.textContent = `${todos.length}`
}


