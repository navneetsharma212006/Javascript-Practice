/*
╔══════════════════════════════════════════════════════════════════════╗
║       JAVASCRIPT — CALLBACK & HIGHER-ORDER FUNCTIONS               ║
║                    Beginner → MERN Developer                       ║
╚══════════════════════════════════════════════════════════════════════╝


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q1. First, what is a function in JavaScript?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A function is a reusable block of code that performs a task.

Example:

function greet() {
    console.log("Hello");
}

greet();


Output:

Hello


The important thing is:

In JavaScript, functions are also VALUES.

This means we can:

1. Store a function in a variable
2. Pass a function to another function
3. Return a function from another function


This concept is the foundation of:

CALLBACK FUNCTIONS

and

HIGHER-ORDER FUNCTIONS


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q2. Can a function be stored inside a variable?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Yes.

Example:

const greet = function() {

    console.log("Hello");

};


Now:

greet();


Output:

Hello


Here:

greet

contains a function.


This is possible because JavaScript treats functions as
"first-class values."


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q3. What does "first-class function" mean?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It simply means:

JavaScript allows functions to be treated like normal values.


For example:

const name = "Navneet";


We can store a string in a variable.

Similarly:

const greet = function() {

    console.log("Hello");

};


We can store a function in a variable.


We can also pass it:

someFunction(greet);


And return it:

return greet;


This ability is what makes callbacks and higher-order functions
possible.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q4. What is a callback function?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A callback function is:

"A function that is passed to another function as an argument,
so that the other function can call it later."


Example:

function greet(name) {

    console.log("Hello " + name);

}


function processUser(callback) {

    callback("Navneet");

}


processUser(greet);


Output:

Hello Navneet


Here:

greet

is the CALLBACK FUNCTION.


Why?

Because we passed it into:

processUser(greet);


And processUser calls it:

callback("Navneet");


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q5. Why is it called a "callback"?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because we give a function to another function and say:

"Use this function when you need it."


Example:

function processUser(callback) {

    console.log("Processing user...");

    callback();

}


processUser(() => {

    console.log("User processed");

});


Output:

Processing user...
User processed


The second function is called back by processUser.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q6. What is the most important callback syntax?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember this:

function process(callback) {

    callback();

}


process(myFunction);


NOT:

process(myFunction());


This difference is VERY important.


myFunction

means:

"Here is the function."


myFunction()

means:

"Execute the function RIGHT NOW."


So:

process(myFunction);

passes the function.


process(myFunction());

executes the function first and passes its result.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q7. Simple real-life analogy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine ordering food.

You tell the restaurant:

"Call me when my food is ready."


You don't stand there continuously asking:

"Is it ready?"

Instead, you give them your callback:

callMeWhenReady


Restaurant:

Food ready
    ↓
calls your callback
    ↓
you receive notification


JavaScript works similarly:

Operation starts
      ↓
callback is provided
      ↓
operation finishes
      ↓
callback runs


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q8. What is a Higher-Order Function?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A Higher-Order Function (HOF) is a function that does
AT LEAST ONE of these:

1. Accepts another function as an argument

OR

2. Returns another function


Example 1:

function process(callback) {

    callback();

}


process(greet);


process() is a Higher-Order Function.

Why?

Because it accepts a function.


Example 2:

function createGreeting() {

    return function() {

        console.log("Hello");

    };

}


createGreeting() returns a function.

So:

createGreeting()

is also a Higher-Order Function.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q9. What is the relationship between Callback and Higher-Order Function?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is one of the most important concepts.

Example:

function processUser(callback) {

    callback();

}


processUser(greet);


Here:

processUser
→ Higher-Order Function


greet
→ Callback Function


Why?

processUser ACCEPTS a function.

greet is the function being PASSED.


Think:

HOF
 ↓
accepts function
 ↓
that function
 ↓
is callback


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q10. Are callback and higher-order function the same thing?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NO.


Callback:

A function passed to another function.


Higher-Order Function:

A function that accepts a function OR returns a function.


Example:

function calculate(a, b, operation) {

    return operation(a, b);

}


function add(a, b) {

    return a + b;

}


calculate(10, 20, add);


Here:

calculate
→ Higher-Order Function


add
→ Callback


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q11. Why are Higher-Order Functions so useful?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

They allow us to write reusable and flexible code.


Without HOF:

function add(a, b) {

    return a + b;

}


function multiply(a, b) {

    return a * b;

}


We would need separate functions for everything.


With HOF:

function calculate(a, b, operation) {

    return operation(a, b);

}


Now:

calculate(10, 20, add);

calculate(10, 20, multiply);


Same function.

Different behavior.


This is extremely useful in real applications.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q12. What are the most important built-in Higher-Order Functions?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For a MERN developer, you MUST know:

map()
filter()
reduce()
forEach()
find()
some()
every()
sort()


These methods accept functions.

Therefore, they are examples of Higher-Order Functions.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q13. How is map() a Higher-Order Function?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example:

const numbers = [1, 2, 3, 4];


const doubled = numbers.map((number) => {

    return number * 2;

});


Output:

[2, 4, 6, 8]


Here:

map()

accepts:

(number) => {
    return number * 2;
}


That function is the CALLBACK.


map()

is the HIGHER-ORDER FUNCTION.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q14. What is happening internally conceptually?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You write:

numbers.map((number) => {

    return number * 2;

});


Conceptually:

map()
 ↓
takes each array element
 ↓
calls your callback
 ↓
callback processes the element
 ↓
map stores the returned result
 ↓
new array


So:

Array method
→ Higher-Order Function


Your function
→ Callback


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q15. What is the callback parameter?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example:

const numbers = [10, 20, 30];


numbers.map((number) => {

    console.log(number);

});


The callback receives each array element.

First:

number = 10


Then:

number = 20


Then:

number = 30


You don't manually call the callback.

map() does it for you.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q16. What parameters can an array callback receive?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Usually:

array.map((value, index, array) => {

});


Three important parameters:

value
→ current element


index
→ current index


array
→ original array


Example:

const users = ["A", "B", "C"];


users.map((user, index) => {

    console.log(user, index);

});


Output:

A 0
B 1
C 2


Most of the time you only need:

value

or:

value, index


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q17. What is a very common mistake with map()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Wrong:

const numbers = [1, 2, 3];


const result = numbers.map((number) => {

    number * 2;

});


Output:

[undefined, undefined, undefined]


Why?

Because you didn't return anything.


Correct:

const result = numbers.map((number) => {

    return number * 2;

});


Output:

[2, 4, 6]


Remember:

map()
→ callback should normally RETURN the transformed value.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q18. What about filter()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

filter() is also a Higher-Order Function.

Example:

const numbers = [1, 2, 3, 4, 5];


const result = numbers.filter((number) => {

    return number > 2;

});


Output:

[3, 4, 5]


Here:

filter()
→ Higher-Order Function


(number) => number > 2
→ Callback


The callback should return:

true
or
false


true
→ keep element


false
→ remove element


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q19. What about reduce()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

reduce() is also a Higher-Order Function.


Example:

const numbers = [10, 20, 30];


const total = numbers.reduce((sum, number) => {

    return sum + number;

}, 0);


Output:

60


Here:

reduce()
→ Higher-Order Function


(sum, number) => ...
→ Callback


reduce() is commonly used for:

- totals
- calculations
- grouping
- building objects
- counting
- transforming data


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q20. REAL INDUSTRY USE CASE — E-COMMERCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine your backend returns:

const products = [

    {
        name: "Laptop",
        price: 80000
    },

    {
        name: "Mouse",
        price: 1000
    },

    {
        name: "Keyboard",
        price: 2000
    }

];


You want to display product names.


Use map():

const names = products.map((product) => {

    return product.name;

});


Output:

[
    "Laptop",
    "Mouse",
    "Keyboard"
]


Here:

map()
→ Higher-Order Function


product => product.name
→ Callback


This is something you will do constantly in MERN applications.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q21. REAL INDUSTRY USE CASE — PRODUCT FILTERING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you want products under ₹50,000.

const products = [

    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }

];


const affordableProducts =
    products.filter((product) => {

        return product.price < 50000;

    });


Result:

[
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
]


Again:

filter()
→ HOF


product => product.price < 50000
→ callback


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q22. REAL INDUSTRY USE CASE — SHOPPING CART TOTAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cart:

const cart = [

    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }

];


Calculate total:

const total = cart.reduce((sum, item) => {

    return sum + item.price;

}, 0);


Result:

83000


Here:

reduce()
→ HOF


(sum, item) => ...
→ callback


This pattern is extremely common in e-commerce applications.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q23. What about forEach()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

forEach() also accepts a callback.


Example:

const users = ["A", "B", "C"];


users.forEach((user) => {

    console.log(user);

});


Output:

A
B
C


forEach()
→ Higher-Order Function


user => console.log(user)
→ Callback


Important:

forEach() does NOT create a new transformed array like map().


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q24. map() vs forEach() — important for MERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

map():

Use when you want a NEW ARRAY.


const names = users.map((user) => {

    return user.name;

});


forEach():

Use when you simply want to perform an action.


users.forEach((user) => {

    console.log(user.name);

});


Simple rule:

Need new array?
→ map()


Just perform an action?
→ forEach()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q25. What is a function returning another function?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example:

function createGreeting(name) {

    return function() {

        console.log("Hello " + name);

    };

}


const greetNavneet =
    createGreeting("Navneet");


greetNavneet();


Output:

Hello Navneet


Here:

createGreeting()

returns another function.


Therefore:

createGreeting()

is a Higher-Order Function.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q26. Why is returning functions useful in real applications?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

It allows us to create customized functions.


Example:

function createDiscount(discount) {

    return function(price) {

        return price - (price * discount / 100);

    };

}


const tenPercentOff =
    createDiscount(10);


const twentyPercentOff =
    createDiscount(20);


console.log(
    tenPercentOff(1000)
);


Output:

900


And:

console.log(
    twentyPercentOff(1000)
);


Output:

800


Same function factory.

Different behavior.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q27. REAL MERN USE CASE — Express Middleware
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is VERY important for MERN/backend developers.

Suppose:

function checkRole(role) {

    return function(req, res, next) {

        if (req.user.role !== role) {

            return res
                .status(403)
                .json({
                    message: "Access denied"
                });

        }

        next();

    };

}


Then:

app.delete(
    "/users/:id",
    checkRole("admin"),
    deleteUser
);


Here:

checkRole()

returns a function.


Therefore:

checkRole()
→ Higher-Order Function


The returned function
→ Middleware function


This is a real-world backend pattern.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q28. Why are callbacks important in Express?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example:

app.get("/users", (req, res) => {

    res.json({
        message: "Users"
    });

});


The function:

(req, res) => { ... }


is passed to:

app.get()


Express later calls that function when a request arrives.


So:

app.get()
→ accepts a function


Your route handler
→ callback


This is the same callback concept.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q29. Are React event handlers callbacks?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Yes.

Example:

function handleClick() {

    console.log("Button clicked");

}


React:

<button onClick={handleClick}>
    Buy
</button>


React receives your function and calls it when the event happens.


So:

handleClick
→ callback


The important thing:

Do NOT write:

onClick={handleClick()}


because that executes the function immediately.


Usually write:

onClick={handleClick}


or:

onClick={() => handleClick(product)}


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q30. What is the difference between synchronous and asynchronous callbacks?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Synchronous callback:

It runs during the current operation.


Example:

[1, 2, 3].forEach((number) => {

    console.log(number);

});


The callback executes immediately for each element.


Asynchronous callback:

It runs later.


Example:

setTimeout(() => {

    console.log("Hello");

}, 1000);


The callback runs after approximately 1 second.


Other examples:

setTimeout()
fetch()
Promises
event listeners
database operations


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q31. How do callbacks relate to asynchronous JavaScript?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consider:

setTimeout(() => {

    console.log("Data loaded");

}, 2000);


Here:

() => {
    console.log("Data loaded");
}


is a callback.


JavaScript says:

"Run this function later."


So:

Start operation
      ↓
callback registered
      ↓
JavaScript continues
      ↓
operation completes
      ↓
callback runs


This is one of the foundations of asynchronous JavaScript.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q32. What is Callback Hell?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Callback Hell happens when many asynchronous callbacks become
deeply nested.


Example:

getUser((user) => {

    getOrders(user, (orders) => {

        getPayment(orders, (payment) => {

            sendEmail(payment, () => {

                console.log("Done");

            });

        });

    });

});


This becomes difficult to:

- read
- debug
- maintain
- handle errors


This is one reason JavaScript introduced/promoted:

Promises

and later:

async/await


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q33. How do Promises improve callback-based code?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Instead of:

getUser((user) => {

    getOrders(user, (orders) => {

        // more callbacks

    });

});


We can use:

const user = await getUser();

const orders = await getOrders(user);


Much easier to read.


So the evolution is roughly:

Callbacks
    ↓
Promises
    ↓
async/await


You should understand callbacks because Promises and async/await
build on the same idea of handling operations that finish later.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q34. What is a custom Higher-Order Function?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can create your own HOF.


Example:

function calculate(a, b, operation) {

    return operation(a, b);

}


function add(a, b) {

    return a + b;

}


function multiply(a, b) {

    return a * b;

}


console.log(
    calculate(10, 20, add)
);


Output:

30


console.log(
    calculate(10, 20, multiply)
);


Output:

200


This is the core idea behind many powerful JavaScript patterns.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q35. Why are HOFs important for clean code?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

They allow us to separate:

WHAT TO DO

from:

HOW TO RUN IT.


Example:

function processUsers(users, operation) {

    users.forEach(operation);

}


Now we can provide different operations.

processUsers(users, sendEmail);

processUsers(users, logUser);

processUsers(users, saveUser);


The main function doesn't need to know exactly what the operation does.


This creates reusable code.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q36. What is function composition?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Function composition means combining functions so that the output
of one becomes the input of another.


Example:

function double(number) {

    return number * 2;

}


function addTen(number) {

    return number + 10;

}


const result =
    addTen(double(5));


Step:

5
 ↓
double
 ↓
10
 ↓
addTen
 ↓
20


This idea becomes useful when building reusable data-processing logic.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q37. What is closure + Higher-Order Function?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an advanced concept you should understand after the basics.

Example:

function createCounter() {

    let count = 0;

    return function() {

        count++;

        return count;

    };

}


const counter =
    createCounter();


console.log(counter()); // 1

console.log(counter()); // 2

console.log(counter()); // 3


Why does count remain available?

Because the returned function forms a CLOSURE over count.


So:

Higher-Order Function
+
Closure

is a very powerful JavaScript pattern.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q38. What is the most important difference between map, filter,
reduce and forEach?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

map():

Transform every element.

Example:

[1, 2, 3].map(n => n * 2);


→ [2, 4, 6]


filter():

Keep elements that satisfy a condition.

Example:

[1, 2, 3].filter(n => n > 1);


→ [2, 3]


reduce():

Combine elements into one result.

Example:

[1, 2, 3].reduce((sum, n) => sum + n, 0);


→ 6


forEach():

Perform an action for each element.

Example:

[1, 2, 3].forEach(n => console.log(n));


→ prints each number


Remember:

map
→ TRANSFORM


filter
→ SELECT


reduce
→ COMBINE


forEach
→ DO SOMETHING


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q39. What is one important mistake with callbacks?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Don't accidentally CALL the function when you are supposed to
PASS the function.


Wrong:

setTimeout(console.log("Hello"), 1000);


This calls console.log immediately.


Correct:

setTimeout(() => {

    console.log("Hello");

}, 1000);


Or:

function sayHello() {

    console.log("Hello");

}


setTimeout(sayHello, 1000);


Remember:

sayHello
→ pass function


sayHello()
→ execute function


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q40. What is another important callback mistake in array methods?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Wrong:

const result = numbers.map((number) => {

    number * 2;

});


Because nothing is returned.


Correct:

const result = numbers.map((number) => {

    return number * 2;

});


Or with implicit return:

const result =
    numbers.map(number => number * 2);


Understand the return behavior before using shorthand syntax.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q41. What about async callbacks with forEach()?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is VERY important for MERN developers.

Avoid assuming this waits:

users.forEach(async (user) => {

    await saveUser(user);

});


forEach() does NOT wait for those async callbacks.


For sequential processing:

for (const user of users) {

    await saveUser(user);

}


For parallel processing:

await Promise.all(
    users.map((user) => saveUser(user))
);


This is an important real-world backend concept.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q42. What is the MERN connection?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Callbacks and Higher-Order Functions appear everywhere:

JAVASCRIPT
    ↓
map / filter / reduce
    ↓
React
    ↓
Event handlers
    ↓
Express
    ↓
Route handlers
    ↓
Middleware
    ↓
Mongoose
    ↓
Async operations


Examples:

React:

onClick={handleClick}


Express:

app.get("/users", handler)


Array:

users.map(user => user.name)


Async:

setTimeout(callback, 1000)


Middleware:

app.use(authMiddleware)


All of these rely heavily on functions being passed around.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                     INTERVIEW QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q43. What is a callback function?

ANSWER:

A function passed to another function as an argument, which can then
be called by that function.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q44. What is a Higher-Order Function?

ANSWER:

A function that accepts another function as an argument or returns
another function.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q45. Are callbacks and Higher-Order Functions the same?

ANSWER:

No.

The passed function is the callback.

The function accepting/returning a function is the Higher-Order Function.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q46. Is map() a Higher-Order Function?

ANSWER:

Yes.

It accepts a callback function.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q47. Is filter() a Higher-Order Function?

ANSWER:

Yes.

It accepts a callback function.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q48. Is reduce() a Higher-Order Function?

ANSWER:

Yes.

It accepts a callback function.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q49. What is the difference between:

greet

and

greet()


ANSWER:

greet

→ function reference


greet()

→ calls the function immediately


This distinction is extremely important when passing callbacks.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q50. What does map() return?

ANSWER:

A new array containing the values returned by the callback.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q51. What should a filter() callback return?

ANSWER:

A truthy or falsy result.

Truthy → keep element.

Falsy → remove element.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q52. What is map() mainly used for?

ANSWER:

Transforming every element into a new value.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q53. What is filter() mainly used for?

ANSWER:

Selecting elements that satisfy a condition.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q54. What is reduce() mainly used for?

ANSWER:

Combining an array into a single result or building another structure.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q55. What is forEach() mainly used for?

ANSWER:

Performing an action for each element.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q56. Why is this wrong?

setTimeout(greet(), 1000);


ANSWER:

Because greet() executes immediately.

Correct:

setTimeout(greet, 1000);


or:

setTimeout(() => {

    greet();

}, 1000);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q57. Is an Express route handler a callback?

Example:

app.get("/users", (req, res) => {

    res.json([]);

});


ANSWER:

Yes.

The function is passed to Express, and Express calls it when a
matching request arrives.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q58. Is a React event handler a callback?

Example:

<button onClick={handleClick}>
    Buy
</button>


ANSWER:

Yes.

React receives the function and calls it when the click occurs.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q59. Why shouldn't we normally write this?

<button onClick={handleClick()}>

ANSWER:

Because handleClick() executes during rendering.

Usually write:

<button onClick={handleClick}>


Or when arguments are needed:

<button onClick={() => handleClick(id)}>


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q60. What is Callback Hell?

ANSWER:

Deeply nested callback-based asynchronous code that becomes difficult
to read, maintain, and handle errors in.


Promises and async/await provide cleaner ways to handle such flows.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


                    PRACTICE QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q61. What is the output?

function process(callback) {

    callback();

}

function hello() {

    console.log("Hello");

}

process(hello);


ANSWER:

Hello


hello is the callback.

process is the Higher-Order Function.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q62. What is the output?

const numbers = [1, 2, 3];

const result =
    numbers.map((number) => {

        return number * 3;

    });

console.log(result);


ANSWER:

[3, 6, 9]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q63. What is the output?

const numbers = [1, 2, 3, 4];

const result =
    numbers.filter((number) => {

        return number % 2 === 0;

    });

console.log(result);


ANSWER:

[2, 4]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q64. What is the output?

const numbers = [10, 20, 30];

const total =
    numbers.reduce((sum, number) => {

        return sum + number;

    }, 0);

console.log(total);


ANSWER:

60


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q65. Identify the callback and Higher-Order Function:

numbers.map((number) => {

    return number * 2;

});


ANSWER:

Higher-Order Function:

map()


Callback:

(number) => {

    return number * 2;

}


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q66. Create a function called calculate() that accepts:

a
b
operation


Then use it to add two numbers.


ANSWER:

function calculate(a, b, operation) {

    return operation(a, b);

}


function add(a, b) {

    return a + b;

}


console.log(
    calculate(10, 20, add)
);


Output:

30


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q67. Create a function that returns another function.

ANSWER:

function createMultiplier(number) {

    return function(value) {

        return value * number;

    };

}


const double =
    createMultiplier(2);


console.log(
    double(10)
);


Output:

20


Here:

createMultiplier()
→ Higher-Order Function


returned function
→ function created by the HOF


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q68. REAL MERN PRACTICE

You receive:

const users = [

    {
        name: "A",
        age: 20,
        active: true
    },

    {
        name: "B",
        age: 25,
        active: false
    },

    {
        name: "C",
        age: 30,
        active: true
    }

];


Task:

Get the names of only active users.


ANSWER:

const activeUsers =
    users
        .filter((user) => {

            return user.active;

        })
        .map((user) => {

            return user.name;

        });


Output:

[
    "A",
    "C"
]


This is a VERY common pattern in real applications:

filter()
→ select required data


map()
→ transform selected data


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                         FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FIRST CONCEPT:

Functions are values.


        ↓


CALLBACK FUNCTION:

A function passed to another function.


        ↓


HIGHER-ORDER FUNCTION:

A function that accepts a function
OR
returns a function.


        ↓


ARRAY METHODS:

map()
filter()
reduce()
forEach()
find()
some()
every()
sort()


        ↓


REACT:

onClick={handleClick}


        ↓


EXPRESS:

app.get("/users", handler)


        ↓


MIDDLEWARE:

app.use(authMiddleware)


        ↓


ASYNC JAVASCRIPT:

setTimeout(callback)

Promise.then(callback)


        ↓


MERN APPLICATION


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    THE 6 THINGS TO REMEMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.

Functions can be stored in variables.


2.

Functions can be passed as arguments.


3.

A function passed to another function is a CALLBACK.


4.

A function that accepts/returns functions is a
HIGHER-ORDER FUNCTION.


5.

map/filter/reduce/forEach are Higher-Order Functions.


6.

Callbacks are everywhere in MERN:

React
Express
Middleware
Array methods
Events
Promises
Async operations


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                         GOLDEN MENTAL MODEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                 FUNCTION
                    ↓
            can be passed around
                    ↓
          ┌─────────┴─────────┐
          ↓                   ↓
      PASS FUNCTION       RETURN FUNCTION
          ↓                   ↓
       CALLBACK          HIGHER-ORDER
                          FUNCTION


Example:

users.map(user => user.name);

       ↓

map()
HOF

       +

user => user.name
Callback


Once this becomes natural, React and Node/Express code will become
much easier to understand.

*/