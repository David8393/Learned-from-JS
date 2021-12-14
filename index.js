// var a = Symbol('a');
// var b = Symbol('a');
// console.log(a === b);
// function abs() {
//   var a = 10;
//   var b = 10;
//   return a + b;
// };
// console.log(abs());

// document.write(5 + 6);

// document.write('this is the JavaScript code = ', 6 / 6);

// var btn = document.getElementById('btn')
// btn.onclick = function() {
//   document.getElementById('demo4') = document.write(5 + 6)
  // console.log(btn);
  
// }

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo5").innerHTML = points;

points.sort(function (a, b) {
  return b - a
});
document.getElementById("demo6").innerHTML = points;

////////////////////////////////////////////////////

// const points1 = ['webbrainacademy',  'academy',  'g2'];
// document.getElementById("demo7").innerHTML = points1;

// points1.sort(function (a, b) {
//   return b.length - a.length

// });
// document.getElementById("demo8").innerHTML = points1;



// const points2 = ['webbrainacademy',  'academy',  'g2'];
// document.getElementById("demo7").innerHTML = points2;

// points2.sort()
// document.getElementById("demo8").innerHTML = points2;

// arr['ABCabdiidinidnBnn@_--']
// for (let i = 0; i < arr.length; i++) {
// if (arr) {
  
// }
// }
// console.log(arr);


var btn = document.getElementById('btnX')
var x = myFunction(4, 3);
btn.onclick = function myFunctionX(a, b) {
  return a * b
  
}
document.getElementById('demoX').innerHTML = x



// function Data(a, b) {
//     return a*b
// }
// Data(4, 5)

// function Data(name ,surname) {
//     console.log(`My name is ${name}`);
//     console.log(`My surname is ${surname}`);
//     console.log('=======================');
// }
// Data('Otabek', 'Juraev');
// Data('Ismoil', 'Daminov');
// Data('Alimardon', 'Daminov');