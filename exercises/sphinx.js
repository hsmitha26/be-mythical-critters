class Sphinx {
  constructor(name) {
    this.name = name || null;
    this.riddles = [];
  }

  collectRiddle(riddle){
    if (this.riddles.length === 3) {
      this.riddles.shift();
    }
    this.riddles.push(riddle);
  }

  attemptAnswer(answer){
    
  }
}

module.exports = Sphinx;
