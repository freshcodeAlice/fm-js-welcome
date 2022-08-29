/* User */


class User {
  constructor(name, surname, age) {
    this.name= name;
    this.surname = surname;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.surname}`
  }
}


class Moderator extends User {
  constructor(name, surname, age) {
    super(name, surname, age);
  }

  createPost(header, text) {

  }

  deletePost(index) {

  }
}


class Admin extends Moderator {
  constructor(name, surname, age, isAdmin) {
    super(name, surname, age);
    this.isAdmin = true;
  }

  setModerator(userId) {

  }

  deleteModerator() {

  }
}


/*
Класс Owner, який буде вміти все те, що і Адмін, плюс в нього буде поле доступу до магазину ShopAccess 
Метод getAnnualReport


*/