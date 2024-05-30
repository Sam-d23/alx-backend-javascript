export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new TypeError('Cannot construct Building instances directly');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // Method to check if evacuationWarningMessage is implemented
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

// Example of a subclass that extends Building and implements evacuationWarningMessage
class OfficeBuilding extends Building {
  constructor(sqft, name) {
    super(sqft);
    this._name = name;
  }

  get name() {
    return this._name;
  }

  evacuationWarningMessage() {
    return `Evacuate the ${this.name} building immediately!`;
  }
}
