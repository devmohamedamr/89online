


// export function required(){
//     console.log("required")
// }


// export function plus(){
//     console.log(10+20)
// }


export class calc 
{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    plus = ()=>{
        console.log(this.x + this.y)
    }
    mult = ()=>{
        console.log(this.x * this.y)
    }
}


// export default calc