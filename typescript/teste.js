var Studant = (function () {
    function Studant(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.lastName;
    }
    return Studant;
}());
var Main = (function () {
    function Main() {
    }
    /**
     * greeter
     */
    Main.prototype.greeter = function (person) {
        return "Hello to:  " + person.firstName + "  " + person.lastName;
    };
    return Main;
}());
var user = new Studant("Max", "Mustang");
console.log(new Main().greeter(user));
