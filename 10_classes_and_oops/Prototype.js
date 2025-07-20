// let myName = "aryan     "
// let mychannel = "power     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aryan = function(){
    console.log(`aryan is present in all objects`);
}

Array.prototype.heySiri = function(){
    console.log(`aryan says hello`);
}

// heroPower.aryan()
// myHeros.aryan()
// myHeros.heySiri()
// heroPower.heySiri()

// inheritance

const User = {
    name: "aryan",
    email: "aryan@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Logotherapy     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"aryan".trueLength()
"power".trueLength()