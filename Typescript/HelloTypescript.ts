// var x = 100;
// x = "Hello";

var x = 100; //Type Inferencing
var y: number = 100; //Type Annotation
var b: boolean; //declarartion
b = true;
console.log(b);
var str: string;
var xz: any;
xz = 10;
xz = "hi";
xz = { x: 100 };
console.log(xz);

//Arrays
// var cars=["BMW","AUDI","MERC",10]; //    Type Inferencing
//OR
// var cars1: string[] = ["BMW", "AUDI", "MERC"]; //Type Annotation

// var cars=new Array("BMW","AUDI");
// OR
//Using Generics
var cars2: Array<string> = new Array<string>("BMW", "AUDI", "MERC");

for (const car of cars2) {
  console.log(car);
}

if (true) {
  let x = 100;
  console.log(x);
  //after 100 lines
  // let x=10; //Error! Cannot redeclare
}

// const PI; //Error! - const declarations must be initialized
// const PI: number = 3.14;
// PI = 3.1434; // Error !

// const player = { name: "Neeraj Chopra", country: "INDIA" };
// player = {};// Error !
// player.country = "Bharat";

// Spread Operator
let cars: string[] = ["BMW", "AUDI", "FERRARI"];
let moreCars: string[] = ["TATA", "MAHINDRA"];
let allCars: string[] = [...cars, ...moreCars, "MARUTI"];
console.log(allCars);
cars[0] = "PQR";

// With Objects
let person = { name: "Carlos Alcaraz", country: "Spain" };
let player = { ...person, age: 20, grandSlamsWon: 2 };
console.log(player);
