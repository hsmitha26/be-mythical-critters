class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
  }

  shoot(){
    if (this.cranky) {
      return 'NO!';
    }
    else if (this.layingDown){
      return 'NO!';
    }
    else {
      this.cranky = !this.cranky;
      return 'Twang!!!';
    }
  }

  run(){
    if (this.layingDown) {
      return 'NO!';
    }
    else {
      this.cranky = true;
      return 'Clop clop clop clop!!!';
    }
  }

  sleep(){
    if (this.layingDown){
      this.cranky = false;
      return 'ZZZZ';
    }
    else {
      return 'NO!';
    }
  }

  layDown(){
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;
  }

  standUp(){
    // this.standing = true;
    // this.layingDown = false;
    this.layDown();
  }

  drinkPotion(){
    if (this.standing) {
      this.cranky = !this.cranky;
    }
    else {
      return 'Not while I\'m laying down!';
    }
  }
}

module.exports = Centaur;
