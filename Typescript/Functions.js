// function Add(x,y){
//     return x+y;
// }
// console.log(Add(20,30));
// Add(); //Error !  An argument for 'x' was not provided.
// function Add(x: number, y: number): number {
//   return x + y;
// }
// console.log(Add(20,30));
// console.log(Add("hello","world"));
// let result: number = Add(10, 30);
// console.log(result);
// function Add(x: number, y: number): number | string {
//   if (x == 0) {
//     return "X Can't be zero !";
//   }
//   return x + y;
// }
// let result: number | string = Add(10, 20);
// console.log(result);
// Add("Hello", "World !");
// let d: number | string;
// d = 10;
// d = "Hello";
// d = false; //Error!
// function Square(x: number): void {
//   return 100; //Error ! Type 'number' is not assignable to type 'void'.
// }
// Optional Parameters
// function PrintBook(author: string, title: string, noOfPages?: number) {
//   console.log(author, title, noOfPages);
// }
// PrintBook(); //undefined,undefined,undefined;
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire"); //Dr. APJ Abdul Kalam Wings Of Fire undefined
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire", 300); //Dr. APJ Abdul Kalam Wings Of Fire 300
// Default Parameters
// function PrintBook(
//   author: string = "Unknown",
//   title: string = "Unknown",
//   noOfPages: number = 0
// ): void {
//   author = author || "Unknown";
//   title = title || "Unknown";
//   noOfPages = noOfPages || 0;
//   console.log(author, title, noOfPages);
// }
// PrintBook(); //Unknown Unknown 0
// PrintBook("Shivaji Sawant", "Mryutyunjay", 500); //  Shivaji Sawant Mryutyunjay 500
// Rest Parameters
// function PrintBook(author?: string, ...titles: string[]) {
//   console.log(author, titles);
// }
// PrintBook(); //undefined []
// PrintBook("Shivaji Sawant", "Mryutyunjay", "Yugandhar"); //Shivaji Sawant [ 'Mryutyunjay', 'Yugandhar' ]
// Arrow Functions
var cars = ["BMW", "AUDI", "MERC"];
cars.forEach(function (car) { return console.log(car); });
var Add = function (x, y) { return x + y; };
// Constructor Syntax
// function Emp() {
//   this.salary = 200000;
//   setTimeout(function () {
//     console.log(this);
//   }, 2000);
// }
//   function Emp() {
//     this.salary = 200000;
//     setTimeout(() => {
//       console.log(this);
//     }, 2000);
//   }
//   var e = new Emp();
