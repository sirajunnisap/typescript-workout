
function addtwo(num:number){
    return num+2
}
addtwo (5)


function signUpUser(name: string, email: string, isPaid: boolean){}
signUpUser("sirajunnisa","sir@gmail.com",true)

//if don't need to use third parameter
let loginUser = (name:string,email:string, isPaid: boolean = false )=>{}
loginUser("sirajunnisa","sira@gmail.com")

//return type
function sum(num:number): number{
    return num+5
}
sum(8)


const heros = ["thor","spiderman","ironman"]

heros.map((hero)=>{
    return `hero is ${hero}`
})


heros.map((hero): string =>{
    return `hero is ${hero}`
})


//if we are using error message we need to user void,void means it's not returning anything (return nothing)
function consoleError(errmsg: string): void{
    console.log(errmsg);
}

//some functions never return a value ,this we need to some tome handling errors (never returns a value that simply means the function never return a value)
function handleError(errmsg: string): never{
    throw new Error(errmsg); 
}

//function ()=parameter where you pass :{}=return an object type and {}=this definiton 
function user():{}{
    return {}
}

function userObj():{name:string,price:number}{
    return {name:"siransa",price:5}
}

function createUser({name:string,ispaid:boolean}){}
let newUser = {name:"sir",ispaid:false,email:"sir@gmail.com"}
createUser(newUser)

//type alias
type User = {
    name : string,
    email : string,
    isActive : boolean
}   

function creatingUser(user:User):User{
    return {name:"",email:"",isActive:false}
}


type Userdetails = {
    readonly _id : string
    name : string
    email : string
    isActive : boolean
    credcardDetails?: number
}
let myUser : Userdetails = {
    _id : "234",
    name: "sirajunnisa",
    email : "sdfgfrw@gmail.com",
    isActive : true
}

myUser.email = "sir@gmail.com"
// myUser._id = "dsfre4352"-- readonly

type cardNumber = {
    cardNumber : string
}
type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {        // & compain
    cvv : number
}

export {}