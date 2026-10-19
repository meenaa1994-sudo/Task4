

// 1. Create a function welcome() that prints "Welcome to JavaScript".
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();//output ::Welcome to JavaScript//

// 2. Create a function studentDetails(name, age, cgpa) that prints all three values. Call it with two different students.
function studentDetails(name, age, cgpa) {
    console.log(`Student Name: ${name}, Age: ${age}, CGPA: ${cgpa}`);
}
studentDetails("Meenakshi", 20, 3.8);
studentDetails("vinoth kumar", 22, 3.5);
//output:: Student Name: Meenakshi, Age: 20, CGPA: 3.8 ;Student Name: vinoth kumar, Age: 22, CGPA: 3.5//

// 3. Create a function calculateFee(fee) that returns the student fee. Store the returned value in a variable and print it.
function calculateFee(fee) {
    return fee;
}
let storedFee = calculateFee(50000);
console.log("Calculated Fee: ₹",{storedFee});
//output: Calculated Fee: ₹ {storedFee: 50000}//


// 4. Create a function discount(percent) that calculates a discount on a fee of ₹200,000 and prints the final fee.
function discount(percent) {
    let originalFee = 200000;
    let discountAmount = (originalFee * percent) / 100;
    let finalFee = originalFee - discountAmount;
    console.log("Fee after ",{percent},"discount:",{discountAmount} ,{finalFee});
}
discount(15);

//output:: Form - Name:  {name: 'Selvi'}  Age:  {age: 19} Disability:  {disability: 'yes'}

// 5. Create a function studentForm(name, age, disability = "no"). Call it three times, including once without passing the disability argument.
function studentForm(name, age, disability = "no") {
    console.log("Form - Name: ",{name}," Age: ",{age}, "Disability: ",{disability});
}
studentForm("Selvi", 19, "yes");
studentForm("Ravi", 21, "no");
studentForm("Ammu", 20); // Uses default parameter "no"

// 6. Create a named function that accepts a message and prints it.
function showMessage(message) {
    console.log("Named Function Message: ",{message});
}
showMessage("Hello from a meenakshi !"); //output:: Hellomfrom a meenakshi//

// 7. Create an anonymous function and store it in a variable. Pass a name to it and print the name.
let printName = function (name) {
    console.log("Anonymous Function Name: ",{name});
};
printName("Fernandas");//output: fernandas//

// 8. Create an arrow function that accepts a number and prints it.
let printNumber = (num) => {
    console.log("Arrow Function Number: ",{num});
};
printNumber(42);
//output: num: 42//
// 9. Create a function containing var, let, and const inside an if block. Check which variables can be accessed inside and outside the block.
function scopeTest() {
    if (true) {
        var blockVar = "I am var variable (function scoped)";
        let blockLet = "I am let variable (block scoped)";
        const blockConst = "I am const (block scoped)";
        
        console.log("Inside block:", blockVar, blockLet, blockConst);
    }
    
    console.log("Outside block (var):", blockVar);
    
    
}
scopeTest();
//output: I am variable//
// 10. Predict the output of this code:
var value = 10;
console.log(value ," expected is 10"); // value exists, but has not been assigned yet, so it is undefined
//output: expectedmism10//


// 11. Create two functions, first() and second(). Pass second as a callback to first() and execute it inside first().
function second() {
    console.log("Callback function 'second' executed!");
}
function first(callback) {
    console.log("Inside 'first' function.");
    callback();
}
first(second);
//output: inside 'first' function.
//callback function 'second'executed.

// 13. Create a sub(num1, num2) arrow function
const sub = (num1, num2) => {
    console.log(`Subtraction result (${num1} - ${num2}): ${num1 - num2}`);
};
//output: 10-4=6
// 12.  Create an add(callback, a, b) function
function add(callback, a, b) {
    console.log(`Sum (${a} + ${b}): ${a + b}`);
    callback(a, b); // Calling the callback with the two numbers
}

add(sub, 10, 4);
//output: 10+4=14//

// 15.. Create a divide(num1, num2) function
const divide = (num1, num2) => {
    console.log(`Division result (${num1} / ${num2}): ${num2 !== 0 ? num1 / num2 : "Cannot divide by zero"}`);
};
//output: 12/3=4
// 14.. Create a multiply(callback, a, b) function
function multiply(callback, a, b) {
    console.log(`Multiplication result (${a} * ${b}): ${a * b}`);
    callback(a, b); // Executing the callback
}
//output:12*3=36//
// Testing multiply and divide

multiply(divide, 12, 3);


// 16.. Create a higher-order function that accepts a callback and calls it with a student's name
function processStudentName(callback, name) {
    callback(name);
}

// Example callback function to pass into processStudentName
const printStudentGreeting = (studentName) => {
    console.log(`Hello, ${studentName}! Welcome to JavaScript callbacks.`);
};//output: Hello, ravi! Welcome to JavaScript callbacks.//

