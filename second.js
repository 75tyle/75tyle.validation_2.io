console.log('multiple external link')

//----STRINGS----//

//Strings are texts, which are under single ,double ,back-tick qoute.

let space =' ' //an empty string
let one ='one' //single qoute string
let two ="two" //double qoute string
let three =`three`//back-tick qoute
console.log(one,two,three)

let fullname=firstname+space+lastname
console.log(fullname)
let personinfo=fullname+space+'i am'+space+age+'.'+space+"Ismarried"+isMarried
console.log(personinfo)

// use \ two continue in new line
const paragragh="An application programming interface (API) \ is a way for two or more computer \ programs to communicate with each other. \ It is a type of software interface,\ offering a service to other pieces of software."
console.log(paragragh)


/*  ---------------------

     \n:newline
     \t:tab means 8 spaces
     \\:back slash
     \':single qoute
     \":double qoute

    ----------------------
*/


//----Template literals----//

/*syntax

`string literal text`
`string literaltext ${expression}`
*/

console.log('the sum of 2 and 4 is 6')
let a=2
let b=4
console.log(`the sum of ${a} and ${b} is 6`)

let c=a+b
let sumAB=`the sum of ${a} and ${b} is ${c}`
console.log(sumAB)

console.log(`${a} is greater than ${b} is: ${a>b}`)

//----STRING METHODS----//

//1.Lenght
let js='javascript'
console.log(js.length)

console.log(fullname.length)

//2.Accesing charachters in string
let firstletter=js[0]
console.log(firstletter)
let lastletter=js[9]
console.log(lastletter)

let lastindex=js.length-1
console.log(lastindex)
console.log(js[lastindex])
