var task = document.querySelector("#task")
var save = document.querySelector("#save")
var res = document.querySelector("#res")

var todos  = []
save.onclick = function(){
    var ob = {name:task.value,status:0}
    todos.push(ob)
    console.log(todos)
    show()
}


function show(){
    var text = ""
    for(var i=0;i<todos.length;i++) {
        text += `<li>${todos[i].name}</li>`
    }
    res.innerHTML = text
}