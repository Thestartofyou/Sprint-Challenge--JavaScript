// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130 

class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    
    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }

  const newCuboid = new Cuboid(4, 5, 5); //The new keyword is used in javascript to create a object from a constructor function. The new keyword has to be placed before the constructor function call and will do the following things: Creates a new object. Sets the prototype of this object to the constructor function's prototype property.

  console.log(newCuboid.volume()); // 100
  console.log(newCuboid.surfaceArea()); // 130






// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.