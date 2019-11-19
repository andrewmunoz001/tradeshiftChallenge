function TriangleFactory() {
  this.createTriangle = (sideOne, sideTwo, sideThree) => {
    let uniqueSides = this.validateTriangle(sideOne, sideTwo, sideThree);
    switch (uniqueSides) {
      case 1:
        return new EqualateralTriangle(sideOne);
      case 2:
        return new IsoscelesTriangle(sideOne, sideTwo, sideThree);
      case 3:
        return new ScaleneTriangle(sideOne, sideTwo, sideThree);
      default:
        throw "Invalid Triangle";
    }
  };

  this.validateTriangle = (sideOne, sideTwo, sideThree) => {
    if (!isNaN(sideOne) && !isNaN(sideTwo) && !isNaN(sideThree)) {
      if (
        sideOne + sideTwo > sideThree &&
        sideOne + sideThree > sideTwo &&
        sideTwo + sideThree > sideOne
      ) {
        let uniqueSides = {};
        [sideOne, sideTwo, sideThree].forEach(side => {
          uniqueSides[side] = uniqueSides[side] ? uniqueSides[side] + 1 : 1;
        });
        return Object.keys(uniqueSides).length;
      } else {
        throw "Invalid Triangle: Any Two sides must be greater length than Third side";
      }
    }
    throw "Invalid Triangle: Inputs must be numbers";
  };
}
function BaseTriangle(sideOne, sideTwo, sideThree) {
  this.sideOne = sideOne;
  this.sideTwo = sideTwo;
  this.sideThree = sideThree;
  this.getType = () => {};
}

function EqualateralTriangle(side) {
  BaseTriangle.call(this, side, side, side);
  this.getType = () => {
    return "Equalateral";
  };
}
function IsoscelesTriangle(sideOne, sideTwo, sideThree) {
  BaseTriangle.call(this, sideOne, sideTwo, sideThree);
  this.getType = () => {
    return "Isosceles";
  };
}
function ScaleneTriangle(sideOne, sideTwo, sideThree) {
  BaseTriangle.call(this, sideOne, sideTwo, sideThree);
  this.getType = () => {
    return "Scalene";
  };
}

export { TriangleFactory };
