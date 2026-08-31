/*
=========================================================
              JAVASCRIPT ARROW FUNCTIONS
       COMPLETE GUIDE FOR MERN DEVELOPERS
=========================================================


=========================================================
1. WHAT IS AN ARROW FUNCTION?
=========================================================

An arrow function is a shorter way of writing a function.

Normal function:

function add(a, b) {
    return a + b;
}


Arrow function:

const add = (a, b) => {
    return a + b;
};


Even shorter:

const add = (a, b) => a + b;


All three perform the same calculation.


=========================================================
2. BASIC SYNTAX
=========================================================

General syntax:

const functionName = (parameters) => {
    // function body
};


Example:

const greet = (name) => {
    console.log("Hello " + name);
};


Call:

greet("Navneet");


Output:

Hello Navneet


---------------------------------------------------------
Think of it like this:
---------------------------------------------------------

const greet =

↓

Store a function inside a variable


(name) =

↓

Input


=> =

↓

Arrow function


{} =

↓

Function body


=========================================================
3. ARROW FUNCTION WITH NO PARAMETERS
=========================================================

Normal:

function greet() {
    console.log("Hello");
}


Arrow:

const greet = () => {
    console.log("Hello");
};


Call:

greet();


Output:

Hello


If there are zero parameters:

()


are required.


=========================================================
4. ARROW FUNCTION WITH ONE PARAMETER
=========================================================

You can omit parentheses when there is exactly
one parameter.


Example:

const greet = (name) => {
    console.log(name);
};


Can become:

const greet = name => {
    console.log(name);
};


Both are valid.


Industry convention:

Many teams prefer:

const greet = (name) => {

};


because it is visually consistent and easier to modify
later if more parameters are added.


=========================================================
5. MULTIPLE PARAMETERS
=========================================================

If there are multiple parameters:

const add = (a, b) => {
    return a + b;
};


Parentheses are required.


This is NOT valid:

const add = a, b => {
    return a + b;
};


Correct:

const add = (a, b) => {
    return a + b;
};


=========================================================
6. IMPLICIT RETURN
=========================================================

This is one of the most important arrow-function features.


Normal:

function add(a, b) {

    return a + b;

}


Arrow:

const add = (a, b) => {

    return a + b;

};


If the function contains only one expression,
you can remove:

{}

and

return


Example:

const add = (a, b) => a + b;


This is called:

IMPLICIT RETURN


JavaScript automatically returns:

a + b


=========================================================
7. EXPLICIT VS IMPLICIT RETURN
=========================================================

Explicit return:

const add = (a, b) => {

    return a + b;

};


Implicit return:

const add = (a, b) => a + b;


Both return:

30


when called with:

add(10, 20)


---------------------------------------------------------
Important:
---------------------------------------------------------

If you use curly braces:

{

}


you normally need:

return


Example:

const add = (a, b) => {

    return a + b;

};


Without return:

const add = (a, b) => {

    a + b;

};


The result is:

undefined


=========================================================
8. REAL INDUSTRY USE CASE — ARRAY METHODS
=========================================================

This is where you will see arrow functions constantly.


Suppose we have:

const users = [

    {
        name: "Navneet",
        age: 20
    },

    {
        name: "Rahul",
        age: 25
    },

    {
        name: "Aman",
        age: 22
    }

];


We want only the names.


Using map():

const names = users.map((user) => {

    return user.name;

});


Short version:

const names = users.map(user => user.name);


Result:

[
    "Navneet",
    "Rahul",
    "Aman"
]


This pattern is extremely common in MERN development.


=========================================================
9. MAP + ARROW FUNCTION
=========================================================

map() creates a new array by transforming each item.


Example:

const prices = [100, 200, 300];


const updatedPrices = prices.map(
    price => price * 1.18
);


Result:

[
    118,
    236,
    354
]


Real industry use:

Product transformation.

Example:

const products = productsFromDatabase.map(
    product => ({
        ...product,
        finalPrice: product.price * 1.18
    })
);


This is common when preparing backend data
for frontend consumption.


=========================================================
10. FILTER + ARROW FUNCTION
=========================================================

Suppose:

const users = [

    { name: "A", age: 17 },
    { name: "B", age: 22 },
    { name: "C", age: 25 }

];


Find users above 18:


const adults = users.filter(
    user => user.age >= 18
);


Result:

[
    { name: "B", age: 22 },
    { name: "C", age: 25 }
]


Industry example:

const activeUsers = users.filter(
    user => user.isActive
);


=========================================================
11. REDUCE + ARROW FUNCTION
=========================================================

Suppose:

const prices = [100, 200, 300];


Calculate total:


const total = prices.reduce(
    (sum, price) => sum + price,
    0
);


Result:

600


Real e-commerce use:

const total = cartItems.reduce(
    (total, item) =>
        total + item.price * item.quantity,
    0
);


This is extremely useful in shopping-cart systems.


=========================================================
12. FOREACH + ARROW FUNCTION
=========================================================

Example:

const users = ["A", "B", "C"];


users.forEach(user => {

    console.log(user);

});


Output:

A
B
C


The arrow function is a callback.


=========================================================
13. CALLBACK + ARROW FUNCTION
=========================================================

JavaScript functions can be passed to other functions.


Example:

setTimeout(() => {

    console.log("Hello");

}, 1000);


The arrow function is passed as a callback.


You'll see this pattern everywhere:


someFunction(() => {

    // callback code

});


=========================================================
14. REAL MERN EXAMPLE — EXPRESS CONTROLLER
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


Then:

router.get("/users", getUsers);


This is a very common industry pattern.


Flow:

Request

↓

Express Route

↓

Controller Arrow Function

↓

MongoDB

↓

Response


=========================================================
15. REAL MERN EXAMPLE — EXPRESS MIDDLEWARE
=========================================================

Middleware is also commonly written using arrow functions.


const authMiddleware = async (req, res, next) => {

    // Verify token

    // Find user

    // Attach user to request

    next();

};


Route:

router.get(
    "/profile",
    authMiddleware,
    getProfile
);


This pattern is extremely common in Node.js/Express.


=========================================================
16. ASYNC ARROW FUNCTIONS
=========================================================

You can combine:

async

+

arrow functions.


Example:

const getUser = async (id) => {

    const user = await User.findById(id);

    return user;

};


This is extremely common in MERN.


Frontend:

const fetchUsers = async () => {

    const response = await fetch("/api/users");

    const data = await response.json();

    return data;

};


Backend:

const createUser = async (userData) => {

    const user = await User.create(userData);

    return user;

};


=========================================================
17. ARROW FUNCTIONS IN REACT
=========================================================

React uses arrow functions heavily.


Example:

const UserCard = () => {

    return (
        <div>
            User Card
        </div>
    );

};


This is a:

FUNCTION COMPONENT


---------------------------------------------------------
Event handler:
---------------------------------------------------------


const handleClick = () => {

    console.log("Button clicked");

};


Then:

<button onClick={handleClick}>
    Click
</button>


This is extremely common in React.


=========================================================
18. VERY IMPORTANT — handleClick vs handleClick()
=========================================================

Correct:

<button onClick={handleClick}>
    Click
</button>


This means:

"React, call this function when the click happens."


---------------------------------------------------------

Wrong:

<button onClick={handleClick()}>
    Click
</button>


This calls the function immediately while rendering.


---------------------------------------------------------
If you need an argument:
---------------------------------------------------------


<button
    onClick={() => handleDelete(user.id)}
>
    Delete
</button>


Here:

() =>

creates a function that React can call later.


Then:

handleDelete(user.id)

runs when the button is clicked.


=========================================================
19. ARROW FUNCTIONS AND `this`
=========================================================

THIS IS THE MOST IMPORTANT DIFFERENCE.


Normal functions can have their own `this`.


Arrow functions DO NOT create their own `this`.


Instead:

Arrow function

↓

uses `this` from its surrounding lexical scope.


This is called:

LEXICAL `this`


=========================================================
20. NORMAL FUNCTION `this`
=========================================================

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


Here:

this

refers to:

user


because the function is called as:

user.greet()


=========================================================
21. ARROW FUNCTION `this`
=========================================================

Consider:

const user = {

    name: "Navneet",

    greet: () => {

        console.log(this.name);

    }

};


This does NOT behave like the previous example.


Why?


Because arrow functions do not create their own
`this`.

They take `this` from the surrounding scope.


Therefore:

DO NOT automatically replace every normal function
with an arrow function when `this` matters.


=========================================================
22. ARROW FUNCTIONS DON'T HAVE `arguments`
=========================================================

Normal function:

function add() {

    console.log(arguments);

}


add(10, 20, 30);


Normal functions have:

arguments


Arrow functions don't have their own `arguments`.


Example:

const add = () => {

    console.log(arguments);

};


This won't work as you might expect.


Instead use:

REST PARAMETERS


Example:

const add = (...numbers) => {

    console.log(numbers);

};


add(10, 20, 30);


Result:

[
    10,
    20,
    30
]


=========================================================
23. ARROW FUNCTIONS CANNOT BE USED WITH `new`
=========================================================

Normal function:

function User(name) {

    this.name = name;

}


const user = new User("Navneet");


This works.


Arrow function:

const User = (name) => {

    this.name = name;

};


const user = new User("Navneet");


This does NOT work.


Arrow functions are not constructors.


Remember:

Arrow function

↓

No constructor behavior


=========================================================
24. ARROW FUNCTIONS DO NOT HAVE THEIR OWN
`this`, `arguments`, OR `super`
=========================================================

Important interview point:


Arrow functions:

- Do not have their own `this`
- Do not have their own `arguments`
- Cannot be used as constructors
- Do not have a `prototype`


They inherit certain surrounding behavior instead.


=========================================================
25. OBJECT METHODS — IMPORTANT
=========================================================

Suppose:

const user = {

    name: "Navneet",

    greet() {

        console.log(this.name);

    }

};


This is a good object method.


You generally should NOT blindly write:

const user = {

    name: "Navneet",

    greet: () => {

        console.log(this.name);

    }

};


because arrow `this` does not refer to the object
in the same way.


=========================================================
26. ARROW FUNCTIONS AND LEXICAL SCOPE
=========================================================

Arrow functions inherit `this` from where they were
created.


This is particularly useful inside callbacks.


Example:

const user = {

    name: "Navneet",

    greet() {

        setTimeout(() => {

            console.log(this.name);

        }, 1000);

    }

};


user.greet();


Output:

Navneet


Why?


The arrow function uses the `this` of:

greet()


instead of creating its own `this`.


This is a very useful real-world behavior.


=========================================================
27. REAL INDUSTRY USE CASE — REACT STATE
=========================================================

Example:

const [count, setCount] = useState(0);


Update:

setCount(prevCount => prevCount + 1);


Here:

prevCount => prevCount + 1


is an arrow function.


React passes the previous state value into it.


This pattern is extremely important in React.


=========================================================
28. REAL INDUSTRY USE CASE — API DATA
=========================================================

Suppose API returns:


[
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Phone",
        price: 30000
    }
]


You want names:


const names = products.map(
    product => product.name
);


You want expensive products:


const expensiveProducts = products.filter(
    product => product.price > 40000
);


You want total:


const total = products.reduce(
    (sum, product) => sum + product.price,
    0
);


These patterns are everywhere in MERN applications.


=========================================================
29. RETURNING OBJECTS FROM ARROW FUNCTIONS
=========================================================

This can confuse beginners.


You might write:

const createUser = () => {

    return {
        name: "Navneet",
        age: 20
    };

};


This works.


But with implicit return:


const createUser = () => ({
    name: "Navneet",
    age: 20
});


Why parentheses?


Because:

const createUser = () => {
    name: "Navneet"
};


would be interpreted as a function body,
not an object expression.


Therefore:

() => ({ ... })


means:

"implicitly return this object."


=========================================================
30. REAL MERN EXAMPLE — TRANSFORM DATABASE DATA
=========================================================

Suppose MongoDB gives:


const users = await User.find();


You don't want to send passwords to the frontend.


You can transform the data:


const safeUsers = users.map(user => ({

    id: user._id,

    name: user.name,

    email: user.email

}));


Then:

res.json(safeUsers);


This is a realistic backend use case.


=========================================================
31. CHAINING ARROW FUNCTIONS
=========================================================

Example:


const result = users
    .filter(user => user.isActive)
    .map(user => user.name)
    .sort();


This means:


users

↓

filter()

↓

only active users

↓

map()

↓

extract names

↓

sort()

↓

final result


This style is very common in modern JavaScript.


=========================================================
32. ARROW FUNCTIONS WITH DESTRUCTURING
=========================================================

You can destructure parameters.


Example:


const getUserName = ({ name }) => {

    return name;

};


Usage:


getUserName({
    name: "Navneet",
    age: 20
});


Output:

Navneet


Very useful when working with objects.


---------------------------------------------------------
React example:
---------------------------------------------------------


const UserCard = ({ name, age }) => {

    return (
        <div>
            {name}
            {age}
        </div>
    );

};


This pattern is extremely common in React.


=========================================================
33. ARROW FUNCTIONS WITH DEFAULT PARAMETERS
=========================================================

Example:


const greet = (name = "Guest") => {

    return `Hello ${name}`;

};


greet();


Output:

Hello Guest


greet("Navneet");


Output:

Hello Navneet


=========================================================
34. ARROW FUNCTIONS WITH REST PARAMETERS
=========================================================

Example:


const sum = (...numbers) => {

    return numbers.reduce(
        (total, number) => total + number,
        0
    );

};


sum(10, 20, 30);


Output:

60


Here we have an arrow function using:

REST PARAMETERS

+

REDUCE

+

ANOTHER ARROW FUNCTION


This is a very common modern JavaScript style.


=========================================================
35. ARROW FUNCTION VS NORMAL FUNCTION
=========================================================


Feature                 Normal Function     Arrow Function
---------------------------------------------------------

Syntax                  Longer              Shorter

Own `this`              Yes                 No

Own `arguments`         Yes                 No

Constructor             Yes                 No

Can use `new`            Yes                 No

Prototype               Yes                 No

Lexical `this`           No                  Yes

Callbacks               Yes                 Yes

React components         Yes                 Yes

Array methods            Yes                 Yes


=========================================================
36. WHEN SHOULD A MERN DEVELOPER USE ARROW FUNCTIONS?
=========================================================

Excellent use cases:


1. React components

const App = () => {};


2. Event handlers

const handleClick = () => {};


3. Array callbacks

users.map(user => user.name);


4. Filtering

users.filter(user => user.isActive);


5. Express controllers

const getUsers = async (req, res) => {};


6. Middleware

const auth = (req, res, next) => {};


7. Utility functions

const calculateTotal = (items) => {};


8. Async operations

const fetchData = async () => {};


9. Promise callbacks

promise.then(data => console.log(data));


=========================================================
37. WHEN SHOULD YOU BE CAREFUL WITH ARROW FUNCTIONS?
=========================================================

Be careful when you need:


1. Your own `this`

2. Constructor behavior

3. `arguments`

4. Prototype methods

5. Certain object methods


In these situations, a normal function may be
more appropriate.


=========================================================
38. INDUSTRY RULE — DON'T USE ARROW FUNCTIONS
EVERYWHERE BLINDLY
=========================================================

Bad understanding:

"Modern JavaScript means always use arrow functions."


Not true.


Correct understanding:


Use arrow functions when their lexical behavior
and concise syntax are useful.


Use normal functions when you need normal function
semantics, especially around `this`, constructors,
or methods.


=========================================================
39. COMMON BEGINNER MISTAKE #1
=========================================================

Wrong:


const add = (a, b) => {
    a + b;
};


console.log(add(10, 20));


Output:

undefined


Why?


Because you used curly braces but didn't return.


Correct:


const add = (a, b) => {
    return a + b;
};


OR:


const add = (a, b) => a + b;


=========================================================
40. COMMON BEGINNER MISTAKE #2
=========================================================

Wrong:

setTimeout(
    console.log("Hello"),
    1000
);


This executes immediately.


Correct:


setTimeout(() => {

    console.log("Hello");

}, 1000);


Now the function is passed as a callback.


=========================================================
41. COMMON BEGINNER MISTAKE #3
=========================================================

React:


<button onClick={handleClick()}>

Wrong.


Why?

The function executes during rendering.


Correct:


<button onClick={handleClick}>


If you need arguments:


<button onClick={() => handleClick(id)}>


=========================================================
42. COMMON BEGINNER MISTAKE #4
=========================================================

Thinking arrow functions have their own `this`.


They don't.


Remember:


Normal function

↓

gets its own `this` based on invocation.


Arrow function

↓

inherits `this` from surrounding scope.


=========================================================
43. INTERVIEW QUESTION
=========================================================

Question:

What is the biggest difference between normal and
arrow functions?


Answer:


The biggest behavioral difference is that arrow functions
do not have their own `this`.

They inherit `this` lexically from the surrounding scope.


Other differences:

- No own arguments
- Cannot be constructors
- No prototype


=========================================================
44. MERN DEVELOPER MENTAL MODEL
=========================================================

Think of an arrow function as:


"Create a function here, usually for a specific task,
and inherit the surrounding `this`."


Example:


const calculateTotal = (items) =>
    items.reduce(
        (total, item) =>
            total + item.price,
        0
    );


Frontend:

React component

↓

Arrow function


React event

↓

Arrow function


Array transformation

↓

Arrow function


Backend controller

↓

Arrow function


Middleware

↓

Arrow function


Utility

↓

Arrow function


=========================================================
45. WHAT YOU MUST KNOW FOR MERN
=========================================================

Before moving ahead, make sure you understand:


BASIC
-----

1. Arrow function syntax

2. Parameters

3. Arguments

4. Zero parameters

5. One parameter

6. Multiple parameters

7. Explicit return

8. Implicit return


INTERMEDIATE
------------

9. Callbacks

10. map()

11. filter()

12. reduce()

13. forEach()

14. Async arrow functions

15. Default parameters

16. Rest parameters

17. Destructuring parameters

18. Returning objects


ADVANCED
--------

19. Lexical `this`

20. Arrow vs normal function

21. `arguments`

22. Constructors

23. `new`

24. Prototype

25. Closures with arrow functions

26. Nested arrow functions


MERN
----

27. React function components

28. React event handlers

29. State updater callbacks

30. Express controllers

31. Express middleware

32. Async database functions

33. API callbacks

34. Data transformation

35. Array method chaining


=========================================================
FINAL CHEAT SHEET
=========================================================


NORMAL:

function add(a, b) {
    return a + b;
}


ARROW:

const add = (a, b) => {
    return a + b;
};


IMPLICIT RETURN:

const add = (a, b) => a + b;


ONE PARAMETER:

const square = x => x * x;


NO PARAMETERS:

const greet = () => {
    console.log("Hello");
};


ASYNC:

const getUser = async (id) => {

    return await User.findById(id);

};


MAP:

users.map(user => user.name);


FILTER:

users.filter(user => user.isActive);


REDUCE:

items.reduce(
    (total, item) => total + item.price,
    0
);


REACT EVENT:

<button onClick={handleClick}>


REACT ARGUMENT:

<button onClick={() => handleDelete(id)}>


EXPRESS:

const getUsers = async (req, res) => {};


MIDDLEWARE:

const auth = (req, res, next) => {};


LEXICAL THIS:

Arrow functions don't create their own `this`.


NO CONSTRUCTOR:

new ArrowFunction()

↓

Not allowed.


=========================================================
THE ONE RULE TO REMEMBER
=========================================================

Arrow functions are:

SHORTER FUNCTIONS

+

LEXICAL `this`

+

NO OWN `arguments`

+

NOT CONSTRUCTORS

=========================================================
*/


