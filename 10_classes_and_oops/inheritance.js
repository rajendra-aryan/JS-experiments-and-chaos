class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const aryan = new Teacher("aryan", "aryan@teacher.com", "123")

aryan.logMe()
const power = new User("power")

power.logMe()

console.log(aryan instanceof User);