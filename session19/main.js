var task = document.querySelector("#task")
var save = document.querySelector("#save")
var res = document.querySelector("#res")
show()
var todos  = JSON.parse(localStorage.getItem("todos"))

save.onclick = function(){
    var ob = {name:task.value,status:0}
    todos.push(ob)
     var jsondata =  JSON.stringify(todos)
    localStorage.setItem("todos",jsondata)
    show()
}


function show(){
    var jsontodo = localStorage.getItem("todos")
    var tasks = JSON.parse(jsontodo)
    var text = ""
    for(var i=0;i<tasks.length;i++) {
        var status = (tasks[i].status == 1) ? "line-through" : "none"
        text += `<li style='text-decoration:${status}' onclick='done(${i})'>${tasks[i].name}</li>`
    }
    res.innerHTML = text
}


function done(index){
    if(todos[index].status == 0){
        todos[index].status = 1
    }else{
        todos[index].status = 0
    }
    console.log(todos)
    show()
}