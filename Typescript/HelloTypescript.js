// var x = 100;
// x = "Hello";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var x = 100; //Type Inferencing
var y = 100; //Type Annotation
var b; //declarartion
b = true;
console.log(b);
var str;
var xz;
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
var cars2 = new Array("BMW", "AUDI", "MERC");
for (var _i = 0, cars2_1 = cars2; _i < cars2_1.length; _i++) {
    var car = cars2_1[_i];
    console.log(car);
}
if (true) {
    var x_1 = 100;
    console.log(x_1);
    //after 100 lines
    // let x=10; //Error! Cannot redeclare
}
// const PI; //Error! - const declarations must be initialized
// const PI: number = 3.14;
// PI = 3.1434; // Error !
var player = { name: "Neeraj Chopra", country: "INDIA" };
// player = {};// Error !
player.country = "Bharat";
// Spread Operator
var cars = ["BMW", "AUDI", "FERRARI"];
var moreCars = ["TATA", "MAHINDRA"];
var allCars = __spreadArray(__spreadArray(__spreadArray([], cars, true), moreCars, true), ["MARUTI"], false);
console.log(allCars);
cars[0] = "PQR";
// With Objects
var person = { name: "Carlos Alcaraz", country: "Spain" };
var player = __assign(__assign({}, person), { age: 20, grandSlamsWon: 2 });
console.log(player);
