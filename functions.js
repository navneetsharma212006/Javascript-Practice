/*
=========================================================
            JAVASCRIPT FUNCTIONS
      COMPLETE GUIDE FOR MERN STACK DEVELOPERS
=========================================================


=========================================================
1. WHAT IS A FUNCTION?
=========================================================

A function is a reusable block of code that performs
a specific task.

Instead of writing the same code again and again:

console.log("Welcome Navneet");
console.log("Welcome Navneet");
console.log("Welcome Navneet");


We can create a function:


function welcome() {
    console.log("Welcome Navneet");
}


welcome();
welcome();
welcome();


Output:

Welcome Navneet
Welcome Navneet
Welcome Navneet


Simple definition:

FUNCTION = A reusable machine.

You give it some input.

↓

It performs some work.

↓

It may return an output.


Example:


Input

↓

Function

↓

Processing

↓

Output


=========================================================
2. WHY DO WE USE FUNCTIONS?
=========================================================

Without functions:

Your code becomes:

- Repetitive
- Difficult to maintain
- Difficult to test
- Difficult to reuse


Example without a function:


const price1 = 100;
const tax1 = price1 * 0.18;
const total1 = price1 + tax1;

const price2 = 200;
const tax2 = price2 * 0.18;
const total2 = price2 + tax2;


Better:


function calculateTotal(price) {

    const tax = price * 0.18;

    return price + tax;

}


const total1 = calculateTotal(100);

const total2 = calculateTotal(200);


Same logic.

Reusable function.


=========================================================
3. FUNCTION DECLARATION
=========================================================

Syntax:


function functionName() {

    // code

}


Example:


function greet() {

    console.log("Hello");

}


greet();


Output:

Hello


Parts:


function

↓

Keyword used to create a function


greet

↓

Function name


()

↓

Parameters go here


{}

↓

Function body


=========================================================
4. FUNCTION CALL / INVOCATION
=========================================================

Creating a function does NOT automatically run it.


Example:


function greet() {

    console.log("Hello");

}


Nothing happens yet.


To execute it:


greet();


Output:

Hello


Difference:


function greet() {

}


↑

Function declaration


greet();


↑

Function call / invocation


=========================================================
5. PARAMETERS AND ARGUMENTS
=========================================================

Parameters are variables that receive input.


Example:


function greet(name) {

    console.log("Hello " + name);

}


Here:


name

is a PARAMETER.


Now call:


greet("Navneet");


"Navneet"

is an ARGUMENT.


Output:


Hello Navneet


---------------------------------------------------------
MULTIPLE PARAMETERS
---------------------------------------------------------


function add(a, b) {

    return a + b;

}


console.log(add(10, 20));


Output:

30


Parameters:

a
b


Arguments:

10
20


=========================================================
6. REAL INDUSTRY EXAMPLE — USER REGISTRATION
=========================================================

Imagine a backend application.


function createUser(name, email, password) {

    const user = {
        name: name,
        email: email,
        password: password
    };

    return user;

}


const newUser = createUser(
    "Navneet",
    "navneet@example.com",
    "123456"
);


console.log(newUser);


In a real MERN backend, the function might:

1. Receive user data
2. Validate the data
3. Hash the password
4. Save the user in MongoDB
5. Return a response


Example structure:


async function registerUser(req, res) {

    // Validate data

    // Check existing user

    // Hash password

    // Save user

    // Send response

}


This is a real-world function structure you will see
in Node.js + Express applications.


=========================================================
7. RETURN
=========================================================

return sends a value back from a function.


Example:


function add(a, b) {

    return a + b;

}


const result = add(10, 20);

console.log(result);


Output:

30


---------------------------------------------------------
IMPORTANT
---------------------------------------------------------

console.log()

and

return

are NOT the same.


Example:


function add(a, b) {

    console.log(a + b);

}


const result = add(10, 20);

console.log(result);


Output:

30
undefined


Why?


The function prints 30.

But it does not RETURN anything.


So:


result = undefined


Correct:


function add(a, b) {

    return a + b;

}


const result = add(10, 20);

console.log(result);


Output:

30


=========================================================
8. RETURN STOPS THE FUNCTION
=========================================================

Example:


function test() {

    console.log("Before");

    return "Done";

    console.log("After");

}


console.log(test());


Output:

Before
Done


This never runs:


console.log("After");


Because:

return

immediately exits the function.


=========================================================
9. FUNCTION SCOPE
=========================================================

Variables declared inside a function usually exist
only inside that function.


Example:


function test() {

    const message = "Hello";

    console.log(message);

}


test();

console.log(message);


Output:


Hello

ReferenceError


Because:

message exists only inside test().


This is called:

FUNCTION SCOPE


=========================================================
10. LOCAL VS GLOBAL VARIABLES
=========================================================

GLOBAL VARIABLE:


const appName = "My App";


function showAppName() {

    console.log(appName);

}


showAppName();


The function can access appName.


Now:


function test() {

    const message = "Hello";

}


message is a LOCAL VARIABLE.


It cannot normally be accessed outside test().


Industry recommendation:

Avoid creating unnecessary global variables.


Bad:


let currentUser;
let total;
let count;
let data;


Better:

Keep variables inside functions, modules, classes,
or other appropriate scopes.


=========================================================
11. FUNCTION HOISTING
=========================================================

Function declarations are hoisted.


Example:


greet();


function greet() {

    console.log("Hello");

}


This works.


Output:

Hello


Because function declarations can be called before
their position in the source code.


But be careful with function expressions.


=========================================================
12. FUNCTION EXPRESSION
=========================================================

A function can be stored inside a variable.


Example:


const greet = function () {

    console.log("Hello");

};


greet();


This is called:

FUNCTION EXPRESSION


Important:


greet();


const greet = function () {

    console.log("Hello");

};


This gives an error.


Because:

const greet

is in the Temporal Dead Zone until initialization.


Industry usage:

You may see function expressions in older codebases
and callbacks.


=========================================================
13. ARROW FUNCTIONS
=========================================================

Modern JavaScript heavily uses arrow functions.


Normal function:


function add(a, b) {

    return a + b;

}


Arrow function:


const add = (a, b) => {

    return a + b;

};


Short version:


const add = (a, b) => a + b;


All can return the result.


=========================================================
14. WHEN TO USE NORMAL VS ARROW FUNCTIONS
=========================================================

A beginner-friendly industry rule:


Use normal functions when:

- You need a function declaration
- You want clearer hoisting behavior
- You need your own `this`
- You are working with certain object methods or classes


Use arrow functions when:

- Writing callbacks
- Using map()
- Using filter()
- Using forEach()
- Writing small utility functions
- You want lexical `this`


Example:


users.map((user) => {

    return user.name;

});


This is extremely common in React.


=========================================================
15. IMPORTANT: ARROW FUNCTION AND THIS
=========================================================

Normal functions have their own `this` depending on
how they are called.

Arrow functions do NOT create their own `this`.

Instead, they use `this` from the surrounding scope.


This is called:

LEXICAL THIS


Example:


const user = {

    name: "Navneet",

    greet: function () {

        console.log(this.name);

    }

};


user.greet();


Output:

Navneet


For now, remember:


Arrow functions

↓

Do not have their own `this`.


This becomes very important when learning:

- Objects
- Classes
- React class components
- Event handling


=========================================================
16. DEFAULT PARAMETERS
=========================================================

You can provide default values.


Example:


function greet(name = "Guest") {

    console.log("Hello " + name);

}


greet();


Output:

Hello Guest


Now:


greet("Navneet");


Output:

Hello Navneet


---------------------------------------------------------
REAL USE CASE
---------------------------------------------------------


function createUser(name, role = "user") {

    return {
        name,
        role
    };

}


console.log(createUser("Navneet"));


Output:


{
    name: "Navneet",
    role: "user"
}


=========================================================
17. REST PARAMETERS
=========================================================

Sometimes you don't know how many arguments will
be passed.


Example:


function calculateSum(...numbers) {

    let sum = 0;

    for (const number of numbers) {

        sum += number;

    }

    return sum;

}


console.log(calculateSum(10, 20, 30));


Output:

60


Here:


...numbers


collects all arguments into an array.


Example:


calculateSum(1, 2);

↓

numbers = [1, 2]


calculateSum(1, 2, 3, 4);

↓

numbers = [1, 2, 3, 4]


=========================================================
18. CALLBACK FUNCTIONS
=========================================================

JavaScript functions can be passed as arguments to
other functions.


Example:


function processUser(callback) {

    console.log("Processing user");

    callback();

}


function sendEmail() {

    console.log("Email sent");

}


processUser(sendEmail);


Output:

Processing user
Email sent


sendEmail

is a CALLBACK FUNCTION.


---------------------------------------------------------
IMPORTANT
---------------------------------------------------------

Wrong:


processUser(sendEmail());


Correct:


processUser(sendEmail);


Why?

sendEmail()

↓

Calls the function immediately.


sendEmail

↓

Passes the function itself.


=========================================================
19. REAL INDUSTRY CALLBACK EXAMPLE
=========================================================

Array processing:


const users = [
    "Rahul",
    "Navneet",
    "Aman"
];


users.forEach((user) => {

    console.log(user);

});


The arrow function is a callback.


forEach controls:

WHEN

and

HOW MANY TIMES

the callback is executed.


You will see callbacks constantly in:

- Event handlers
- Array methods
- Timers
- Promises
- API requests


=========================================================
20. HIGHER-ORDER FUNCTIONS
=========================================================

A higher-order function is a function that:

1. Accepts another function as an argument

OR

2. Returns another function


Example:


function calculate(a, b, operation) {

    return operation(a, b);

}


function add(a, b) {

    return a + b;

}


console.log(calculate(10, 20, add));


Output:

30


This concept is heavily used in modern JavaScript.


Examples:

map()

filter()

reduce()

forEach()


These all use callbacks.


=========================================================
21. ANONYMOUS FUNCTIONS
=========================================================

A function without a name.


Example:


setTimeout(function () {

    console.log("Hello");

}, 1000);


This is an anonymous function.


Arrow version:


setTimeout(() => {

    console.log("Hello");

}, 1000);


=========================================================
22. PURE FUNCTIONS
=========================================================

A pure function:

1. Gives the same output for the same input
2. Does not unexpectedly modify outside data


Example:


function add(a, b) {

    return a + b;

}


Same input:


add(10, 20)


Always gives:


30


This is a pure function.


Impure example:


let total = 0;


function addToTotal(value) {

    total += value;

}


This changes an external variable.


Pure functions are easier to:

- Test
- Debug
- Reuse


=========================================================
23. SIDE EFFECTS
=========================================================

A side effect means a function does something outside
of simply calculating and returning a value.


Examples of side effects:

console.log()

Changing a database

Calling an API

Changing the DOM

Modifying a global variable

Writing a file


Example:


function saveUser(user) {

    database.save(user);

}


The database changes.

This is a side effect.


Side effects are NOT bad.

MERN applications need them.

The important thing is to keep business logic clear
and predictable.


=========================================================
24. PASS BY VALUE VS OBJECT REFERENCES
=========================================================

Primitive values behave differently from objects.


Example:


function changeNumber(value) {

    value = 100;

}


let score = 50;

changeNumber(score);

console.log(score);


Output:

50


Because the function receives a copy of the primitive
value.


Now an object:


function changeUser(user) {

    user.name = "Rahul";

}


const user = {

    name: "Navneet"

};


changeUser(user);

console.log(user.name);


Output:

Rahul


Why?

The function receives a value that refers to the same
object.


IMPORTANT:

JavaScript is technically "pass by value".

For objects, the copied value is a reference to the
object.


=========================================================
25. REAL MERN EXAMPLE — CONTROLLER FUNCTION
=========================================================

In Express:


const getUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json({
            success: true,
            data: users
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


This function:

1. Receives request

req


2. Receives response object

res


3. Gets data from MongoDB

await User.find()


4. Returns JSON


This is a controller function.


=========================================================
26. REAL MERN EXAMPLE — UTILITY FUNCTION
=========================================================

Imagine calculating GST.


const calculateGST = (amount, gstRate) => {

    return amount * (gstRate / 100);

};


Now this function can be reused:


const gst1 = calculateGST(1000, 18);

const gst2 = calculateGST(5000, 18);


Instead of writing GST calculation logic everywhere.


This is called:

REUSABLE BUSINESS LOGIC


=========================================================
27. REAL MERN EXAMPLE — VALIDATION FUNCTION
=========================================================

Instead of writing validation everywhere:


const isValidEmail = (email) => {

    return email.includes("@");

};


Usage:


if (!isValidEmail(email)) {

    return res.status(400).json({
        message: "Invalid email"
    });

}


Real applications may use more advanced validation,
but the idea is the same.


=========================================================
28. ASYNC FUNCTIONS
=========================================================

MERN developers MUST understand async functions.


Example:


const getUser = async () => {

    const user = await User.findById("123");

    return user;

};


async means:

This function may perform asynchronous operations.


await means:

Wait for this Promise to settle before continuing
inside the async function.


Common asynchronous operations:

- Database queries
- API calls
- File operations
- Authentication
- External services


Example:


const getProducts = async () => {

    const response = await fetch("/api/products");

    const products = await response.json();

    return products;

};


=========================================================
29. ERROR HANDLING WITH FUNCTIONS
=========================================================

In backend code, async functions can fail.


Example:


const getUser = async (req, res) => {

    try {

        const user = await User.findById(
            req.params.id
        );

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        return res.status(200).json(user);

    } catch (error) {

        return res.status(500).json({
            message: "Server error"
        });

    }

};


Very important pattern:


try {

    // risky code

} catch (error) {

    // handle error

}


=========================================================
30. FUNCTION COMPOSITION
=========================================================

Instead of one huge function:


function processOrder() {

    // Validate user
    // Validate products
    // Calculate price
    // Save order
    // Send email
    // Update inventory

}


Break it into smaller functions.


Example:


function validateOrder(order) {
    // validation
}


function calculateOrderTotal(order) {
    // calculation
}


async function saveOrder(order) {
    // database
}


async function sendConfirmation(order) {
    // email
}


Then:


async function processOrder(order) {

    validateOrder(order);

    const total =
        calculateOrderTotal(order);

    await saveOrder(order);

    await sendConfirmation(order);

}


This is MUCH better.


Why?

Each function has one responsibility.


This makes code:

- Easier to read
- Easier to test
- Easier to debug
- Easier to reuse


=========================================================
31. SINGLE RESPONSIBILITY PRINCIPLE
=========================================================

A good function should ideally have one clear job.


Bad:


function handleEverything() {

    // Validate user
    // Create user
    // Send email
    // Generate invoice
    // Update dashboard
    // Log analytics

}


Better:


validateUser();

createUser();

sendWelcomeEmail();

generateInvoice();


Each function does one job.


This is a very important industry practice.


=========================================================
32. NAMING FUNCTIONS
=========================================================

Use meaningful names.


Bad:


function data() {

}


function x() {

}


Better:


function calculateTotal() {

}


function getUserById() {

}


function sendEmail() {

}


Good function names usually describe an action.


Common naming patterns:


getUser()

createUser()

updateUser()

deleteUser()

calculateTotal()

validateEmail()

sendNotification()


For boolean-checking functions:


isValidUser()

hasPermission()

canEdit()

shouldRetry()


=========================================================
33. AVOID HUGE FUNCTIONS
=========================================================

Bad:


function createOrder() {

    // 500 lines of code

}


If a function becomes too large, ask:


Can I split this into smaller functions?


Example:


function validateOrder() {}

function calculateTotal() {}

function createPayment() {}

function saveOrder() {}

function updateInventory() {}

function sendEmail() {}


Smaller functions are usually easier to maintain.


=========================================================
34. FUNCTIONS IN REACT
=========================================================

React uses functions everywhere.


Example component:


function UserCard() {

    return (
        <div>
            User
        </div>
    );

}


This is a function component.


Event handler:


const handleDelete = () => {

    console.log("User deleted");

};


Usage:


<button onClick={handleDelete}>
    Delete
</button>


Important:


Correct:


onClick={handleDelete}


Wrong:


onClick={handleDelete()}


Why?

handleDelete

↓

Passes the function to React.


handleDelete()

↓

Calls it immediately.


=========================================================
35. FUNCTIONS IN EXPRESS
=========================================================

Express applications are basically full of functions.


Route:


router.get(
    "/users",
    getUsers
);


Controller:


const getUsers = async (req, res) => {

    const users = await User.find();

    res.json(users);

};


Middleware:


const authMiddleware = (
    req,
    res,
    next
) => {

    // Check token

    next();

};


Service function:


const createUserService = async (userData) => {

    // Business logic

};


So in a professional backend:


Route

↓

Middleware Function

↓

Controller Function

↓

Service Function

↓

Database Function


=========================================================
36. REAL MERN REQUEST FLOW
=========================================================

Imagine this API:


POST /api/orders


Flow:


React Frontend

↓

API Request

↓

Express Route

↓

Authentication Middleware

↓

Validation Middleware

↓

Controller Function

↓

Service Function

↓

MongoDB


Example:


router.post(
    "/orders",
    authMiddleware,
    validateOrder,
    createOrder
);


Every major step is handled using functions.


=========================================================
37. CLOSURES
=========================================================

A closure happens when an inner function remembers
variables from its outer function, even after the outer
function has finished.


Example:


function createCounter() {

    let count = 0;

    return function () {

        count++;

        return count;

    };

}


const counter = createCounter();


console.log(counter());

console.log(counter());

console.log(counter());


Output:

1
2
3


Why?

The inner function remembers:


count


This concept is called:

CLOSURE


Closures are used in:

- Data privacy
- Factory functions
- Callbacks
- Event handlers
- React hooks concepts


Closures are a VERY important JavaScript topic.


=========================================================
38. RECURSION
=========================================================

A recursive function calls itself.


Example:


function countDown(number) {

    if (number === 0) {
        return;
    }

    console.log(number);

    countDown(number - 1);

}


countDown(5);


Output:

5
4
3
2
1


Important:

A recursive function needs a:

BASE CASE


Example:


if (number === 0) {
    return;
}


Without a base case:

The function may continue until a stack overflow occurs.


Recursion is useful for:

- Tree structures
- Nested comments
- Nested categories
- File systems
- Algorithms


=========================================================
39. IIFE
=========================================================

IIFE means:


Immediately Invoked Function Expression


Example:


(function () {

    console.log("Runs immediately");

})();


The function:

1. Is created
2. Immediately runs


Modern modules have reduced the need for IIFEs,
but you may still encounter them in older JavaScript
codebases.


=========================================================
40. IMPORTANT FUNCTION CONCEPTS FOR MERN
=========================================================

You should clearly understand all of these:


BEGINNER
---------

1. Function declaration

2. Function call

3. Parameters

4. Arguments

5. return

6. Function scope

7. Global vs local variables


INTERMEDIATE
------------

8. Function expressions

9. Arrow functions

10. Default parameters

11. Rest parameters

12. Callbacks

13. Higher-order functions

14. Anonymous functions

15. Hoisting


ADVANCED
--------

16. Closures

17. Recursion

18. Pure functions

19. Side effects

20. Lexical scope

21. this

22. Arrow function vs normal function

23. Async functions

24. Error handling

25. Promise-based functions


MERN SPECIFIC
-------------

26. Express route handlers

27. Middleware functions

28. Controller functions

29. Service functions

30. Utility/helper functions

31. Async database functions

32. API error handling

33. React event handler functions

34. React function components

35. Callback functions in React


=========================================================
41. INDUSTRY-STYLE EXAMPLE — ORDER CREATION
=========================================================

Imagine an e-commerce backend.


const validateOrder = (order) => {

    if (!order.userId) {
        throw new Error("User is required");
    }

};


const calculateTotal = (items) => {

    let total = 0;

    for (const item of items) {

        total += item.price * item.quantity;

    }

    return total;

};


const createOrder = async (orderData) => {

    validateOrder(orderData);

    const total =
        calculateTotal(orderData.items);

    const order = {

        ...orderData,

        total

    };

    // Save order to database

    return order;

};


Here we have:


validateOrder()

↓

Validation responsibility


calculateTotal()

↓

Calculation responsibility


createOrder()

↓

Order creation responsibility


This is how functions help structure real
industry applications.


=========================================================
42. BEST PRACTICES FOR FUNCTIONS
=========================================================

1. Give functions meaningful names


Good:

calculateTotal()

sendEmail()

getUserById()


Bad:

doStuff()

data()

x()


---------------------------------------------------------


2. Keep functions focused


One function

↓

One main responsibility


---------------------------------------------------------


3. Avoid unnecessary global variables


---------------------------------------------------------


4. Return useful values


Use return when the result needs to be used elsewhere.


---------------------------------------------------------


5. Handle errors in async functions


Use:

try/catch


when appropriate.


---------------------------------------------------------


6. Prefer reusable functions


Don't copy the same logic.


Bad:


const total1 = price1 + tax1;

const total2 = price2 + tax2;


Better:


calculateTotal(price);


---------------------------------------------------------


7. Avoid deeply nested functions when possible


Too much nesting makes code difficult to read.


---------------------------------------------------------


8. Use early returns


Instead of:


if (user) {

    // large code

}


Sometimes:


if (!user) {
    return;
}


// main code


This can make code cleaner.


=========================================================
FINAL FUNCTION CHEAT SHEET
=========================================================


FUNCTION

↓

Reusable block of code


---------------------------------------------------------


PARAMETER

↓

Input variable in function definition


function greet(name)


name = parameter


---------------------------------------------------------


ARGUMENT

↓

Actual value passed to function


greet("Navneet")


"Navneet" = argument


---------------------------------------------------------


RETURN

↓

Sends a value back


---------------------------------------------------------


FUNCTION DECLARATION

function greet() {}


---------------------------------------------------------


FUNCTION EXPRESSION

const greet = function () {};


---------------------------------------------------------


ARROW FUNCTION

const greet = () => {};


---------------------------------------------------------


CALLBACK

A function passed to another function.


---------------------------------------------------------


HIGHER-ORDER FUNCTION

A function that accepts or returns functions.


---------------------------------------------------------


CLOSURE

Inner function remembers outer variables.


---------------------------------------------------------


ASYNC FUNCTION

Used for asynchronous operations.


Database

API

File operations


---------------------------------------------------------


PURE FUNCTION

Same input

↓

Same output

No unexpected external changes.


---------------------------------------------------------


SIDE EFFECT

Function changes or interacts with something outside
itself.

Example:

Database

API

console.log()


=========================================================
WHAT YOU SHOULD MASTER FIRST
=========================================================

Follow this order:

1. Function declaration and calling

2. Parameters and arguments

3. return

4. Scope

5. Function expressions

6. Arrow functions

7. Default parameters

8. Rest parameters

9. Callbacks

10. Higher-order functions

11. Async functions

12. Error handling

13. Closures

14. this and lexical this

15. Recursion


If you become comfortable with these concepts,
you'll have a very strong foundation for using
functions in:

JavaScript

↓

React

↓

Node.js

↓

Express.js

↓

MongoDB-based applications

↓

Full MERN stack development

=========================================================
*/