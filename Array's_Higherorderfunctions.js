/*
╔══════════════════════════════════════════════════════════════════════╗
║              ARRAY HIGHER-ORDER FUNCTIONS IN JAVASCRIPT            ║
║                 MERN DEVELOPER — IMPORTANT PARTS                   ║
╚══════════════════════════════════════════════════════════════════════╝


Q1. What is a Higher-Order Function?

Answer:

A Higher-Order Function (HOF) is a function that does at least
ONE of these two things:

1. Takes another function as an argument

OR

2. Returns another function


Example:

function calculate(a, b, operation) {
    return operation(a, b);
}


Here:

calculate() → Higher-Order Function

operation → Function passed as an argument


──────────────────────────────────────────────────────────────────────


Q2. What does "function passed as an argument" mean?

Answer:

Functions in JavaScript are values.

So you can pass a function to another function.

Example:

function greet() {
    console.log("Hello");
}


function execute(fn) {
    fn();
}


execute(greet);


Here:

greet → function

execute → receives a function

fn() → executes that function


This is the basic idea behind Higher-Order Functions.


──────────────────────────────────────────────────────────────────────


Q3. What is a callback function?

Answer:

A callback is a function passed to another function
so that the other function can call it later or during its work.


Example:

function greet(name) {
    console.log("Hello " + name);
}


function execute(callback) {
    callback("Navneet");
}


execute(greet);


Here:

greet → callback function

execute → Higher-Order Function


Remember:

Function passed into another function
        ↓
Callback


Function accepting/returning a function
        ↓
Higher-Order Function


──────────────────────────────────────────────────────────────────────


Q4. Why are array methods called Higher-Order Functions?

Answer:

Because methods such as:

map()
filter()
reduce()
forEach()
find()
some()
every()


accept a function as an argument.


Example:

const numbers = [1, 2, 3];


numbers.map((number) => {
    return number * 2;
});


Here:

map() → Higher-Order Function

(number) => number * 2 → Callback


This relationship is VERY important.


──────────────────────────────────────────────────────────────────────


Q5. What exactly happens inside map()?

Answer:

Suppose:

const numbers = [1, 2, 3];


You write:

const result = numbers.map((number) => {
    return number * 2;
});


Conceptually, JavaScript does something like:


Take 1
 ↓
callback(1)
 ↓
2


Take 2
 ↓
callback(2)
 ↓
4


Take 3
 ↓
callback(3)
 ↓
6


Final array:

[2, 4, 6]


The callback is executed for every element.


──────────────────────────────────────────────────────────────────────


Q6. What is the basic syntax of map()?

Answer:

array.map((element) => {
    // return new value
});


Example:

const numbers = [1, 2, 3];

const doubled = numbers.map((number) => {
    return number * 2;
});


Output:

[2, 4, 6]


Important:

map() returns a NEW array.


──────────────────────────────────────────────────────────────────────


Q7. What are the parameters provided to an array callback?

Answer:

Usually you can receive:

1. element
2. index
3. array


Example:

const users = ["A", "B", "C"];


users.map((user, index, array) => {
    console.log(user);
    console.log(index);
    console.log(array);
});


Usually you only need the first parameter.


Example:

users.map((user) => user.name);


Don't write unnecessary parameters.


──────────────────────────────────────────────────────────────────────


Q8. What is filter() as a Higher-Order Function?

Answer:

filter() accepts a callback function.

The callback must return:

true
or
false


Example:

const numbers = [10, 15, 20, 25];


const result = numbers.filter(
    (number) => number > 15
);


The callback is basically asking:

10 > 15 → false
15 > 15 → false
20 > 15 → true
25 > 15 → true


Result:

[20, 25]


filter() → keeps elements where callback returns true.


──────────────────────────────────────────────────────────────────────


Q9. What is map() vs filter()?

Answer:


map():

"I want to TRANSFORM every element."


Example:

[1, 2, 3]

map(x => x * 2)

↓

[2, 4, 6]


filter():

"I want to KEEP some elements."


Example:

[1, 2, 3, 4]

filter(x => x > 2)

↓

[3, 4]


Easy rule:

map → change

filter → select


──────────────────────────────────────────────────────────────────────


Q10. What is forEach() as a Higher-Order Function?

Answer:

forEach() accepts a callback and executes it
for every element.


Example:

