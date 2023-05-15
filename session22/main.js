

// document.getElementById("res").innerText = "hi amit"
// $('#res').text("hi amit jquery")

// js
// document.querySelector("#click").onclick = function(){
//     document.getElementById("res").innerText = "hi amit" 
// }

// jquery 
// $('#click').click(function(){
//     $("#res").text("hi amit jquery")
// })


// $("#res").text("<h2>hi </h2>")



// $("#click").click(function(){
//     $("#number").val("hi amit")
// })

// $("#number").css({"border":"1px solid red","outline":"1px solid red"})

// $("#number").removeClass("red")


// $("#text").keyup(function(){
//     var count = $("#text").val().length
//     if(count>=20){
//         $("#text").css({"border":"red 1px solid","outline":"1px solid red"})  
//     }else{
//         $("#text").css({"border":"none","outline":"none"})  
//     }
//     $("#res").text(`count is :${count}`)
// })


// $("#click").click(function(){
//     $(".box").animate({"width":"100%"},3000)
// })

// $("#stop").click(function(){
//     $(".box").stop()
// })


// $("#click").click(function(){
//     $(".box").hide(1000,function(){
//         $(".box").slideDown(1000,function(){
//             $(".box").slideUp(1000,function(){
//                 $(".box").show(1000)
//             })
//         })
//     })
// })

// $("#click").click(function(){
//     $(".box").hide(1000).slideDown(1000).slideUp(1000).show(1000)
// })




// var ax = new XMLHttpRequest
// ax.open("GET","https://jsonplaceholder.typicode.com/users")
// ax.send()
// ax.onreadystatechange = function(){
//     if(ax.readyState == 4){
//         var data =  JSON.parse(ax.response)
//         console.log(data)
//     }
// }


// $.ajax({
//     method:"GET",
//     url:"https://jsonplaceholder.typicode.com/users",
//     success:function(res){
//         console.log(res)
//     }
// })


// console.log($(".box").width())


var box = document.querySelector(".box")
console.log(box.offsetWidth)