/*
=========================================================
       JAVASCRIPT ARROW FUNCTIONS
   QUESTIONS + ANSWERS — BEGINNER → ADVANCED
=========================================================


=========================================================
LEVEL 1 — BEGINNER
=========================================================


Q1. What is the output?

const greet = () => {
    console.log("Hello");
};

greet();


ANSWER:

Hello


CONCEPT:

Basic arrow function syntax and function invocation.


---------------------------------------------------------

Q2. Convert this normal function into an arrow function.

function add(a, b) {
    return a + b;
}


ANSWER:

const add = (a, b) => {
    return a + b;
};


---------------------------------------------------------

Q3. Make the above function shorter using implicit return.


ANSWER:

const add = (a, b) => a + b;


CONCEPT:

Implicit return.


---------------------------------------------------------

Q4. What is the output?

const square = x => x * x;

console.log(square(5));


ANSWER:

25


CONCEPT:

One parameter + implicit return.


---------------------------------------------------------

Q5. What is the output?

const greet = name => `Hello ${name}`;

console.log(greet("Navneet"));


ANSWER:

Hello Navneet


---------------------------------------------------------

Q6. Is this valid?

const greet = () => {
    console.log("Hello");
};


ANSWER:

YES.


An arrow function with zero parameters uses:


()


---------------------------------------------------------

Q7. Is this valid?

const square = x => x * x;


ANSWER:

YES.


When there is exactly one parameter, parentheses
can be omitted.


---------------------------------------------------------

Q8. Is this valid?

const add = a, b => a + b;


ANSWER:

NO.


Correct:

const add = (a, b) => a + b;


Multiple parameters require parentheses.


---------------------------------------------------------

Q9. What is the output?

const add = (a, b) => {
    a + b;
};

console.log(add(10, 20));


ANSWER:

undefined


WHY?

Because curly braces create a function body and
you didn't use return.


Correct:

const add = (a, b) => {
    return a + b;
};


---------------------------------------------------------

Q10. What is the output?

const add = (a, b) => a + b;

console.log(add(10, 20));


ANSWER:

30


=========================================================
LEVEL 2 — PARAMETERS, RETURN & OBJECTS
=========================================================


Q11. What is the output?

const greet = (name = "Guest") => {
    return `Hello ${name}`;
};

console.log(greet());


ANSWER:

Hello Guest


CONCEPT:

Default parameter.


---------------------------------------------------------

Q12. What is the output?

const greet = (name = "Guest") => `Hello ${name}`;

console.log(greet("Navneet"));


ANSWER:

Hello Navneet


---------------------------------------------------------

Q13. Write an arrow function that accepts two numbers
and returns the larger number.


ANSWER:

const max = (a, b) => a > b ? a : b;


Example:

max(10, 20)

↓

20


---------------------------------------------------------

Q14. What is the output?

const createUser = () => ({
    name: "Navneet",
    age: 20
});

console.log(createUser());


ANSWER:

{
    name: "Navneet",
    age: 20
}


CONCEPT:

Returning an object using implicit return.


---------------------------------------------------------

Q15. Why are parentheses used here?

const createUser = () => ({
    name: "Navneet"
});


ANSWER:

Because without parentheses JavaScript interprets
the `{}` as the function body.

Parentheses tell JavaScript:

"Return this object."


---------------------------------------------------------

Q16. What is the output?

const sum = (...numbers) => {

    return numbers.reduce(
        (total, num) => total + num,
        0
    );

};

console.log(sum(10, 20, 30));


ANSWER:

60


CONCEPTS:

Rest parameters

+

Arrow functions

+

reduce()


=========================================================
LEVEL 3 — CALLBACKS
=========================================================


Q17. What is the output?

const numbers = [1, 2, 3];

numbers.forEach(num => {
    console.log(num);
});


ANSWER:

1
2
3


CONCEPT:

Arrow function used as a callback.


---------------------------------------------------------

Q18. What is the output?

const numbers = [1, 2, 3, 4];

const result = numbers.map(
    num => num * 2
);

console.log(result);


ANSWER:

[2, 4, 6, 8]


---------------------------------------------------------

Q19. What is the output?

const numbers = [10, 15, 20, 25];

const result = numbers.filter(
    num => num > 18
);

console.log(result);


ANSWER:

[20, 25]


---------------------------------------------------------

Q20. What is the output?

const numbers = [1, 2, 3, 4];

const result = numbers.reduce(
    (sum, num) => sum + num,
    0
);

console.log(result);


ANSWER:

10


---------------------------------------------------------

Q21. What is happening here?

setTimeout(() => {
    console.log("Hello");
}, 1000);


ANSWER:

An arrow function is being passed as a callback
to setTimeout().

The callback executes approximately 1 second later.


---------------------------------------------------------

Q22. What is the difference?

setTimeout(greet, 1000);

AND

setTimeout(greet(), 1000);


ANSWER:

First:

setTimeout(greet, 1000);

Passes the function.

Second:

setTimeout(greet(), 1000);

Calls the function immediately and passes its result.


VERY IMPORTANT in React and JavaScript.


=========================================================
LEVEL 4 — ARRAY + REAL DATA
=========================================================


Q23. Given:

const users = [
    { name: "Navneet", age: 20 },
    { name: "Rahul", age: 25 },
    { name: "Aman", age: 17 }
];


Get only the names using an arrow function.


ANSWER:

const names = users.map(user => user.name);


Result:

["Navneet", "Rahul", "Aman"]


---------------------------------------------------------

Q24. Get users whose age is 18 or above.


ANSWER:

const adults = users.filter(
    user => user.age >= 18
);


---------------------------------------------------------

Q25. Calculate the total age.


ANSWER:

const totalAge = users.reduce(
    (total, user) => total + user.age,
    0
);


Result:

62


---------------------------------------------------------

Q26. What is the output?

const users = [
    { name: "A", active: true },
    { name: "B", active: false },
    { name: "C", active: true }
];

const result = users
    .filter(user => user.active)
    .map(user => user.name);

console.log(result);


ANSWER:

["A", "C"]


CONCEPT:

Method chaining.


---------------------------------------------------------

Q27. What does this do?

const names = users.map(({ name }) => name);


ANSWER:

It uses destructuring inside the arrow-function
parameter.

Instead of:

user => user.name


we write:

({ name }) => name


=========================================================
LEVEL 5 — ARROW FUNCTIONS + THIS
=========================================================


Q28. What is the most important difference between
a normal function and an arrow function?


ANSWER:

Arrow functions do NOT have their own `this`.

They inherit `this` from their surrounding lexical scope.


Normal function:

Has its own `this` depending on how it is called.


Arrow function:

Uses surrounding `this`.


---------------------------------------------------------

Q29. What is the output?

const user = {
    name: "Navneet",

    greet: function () {
        console.log(this.name);
    }
};

user.greet();


ANSWER:

Navneet


WHY?

`greet` is called as:

user.greet()


So `this` refers to `user`.


---------------------------------------------------------

Q30. What happens here?

const user = {
    name: "Navneet",

    greet: () => {
        console.log(this.name);
    }
};

user.greet();


ANSWER:

It does NOT print:

Navneet


WHY?

Because the arrow function does not get its own
`this`.

It takes `this` from the surrounding scope.


The exact output can depend on the execution environment,
but the important concept is:

Arrow function `this` ≠ object automatically.


---------------------------------------------------------

Q31. What is the output?

const user = {

    name: "Navneet",

    greet() {

        setTimeout(() => {

            console.log(this.name);

        }, 1000);

    }

};

user.greet();


ANSWER:

After approximately 1 second:

Navneet


WHY?

The arrow function inherits `this` from `greet()`.


This is one of the most useful real-world reasons
for arrow functions.


=========================================================
LEVEL 6 — ARGUMENTS
=========================================================


Q32. Does an arrow function have its own `arguments`?


ANSWER:

NO.


Normal function:

function test() {
    console.log(arguments);
}


has its own `arguments` object.


Arrow function:

const test = () => {
    console.log(arguments);
};


does NOT have its own `arguments`.


---------------------------------------------------------

Q33. How can you receive multiple arguments in an
arrow function?


ANSWER:

Use rest parameters.


const test = (...args) => {

    console.log(args);

};


test(10, 20, 30);


Result:

[10, 20, 30]


=========================================================
LEVEL 7 — CONSTRUCTOR & PROTOTYPE
=========================================================


Q34. Can an arrow function be used with `new`?


ANSWER:

NO.


Example:

const User = name => {
    this.name = name;
};


new User("Navneet");


This throws a TypeError.


Arrow functions are not constructors.


---------------------------------------------------------

Q35. Does an arrow function have its own prototype?


ANSWER:

NO.


Normal functions can have a:

prototype


Arrow functions don't have their own prototype.


=========================================================
LEVEL 8 — ASYNC ARROW FUNCTIONS
=========================================================


Q36. Is this valid?

const getUser = async () => {

    const user = await User.findById(id);

    return user;

};


ANSWER:

YES.


This is an async arrow function.


It is extremely common in Node.js/Express/MongoDB.


---------------------------------------------------------

Q37. What does `async` do?


ANSWER:

An async function always returns a Promise.


Example:

const getData = async () => {

    return "Hello";

};


getData();


returns a Promise.


---------------------------------------------------------

Q38. What does `await` do?


ANSWER:

It waits for a Promise to settle before continuing
inside the async function.


Example:

const getUser = async () => {

    const user = await User.findById(id);

    console.log(user);

};


This is commonly used for database queries and API calls.


---------------------------------------------------------

Q39. Write an async arrow function that fetches users.


ANSWER:

const fetchUsers = async () => {

    const response = await fetch("/api/users");

    const data = await response.json();

    return data;

};


=========================================================
LEVEL 9 — REACT / MERN
=========================================================


Q40. Why is this common in React?

const App = () => {

    return <h1>Hello</h1>;

};


ANSWER:

React supports function components.

Arrow functions provide a concise way to define
components.


---------------------------------------------------------

Q41. What is the difference?

<button onClick={handleClick}>

AND

<button onClick={handleClick()}>


ANSWER:


onClick={handleClick}


Passes the function to React.


React calls it when the event occurs.


---------------------------------------------------------

Whereas:


onClick={handleClick()}


calls the function immediately during rendering.


This is a VERY common beginner mistake.


---------------------------------------------------------

Q42. Suppose:

const handleDelete = (id) => {
    console.log(id);
};


How do you pass an ID when clicking a button?


ANSWER:

<button onClick={() => handleDelete(id)}>
    Delete
</button>


The outer arrow function waits for the click.


Then:

handleDelete(id)

runs.


---------------------------------------------------------

Q43. What is happening here?

setCount(prevCount => prevCount + 1);


ANSWER:

The arrow function receives the previous state value
and returns the new state value.


For example:


prevCount = 10

↓

prevCount + 1

↓

11


This is the recommended pattern when the new state
depends on the previous state.


=========================================================
LEVEL 10 — EXPRESS / NODE.JS
=========================================================


Q44. What is this?

const getUsers = async (req, res) => {

    const users = await User.find();

    res.json(users);

};


ANSWER:

An async arrow function used as an Express
controller/route handler.


---------------------------------------------------------

Q45. What is this?

const authMiddleware = (req, res, next) => {

    // authentication logic

    next();

};


ANSWER:

An Express middleware function written as an
arrow function.


---------------------------------------------------------

Q46. Why are arrow functions useful in MERN?


ANSWER:

Because they are commonly used for:

- React components
- Event handlers
- Callbacks
- map()
- filter()
- reduce()
- Express controllers
- Express middleware
- Async operations
- Utility functions
- Promise callbacks


=========================================================
LEVEL 11 — OUTPUT-BASED INTERVIEW QUESTIONS
=========================================================


Q47. What is the output?

const multiply = (a, b) => a * b;

console.log(multiply(5, 4));


ANSWER:

20


---------------------------------------------------------

Q48. What is the output?

const test = () => {
    return {
        name: "Navneet"
    };
};

console.log(test());


ANSWER:

{
    name: "Navneet"
}


---------------------------------------------------------

Q49. What is the output?

const test = () => ({
    name: "Navneet"
});

console.log(test());


ANSWER:

{
    name: "Navneet"
}


---------------------------------------------------------

Q50. What is the output?

const test = () => {
    {
        name: "Navneet";
    }
};

console.log(test());


ANSWER:

undefined


WHY?

There is no return.


The inner `{}` is treated as a block, not as an
implicitly returned object.


---------------------------------------------------------

Q51. What is the output?

const numbers = [1, 2, 3];

const result = numbers.map(
    number => number + 10
);

console.log(result);


ANSWER:

[11, 12, 13]


---------------------------------------------------------

Q52. What is the output?

const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 10);

console.log(result);


ANSWER:

[20, 40]


---------------------------------------------------------

Q53. What is the output?

const numbers = [1, 2, 3];

const result = numbers.reduce(
    (total, number) => total + number,
    10
);

console.log(result);


ANSWER:

16


Because:

10 + 1 + 2 + 3

=

16


=========================================================
LEVEL 12 — ADVANCED
=========================================================


Q54. What is a higher-order function?


ANSWER:

A function that either:

1. Accepts another function as an argument

OR

2. Returns another function.


Example:


const calculate = (a, b, operation) => {

    return operation(a, b);

};


const add = (a, b) => a + b;


calculate(10, 20, add);


=========================================================

Q55. What is a closure involving an arrow function?


ANSWER:

An inner arrow function can remember variables
from its outer lexical scope.


Example:


const createCounter = () => {

    let count = 0;

    return () => {

        count++;

        return count;

    };

};


const counter = createCounter();


console.log(counter());
console.log(counter());


Output:

1
2


The returned arrow function remembers `count`.


---------------------------------------------------------

Q56. What is lexical `this`?


ANSWER:

Arrow functions don't determine their own `this`
based on how they are called.

They inherit `this` from the surrounding scope where
they were created.


=========================================================
LEVEL 13 — TRICKY INTERVIEW QUESTIONS
=========================================================


Q57. Which is better?

const add = (a, b) => {
    return a + b;
};


OR:


const add = (a, b) => a + b;


ANSWER:

For a simple one-expression function:

const add = (a, b) => a + b;


is cleaner.


But don't sacrifice readability just to make a function
shorter.


---------------------------------------------------------

Q58. Is an arrow function always better than a normal
function?


ANSWER:

NO.


Use the appropriate function type.


Arrow functions are excellent for:

- callbacks
- React handlers
- simple utilities
- lexical `this`


Normal functions can be better when:

- You need a dynamic/own `this`
- You need constructor behavior
- You need `arguments`
- You're defining certain object methods


---------------------------------------------------------

Q59. Can you write this?

const user = {
    name: "Navneet",

    greet: () => {
        console.log(this.name);
    }
};


ANSWER:

YES, it is syntactically valid.


But:

`this`

does not automatically refer to `user`.


This is a common conceptual trap.


---------------------------------------------------------

Q60. What is the difference?

const square = x => x * x;


and


const square = (x) => {
    return x * x;
};


ANSWER:

Both return the same result.


First:

Implicit return.


Second:

Explicit return.


=========================================================
LEVEL 14 — REAL INDUSTRY PROBLEMS
=========================================================


Q61. You receive this cart:

const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];


Calculate the total cart price.


ANSWER:


const total = cart.reduce(
    (sum, item) =>
        sum + item.price * item.quantity,
    0
);


Result:

54000


---------------------------------------------------------

Q62. Get only products costing more than ₹2,000.


ANSWER:


const expensiveProducts = cart.filter(
    item => item.price > 2000
);


---------------------------------------------------------

Q63. Create an array containing only product names.


ANSWER:


const productNames = cart.map(
    item => item.name
);


Result:

[
    "Laptop",
    "Mouse",
    "Keyboard"
]


---------------------------------------------------------

Q64. Create a function that calculates GST.


ANSWER:


const calculateGST = (amount, rate = 18) => {

    return amount * rate / 100;

};


calculateGST(1000);


Result:

180


---------------------------------------------------------

Q65. Create an Express controller using an async
arrow function.


ANSWER:


const getProducts = async (req, res) => {

    try {

        const products = await Product.find();

        return res.status(200).json({
            success: true,
            data: products
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


=========================================================
LEVEL 15 — FINAL CHALLENGE
=========================================================


Q66. What is the output?

const users = [
    {
        name: "Navneet",
        age: 20,
        active: true
    },
    {
        name: "Rahul",
        age: 17,
        active: true
    },
    {
        name: "Aman",
        age: 25,
        active: false
    },
    {
        name: "Rohit",
        age: 22,
        active: true
    }
];


const result = users
    .filter(user => user.active)
    .filter(user => user.age >= 18)
    .map(user => user.name);


ANSWER:

[
    "Navneet",
    "Rohit"
]


WORKING:

users

↓

filter active users

↓

Navneet
Rahul
Rohit

↓

filter age >= 18

↓

Navneet
Rohit

↓

map names

↓

["Navneet", "Rohit"]


=========================================================
Q67. FINAL CHALLENGE
=========================================================

What is the output?


const calculate = (price, discount = 0) => {

    const discountedPrice =
        price - (price * discount / 100);

    return discountedPrice;

};


console.log(calculate(1000));

console.log(calculate(1000, 20));


ANSWER:

1000

800


---------------------------------------------------------

Q68. FINAL CHALLENGE
---------------------------------------------------------

What is the output?


const createCounter = () => {

    let count = 0;

    return () => {

        count++;

        return count;

    };

};


const counter1 = createCounter();

const counter2 = createCounter();


console.log(counter1());

console.log(counter1());

console.log(counter2());

console.log(counter1());


ANSWER:

1
2
1
3


WHY?

counter1 and counter2 have separate closures.


counter1:

count = 0

↓

1

↓

2

↓

3


counter2:

count = 0

↓

1


=========================================================
Q69. FINAL INTERVIEW QUESTION
=========================================================

Explain arrow functions in your own words.


IDEAL ANSWER:

"An arrow function is a concise way to define a function
in JavaScript.

It can have implicit return for single expressions.

Arrow functions are commonly used for callbacks,
array methods, React components, event handlers,
Express controllers and asynchronous operations.

The most important behavioral difference is that arrow
functions don't have their own `this`; they inherit it
lexically from the surrounding scope.

They also don't have their own `arguments`, cannot be
used as constructors with `new`, and don't have their
own prototype."


=========================================================
             MUST-KNOW CHECKLIST
=========================================================

Before saying:

"I understand arrow functions"

you should be comfortable with:


[✓] Basic syntax

[✓] Zero parameters

[✓] One parameter

[✓] Multiple parameters

[✓] Explicit return

[✓] Implicit return

[✓] Returning objects

[✓] Default parameters

[✓] Rest parameters

[✓] Callbacks

[✓] map()

[✓] filter()

[✓] reduce()

[✓] forEach()

[✓] Method chaining

[✓] Destructuring parameters

[✓] Async arrow functions

[✓] Promise callbacks

[✓] React event handlers

[✓] React components

[✓] Express controllers

[✓] Express middleware

[✓] Lexical `this`

[✓] Arrow vs normal functions

[✓] `arguments`

[✓] `new`

[✓] Constructors

[✓] Closures

=========================================================
              MOST IMPORTANT 5
=========================================================

If you're currently learning JavaScript for MERN,
make these five absolutely solid:


1. IMPLICIT RETURN

const add = (a, b) => a + b;


2. CALLBACKS

users.map(user => user.name);


3. ASYNC ARROW FUNCTIONS

const getUser = async () => {
    // async code
};


4. REACT EVENT HANDLERS

<button onClick={() => handleDelete(id)}>


5. LEXICAL `this`

Arrow functions don't create their own `this`.

=========================================================

*/