const users = ["A", "B", "C"];


users.forEach((user) => {
    console.log(user);
});


Output:

A
B
C


Important:

forEach() does NOT create a new array.


Use it when you simply want to perform an action.


──────────────────────────────────────────────────────────────────────


Q11. What is map() vs forEach()?

Answer:


map():

Returns a new array.


const result = numbers.map(
    (number) => number * 2
);


forEach():

Does not return a useful new array.


numbers.forEach((number) => {
    console.log(number);
});


Think:


Need transformed array?
        ↓
      map()


Just perform an action?
        ↓
    forEach()


──────────────────────────────────────────────────────────────────────


Q12. What is reduce() as a Higher-Order Function?

Answer:

reduce() accepts a callback and combines all elements
into ONE final value.


Example:

const numbers = [10, 20, 30];


const total = numbers.reduce(
    (sum, number) => sum + number,
    0
);


Result:

60


Think:

map() → many → many

filter() → many → fewer

reduce() → many → ONE


──────────────────────────────────────────────────────────────────────


Q13. What are accumulator and current value in reduce()?

Answer:

Example:

const numbers = [10, 20, 30];


const total = numbers.reduce(
    (sum, number) => sum + number,
    0
);


Here:

sum → accumulator

number → current value

0 → initial value


Step-by-step:


Initial:

sum = 0


First:

0 + 10 = 10


Second:

10 + 20 = 30


Third:

30 + 30 = 60


Final:

60


──────────────────────────────────────────────────────────────────────


Q14. What is the real industry use of reduce()?

Answer:

Shopping cart.


Example:

const cart = [
    {
        name: "Keyboard",
        price: 1500,
        quantity: 2
    },
    {
        name: "Mouse",
        price: 800,
        quantity: 1
    }
];


const total = cart.reduce(
    (total, item) => {
        return total + item.price * item.quantity;
    },
    0
);


Result:

3800


This is a realistic e-commerce use case.


──────────────────────────────────────────────────────────────────────


Q15. What is find() as a Higher-Order Function?

Answer:

find() accepts a callback and returns the FIRST element
for which the callback returns true.


Example:

const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" }
];


const user = users.find(
    (user) => user.id === 2
);


Result:

{
    id: 2,
    name: "B"
}


Important:

find() returns ONE element.


If nothing matches:

undefined


──────────────────────────────────────────────────────────────────────


Q16. What is find() vs filter()?

Answer:


find():

Returns ONE matching element.


const user = users.find(
    (user) => user.id === 2
);


filter():

Returns ALL matching elements.


const users = users.filter(
    (user) => user.age >= 18
);


Think:


Need ONE?
→ find()


Need MANY?
→ filter()


──────────────────────────────────────────────────────────────────────


Q17. What is some()?

Answer:

some() checks whether AT LEAST ONE element satisfies
the condition.


Example:

const users = [
    { name: "A", isAdmin: false },
    { name: "B", isAdmin: true }
];


const hasAdmin = users.some(
    (user) => user.isAdmin
);


Result:

true


Because at least one user is an admin.


──────────────────────────────────────────────────────────────────────


Q18. What is every()?

Answer:

every() checks whether ALL elements satisfy the condition.


Example:

const numbers = [2, 4, 6];


const result = numbers.every(
    (number) => number % 2 === 0
);


Result:

true


All numbers are even.


──────────────────────────────────────────────────────────────────────


Q19. What is some() vs every()?

Answer:


some():

"Does AT LEAST ONE match?"


every():

"Do ALL match?"


Example:

const numbers = [2, 4, 5];


numbers.some((num) => num % 2 !== 0);

→ true


Because 5 is odd.


numbers.every((num) => num % 2 === 0);

→ false


Because 5 is not even.


──────────────────────────────────────────────────────────────────────


Q20. What is the difference between a callback and a Higher-Order Function?

Answer:

This distinction is important.


Callback:

The function being passed.


Example:

numbers.map((number) => number * 2);


Here:

(number) => number * 2

is the callback.


Higher-Order Function:

The function receiving the callback.


Here:

map()

is the Higher-Order Function.


So:

map() → HOF

arrow function → callback


──────────────────────────────────────────────────────────────────────


Q21. Is every callback an arrow function?

Answer:

NO.


A callback can be a normal function.


Example:

function double(number) {
    return number * 2;
}


