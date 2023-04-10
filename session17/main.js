var task = document.querySelector("#task")
var save = document.querySelector("#save")
var todo = []
save.onclick = function(){
    todo.push(task.value)
    console.log(todo)
}
