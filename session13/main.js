// two sum

// var numbers = [1,4,2,3]

// var i=0
// while(i<numbers.length){
//     if(numbers[i] + numbers[i+1] == 6){
//         console.log(numbers[i] , numbers[i+1])
//     }
//     i = i+1
// }


// var numbers = [1,3,2,4]
// var i =0
// while(i<numbers.length){

//     var x = 0
//     while(x<numbers.length){
//         if(numbers[i] + numbers[x] == 6){
//             console.log(numbers[i] , numbers[x])
//         }
//         x = x+1
//     }

//     i = i+1
// }



var userrow = prompt("row ? ")
var usercolumns = prompt("columns  ? ")

document.write("<table >")
var row = 1
while(row<=userrow){
    document.write("<tr>")
     var column = 1
     while(column<=usercolumns){
        if((column+row)%2 == 0){
            document.write("<td bgcolor='black' width=100px height=100px></td>")
        }else{
            document.write("<td width=100px height=100px></td>")
        }
        column = column+1
     }   
    document.write("</tr>")
    row = row+1
}

document.write("</table>")