const numbers = [1, 2, 3];


const result = numbers.map(double);


This works.


You can also write:

const result = numbers.map(
    (number) => number * 2
);


Both are valid.


Arrow functions are simply a convenient way to write callbacks.


──────────────────────────────────────────────────────────────────────


Q22. Why are arrow functions commonly used with array HOFs?

Answer:

Because they make small callbacks concise.


Instead of:

function double(number) {
    return number * 2;
}


You can write:

(number) => number * 2


So:

numbers.map((number) => number * 2);


is short and readable.


This is why you see arrow functions constantly
with array methods in modern JavaScript.


──────────────────────────────────────────────────────────────────────


Q23. Can we create our own Higher-Order Function?

Answer:

YES.


Example:

function calculate(a, b, operation) {
    return operation(a, b);
}


const result = calculate(
    10,
    5,
    (a, b) => a + b
);


Result:

15


Another:

const result = calculate(
    10,
    5,
    (a, b) => a * b
);


Result:

50


The same function can perform different operations
because we pass different callbacks.


──────────────────────────────────────────────────────────────────────


Q24. Why are Higher-Order Functions useful?

Answer:

They allow you to write reusable code.


Instead of writing:

calculateAddition()
calculateMultiplication()
calculateSubtraction()


You can create:

calculate(a, b, operation)


Then provide the operation.


This idea is heavily used in:

JavaScript
React
Express
Node.js
array methods
middleware
callbacks
functional programming


──────────────────────────────────────────────────────────────────────


Q25. What is a real React use case?

Answer:

Suppose the backend sends:

const products = [
    { id: 1, name: "Keyboard", price: 1500 },
    { id: 2, name: "Mouse", price: 800 },
    { id: 3, name: "Monitor", price: 5000 }
];


Display products:

products.map((product) => (
    <ProductCard
        key={product.id}
        product={product}
    />
));


Here:

map()

is a Higher-Order Function.


The arrow function:

(product) => ...


is the callback.


This is one of the most common HOF patterns in React.


──────────────────────────────────────────────────────────────────────


Q26. Real React use case — Search products

Answer:

Suppose the user searches:

"mouse"


You can filter:

const filteredProducts = products.filter(
    (product) =>
        product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
);


Flow:


products

↓

filter()

↓

matching products

↓

map()

↓

render cards


This combination is extremely common in real applications.


──────────────────────────────────────────────────────────────────────


Q27. Real React use case — Cart total

Answer:

const cart = [
    { name: "Keyboard", price: 1500, quantity: 2 },
    { name: "Mouse", price: 800, quantity: 1 }
];


const total = cart.reduce(
    (sum, item) =>
        sum + item.price * item.quantity,
    0
);


React can display:

<p>Total: ₹{total}</p>


Here:

reduce()

is a Higher-Order Function.


──────────────────────────────────────────────────────────────────────


Q28. Real Express use case — Route handler

Answer:

Express APIs commonly use functions as callbacks.


Example:

app.get("/users", (req, res) => {
    res.json(users);
});


The function:

(req, res) => {
    res.json(users);
}


is passed to:

app.get()


Express later calls it when the request arrives.


This is the same fundamental idea:

Function passed to another function.


──────────────────────────────────────────────────────────────────────


Q29. Real Express use case — Middleware

Answer:

Example:

const authMiddleware = (req, res, next) => {
    console.log("Checking authentication");

    next();
};


Then:

app.get(
    "/profile",
    authMiddleware,
    (req, res) => {
        res.json({
            message: "Profile"
        });
    }
);


Express receives functions and executes them
at the appropriate time.


This is another practical example of
functions being treated as values.


──────────────────────────────────────────────────────────────────────


Q30. What is function composition with array HOFs?

Answer:

You can combine multiple HOFs.


Example:

const users = [
    { name: "A", age: 20, active: true },
    { name: "B", age: 17, active: true },
    { name: "C", age: 25, active: false }
];


const result = users
    .filter((user) => user.active)
    .filter((user) => user.age >= 18)
    .map((user) => user.name);


Result:

["A"]


Flow:


users

↓

filter active

↓

filter adults

↓

map names

↓

["A"]


This style is very common in frontend applications.


──────────────────────────────────────────────────────────────────────


Q31. Can array HOFs be chained?

Answer:

YES.


Example:

