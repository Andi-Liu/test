
var myArray1 = [2, 4, 6, 8];
var myArray2 = [3, 5, 7, 9];


//concat
console.log(myArray1.concat(myArray2));

//every 
var everyFun = function (item) {
    var remainder = item % 2;
    return remainder == 0 ? true : false;
};
console.log('every');
console.log(myArray1.every(everyFun));
console.log(myArray2.every(everyFun));

//filter
var filterFun = function (item) {
    var product = item * 2;
    return product < 10 ? true : false;
}
console.log('filter');
console.log(myArray1.filter(filterFun));
console.log(myArray2.filter(filterFun));

//foreach
var foreachFun = function (item) {
    item = item * 3;
}
console.log('foreach');
console.log(myArray1);
myArray1.forEach(foreachFun);
console.log(myArray1);

//map
var mapFun = function (item) {
    return item *= 2;
}
console.log('map');
console.log(myArray1);
console.log(myArray1.map(mapFun));

//join
console.log('join');
console.log(myArray1.join());

//indexOf
console.log('indexOf');
myArray1.splice(2, 0, 4, 6, 7)
console.log(myArray1);
console.log(myArray1.indexOf(4));

//lastIndexOf
console.log('lastIndexOf');
console.log(myArray1.lastIndexOf(4));


