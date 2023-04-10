

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

// var links = document.querySelectorAll(".links a")
// var galary = document.querySelectorAll(".gallary img")

// for(var i =0;i<links.length;i++){
//     links[i].addEventListener("click",function(){
        
//         // hide all imgs 
//         for(var g =0;g<galary.length;g++){
//             galary[g].style.display = "none"
//         }

//         var ele = document.querySelectorAll("."+this.getAttribute("data"))

//         for(var e = 0;e<ele.length;e++){
//             ele[e].style.display = "block"
//         }


//     })
// }


// scroll

// setinterval
// settimeout


// window.onscroll = function(){
//     if(window.scrollY >= 1000){
//         document.querySelector("#nav").classList.remove("nav")
//         document.querySelector("#nav").classList.add("navblue")
//     }else{
//         document.querySelector("#nav").classList.add("nav")
//         document.querySelector("#nav").classList.remove("navblue")
//     }
// }




// var i = 0
// setTimeout(function(){
//     i++
//     console.log(i)
// },1000)


// var i = 0
// setInterval(function(){
//     i++
//     console.log(i)
// },1000)



// var imgs = [
//     "img/xgallery2.png.pagespeed.ic.R67GzIjQgh.webp",
//     "img/xgallery3.png.pagespeed.ic.38W7JPYvku.webp",
//     "img/xgallery4.png.pagespeed.ic.eeH-radW60.webp",
//     "img/xgallery1.png.pagespeed.ic.RiMoEHAQJU.webp"
// ]

// var i = 0

// setInterval(function(){
//     document.querySelector(".slider img").src = imgs[i%imgs.length]
//     i++
// },1000)

// var i = 1
// setInterval(function(){
//     document.querySelector("#countdown").innerText = "count is : "+i
//     i++
//     if(i == 5){
//         document.querySelector(".hide").classList.add("show")
//         document.querySelector(".hide").classList.remove("hide")
//         document.querySelector("#countdown").style.display = "none"
//     }
// },700)



// var time = setTimeout(function(){
//     document.querySelector(".center").classList.add("centerhide")
// },1000)







