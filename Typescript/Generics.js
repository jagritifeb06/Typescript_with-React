// let cars: Array<string> = new Array<string>("AUDI", "BMW");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Employee));
// constraints in Generics
var Enterprise = /** @class */ (function () {
    function Enterprise() {
    }
    return Enterprise;
}());
var enterprise = new Enterprise();
var enterprise1 = new Enterprise();
// var enterprise2 = new Enterprise<number>(); // Error
