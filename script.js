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

