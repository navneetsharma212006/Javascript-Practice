/*
╔══════════════════════════════════════════════════════════════════════╗
║                       ARROW FUNCTIONS IN JS                        ║
║                 MERN DEVELOPER — IMPORTANT PARTS                   ║
╚══════════════════════════════════════════════════════════════════════╝


Q1. What is an arrow function?

Answer:

An arrow function is a shorter way of writing a function in JavaScript.

Normal function:

function add(a, b) {
    return a + b;
}


Arrow function:

const add = (a, b) => {
    return a + b;
};


Both perform the same job.


──────────────────────────────────────────────────────────────────────


Q2. Why are arrow functions important for a MERN developer?

Answer:

Because you will see them everywhere in modern JavaScript.

For example:

React:

const handleClick = () => {
    console.log("Clicked");
};


Array methods:

users.map((user) => {
    return user.name;
});


Express:

app.get("/users", (req, res) => {
    res.json(users);
});


Promises:

fetch("/api/users")
    .then((response) => response.json());


So arrow functions are not an optional topic for a MERN developer.

You should be very comfortable with them.


──────────────────────────────────────────────────────────────────────


Q3. What is the basic syntax?

Answer:

const functionName = (parameters) => {
    // code
};


Example:

const greet = (name) => {
    console.log("Hello " + name);
};


Calling:

greet("Navneet");


Output:

Hello Navneet


Think:

(parameters) => {
    code
}


The arrow:

=>

is what makes it an arrow function.


──────────────────────────────────────────────────────────────────────


Q4. Can an arrow function have one parameter?

Answer:

Yes.

Example:

const greet = (name) => {
    console.log("Hello " + name);
};


You can also remove the parentheses when there is exactly ONE parameter:

const greet = name => {
    console.log("Hello " + name);
};


Both are valid.


However, in professional code, you will often see:

const greet = (name) => {
    console.log("Hello " + name);
};


because it is consistent and easier to read.


──────────────────────────────────────────────────────────────────────


Q5. What if there are zero parameters?

Answer:

You MUST use parentheses.

Example:

const greet = () => {
    console.log("Hello");
};


Calling:

greet();


──────────────────────────────────────────────────────────────────────


Q6. What if there are multiple parameters?

Answer:

Use parentheses.

Example:

const add = (a, b) => {
    return a + b;
};


Calling:

add(10, 20);


Output:

30


──────────────────────────────────────────────────────────────────────


Q7. What is an implicit return?

Answer:

If an arrow function contains only one expression,
you can remove the curly braces and the return keyword.

Normal arrow function:

const add = (a, b) => {
    return a + b;
};


Implicit return:

const add = (a, b) => a + b;


Both return:

30

when called with:

add(10, 20)


This is called:

Implicit return.


──────────────────────────────────────────────────────────────────────


Q8. When should I use implicit return?

Answer:

Use it when the function is very simple.

Good:

const square = (num) => num * num;


Good:

const getName = (user) => user.name;


Good:

const isAdult = (age) => age >= 18;


But if the function contains multiple operations:

const calculateTotal = (price, quantity) => {
    const subtotal = price * quantity;
    const tax = subtotal * 0.18;
    return subtotal + tax;
};


Use curly braces and an explicit return.


Industry rule:

Simple function → implicit return

Complex function → normal block + return


──────────────────────────────────────────────────────────────────────


Q9. What is the difference between these two?

Example 1:

const add = (a, b) => a + b;


Example 2:

const add = (a, b) => {
    return a + b;
};


Answer:

Both return:

a + b


The difference is syntax.

Example 1:

Implicit return


Example 2:

Explicit return


──────────────────────────────────────────────────────────────────────


Q10. What is the biggest practical difference between normal functions and arrow functions?

Answer:

The biggest important difference for MERN developers is:

ARROW FUNCTIONS DO NOT HAVE THEIR OWN `this`.


Instead, arrow functions use `this` from their surrounding scope.


This is called:

Lexical `this`.


This is one of the most important arrow-function concepts.


──────────────────────────────────────────────────────────────────────


Q11. What is `this`?

Answer:

`this` refers to the object/context associated with the current function call.

Example:

const user = {
    name: "Navneet",

    greet: function() {
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


──────────────────────────────────────────────────────────────────────


Q12. How is `this` different in an arrow function?

Answer:

Arrow functions do NOT create their own `this`.

Example:

const user = {
    name: "Navneet",

    greet: () => {
        console.log(this.name);
    }
};


Do NOT use an arrow function like this when you want:

this → user


The arrow function takes `this` from its surrounding scope.


Therefore:

Arrow functions are usually NOT suitable for object methods
when you need dynamic `this`.


──────────────────────────────────────────────────────────────────────


Q13. What should I use for an object method?

Answer:

Usually use a normal method/function.

Example:

const user = {
    name: "Navneet",

    greet() {
        console.log(this.name);
    }
};

user.greet();


Output:

Navneet


This is the correct pattern when the method needs:

this → current object


──────────────────────────────────────────────────────────────────────


Q14. What does "lexical this" mean?

Answer:

It means an arrow function gets `this` from where the function
was created, rather than creating its own `this`.


Example:

const user = {
    name: "Navneet",

    greet() {
        const sayName = () => {
            console.log(this.name);
        };

        sayName();
    }
};

user.greet();


Output:

Navneet


Here the arrow function uses the `this` of:

greet()


This is one of the main reasons arrow functions are useful.


──────────────────────────────────────────────────────────────────────


Q15. Why is lexical `this` useful in real applications?

Answer:

Consider a callback.

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


The arrow function keeps the surrounding `this`.


This is useful with:

setTimeout
callbacks
event handlers
Promises
async operations


──────────────────────────────────────────────────────────────────────


Q16. What is a very important React use case?

Answer:

React event handlers are commonly written using arrow functions.

Example:

const handleClick = () => {
    console.log("Button clicked");
};


Then:

<button onClick={handleClick}>
    Click
</button>


This is extremely common in React.


──────────────────────────────────────────────────────────────────────


Q17. What is a common React mistake?

Answer:

Do NOT do this:

<button onClick={handleClick()}>
    Click
</button>


Why?

Because:

handleClick()


calls the function immediately.


React expects a function to execute later when the event happens.


Correct:

<button onClick={handleClick}>
    Click
</button>


Or:

<button onClick={() => handleClick()}>
    Click
</button>


The second version is useful when you need to pass arguments.


──────────────────────────────────────────────────────────────────────


Q18. How do I pass arguments to an event handler?

Answer:

Example:

const deleteUser = (id) => {
    console.log(id);
};


In React:

<button onClick={() => deleteUser(101)}>
    Delete
</button>


Here:

() => deleteUser(101)


creates a function that will call:

deleteUser(101)


when the button is clicked.


──────────────────────────────────────────────────────────────────────


Q19. How are arrow functions used with map()?

Answer:

Very commonly.

Example:

const users = [
    { name: "Navneet" },
    { name: "Rahul" },
    { name: "Aman" }
];


const names = users.map((user) => {
    return user.name;
});


Using implicit return:

const names = users.map((user) => user.name);


This is one of the most common arrow-function patterns
you will write in React.


──────────────────────────────────────────────────────────────────────


Q20. How are arrow functions used with filter()?

Answer:

Example:

const users = [
    { name: "Navneet", age: 20 },
    { name: "Rahul", age: 17 },
    { name: "Aman", age: 22 }
];


const adults = users.filter((user) => user.age >= 18);


The arrow function:

(user) => user.age >= 18


returns true or false.


filter() keeps the users where the result is true.


──────────────────────────────────────────────────────────────────────


Q21. How are arrow functions used with reduce()?

Answer:

Example:

const prices = [100, 200, 300];


const total = prices.reduce(
    (sum, price) => sum + price,
    0
);


Output:

600


The arrow function is used as the callback.


You will frequently use this pattern in:

cart totals
order totals
revenue calculations
dashboard statistics


──────────────────────────────────────────────────────────────────────


Q22. How are arrow functions used in Express?

Answer:

Very commonly.

Example:

app.get("/users", (req, res) => {
    res.json(users);
});


Here:

(req, res) => {
    res.json(users);
}


is an arrow function.


Express calls this function when a request comes to:

GET /users


──────────────────────────────────────────────────────────────────────


Q23. How are arrow functions used in Express middleware?

Answer:

Example:

const authMiddleware = (req, res, next) => {
    console.log("Checking authentication");

    next();
};


Then:

app.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "Profile"
    });
});


Arrow functions are extremely common in:

routes
controllers
middleware
callbacks


──────────────────────────────────────────────────────────────────────


Q24. How are arrow functions used with Promises?

Answer:

Example:

fetch("/api/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });


Every:

(response) => ...

and:

(data) => ...

is an arrow function.


This is why arrow functions appear constantly in asynchronous JavaScript.


──────────────────────────────────────────────────────────────────────


Q25. Can an arrow function be async?

Answer:

YES.


Example:

const getUsers = async () => {
    const response = await fetch("/api/users");
    const users = await response.json();

    return users;
};


This is extremely common in MERN applications.


React:

const fetchUsers = async () => {
    // API call
};


Express:

const getUsers = async (req, res) => {
    // database operation
};


──────────────────────────────────────────────────────────────────────


Q26. What is the difference between function declaration and arrow function?

Answer:

Normal function:

function add(a, b) {
    return a + b;
}


Arrow function:

const add = (a, b) => {
    return a + b;
};


The arrow function is stored in a variable.


The normal function is declared directly.


Both can perform the same basic job.


But they differ in important behavior such as:

this
arguments
constructor behavior
hoisting


──────────────────────────────────────────────────────────────────────


Q27. Are arrow functions hoisted like function declarations?

Answer:

No.


Example:

greet();


function greet() {
    console.log("Hello");
}


This works because function declarations are hoisted.


But:

greet();


const greet = () => {
    console.log("Hello");
};


This causes an error.


Why?

Because:

const greet


is in the Temporal Dead Zone until initialization.


So think:

function declaration → can be called before declaration

const arrow function → cannot be used before initialization


──────────────────────────────────────────────────────────────────────


Q28. Does an arrow function have its own `arguments` object?

Answer:

No.


Normal function:

function test() {
    console.log(arguments);
}


has its own:

arguments


Arrow function:

const test = () => {
    console.log(arguments);
};


does NOT have its own arguments object.


Instead, it uses the surrounding scope's arguments if available.


For modern JavaScript, use REST parameters when you need variable arguments.


Example:

const add = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};


──────────────────────────────────────────────────────────────────────


Q29. What are rest parameters with arrow functions?

Answer:

Rest parameters collect multiple arguments into an array.

Example:

const add = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};


Calling:

add(10, 20, 30, 40);


numbers becomes:

[10, 20, 30, 40]


Output:

100


This is preferred over using the old arguments object.


──────────────────────────────────────────────────────────────────────


Q30. Can arrow functions be used with `new`?

Answer:

NO.


Arrow functions cannot be constructors.


This will fail:

const User = (name) => {
    this.name = name;
};

const user = new User("Navneet");


Arrow functions are not designed to be used with:

new


For normal MERN development, this is mainly something you should
understand rather than something you will frequently use.


──────────────────────────────────────────────────────────────────────


Q31. Do arrow functions have a prototype?

Answer:

No.


Normal functions can have a:

prototype


Arrow functions do not have their own prototype.


Again, this is mainly an interview/concept point.


You do not need to use this every day in MERN development.


──────────────────────────────────────────────────────────────────────


Q32. Can an arrow function return an object directly?

Answer:

YES.

But there is an important syntax rule.


This is WRONG:

const createUser = () => {
    name: "Navneet"
};


JavaScript interprets the braces as a function block.


Use parentheses:

const createUser = () => ({
    name: "Navneet"
});


Now the object is returned.


Output:

{
    name: "Navneet"
}


──────────────────────────────────────────────────────────────────────


Q33. Why are parentheses needed when returning an object?

Answer:

Because:

{}


after the arrow is normally interpreted as a function body.


Example:

const test = () => {
    // function body
};


But:

const test = () => ({
    name: "Navneet"
});


The parentheses tell JavaScript:

"This is an object that should be returned."


Remember this pattern:

() => ({ ... })


It is very common when transforming data with map().


──────────────────────────────────────────────────────────────────────


Q34. Real industry use case — Product transformation

Answer:

Suppose your backend returns:

const products = [
    {
        name: "Keyboard",
        price: 1500
    },
    {
        name: "Mouse",
        price: 800
    }
];


You want only names:

const productNames = products.map(
    (product) => product.name
);


Result:

[
    "Keyboard",
    "Mouse"
]


This exact type of transformation happens frequently
in React applications.


──────────────────────────────────────────────────────────────────────


Q35. Real industry use case — Authentication

Answer:

React may have:

const handleLogin = async () => {
    try {
        const response = await fetch("/api/login", {
            method: "POST"
        });

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
};


This combines:

arrow function
async
await
fetch
try/catch


These concepts work together constantly in MERN.


──────────────────────────────────────────────────────────────────────


Q36. Real industry use case — Express controller

Answer:

A controller may look like:

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch products"
        });
    }
};


This is a very realistic MERN pattern.


The controller itself is an:

async arrow function


──────────────────────────────────────────────────────────────────────


Q37. Should I use arrow functions everywhere?

Answer:

NO.


Arrow functions are excellent, but they are not automatically
better for every situation.


Use arrow functions commonly for:

callbacks
map/filter/reduce
React handlers
Express handlers
middleware
Promise callbacks
async functions
small utility functions


Use normal methods/functions when you specifically need:

dynamic `this`
constructor behavior
prototype behavior


──────────────────────────────────────────────────────────────────────


Q38. What is a common mistake with arrow functions?

Answer:

Forgetting the return when using curly braces.


Wrong:

const double = (num) => {
    num * 2
};


This returns:

undefined


Correct:

const double = (num) => {
    return num * 2;
};


OR:

const double = (num) => num * 2;


This is a VERY common mistake with map().


──────────────────────────────────────────────────────────────────────


Q39. What happens here?

const numbers = [1, 2, 3];

const result = numbers.map((num) => {
    num * 2;
});

console.log(result);


Answer:

[undefined, undefined, undefined]


Why?

Because curly braces create a function body,
and there is no return.


Correct:

const result = numbers.map((num) => {
    return num * 2;
});


OR:

const result = numbers.map((num) => num * 2);


──────────────────────────────────────────────────────────────────────


Q40. What happens here?

const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

console.log(result);


Answer:

[2, 4, 6]


Because:

num => num * 2


has an implicit return.


──────────────────────────────────────────────────────────────────────


Q41. Can arrow functions have default parameters?

Answer:

YES.


Example:

const greet = (name = "Guest") => {
    console.log("Hello " + name);
};


greet();


Output:

Hello Guest


──────────────────────────────────────────────────────────────────────


Q42. Can arrow functions use destructuring?

Answer:

YES.


Example:

const user = {
    name: "Navneet",
    age: 20
};


const printUser = ({ name, age }) => {
    console.log(name);
    console.log(age);
};


printUser(user);


This is very common when working with:

React props
API objects
Express request data
configuration objects


──────────────────────────────────────────────────────────────────────


Q43. How are arrow functions used with React props?

Answer:

Example:

function UserCard({ name, age }) {
    return (
        <div>
            {name}
            {age}
        </div>
    );
}


You can also have:

const UserCard = ({ name, age }) => {
    return (
        <div>
            {name}
            {age}
        </div>
    );
};


Arrow functions are very common for React components.


──────────────────────────────────────────────────────────────────────


Q44. What is the relationship between arrow functions and callbacks?

Answer:

Arrow functions are commonly used as callbacks.


Example:

const numbers = [1, 2, 3];


numbers.forEach((number) => {
    console.log(number);
});


Here:

(number) => {
    console.log(number);
}


is the callback.


You already learned that a callback is:

"A function passed to another function."


Arrow functions make callbacks shorter and cleaner.


──────────────────────────────────────────────────────────────────────


Q45. Can an arrow function return another function?

Answer:

YES.


Example:

const multiplier = (number) => {
    return (value) => value * number;
};


const double = multiplier(2);

console.log(double(5));


Output:

10


This is related to:

closures
higher-order functions
function factories


These concepts become useful in advanced JavaScript and
backend development.


──────────────────────────────────────────────────────────────────────


Q46. What is the most important arrow-function syntax I should memorize?

Answer:


1. No parameter:

const greet = () => {
    console.log("Hello");
};


2. One parameter:

const greet = (name) => {
    console.log(name);
};


3. Multiple parameters:

const add = (a, b) => {
    return a + b;
};


4. Implicit return:

const add = (a, b) => a + b;


5. Returning object:

const getUser = () => ({
    name: "Navneet"
});


6. Async arrow function:

const getUsers = async () => {
    // code
};


7. Rest parameters:

const add = (...numbers) => {
    // code
};


──────────────────────────────────────────────────────────────────────


                    PRACTICE QUESTIONS
                 Try answering before reading
──────────────────────────────────────────────────────────────────────


Q47. Convert this into an arrow function:

function greet() {
    console.log("Hello");
}


Answer:

const greet = () => {
    console.log("Hello");
};


──────────────────────────────────────────────────────────────────────


Q48. Convert this into an arrow function:

function add(a, b) {
    return a + b;
}


Answer:

const add = (a, b) => {
    return a + b;
};


──────────────────────────────────────────────────────────────────────


Q49. Make this shorter using implicit return:

const add = (a, b) => {
    return a + b;
};


Answer:

const add = (a, b) => a + b;


──────────────────────────────────────────────────────────────────────


Q50. What does this return?

const square = (num) => num * num;

console.log(square(5));


Answer:

25


──────────────────────────────────────────────────────────────────────


Q51. What does this return?

const greet = () => {
    return "Hello";
};

console.log(greet());


Answer:

Hello


──────────────────────────────────────────────────────────────────────


Q52. What is wrong here?

const double = (num) => {
    num * 2;
};


Answer:

There is no return.


Correct:

const double = (num) => {
    return num * 2;
};


OR:

const double = (num) => num * 2;


──────────────────────────────────────────────────────────────────────


Q53. What is the output?

const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 3);

console.log(result);


Answer:

[3, 6, 9]


──────────────────────────────────────────────────────────────────────


Q54. What is the output?

const users = [
    { name: "Navneet" },
    { name: "Rahul" }
];

const names = users.map((user) => user.name);

console.log(names);


Answer:

["Navneet", "Rahul"]


──────────────────────────────────────────────────────────────────────


Q55. What does this return?

const getUser = () => ({
    name: "Navneet",
    age: 20
});


Answer:

An object:

{
    name: "Navneet",
    age: 20
}


The parentheses around the object are important.


──────────────────────────────────────────────────────────────────────


Q56. What is wrong here?

const getUser = () => {
    name: "Navneet"
};


Answer:

The object is not being returned.


Correct:

const getUser = () => ({
    name: "Navneet"
});


OR:

const getUser = () => {
    return {
        name: "Navneet"
    };
};


──────────────────────────────────────────────────────────────────────


Q57. What happens here?

const greet = () => {
    console.log("Hello");
};

greet();


Answer:

Hello


──────────────────────────────────────────────────────────────────────


Q58. What happens here?

const numbers = [10, 20, 30];

const result = numbers.filter((num) => num > 15);

console.log(result);


Answer:

[20, 30]


Because filter keeps values where the callback returns true.


──────────────────────────────────────────────────────────────────────


Q59. What is wrong with this React code?

<button onClick={handleClick()}>
    Click
</button>


Answer:

handleClick() executes immediately during rendering.


Usually you want:

<button onClick={handleClick}>
    Click
</button>


If arguments are needed:

<button onClick={() => handleClick(10)}>
    Click
</button>


──────────────────────────────────────────────────────────────────────


Q60. What is the biggest difference regarding `this`?

Answer:

Normal function:

Can have its own `this` depending on how it is called.


Arrow function:

Does NOT have its own `this`.

It uses `this` from the surrounding scope.


Remember:

Arrow function → lexical this


──────────────────────────────────────────────────────────────────────


Q61. Should this be an arrow function?

const user = {
    name: "Navneet",

    greet: () => {
        console.log(this.name);
    }
};


Answer:

Usually NO, if you want `this` to refer to `user`.


Better:

const user = {
    name: "Navneet",

    greet() {
        console.log(this.name);
    }
};


──────────────────────────────────────────────────────────────────────


Q62. Can arrow functions be async?

Answer:

YES.

Example:

const getUsers = async () => {
    const response = await fetch("/api/users");
    return response.json();
};


Very common in MERN.


──────────────────────────────────────────────────────────────────────


Q63. Can arrow functions be used as Express route handlers?

Answer:

YES.


Example:

app.get("/products", async (req, res) => {
    const products = await Product.find();

    res.json(products);
});


Very common MERN pattern.


──────────────────────────────────────────────────────────────────────


Q64. Can arrow functions be used as React components?

Answer:

YES.


Example:

const UserCard = () => {
    return <div>User Card</div>;
};


Very common in modern React.


──────────────────────────────────────────────────────────────────────


Q65. Can arrow functions be used as callbacks?

Answer:

YES.

In fact, this is one of their most common uses.


Example:

users.map((user) => user.name);


The arrow function is the callback.


──────────────────────────────────────────────────────────────────────


Q66. What are the most important things I should know for MERN?

Answer:

You should be comfortable with:


1. Arrow function syntax

2. Parameters

3. Single parameter syntax

4. Multiple parameters

5. Implicit return

6. Explicit return

7. Returning objects

8. Arrow functions with map/filter/reduce

9. Arrow functions as callbacks

10. Arrow functions in React event handlers

11. Arrow functions as React components

12. Arrow functions in Express routes

13. Async arrow functions

14. Lexical `this`

15. Arrow functions do not have their own `this`

16. Arrow functions do not have their own `arguments`

17. Arrow functions cannot be used with `new`

18. Common mistakes with missing return

19. `onClick={handleClick}` vs `onClick={handleClick()}`

20. When NOT to use an arrow function


──────────────────────────────────────────────────────────────────────


                 REAL MERN MENTAL MODEL
──────────────────────────────────────────────────────────────────────


                  Arrow Function
                       |
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
      React          Express        JavaScript
        |              |              |
   event handler    route handler   callbacks
   component        middleware      map
   async function   controller       filter
                                  reduce
        |              |              |
        └──────────────┼──────────────┘
                       ↓
                 Business Logic
                       ↓
                    API/DB


Example full MERN flow:


User clicks Login

        ↓

React:

const handleLogin = async () => {
    // ...
};


        ↓

fetch()

        ↓

Express:

app.post("/login", async (req, res) => {
    // ...
});


        ↓

MongoDB:

await User.findOne(...)


        ↓

Response

        ↓

React state update


Arrow functions can appear at almost every stage.


──────────────────────────────────────────────────────────────────────


                    FINAL CHEAT SHEET
──────────────────────────────────────────────────────────────────────


Normal function:

function add(a, b) {
    return a + b;
}


Arrow function:

const add = (a, b) => {
    return a + b;
};


Implicit return:

const add = (a, b) => a + b;


One parameter:

const greet = (name) => name;


No parameter:

const greet = () => "Hello";


Return object:

const getUser = () => ({
    name: "Navneet"
});


Async arrow:

const getUsers = async () => {
    // async code
};


Callback:

users.map((user) => user.name);


Filter:

users.filter((user) => user.isActive);


React:

const handleClick = () => {
    // ...
};


Express:

app.get("/users", (req, res) => {
    // ...
});


IMPORTANT:

Arrow functions have lexical `this`.

Arrow functions do NOT have their own:

this
arguments
prototype


Arrow functions cannot be used with:

new


Common mistake:

const result = numbers.map((num) => {
    num * 2;
});


Wrong → returns undefined.


Correct:

const result = numbers.map((num) => {
    return num * 2;
});


OR:

const result = numbers.map((num) => num * 2);


──────────────────────────────────────────────────────────────────────


                 ONE-LINE INTERVIEW DEFINITION
──────────────────────────────────────────────────────────────────────


"An arrow function is a concise function syntax in JavaScript
that provides lexical `this` and is commonly used for callbacks,
React handlers, array methods, Express handlers, and asynchronous
operations."


──────────────────────────────────────────────────────────────────────


                 WHAT TO MASTER VS WHAT TO JUST KNOW
──────────────────────────────────────────────────────────────────────


MASTER THESE:

✓ Syntax
✓ Parameters
✓ Return
✓ Implicit return
✓ Object return
✓ Callbacks
✓ map/filter/reduce
✓ React handlers
✓ Express handlers
✓ Async arrow functions
✓ Lexical this
✓ Common mistakes


JUST UNDERSTAND THESE:

→ arguments
→ prototype
→ constructor behavior
→ new with arrow functions


You do NOT need to over-focus on the advanced internals
before you are comfortable with the practical concepts.


Final mental model:

Arrow function = shorter function syntax

        +

Lexical `this`

        +

Perfect for callbacks

        +

Extremely common in React

        +

Extremely common in Express

        +

Extremely common in modern JavaScript
*/