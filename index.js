function greetingUser(user){ 
    user.age = 20;
    return `Hello, ${user.name} ${user.surname}`
}


let user = {
    name: 'John',
    surname: 'Doe',
    age: 15
}

greetingUser(user); // 'Hello, John Doe'

let user2 = {
    name: 'Joakin',
    lastname: 'Phenix'
}

console.log(greetingUser(user2));