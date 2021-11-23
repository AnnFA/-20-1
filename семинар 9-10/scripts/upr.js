console.log('№8')
// Преобразуем массив в список
function arrayToList(ar) {
    let listt = {value: ar[0], rest: null}
    let list0 = listt; 
    for (i=1; i<ar.length; i++) {
      listt.rest = new Object();
      listt.rest.value = ar[i];
      listt.rest.rest = null;  
      listt = listt.rest ;
    }
    return list0;
}

// Создает массив из списка
function listToArray(list) {
    let arr = [];
    arr.push (list.value);
    while (list.rest != null) {
      list = list.rest;
      arr.push(list.value);
    }
    return arr;
}

  // Получает элемент и создаёт новый список,
  // где этот элемент добавлен спереди к первоначальному списку
function prepend(list, item) {
    item.rest = list;
    return item;
}
  
  //В качестве аргументов принимает список и число, а возвращает элемент
  // на заданной позиции в списке, или же undefined в случае отсутствия такого элемента
function nth(list, N) {
    var i=0;
    while (i<N && list.rest != null) {
      list = list.rest;
      i++;
    }
    if(N < i)
      return "undefined";
    return list;
}
  
l = arrayToList([1,21,34,4]);
  
console.log(listToArray(l));
console.log(l.value ,l.rest.value, l.rest.rest.value, l.rest.rest.rest.value);
console.log(nth(l, 4));
  
let item = { 
      value: 23, 
      rest: null
}
l=prepend(l, item);
console.log(listToArray(l));
console.log(nth(l, 4));


console.log('')
console.log('№9')

function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a == null || typeof(a) != "object" || b == null || typeof(b) != "object")
    {
        return false;
    }
    
    let propA = 0, propB = 0;
    for (let property in a) {
        propA += 1;
    }
    for (let property in b) {
        propB += 1;
        if (!(property in a) || !deepEqual(a[property], b[property])) {
            return false;        
        }
    }        
    return propA == propB;
}
console.log(deepEqual('0', 0))


console.log('')
console.log('№10')

let arrayss = [[1, 2, 3], [4, 5], [6]];
arrayss = arrayss.reduce(function(a, b) {
    return a.concat(b);
});
console.log(arrayss)


console.log('')
console.log('№11')

