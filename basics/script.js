//Fundamental JavaScript concepts
//arrys and objects
//functions and methods
//asynchronous programming
//foreach, map ,filter, find, indexof

var arr=[10,20,"Chinmaya",true,function(){console.log("Hello World")}];
// Accessing elements in the array

arr.forEach(function(item,index){
    console.log("Item: " + item + ", Index: " + index);
});

//map
var maparr=arr.map(function(item){
    return 40;    // Example: mapping all items to 40
});
console.log("Mapped Array: ", maparr);

var newarr=arr.map(function(item){
    return item;
});
console.log("New Array: ", newarr);

//filter

var filterarr= arr.filter(function(item){
    if(item > 5){ return true;}
    else { return false; }
}); 
console.log("Filtered Array: ", filterarr);

//find
var findarr=arr.find(function(item){
    if(item === "Chinmaya"){ return true; }
    else { return false; }
});

console.log("Found Item: ", findarr);

//indexOf

var indexarr=arr.indexOf("Chinmaya");
console.log("Index of 'Chinmaya': ", indexarr);


//objects
var obj1={
    id:1234,
    name:"chinmaya",
    age:19,
    isStudent:true,
}
console.log("Object: ", obj1);
console.log("Object Name: ", obj1.name);
console.log("Object Age: ", obj1.age);
console.log("Object ID: ", obj1.id);
console.log("Is Student: ", obj1.isStudent);
// Adding a new property to the object  
obj1.city = "Pune";
console.log("Updated Object: ", obj1);
// Deleting a property from the object
delete obj1.age;

console.log("Updated Object: ", obj1);

//async
//what is async?
// Asynchronous programming allows code to run without blocking the main thread, enabling tasks like network requests to be handled efficiently.
var b=await fetch('https://jsonplaceholder.typicode.com/posts');
var res=await b.json();
console.log("Fetched Data: ", res);

//function
function greet(name) {
    console.log("Hello, " + name + "!");
}
// Calling the function
greet("Chinmaya");
// Function with return value
function add(a, b) {
    return a + b;
}   
// Calling the function and storing the result
var sum = add(5, 10);
console.log("Sum: ", sum);
// Function with parameters and default values
function multiply(a, b = 1) {
    return a * b;
}
// Calling the function with default value
var product = multiply(5);

console.log("Product: ", product);
// Function with rest parameters

function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num);
}

console.log("Sum of all numbers: ", sumAll(1, 2, 3, 4, 5));
// Function with callback
function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
// Using the processArray function
processArray([1, 2, 3], function(item, index) {
    console.log("Item: " + item + ", Index: " + index);
});
// Function with arrow function syntax
const square = (x) => x * x;
console.log("Square of 5: ", square(5));

// Function with async/await
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Async Fetched Data: ", data);
    } catch (error) { 
        console.error("Error fetching data: ", error);
    }
}

async function main() {
    var blob=await fetch('https://jsonplaceholder.typicode.com/posts');
    var res=await blob.json();
    console.log("Async Fetched Data: ", res);
}
main();

