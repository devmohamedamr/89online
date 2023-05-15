// hoisting 


// var i = 30

// for(var i = 0;i<10;i++){
//     console.log(i)
// }

// console.log(i)
// console.log(i)

// let


// let x = 10
// console.log(x)




// let i = 30

// for(let i = 0;i<10;i++){
//     console.log(i)
// }

// console.log(i)


// const
// let connection = "mysql"
// connection = "pdo"
// console.log(connection)
// const CONNECTION = "mysql"


// let person = {fname:"John", lname:"Doe", age:25};
// for(let key in person){
//     console.log(person[key])
// }
// ======================================================
// let persons = ['ahmed','mohamed','eslam']
// for(var p of persons){
//     console.log(p)
// }




// let users = ["mpohamed","ahmed","eslam"]

// users.forEach(function(abdo){
//     console.log(abdo)
// })

// var name = "mohamed"
// console.log("hi "+name)
// console.log(`hi ${name}`)


// let user = {
//     name:"mohamed",
//     age:22,
//     email:"a@a.com"
// }

// let user2 = {
//     name:"ahmed",
//     age:20,
//     email:"a@a.com"
// }

// let {name:n,age:a} = user
// let {name,age} = user2

// console.log(n,a)

// function mult (x,y=1){
//     console.log(x*y)
// }
// mult(10,5)



// var number = [10,20,30,44]

// console.log(...number)


// console.log(...number)
// var numberprivate = [1,2,...number]

// console.log(numberprivate)




// username1 = "mohamed"
// age1 = 22
// // ----
// username2 = "ahmed"


// var user2 = {
//     name:"ahmed",
//     age:33
// } 

// var user1 = {
//     name:"mohamed",
//     age:22
// } 

// var user1 = new Object
// user1.name = "mohamed"
// user1.age = 22

// console.log(user1)

// var number = [11,20]

// var number = new Array
// number[0] = 11
// number[1] = 20

// console.log(number)


// var username = "mohamedamr"
// [] , {}
// var username = new String
// username = "mohamed"

// console.log(username)


// datatype 


// = new Array , Object , String , Integer


// var x = 10

// var number  = new Array
// number[0] = 10
// number[1] = 20 
// var number = [10,20]

// // console.log(number)


// [] => array 
// {} => object 
// "" => string




// function user () {
//     console.log(this)
// }





// function hamada(){
//     console.log(this)
// }


// var s = new hamada



// factory


// function user (n,e){
//     this.name = n
//     this.email = e
//     console.log(this)
// }


// let ahmed = new user("ahmed","a@a.com")
// let mohamed = new user("mohamed","mohamed@a.com")







// let x = {}

// let x = new Object




// function user (name,email,salary){
//     this.name = name
//     this.email = email
//     this.salary = salary
// }

// user.prototype.netsalary = function(){
//     console.log(this.salary - (this.salary*5/100))
// } 

// let u = new user("mohamed","m@m.com",1000)
// console.log(u)

// u.netsalary()
// // ===================

// let ahmed = new user("ahmed","m@m.com",10000)
// ahmed.netsalary()








// let x = new Object
// x.name = "ahmed"

// console.log(x)


// let x = new Array
// x[0] =1
// console.log(x)









// let number = new Array
// number.forEach)
// Array.prototype.loop = function(){
//     for(let i =0;i<this.length;i++){
//         var k = i
//         var v = this[i]

//         console.log(k,v)
//         // callback(k,v)
//     }
// }

// number.forEach(function(x,y){
//     console.log(x,y)
// })

// let number = [10,20,30]

// console.log(number.loop())




// function one (cb){
//     console.log("one")
//     var x = 10
//     var y = 20
//     cb(x,y)
// }



// one(function(x,y){
//     console.log(x+y)
// })



// function counter(){
//     this.count = 0
//     this.increment = function(){
//         setInterval(()=>{
//             this.count++
//             console.log(this.count)
//         },1000)
//     }
// }

// let c = new counter
// c.increment()

// let welcom = (name)=>{
//     console.log(`hi ${name}`)
// }


// welcom('ahmed')


// let welcom = name =>  name
// console.log(welcom("eslam"))


// let welcom = _ => console.log("hi mohamed")

// welcom()


// let plus = (x,y) => {
//     console.log(x+y)
// }

// plus(10,20)




// function user (name,email,salary){
//     this.name = name
//     this.email = email
//     this.salary = salary
//     this.netsalary = function(){
//         console.log(this.salary - (this.salary*5/100))
//     } 
// }

// 



// class user {
//     constructor(name,email,salary){
//         this.name = name
//         this.email = email
//         this.salary = salary
//     }
//     // netsalary = ()=>{
//     //     console.log(this.salary - (this.salary*5/100))
//     // }
// }


// user.prototype.netsalary = ()=>{
//     console.log(this.salary - (this.salary*5/100))
// }

// let u = new user("mohamed","m@m.com",1000)
// // u.netsalary()
// console.log(u)




// كائن حي
// class livingcreature
// {
//     eat = ()=>{
//         console.log("eat")
//     }
// }



// class human extends livingcreature{
//     swimming =()=>{
//         console.log("swimming")
//     }
// }



// class animle extends human{

// }

// let h = new animle()
// console.log(h)




// calc oop task 


// class calc 
// {
    // constructor(x,y){
        // this.x = x
        // this.y = y
    // }

    // plus = ()=>{
    //     console.log(this.x + this.y)
    // }
    // mult = ()=>{
    //     console.log(this.x * this.y)
    // }
// }


// calc.prototype.plus = ()=>{
//     console.log(this.x + this.y)
// }




// let c1 = new calc(10,20)
// c1.plus()
// c1.mult()



import  {calc}  from './validation.js'

let c = new calc(22,33)
c.plus()

