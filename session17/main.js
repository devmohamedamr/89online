var task = document.querySelector("#task")
var save = document.querySelector("#save")
var res = document.querySelector("#res")
var todo = []
save.onclick = function(){
    todo.push(task.value)
    task.value = ""
    // console.log(todo)
    show()
}


function show(){
    var resText = ""
    for(var i =0;i<todo.length;i++){
        // resText += "<li>"+todo[i]+"</li> <button onclick='destroy("+i+")'>delete</button>"
        resText += `<li> ${todo[i]} </li> <button onclick='destroy(${i})'>delete</button> <button onclick='edit(${i})'>update</button>`
    }
    res.innerHTML = resText
}


function destroy(index)
{
    todo.splice(index,1)
    show()
}

function edit (index) { 
    task.value = todo[index]
    // alert()
 }