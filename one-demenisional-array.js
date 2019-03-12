


var myArray = [10,20,30,40,50];
console.log(myArray);


//remove first item in array
myArray.shift();

//remove last item in array
myArray.pop();

//add new element at the beginning of an array
myArray.unshift(5);

//add new element at the ennd of an array
myArray.push(60);

//remove the element  at the index
myArray.splice(); //nothing happen
myArray.splice(2,2);
myArray.splice(1,0,3,5,7,9);
myArray.splice(2,3,6,8,10);


console.log(myArray);
console.log(myArray.length);





