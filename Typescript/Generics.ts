// let cars: Array<string> = new Array<string>("AUDI", "BMW");

// for (let car of cars) {

// }

// function Swap<T>(x: T, y: T) {
//   let temp: T;
//   temp = x;
//   x = y;
//   y = temp;
// }

// Swap<number>(30, 40);
// Swap<string>("Hello", "World");

// class Point<T, V> {
//   x: T;
//   y: V;
// }

// var point = new Point<number, string>();
// var anotherPoint = new Point<string, number>();

class Employee {
  name: string;
}

class Manager extends Employee {}

// constraints in Generics
class Enterprise<T extends Employee> {
  emps: T[];
}

var enterprise = new Enterprise<Employee>();
var enterprise1 = new Enterprise<Manager>();

// var enterprise2 = new Enterprise<number>(); // Error
