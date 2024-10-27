const multiply = (x, y) => x + y;
console.log(multiply(10, 5));
//ეროუ ფუნქცია//

function Minus() {
  return function (a, b) {
    console.log(a - b);
  };
}
Minus()(8, 3);
//ანონიმური ფუნქცია//

const IsEven = (num) => num % 2 === 0;
console.log(IsEven(10));
//ეროუ ფუნქცია//

function Gamravleba(a, b, callback) {
  return callback(a, b);
}
function X(a, b) {
  return a * b;
}
console.log(Gamravleba(5, 5, X));
//ქოლ ბექ ფუნქცია//

const IsPositive = (num) => {
  if (num > 0) {
    return "დადებითია";
  } else {
    return "უარყოფითია";
  }
};
console.log(IsPositive(0));
// ეროუ ფუნქცია ცოტა დიდი :დ //

function Gaormageba() {
  return function (n) {
    console.log(n * 2);
  };
}

Gaormageba()(2);
// ანონიმური ფუნქცია //

function Ormagi(a, callback) {
  return callback(a);
}
function X(a) {
  return a * 2;
}
console.log(Ormagi(2, X));
// ქოლ ბექ ფუნქცია //

const IsDivisibleByThree = (num) => num % 3 === 0;
console.log(IsDivisibleByThree(1));

// ეროუ ფუნქცია //

function Even(num, callback) {
  if (num % 2 === 0) {
    return "ლუწია";
  } else {
    return "კენტია";
  }
}
function X(num) {
  return num;
}
console.log(Even(3));

// ქოლ ბექ //

const cube = (num) => num * num * num;
console.log(cube(1));
// ეროუ //

function gamravleba(a, b, callback) {
  return callback(a, b);
}
function x(a, b) {
  return a * b;
}
console.log(gamravleba(2, 2, x));
// ქოლ ბექ //

const IsGreaterThanZero = (num) => {
  if (num > 0) {
    return "დადებითია";
  } else {
    return "უარყოფითია";
  }
};
console.log(IsGreaterThanZero(1));
// ეროუ //

function Gayofa() {
  return function (n) {
    console.log(n / 2);
  };
}
Gayofa()(10);
// ანონიმური //

function Shejameba(x, y, callback) {
  return callback(x, y);
}
function blah(x, y) {
  return x + y;
}
console.log(Shejameba(5, 2, blah));
// ქოლბექ //

const square = (num) => num * num;
console.log((square(3)));
 // ეროუ //