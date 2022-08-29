class Squirrel {
  constructor(name, color) {
    // create {} --> this
    this.name = name;
    this.color = color;
  }

  climb() {
    return `${this.name} is climbing!`
  }
}

class FlyingSquirrel extends Squirrel {
    constructor(name, color, maxDistance) {
      super(name, color); // create Squirrel {} ---> this
      this.maxDistance = maxDistance;
    }

    fly(distance) {
      if(distance < this.maxDistance) {
        return `${this.name} can fly so far`
      }
    }
}


class FairySquirrell extends FlyingSquirrel {
  constructor(name, color, maxDistance, singArray) {
    super(name, color, maxDistance);
    this.singArray = singArray;
  }

  singSong(song) {
    if(this.singArray.includes(song)) {
      return `${this.name} can song it!`
    }
  }
  
  fly() {
    console.log('Our fairy Squirrell can fly unlimited');
  }
}


class SuperSquirrell extends FairySquirrell {
  constructor(name, color, maxDistance, singArray) {
    super(name, color, maxDistance, singArray);
  }

}