const numbers = [1, 2, 3, 4, 5];


const result = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * 10);


Step 1:

[1, 2, 3, 4, 5]


filter:

[2, 4]


map:

[20, 40]


Final:

[20, 40]


──────────────────────────────────────────────────────────────────────


Q32. What is the important rule about map() return?

Answer:

map() expects the callback to produce a value
for each element.


Wrong:

const result = numbers.map((number) => {
    number * 2;
});


Result:

[undefined, undefined, undefined]


Correct:

const result = numbers.map((number) => {
    return number * 2;
});


Or:

const result = numbers.map(
    (number) => number * 2
);


This is one of the most common beginner mistakes.


──────────────────────────────────────────────────────────────────────


Q33. What is the important rule about filter() return?

Answer:

filter() expects the callback to return a
truthy/falsy value.


Example:

const result = numbers.filter(
    (number) => number > 10
);


If:

number > 10 → true

element stays.


If:

number > 10 → false

element is removed.


So:

map → return transformed value

filter → return true/false


──────────────────────────────────────────────────────────────────────


Q34. What is the important rule about find()?

Answer:

find() uses the callback as a condition.


Example:

const user = users.find(
    (user) => user.id === 10
);


Once it finds the first matching element,
it returns that element.


If nothing matches:

undefined


──────────────────────────────────────────────────────────────────────


Q35. What is the important rule about some()?

Answer:

some() stops when it finds a matching element.


Example:

const result = users.some(
    (user) => user.isAdmin
);


As soon as an admin is found:

true


is returned.


It does not need to check every remaining element.


──────────────────────────────────────────────────────────────────────


Q36. What is the important rule about every()?

Answer:

every() stops when it finds an element that fails
the condition.


Example:

const result = users.every(
    (user) => user.isActive
);


If one user is inactive:

false


is returned.


It doesn't need to check the remaining users.


──────────────────────────────────────────────────────────────────────


Q37. What is a very important async mistake with forEach()?

Answer:

Do NOT expect forEach() to wait for async callbacks.


Example:

users.forEach(async (user) => {
    await fetchUserData(user.id);
});


The outer code does not wait for all those operations.


For sequential operations:

for (const user of users) {
    await fetchUserData(user.id);
}


For independent parallel operations:

await Promise.all(
    users.map((user) => fetchUserData(user.id))
);


This is very important in Node.js/MERN applications.


──────────────────────────────────────────────────────────────────────


Q38. Why is map() useful with Promise.all()?

Answer:

Because map() can convert an array of data
into an array of Promises.


Example:

const promises = users.map(
    (user) => fetchUserData(user.id)
);


Now:

promises

might look conceptually like:

[
    Promise,
    Promise,
    Promise
]


Then:

const results = await Promise.all(promises);


This waits for all of them.


This pattern is very common in backend development.


──────────────────────────────────────────────────────────────────────


Q39. Are array HOFs asynchronous?

Answer:

NO.

Methods such as:

map()
filter()
reduce()
forEach()
find()
some()
every()


are normally synchronous.


Example:

const result = numbers.map(
    (number) => number * 2
);


It runs immediately.


The callback itself CAN start asynchronous work,
but the array method itself does not automatically wait
for that work.


This distinction is important.


──────────────────────────────────────────────────────────────────────


Q40. What is the difference between synchronous and asynchronous callbacks?

Answer:

Synchronous callback:

numbers.map((number) => {
    return number * 2;
});


The callback executes immediately as part of map().


Asynchronous callback:

users.map(async (user) => {
    return await fetchUser(user.id);
});


Now the callback returns Promises.


map() itself still finishes synchronously
and gives you an array of Promises.


That's why we use:

Promise.all()


──────────────────────────────────────────────────────────────────────


Q41. Can reduce() create objects?

Answer:

YES.

This is a very useful advanced pattern.


Example:

const users = [
    { name: "A", role: "admin" },
    { name: "B", role: "user" },
    { name: "C", role: "admin" }
];


const grouped = users.reduce(
    (result, user) => {

        if (!result[user.role]) {
            result[user.role] = [];
        }

        result[user.role].push(user);

        return result;
    },
    {}
);


Result conceptually:

{
    admin: [
        { name: "A", role: "admin" },
        { name: "C", role: "admin" }
    ],

    user: [
        { name: "B", role: "user" }
    ]
}


