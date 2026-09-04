/*
╔══════════════════════════════════════════════════════════════╗
║                  JAVASCRIPT ARRAYS                          ║
║        COMPLETE GUIDE FOR A MERN STACK DEVELOPER            ║
╚══════════════════════════════════════════════════════════════╝


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. WHAT IS AN ARRAY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An array is a data structure used to store multiple values
inside a single variable.

Example:

const fruits = ["Apple", "Mango", "Banana"];

Instead of:

const fruit1 = "Apple";
const fruit2 = "Mango";
const fruit3 = "Banana";

we can use:

const fruits = ["Apple", "Mango", "Banana"];


WHY ARE ARRAYS IMPORTANT IN MERN?

Because backend APIs commonly return collections of data.

Example API response:

[
    {
        "_id": "101",
        "name": "Laptop",
        "price": 50000
    },
    {
        "_id": "102",
        "name": "Phone",
        "price": 30000
    }
]

That entire response is an ARRAY of objects.


Real MERN flow:

MongoDB
   ↓
Express API
   ↓
JSON Array
   ↓
React
   ↓
UI list


Example:

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 }
];


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. CREATING ARRAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Using array literal:

const numbers = [10, 20, 30];


Empty array:

const users = [];


Array can contain different data types:

const data = [
    "Navneet",
    20,
    true,
    null,
    { city: "Indore" }
];

JavaScript allows this.

BUT:

In real applications, keep arrays logically consistent.

Good:

const prices = [100, 200, 300];

Avoid unnecessarily mixing unrelated types.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. ARRAY INDEX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Array indexing starts from 0.

const fruits = [
    "Apple",
    "Mango",
    "Banana"
];

Index:

Apple  → 0
Mango  → 1
Banana → 2


Access:

console.log(fruits[0]);

Output:

Apple


console.log(fruits[2]);

Output:

Banana


Important:

Array length = 3

Last index = length - 1

Therefore:

fruits[fruits.length - 1]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. ARRAY LENGTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const users = ["A", "B", "C"];

console.log(users.length);

Output:

3


IMPORTANT:

length tells you the number of elements,
not the last index.


Example:

length = 3

indexes:

0
1
2


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. MODIFYING ARRAY ELEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const users = ["A", "B", "C"];

users[1] = "Navneet";

console.log(users);

Output:

["A", "Navneet", "C"]


Arrays are mutable.

That means their contents can be changed.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. ADDING ELEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


push()

Adds element at the END.

const users = ["A", "B"];

users.push("C");

console.log(users);

Output:

["A", "B", "C"]


Real use case:

After creating a new item locally:

cart.push(product);


------------------------------------------------------------

unshift()

Adds element at the BEGINNING.

const users = ["B", "C"];

users.unshift("A");

Output:

["A", "B", "C"]


Usually less preferred for large arrays because existing
elements may need to be shifted.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. REMOVING ELEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


pop()

Removes the LAST element.

const users = ["A", "B", "C"];

users.pop();

Output:

["A", "B"]


------------------------------------------------------------

shift()

Removes the FIRST element.

const users = ["A", "B", "C"];

users.shift();

Output:

["B", "C"]


------------------------------------------------------------

splice()

Can:

- Add
- Remove
- Replace

Example:

const users = ["A", "B", "C"];

users.splice(1, 1);

Output:

["A", "C"]


Explanation:

splice(startIndex, deleteCount)


Example:

users.splice(1, 0, "Navneet");

Output:

["A", "Navneet", "B", "C"]


VERY IMPORTANT:

splice() MUTATES the original array.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. slice() VS splice()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a very common interview question.

slice():

→ does NOT mutate original array
→ returns a portion of array

const numbers = [10, 20, 30, 40];

const result = numbers.slice(1, 3);

console.log(result);

Output:

[20, 30]

Original:

[10, 20, 30, 40]


------------------------------------------------------------

splice():

→ MUTATES original array
→ adds/removes/replaces elements

Example:

const numbers = [10, 20, 30, 40];

numbers.splice(1, 2);

numbers becomes:

[10, 40]


Remember:

slice  → copy/portion
splice → modify original


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
9. SEARCHING IN ARRAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


indexOf()

const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.indexOf("Mango"));

Output:

1


If not found:

-1


------------------------------------------------------------

includes()

const fruits = ["Apple", "Mango"];

console.log(fruits.includes("Mango"));

Output:

true


Real use case:

if (permissions.includes("delete_user")) {

    // allow deletion

}


------------------------------------------------------------

find()

Returns the FIRST matching element.

const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];

const user = users.find(user => user.id === 2);

Output:

{ id: 2, name: "B" }


------------------------------------------------------------

findIndex()

Returns index of first matching element.

const index = users.findIndex(
    user => user.id === 2
);

Output:

1


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10. map()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

map() transforms every element and returns a NEW array.

Example:

const prices = [100, 200, 300];

const discountedPrices = prices.map(
    price => price * 0.9
);

Output:

[90, 180, 270]


Think:

INPUT ARRAY
     ↓
TRANSFORMATION
     ↓
NEW ARRAY


REAL MERN EXAMPLE:

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 }
];

const names = products.map(
    product => product.name
);

Output:

["Laptop", "Phone"]


REACT:

products.map(product => (
    <ProductCard
        key={product._id}
        product={product}
    />
));


This is something you will use constantly in React.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
11. filter()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

filter() creates a NEW array containing elements that satisfy
a condition.

Example:

const numbers = [10, 15, 20, 25];

const result = numbers.filter(
    num => num > 15
);

Output:

[20, 25]


REAL MERN:

const products = products.filter(
    product => product.stock > 0
);

Now only products that are in stock remain.


Authentication example:

const admins = users.filter(
    user => user.role === "admin"
);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
12. reduce()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

reduce() converts an array into a single accumulated result.

Example:

const prices = [100, 200, 300];

const total = prices.reduce(
    (sum, price) => sum + price,
    0
);

Output:

600


REAL E-COMMERCE USE CASE:

const cart = [
    { price: 1000, quantity: 2 },
    { price: 500, quantity: 3 }
];

const total = cart.reduce(
    (total, item) =>
        total + item.price * item.quantity,
    0
);

Output:

3500


This is extremely useful for:

- Cart totals
- Revenue calculations
- Order totals
- Statistics
- Aggregation
- Counting


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
13. forEach()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

forEach() executes a function for each element.

Example:

const users = ["A", "B", "C"];

users.forEach(user => {
    console.log(user);
});


Important:

forEach() does NOT return a new transformed array.


Use:

map()
→ when you need a new array


Use:

forEach()
→ when you just want to perform an action


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
14. some()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

some() checks whether AT LEAST ONE element satisfies
the condition.

const users = [
    { role: "user" },
    { role: "admin" }
];

const hasAdmin = users.some(
    user => user.role === "admin"
);

Output:

true


Real use:

const hasOutOfStock = products.some(
    product => product.stock === 0
);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
15. every()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

every() checks whether ALL elements satisfy a condition.

const products = [
    { stock: 10 },
    { stock: 20 },
    { stock: 5 }
];

const result = products.every(
    product => product.stock > 0
);

Output:

true


Real use:

Check whether all items in an order are valid.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
16. sort()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

sort() sorts an array.

IMPORTANT:

sort() MUTATES the original array.

For numbers, this can surprise beginners.

Example:

const numbers = [10, 2, 30];

numbers.sort();

Unexpected:

[10, 2, 30]

because default sorting is based on string-like comparison.


Correct numeric sorting:

numbers.sort((a, b) => a - b);

Output:

[2, 10, 30]


Descending:

numbers.sort((a, b) => b - a);


REAL MERN USE CASE:

Sort products by price:

products.sort(
    (a, b) => a.price - b.price
);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
17. reverse()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

reverse() reverses an array.

const numbers = [1, 2, 3];

numbers.reverse();

Output:

[3, 2, 1]

IMPORTANT:

reverse() MUTATES the original array.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
18. JOIN()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

join() converts array into a string.

const skills = [
    "React",
    "Node",
    "MongoDB"
];

console.log(skills.join(", "));

Output:

React, Node, MongoDB


REAL USE:

Displaying tags:

React | Node.js | MongoDB


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
19. SPLIT() VS JOIN()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

split():

String → Array

const text = "React,Node,MongoDB";

const result = text.split(",");

Output:

["React", "Node", "MongoDB"]


join():

Array → String

const skills = ["React", "Node", "MongoDB"];

const result = skills.join(",");

Output:

"React,Node,MongoDB"


Remember:

split → string to array
join  → array to string


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
20. CONCAT()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Combines arrays.

const a = [1, 2];
const b = [3, 4];

const result = a.concat(b);

Output:

[1, 2, 3, 4]


Modern alternative:

const result = [...a, ...b];


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
21. SPREAD OPERATOR WITH ARRAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Spread operator:

...

Example:

const numbers = [1, 2, 3];

const copy = [...numbers];


Add elements:

const newNumbers = [
    ...numbers,
    4
];

Output:

[1, 2, 3, 4]


Combine:

const a = [1, 2];
const b = [3, 4];

const result = [...a, ...b];

Output:

[1, 2, 3, 4]


VERY IMPORTANT IN REACT.

Instead of mutating:

users.push(newUser);


Prefer:

setUsers(prevUsers => [
    ...prevUsers,
    newUser
]);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
22. ARRAY DESTRUCTURING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example:

const users = [
    "Navneet",
    "Rahul",
    "Aman"
];

const [first, second, third] = users;

console.log(first);

Output:

Navneet


Very common in React:

const [count, setCount] = useState(0);


This is array destructuring.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
23. REST VS SPREAD IN ARRAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Spread:

Expands values.

const numbers = [1, 2, 3];

const copy = [...numbers];


Rest:

Collects values.

const [first, ...remaining] =
    [1, 2, 3, 4];

first:

1

remaining:

[2, 3, 4]


Remember:

... on RHS → Spread
... in parameter/destructuring → Rest


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
24. ARRAY REFERENCE BEHAVIOUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Very important.

const a = [1, 2, 3];

const b = a;

b.push(4);

console.log(a);

Output:

[1, 2, 3, 4]


WHY?

Because a and b point to the SAME array.

Concept:

a ─────┐
       │
       ▼
   [1,2,3]
       ▲
       │
b ─────┘


They don't contain independent copies.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
25. COPYING AN ARRAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use spread:

const a = [1, 2, 3];

const b = [...a];

b.push(4);

console.log(a);

Output:

[1, 2, 3]

console.log(b);

Output:

[1, 2, 3, 4]


Now they are different arrays.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
26. SHALLOW COPY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMPORTANT:

Spread only creates a SHALLOW copy.

Example:

const users = [
    {
        name: "Navneet"
    }
];

const copy = [...users];

copy[0].name = "Rahul";

console.log(users[0].name);

Output:

Rahul


WHY?

The outer array is copied.

But the object inside is still the same reference.


Concept:

users array
    ↓
 [ object ] ← same object ← copy array


For nested data, you need to understand
shallow vs deep copying properly.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
27. IMMUTABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In React, you should generally avoid directly mutating
state arrays.

BAD:

users.push(newUser);

setUsers(users);


BETTER:

setUsers(prevUsers => [
    ...prevUsers,
    newUser
]);


Remove:

setUsers(prevUsers =>
    prevUsers.filter(
        user => user.id !== userId
    )
);


Update:

setUsers(prevUsers =>
    prevUsers.map(user =>
        user.id === userId
            ? { ...user, name: "Rahul" }
            : user
    )
);


These patterns are EXTREMELY important for React.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
28. ARRAY OF OBJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is probably the MOST IMPORTANT array structure
for MERN development.

Example:

const users = [

    {
        id: 1,
        name: "Navneet",
        role: "admin"
    },

    {
        id: 2,
        name: "Rahul",
        role: "user"
    }

];


Access:

users[0].name

Output:

Navneet


Filter:

const admins = users.filter(
    user => user.role === "admin"
);


Map:

const names = users.map(
    user => user.name
);


Find:

const user = users.find(
    user => user.id === 2
);


This structure appears everywhere:

API responses
MongoDB documents
React state
Tables
Dashboards
Orders
Products
Users


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
29. NESTED ARRAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Arrays can contain arrays.

const matrix = [
    [1, 2],
    [3, 4]
];

Access:

matrix[0][1]

Output:

2


Real use cases:

- Matrix problems
- Grid data
- Charts
- Coordinates
- Nested product variants


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
30. FLAT()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

flat() converts nested arrays into a flatter array.

const numbers = [
    [1, 2],
    [3, 4]
];

const result = numbers.flat();

Output:

[1, 2, 3, 4]


For deeper nesting:

const data = [1, [2, [3, 4]]];

data.flat(Infinity);

Output:

[1, 2, 3, 4]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
31. flatMap()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

flatMap() combines:

map()
+
flat()

Example:

const numbers = [1, 2, 3];

const result = numbers.flatMap(
    num => [num, num * 2]
);

Output:

[
    1, 2,
    2, 4,
    3, 6
]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
32. OPTIONAL CHAINING WITH ARRAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose API data may not exist.

const firstUser = users?.[0];


If users is null/undefined,
it won't immediately throw an error.


Common API/React usage:

const name = response?.data?.users?.[0]?.name;


This is very useful when dealing with
potentially incomplete API responses.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
33. ARRAY-LIKE VS ARRAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Not everything that looks like an array is actually an array.

Example:

NodeList
arguments
HTMLCollection

Check:

Array.isArray(value);


Example:

Array.isArray([1, 2, 3]);

Output:

true


Array.isArray("hello");

Output:

false


Important:

Use Array.isArray()
instead of:

typeof value === "array"

because:

typeof [] === "object"


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
34. CONVERTING ARRAY-LIKE VALUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Array.from()

Example:

const text = "HELLO";

const result = Array.from(text);

Output:

["H", "E", "L", "L", "O"]


Can also convert iterable/array-like structures.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
35. EMPTY ARRAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const users = [];

console.log(users.length);

Output:

0


Check:

if (users.length === 0) {

    console.log("No users");

}


Important:

[] is truthy.

Therefore:

if ([]) {
    console.log("Runs");
}

It WILL run.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
36. ARRAY TRUTHINESS TRAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMPORTANT INTERVIEW QUESTION.

console.log(Boolean([]));

Output:

true


console.log(Boolean([1, 2]));

Output:

true


Even empty array is truthy.

So don't do:

if (users) {

    // users exist

}

if you specifically want to check whether
there are elements.

Use:

if (users.length > 0) {

}


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
37. DELETING ARRAY ELEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Avoid:

delete users[1];


Because it creates a hole.

Example:

const users = ["A", "B", "C"];

delete users[1];

Result behaves like:

["A", empty, "C"]


For removing an element, prefer:

splice()

or, in React:

filter()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
38. MUTATING VS NON-MUTATING METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MUTATING:

push()
pop()
shift()
unshift()
splice()
sort()
reverse()


These modify the original array.


NON-MUTATING / RETURN NEW RESULT:

map()
filter()
slice()
concat()
flat()
flatMap()


Modern JavaScript also has non-mutating counterparts such as:

toSorted()
toReversed()
toSpliced()

These are useful when you want the transformed
array without mutating the original.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
39. CHAINING ARRAY METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Very important in real applications.

Example:

const products = [
    { name: "Laptop", price: 50000, stock: 10 },
    { name: "Phone", price: 30000, stock: 0 },
    { name: "Tablet", price: 20000, stock: 5 }
];

const result = products
    .filter(product => product.stock > 0)
    .filter(product => product.price > 25000)
    .map(product => product.name);

Output:

["Laptop"]


Flow:

products
   ↓
filter stock
   ↓
filter price
   ↓
map name
   ↓
["Laptop"]


This pattern is VERY common in React dashboards.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
40. ARRAY + API RESPONSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine backend returns:

{
    "success": true,
    "users": [
        {
            "id": 1,
            "name": "A"
        },
        {
            "id": 2,
            "name": "B"
        }
    ]
}


React:

const users = response.data.users;


Render:

users.map(user => (
    <UserCard
        key={user.id}
        user={user}
    />
));


This is one of the most important
MERN array use cases.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
41. ARRAY + CART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example:

const cart = [
    {
        productId: 1,
        name: "Laptop",
        price: 50000,
        quantity: 2
    },
    {
        productId: 2,
        name: "Mouse",
        price: 1000,
        quantity: 3
    }
];


Total:

const total = cart.reduce(
    (sum, item) =>
        sum + item.price * item.quantity,
    0
);

Output:

103000


This is exactly the kind of logic
you will encounter in e-commerce applications.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
42. ARRAY + SEARCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const products = [
    { name: "Laptop" },
    { name: "Phone" },
    { name: "Tablet" }
];

const searchTerm = "lap";

const result = products.filter(product =>
    product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
);


Output:

[
    { name: "Laptop" }
]


This pattern is used for:

Search bars
Product filtering
User tables
Admin dashboards


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
43. ARRAY + PAGINATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose we have:

const users = [...];

Page size:

10

Page:

2

We can calculate:

const start = (page - 1) * pageSize;

const end = start + pageSize;

const pageUsers = users.slice(start, end);


For page 2:

start = 10

end = 20

Therefore:

users.slice(10, 20)


Important:

Real production applications usually perform pagination
on the DATABASE/API side rather than loading thousands
of records into the browser first.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
44. ARRAY + ASYNC OPERATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Very important MERN concept.

Suppose:

const userIds = [1, 2, 3];


You want to fetch all users.

Use:

const users = await Promise.all(
    userIds.map(id => fetchUser(id))
);


Flow:

userIds
   ↓
map()
   ↓
Promise for each user
   ↓
Promise.all()
   ↓
wait for all
   ↓
users array


DO NOT blindly use:

userIds.forEach(async id => {
    await fetchUser(id);
});


because forEach doesn't wait for async callbacks.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
45. ARRAY PERFORMANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Common operations:

Access by index:

arr[i]

Usually:

O(1)


Search:

includes()
indexOf()
find()

Usually:

O(n)


map():

O(n)


filter():

O(n)


reduce():

O(n)


Sorting:

Usually:

O(n log n)


Important for interviews.

If you repeatedly search a huge collection by ID,
an object/Map may sometimes be more appropriate than
scanning an array.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
46. ARRAY VS OBJECT VS MAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ARRAY:

Use when you have an ordered collection.

Example:

const products = [
    product1,
    product2,
    product3
];


OBJECT:

Useful for key-value data.

const user = {
    name: "Navneet",
    age: 20
};


MAP:

Useful for key-value collections where Map's features
and semantics are appropriate.

const usersById = new Map();

usersById.set("101", user);


Simple mental model:

Many ordered items
        ↓
      Array

One entity / properties
        ↓
      Object

Key → value lookup collection
        ↓
       Map


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
47. COMMON INTERVIEW TRAPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


TRAP 1:

console.log(typeof []);

ANSWER:

"object"


------------------------------------------------------------

TRAP 2:

console.log(Array.isArray([]));

ANSWER:

true


------------------------------------------------------------

TRAP 3:

console.log([] === []);

ANSWER:

false

Because they are two different array objects.


------------------------------------------------------------

TRAP 4:

const a = [];
const b = a;

console.log(a === b);

ANSWER:

true

Both point to the same array.


------------------------------------------------------------

TRAP 5:

const a = [1, 2];
const b = [1, 2];

console.log(a === b);

ANSWER:

false

Different references.


------------------------------------------------------------

TRAP 6:

console.log([1, 2, 3].map(x => x * 2));

ANSWER:

[2, 4, 6]


------------------------------------------------------------

TRAP 7:

const result = [1, 2, 3].forEach(
    x => x * 2
);

console.log(result);

ANSWER:

undefined


------------------------------------------------------------

TRAP 8:

const numbers = [10, 2, 5];

numbers.sort();

console.log(numbers);

ANSWER:

[10, 2, 5]

Because default sort compares string representations.

Correct:

numbers.sort((a, b) => a - b);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
48. MOST IMPORTANT ARRAY METHODS TO MASTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You don't need to memorize every method immediately.

MASTER THESE FIRST:

1. push()
2. pop()
3. shift()
4. unshift()
5. splice()
6. slice()

7. map()
8. filter()
9. reduce()
10. forEach()

11. find()
12. findIndex()
13. some()
14. every()

15. includes()
16. indexOf()

17. sort()
18. reverse()

19. join()
20. concat()

21. flat()
22. flatMap()

And concepts:

23. spread
24. destructuring
25. shallow copy
26. reference
27. immutability


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
49. MERN DEVELOPER ARRAY CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Need to transform every item?
        ↓
      map()


Need matching items?
        ↓
     filter()


Need ONE matching item?
        ↓
      find()


Need index of matching item?
        ↓
   findIndex()


Need ONE final result?
        ↓
     reduce()


Need to perform an action?
        ↓
    forEach()


Need at least one match?
        ↓
      some()


Need every item to match?
        ↓
     every()


Need to check existence?
        ↓
    includes()


Need portion without mutation?
        ↓
      slice()


Need to modify array?
        ↓
      splice()


Need to add at end?
        ↓
      push()


Need to remove from end?
        ↓
       pop()


Need immutable copy?
        ↓
      [...array]


Need array → string?
        ↓
      join()


Need string → array?
        ↓
      split()


Need flatten nested array?
        ↓
       flat()


Need async operations in parallel?
        ↓
Promise.all(array.map(...))


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
50. THE MOST IMPORTANT MERN MENTAL MODEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine your backend gives React:

[
    {
        _id: "1",
        name: "Laptop",
        price: 50000,
        stock: 10
    },
    {
        _id: "2",
        name: "Phone",
        price: 30000,
        stock: 0
    }
]


You should immediately think:

DISPLAY:
    map()

SEARCH:
    filter()

FIND ONE:
    find()

CHECK:
    some() / every()

CALCULATE:
    reduce()

COPY:
    [...array]

UPDATE:
    map()

DELETE:
    filter()

SORT:
    toSorted() / sort()

RENDER:
    map()

ASYNC PROCESSING:
    Promise.all(
        array.map(...)
    )


That mental model will make React + Node.js development
MUCH easier.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
51. WHAT YOU SHOULD BE ABLE TO DO WITHOUT HELP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before moving ahead from arrays, you should be comfortable
solving these problems:

✔ Find maximum/minimum
✔ Find duplicates
✔ Remove duplicates
✔ Reverse an array
✔ Count frequencies
✔ Search objects
✔ Filter objects
✔ Sort objects
✔ Calculate totals
✔ Group data
✔ Transform API data
✔ Add item immutably
✔ Delete item immutably
✔ Update item immutably
✔ Flatten nested arrays
✔ Merge arrays
✔ Destructure arrays
✔ Copy arrays
✔ Understand references
✔ Chain map/filter/reduce
✔ Use Promise.all() with map()
✔ Render arrays in React
✔ Understand MongoDB/API arrays

*/


