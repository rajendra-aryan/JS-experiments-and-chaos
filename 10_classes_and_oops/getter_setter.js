class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}rajendra`
    }

    set password(value){
        this._password = value
    }
}

const aryan = new User("raj@aryan.ai", "abc")
console.log(aryan.email);