This is useful for:

grouping
analytics
dashboards
reports
data transformation


You don't need to master this immediately,
but understand the idea.


──────────────────────────────────────────────────────────────────────


Q42. What is a common performance mistake with HOFs?

Answer:

Unnecessary multiple passes over huge arrays.


Example:

const result = users
    .filter(...)
    .map(...)
    .filter(...)
    .map(...);


This is readable and often completely fine.


But for very large datasets or performance-critical code,
multiple passes may matter.


Don't optimize prematurely.


For normal React/MERN applications:

Readable code is usually more important.


──────────────────────────────────────────────────────────────────────


Q43. Does map() modify the original array?

Answer:

No.


Example:

const numbers = [1, 2, 3];


const result = numbers.map(
    (number) => number * 2
);


Original:

[1, 2, 3]


Result:

[2, 4, 6]


The original array remains unchanged.


──────────────────────────────────────────────────────────────────────


Q44. Does filter() modify the original array?

Answer:

No.


Example:

const numbers = [1, 2, 3, 4];


const result = numbers.filter(
    (number) => number > 2
);


Original:

[1, 2, 3, 4]


Result:

[3, 4]


──────────────────────────────────────────────────────────────────────


Q45. Does reduce() modify the original array?

Answer:

The reduce() method itself does not modify the array.


Example:

const numbers = [1, 2, 3];


const total = numbers.reduce(
    (sum, number) => sum + number,
    0
);


Original remains:

[1, 2, 3]


However, remember that your callback could intentionally
mutate objects or other data. The method itself doesn't
automatically mutate the array.


──────────────────────────────────────────────────────────────────────


Q46. What are the most important Array Higher-Order Functions?

Answer:


map()

→ transform every element


filter()

→ select elements


reduce()

→ produce one final result


forEach()

→ perform an action for each element


find()

→ find first matching element


findIndex()

→ find index of first match


some()

→ at least one matches?


every()

→ do all match?


sort()

→ sort using a comparison callback


These are the main ones you should know.


──────────────────────────────────────────────────────────────────────


                    PRACTICE QUESTIONS
                 Try answering before reading
──────────────────────────────────────────────────────────────────────


Q47. What is a Higher-Order Function?

Answer:

A function that:

1. accepts another function as an argument

OR

2. returns another function.


──────────────────────────────────────────────────────────────────────


Q48. What is a callback function?

Answer:

A function passed to another function.


Example:

numbers.map((number) => number * 2);


Here:

(number) => number * 2

is the callback.


──────────────────────────────────────────────────────────────────────


Q49. Which one is the Higher-Order Function?

numbers.map((number) => number * 2);


Answer:

map()


The arrow function is the callback.


──────────────────────────────────────────────────────────────────────


Q50. What does map() do?

Answer:

It transforms every element and returns a new array.


──────────────────────────────────────────────────────────────────────


Q51. What does filter() do?

Answer:

It creates a new array containing elements
whose callback returns true.


──────────────────────────────────────────────────────────────────────


Q52. What does reduce() do?

Answer:

It reduces an array into one final value.


──────────────────────────────────────────────────────────────────────


Q53. What does find() return?

Answer:

The first matching element.


If nothing matches:

undefined


──────────────────────────────────────────────────────────────────────


Q54. What does some() return?

Answer:

true if at least one element satisfies the condition.

Otherwise:

false


──────────────────────────────────────────────────────────────────────


Q55. What does every() return?

Answer:

true only if every element satisfies the condition.


──────────────────────────────────────────────────────────────────────


Q56. What does forEach() return?

Answer:

It returns:

undefined


It is used to perform an action for each element,
not to create a transformed array.


──────────────────────────────────────────────────────────────────────


Q57. What is the output?

const numbers = [1, 2, 3];

const result = numbers.map(
    (num) => num * 2
);

console.log(result);


Answer:

[2, 4, 6]


──────────────────────────────────────────────────────────────────────


Q58. What is the output?

const numbers = [1, 2, 3, 4];

const result = numbers.filter(
    (num) => num % 2 === 0
);

console.log(result);


Answer:

[2, 4]


──────────────────────────────────────────────────────────────────────


Q59. What is the output?

const numbers = [10, 20, 30];

const result = numbers.reduce(
    (sum, num) => sum + num,
    0
);

