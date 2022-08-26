function OldUser(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;

}

function UserProto() {
    this.getFullName = function() {
        return `${this.name} ${this.lastName}`
    }
}

OldUser.prototype = new UserProto();

const us = new OldUser('John', 'Doe', 18);
const us2 = new OldUser('Jane', 'Doe', 18);