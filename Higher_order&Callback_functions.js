/*
=========================================================
        HIGHER-ORDER FUNCTIONS & CALLBACKS
      COMPLETE GUIDE FOR MERN STACK DEVELOPERS
=========================================================


=========================================================
1. FIRST UNDERSTAND: FUNCTIONS ARE VALUES
=========================================================

In JavaScript, functions are treated like values.

That means a function can be:

1. Stored in a variable
2. Passed to another function
3. Returned from another function


Example:

const greet = () => {
    console.log("Hello");
};


Here:

greet

is a variable containing a function.


Because functions are values, we can do things like:

const anotherFunction = greet;


Now:

anotherFunction();

Output:

Hello


This idea is the foundation of:

CALLBACK FUNCTIONS

and

HIGHER-ORDER FUNCTIONS


=========================================================
2. WHAT IS A CALLBACK FUNCTION?
=========================================================

A callback is:

A function that is passed as an argument
to another function so that it can be called later.


Example:

const greet = () => {
    console.log("Hello");
};


const processUser = (callback) => {

    console.log("Processing user");

    callback();

};


processUser(greet);


Output:

Processing user
Hello


Here:

greet

↓

Callback function


processUser

↓

Function receiving the callback


=========================================================
3. IMPORTANT: CALLBACK VS FUNCTION CALL
=========================================================

Look carefully:


processUser(greet);


This means:

Pass the greet function.


But:


processUser(greet());


means:

Call greet immediately

↓

take whatever greet returns

↓

pass that result to processUser


This difference is VERY important.


Example:

const greet = () => {

    console.log("Hello");

};


Correct:

processUser(greet);


Usually wrong for callback usage:

processUser(greet());


=========================================================
4. REAL-LIFE ANALOGY
=========================================================

Imagine ordering food.

You tell the restaurant:

"When my food is ready, CALL me."


Your phone number acts like a callback.


Restaurant:

Does work first

↓

Food becomes ready

↓

Calls you


JavaScript works similarly:


function doSomething(callback) {

    // perform work

    callback();

}


The callback tells the function:

"What should happen next?"


=========================================================
5. WHAT IS A HIGHER-ORDER FUNCTION?
=========================================================

A Higher-Order Function (HOF) is a function that:

1. Accepts another function as an argument

OR

2. Returns another function

OR BOTH


Example:

const calculate = (a, b, operation) => {

    return operation(a, b);

};


const add = (a, b) => a + b;


const result = calculate(
    10,
    20,
    add
);


console.log(result);


Output:

30


Here:

calculate

↓

Higher-order function


add

↓

Callback function


=========================================================
6. CALLBACK VS HIGHER-ORDER FUNCTION
=========================================================

Consider:

users.map(user => user.name);


Here:


map()

↓

Higher-order function


user => user.name

↓

Callback function


Simple rule:


FUNCTION RECEIVING ANOTHER FUNCTION

↓

Higher-Order Function


FUNCTION BEING PASSED

↓

Callback Function


=========================================================
7. SIMPLE EXAMPLE
=========================================================

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;


const calculate = (a, b, operation) => {

    return operation(a, b);

};


console.log(
    calculate(10, 5, add)
);


Output:

15


Now:

console.log(
    calculate(10, 5, subtract)
);


Output:

5


Why is this useful?

Because:

calculate()

doesn't care WHICH operation is performed.


The behavior is supplied through a callback.


=========================================================
8. WHY IS THIS USEFUL IN INDUSTRY?
=========================================================

Without callbacks:

You may create separate logic again and again.


With callbacks:

You create reusable behavior.


Example:

processData(data, validateData);

processData(data, saveData);

processData(data, transformData);


Same higher-order function.

Different callbacks.


This gives:

Reusability

Flexibility

Cleaner architecture

Less duplicate code


=========================================================
9. ARRAY METHODS ARE HIGHER-ORDER FUNCTIONS
=========================================================

These important JavaScript methods are higher-order
functions:

map()

filter()

reduce()

forEach()

find()

some()

every()

sort()


Why?

Because they accept callback functions.


Example:

const numbers = [1, 2, 3];


numbers.map(number => number * 2);


Here:

map()

receives:

number => number * 2


That arrow function is the callback.


=========================================================
10. map() + CALLBACK
=========================================================

map() transforms every element and returns a new array.


Example:

const prices = [100, 200, 300];


const updatedPrices = prices.map(
    price => price * 1.18
);


Output:

[
    118,
    236,
    354
]


Here:

map

↓

Higher-order function


price => price * 1.18

↓

Callback


---------------------------------------------------------
REAL MERN USE CASE
---------------------------------------------------------

Backend gives:

const users = [

    {
        id: 1,
        name: "Navneet",
        password: "secret"
    },

    {
        id: 2,
        name: "Rahul",
        password: "secret2"
    }

];


You don't want to send passwords.


const safeUsers = users.map(user => ({

    id: user.id,

    name: user.name

}));


Now:

safeUsers

contains safe data.


=========================================================
11. filter() + CALLBACK
=========================================================

filter() selects elements matching a condition.


Example:

const users = [

    { name: "A", active: true },

    { name: "B", active: false },

    { name: "C", active: true }

];


const activeUsers = users.filter(
    user => user.active
);


Result:

A
C


---------------------------------------------------------
INDUSTRY USE CASE
---------------------------------------------------------

Filter:

Active customers

Available products

Completed orders

Paid invoices

Authorized users


Example:

const availableProducts = products.filter(
    product => product.stock > 0
);


=========================================================
12. reduce() + CALLBACK
=========================================================

reduce() combines many values into one value.


Example:

const numbers = [10, 20, 30];


const total = numbers.reduce(
    (sum, number) => sum + number,
    0
);


Output:

60


Here:

reduce()

↓

Higher-order function


(sum, number) => sum + number

↓

Callback


---------------------------------------------------------
REAL INDUSTRY USE CASE
---------------------------------------------------------

Shopping cart:


const cart = [

    {
        price: 500,
        quantity: 2
    },

    {
        price: 1000,
        quantity: 1
    }

];


const total = cart.reduce(

    (sum, item) =>
        sum + item.price * item.quantity,

    0

);


Output:

2000


Used in:

Cart totals

Invoices

Revenue

Reports

Inventory valuation


=========================================================
13. forEach() + CALLBACK
=========================================================

Example:

const users = [
    "Navneet",
    "Rahul",
    "Aman"
];


users.forEach(user => {

    console.log(user);

});


The callback executes once for every array item.


=========================================================
14. find() + CALLBACK
=========================================================

find() returns the FIRST matching element.


Example:

const users = [

    { id: 1, name: "Navneet" },

    { id: 2, name: "Rahul" }

];


const user = users.find(
    user => user.id === 2
);


Result:

{
    id: 2,
    name: "Rahul"
}


Industry use:

Find selected user

Find product

Find invoice

Find configuration item


=========================================================
15. CALLBACKS IN REACT
=========================================================

React heavily depends on callbacks.


Example:

const handleClick = () => {

    console.log("Button clicked");

};


<button onClick={handleClick}>
    Click
</button>


Here:

handleClick

↓

Callback


React decides WHEN the callback runs.


You provide WHAT should happen.


=========================================================
16. REACT CALLBACK WITH ARGUMENT
=========================================================

Suppose:

const handleDelete = (id) => {

    console.log(id);

};


You cannot simply do:

onClick={handleDelete(id)}


because it runs immediately.


Instead:


<button
    onClick={() => handleDelete(user.id)}
>
    Delete
</button>


Here:

() => handleDelete(user.id)

↓

Callback given to React


React calls it when the click happens.


=========================================================
17. REACT STATE UPDATER CALLBACK
=========================================================

Example:

setCount(prevCount => prevCount + 1);


Here:

prevCount => prevCount + 1

is a callback.


React passes the latest previous state.


This is very important when the new state depends on
the old state.


Bad:

setCount(count + 1);


Better when based on previous state:

setCount(
    prevCount => prevCount + 1
);


=========================================================
18. CALLBACKS IN EXPRESS
=========================================================

Express is heavily based on callback functions.


Example:

app.get(
    "/users",
    (req, res) => {

        res.json({
            message: "Users"
        });

    }
);


The arrow function is a callback.


Express calls it when:

GET /users

request arrives.


=========================================================
19. EXPRESS ROUTE HANDLER
=========================================================

Usually we separate the callback:


const getUsers = async (req, res) => {

    const users = await User.find();

    res.json(users);

};


router.get(
    "/users",
    getUsers
);


Here:

router.get()

↓

Higher-order style API


getUsers

↓

Callback / route handler


Express controls WHEN getUsers runs.


=========================================================
20. EXPRESS MIDDLEWARE
=========================================================

Middleware is also callback-driven.


Example:

const authenticate = (
    req,
    res,
    next
) => {

    console.log("Checking authentication");

    next();

};


router.get(
    "/profile",
    authenticate,
    getProfile
);


Flow:


Request

↓

authenticate()

↓

next()

↓

getProfile()


Each function is passed to Express.


=========================================================
21. `next` IS ALSO A CALLBACK-LIKE FUNCTION
=========================================================

Inside Express middleware:

next();


means:

"Continue to the next middleware/handler."


Example:

const middleware = (
    req,
    res,
    next
) => {

    console.log("Middleware");

    next();

};


Without:

next()


the request may stop there unless you send a response.


=========================================================
22. CALLBACKS WITH setTimeout()
=========================================================

Example:

setTimeout(() => {

    console.log("Runs later");

}, 1000);


setTimeout

↓

Higher-order function/API


() => {...}

↓

Callback


The callback runs after the timer delay.


=========================================================
23. ASYNCHRONOUS CALLBACKS
=========================================================

Some callbacks execute later.


Example:

console.log("Start");


setTimeout(() => {

    console.log("Timer");

}, 0);


console.log("End");


Output:

Start
End
Timer


Even though delay is:

0


the callback doesn't execute immediately.


Why?

Because asynchronous callbacks are handled later
through JavaScript's event loop.


=========================================================
24. SYNCHRONOUS VS ASYNCHRONOUS CALLBACKS
=========================================================

Synchronous callback:

Runs immediately during the current operation.


Example:

[1, 2, 3].map(
    number => number * 2
);


The callback runs synchronously.


---------------------------------------------------------

Asynchronous callback:

Runs later.


Example:

setTimeout(() => {

    console.log("Hello");

}, 1000);


Other examples:

Network operations

Timers

Certain I/O operations


=========================================================
25. OLD CALLBACK-STYLE NODE.JS
=========================================================

Node.js traditionally used error-first callbacks.


Example:

fs.readFile(
    "file.txt",
    "utf8",
    (error, data) => {

        if (error) {
            console.log(error);
            return;
        }

        console.log(data);

    }
);


Callback receives:

error

first

and then:

data


This is called:

ERROR-FIRST CALLBACK PATTERN


Common old Node pattern:

(error, result) => {}


=========================================================
26. CALLBACK HELL
=========================================================

Callbacks can become difficult when heavily nested.


Example:

loginUser(user, () => {

    getProfile(() => {

        getOrders(() => {

            sendEmail(() => {

                console.log("Done");

            });

        });

    });

});


This is called:

CALLBACK HELL


Problems:

Difficult to read

Difficult to debug

Difficult error handling

Heavy nesting


=========================================================
27. SOLUTION TO CALLBACK HELL
=========================================================

Modern JavaScript uses:

Promises

and

async/await


Instead of:

doA(() => {

    doB(() => {

        doC(() => {

        });

    });

});


We can write:

await doA();

await doB();

await doC();


Much cleaner.


IMPORTANT:

Callbacks are NOT obsolete.

Callbacks are still everywhere.

But async workflows are often easier using:

Promises

async/await


=========================================================
28. PROMISE CALLBACKS
=========================================================

Promises also use callbacks.


Example:

fetch("/api/users")

    .then(response => response.json())

    .then(data => {

        console.log(data);

    })

    .catch(error => {

        console.log(error);

    });


Callbacks:

response => response.json()

data => ...

error => ...


=========================================================
29. HIGHER-ORDER FUNCTION THAT RETURNS A FUNCTION
=========================================================

Higher-order functions can also RETURN functions.


Example:

const multiplyBy = (multiplier) => {

    return (number) => {

        return number * multiplier;

    };

};


const double = multiplyBy(2);


console.log(
    double(10)
);


Output:

20


Working:

multiplyBy(2)

↓

returns a function


double = number => number * 2


Then:

double(10)

↓

20


=========================================================
30. REAL INDUSTRY USE — FUNCTION FACTORY
=========================================================

Suppose you need permission checkers.


const hasRole = (requiredRole) => {

    return (user) => {

        return user.role === requiredRole;

    };

};


Create:

const isAdmin = hasRole("admin");

const isManager = hasRole("manager");


Now:

isAdmin({
    role: "admin"
});


↓

true


This is called a:

FUNCTION FACTORY


A higher-order function creates specialized functions.


=========================================================
31. REAL EXPRESS MIDDLEWARE FACTORY
=========================================================

Very useful industry pattern:


const authorize = (...roles) => {

    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {

            return res.status(403).json({
                message: "Access denied"
            });

        }

        next();

    };

};


Usage:

router.delete(

    "/users/:id",

    authenticate,

    authorize("admin"),

    deleteUser

);


What's happening?


authorize("admin")

↓

returns middleware function


That returned function receives:

req
res
next


This is a REAL higher-order function use case.


=========================================================
32. REACT HOF-LIKE PATTERN
=========================================================

Suppose:

const createClickHandler = (id) => {

    return () => {

        console.log("Clicked:", id);

    };

};


Then:

<button
    onClick={createClickHandler(user.id)}
>
    Open
</button>


createClickHandler(user.id)

↓

Returns another function


That returned function becomes the click callback.


=========================================================
33. CUSTOM HIGHER-ORDER FUNCTION
=========================================================

Let's create a reusable logger.


const withLogging = (fn) => {

    return (...args) => {

        console.log("Function started");

        const result = fn(...args);

        console.log("Function finished");

        return result;

    };

};


Original function:

const add = (a, b) => a + b;


Wrapped function:

const loggedAdd = withLogging(add);


console.log(
    loggedAdd(10, 20)
);


Output:

Function started
Function finished
30


This is a powerful pattern.


=========================================================
34. REAL INDUSTRY CONCEPT — WRAPPING BEHAVIOR
=========================================================

Higher-order functions can add behavior around
another function.


Examples:

Logging

Authentication

Authorization

Caching

Retry logic

Performance measurement

Validation

Error handling


Conceptually:

Original Function

↓

Higher-Order Wrapper

↓

Enhanced Function


=========================================================
35. FUNCTION COMPOSITION
=========================================================

Higher-order functions also enable composition.


Example:

const double = x => x * 2;

const addTen = x => x + 10;


const compose = (f, g) => {

    return value => f(g(value));

};


const result =
    compose(addTen, double);


console.log(
    result(5)
);


Working:

double(5)

↓

10


addTen(10)

↓

20


Output:

20


=========================================================
36. WHAT DOES map() ACTUALLY DO?
=========================================================

Conceptually, map behaves something like:


const customMap = (
    array,
    callback
) => {

    const result = [];


    for (const item of array) {

        const newValue =
            callback(item);

        result.push(newValue);

    }


    return result;

};


Usage:

const numbers = [1, 2, 3];


const doubled = customMap(
    numbers,
    number => number * 2
);


Result:

[2, 4, 6]


This shows EXACTLY why:

customMap

is a HOF

and:

number => number * 2

is a callback.


=========================================================
37. CALLBACK PARAMETERS
=========================================================

Array callbacks can receive more than one argument.


Example:

const technologies = [
    "React",
    "Node",
    "MongoDB"
];


technologies.forEach(
    (technology, index) => {

        console.log(
            index,
            technology
        );

    }
);


Output:

0 React
1 Node
2 MongoDB


For many array methods, callbacks receive:

value
index
array


Example:

array.map(
    (value, index, array) => {

    }
);


=========================================================
38. RETURN MATTERS IN CALLBACKS
=========================================================

Example:

const numbers = [1, 2, 3];


Wrong:

const doubled = numbers.map(
    number => {

        number * 2;

    }
);


Result:

[
    undefined,
    undefined,
    undefined
]


Because:

No return.


Correct:

const doubled = numbers.map(
    number => {

        return number * 2;

    }
);


OR:

const doubled = numbers.map(
    number => number * 2
);


=========================================================
39. filter CALLBACK MUST RETURN TRUTHY/FALSY
=========================================================

Example:

const numbers = [
    10,
    15,
    20
];


const result = numbers.filter(
    number => number >= 15
);


Callback produces:

10 >= 15 → false

15 >= 15 → true

20 >= 15 → true


Result:

[
    15,
    20
]


=========================================================
40. DIFFERENCE BETWEEN map() AND forEach()
=========================================================

map():

Transforms items

AND

returns a new array.


forEach():

Runs an action for every item

but does NOT build and return a transformed array.


Example:

const numbers = [1, 2, 3];


const result = numbers.map(
    number => number * 2
);


result:

[2, 4, 6]


But:

const result2 = numbers.forEach(
    number => number * 2
);


result2:

undefined


Very important for React.


=========================================================
41. REACT: WHY map() INSTEAD OF forEach()?
=========================================================

React commonly needs:

An array of JSX elements.


Example:

const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];


return (

    <div>

        {users.map(user => (

            <p key={user.id}>
                {user.name}
            </p>

        ))}

    </div>

);


map returns:

An array of JSX elements.


forEach doesn't.


=========================================================
42. NAMED CALLBACK VS INLINE CALLBACK
=========================================================

Inline:

users.filter(
    user => user.active
);


Named:

const isActiveUser = (user) => {

    return user.active;

};


users.filter(isActiveUser);


Which is better?


For small/simple logic:

Inline callback is usually fine.


For repeated or complex logic:

Named callback can improve:

Readability

Reuse

Testing


=========================================================
43. INDUSTRY BEST PRACTICE — DON'T MAKE CALLBACKS HUGE
=========================================================

Hard to read:

users.map(user => {

    // 100 lines of logic

});


Better:

const transformUser = (user) => {

    // transformation logic

};


const result =
    users.map(transformUser);


Cleaner and easier to test.


=========================================================
44. CALLBACK ERRORS
=========================================================

A callback can throw an error.


Example:

const processUser = (callback) => {

    try {

        callback();

    } catch (error) {

        console.log(
            "Callback failed"
        );

    }

};


In real applications, error strategy depends on
whether the callback is synchronous or asynchronous.


=========================================================
45. IMPORTANT ASYNC CALLBACK TRAP
=========================================================

This looks reasonable:

users.forEach(async user => {

    await saveUser(user);

});


But:

forEach does NOT wait for all async callbacks
in the way beginners often expect.


If you need sequential waiting:

for (const user of users) {

    await saveUser(user);

}


If operations can run in parallel:

await Promise.all(

    users.map(
        user => saveUser(user)
    )

);


THIS IS VERY IMPORTANT FOR NODE.JS DEVELOPERS.


=========================================================
46. PARALLEL ASYNC PROCESSING
=========================================================

Example:

const ids = [1, 2, 3];


const users = await Promise.all(

    ids.map(
        id => getUserById(id)
    )

);


Here:

map()

↓

Creates array of Promises


Promise.all()

↓

Waits for all Promises


This is very common in backend development.


=========================================================
47. CALLBACKS AND CLOSURES
=========================================================

Callbacks often use variables from outer scopes.


Example:

const createDiscount =
    (discountPercentage) => {

        return (price) => {

            return price -
                price * discountPercentage / 100;

        };

    };


const premiumDiscount =
    createDiscount(20);


premiumDiscount(1000);


↓

800


The returned callback remembers:

discountPercentage


This involves:

Higher-order function

+

Callback

+

Closure


=========================================================
48. MOST IMPORTANT INTERVIEW DEFINITIONS
=========================================================

CALLBACK FUNCTION:

A function passed as an argument to another function
so it can be executed by that function.


HIGHER-ORDER FUNCTION:

A function that accepts another function as an
argument and/or returns another function.


Example:

numbers.map(
    number => number * 2
);


map

↓

Higher-order function


number => number * 2

↓

Callback


=========================================================
49. COMMON MERN EXAMPLES
=========================================================

REACT:

onClick={handleClick}

↓

Callback


---------------------------------------------------------

React state:

setCount(
    previous => previous + 1
)

↓

Callback


---------------------------------------------------------

Array:

users.map(
    user => user.name
)

↓

HOF + callback


---------------------------------------------------------

Express:

router.get(
    "/users",
    getUsers
)

↓

getUsers is callback/handler


---------------------------------------------------------

Middleware:

router.get(
    "/profile",
    auth,
    getProfile
)


↓

Functions passed to Express


---------------------------------------------------------

Timers:

setTimeout(
    () => {...},
    1000
)


↓

Callback


---------------------------------------------------------

Promises:

promise.then(
    data => {...}
)


↓

Callback


=========================================================
50. CALLBACKS VS PROMISES VS ASYNC/AWAIT
=========================================================

Callbacks are the general idea:

"Give this function another function to execute."


Promises provide a structured way to represent
future async results.


async/await provides cleaner syntax for working
with Promises.


Evolution:


Callbacks

↓

Promises

↓

async/await


But modern JavaScript still uses callbacks everywhere.


Example:

await Promise.all(
    users.map(user => saveUser(user))
);


This one line uses:

async/await

Promise

Higher-order function

Callback


=========================================================
51. WHAT EVERY MERN DEVELOPER SHOULD KNOW
=========================================================

BASIC
---------------------------------------------------------

1. Functions can be values

2. Passing functions as arguments

3. Callback definition

4. Higher-order function definition

5. Function reference vs function call

Example:

handleClick

vs

handleClick()


---------------------------------------------------------
ARRAYS
---------------------------------------------------------

6. map()

7. filter()

8. reduce()

9. forEach()

10. find()

11. some()

12. every()


---------------------------------------------------------
REACT
---------------------------------------------------------

13. Event callbacks

14. Callback with arguments

15. State updater callbacks

16. map() for rendering lists


---------------------------------------------------------
NODE / EXPRESS
---------------------------------------------------------

17. Route handlers

18. Middleware functions

19. next()

20. Async handlers


---------------------------------------------------------
ASYNC
---------------------------------------------------------

21. setTimeout callbacks

22. Promise callbacks

23. async callbacks

24. Callback hell

25. async/await

26. Promise.all()


---------------------------------------------------------
ADVANCED
---------------------------------------------------------

27. Function factories

28. Functions returning functions

29. Closures

30. Middleware factories

31. Function composition

32. Wrapper functions


=========================================================
52. FINAL MENTAL MODEL
=========================================================

Imagine:

const process = (
    data,
    callback
) => {

    return callback(data);

};


Here:


process

↓

Higher-order function


callback

↓

Function parameter


Actual passed function

↓

Callback function


Example:

const upperCase =
    text => text.toUpperCase();


process(
    "hello",
    upperCase
);


↓

HELLO


=========================================================
53. ONE-LINE MEMORY TRICK
=========================================================

CALLBACK

↓

"I am a function being passed."


HIGHER-ORDER FUNCTION

↓

"I am a function receiving or returning functions."


Example:

array.map(callback)


map

↓

Higher-order Function


callback

↓

Callback Function


=========================================================
54. MERN INDUSTRY FLOW
=========================================================

React Button

↓

Event Callback

↓

API Function

↓

Express Route Callback

↓

Middleware Callback

↓

Controller Function

↓

Service Function

↓

MongoDB

↓

Response

↓

Promise / async handling

↓

React State Update Callback


Functions and callbacks are literally running through
the entire MERN request-response lifecycle.

=========================================================
*/