console.log(result);


Answer:

60


──────────────────────────────────────────────────────────────────────


Q60. What is the output?

const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];

const user = users.find(
    (user) => user.id === 2
);

console.log(user.name);


Answer:

B


──────────────────────────────────────────────────────────────────────


Q61. What is the output?

const users = [
    { name: "A", isAdmin: false },
    { name: "B", isAdmin: true }
];

console.log(
    users.some((user) => user.isAdmin)
);


Answer:

true


──────────────────────────────────────────────────────────────────────


Q62. What is the output?

const numbers = [2, 4, 6];

console.log(
    numbers.every((num) => num % 2 === 0)
);


Answer:

true


──────────────────────────────────────────────────────────────────────


Q63. What is wrong here?

const numbers = [1, 2, 3];

const result = numbers.map((num) => {
    num * 2;
});


Answer:

There is no return.


Correct:

const result = numbers.map((num) => {
    return num * 2;
});


OR:

const result = numbers.map(
    (num) => num * 2
);


──────────────────────────────────────────────────────────────────────


Q64. Which one should you use?

"Get the names of all users."


Answer:

map()


Example:

const names = users.map(
    (user) => user.name
);


──────────────────────────────────────────────────────────────────────


Q65. Which one should you use?

"Get all users older than 18."


Answer:

filter()


Example:

const adults = users.filter(
    (user) => user.age > 18
);


──────────────────────────────────────────────────────────────────────


Q66. Which one should you use?

"Find the user with ID 10."


Answer:

find()


Example:

const user = users.find(
    (user) => user.id === 10
);


──────────────────────────────────────────────────────────────────────


Q67. Which one should you use?

"Calculate the total price of all products."


Answer:

reduce()


──────────────────────────────────────────────────────────────────────


Q68. Which one should you use?

"Check if at least one user is an admin."


Answer:

some()


──────────────────────────────────────────────────────────────────────


Q69. Which one should you use?

"Check if every product is in stock."


Answer:

every()


──────────────────────────────────────────────────────────────────────


Q70. Which one should you use?

"Print every username to the console."


Answer:

forEach()


──────────────────────────────────────────────────────────────────────


Q71. What is the output?

const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * 10);

console.log(result);


Answer:

[20, 40]


Flow:

[1,2,3,4,5]

↓

filter even

[2,4]

↓

map × 10

[20,40]


──────────────────────────────────────────────────────────────────────


Q72. What is happening here?

const results = await Promise.all(
    users.map((user) => fetchUser(user.id))
);


Answer:

1. users is an array.

2. map() runs the callback for every user.

3. Each callback returns a Promise.

4. map() creates an array of Promises.

5. Promise.all() waits for all of them.

6. results contains the resolved values.


This is a very important real-world async pattern.


──────────────────────────────────────────────────────────────────────


Q73. What is the difference?

users.map((user) => user.name);


vs


users.forEach((user) => {
    console.log(user.name);
});


Answer:


map():

Creates a new array of names.


forEach():

Simply prints each name.


Use:

map → when you need transformed data

forEach → when you need an action


──────────────────────────────────────────────────────────────────────


Q74. What is the difference?

users.find((user) => user.role === "admin");


vs


users.filter((user) => user.role === "admin");


Answer:


find():

Returns the first admin.


filter():

Returns all admins.


──────────────────────────────────────────────────────────────────────


Q75. What is the difference?

users.some((user) => user.isAdmin);


vs


users.every((user) => user.isAdmin);


Answer:


some():

At least one admin?


every():

Are all users admins?


──────────────────────────────────────────────────────────────────────


Q76. Write code to get names of active users.

Answer:

const activeNames = users
    .filter((user) => user.isActive)
    .map((user) => user.name);


Flow:

users

↓

filter active users

↓

map their names


──────────────────────────────────────────────────────────────────────


Q77. Write code to calculate cart total.

Answer:

const total = cart.reduce(
    (sum, item) =>
        sum + item.price * item.quantity,
    0
);


──────────────────────────────────────────────────────────────────────


Q78. Write code to check if any product is out of stock.

Answer:

const hasOutOfStock = products.some(
    (product) => !product.inStock
);


──────────────────────────────────────────────────────────────────────


Q79. Write code to check whether all products are in stock.

Answer:

const allInStock = products.every(
    (product) => product.inStock
);