/*
╔══════════════════════════════════════════════════════════════╗
║                    JAVASCRIPT ARRAYS                        ║
║          COMPLETE QUESTIONS + ANSWERS                       ║
║       BEGINNER → ADVANCED → MERN → INTERVIEW                ║
╚══════════════════════════════════════════════════════════════╝


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 1 — ARRAY FUNDAMENTALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q1. What is an array?

ANSWER:

An array is a data structure used to store multiple values
inside a single variable.

Example:

const fruits = ["Apple", "Mango", "Banana"];

Instead of:

const fruit1 = "Apple";
const fruit2 = "Mango";
const fruit3 = "Banana";

we can store them together:

const fruits = ["Apple", "Mango", "Banana"];


------------------------------------------------------------

Q2. How do you create an array?

ANSWER:

Using array literal:

const numbers = [10, 20, 30];


Empty array:

const users = [];


Using Array constructor:

const numbers = new Array(10, 20, 30);

But in normal JavaScript code, prefer:

const numbers = [10, 20, 30];


------------------------------------------------------------

Q3. Can an array contain different data types?

ANSWER:

YES.

const data = [
    "Navneet",
    20,
    true,
    null,
    { city: "Indore" },
    [1, 2, 3]
];

JavaScript allows it.

However, in real applications, arrays are usually
logically consistent.

Example:

const prices = [100, 200, 300];

is better than:

const prices = [100, "200", true, null];


------------------------------------------------------------

Q4. What is the index of the first element?

ANSWER:

0

Example:

const fruits = ["Apple", "Mango", "Banana"];

Apple  → index 0
Mango  → index 1
Banana → index 2


------------------------------------------------------------

Q5. What will be the output?

const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]);
console.log(fruits[2]);

ANSWER:

Apple
Banana


------------------------------------------------------------

Q6. What happens if you access an index that doesn't exist?

const fruits = ["Apple", "Mango"];

console.log(fruits[5]);

ANSWER:

undefined


------------------------------------------------------------

Q7. What is array.length?

ANSWER:

It gives the number of elements in the array.

const numbers = [10, 20, 30];

console.log(numbers.length);

Output:

3

Important:

Last index = length - 1

So:

numbers[numbers.length - 1]

returns the last element.


------------------------------------------------------------

Q8. How do you get the last element of an array?

ANSWER:

const numbers = [10, 20, 30];

console.log(numbers[numbers.length - 1]);

Output:

30

Modern alternative:

console.log(numbers.at(-1));

Output:

30


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 2 — ADDING AND REMOVING ELEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q9. What does push() do?

ANSWER:

Adds one or more elements to the END of an array.

const numbers = [1, 2];

numbers.push(3);

console.log(numbers);

Output:

[1, 2, 3]

push() mutates the original array.


------------------------------------------------------------

Q10. What does pop() do?

ANSWER:

Removes the LAST element.

const numbers = [1, 2, 3];

const result = numbers.pop();

console.log(result);
console.log(numbers);

Output:

3
[1, 2]


------------------------------------------------------------

Q11. What does shift() do?

ANSWER:

Removes the FIRST element.

const numbers = [1, 2, 3];

numbers.shift();

console.log(numbers);

Output:

[2, 3]


------------------------------------------------------------

Q12. What does unshift() do?

ANSWER:

Adds elements to the BEGINNING.

const numbers = [2, 3];

numbers.unshift(1);

console.log(numbers);

Output:

[1, 2, 3]


------------------------------------------------------------

Q13. Which methods add/remove elements?

ANSWER:

push()
→ add at end

pop()
→ remove from end

unshift()
→ add at beginning

shift()
→ remove from beginning


------------------------------------------------------------

Q14. Which is generally faster:

push() or unshift()?

ANSWER:

push() is generally O(1).

unshift() is generally O(n), because existing elements
usually have to be shifted.

Therefore:

Adding at end → push()

Adding at beginning → unshift()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 3 — SPLICE AND SLICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q15. What does splice() do?

ANSWER:

splice() can:

- Add elements
- Remove elements
- Replace elements

Example:

const numbers = [10, 20, 30, 40];

numbers.splice(1, 2);

console.log(numbers);

Output:

[10, 40]


Syntax:

array.splice(startIndex, deleteCount)


------------------------------------------------------------

Q16. What will be the output?

const numbers = [10, 20, 30, 40];

numbers.splice(1, 1);

console.log(numbers);

ANSWER:

[10, 30, 40]


20 was removed.


------------------------------------------------------------

Q17. How do you insert an element using splice()?

ANSWER:

const numbers = [10, 20, 40];

numbers.splice(2, 0, 30);

console.log(numbers);

Output:

[10, 20, 30, 40]

0 means:

"Delete nothing."


------------------------------------------------------------

Q18. How do you replace an element using splice()?

ANSWER:

const numbers = [10, 20, 30];

numbers.splice(1, 1, 200);

console.log(numbers);

Output:

[10, 200, 30]


------------------------------------------------------------

Q19. Does splice() mutate the original array?

ANSWER:

YES.

const numbers = [1, 2, 3];

numbers.splice(1, 1);

The original array is changed.


------------------------------------------------------------

Q20. What does slice() do?

ANSWER:

slice() returns a portion of an array WITHOUT changing
the original array.

const numbers = [10, 20, 30, 40];

const result = numbers.slice(1, 3);

console.log(result);

Output:

[20, 30]

Original:

[10, 20, 30, 40]


------------------------------------------------------------

Q21. Difference between slice() and splice()?

ANSWER:

slice():

→ Doesn't mutate
→ Returns a portion


splice():

→ Mutates
→ Adds/removes/replaces


Remember:

slice  = take a portion

splice = modify the array


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 4 — SEARCHING ARRAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q22. What does indexOf() do?

ANSWER:

Returns the index of the first matching element.

const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.indexOf("Mango"));

Output:

1

If not found:

-1


------------------------------------------------------------

Q23. What does includes() do?

ANSWER:

Checks whether an array contains a value.

const skills = [
    "JavaScript",
    "React",
    "Node"
];

console.log(skills.includes("React"));

Output:

true


------------------------------------------------------------

Q24. Difference between indexOf() and includes()?

ANSWER:

indexOf():

Returns index.

includes():

Returns true/false.


Example:

skills.indexOf("React");

→ 1


skills.includes("React");

→ true


------------------------------------------------------------

Q25. What does find() do?

ANSWER:

Returns the FIRST element satisfying a condition.

const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" }
];

const user = users.find(
    user => user.id === 2
);

console.log(user);

Output:

{ id: 2, name: "B" }


------------------------------------------------------------

Q26. What does findIndex() do?

ANSWER:

Returns the index of the FIRST matching element.

const users = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
];

const index = users.findIndex(
    user => user.id === 2
);

console.log(index);

Output:

1


------------------------------------------------------------

Q27. Difference between find() and filter()?

ANSWER:

find():

Returns ONE matching element.

filter():

Returns ALL matching elements.

Example:

users.find(user => user.role === "admin");


returns:

one admin


users.filter(user => user.role === "admin");


returns:

all admins


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 5 — MAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q28. What does map() do?

ANSWER:

map() executes a callback for every element and creates
a NEW array containing the returned values.

Example:

const numbers = [1, 2, 3];

const result = numbers.map(
    num => num * 2
);

console.log(result);

Output:

[2, 4, 6]


------------------------------------------------------------

Q29. Does map() modify the original array?

ANSWER:

No.

const numbers = [1, 2, 3];

const result = numbers.map(
    num => num * 2
);

numbers:

[1, 2, 3]

result:

[2, 4, 6]


------------------------------------------------------------

Q30. What happens if you don't return from map()?

const numbers = [1, 2, 3];

const result = numbers.map(num => {
    num * 2;
});

console.log(result);

ANSWER:

[undefined, undefined, undefined]

Correct:

const result = numbers.map(num => {
    return num * 2;
});


------------------------------------------------------------

Q31. What parameters does a map() callback receive?

ANSWER:

Usually:

1. Current element
2. Index
3. Entire array

Example:

numbers.map((value, index, array) => {

    console.log(value);
    console.log(index);
    console.log(array);

});


------------------------------------------------------------

Q32. Convert an array of users into an array of names.

const users = [
    { name: "Navneet", age: 20 },
    { name: "Rahul", age: 21 }
];

ANSWER:

const names = users.map(
    user => user.name
);

Output:

["Navneet", "Rahul"]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 6 — FILTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q33. What does filter() do?

ANSWER:

filter() creates a NEW array containing elements for which
the callback returns true.

Example:

const numbers = [10, 15, 20, 25];

const result = numbers.filter(
    num => num > 15
);

Output:

[20, 25]


------------------------------------------------------------

Q34. What does the filter callback return?

ANSWER:

true  → keep element

false → remove element


------------------------------------------------------------

Q35. Get all even numbers.

ANSWER:

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(
    num => num % 2 === 0
);

Output:

[2, 4, 6]


------------------------------------------------------------

Q36. Get all active users.

const users = [
    { name: "A", active: true },
    { name: "B", active: false },
    { name: "C", active: true }
];

ANSWER:

const activeUsers = users.filter(
    user => user.active
);


Output:

A
C


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 7 — REDUCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q37. What does reduce() do?

ANSWER:

reduce() processes an array and builds a single result.

Example:

const numbers = [10, 20, 30];

const total = numbers.reduce(
    (sum, num) => sum + num,
    0
);

Output:

60


------------------------------------------------------------

Q38. What is an accumulator?

ANSWER:

The accumulator stores the result accumulated so far.

Example:

numbers.reduce((sum, num) => {

    return sum + num;

}, 0);


sum → accumulator

num → current element

0 → initial value


------------------------------------------------------------

Q39. Calculate the total price of products.

const products = [
    { price: 100 },
    { price: 200 },
    { price: 300 }
];

ANSWER:

const total = products.reduce(
    (sum, product) => sum + product.price,
    0
);

Output:

600


------------------------------------------------------------

Q40. Calculate cart total using quantity.

const cart = [
    { price: 1000, quantity: 2 },
    { price: 500, quantity: 3 }
];

ANSWER:

const total = cart.reduce(
    (sum, item) =>
        sum + item.price * item.quantity,
    0
);

Output:

3500


------------------------------------------------------------

Q41. Count how many times each value appears.

const numbers = [1, 2, 2, 3, 3, 3];

ANSWER:

const frequency = numbers.reduce(
    (acc, num) => {

        acc[num] = (acc[num] || 0) + 1;

        return acc;

    },
    {}
);

Output:

{
    1: 1,
    2: 2,
    3: 3
}


This is an important interview pattern.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 8 — FOREACH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q42. What does forEach() do?

ANSWER:

It executes a callback for every element.

Example:

const users = ["A", "B", "C"];

users.forEach(user => {
    console.log(user);
});

Output:

A
B
C


------------------------------------------------------------

Q43. Difference between map() and forEach()?

ANSWER:

map():

Used when you want a NEW transformed array.

const result = numbers.map(
    num => num * 2
);


forEach():

Used when you simply want to perform an action.

numbers.forEach(num => {
    console.log(num);
});


Simple rule:

Need new array → map()

Just perform action → forEach()


------------------------------------------------------------

Q44. What is the output?

const result = [1, 2, 3].forEach(
    num => num * 2
);

console.log(result);

ANSWER:

undefined

forEach() does not return the transformed array.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 9 — SOME AND EVERY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q45. What does some() do?

ANSWER:

Checks whether AT LEAST ONE element satisfies a condition.

const numbers = [1, 3, 5, 8];

const result = numbers.some(
    num => num % 2 === 0
);

console.log(result);

Output:

true


------------------------------------------------------------

Q46. What does every() do?

ANSWER:

Checks whether ALL elements satisfy a condition.

const numbers = [2, 4, 6];

const result = numbers.every(
    num => num % 2 === 0
);

Output:

true


------------------------------------------------------------

Q47. Difference between some() and every()?

ANSWER:

some():

At least ONE must satisfy.

every():

ALL must satisfy.


Real example:

some():

"Does the cart contain an out-of-stock item?"


every():

"Are all cart items valid?"


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 10 — SORTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q48. What does sort() do?

ANSWER:

Sorts an array.

Example:

const names = ["Charlie", "Alice", "Bob"];

names.sort();

Output:

["Alice", "Bob", "Charlie"]


IMPORTANT:

sort() mutates the original array.


------------------------------------------------------------

Q49. Why does this give an unexpected result?

const numbers = [10, 2, 30];

numbers.sort();

ANSWER:

Default sort compares elements as strings.

Therefore numeric arrays should use:

numbers.sort((a, b) => a - b);


Output:

[2, 10, 30]


------------------------------------------------------------

Q50. Sort numbers in descending order.

ANSWER:

numbers.sort((a, b) => b - a);


------------------------------------------------------------

Q51. Sort products by price.

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 30000 }
];

ANSWER:

products.sort(
    (a, b) => a.price - b.price
);


Result:

Phone
Tablet
Laptop


------------------------------------------------------------

Q52. How can you sort without mutating the original array?

ANSWER:

Modern:

const sorted = products.toSorted(
    (a, b) => a.price - b.price
);


Or:

const sorted = [...products].sort(
    (a, b) => a.price - b.price
);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 11 — REVERSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q53. What does reverse() do?

ANSWER:

Reverses the array.

const numbers = [1, 2, 3];

numbers.reverse();

Output:

[3, 2, 1]


Important:

reverse() mutates the original array.


------------------------------------------------------------

Q54. Reverse without modifying the original array.

ANSWER:

const numbers = [1, 2, 3];

const reversed = [...numbers].reverse();


Modern:

const reversed = numbers.toReversed();


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 12 — JOIN, SPLIT, CONCAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q55. What does join() do?

ANSWER:

Converts an array into a string.

const skills = [
    "React",
    "Node",
    "MongoDB"
];

console.log(skills.join(", "));

Output:

React, Node, MongoDB


------------------------------------------------------------

Q56. What does split() do?

ANSWER:

Converts a string into an array.

const text = "React,Node,MongoDB";

const result = text.split(",");

Output:

["React", "Node", "MongoDB"]


Remember:

split:

String → Array


join:

Array → String


------------------------------------------------------------

Q57. What does concat() do?

ANSWER:

Combines arrays.

const a = [1, 2];

const b = [3, 4];

const result = a.concat(b);

Output:

[1, 2, 3, 4]


Modern alternative:

const result = [...a, ...b];


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 13 — SPREAD AND DESTRUCTURING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q58. How do you copy an array using spread?

ANSWER:

const original = [1, 2, 3];

const copy = [...original];


------------------------------------------------------------

Q59. Why is this dangerous?

const a = [1, 2, 3];

const b = a;

b.push(4);

console.log(a);

ANSWER:

Output:

[1, 2, 3, 4]

Because:

a and b reference the SAME array.


------------------------------------------------------------

Q60. What is the difference?

const a = [1, 2, 3];

const b = a;

VS:

const b = [...a];


ANSWER:

b = a

→ same reference


b = [...a]

→ new outer array


------------------------------------------------------------

Q61. How do you merge arrays using spread?

ANSWER:

const frontend = ["React", "CSS"];

const backend = ["Node", "Express"];

const skills = [
    ...frontend,
    ...backend
];

Output:

[
    "React",
    "CSS",
    "Node",
    "Express"
]


------------------------------------------------------------

Q62. What is array destructuring?

ANSWER:

Extracting values from an array into variables.

const users = [
    "Navneet",
    "Rahul",
    "Aman"
];

const [first, second, third] = users;

console.log(first);

Output:

Navneet


------------------------------------------------------------

Q63. Skip an array element using destructuring.

ANSWER:

const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first);
console.log(third);

Output:

10
30


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 14 — ARRAY OF OBJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q64. Why is an array of objects extremely important in MERN?

ANSWER:

Because APIs and databases commonly deal with collections
of documents/entities.

Example:

const users = [

    {
        id: 1,
        name: "Navneet",
        role: "admin"
    },

    {
        id: 2,
        name: "Rahul",
        role: "user"
    }

];


This structure appears in:

MongoDB results
REST APIs
React state
Tables
Dashboards
E-commerce
Admin panels


------------------------------------------------------------

Q65. Get the names of all users.

ANSWER:

const names = users.map(
    user => user.name
);


------------------------------------------------------------

Q66. Get only admins.

ANSWER:

const admins = users.filter(
    user => user.role === "admin"
);


------------------------------------------------------------

Q67. Find user with id 2.

ANSWER:

const user = users.find(
    user => user.id === 2
);


------------------------------------------------------------

Q68. Update one user's name without mutating the array.

ANSWER:

const updatedUsers = users.map(user => {

    if (user.id === 2) {

        return {
            ...user,
            name: "Amit"
        };

    }

    return user;
});


This pattern is VERY important in React.


------------------------------------------------------------

Q69. Delete one user without mutating the array.

ANSWER:

const updatedUsers = users.filter(
    user => user.id !== 2
);


This is also extremely common in React.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 15 — IMMUTABILITY IN REACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q70. Why should we avoid directly mutating React state arrays?

ANSWER:

Because React state updates are expected to be handled
through state setters, and immutable updates make changes
predictable and help React detect state changes correctly.

BAD:

users.push(newUser);

setUsers(users);


BETTER:

setUsers(prevUsers => [
    ...prevUsers,
    newUser
]);


------------------------------------------------------------

Q71. How do you add an item immutably?

ANSWER:

setItems(prevItems => [
    ...prevItems,
    newItem
]);


------------------------------------------------------------

Q72. How do you remove an item immutably?

ANSWER:

setItems(prevItems =>
    prevItems.filter(
        item => item.id !== id
    )
);


------------------------------------------------------------

Q73. How do you update an item immutably?

ANSWER:

setItems(prevItems =>
    prevItems.map(item =>
        item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
    )
);


This pattern is worth mastering.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 16 — SHALLOW COPY AND REFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q74. What is a shallow copy?

ANSWER:

A shallow copy creates a new outer array,
but nested objects/arrays can still share references.

Example:

const users = [
    { name: "Navneet" }
];

const copy = [...users];

copy[0].name = "Rahul";

console.log(users[0].name);

Output:

Rahul


The outer arrays are different,
but the nested object is shared.


------------------------------------------------------------

Q75. What will be the output?

const a = [1, 2, 3];

const b = [...a];

console.log(a === b);

ANSWER:

false

Different array objects.


------------------------------------------------------------

Q76. What will be the output?

const a = [1, 2, 3];

const b = a;

console.log(a === b);

ANSWER:

true

Same reference.


------------------------------------------------------------

Q77. What will be the output?

console.log([] === []);

ANSWER:

false

Each [] creates a different array object.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 17 — NESTED ARRAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q78. What is a nested array?

ANSWER:

An array containing another array.

Example:

const matrix = [
    [1, 2],
    [3, 4]
];


------------------------------------------------------------

Q79. Access the value 4.

const matrix = [
    [1, 2],
    [3, 4]
];

ANSWER:

console.log(matrix[1][1]);

Output:

4


------------------------------------------------------------

Q80. What does flat() do?

ANSWER:

It flattens nested arrays.

const numbers = [
    [1, 2],
    [3, 4]
];

console.log(numbers.flat());

Output:

[1, 2, 3, 4]


------------------------------------------------------------

Q81. What does flat(Infinity) do?

ANSWER:

It recursively flattens nested arrays to all levels.

const data = [
    1,
    [2, [3, [4]]]
];

console.log(data.flat(Infinity));

Output:

[1, 2, 3, 4]


------------------------------------------------------------

Q82. What does flatMap() combine?

ANSWER:

map()
+
one level of flat()


Example:

const numbers = [1, 2, 3];

const result = numbers.flatMap(
    num => [num, num * 2]
);

Output:

[
    1, 2,
    2, 4,
    3, 6
]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 18 — TRUTHY/FALSY ARRAY TRAPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q83. Is an empty array truthy or falsy?

ANSWER:

TRUTHY.

Boolean([])

→ true


Very important.


------------------------------------------------------------

Q84. What is the output?

if ([]) {
    console.log("Hello");
}

ANSWER:

Hello

Because [] is truthy.


------------------------------------------------------------

Q85. How do you check whether an array is empty?

ANSWER:

if (arr.length === 0) {

    console.log("Empty");

}


To check non-empty:

if (arr.length > 0) {

}


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 19 — ARRAY TYPE CHECKING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q86. What is:

typeof []

ANSWER:

"object"


This is a famous JavaScript quirk.


------------------------------------------------------------

Q87. How do you correctly check whether something is an array?

ANSWER:

Array.isArray(value)


Example:

Array.isArray([1, 2, 3]);

Output:

true


Array.isArray("hello");

Output:

false


------------------------------------------------------------

Q88. Why shouldn't you use:

typeof value === "array"

ANSWER:

Because JavaScript's typeof operator does not return
"array".

For arrays:

typeof [] === "object"


Use:

Array.isArray(value)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 20 — DELETE TRAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q89. Why should you avoid delete arr[index]?

ANSWER:

Because it removes the value but leaves a hole.

Example:

const users = ["A", "B", "C"];

delete users[1];

The array becomes conceptually:

["A", empty, "C"]


For normal removal, use:

splice()

or immutable:

filter()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 21 — CHAINING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q90. What is array method chaining?

ANSWER:

Using the result of one array method as the input
to another.

Example:

const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 10);

Output:

[20, 40]


Flow:

[1,2,3,4,5]
      ↓
   filter
      ↓
   [2,4]
      ↓
    map
      ↓
   [20,40]


------------------------------------------------------------

Q91. Solve this:

Get names of active users whose age is above 18.

ANSWER:

const result = users
    .filter(user => user.active)
    .filter(user => user.age > 18)
    .map(user => user.name);


------------------------------------------------------------

Q92. Calculate total price of all products
that are currently in stock.

ANSWER:

const total = products
    .filter(product => product.stock > 0)
    .reduce(
        (sum, product) =>
            sum + product.price,
        0
    );


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 22 — MERN/API USE CASES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q93. Your Express API returns an array of users.
How would React render them?

ANSWER:

users.map(user => (

    <UserCard
        key={user._id}
        user={user}
    />

));


This is one of the most common array patterns in React.


------------------------------------------------------------

Q94. Why is key important when rendering arrays in React?

ANSWER:

React uses the key to identify list items between renders.

Example:

users.map(user => (

    <UserCard
        key={user._id}
        user={user}
    />

));


Prefer a stable unique ID from the data.

Avoid using array index as key when list items
can be reordered, inserted, or removed.


------------------------------------------------------------

Q95. How would you implement product search?

ANSWER:

const filteredProducts = products.filter(
    product =>
        product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
);


------------------------------------------------------------

Q96. How would you filter products by category?

ANSWER:

const filteredProducts = products.filter(
    product => product.category === selectedCategory
);


------------------------------------------------------------

Q97. How would you calculate a shopping cart total?

ANSWER:

const total = cart.reduce(
    (sum, item) =>
        sum + item.price * item.quantity,
    0
);


------------------------------------------------------------

Q98. How would you check whether a cart contains
an out-of-stock item?

ANSWER:

const hasOutOfStock = cart.some(
    item => item.stock === 0
);


------------------------------------------------------------

Q99. How would you check whether all cart items
have valid quantities?

ANSWER:

const validCart = cart.every(
    item => item.quantity > 0
);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 23 — ASYNC + ARRAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q100. How do you perform async operations for every
element in parallel?

ANSWER:

const results = await Promise.all(
    users.map(user => fetchUserData(user.id))
);


Flow:

users
  ↓
map()
  ↓
Promise for each user
  ↓
Promise.all()
  ↓
wait for all
  ↓
results


------------------------------------------------------------

Q101. Why can forEach(async () => {}) be problematic?

ANSWER:

Because forEach() does not wait for async callbacks.

Example:

users.forEach(async user => {

    await saveUser(user);

});

console.log("Done");


"Done" may execute before all saveUser()
operations complete.


------------------------------------------------------------

Q102. How do you process async operations sequentially?

ANSWER:

for (const user of users) {

    await saveUser(user);

}

Here each operation waits for the previous one.


------------------------------------------------------------

Q103. How do you process independent async operations
in parallel?

ANSWER:

await Promise.all(
    users.map(user => saveUser(user))
);


Rule:

Need sequential processing:

for...of + await


Independent operations:

Promise.all(
    array.map(...)
)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 24 — ARRAY PERFORMANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q104. What is the typical time complexity of accessing
an array element by index?

ANSWER:

O(1)

Example:

arr[500];


Direct index access is generally constant time.


------------------------------------------------------------

Q105. What is the typical time complexity of searching
an array?

ANSWER:

O(n)

Examples:

includes()
indexOf()
find()


In the worst case, we may inspect every element.


------------------------------------------------------------

Q106. What is the typical complexity of map()?

ANSWER:

O(n)

Because the callback normally runs once
for every element.


------------------------------------------------------------

Q107. What is the typical complexity of filter()?

ANSWER:

O(n)


------------------------------------------------------------

Q108. What is the typical complexity of reduce()?

ANSWER:

O(n)


------------------------------------------------------------

Q109. What is the typical complexity of sorting?

ANSWER:

Typically O(n log n), although the exact implementation
depends on the JavaScript engine.


------------------------------------------------------------

Q110. Why might you use a Map/Object instead of an array
for repeated ID lookups?

ANSWER:

If you repeatedly need:

id → user

scanning an array with find() costs O(n) per lookup.

A suitable Map/object structure can provide much faster
key-based lookup on average.

Example:

const usersById = new Map();

usersById.set(user._id, user);

Then:

usersById.get(userId);


This is an important data-structure decision.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 25 — IMPORTANT OUTPUT QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q111. What is the output?

const arr = [1, 2, 3];

console.log(arr.length);

ANSWER:

3


------------------------------------------------------------

Q112. What is the output?

const arr = [10, 20, 30];

console.log(arr[arr.length - 1]);

ANSWER:

30


------------------------------------------------------------

Q113. What is the output?

const arr = [1, 2, 3];

arr.push(4);

console.log(arr);

ANSWER:

[1, 2, 3, 4]


------------------------------------------------------------

Q114. What is the output?

const arr = [1, 2, 3];

arr.pop();

console.log(arr);

ANSWER:

[1, 2]


------------------------------------------------------------

Q115. What is the output?

const arr = [1, 2, 3];

console.log(arr.slice(1));

ANSWER:

[2, 3]


------------------------------------------------------------

Q116. What is the output?

const arr = [1, 2, 3];

arr.splice(1, 1);

console.log(arr);

ANSWER:

[1, 3]


------------------------------------------------------------

Q117. What is the output?

const arr = [1, 2, 3];

const result = arr.map(x => x * 2);

console.log(arr);
console.log(result);

ANSWER:

[1, 2, 3]

[2, 4, 6]


------------------------------------------------------------

Q118. What is the output?

const arr = [1, 2, 3, 4];

const result = arr.filter(x => x > 2);

console.log(result);

ANSWER:

[3, 4]


------------------------------------------------------------

Q119. What is the output?

const arr = [1, 2, 3, 4];

const result = arr.reduce(
    (sum, x) => sum + x,
    0
);

console.log(result);

ANSWER:

10


------------------------------------------------------------

Q120. What is the output?

const a = [1, 2, 3];
const b = a;

b.push(4);

console.log(a);

ANSWER:

[1, 2, 3, 4]


------------------------------------------------------------

Q121. What is the output?

const a = [1, 2, 3];
const b = [...a];

b.push(4);

console.log(a);
console.log(b);

ANSWER:

[1, 2, 3]

[1, 2, 3, 4]


------------------------------------------------------------

Q122. What is the output?

console.log([] === []);

ANSWER:

false


------------------------------------------------------------

Q123. What is the output?

console.log(Boolean([]));

ANSWER:

true


------------------------------------------------------------

Q124. What is the output?

console.log(typeof []);

ANSWER:

"object"


------------------------------------------------------------

Q125. What is the output?

console.log(Array.isArray([]));

ANSWER:

true


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 26 — INTERVIEW CODING PROBLEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q126. Find the largest number.

const numbers = [10, 50, 20, 90, 30];

ANSWER:

const max = Math.max(...numbers);

console.log(max);

Output:

90


------------------------------------------------------------

Q127. Find the smallest number.

ANSWER:

const min = Math.min(...numbers);


------------------------------------------------------------

Q128. Reverse an array.

ANSWER:

const reversed = [...numbers].reverse();


Or:

const reversed = numbers.toReversed();


------------------------------------------------------------

Q129. Remove duplicates from an array.

const numbers = [1, 2, 2, 3, 3, 4];

ANSWER:

const unique = [...new Set(numbers)];

Output:

[1, 2, 3, 4]


------------------------------------------------------------

Q130. Find duplicate values.

ANSWER:

const numbers = [1, 2, 2, 3, 3, 4];

const duplicates = numbers.filter(
    (num, index) =>
        numbers.indexOf(num) !== index
);

Output:

[2, 3]


For very large datasets, a Set-based approach is
usually more efficient.


------------------------------------------------------------

Q131. Remove all falsy values.

const values = [
    0,
    1,
    false,
    true,
    "",
    "Hello",
    null,
    undefined
];

ANSWER:

const result = values.filter(Boolean);

Output:

[1, true, "Hello"]


IMPORTANT:

filter(Boolean)

is shorthand for keeping truthy values.


------------------------------------------------------------

Q132. Find the sum of even numbers.

ANSWER:

const sum = numbers
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);


------------------------------------------------------------

Q133. Find the average of numbers.

ANSWER:

const total = numbers.reduce(
    (sum, num) => sum + num,
    0
);

const average = total / numbers.length;


------------------------------------------------------------

Q134. Find the first number greater than 50.

ANSWER:

const result = numbers.find(
    num => num > 50
);


------------------------------------------------------------

Q135. Check whether array contains an even number.

ANSWER:

const result = numbers.some(
    num => num % 2 === 0
);


------------------------------------------------------------

Q136. Check whether all numbers are positive.

ANSWER:

const result = numbers.every(
    num => num > 0
);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 27 — ADVANCED ARRAY OF OBJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q137. Group users by role.

const users = [
    { name: "A", role: "admin" },
    { name: "B", role: "user" },
    { name: "C", role: "admin" }
];

ANSWER:

const grouped = users.reduce(
    (acc, user) => {

        if (!acc[user.role]) {
            acc[user.role] = [];
        }

        acc[user.role].push(user);

        return acc;

    },
    {}
);


Result:

{
    admin: [
        { name: "A", role: "admin" },
        { name: "C", role: "admin" }
    ],

    user: [
        { name: "B", role: "user" }
    ]
}


This is a VERY useful real-world pattern.


------------------------------------------------------------

Q138. Calculate total revenue.

const orders = [
    { amount: 1000 },
    { amount: 2000 },
    { amount: 500 }
];

ANSWER:

const revenue = orders.reduce(
    (total, order) =>
        total + order.amount,
    0
);

Output:

3500


------------------------------------------------------------

Q139. Get only product names whose stock is available
and price is below 50,000.

ANSWER:

const result = products
    .filter(product => product.stock > 0)
    .filter(product => product.price < 50000)
    .map(product => product.name);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 28 — MUTATING VS NON-MUTATING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q140. Which common array methods mutate the original array?

ANSWER:

push()
pop()
shift()
unshift()
splice()
sort()
reverse()


------------------------------------------------------------

Q141. Which common methods don't mutate the original array?

ANSWER:

map()
filter()
slice()
concat()
flat()
flatMap()


Modern non-mutating methods include:

toSorted()
toReversed()
toSpliced()


------------------------------------------------------------

Q142. Why is knowing mutation important in React?

ANSWER:

Because directly mutating state can lead to confusing
state management and rendering behavior.

Example:

BAD:

state.push(item);


BETTER:

setState(prev => [
    ...prev,
    item
]);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 29 — REAL MERN SCENARIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q143. MongoDB returns 100 products.
You want only products with stock > 0.

ANSWER:

const availableProducts = products.filter(
    product => product.stock > 0
);


------------------------------------------------------------

Q144. API returns users and you want only their IDs.

ANSWER:

const ids = users.map(
    user => user._id
);


------------------------------------------------------------

Q145. Admin dashboard needs total sales.

ANSWER:

const totalSales = orders.reduce(
    (sum, order) =>
        sum + order.totalAmount,
    0
);


------------------------------------------------------------

Q146. Check whether a user has delete permission.

const permissions = [
    "read",
    "write",
    "delete"
];

ANSWER:

const canDelete =
    permissions.includes("delete");


------------------------------------------------------------

Q147. Remove a product from React state.

ANSWER:

setProducts(prevProducts =>
    prevProducts.filter(
        product => product._id !== productId
    )
);


------------------------------------------------------------

Q148. Update product quantity in React state.

ANSWER:

setCart(prevCart =>
    prevCart.map(item =>
        item.productId === productId
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
    )
);


------------------------------------------------------------

Q149. Add a new product to React state.

ANSWER:

setProducts(prevProducts => [
    ...prevProducts,
    newProduct
]);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 30 — FINAL INTERVIEW RAPID FIRE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q150. Are arrays objects in JavaScript?

ANSWER:

YES.


Q151. Does array indexing start at 0?

ANSWER:

YES.


Q152. Does push() add at the end?

ANSWER:

YES.


Q153. Does pop() remove from the end?

ANSWER:

YES.


Q154. Does shift() remove from the beginning?

ANSWER:

YES.


Q155. Does unshift() add at the beginning?

ANSWER:

YES.


Q156. Does splice() mutate?

ANSWER:

YES.


Q157. Does slice() mutate?

ANSWER:

NO.


Q158. Does map() return a new array?

ANSWER:

YES.


Q159. Does filter() return a new array?

ANSWER:

YES.


Q160. Does forEach() return a new array?

ANSWER:

NO.


Q161. Does find() return the first matching element?

ANSWER:

YES.


Q162. Does some() check whether at least one matches?

ANSWER:

YES.


Q163. Does every() check whether all match?

ANSWER:

YES.


Q164. Does reduce() usually produce one accumulated result?

ANSWER:

YES.


Q165. Does sort() mutate?

ANSWER:

YES.


Q166. Does reverse() mutate?

ANSWER:

YES.


Q167. Is [] truthy?

ANSWER:

YES.


Q168. Is typeof [] equal to "array"?

ANSWER:

NO.

It is:

"object"


Q169. How do you check for an array?

ANSWER:

Array.isArray(value)


Q170. Is [] === [] true?

ANSWER:

NO.


Q171. Is const arr = []; arr.push(1) allowed?

ANSWER:

YES.

const prevents reassignment of the variable,
not mutation of the array.


Q172. Is const arr = []; arr = [1] allowed?

ANSWER:

NO.

Because that tries to reassign the const variable.


Q173. What is the most important array structure
for MERN?

ANSWER:

Array of objects.

Example:

[
    {
        _id: "1",
        name: "Laptop",
        price: 50000
    },
    {
        _id: "2",
        name: "Phone",
        price: 30000
    }
]


Q174. What are the most important array methods
for a MERN developer?

ANSWER:

map()
filter()
reduce()
find()
some()
every()
forEach()
includes()
findIndex()
sort()
slice()
splice()

And concepts:

spread
destructuring
references
shallow copy
immutability


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL ARRAY MENTAL MODEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When you see an ARRAY in a MERN application,
immediately ask:

"WHAT DO I WANT TO DO WITH THIS DATA?"


DISPLAY / TRANSFORM
        ↓
      map()


FILTER / SEARCH
        ↓
     filter()


FIND ONE
        ↓
      find()


FIND INDEX
        ↓
   findIndex()


CALCULATE / AGGREGATE
        ↓
     reduce()


CHECK AT LEAST ONE
        ↓
      some()


CHECK ALL
        ↓
     every()


CHECK EXISTENCE
        ↓
    includes()


ADD
        ↓
      push()


REMOVE LAST
        ↓
       pop()


REMOVE FIRST
        ↓
      shift()


ADD FIRST
        ↓
     unshift()


INSERT / REMOVE / REPLACE
        ↓
      splice()


COPY / MERGE
        ↓
      spread ...


PORTION
        ↓
      slice()


SORT
        ↓
   sort() / toSorted()


RENDER IN REACT
        ↓
      map()


UPDATE REACT ARRAY
        ↓
       map()


DELETE REACT ARRAY ITEM
        ↓
      filter()


ASYNC FOR ALL ITEMS
        ↓
Promise.all(array.map(...))


DATABASE/API DATA
        ↓
  ARRAY OF OBJECTS


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT YOU SHOULD NOW BE ABLE TO DO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After completing these questions, you should be able to:

✓ Create and access arrays
✓ Understand indexes and length
✓ Add/remove elements
✓ Understand slice vs splice
✓ Search arrays
✓ Use map/filter/reduce properly
✓ Use find/some/every
✓ Sort arrays
✓ Reverse arrays
✓ Merge arrays
✓ Split/join data
✓ Use spread and destructuring
✓ Understand references
✓ Understand shallow copies
✓ Understand mutation
✓ Update arrays immutably
✓ Work with arrays of objects
✓ Work with nested arrays
✓ Render arrays in React
✓ Process API responses
✓ Calculate cart/order totals
✓ Search/filter products
✓ Handle async array operations
✓ Understand Promise.all + map
✓ Understand array time complexity
✓ Solve common array interview problems
✓ Avoid common JavaScript array traps
*/