let array1 = [
  {name: "Carolus Haverbeke", sex: "m", born: 1832, died: 1905, father: "Carel Haverbeke", mother: "Maria van Brussel"},
  {name: "Emma de Milliano",sex: "f",born: 1876,died: 1956,father: "Petrus de Milliano",mother: "Sophia van Damme"},
  {name: "Maria de Rycke",sex: "f",born: 1683,died: 1724,father: "Frederik de Rycke",mother: "Laurentia van Vlaenderen"},
  {name: "Jan van Brussel",sex: "m",born: 1714,died: 1748,father: "Jacobus van Brussel",mother: "Joanna van Rooten"},
  {name: "Philibert Haverbeke",sex: "m",born: 1907,died: 1997,father: "Emile Haverbeke",mother: "Emma de Milliano"},
  {name: "Jan Frans van Brussel",sex: "m",born: 1761,died: 1833,father: "Jacobus Bernardus van Brussel",mother: null},
  {name: "Pauwels van Haverbeke",sex: "m",born: 1535,died: 1582,father: "N. van Haverbeke",mother: null},
  {name: "Clara Aernoudts",sex: "f",born: 1918,died: 2012,father: "Henry Aernoudts",mother: "Sidonie Coene"},
  {name: "Emile Haverbeke",sex: "m",born: 1877,died: 1968,father: "Carolus Haverbeke",mother: "Maria Sturm"},
  {name: "Lieven de Causmaecker",sex: "m",born: 1696,died: 1724,father: "Carel de Causmaecker",mother: "Joanna Claes"},
  {name: "Pieter Haverbeke",sex: "m",born: 1602,died: 1642,father: "Lieven van Haverbeke",mother: null},
  {name: "Livina Haverbeke",sex: "f",born: 1692,died: 1743,father: "Daniel Haverbeke",mother: "Joanna de Pape"},
  {name: "Pieter Bernard Haverbeke",sex: "m",born: 1695,died: 1762,father: "Willem Haverbeke",mother: "Petronella Wauters"},
  {name: "Lieven van Haverbeke",sex: "m",born: 1570,died: 1636,father: "Pauwels van Haverbeke",mother: "Lievijne Jans"},
  {name: "Joanna de Causmaecker",sex: "f",born: 1762,died: 1807,father: "Bernardus de Causmaecker",mother: null},
  {name: "Willem Haverbeke",sex: "m",born: 1668,died: 1731,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
  {name: "Pieter Antone Haverbeke",sex: "m",born: 1753,died: 1798,father: "Jan Francies Haverbeke",mother: "Petronella de Decker"},
  {name: "Maria van Brussel",sex: "f",born: 1801,died: 1834,father: "Jan Frans van Brussel",mother: "Joanna de Causmaecker"},
  {name: "Angela Haverbeke",sex: "f",born: 1728,died: 1734,father: "Pieter Bernard Haverbeke",mother: "Livina de Vrieze"},
  {name: "Elisabeth Haverbeke",sex: "f",born: 1711,died: 1754,father: "Jan Haverbeke",mother: "Maria de Rycke"},
  {name: "Lievijne Jans",sex: "f",born: 1542,died: 1582,father: null,mother: null},
  {name: "Bernardus de Causmaecker",sex: "m",born: 1721,died: 1789,father: "Lieven de Causmaecker",mother: "Livina Haverbeke"},
  {name: "Jacoba Lammens",sex: "f",born: 1699,died: 1740,father: "Lieven Lammens",mother: "Livina de Vrieze"},
  {name: "Pieter de Decker",sex: "m",born: 1705,died: 1780,father: "Joos de Decker",mother: "Petronella van de Steene"},
  {name: "Joanna de Pape",sex: "f",born: 1654,died: 1723,father: "Vincent de Pape",mother: "Petronella Wauters"},
  {name: "Daniel Haverbeke",sex: "m",born: 1652,died: 1723,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
  {name: "Lieven Haverbeke",sex: "m",born: 1631,died: 1676,father: "Pieter Haverbeke",mother: "Anna van Hecke"},
  {name: "Martina de Pape",sex: "f",born: 1666,died: 1727,father: "Vincent de Pape",mother: "Petronella Wauters"},
  {name: "Jan Francies Haverbeke",sex: "m",born: 1725,died: 1779,father: "Pieter Bernard Haverbeke",mother: "Livina de Vrieze"},
  {name: "Maria Haverbeke",sex: "m",born: 1905,died: 1997,father: "Emile Haverbeke",mother: "Emma de Milliano"},
  {name: "Petronella de Decker",sex: "f",born: 1731,died: 1781,father: "Pieter de Decker",mother: "Livina Haverbeke"},
  {name: "Livina Sierens",sex: "f",born: 1761,died: 1826,father: "Jan Sierens",mother: "Maria van Waes"},
  {name: "Laurentia Haverbeke",sex: "f",born: 1710,died: 1786,father: "Jan Haverbeke",mother: "Maria de Rycke"},
  {name: "Carel Haverbeke",sex: "m",born: 1796,died: 1837,father: "Pieter Antone Haverbeke",mother: "Livina Sierens"},
  {name: "Elisabeth Hercke",sex: "f",born: 1632,died: 1674,father: "Willem Hercke",mother: "Margriet de Brabander"},
  {name: "Jan Haverbeke",sex: "m",born: 1671,died: 1731,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
  {name: "Anna van Hecke",sex: "f",born: 1607,died: 1670,father: "Paschasius van Hecke",mother: "Martijntken Beelaert"},
  {name: "Maria Sturm",sex: "f",born: 1835,died: 1917,father: "Charles Sturm",mother: "Seraphina Spelier"},
  {name: "Jacobus Bernardus van Brussel",sex: "m",born: 1736,died: 1809,father: "Jan van Brussel",mother: "Elisabeth Haverbeke"}
];

function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}
function age(p) {
  return p.died - p.born;
}
function male(p) {
  return p.sex == "m";
}
function female(p) {
  return p.sex == "f";
}

let byName = {};
array1.forEach(function(person) {
  byName[person.name] = person;
});

console.log(average(array1.map(element=>(age(element)))))


console.log('')
console.log('№12')

let array2 = [
  {name: "Carolus Haverbeke", sex: "m", born: 1832, died: 1905, father: "Carel Haverbeke", mother: "Maria van Brussel"},
  {name: "Emma de Milliano",sex: "f",born: 1876,died: 1956,father: "Petrus de Milliano",mother: "Sophia van Damme"},
  {name: "Maria de Rycke",sex: "f",born: 1683,died: 1724,father: "Frederik de Rycke",mother: "Laurentia van Vlaenderen"},
  {name: "Jan van Brussel",sex: "m",born: 1714,died: 1748,father: "Jacobus van Brussel",mother: "Joanna van Rooten"},
  {name: "Philibert Haverbeke",sex: "m",born: 1907,died: 1997,father: "Emile Haverbeke",mother: "Emma de Milliano"},
  {name: "Jan Frans van Brussel",sex: "m",born: 1761,died: 1833,father: "Jacobus Bernardus van Brussel",mother: null},
  {name: "Pauwels van Haverbeke",sex: "m",born: 1535,died: 1582,father: "N. van Haverbeke",mother: null},
  {name: "Clara Aernoudts",sex: "f",born: 1918,died: 2012,father: "Henry Aernoudts",mother: "Sidonie Coene"},
  {name: "Emile Haverbeke",sex: "m",born: 1877,died: 1968,father: "Carolus Haverbeke",mother: "Maria Sturm"},
  {name: "Lieven de Causmaecker",sex: "m",born: 1696,died: 1724,father: "Carel de Causmaecker",mother: "Joanna Claes"},
  {name: "Pieter Haverbeke",sex: "m",born: 1602,died: 1642,father: "Lieven van Haverbeke",mother: null},
  {name: "Livina Haverbeke",sex: "f",born: 1692,died: 1743,father: "Daniel Haverbeke",mother: "Joanna de Pape"},
  {name: "Pieter Bernard Haverbeke",sex: "m",born: 1695,died: 1762,father: "Willem Haverbeke",mother: "Petronella Wauters"},
  {name: "Lieven van Haverbeke",sex: "m",born: 1570,died: 1636,father: "Pauwels van Haverbeke",mother: "Lievijne Jans"},
  {name: "Joanna de Causmaecker",sex: "f",born: 1762,died: 1807,father: "Bernardus de Causmaecker",mother: null},
  {name: "Willem Haverbeke",sex: "m",born: 1668,died: 1731,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
  {name: "Pieter Antone Haverbeke",sex: "m",born: 1753,died: 1798,father: "Jan Francies Haverbeke",mother: "Petronella de Decker"},
  {name: "Maria van Brussel",sex: "f",born: 1801,died: 1834,father: "Jan Frans van Brussel",mother: "Joanna de Causmaecker"},
  {name: "Angela Haverbeke",sex: "f",born: 1728,died: 1734,father: "Pieter Bernard Haverbeke",mother: "Livina de Vrieze"},
  {name: "Elisabeth Haverbeke",sex: "f",born: 1711,died: 1754,father: "Jan Haverbeke",mother: "Maria de Rycke"},
  {name: "Lievijne Jans",sex: "f",born: 1542,died: 1582,father: null,mother: null},
  {name: "Bernardus de Causmaecker",sex: "m",born: 1721,died: 1789,father: "Lieven de Causmaecker",mother: "Livina Haverbeke"},
  {name: "Jacoba Lammens",sex: "f",born: 1699,died: 1740,father: "Lieven Lammens",mother: "Livina de Vrieze"},
  {name: "Pieter de Decker",sex: "m",born: 1705,died: 1780,father: "Joos de Decker",mother: "Petronella van de Steene"},
  {name: "Joanna de Pape",sex: "f",born: 1654,died: 1723,father: "Vincent de Pape",mother: "Petronella Wauters"},
  {name: "Daniel Haverbeke",sex: "m",born: 1652,died: 1723,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
  {name: "Lieven Haverbeke",sex: "m",born: 1631,died: 1676,father: "Pieter Haverbeke",mother: "Anna van Hecke"},
  {name: "Martina de Pape",sex: "f",born: 1666,died: 1727,father: "Vincent de Pape",mother: "Petronella Wauters"},
  {name: "Jan Francies Haverbeke",sex: "m",born: 1725,died: 1779,father: "Pieter Bernard Haverbeke",mother: "Livina de Vrieze"},
  {name: "Maria Haverbeke",sex: "m",born: 1905,died: 1997,father: "Emile Haverbeke",mother: "Emma de Milliano"},
  {name: "Petronella de Decker",sex: "f",born: 1731,died: 1781,father: "Pieter de Decker",mother: "Livina Haverbeke"},
  {name: "Livina Sierens",sex: "f",born: 1761,died: 1826,father: "Jan Sierens",mother: "Maria van Waes"},
  {name: "Laurentia Haverbeke",sex: "f",born: 1710,died: 1786,father: "Jan Haverbeke",mother: "Maria de Rycke"},
  {name: "Carel Haverbeke",sex: "m",born: 1796,died: 1837,father: "Pieter Antone Haverbeke",mother: "Livina Sierens"},
  {name: "Elisabeth Hercke",sex: "f",born: 1632,died: 1674,father: "Willem Hercke",mother: "Margriet de Brabander"},
  {name: "Jan Haverbeke",sex: "m",born: 1671,died: 1731,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
  {name: "Anna van Hecke",sex: "f",born: 1607,died: 1670,father: "Paschasius van Hecke",mother: "Martijntken Beelaert"},
  {name: "Maria Sturm",sex: "f",born: 1835,died: 1917,father: "Charles Sturm",mother: "Seraphina Spelier"},
  {name: "Jacobus Bernardus van Brussel",sex: "m",born: 1736,died: 1809,father: "Jan van Brussel",mother: "Elisabeth Haverbeke"}
];
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

function groupBy(arr, func){ 
    let groupObj = {};
    arr.forEach(function(p){
        let id = func(p);
        if (groupObj[id] === undefined ) {
            groupObj[id] = [];
        }
        groupObj[id].push( p )
    });
    return groupObj;
}
function getCentury(p) {
    return Math.ceil(p.died / 100);
}
let byCenturies = groupBy( array2, getCentury );

for (century in byCenturies ) {
    byCenturies[century] = average( byCenturies[century].map(function(p){ return p.died - p.born }) );
    console.log( century + ": " + byCenturies[century] );
}


console.log('')
console.log('№13')

function every(array, isEvery) {
  if (!Array.isArray(array)) {
    return "Некорректные данные"
  }
  for (i = 0; i < array.length; i++) {
    if (!isEvery(array[i])) {
      return false;
    }
  }
  return true;
}
function some(array, isSome) {
  if (!Array.isArray(array)) {
    return "Некорректные данные"
  }
  for (i = 0; i < array.length; i++) {
    if (isSome(array[i])) {
      return true;
    }
  }
  return false; 
}
 
console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));