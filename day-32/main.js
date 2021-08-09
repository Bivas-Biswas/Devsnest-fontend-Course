"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Basic Types
var a = 10;
var s = 'hello';
var b = true;
var nu = null;
var un = undefined;
// 2. Array
var arrayOfNumber = [1, 2, 3];
var arrayOfString = ['a', 'b', 'c'];
//multiple types in array
var arrayofMixed = [1, 2, 'a', true];
var user = {
    name: 'Jhon',
    age: 28,
    addres: 'DL'
};
// 4.Class
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.printHello = function () {
        console.log('Hello');
    };
    return App;
}());
var app = new App();
app.printHello();
var door = 'open';
door = 'close';
// 6. for store any datatype
var any;
any = true;
any = [1, 3, 4];
// 7. function
function add(a, b) {
    return a + b;
}
add(1, 3);
function printHello() {
    return 'Hello';
}
printHello();
//# sourceMappingURL=main.js.map