/*

╔══════════════════════════════════════════════════════════════╗
║      CALLBACK FUNCTIONS + HIGHER-ORDER FUNCTIONS            ║
║              COMPLETE QUESTION SET WITH ANSWERS            ║
╚══════════════════════════════════════════════════════════════╝


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 1 — CALLBACK FUNCTION BASICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q1. What is a callback function?

ANSWER:

A callback function is a function that is passed as an argument
to another function and is executed by that function.

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

greet → Callback function
processUser → Function receiving the callback


------------------------------------------------------------

Q2. Why do we pass a function without ()?

Example:

processUser(greet);

Why not:

processUser(greet());

ANSWER:

greet
means → pass the function itself.

greet()
means → execute the function immediately.

Example:

function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(greet);

Output:

Hello

If we write:

execute(greet());

then greet() executes immediately.

So:

greet   → function reference
greet() → function execution


------------------------------------------------------------

Q3. What will be the output?

function test(callback) {
    console.log("A");
    callback();
    console.log("B");
}

function hello() {
    console.log("Hello");
}

test(hello);

ANSWER:

A
Hello
B

Execution:

test(hello)

        ↓

console.log("A")

        ↓

callback()

        ↓

hello()

        ↓

console.log("Hello")

        ↓

console.log("B")


------------------------------------------------------------

Q4. Can we pass an anonymous function as a callback?

ANSWER:

YES.

Example:

function process(callback) {
    callback();
}

process(function () {
    console.log("Processing...");
});

Output:

Processing...


------------------------------------------------------------

Q5. Can we use arrow functions as callbacks?

ANSWER:

YES.

Example:

function process(callback) {
    callback();
}

process(() => {
    console.log("Processing...");
});

Output:

Processing...

This is extremely common in modern JavaScript.


------------------------------------------------------------

Q6. Can a callback receive arguments?

ANSWER:

YES.

Example:

function processUser(callback) {
    callback("Navneet", 20);
}

function displayUser(name, age) {
    console.log(name);
    console.log(age);
}

processUser(displayUser);

Output:

Navneet
20


------------------------------------------------------------

Q7. What is the output?

function calculate(a, b, callback) {
    const result = a + b;
    callback(result);
}

function display(value) {
    console.log(value);
}

calculate(10, 20, display);

ANSWER:

30


------------------------------------------------------------

Q8. Write a function that accepts a number and a callback.

The callback should double the number.

ANSWER:

function processNumber(num, callback) {
    callback(num);
}

function double(num) {
    console.log(num * 2);
}

processNumber(10, double);

Output:

20


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 2 — HIGHER-ORDER FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q9. What is a Higher-Order Function?

ANSWER:

A Higher-Order Function (HOF) is a function that:

1. Accepts another function as an argument
OR
2. Returns another function
OR
3. Does both.

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

calculate() is a Higher-Order Function.


------------------------------------------------------------

Q10. What is the difference between a callback and HOF?

ANSWER:

Callback:

A function passed to another function.

Higher-Order Function:

A function that accepts or returns another function.

Example:

function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

Here:

greet   → Callback
execute → Higher-Order Function


------------------------------------------------------------

Q11. Is every callback a Higher-Order Function?

ANSWER:

NO.

Example:

function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

greet is being used as a callback.

execute is the Higher-Order Function.


------------------------------------------------------------

Q12. Can a Higher-Order Function return another function?

ANSWER:

YES.

Example:

function createGreeting() {

    return function () {
        console.log("Hello");
    };

}

const greet = createGreeting();

greet();

Output:

Hello


------------------------------------------------------------

Q13. What is a function factory?

ANSWER:

A function that creates and returns another function.

Example:

function createMultiplier(multiplier) {

    return function (number) {
        return number * multiplier;
    };

}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(10));
console.log(triple(10));

Output:

20
30

This concept is heavily connected with:

HOF + Closures


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 3 — FUNCTIONS AS FIRST-CLASS CITIZENS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q14. Why are functions called first-class citizens in JavaScript?

ANSWER:

Because functions can be:

1. Stored in variables
2. Passed as arguments
3. Returned from functions
4. Stored inside arrays
5. Stored inside objects

Example:

const greet = function () {
    console.log("Hello");
};

Function stored in variable.


Example:

function execute(callback) {
    callback();
}

execute(greet);

Function passed as argument.


Example:

function createFunction() {
    return greet;
}

Function returned from another function.


------------------------------------------------------------

Q15. What will be the output?

const functions = [

    function () {
        console.log("A");
    },

    function () {
        console.log("B");
    }

];

functions[0]();
functions[1]();

ANSWER:

A
B


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 4 — ARRAY HIGHER-ORDER FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q16. Why are map(), filter(), reduce() called Higher-Order Functions?

ANSWER:

Because they accept a callback function.

Example:

numbers.map(function (num) {
    return num * 2;
});

map() receives a function.

Therefore:

map → HOF
callback → function passed to map


------------------------------------------------------------

Q17. What does map() do?

ANSWER:

map() creates a NEW array by transforming every element.

Example:

const numbers = [1, 2, 3, 4];

const result = numbers.map(num => num * 2);

console.log(result);

Output:

[2, 4, 6, 8]


------------------------------------------------------------

Q18. What is the callback inside map()?

Example:

const result = numbers.map(num => num * 2);

ANSWER:

This is the callback:

num => num * 2

map() calls this callback for every element.


------------------------------------------------------------

Q19. What happens if we forget return inside map()?

Example:

const numbers = [1, 2, 3];

const result = numbers.map(num => {
    num * 2;
});

console.log(result);

ANSWER:

[undefined, undefined, undefined]

Because the callback doesn't return anything.

Correct:

const result = numbers.map(num => {
    return num * 2;
});

Output:

[2, 4, 6]


------------------------------------------------------------

Q20. What parameters can map() callback receive?

ANSWER:

The callback can receive:

1. currentElement
2. index
3. entireArray

Example:

const numbers = [10, 20, 30];

numbers.map((value, index, array) => {

    console.log(value);
    console.log(index);
    console.log(array);

});


------------------------------------------------------------

Q21. What does filter() do?

ANSWER:

filter() creates a NEW array containing elements for which
the callback returns true.

Example:

const numbers = [10, 15, 20, 25];

const result = numbers.filter(num => num > 15);

console.log(result);

Output:

[20, 25]


------------------------------------------------------------

Q22. What does the callback of filter() return?

ANSWER:

It should return:

true  → keep element
false → remove element

Example:

numbers.filter(num => num % 2 === 0);


------------------------------------------------------------

Q23. What does reduce() do?

ANSWER:

reduce() processes all elements and produces a single result.

Example:

const numbers = [10, 20, 30];

const total = numbers.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);

Output:

60


------------------------------------------------------------

Q24. What is accumulator in reduce()?

ANSWER:

The accumulator stores the result built so far.

Example:

const numbers = [10, 20, 30];

numbers.reduce((sum, num) => {

    return sum + num;

}, 0);

Here:

sum → accumulator
num → current value
0   → initial value


------------------------------------------------------------

Q25. What does forEach() do?

ANSWER:

forEach() executes a callback for every element.

Example:

const users = ["A", "B", "C"];

users.forEach(user => {
    console.log(user);
});

Output:

A
B
C

Important:

forEach() does NOT create a new array.


------------------------------------------------------------

Q26. Difference between map() and forEach()?

ANSWER:

map():

Used when you want a transformed NEW array.

const result = numbers.map(num => num * 2);


forEach():

Used when you simply want to perform an action.

numbers.forEach(num => {
    console.log(num);
});


Simple rule:

Transformation → map()
Action/side effect → forEach()


------------------------------------------------------------

Q27. What does find() do?

ANSWER:

find() returns the FIRST element satisfying the condition.

Example:

const users = [

    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" }

];

const user = users.find(user => user.id === 2);

console.log(user);

Output:

{ id: 2, name: "B" }


------------------------------------------------------------

Q28. Difference between find() and filter()?

ANSWER:

find():

Returns ONE matching element.

filter():

Returns ALL matching elements.

Example:

users.find(user => user.age > 18);

→ first matching user


users.filter(user => user.age > 18);

→ all matching users


------------------------------------------------------------

Q29. What does some() do?

ANSWER:

Checks whether AT LEAST ONE element satisfies the condition.

Example:

const numbers = [1, 3, 5, 8];

const result = numbers.some(num => num % 2 === 0);

console.log(result);

Output:

true


------------------------------------------------------------

Q30. What does every() do?

ANSWER:

Checks whether ALL elements satisfy the condition.

const numbers = [2, 4, 6, 8];

const result = numbers.every(num => num % 2 === 0);

console.log(result);

Output:

true


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 5 — CALLBACK + CLOSURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q31. What is a closure?

ANSWER:

A closure happens when an inner function remembers variables
from its outer function even after the outer function has
finished executing.

Example:

function createCounter() {

    let count = 0;

    return function () {
        count++;
        console.log(count);
    };

}

const counter = createCounter();

counter();
counter();
counter();

Output:

1
2
3


------------------------------------------------------------

Q32. How are HOFs and closures related?

ANSWER:

A Higher-Order Function can return another function.

That returned function can remember variables from the
outer function using closure.

Example:

function createDiscount(discount) {

    return function (price) {
        return price - (price * discount / 100);
    };

}

const tenPercentOff = createDiscount(10);

console.log(tenPercentOff(1000));

Output:

900


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 6 — SYNCHRONOUS CALLBACKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q33. What is a synchronous callback?

ANSWER:

A callback that executes immediately during the current
execution flow.

Example:

function process(callback) {

    console.log("Start");

    callback();

    console.log("End");
}

process(() => {
    console.log("Callback");
});

Output:

Start
Callback
End


------------------------------------------------------------

Q34. What is an asynchronous callback?

ANSWER:

A callback that executes later after an asynchronous operation
finishes.

Example:

console.log("Start");

setTimeout(() => {
    console.log("Callback");
}, 2000);

console.log("End");

Output:

Start
End
Callback

The callback runs later.


------------------------------------------------------------

Q35. Is setTimeout() a Higher-Order Function?

ANSWER:

Yes.

Because it accepts a function as an argument.

setTimeout(() => {
    console.log("Hello");
}, 1000);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 7 — CALLBACK HELL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q36. What is Callback Hell?

ANSWER:

When callbacks are deeply nested inside other callbacks,
making code difficult to read and maintain.

Example:

getUser(userId, (user) => {

    getOrders(user.id, (orders) => {

        getPayment(orders[0], (payment) => {

            sendEmail(payment, () => {

                console.log("Done");

            });

        });

    });

});


This creates a pyramid-like structure.

This is called:

Callback Hell / Pyramid of Doom


------------------------------------------------------------

Q37. How do Promises solve callback hell?

ANSWER:

Promises flatten the nested structure.

Instead of:

getUser(id, callback)


We can write:

getUser(id)
    .then(user => getOrders(user))
    .then(orders => getPayment(orders))
    .then(payment => sendEmail(payment))
    .catch(error => console.log(error));


Even cleaner:

async function process() {

    try {

        const user = await getUser(id);
        const orders = await getOrders(user);
        const payment = await getPayment(orders);

        await sendEmail(payment);

    } catch (error) {

        console.log(error);

    }
}


Modern MERN applications commonly use:

Promises
+
async/await

instead of deeply nested callbacks.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 8 — IMPORTANT ASYNC CALLBACK TRAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q38. Why is forEach(async () => {}) often problematic?

Example:

users.forEach(async user => {

    await saveUser(user);

});

console.log("Done");

ANSWER:

forEach() does not wait for async callbacks.

So "Done" can execute before all saveUser()
operations finish.

Better:

for (const user of users) {

    await saveUser(user);

}


Or, if operations can run in parallel:

await Promise.all(
    users.map(user => saveUser(user))
);


Important:

Sequential:

for...of + await


Parallel:

Promise.all + map


------------------------------------------------------------

Q39. Which is better for parallel async operations?

ANSWER:

Promise.all() + map()

Example:

const results = await Promise.all(

    users.map(user => fetchUserData(user.id))

);

This starts the operations concurrently and waits for all.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 9 — MERN INDUSTRY QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q40. Give a React example of a callback function.

ANSWER:

function App() {

    function handleClick() {
        console.log("Button clicked");
    }

    return (
        <button onClick={handleClick}>
            Click
        </button>
    );
}

Here:

handleClick

is passed as a callback to React.

React calls it when the button is clicked.


------------------------------------------------------------

Q41. Why do we write onClick={handleClick}
instead of onClick={handleClick()}?

ANSWER:

Correct:

onClick={handleClick}

This passes the function.

Incorrect:

onClick={handleClick()}

This executes the function during rendering.

So:

handleClick   → pass function
handleClick() → execute function


------------------------------------------------------------

Q42. Give a React callback example with an argument.

ANSWER:

<button onClick={() => handleDelete(user.id)}>
    Delete
</button>

Here:

() => handleDelete(user.id)

is the callback.

We use an arrow function because we want to pass
user.id when the event occurs.


------------------------------------------------------------

Q43. Is React's map() usage an example of a Higher-Order Function?

ANSWER:

YES.

Example:

const users = ["A", "B", "C"];

const elements = users.map(user => (
    <li>{user}</li>
));

map() receives a callback.

Therefore:

map → HOF
user => (...) → callback


------------------------------------------------------------

Q44. How are callbacks used in Express.js?

ANSWER:

Express route handlers are functions passed to Express.

Example:

app.get("/users", (req, res) => {

    res.json({
        message: "Users fetched"
    });

});


The function:

(req, res) => { ... }

is passed to app.get().

Express later calls it when the request arrives.


------------------------------------------------------------

Q45. Is Express middleware related to callbacks?

ANSWER:

YES.

Example:

app.get(
    "/users",
    authMiddleware,
    getUsers
);

Here:

authMiddleware
getUsers

are functions passed to Express.

Express controls when they are executed.


------------------------------------------------------------

Q46. What is next() in Express?

ANSWER:

next() is a callback function provided by Express middleware.

Example:

function authMiddleware(req, res, next) {

    console.log("Checking authentication");

    next();
}

next() tells Express:

"Move to the next middleware/handler."


------------------------------------------------------------

Q47. Create an authorization middleware using HOF.

ANSWER:

function authorize(role) {

    return function (req, res, next) {

        if (req.user.role !== role) {

            return res.status(403).json({
                message: "Access denied"
            });

        }

        next();
    };
}

app.get(
    "/admin",
    authorize("admin"),
    (req, res) => {
        res.json({
            message: "Welcome Admin"
        });
    }
);


Here:

authorize()
→ Higher-Order Function

Returned function
→ Middleware

This is a VERY useful real-world pattern.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 10 — REAL MERN DATA PROCESSING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q48. You receive users from MongoDB.

Return only users whose age is greater than 18.

ANSWER:

const adults = users.filter(user => user.age > 18);


------------------------------------------------------------

Q49. You receive users from MongoDB.

Return only their names.

ANSWER:

const names = users.map(user => user.name);


------------------------------------------------------------

Q50. Calculate total order amount.

ANSWER:

const total = orders.reduce(
    (sum, order) => sum + order.amount,
    0
);


------------------------------------------------------------

Q51. Find a specific user by ID.

ANSWER:

const user = users.find(
    user => user._id === userId
);


------------------------------------------------------------

Q52. Check whether any user is admin.

ANSWER:

const hasAdmin = users.some(
    user => user.role === "admin"
);


------------------------------------------------------------

Q53. Check whether all products are in stock.

ANSWER:

const allInStock = products.every(
    product => product.stock > 0
);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 11 — HOF CREATION QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q54. Create a Higher-Order Function that performs an operation
on two numbers.

ANSWER:

function calculate(a, b, operation) {

    return operation(a, b);

}

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, multiply));

Output:

30
200


------------------------------------------------------------

Q55. Create a HOF that logs before and after a function executes.

ANSWER:

function logger(fn) {

    return function () {

        console.log("Before");

        fn();

        console.log("After");

    };
}

function hello() {
    console.log("Hello");
}

const wrappedFunction = logger(hello);

wrappedFunction();

Output:

Before
Hello
After

This is called a wrapper/decorator-style pattern.


------------------------------------------------------------

Q56. Why is the logger() example useful in backend development?

ANSWER:

It can be used for:

- Logging
- Authentication
- Authorization
- Performance measurement
- Error handling
- Request tracking
- Permission checking

Example concept:

request
   ↓
logging middleware
   ↓
authentication
   ↓
authorization
   ↓
controller
   ↓
database


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 12 — ADVANCED OUTPUT QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q57. What is the output?

function outer(callback) {

    console.log("Outer");

    callback();

}

outer(() => {

    console.log("Inner");

});


ANSWER:

Outer
Inner


------------------------------------------------------------

Q58. What is the output?

function execute(callback) {

    console.log("A");

    callback();

    console.log("B");

}

execute(() => {

    console.log("C");

});

ANSWER:

A
C
B


------------------------------------------------------------

Q59. What is the output?

const numbers = [1, 2, 3];

const result = numbers.map(num => {

    return num * 2;

});

console.log(result);

ANSWER:

[2, 4, 6]


------------------------------------------------------------

Q60. What is the output?

const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 10);

console.log(result);

ANSWER:

[20, 40]

Execution:

[1,2,3,4,5]

        ↓ filter

[2,4]

        ↓ map

[20,40]


------------------------------------------------------------

Q61. What is the output?

const numbers = [1, 2, 3];

const result = numbers.reduce(
    (sum, num) => sum + num,
    0
);

console.log(result);

ANSWER:

6


------------------------------------------------------------

Q62. What is the output?

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

ANSWER:

1
2
3

Reason:

The returned function remembers count
because of closure.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 13 — INTERVIEW CONCEPTUAL QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q63. What is the difference between callback and Promise?

ANSWER:

Callback:

Function passed to another function.

Promise:

An object representing the eventual completion/failure
of an asynchronous operation.

Old style:

getUser(id, callback);


Modern style:

getUser(id)
    .then(user => ...)
    .catch(error => ...);


Even more common:

const user = await getUser(id);


------------------------------------------------------------

Q64. Are callbacks only used for asynchronous operations?

ANSWER:

NO.

Callbacks can be:

Synchronous:

[1,2,3].map(num => num * 2);


Asynchronous:

setTimeout(() => {
    console.log("Hello");
}, 1000);


So:

Callback ≠ necessarily asynchronous.


------------------------------------------------------------

Q65. What is callback hell?

ANSWER:

Deeply nested callbacks that make code difficult
to read and maintain.

Main solutions:

Promises
async/await
modular functions


------------------------------------------------------------

Q66. What is a callback function vs callback pattern?

ANSWER:

Callback function:

The actual function being passed.

Callback pattern:

The design pattern where one function gives control
to another function by passing a callback.


------------------------------------------------------------

Q67. What is a Higher-Order Function vs Higher-Order Component?

ANSWER:

HOF:

JavaScript concept.

function withLogging(fn) {
    return function () {
        console.log("Logging");
        return fn();
    };
}


HOC:

React pattern where a component is wrapped by a function
to add behavior.

const EnhancedComponent = withAuth(Component);


Both are related to the concept of functions
receiving/returning functions.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 14 — IMPORTANT TRAPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q68. What is wrong here?

setTimeout(console.log("Hello"), 1000);

ANSWER:

console.log("Hello") executes immediately.

Correct:

setTimeout(() => {
    console.log("Hello");
}, 1000);

Reason:

setTimeout needs a function reference.

Wrong:

console.log("Hello")

Correct:

() => console.log("Hello")


------------------------------------------------------------

Q69. What is wrong here?

button.addEventListener(
    "click",
    handleClick()
);

ANSWER:

handleClick() executes immediately.

Correct:

button.addEventListener(
    "click",
    handleClick
);

Because addEventListener expects a function.


------------------------------------------------------------

Q70. What is wrong here?

const result = numbers.map(num => {
    num * 2;
});

ANSWER:

Missing return.

Correct:

const result = numbers.map(num => {
    return num * 2;
});


OR:

const result = numbers.map(num => num * 2);


------------------------------------------------------------

Q71. What is the problem here?

const result = numbers.forEach(num => num * 2);

console.log(result);

ANSWER:

forEach() doesn't return the transformed array.

result will be:

undefined

Use:

const result = numbers.map(num => num * 2);


------------------------------------------------------------

Q72. What is the problem here?

users.forEach(async user => {
    await saveUser(user);
});

ANSWER:

forEach does not wait for async callbacks.

Better:

for (const user of users) {
    await saveUser(user);
}

OR:

await Promise.all(
    users.map(user => saveUser(user))
);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 15 — ADVANCED MERN INTERVIEW QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q73. Why are callbacks important in Node.js?

ANSWER:

Node.js is heavily based on asynchronous programming.

Callbacks were traditionally used for:

- File operations
- Database operations
- HTTP operations
- Timers
- Event handling

Example:

fs.readFile("data.txt", (err, data) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log(data);

});


Modern Node.js code commonly uses Promises and async/await,
but callbacks are still important to understand.


------------------------------------------------------------

Q74. What is an error-first callback?

ANSWER:

A traditional Node.js callback convention:

callback(error, result)

Example:

function callback(err, data) {

    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
}


The first parameter represents an error.

The second represents the result.


------------------------------------------------------------

Q75. Why shouldn't we create unnecessary callbacks?

ANSWER:

Because excessive callbacks can make code:

- Difficult to read
- Difficult to debug
- Difficult to test
- Difficult to maintain

Use appropriate abstractions:

Functions
Promises
async/await
Array methods
Middleware


------------------------------------------------------------

Q76. What is function composition?

ANSWER:

Combining multiple functions so the output of one
becomes the input of another.

Example:

const double = x => x * 2;

const addTen = x => x + 10;

const result = addTen(double(5));

console.log(result);

Output:

20

Flow:

5
 ↓
double
 ↓
10
 ↓
addTen
 ↓
20


------------------------------------------------------------

Q77. What is currying?

ANSWER:

Currying converts a function with multiple arguments into
a sequence of functions that each take one argument.

Example:

function multiply(a) {

    return function (b) {

        return a * b;

    };
}

const double = multiply(2);

console.log(double(5));

Output:

10

This uses:

HOF + Closure + Currying


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 16 — REAL-WORLD MINI PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q78. Create a function that accepts an array and a callback
and returns a new array using that callback.

ANSWER:

function processArray(array, callback) {

    return array.map(callback);

}

const numbers = [1, 2, 3];

const result = processArray(
    numbers,
    num => num * 2
);

console.log(result);

Output:

[2, 4, 6]


------------------------------------------------------------

Q79. Create a reusable function for applying discounts.

ANSWER:

function createDiscount(discount) {

    return function (price) {

        return price - (price * discount / 100);

    };

}

const tenPercentDiscount = createDiscount(10);

const twentyPercentDiscount = createDiscount(20);

console.log(tenPercentDiscount(1000));
console.log(twentyPercentDiscount(1000));

Output:

900
800


------------------------------------------------------------

Q80. Create a reusable authentication middleware factory.

ANSWER:

function requireRole(role) {

    return function (req, res, next) {

        if (req.user.role !== role) {

            return res.status(403).json({
                message: "Forbidden"
            });

        }

        next();

    };
}

app.get(
    "/admin",
    requireRole("admin"),
    adminController
);


This is a VERY realistic Express.js use case.

requireRole()
        ↓
returns middleware
        ↓
Express executes middleware
        ↓
next()
        ↓
controller


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL RAPID-FIRE QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q81. Function passed as argument?

ANSWER:
Callback


Q82. Function accepting/returning another function?

ANSWER:
Higher-Order Function


Q83. Function stored in variable?

ANSWER:
Possible because functions are first-class citizens.


Q84. Function returned from another function?

ANSWER:
Possible because functions are first-class citizens.


Q85. map() returns a new array?

ANSWER:
YES


Q86. filter() returns a new array?

ANSWER:
YES


Q87. forEach() returns a transformed array?

ANSWER:
NO


Q88. find() returns first matching element?

ANSWER:
YES


Q89. some() checks whether at least one element matches?

ANSWER:
YES


Q90. every() checks whether all elements match?

ANSWER:
YES


Q91. reduce() usually produces one final value?

ANSWER:
YES


Q92. Can callbacks be synchronous?

ANSWER:
YES


Q93. Can callbacks be asynchronous?

ANSWER:
YES


Q94. Is every callback asynchronous?

ANSWER:
NO


Q95. Is every callback a HOF?

ANSWER:
NO


Q96. Can HOF return a function?

ANSWER:
YES


Q97. Can returned functions use outer variables?

ANSWER:
YES — through closures.


Q98. Is setTimeout() a HOF?

ANSWER:
YES


Q99. Is React's onClick related to callbacks?

ANSWER:
YES


Q100. Is Express middleware related to callbacks?

ANSWER:
YES


Q101. Is map() a HOF?

ANSWER:
YES


Q102. Is filter() a HOF?

ANSWER:
YES


Q103. Is reduce() a HOF?

ANSWER:
YES


Q104. Is Promise.all() commonly combined with map() for
parallel async work?

ANSWER:
YES


Q105. Should we generally use forEach(async ...) when we need
to wait for every async operation?

ANSWER:
NO

Use:

for...of + await

for sequential work.

Use:

Promise.all(array.map(...))

for parallel work.

*/