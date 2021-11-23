//alert("hello");

console.log('№1')

let l = 7;
let str = " ";
let sim = "#";
for (let i = 0; i < l; i++) {
  str += sim;
  console.log(str);
}

console.log('№2')
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0 && i % 3 != 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }

console.log('№3')
let str1 = " ";
let n = 8;
 for (let i = 0; i < n * n + n - 1; i++) {
    if (i === 0 || i % 2 === 0) {
      str1 += '#';
    } else {
      str1 += ' '; 
    }
    if ((str1.length + 1) % (n + 1) === 0) {
      str1 += '\n';
      i += 1;
    }
  }
console.log(str1);

console.log('№4')
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
console.log(min(a = 3, b = 5))

function min(a, b) {
    return a < b ? a : b;
  }

console.log('№5')
function countBs(stroka) {
    let count = 0;
    let a = 'B';
  
    for (let i =0 ; i < stroka.length-1; i++) {
  
      if ( stroka.charAt(i) == a )
        count++;
  
    }
  
    return count;
  }
console.log(countBs('BzzBzz'))

function countChar(stroka, a) {
    var count = 0;
  
    for (var i =0 ; i < stroka.length-1; i++) {
  
      if ( stroka.charAt(i) == a )
        count++;
  
    }

    return count;
  }
console.log(countChar('BzzBzzzB', 'z'))

console.log('№6')
function range(startd, endd) {
    let array = [];
    for (let i = startd; i <= endd; i += step) {
        array.push(i);
    }
    return array;
}

function sum(array) {
    let summ = 0;
    for (let i = 0; i < array.length; i++){
      summ += array[i];
    }
    return summ;
  }

console.log(sum(range(1, 10)));
console.log(range(1, 10));


function range(startd, endd, step) {
    if (step == null) step = 1;
    let array = [];
  
    if (step > 0) {
        for (var i = startd; i <= endd; i += step)
          array.push(i);
      } else {
        for (var i = startd; i >= endd; i += step)
          array.push(i);
      }
      return array;
    }
  
function sum(array) {
    let summ = 0;
    for (let i = 0; i < array.length; i++){
      summ += array[i];
    }
    return summ;
  }
console.log(sum(range(1, 10)))
console.log(range(5, 2, -1));


console.log('№7')
function reverseArray(arr) {
    let i;
    result = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
    }
    return result;
    }
    
    function reverseArrayInPlace(arr) {
    let i;
    let old;
    
    for (let i = 0; i < Math.floor(arr.length / 2); i++ ) {
    old = arr[i];
    arr[i] = arr[arr.length - (1 + i)];
    arr[arr.length - (1 + i)] = old;
    }
    return arr;
    }
    
console.log(reverseArray([0,2,2,8]));
let arVal  = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arVal));