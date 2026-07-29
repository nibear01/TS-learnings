function generateRandomPassword(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

class User {
    #balance: number = 0; // private property using the new private field syntax
    protected email: string = ""; // protected property, accessible in child classes

    constructor(public name: string, public age: number, private _password: string = generateRandomPassword()) {
        // this.name = name;
        // this.age = age;  
        // not needed as we are using public access modifier in the constructor parameters, 
        // which automatically creates and initializes the properties with the same name as the parameters.
        
        console.log(this) // Output: User { name: 'Naved', age: 25 }
    }

    getPassword(): string {
        return this._password; // returns the private password property of the User class
    }

    logDetails(): void {
        console.log(`User Name: ${this.name}, Age: ${this.age}`); // Output: User Name: Naved, Age: 25
    }

    getBalance(): number {
        return this.#balance; // returns the private balance property of the User class
    }
}

class creator extends User {
    constructor(name: string, age: number, email: string) {
        super(name, age); // calls the constructor of the parent class (User)
        this.email = email; // sets the protected email property of the creator class
    }   

    getEmail(): string {
        return this.email; // returns the protected email property of the creator class
    }
}

const user1 = new User("Naved", 25); // creates user1 object of User class
user1.logDetails();  // logDetails method is called on user1 object, which logs the details of the user to the console

// accessing private properties (password)
console.log(user1.getPassword()); // Output: a random 8-character string

// accessing private properties (balance)
console.log(user1.getBalance()); // Output: 0

// Use private by default. It keeps your code safe. It prevents child classes from accidentally breaking internal mechanics.
// Use protected only when you are intentionally designing a base class and want child classes to reuse or change that specific internal variable
const creator1 = new creator("Ali", 30, "ali@example.com");
console.log(creator1.getEmail());  // Output: ali@example.com