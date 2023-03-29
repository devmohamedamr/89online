// var text = document.querySelector("#text")
// var text = document.getElementById("text")
// var res = document.querySelector("#res")

// text.onkeyup = function ()
// {
//     if(text.value.length >= 20){
//         text.style.cssText = "border:1px solid red; outline:1px solid red"
//     }else{
//         text.style.cssText = ""
//     }
//     res.innerText = "count is : "+text.value.length
// }


// var username = "mohamed amr"
// console.log(username.length)



// var res = document.getElementById("res")
// res.innerHTML = "<h1>amr</h1>"




// var add = document.getElementById("add")
// var username = document.getElementById("username")
// var age = document.getElementById("age")


// add.onclick = function(){
//     if(username.value.length == 0){
//         document.getElementById("namevalidation").innerText = "name is required"
//     }else{
//         document.getElementById("namevalidation").innerText =  ""
//     }

//     if(age.value.length == 0){
//         document.getElementById("agevalidation").innerText = "age is required"
//     }else{
//         document.getElementById("agevalidation").innerText =  ""
//     }
// }

// var imgs = [
//     "img/xgallery3.png.pagespeed.ic.38W7JPYvku.webp",
//     "img/xgallery4.png.pagespeed.ic.eeH-radW60.webp",
//     "img/xgallery1.png.pagespeed.ic.RiMoEHAQJU.webp",
//     "img/xgallery2.png.pagespeed.ic.R67GzIjQgh.webp",
// ]


// console.log(4%4)

// var img = document.getElementById("img")
// var next  = document.getElementById("next")
// var prev = document.getElementById("prev")

// var i =0
// next.onclick = function(){
//     img.src =   imgs[i%imgs.length]
//     i++
// }


// prev.onclick = function(){
//     img.src =   imgs[i%imgs.length]
//     i--
// }



// function gallary(img){
//     document.getElementById("img").src = img
// }

// document.getElementById("gallary").onclick = function (w) { 
//     if(w.target.src != undefined){
//         var oldimg =  document.getElementById("img").src
//         document.getElementById("img").src =  w.target.src
//         w.target.src = oldimg
//     }
// }


// document.getElementById("in").value
// $("in").val


// document.getElementById("color").onclick = function(e){
//     document.body.style.background = e.target.id
// }

// function color (){
//     document.getElementById("ele").classList.toggle("box")
// }
// document.getElementById("click").onclick = color
