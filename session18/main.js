// ajax
//  - xmlhttprequest
//  - fetch
//  - jquery ajax
//  - axios


// ================== xmlhttprequest ===================

// // 1
// var ajax = new XMLHttpRequest
// // 2 
// ajax.open("GET","https://jsonplaceholder.typicode.com/users")
// // 3
// ajax.send()
// // 4
// ajax.onreadystatechange = function(){

//     if(ajax.readyState == 4){
//         var data = JSON.parse(ajax.response)
//         var res = ""
//         for(var i =0;i<data.length;i++){
//            res += `<li> ${data[i].name} </li>`
//         }
//         document.getElementById("res").innerHTML = res
//     }
// }



// var users = [
//     {"name":"ahmed"},
//     {"name":"eslam"},
//     {"name":"mohamed"},
// ]

// console.log(users[0].name)







document.getElementById("get").onclick = function(){
    var username = document.getElementById("username").value


    var ajax = new XMLHttpRequest
    ajax.open("GET","https://api.github.com/users/"+username)
    ajax.send()
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            var data = JSON.parse(ajax.response)
            console.log(data.avatar_url)
            document.getElementById("img").src = data.avatar_url
        }
    }
}