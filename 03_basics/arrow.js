const user = {
    username: "aryan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function trap(){
//     let username = "aryan"
//     console.log(this.username);
// }

// trap()

// const trap = function () {
//     let username = "aryan"
//     console.log(this.username);
// }

const trap =  () => {
    let username = "aryan"
    console.log(this);
}


// trap()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "aryan"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()