──────────────────────────────────────────────────────────────────────


Q80. Write code to find a product by ID.

Answer:

const product = products.find(
    (product) => product.id === productId
);


──────────────────────────────────────────────────────────────────────


Q81. Write your own Higher-Order Function.

Answer:

function calculate(a, b, operation) {
    return operation(a, b);
}


const result = calculate(
    10,
    5,
    (a, b) => a + b
);


Output:

15


Here:

calculate → HOF

(a, b) => a + b → callback


──────────────────────────────────────────────────────────────────────


                 FINAL MERN CHEAT SHEET
──────────────────────────────────────────────────────────────────────


HIGHER-ORDER FUNCTION

A function that:

→ accepts a function

OR

→ returns a function


CALLBACK

A function passed to another function.


ARRAY HOFs

map()
filter()
reduce()
forEach()
find()
findIndex()
some()
every()
sort()


──────────────────────────────────────────────────────────────────────


MAP

Transform every element.

users.map(
    (user) => user.name
);


MANY → MANY


──────────────────────────────────────────────────────────────────────


FILTER

Select elements.

users.filter(
    (user) => user.isActive
);


MANY → FEWER


──────────────────────────────────────────────────────────────────────


FIND

Find one element.

users.find(
    (user) => user.id === 10
);


MANY → ONE


──────────────────────────────────────────────────────────────────────


REDUCE

Combine into one result.

cart.reduce(
    (total, item) =>
        total + item.price,
    0
);


MANY → ONE RESULT


──────────────────────────────────────────────────────────────────────


SOME

At least one?


users.some(
    (user) => user.isAdmin
);


──────────────────────────────────────────────────────────────────────


EVERY

All?


users.every(
    (user) => user.isActive
);


──────────────────────────────────────────────────────────────────────


FOREACH

Perform an action for each item.

users.forEach(
    (user) => console.log(user.name)
);


──────────────────────────────────────────────────────────────────────


                   MERN CONNECTION
──────────────────────────────────────────────────────────────────────


                 API Response
                      ↓
              Array of Objects
                      ↓
        ┌─────────────┼──────────────┐
        ↓             ↓              ↓
      filter()      map()         find()
        ↓             ↓              ↓
     Select         Transform      One item
        │             │              │
        └─────────────┼──────────────┘
                      ↓
                 React UI


For calculations:

Array
  ↓
reduce()
  ↓
Cart total / Revenue / Statistics


For async operations:

Array
  ↓
map()
  ↓
Array of Promises
  ↓
Promise.all()
  ↓
Results


For Express:

app.get(
    "/users",
    (req, res) => {
        // callback
    }
);


Function passed to another function
        ↓
Same fundamental Higher-Order Function idea.


──────────────────────────────────────────────────────────────────────


                 WHAT YOU SHOULD MASTER
──────────────────────────────────────────────────────────────────────


VERY IMPORTANT:

✓ What is a Higher-Order Function?

✓ What is a callback?

✓ map()

✓ filter()

✓ reduce()

✓ forEach()

✓ find()

✓ some()

✓ every()

✓ Array of Objects

✓ Arrow functions as callbacks

✓ Chaining HOFs

✓ map() vs filter()

✓ map() vs forEach()

✓ find() vs filter()

✓ some() vs every()

✓ reduce() accumulator

✓ Async map() + Promise.all()

✓ forEach() + async mistake

✓ React list rendering

✓ React state updates using map/filter/spread


UNDERSTAND BUT DON'T OVER-FOCUS:

→ Custom Higher-Order Functions

→ Function composition

→ Grouping with reduce()

→ Performance of multiple array passes


──────────────────────────────────────────────────────────────────────


                 THE ONE MENTAL MODEL TO REMEMBER
──────────────────────────────────────────────────────────────────────


Array

  ↓

Give me a function

  ↓

HOF executes that function
for each element / until condition

  ↓

Callback produces a result

  ↓

You get:

map      → new transformed array

filter   → selected array

find     → first matching item

reduce   → one final value

some     → true/false

every    → true/false

forEach  → perform an action


This is the core idea behind
Array Higher-Order Functions in JavaScript.


If you understand this properly, you will start seeing
the same pattern everywhere in React, Node.js and Express:

DATA
  ↓
FUNCTION
  ↓
PROCESS
  ↓
RESULT
*/