// var a = 10;
// console.log(a.toString(2));
// console.log(parseInt(a));

// function palindrome(str) {
//     return true;
// }
// palindrome('eye');
// console.log(palindrome());

// var a = 15;
// var b = 10;
// // var c = a
// a = b
// b = c
// console.log(a, b);
// var a = 15,
//     b = 10,
//     c = 5,
//     e = a,
//     t = b;
//     r = c;
// a = b
// b = c
// console.log(a, b, c);

// var points1 = ['webbrainacademy', 'academy', 'g2xxxxxxxxxxxxxxxxxxxx'];
// console.log(points1.sort((a,b) => b.length - a.length));

// var a = 10
// var b = 15
// var c = a
// a = b
// b = c

// console.log(a, b);

// var str = 'azapaza'
// console.log(/(a|A)za{}/);

// var points1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(points1.sort((a,b) => b.length - a.length));


// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b) {
    //   return a - b
    // });
    // console.log(points);
    
    var point = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    point.sort(function(a, b) {
      return b - a;
        console.log(b.length - a.length);
    });
    console.log(point);