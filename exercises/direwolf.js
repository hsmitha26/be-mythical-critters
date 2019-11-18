class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    if (home === undefined) {
      this.home = 'Beyond the Wall';
    }
    else {
      this.home = home;
    }
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark){
    if (this.starksToProtect.length < 2) {
      if (this.home === stark.location) {
        this.starksToProtect.push(stark);
        stark.safe = true;
        this.huntsWhiteWalkers = false;
      }
    }
  }

  leave(stark){
    this.starksToProtect = [];
    stark.safe = false;
  }
}

module.exports = Direwolf;
