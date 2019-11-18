class Unicorn {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name, color) {
    this.name = name;
    if (color === undefined){
      this.color = 'white'
    }else {
      this.color = color
    }
  }

  isWhite(){
    if (this.color === 'white'){
      return true
    } else{
      return false
    }
  }

  says(phrase){
    return `**;* ${phrase} *;**`
  }
}


// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Unicorn;
