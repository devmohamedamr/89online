

// document.getElementById("btn").onclick = function(){
//     console.log("hh")
//     // document.getElementById("send").addEventListener("click",function(){
//     //     console.log("send")
//     // })
//         document.getElementById("send").onclick = function(){
//         console.log("send")
//     }
// }






// document.getElementById("btn").onclick = function(){
//     var ele =  document.createElement("button")
//     ele.setAttribute("id","send")
//     ele.innerText = "send"
//     document.body.appendChild(ele)
//     // ele.addEventListener("click",function(){
//     //     console.log("send")
//     // })
//     ele.onclick = function(){
//         console.log("send")
//     }
// }


// document.getElementById("list")

// var ele  = document.querySelectorAll("#list li")

// for(var i =0;i<ele.length;i++){
//     ele[i].addEventListener("click",function(){
//         console.log(this)
//     })
// }



// console.log(this)



// var eles = document.querySelectorAll(".heading")
// console.log(eles[3].getAttribute("amr"))    

// console.log(document.querySelector("h1[mohamed='amr']"))


// ==================================== filter task ====================

var links = document.querySelectorAll(".links a")
var galary = document.querySelectorAll(".gallary img")

for(var i =0;i<links.length;i++){
    links[i].addEventListener("click",function(){
        
        // hide all imgs 
        for(var g =0;g<galary.length;g++){
            galary[g].style.display = "none"
        }

        var ele = document.querySelectorAll("."+this.getAttribute("data"))
        
        for(var e = 0;e<ele.length;e++){
            ele[e].style.display = "block"
        }


    })
}

