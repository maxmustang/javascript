class Studant { 
    fullName: string
    public constructor(public firstName, public lastName) {
       this.fullName = this.firstName + " " + this.lastName
    }
}

interface Person { 
    firstName: string,
    lastName: string
}

class Main { 
    /**
     * greeter
     */
    public greeter(person: Person) {
        return `Hello to:  ${ person.firstName }  ${ person.lastName }`
    }
}

let user = new Studant("Max", "Mustang") 
console.log(new Main().greeter(user))