// Testing the higher-order function
processStudentName(printStudentGreeting, "ravi");
// 17&18 Create a generator function that yields three values. Call .next() three times.
function* cashbackGenerator() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackObj = cashbackGenerator();
console.log(cashbackObj.next()); // { value: '10% cashback', done: false }
console.log(cashbackObj.next()); // { value: '30% cashback', done: false }
console.log(cashbackObj.next()); // { value: 'Better luck next time', done: false }

//output:  value: '10% cashback', done: false; value: '30% cashback', done: false//

// 19. Create a generator function that yields five different discount messages. Print each yielded value using a for-of loop.
function* fiveDiscounts() {
    yield "5% Off on Electronics";
    yield "10% Off on Clothing";
    yield "20% Off on Books";
    yield "50% Off on Clearance";
    yield "Free Shipping Voucher";
}

for (let discountMsg of fiveDiscounts()) {
    console.log(discountMsg);
}
/*outpuut:: 5% Off on Electronic
     10% Off on Clothing
    20% Off on Books
    50% Off on Clearance
    Free Shipping Voucher */

// 20. Create a generator function that yields three student names. Use a for-of loop to display them.
function* studentNamesGen() {
    yield "Hari";
    yield "Ivana";
    yield "Janaki";
}

let studentNames = studentNamesGen();
for (let name of studentNames) {
    console.log(name);
}
//output:: hari; ivna; janaki//

// 21. Create a generator function with four yield statements. Check the done property after the yielded values have been consumed.
function* fourYieldsGen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let genObj = fourYieldsGen();
console.log(genObj.next()); // done: false
console.log(genObj.next()); // done: false
console.log(genObj.next()); // done: false
console.log(genObj.next()); // done: false
let finalResult = genObj.next();
console.log(`After consuming all values, done property is: ${finalResult.done}`);



//22. Create a normal function add(a, b, c) that prints the sum of three numbers.
function normalAdd(a, b, c) {
    console.log(`Normal add sum: ${a + b + c}`);
}
normalAdd(1, 2, 3);
//output:6//

// 23 & 24. Convert the add(a, b, c) function into a curried function using nested functions and call it using functionName(5)(10)(15).
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
let curriedResult = curriedAdd(5)(10)(15);
console.log("Curried function result: ",{curriedResult});

//output: curried function result :30; normal function result : 30//

// 25. Create a curried function that accepts product price, discount percentage, and quantity, then calculates the total discounted price.
const calculateTotalPrice = (price) => (discountPercent) => (quantity) => {
    let discountedPricePerItem = price - (price * discountPercent) / 100;
    return discountedPricePerItem * quantity;
};
let totalPrice = calculateTotalPrice(1000)(10)(3); // ₹1000 price, 10% discount, quantity 3
console.log("Total discounted price: ",{totalPrice});

//output: Total discounted price:  {totalPrice: 2700}Curried function result:  {curriedResult: 30}


// 26. Write a normal three-parameter function and its curried equivalent. Call both with the same values and compare their results.

function addNumbers(a, b, c) {
    return a + b + c;
}

const curriedAddNumbers = (aa) => {
    return (ab) => {
        return (ac) => {
            return aa + ab + ac;
        };
    };
};


const testValues = [5, 10, 15];

// Calling the normal function
const normalResult = addNumbers(...testValues); // Equivalent to addNumbers(5, 10, 15)

// Calling the curried function
const curriedResul = curriedAddNumbers(testValues[0])(testValues[1])(testValues[2]); 

// Output and Comparison
console.log(`Normal Function Result: ${normalResult}`);
console.log(`Curried Function Result: ${curriedResul}`);
console.log(`Are the results identical? ${normalResult === curriedResult}`);

// 27. Create an IIFE that accepts a product name and discount percentage, then displays a sale message using a template string.
(function(productName, discountPercent) {
    console.log(`[IIFE Sale] Special Offer! Get ${discountPercent}% off on our exclusive ${productName}!`);
})("Smartwatch", 25);
//output: [IIFE Sale] Special Offer! Get 25% off on our exclusive Smartwatch!//
// 28. Create a function that returns a number. Store the returned value in a variable and print it.
function getLuckyNumber() {
    return 77;
}
let luckyNum = getLuckyNumber();
console.log(`Returned lucky number: ${luckyNum}`);
//output:: Returned lucky number: 77
//29.create a function that accepts a student's marks and returns the marks.
function getStudentMarks(marks) {
    return marks;
}


let myMarks = getStudentMarks(92);
console.log(`Stored Student Marks: ${myMarks}`);
//output:  Stored Student Marks: 92//

// 30.Callback function to calculate the discount with a default parameter
function calculateDiscount(fee, discountPercent = 10) {
    let discountAmount = (fee * discountPercent) / 100;
    return fee - discountAmount;
}


function studentFeeCalculator(baseFee = 60000, discountCallback) {
    // Applying a 15% discount using the callback
    let finalFee = discountCallback(baseFee, 15);
    return finalFee;
}

let finalPayableAmount = studentFeeCalculator(75000, calculateDiscount);
console.log(`Final Payable Student Fee: ₹ ${finalPayableAmount}`);
//output ::Final Payable Student Fee: ₹ 63750//