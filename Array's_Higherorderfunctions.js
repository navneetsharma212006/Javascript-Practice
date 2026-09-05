/*
╔══════════════════════════════════════════════════════════════════════╗
║              JAVASCRIPT ARRAYS + HIGHER ORDER FUNCTIONS             ║
║                    COMPLETE MERN DEVELOPER GUIDE                   ║
╚══════════════════════════════════════════════════════════════════════╝


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. WHAT IS AN ARRAY?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

An Array is a data structure used to store multiple values in a
single variable.

Example:

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

OUTPUT:

["Apple", "Banana", "Mango"]


Array indexes start from 0:

Apple   → index 0
Banana  → index 1
Mango   → index 2


Accessing elements:

console.log(fruits[0]);

OUTPUT:

Apple


console.log(fruits[2]);

OUTPUT:

Mango


IMPORTANT:

Array index starts from 0, NOT 1.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. WHY ARRAYS ARE SO IMPORTANT IN MERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

As a MERN developer, you will constantly receive and manipulate
arrays.

For example, backend API:

GET /api/products


may return:

[
    {
        id: 1,
        name: "iPhone",
        price: 79999
    },
    {
        id: 2,
        name: "Samsung",
        price: 69999
    },
    {
        id: 3,
        name: "Pixel",
        price: 59999
    }
]


This is:

ARRAY
  ↓
of
  ↓
OBJECTS


This structure is extremely common in MERN applications.


Typical flow:

MongoDB
   ↓
Node.js + Express
   ↓
REST API
   ↓
React
   ↓
Array of Objects
   ↓
map()
   ↓
UI


For example, an e-commerce website may receive:

products = [
    {...},
    {...},
    {...},
    {...}
]


Then React uses:

products.map(...)


to display product cards.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. TYPES OF ARRAYS YOU SHOULD KNOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Simple array:

const numbers = [10, 20, 30, 40];


String array:

const names = ["Navneet", "Rahul", "Aman"];


Boolean array:

const permissions = [true, false, true];


Mixed array:

const data = [10, "Hello", true, null];


Array of objects:

const users = [
    {
        name: "Navneet",
        age: 20
    },
    {
        name: "Rahul",
        age: 22
    }
];


Nested array:

const matrix = [
    [1, 2],
    [3, 4]
];


For MERN development, the MOST IMPORTANT one is:

Array of Objects


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. ARRAY LENGTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const users = ["A", "B", "C"];

console.log(users.length);

OUTPUT:

3


Get last element:

console.log(users[users.length - 1]);

OUTPUT:

C


Why?

Last index = length - 1


Example:

length = 3

indexes:

0
1
2

Therefore:

3 - 1 = 2


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. MUTATING VS NON-MUTATING METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This concept is VERY important in React.


MUTATING:

The original array gets changed.


Examples:

push()
pop()
shift()
unshift()
splice()
sort()
reverse()


NON-MUTATING:

The original array remains unchanged.


Common examples:

map()
filter()
slice()
concat()
find()
some()
every()


Example:

const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);

OUTPUT:

[1, 2, 3, 4]


Original array changed.


Compare:

const numbers = [1, 2, 3];

const newNumbers = numbers.map(num => num * 2);

console.log(numbers);

OUTPUT:

[1, 2, 3]


Original array remains unchanged.


This distinction becomes extremely important in React state management.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. WHAT IS A HIGHER ORDER FUNCTION?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A Higher Order Function is a function that:

1. Accepts another function as an argument

OR

2. Returns another function


Example:

function greet(name) {
    return "Hello " + name;
}


function processUser(callback) {

    return callback("Navneet");

}


console.log(processUser(greet));


OUTPUT:

Hello Navneet


Here:

processUser()

is a Higher Order Function because it accepts:

callback


which is another function.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. WHY ARE ARRAY METHODS CALLED HIGHER ORDER FUNCTIONS?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because methods such as:

map()
filter()
reduce()
forEach()
find()
some()
every()


accept a function.

Example:

const numbers = [1, 2, 3, 4];


numbers.map(function(number) {

    return number * 2;

});


We passed this function:

function(number) {
    return number * 2;
}


to:

map()


Therefore:

map() = Higher Order Function


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. THE MOST IMPORTANT ARRAY HOFs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

As a MERN developer, you MUST understand:

1. map()
2. filter()
3. reduce()
4. forEach()
5. find()
6. findIndex()
7. some()
8. every()
9. sort()


You should know:

WHAT?
WHY?
WHEN?
RETURN VALUE?
MUTATES?
REAL INDUSTRY USE?


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
9. map()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

map() is used when you want to TRANSFORM every element of an array.


Example:

const numbers = [1, 2, 3, 4];

const result = numbers.map(num => num * 2);

console.log(result);


OUTPUT:

[2, 4, 6, 8]


Original:

[1, 2, 3, 4]


New:

[2, 4, 6, 8]


map() returns a NEW ARRAY.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10. map() CALLBACK PARAMETERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

map() callback can receive:

element
index
array


Example:

const users = ["A", "B", "C"];


users.map((user, index, array) => {

    console.log(user);
    console.log(index);
    console.log(array);

});


Usually you only need:

element


Example:

users.map(user => {

    return user.toUpperCase();

});


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
11. REAL MERN USE CASE OF map()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose backend returns:

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 70000
    },
    {
        id: 2,
        name: "Phone",
        price: 40000
    }
];


React:

products.map(product => {

    return (
        <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
        />
    );

});


This is one of the MOST COMMON uses of map() in React.


Mental model:

ARRAY
  ↓
map()
  ↓
TRANSFORM EACH ITEM
  ↓
NEW ARRAY


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
12. map() FOR API DATA TRANSFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose database gives:

const users = [
    {
        _id: "101",
        firstName: "Navneet",
        lastName: "Sharma"
    },
    {
        _id: "102",
        firstName: "Rahul",
        lastName: "Verma"
    }
];


You want:

[
    {
        id: "101",
        fullName: "Navneet Sharma"
    },
    {
        id: "102",
        fullName: "Rahul Verma"
    }
]


Use:

const formattedUsers = users.map(user => {

    return {
        id: user._id,
        fullName: `${user.firstName} ${user.lastName}`
    };

});


This is a REAL backend/data-processing use case.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
13. filter()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

filter() is used when you want to SELECT certain elements.


Example:

const numbers = [1, 2, 3, 4, 5, 6];


const evenNumbers = numbers.filter(num => num % 2 === 0);


OUTPUT:

[2, 4, 6]


Mental model:

ARRAY
  ↓
filter()
  ↓
CHECK CONDITION
  ↓
KEEP / REMOVE
  ↓
NEW ARRAY


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
14. filter() MUST RETURN A CONDITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example:

const numbers = [10, 20, 30, 40];


const result = numbers.filter(num => num > 20);


Output:

[30, 40]


The callback must produce something truthy/falsy.


true  → keep
false → remove


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
15. REAL MERN USE CASE — PRODUCT SEARCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

const products = [
    { name: "iPhone", price: 80000 },
    { name: "Laptop", price: 70000 },
    { name: "Mouse", price: 1000 }
];


User selects:

"products under ₹50,000"


Use:

const result = products.filter(product => {

    return product.price < 50000;

});


OUTPUT:

[
    {
        name: "Mouse",
        price: 1000
    }
]


This pattern is used everywhere:

E-commerce
Dashboards
Admin panels
Search
Filtering
Reports


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
16. SEARCH USING filter()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const users = [
    { name: "Navneet" },
    { name: "Rahul" },
    { name: "Aman" }
];


const result = users.filter(user =>
    user.name.toLowerCase().includes("a")
);


This returns all users whose names contain "a".


Real use:

Search bar
User management
Product search
Employee search
Admin dashboard


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
17. reduce()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

reduce() is probably the MOST POWERFUL array method.


It is used when you want to convert:

MANY VALUES

into

ONE RESULT


Example:

const numbers = [10, 20, 30, 40];


const total = numbers.reduce((sum, num) => {

    return sum + num;

}, 0);


OUTPUT:

100


Mental model:

10
20
30
40
 ↓
reduce()
 ↓
100


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
18. HOW reduce() WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const numbers = [10, 20, 30];


numbers.reduce((sum, num) => {

    return sum + num;

}, 0);


Step 1:

sum = 0
num = 10

return 10


Step 2:

sum = 10
num = 20

return 30


Step 3:

sum = 30
num = 30

return 60


Final:

60


The second argument:

0

is the initial value.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
19. REAL INDUSTRY USE CASE — SHOPPING CART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

const cart = [

    {
        product: "Laptop",
        price: 70000,
        quantity: 1
    },

    {
        product: "Mouse",
        price: 1000,
        quantity: 2
    }

];


We want total amount.


Use:

const total = cart.reduce((sum, item) => {

    return sum + item.price * item.quantity;

}, 0);


Calculation:

70000 × 1 = 70000

1000 × 2 = 2000

Total:

72000


This is a VERY realistic MERN use case.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
20. reduce() FOR GROUPING DATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

const users = [

    { name: "A", role: "admin" },
    { name: "B", role: "user" },
    { name: "C", role: "admin" },
    { name: "D", role: "user" }

];


You want:

{
    admin: [...],
    user: [...]
}


Use:

const grouped = users.reduce((result, user) => {

    if (!result[user.role]) {
        result[user.role] = [];
    }

    result[user.role].push(user);

    return result;

}, {});


This is useful for:

Admin dashboards
Analytics
Reports
Permissions
Categorization
Data processing


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
21. reduce() FOR COUNTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

const orders = [

    { status: "completed" },
    { status: "pending" },
    { status: "completed" },
    { status: "cancelled" }

];


Count completed orders:

const completedCount = orders.reduce((count, order) => {

    if (order.status === "completed") {
        return count + 1;
    }

    return count;

}, 0);


OUTPUT:

2


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
22. forEach()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

forEach() is used when you want to PERFORM AN ACTION for every item.


Example:

const users = ["A", "B", "C"];


users.forEach(user => {

    console.log(user);

});


OUTPUT:

A
B
C


IMPORTANT:

forEach() does NOT return a new array.


Usually:

map() → transform

forEach() → perform action


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
23. map() VS forEach()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

map():

const result = numbers.map(num => num * 2);


Returns:

[2, 4, 6]


forEach():

const result = numbers.forEach(num => num * 2);


result:

undefined


Therefore:

If you need a NEW ARRAY:

→ map()


If you simply need to perform an action:

→ forEach()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
24. find()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

find() returns the FIRST element that satisfies a condition.


Example:

const users = [

    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" }

];


const user = users.find(user => user.id === 2);


OUTPUT:

{
    id: 2,
    name: "B"
}


Very useful in MERN.


Example:

const product = products.find(
    product => product.id === productId
);


You found ONE product.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
25. find() VS filter()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

find():

Returns ONE element.


filter():

Returns an ARRAY of matching elements.


Example:

const users = [
    { role: "admin" },
    { role: "user" },
    { role: "admin" }
];


find():

users.find(user => user.role === "admin");


Result:

first admin


filter():

users.filter(user => user.role === "admin");


Result:

[
    admin,
    admin
]


Remember:

ONE → find()

MANY → filter()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
26. findIndex()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

findIndex() returns the index of the FIRST matching element.


Example:

const users = [

    { id: 10 },
    { id: 20 },
    { id: 30 }

];


const index = users.findIndex(user => user.id === 20);


OUTPUT:

1


If no match:

-1


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
27. some()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

some() checks:

"Does AT LEAST ONE element satisfy this condition?"


Example:

const numbers = [1, 3, 5, 8];


const result = numbers.some(num => num % 2 === 0);


OUTPUT:

true


Because:

8 is even.


Real MERN use case:

Does cart contain an out-of-stock item?


const hasOutOfStock = cart.some(
    item => item.stock === 0
);


Returns:

true / false


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
28. every()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

every() checks:

"Do ALL elements satisfy this condition?"


Example:

const numbers = [2, 4, 6, 8];


const result = numbers.every(
    num => num % 2 === 0
);


OUTPUT:

true


Real use case:

Are all cart items available?


const allAvailable = cart.every(
    item => item.stock > 0
);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
29. some() VS every()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

some():

AT LEAST ONE?


every():

ALL?


Example:

[2, 4, 7, 8]


some(num => num % 2 !== 0)

→ true

Because 7 is odd.


every(num => num % 2 === 0)

→ false

Because 7 is not even.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
30. includes()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Checks whether an array contains a value.


const roles = ["admin", "editor", "user"];


roles.includes("admin");


OUTPUT:

true


Real use case:

const permissions = ["read", "write", "delete"];


if (permissions.includes("delete")) {

    console.log("User can delete");

}


Useful for:

Permissions
Roles
Feature flags
Selected IDs
Categories


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
31. indexOf()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const fruits = ["apple", "banana", "mango"];


console.log(fruits.indexOf("banana"));


OUTPUT:

1


If not found:

-1


For simple existence checks, modern code often prefers:

includes()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
32. sort()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

sort() sorts an array.


Strings:

const names = ["Rahul", "Aman", "Navneet"];

names.sort();


But IMPORTANT:

sort() MUTATES the original array.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
33. VERY IMPORTANT sort() TRAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This:

const numbers = [10, 2, 30, 4];

numbers.sort();


may produce:

[10, 2, 30, 4]


because JavaScript sorts values as strings by default.


Correct numeric sorting:

numbers.sort((a, b) => a - b);


Ascending:

[2, 4, 10, 30]


Descending:

numbers.sort((a, b) => b - a);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
34. REAL MERN USE CASE — SORT PRODUCTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const products = [

    { name: "Laptop", price: 70000 },
    { name: "Mouse", price: 1000 },
    { name: "Phone", price: 50000 }

];


Sort low → high:

const sortedProducts = [...products].sort(
    (a, b) => a.price - b.price
);


Why:

[...products]


Because sort() mutates the array.


We create a copy first.


This is especially important in React.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
35. splice()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

splice() modifies the original array.


Remove:

const numbers = [10, 20, 30, 40];


numbers.splice(1, 2);


OUTPUT:

[10, 40]


Meaning:

start index = 1

delete count = 2


Removed:

20
30


splice() is useful when you intentionally want to modify an array.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
36. slice()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

slice() creates a portion of an array WITHOUT changing the original.


const numbers = [10, 20, 30, 40, 50];


const result = numbers.slice(1, 4);


OUTPUT:

[20, 30, 40]


Original:

[10, 20, 30, 40, 50]


Mental model:

slice → copy a portion


splice → modify/remove/insert


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
37. SPREAD OPERATOR + ARRAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Spread:

...


Example:

const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5];


OUTPUT:

[1, 2, 3, 4, 5]


Very important in React.


Example:

const newUsers = [...users, newUser];


Instead of mutating:

users.push(newUser);


React state should generally be updated immutably.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
38. IMMUTABLE ARRAY UPDATE IN REACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Wrong:

users.push(newUser);

setUsers(users);


Better:

setUsers([...users, newUser]);


Why?

React relies heavily on detecting state/reference changes.


Similarly:

Remove user:

setUsers(
    users.filter(user => user.id !== id)
);


Update user:

setUsers(
    users.map(user =>
        user.id === id
            ? { ...user, name: "Updated Name" }
            : user
    )
);


These three patterns are extremely important:

ADD:

[...array, newItem]


REMOVE:

array.filter(...)


UPDATE:

array.map(...)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
39. THIS PATTERN IS EVERYWHERE IN REACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ADD:

setProducts(prev => [
    ...prev,
    newProduct
]);


DELETE:

setProducts(prev =>
    prev.filter(product => product.id !== id)
);


UPDATE:

setProducts(prev =>
    prev.map(product =>
        product.id === id
            ? { ...product, price: newPrice }
            : product
    )
);


You should be able to write these without thinking too much.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
40. DESTRUCTURING ARRAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const numbers = [10, 20, 30];


const [a, b, c] = numbers;


console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


Very common in React:

const [users, setUsers] = useState([]);


Here:

users       → current state
setUsers    → function to update state


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
41. ARRAY OF OBJECTS + DESTRUCTURING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const users = [

    {
        name: "Navneet",
        age: 20
    }

];


users.map(({ name, age }) => {

    console.log(name);
    console.log(age);

});


This is commonly seen in modern React/Node code.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
42. CHAINING ARRAY METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One of the most powerful patterns.


Example:

const products = [

    { name: "Laptop", price: 70000 },
    { name: "Phone", price: 40000 },
    { name: "Mouse", price: 1000 }

];


const result = products
    .filter(product => product.price > 10000)
    .map(product => product.name);


OUTPUT:

["Laptop", "Phone"]


Flow:

products
   ↓
filter()
   ↓
expensive products
   ↓
map()
   ↓
product names


This is extremely common in real applications.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
43. REAL INDUSTRY EXAMPLE — E-COMMERCE DASHBOARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

const orders = [

    {
        customer: "A",
        status: "completed",
        amount: 5000
    },

    {
        customer: "B",
        status: "pending",
        amount: 3000
    },

    {
        customer: "C",
        status: "completed",
        amount: 7000
    }

];


Requirement:

"Calculate revenue from completed orders."


Solution:

const revenue = orders
    .filter(order => order.status === "completed")
    .reduce(
        (total, order) => total + order.amount,
        0
    );


OUTPUT:

12000


Flow:

orders
   ↓
filter completed
   ↓
completed orders
   ↓
reduce
   ↓
total revenue


This is exactly the kind of data transformation you encounter
in dashboards and business applications.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
44. REAL INDUSTRY EXAMPLE — USER PERMISSIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const permissions = [
    "read",
    "write",
    "delete"
];


if (permissions.includes("delete")) {

    console.log("Delete button visible");

}


React:

{permissions.includes("delete") && (
    <button>Delete</button>
)}


This pattern is common in:

RBAC
Admin dashboards
Role-based UI
Authorization


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
45. REAL INDUSTRY EXAMPLE — ADMIN USER SEARCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const users = [

    { name: "Navneet", role: "admin" },
    { name: "Rahul", role: "user" },
    { name: "Aman", role: "admin" }

];


const admins = users.filter(
    user => user.role === "admin"
);


Then:

admins.map(user => {

    return <UserCard user={user} />;

});


Flow:

API
 ↓
users[]
 ↓
filter()
 ↓
admins[]
 ↓
map()
 ↓
React UI


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
46. ARRAY CALLBACK PARAMETERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Most array HOF callbacks can receive:

(element, index, array)


Example:

const numbers = [10, 20, 30];


numbers.map((value, index, array) => {

    console.log(value);
    console.log(index);
    console.log(array);

});


Usually:

map((value) => ...)


is enough.


But knowing index and array exist is important.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
47. CALLBACK VS CALLBACK INVOCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VERY IMPORTANT.


Correct:

numbers.map(double);


Here we PASS the function.


Wrong:

numbers.map(double());


Here we EXECUTE the function immediately.


Example:

function double(num) {

    return num * 2;

}


Correct:

numbers.map(double);


Because map will call:

double(10)
double(20)
double(30)


for you.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
48. ARROW FUNCTION IN ARRAY METHODS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Instead of:

numbers.map(function(num) {
    return num * 2;
});


Modern JavaScript:

numbers.map(num => num * 2);


Filter:

numbers.filter(num => num > 10);


Reduce:

numbers.reduce(
    (sum, num) => sum + num,
    0
);


You will see this style constantly in MERN projects.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
49. forEach() + ASYNC — VERY IMPORTANT NODE.JS CONCEPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a common mistake.


DON'T assume this waits:

users.forEach(async user => {

    await sendEmail(user);

});


forEach() does not wait for async callbacks.


If you need parallel execution:

await Promise.all(
    users.map(user => sendEmail(user))
);


This is a VERY important pattern in Node.js.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
50. SEQUENTIAL ASYNC PROCESSING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If operations must happen one after another:

for (const user of users) {

    await sendEmail(user);

}


Use:

for...of


instead of:

forEach(async ...)


This distinction matters in backend development.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
51. Promise.all() + map() — REAL MERN USE CASE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose you have users:

const users = [
    user1,
    user2,
    user3
];


You need to fetch additional data for all users.


Use:

const results = await Promise.all(

    users.map(user => fetchUserDetails(user.id))

);


Flow:

users[]
   ↓
map()
   ↓
Promise[]
   ↓
Promise.all()
   ↓
results[]


This is a VERY common Node.js pattern.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
52. flat()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Used to flatten nested arrays.


const numbers = [
    [1, 2],
    [3, 4]
];


numbers.flat();


OUTPUT:

[1, 2, 3, 4]


Useful when API data contains nested arrays.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
53. flatMap()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Combines:

map()
+
flat()


Example:

const users = [

    {
        name: "A",
        skills: ["JS", "React"]
    },

    {
        name: "B",
        skills: ["Node", "MongoDB"]
    }

];


const skills = users.flatMap(
    user => user.skills
);


OUTPUT:

[
    "JS",
    "React",
    "Node",
    "MongoDB"
]


Useful for data transformation.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
54. Array.isArray()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Important when handling API data.


typeof []


returns:

"object"


That's why:

Array.isArray([])


returns:

true


Example:

if (Array.isArray(products)) {

    products.map(...);

}


Useful when validating API/request data.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
55. EMPTY ARRAY IS TRUTHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VERY IMPORTANT.


if ([]) {

    console.log("YES");

}


OUTPUT:

YES


Why?

Arrays are objects.

Objects are truthy.


Therefore:

[] → truthy

{} → truthy


If you want to check whether array contains items:

if (users.length > 0) {

    console.log("Users exist");

}


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
56. SHALLOW COPY — IMPORTANT FOR REACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const users = [

    {
        name: "Navneet"
    }

];


const copy = [...users];


This creates a NEW ARRAY.


But the objects inside are still shared references.


Therefore:

copy[0].name = "Rahul";


can affect the same underlying object referenced by users[0].


This is called:

SHALLOW COPY


Spread copies only the first level.


For nested structures, you need to carefully create new objects
at the levels you modify.


Example:

setUsers(prev =>
    prev.map(user =>
        user.id === id
            ? { ...user, name: "Rahul" }
            : user
    )
);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
57. ARRAY OF OBJECTS — MOST IMPORTANT MERN STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You should become extremely comfortable with:

const products = [

    {
        _id: "1",
        name: "Laptop",
        price: 70000,
        category: "electronics",
        stock: 10
    },

    {
        _id: "2",
        name: "Phone",
        price: 50000,
        category: "electronics",
        stock: 20
    }

];


You should be able to:

READ
CREATE
UPDATE
DELETE
FILTER
SEARCH
SORT
GROUP
COUNT
CALCULATE


without difficulty.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
58. CRUD WITH ARRAYS — VERY IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CREATE / ADD:

setProducts(prev => [
    ...prev,
    newProduct
]);


READ:

products.map(product => ...);


UPDATE:

setProducts(prev =>
    prev.map(product =>
        product._id === id
            ? { ...product, price: 60000 }
            : product
    )
);


DELETE:

setProducts(prev =>
    prev.filter(product => product._id !== id)
);


This pattern is fundamental to React CRUD applications.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
59. ARRAY METHODS QUICK DECISION GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Question:

"I want to transform EVERY element."

→ map()


"I want to select SOME elements."

→ filter()


"I want ONE matching element."

→ find()


"I want the index of one matching element."

→ findIndex()


"Does AT LEAST ONE match?"

→ some()


"Do ALL match?"

→ every()


"I want ONE final result from many values."

→ reduce()


"I simply want to perform an action for every element."

→ forEach()


"I want to check if a value exists."

→ includes()


"I want to sort."

→ sort()


MEMORIZE THIS.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
60. THE MOST IMPORTANT MENTAL MODEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

map()

"CHANGE EVERY ITEM"


filter()

"KEEP SOME ITEMS"


find()

"FIND ONE ITEM"


reduce()

"COMBINE EVERYTHING"


forEach()

"DO SOMETHING FOR EACH ITEM"


some()

"IS AT LEAST ONE TRUE?"


every()

"ARE ALL TRUE?"


includes()

"DOES THIS VALUE EXIST?"


sort()

"ORDER THE ITEMS"


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
61. COMMON MISTAKE — USING map() FOR EVERYTHING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Wrong thinking:

"I know map(), so I'll use map() everywhere."


Example:

const admins = users.map(user => {

    if (user.role === "admin") {
        return user;
    }

});


This produces:

[
    admin,
    undefined,
    admin,
    undefined
]


Better:

const admins = users.filter(
    user => user.role === "admin"
);


Choose the method according to the JOB.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
62. COMMON MISTAKE — FORGETTING RETURN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Wrong:

const doubled = numbers.map(num => {

    num * 2;

});


Result:

[undefined, undefined, undefined]


Because there is no return.


Correct:

const doubled = numbers.map(num => {

    return num * 2;

});


Or:

const doubled = numbers.map(num => num * 2);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
63. map() WITH OBJECTS — IMPLICIT RETURN GOTCHA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Wrong:

users.map(user => {
    name: user.name
});


Because {} is interpreted as a function body.


Correct:

users.map(user => ({
    name: user.name
}));


The parentheses tell JavaScript:

"Return this object."


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
64. CHAINING — INDUSTRY STYLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example:

const result = orders

    .filter(order => order.status === "completed")

    .filter(order => order.amount > 5000)

    .map(order => order.amount);


Then:

const total = result.reduce(
    (sum, amount) => sum + amount,
    0
);


Or:

const total = orders

    .filter(order => order.status === "completed")

    .filter(order => order.amount > 5000)

    .reduce(
        (sum, order) => sum + order.amount,
        0
    );


This is called:

METHOD CHAINING


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
65. REAL FULL MERN EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine an admin dashboard receives:

const orders = [

    {
        id: 1,
        customer: "Navneet",
        status: "completed",
        amount: 5000
    },

    {
        id: 2,
        customer: "Rahul",
        status: "pending",
        amount: 3000
    },

    {
        id: 3,
        customer: "Aman",
        status: "completed",
        amount: 7000
    }

];


Requirement:

1. Show completed orders.
2. Display customer names.
3. Calculate revenue.


Step 1:

const completedOrders = orders.filter(
    order => order.status === "completed"
);


Step 2:

const customers = completedOrders.map(
    order => order.customer
);


OUTPUT:

[
    "Navneet",
    "Aman"
]


Step 3:

const revenue = completedOrders.reduce(
    (total, order) => total + order.amount,
    0
);


OUTPUT:

12000


Three different HOFs:

filter()
map()
reduce()


Each has a different responsibility.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
66. REACT RENDERING WITH map()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const products = [
    {
        id: 1,
        name: "Laptop"
    },
    {
        id: 2,
        name: "Phone"
    }
];


React:

{products.map(product => (

    <ProductCard
        key={product.id}
        product={product}
    />

))}


IMPORTANT:

React requires a stable key for list rendering.


Prefer:

key={product.id}


rather than:

key={index}


when a stable unique ID exists.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
67. SEARCH + FILTER + MAP IN REACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const filteredProducts = products.filter(product =>
    product.name
        .toLowerCase()
        .includes(search.toLowerCase())
);


Then:

filteredProducts.map(product => (

    <ProductCard
        key={product.id}
        product={product}
    />

));


This gives:

Search box
   ↓
filter()
   ↓
matching products
   ↓
map()
   ↓
UI


This pattern is extremely common.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
68. REDUCE IN DASHBOARDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

const sales = [
    { amount: 1000 },
    { amount: 2000 },
    { amount: 3000 }
];


Total sales:

const totalSales = sales.reduce(
    (total, sale) => total + sale.amount,
    0
);


Average:

const average =
    totalSales / sales.length;


Dashboard can display:

Total Sales
₹6000

Average Sale
₹2000


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
69. ARRAY + CONDITIONAL RENDERING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const admins = users.filter(
    user => user.role === "admin"
);


React:

{admins.length > 0 && (

    <AdminList users={admins} />

)}


Another pattern:

{users.length === 0 ? (

    <p>No users found</p>

) : (

    users.map(user => (
        <UserCard key={user.id} user={user} />
    ))

)}


This is common React logic.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
70. PERFORMANCE — DON'T JUST CHAIN EVERYTHING BLINDLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This:

products
    .filter(...)
    .filter(...)
    .map(...)
    .filter(...)
    .reduce(...)


is readable, but every operation can iterate through arrays.


For normal UI-sized arrays:

READABILITY > premature optimization


For huge datasets:

Consider:

Backend filtering
Database queries
MongoDB aggregation
Pagination
Indexes
Memoization
Virtualization


Do NOT send 100,000 MongoDB documents to React just to filter them
in the browser.


Instead:

Frontend:

GET /products?category=electronics&maxPrice=50000


Backend/database does the filtering.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
71. VERY IMPORTANT — FRONTEND ARRAY ≠ DATABASE QUERY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If you have:

products.filter(product => product.price < 50000)


this is JavaScript filtering.


But if you have millions of products in MongoDB:

DO NOT:

fetch everything
   ↓
send everything to React
   ↓
filter in browser


Instead:

MongoDB
   ↓
query/filter
   ↓
Express
   ↓
only required records
   ↓
React


As a MERN developer, you must understand where data processing
should happen.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
72. ARRAY METHODS + MONGODB
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

JavaScript:

products.filter(...)


MongoDB can perform filtering directly:

Model.find({
    price: { $lt: 50000 }
});


Both solve a filtering problem, but at different layers.


Frontend arrays:

Small in-memory data


MongoDB queries:

Large persistent datasets


This distinction is important for scalable applications.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
73. ARRAY METHODS + EXPRESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose:

app.get("/users", async (req, res) => {

    const users = await User.find();

    const admins = users.filter(
        user => user.role === "admin"
    );

    res.json(admins);

});


Technically valid.


But if the database contains huge amounts of data, it is usually
better to let the database perform the filtering:

User.find({ role: "admin" });


Because databases are designed for this kind of querying.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
74. ARRAY + API DATA VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Suppose API expects:

roles = ["admin", "user"]


Before processing:

if (!Array.isArray(roles)) {

    return res.status(400).json({
        message: "Roles must be an array"
    });

}


Then:

roles.some(...)
roles.includes(...)
roles.map(...)


can safely be used.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
75. ARRAY COMPLEXITY — BASIC KNOWLEDGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You should understand basic time complexity.


Usually:

Access by index:

arr[i]

→ O(1)


push():

→ O(1) average/amortized


pop():

→ O(1)


shift():

→ O(n)


unshift():

→ O(n)


find():

→ O(n)


filter():

→ O(n)


map():

→ O(n)


reduce():

→ O(n)


includes():

→ O(n)


sort():

→ O(n log n) typical comparison sorting behavior


You don't need to obsess over implementation details,
but understand that iterating through an array is generally O(n).


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
76. ARRAY METHODS VS DSA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Important distinction.


Learning:

map()
filter()
reduce()


does NOT mean you have completed Array DSA.


For product-based interviews you also need:

Two Pointers
Sliding Window
Prefix Sum
Hashing
Binary Search
Kadane's Algorithm
Intervals
3Sum
4Sum
Subarrays
Subsequences
Matrix
Sorting
Greedy patterns


JavaScript array methods:

→ Development skill


Array DSA:

→ Problem-solving skill


You need BOTH.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
77. WHAT A MERN DEVELOPER SHOULD BE ABLE TO DO WITHOUT HELP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Given:

const users = [
    {
        id: 1,
        name: "A",
        role: "admin",
        active: true
    },
    {
        id: 2,
        name: "B",
        role: "user",
        active: false
    }
];


You should immediately know how to:


Get admins:

users.filter(user => user.role === "admin")


Get active users:

users.filter(user => user.active)


Get names:

users.map(user => user.name)


Find user:

users.find(user => user.id === 1)


Check admin exists:

users.some(user => user.role === "admin")


Check everyone active:

users.every(user => user.active)


Get count:

users.length


Delete user:

users.filter(user => user.id !== id)


Update user:

users.map(user =>
    user.id === id
        ? { ...user, active: true }
        : user
)


This should become muscle memory.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
78. THE GOLDEN RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RULE 1:

Need to transform every element?

→ map()


RULE 2:

Need to select elements?

→ filter()


RULE 3:

Need exactly one matching element?

→ find()


RULE 4:

Need to combine an array into one value?

→ reduce()


RULE 5:

Need to perform an action on every item?

→ forEach()


RULE 6:

Need to check whether at least one matches?

→ some()


RULE 7:

Need to check whether all match?

→ every()


RULE 8:

Need to check whether a value exists?

→ includes()


RULE 9:

Need to sort?

→ sort()


RULE 10:

In React, avoid directly mutating state arrays.


Use:

spread
map
filter


for immutable updates.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
79. YOUR MERN ARRAY MENTAL MODEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Imagine your backend gives:

DATA[]
   ↓
React / Node
   ↓
What do I want?


TRANSFORM?
   ↓
map()


SELECT?
   ↓
filter()


ONE ITEM?
   ↓
find()


ONE RESULT?
   ↓
reduce()


ACTION?
   ↓
forEach()


AT LEAST ONE?
   ↓
some()


ALL?
   ↓
every()


EXISTS?
   ↓
includes()


ORDER?
   ↓
sort()


This mental model is more important than memorizing syntax.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
80. FINAL MERN DEVELOPER CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ARRAY FUNDAMENTALS:

✓ Create arrays
✓ Access elements
✓ Indexing
✓ length
✓ Add/remove elements
✓ Nested arrays
✓ Array of objects
✓ Destructuring
✓ Spread operator
✓ Reference vs value
✓ Shallow copy
✓ Mutation vs immutability


ARRAY METHODS:

✓ map()
✓ filter()
✓ reduce()
✓ forEach()
✓ find()
✓ findIndex()
✓ some()
✓ every()
✓ includes()
✓ indexOf()
✓ sort()
✓ slice()
✓ splice()
✓ concat()
✓ flat()
✓ flatMap()


FUNCTION CONCEPTS:

✓ Callback functions
✓ Higher Order Functions
✓ Arrow functions
✓ Return values
✓ Callback parameters
✓ Function as a value
✓ Method chaining


REACT:

✓ Rendering arrays
✓ key prop
✓ Immutable state updates
✓ Add item
✓ Delete item
✓ Update item
✓ Search
✓ Filter
✓ Sort
✓ Conditional rendering


NODE / EXPRESS:

✓ Process API arrays
✓ Transform API responses
✓ Filter data
✓ Promise.all()
✓ map() + async
✓ for...of + await
✓ Avoid forEach(async...)


MONGODB / BACKEND:

✓ Understand when filtering belongs in JS
✓ Understand when filtering belongs in MongoDB
✓ Pagination
✓ Sorting
✓ Aggregation
✓ Avoid sending huge datasets to frontend


INTERVIEW:

✓ Array traversal
✓ Time complexity
✓ map/filter/reduce
✓ Mutation vs immutability
✓ Shallow copy
✓ Callback/HOF
✓ Two pointers
✓ Sliding window
✓ Prefix sum
✓ Hashing
✓ Binary search
✓ Sorting
✓ Subarrays


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                         FINAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For MERN development, arrays are not just a JavaScript topic.

They are the bridge between:

MongoDB
   ↓
Node.js
   ↓
Express
   ↓
API Response
   ↓
JavaScript Array
   ↓
map / filter / reduce
   ↓
React State
   ↓
UI


If you master:

map()
filter()
reduce()
find()
some()
every()
forEach()
sort()

+

spread
destructuring
immutability
array of objects
callbacks
HOFs
async array processing

then a HUGE amount of everyday MERN code will start looking familiar.

The most important three to master first are:

        map()       → TRANSFORM
        filter()    → SELECT
        reduce()    → COMBINE

Once these three become natural, move to:

find()
some()
every()
sort()

Then combine them:

filter()
   ↓
map()
   ↓
reduce()


That combination appears constantly in real-world applications.

*/


/*

╔══════════════════════════════════════════════════════════════════════╗
║       JAVASCRIPT ARRAYS + HIGHER ORDER FUNCTIONS — PRACTICE         ║
║                  BEGINNER → ADVANCED → MERN                        ║
╚══════════════════════════════════════════════════════════════════════╝


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — ARRAY FUNDAMENTALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q1. Array kya hota hai?

ANSWER:

Array ek collection hota hai jisme hum multiple values ko ek
single variable ke andar store kar sakte hain.

Example:

const users = ["Navneet", "Rahul", "Aman"];

console.log(users);

OUTPUT:

["Navneet", "Rahul", "Aman"]


WHY?

Instead of:

const user1 = "Navneet";
const user2 = "Rahul";
const user3 = "Aman";

we can use:

const users = ["Navneet", "Rahul", "Aman"];


MERN USE CASE:

API se multiple users aate hain:

[
    { name: "Navneet" },
    { name: "Rahul" },
    { name: "Aman" }
]

Ye ek array of objects hai.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q2. Array ka first aur last element kaise nikaloge?

const users = ["A", "B", "C", "D"];

ANSWER:

console.log(users[0]);

console.log(users[users.length - 1]);


OUTPUT:

A
D


WHY?

First index = 0

Last index = length - 1


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q3. Array ki length kya hogi?

const numbers = [10, 20, 30, 40, 50];

console.log(numbers.length);


ANSWER:

5


WHY?

Array ke andar 5 elements hain.


Important:

Last index = length - 1

So:

Last index = 4


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q4. Agar array ke non-existing index ko access karein toh kya milega?

const numbers = [10, 20, 30];

console.log(numbers[10]);


ANSWER:

undefined


WHY?

Index 10 array ke andar exist nahi karta.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q5. Array mein element add karo.

const users = ["A", "B"];

users.push("C");

console.log(users);


ANSWER:

["A", "B", "C"]


IMPORTANT:

push() original array ko mutate karta hai.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q6. Array ke beginning mein element add karo.

const users = ["B", "C"];

users.unshift("A");

console.log(users);


ANSWER:

["A", "B", "C"]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q7. Last element remove karo.

const users = ["A", "B", "C"];

users.pop();


OUTPUT:

["A", "B"]


pop() last element remove karta hai.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q8. First element remove karo.

const users = ["A", "B", "C"];

users.shift();


OUTPUT:

["B", "C"]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q9. Array mein check karo ki "admin" exist karta hai ya nahi.

const roles = ["user", "editor", "admin"];


ANSWER:

console.log(roles.includes("admin"));


OUTPUT:

true


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — CALLBACK FUNCTIONS + HOF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q10. Callback function kya hota hai?

ANSWER:

Jab hum ek function ko kisi doosre function ke argument ke roop mein
pass karte hain, toh passed function ko callback function kehte hain.

Example:

function greet(name) {

    console.log("Hello " + name);

}


function processUser(callback) {

    callback("Navneet");

}


processUser(greet);


OUTPUT:

Hello Navneet


Yahan:

greet = callback

processUser = Higher Order Function


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q11. Higher Order Function kya hota hai?

ANSWER:

Aisa function jo:

1. Kisi function ko argument ke roop mein accept kare

OR

2. Kisi function ko return kare

Example:

function calculate(operation) {

    return operation(10, 20);

}


const add = (a, b) => a + b;


console.log(calculate(add));


OUTPUT:

30


calculate() = Higher Order Function


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q12. Array methods HOF kyun hain?

const numbers = [1, 2, 3];

numbers.map(num => num * 2);


ANSWER:

map() ke andar hum ek function pass kar rahe hain:

num => num * 2


Isliye map() ek Higher Order Function hai.


Same concept:

filter()
reduce()
forEach()
find()
some()
every()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — map()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q13. map() kya karta hai?

const numbers = [1, 2, 3, 4];

const result = numbers.map(num => num * 2);

console.log(result);


ANSWER:

[2, 4, 6, 8]


Mental model:

map()
 ↓
EVERY ELEMENT
 ↓
TRANSFORM
 ↓
NEW ARRAY


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q14. Output batao.

const numbers = [10, 20, 30];

const result = numbers.map(num => num + 5);

console.log(result);


ANSWER:

[15, 25, 35]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q15. Array ke har name ko uppercase karo.

const names = ["navneet", "rahul", "aman"];


ANSWER:

const result = names.map(name =>
    name.toUpperCase()
);


OUTPUT:

["NAVNEET", "RAHUL", "AMAN"]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q16. Array of objects se sirf names nikalo.

const users = [
    { name: "Navneet", age: 20 },
    { name: "Rahul", age: 21 },
    { name: "Aman", age: 22 }
];


ANSWER:

const names = users.map(user => user.name);


OUTPUT:

["Navneet", "Rahul", "Aman"]


MERN USE CASE:

API:

GET /api/users

returns:

users[]


React:

users.map(user => ...)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q17. Har product ka price 10% increase karo.

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 }
];


ANSWER:

const updatedProducts = products.map(product => ({
    ...product,
    price: product.price * 1.10
}));


OUTPUT:

[
    { name: "Laptop", price: 1100 },
    { name: "Phone", price: 550 }
]


IMPORTANT:

Original objects ko directly mutate nahi kiya.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q18. map() aur forEach() mein difference?

ANSWER:

map():

const result = numbers.map(num => num * 2);


Returns:

[2, 4, 6]


forEach():

const result = numbers.forEach(num => num * 2);


Returns:

undefined


Mental model:

map()
→ NEW ARRAY


forEach()
→ ACTION


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q19. Is code ka output kya hoga?

const numbers = [1, 2, 3];

const result = numbers.map(num => {
    num * 2;
});

console.log(result);


ANSWER:

[undefined, undefined, undefined]


WHY?

Because curly braces ke saath explicit return required hai.


Correct:

const result = numbers.map(num => {
    return num * 2;
});


OR:

const result = numbers.map(num => num * 2);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q20. Object return karte waqt problem kya hai?

const users = [
    { name: "A" },
    { name: "B" }
];

const result = users.map(user => {
    name: user.name
});


ANSWER:

[undefined, undefined]


Correct:

const result = users.map(user => ({
    name: user.name
}));


WHY?

{} arrow function body ko represent karta hai.

Object ko implicitly return karne ke liye:

({})


use karna padta hai.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — filter()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q21. filter() kya karta hai?

ANSWER:

filter() condition ke basis par elements select karta hai.


Example:

const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter(num => num > 2);


OUTPUT:

[3, 4, 5]


Mental model:

filter()
 ↓
CHECK CONDITION
 ↓
true  → KEEP
false → REMOVE


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q22. Even numbers nikalo.

const numbers = [1, 2, 3, 4, 5, 6];


ANSWER:

const even = numbers.filter(
    num => num % 2 === 0
);


OUTPUT:

[2, 4, 6]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q23. Sirf active users nikalo.

const users = [
    { name: "A", active: true },
    { name: "B", active: false },
    { name: "C", active: true }
];


ANSWER:

const activeUsers = users.filter(
    user => user.active
);


OUTPUT:

[
    { name: "A", active: true },
    { name: "C", active: true }
]


REAL INDUSTRY:

Admin dashboard mein:

Active Users
Inactive Users


aise filters bahut common hain.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q24. Price ₹50,000 se kam products nikalo.

const products = [
    { name: "Laptop", price: 70000 },
    { name: "Phone", price: 40000 },
    { name: "Mouse", price: 1000 }
];


ANSWER:

const result = products.filter(
    product => product.price < 50000
);


OUTPUT:

[
    { name: "Phone", price: 40000 },
    { name: "Mouse", price: 1000 }
]


REAL MERN:

E-commerce price filter.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q25. find() aur filter() mein difference?

ANSWER:

find()
→ first matching ELEMENT


filter()
→ ALL matching ELEMENTS


Example:

users.find(user => user.role === "admin");


Returns:

first admin object


users.filter(user => user.role === "admin");


Returns:

array containing all admins


Remember:

ONE → find()

MANY → filter()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5 — find() + findIndex()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q26. ID 3 wala user find karo.

const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" }
];


ANSWER:

const user = users.find(
    user => user.id === 3
);


OUTPUT:

{ id: 3, name: "C" }


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q27. Agar find() ko matching element na mile toh?

const users = [
    { id: 1 },
    { id: 2 }
];

const result = users.find(
    user => user.id === 10
);


ANSWER:

undefined


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q28. findIndex() kya return karta hai?

const users = [
    { id: 10 },
    { id: 20 },
    { id: 30 }
];

const index = users.findIndex(
    user => user.id === 20
);


ANSWER:

1


Because:

id 10 → index 0
id 20 → index 1
id 30 → index 2


No match:

→ -1


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6 — some() + every()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q29. some() kya karta hai?

ANSWER:

Check karta hai:

"Kya AT LEAST ONE element condition satisfy karta hai?"


Example:

const numbers = [1, 3, 5, 8];

numbers.some(num => num % 2 === 0);


OUTPUT:

true


Because 8 even hai.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q30. every() kya karta hai?

ANSWER:

Check karta hai:

"Kya ALL elements condition satisfy karte hain?"


Example:

const numbers = [2, 4, 6];

numbers.every(num => num % 2 === 0);


OUTPUT:

true


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q31. Output?

const numbers = [2, 4, 7, 8];

console.log(
    numbers.some(num => num % 2 !== 0)
);


ANSWER:

true


Because 7 odd hai.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q32. Output?

const numbers = [2, 4, 6, 8];

console.log(
    numbers.every(num => num % 2 === 0)
);


ANSWER:

true


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q33. Real MERN use case:

Check karo cart mein koi out-of-stock product hai ya nahi.


const cart = [
    { name: "Laptop", stock: 10 },
    { name: "Mouse", stock: 0 },
    { name: "Keyboard", stock: 5 }
];


ANSWER:

const hasOutOfStock = cart.some(
    item => item.stock === 0
);


OUTPUT:

true


UI:

"Some items are currently unavailable."


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q34. Check karo kya cart ke ALL items available hain?

ANSWER:

const allAvailable = cart.every(
    item => item.stock > 0
);


OUTPUT:

false


Because Mouse ka stock 0 hai.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7 — reduce()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q35. reduce() ka main purpose kya hai?

ANSWER:

Multiple values ko ek final result mein combine karna.


Examples:

Array
 ↓
reduce()
 ↓
ONE RESULT


Possible results:

number
string
object
array
etc.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q36. Sum calculate karo.

const numbers = [10, 20, 30, 40];


ANSWER:

const total = numbers.reduce(
    (sum, num) => sum + num,
    0
);


OUTPUT:

100


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q37. reduce() mein 0 kya hai?

const total = numbers.reduce(
    (sum, num) => sum + num,
    0
);


ANSWER:

0 = initial value / accumulator ki starting value.


Flow:

sum = 0

0 + 10 = 10

10 + 20 = 30

30 + 30 = 60

60 + 40 = 100


Final:

100


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q38. Shopping cart ka total calculate karo.

const cart = [
    {
        name: "Laptop",
        price: 70000,
        quantity: 1
    },
    {
        name: "Mouse",
        price: 1000,
        quantity: 2
    }
];


ANSWER:

const total = cart.reduce(
    (sum, item) =>
        sum + item.price * item.quantity,
    0
);


OUTPUT:

72000


Calculation:

70000 × 1 = 70000

1000 × 2 = 2000

Total = 72000


REAL INDUSTRY:

E-commerce checkout.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q39. Maximum number reduce() se find karo.

const numbers = [10, 40, 20, 80, 30];


ANSWER:

const max = numbers.reduce(
    (max, num) => Math.max(max, num),
    -Infinity
);


OUTPUT:

80


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q40. Completed orders ka total revenue calculate karo.

const orders = [
    { status: "completed", amount: 5000 },
    { status: "pending", amount: 3000 },
    { status: "completed", amount: 7000 }
];


ANSWER:

const revenue = orders
    .filter(order => order.status === "completed")
    .reduce(
        (total, order) => total + order.amount,
        0
    );


OUTPUT:

12000


IMPORTANT:

Yahan humne:

filter()
+
reduce()


combine kiya.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 8 — forEach()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q41. forEach() kya karta hai?

ANSWER:

Array ke har element ke liye ek action perform karta hai.


Example:

const users = ["A", "B", "C"];

users.forEach(user => {
    console.log(user);
});


OUTPUT:

A
B
C


Usually:

forEach()
→ side effect / action


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q42. forEach() aur map() ka correct use choose karo.

Situation:

"Har user ka name uppercase karke NEW ARRAY chahiye."


ANSWER:

map()


const result = users.map(
    user => user.name.toUpperCase()
);


Situation:

"Har user ka naam console mein print karna hai."


ANSWER:

forEach()


users.forEach(user => {
    console.log(user.name);
});


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 9 — SORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q43. Numbers ko ascending order mein sort karo.

const numbers = [10, 2, 30, 4];


ANSWER:

numbers.sort((a, b) => a - b);


OUTPUT:

[2, 4, 10, 30]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q44. numbers.sort() directly kyun dangerous hai?

const numbers = [10, 2, 30, 4];

numbers.sort();


ANSWER:

JavaScript default sorting ko string comparison ke basis par karta hai.


Correct numeric sort:

numbers.sort((a, b) => a - b);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q45. Descending sort.

const numbers = [10, 2, 30, 4];


ANSWER:

numbers.sort((a, b) => b - a);


OUTPUT:

[30, 10, 4, 2]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q46. Price ke according products sort karo.

const products = [
    { name: "Laptop", price: 70000 },
    { name: "Mouse", price: 1000 },
    { name: "Phone", price: 50000 }
];


ANSWER:

const sortedProducts = [...products].sort(
    (a, b) => a.price - b.price
);


WHY:

sort() original array ko mutate karta hai.

Isliye:

[...products]


se copy banayi.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 10 — splice() VS slice()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q47. splice() kya karta hai?

ANSWER:

splice() array ke andar:

ADD
REMOVE
REPLACE


kar sakta hai.


Example:

const numbers = [10, 20, 30, 40];

numbers.splice(1, 2);


OUTPUT:

[10, 40]


20 aur 30 remove hue.


IMPORTANT:

splice() mutates original array.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q48. slice() kya karta hai?

const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);


ANSWER:

[20, 30, 40]


Original:

[10, 20, 30, 40, 50]


Important:

slice() original ko modify nahi karta.


Remember:

slice → copy portion

splice → modify array


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 11 — SPREAD + IMMUTABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q49. Existing array mein new user immutably add karo.

const users = [
    { id: 1, name: "A" }
];

const newUser = {
    id: 2,
    name: "B"
};


ANSWER:

const updatedUsers = [
    ...users,
    newUser
];


OUTPUT:

[
    { id: 1, name: "A" },
    { id: 2, name: "B" }
]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q50. React mein user delete karo.

const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" }
];


User ID = 2


ANSWER:

setUsers(prev =>
    prev.filter(user => user.id !== 2)
);


Result:

[
    { id: 1, name: "A" },
    { id: 3, name: "C" }
]


This is a VERY important React pattern.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q51. React mein user update karo.

User id = 2

New name = "Rahul"


ANSWER:

setUsers(prev =>
    prev.map(user =>
        user.id === 2
            ? { ...user, name: "Rahul" }
            : user
    )
);


Mental model:

Matching item
→ update


Non-matching item
→ same


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q52. React mein new product add karo.

ANSWER:

setProducts(prev => [
    ...prev,
    newProduct
]);


Three most important React array operations:

ADD:

[...array, item]


DELETE:

array.filter(...)


UPDATE:

array.map(...)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 12 — ARRAY OF OBJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q53. Sirf developer role wale users ke names nikalo.

const users = [
    { name: "Navneet", role: "developer" },
    { name: "Rahul", role: "designer" },
    { name: "Aman", role: "developer" }
];


ANSWER:

const developers = users
    .filter(user => user.role === "developer")
    .map(user => user.name);


OUTPUT:

["Navneet", "Aman"]


Flow:

users
 ↓
filter()
 ↓
developers
 ↓
map()
 ↓
names


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q54. Active admins ki count nikalo.

const users = [
    { role: "admin", active: true },
    { role: "admin", active: false },
    { role: "user", active: true },
    { role: "admin", active: true }
];


ANSWER:

const count = users
    .filter(user =>
        user.role === "admin" &&
        user.active
    )
    .length;


OUTPUT:

2


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q55. Admin users ko group karo.

const users = [
    { name: "A", role: "admin" },
    { name: "B", role: "user" },
    { name: "C", role: "admin" }
];


ANSWER:

const grouped = users.reduce((result, user) => {

    if (!result[user.role]) {
        result[user.role] = [];
    }

    result[user.role].push(user);

    return result;

}, {});


OUTPUT conceptually:

{
    admin: [
        { name: "A", role: "admin" },
        { name: "C", role: "admin" }
    ],

    user: [
        { name: "B", role: "user" }
    ]
}


This is an advanced but VERY useful reduce() pattern.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 13 — METHOD CHAINING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q56. ₹10,000 se expensive completed orders ka total nikalo.

const orders = [
    { status: "completed", amount: 15000 },
    { status: "pending", amount: 20000 },
    { status: "completed", amount: 5000 },
    { status: "completed", amount: 12000 }
];


ANSWER:

const total = orders

    .filter(order =>
        order.status === "completed"
    )

    .filter(order =>
        order.amount > 10000
    )

    .reduce(
        (sum, order) => sum + order.amount,
        0
    );


OUTPUT:

27000


Because:

15000
12000

Total:

27000


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q57. Search + filter + map.

const products = [
    { name: "iPhone", category: "phone" },
    { name: "Samsung", category: "phone" },
    { name: "Dell Laptop", category: "laptop" }
];


Requirement:

Search "phone"


ANSWER:

const result = products

    .filter(product =>
        product.name
            .toLowerCase()
            .includes("phone")
    )

    .map(product => product.name);


OUTPUT:

["iPhone"]


REAL MERN:

Search bar → filter → UI


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 14 — CALLBACK PARAMETERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q58. map() callback ko kitne common parameters mil sakte hain?

ANSWER:

element
index
array


Example:

const numbers = [10, 20, 30];

numbers.map((value, index, array) => {

    console.log(value);
    console.log(index);
    console.log(array);

});


Usually:

value


hi enough hota hai.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q59. Index ke saath names print karo.

const users = ["A", "B", "C"];


ANSWER:

users.forEach((user, index) => {

    console.log(index, user);

});


OUTPUT:

0 A
1 B
2 C


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 15 — IMPORTANT TRAPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q60. Output kya hoga?

const arr = [];

if (arr) {
    console.log("YES");
}


ANSWER:

YES


WHY?

Empty array bhi truthy hota hai.


[] → truthy


Isliye array empty hai ya nahi check karna ho:

if (arr.length > 0)


use karo.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q61. Output?

const numbers = [1, 2, 3];

const result = numbers.forEach(num => num * 2);

console.log(result);


ANSWER:

undefined


WHY?

forEach() new array return nahi karta.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q62. Output?

const numbers = [1, 2, 3];

const result = numbers.filter(num => {
    num > 1;
});


ANSWER:

[]


WHY?

Curly braces ke andar return missing hai.


Correct:

const result = numbers.filter(num => {
    return num > 1;
});


OR:

const result = numbers.filter(num => num > 1);


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q63. Output?

const numbers = [1, 2, 3];

const result = numbers.map(num => {
    return num > 1;
});


ANSWER:

[false, true, true]


Important:

map() values transform karta hai.

Filter nahi karta.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q64. Which one is correct?

A:

users.map(user => {
    if (user.active) {
        return user;
    }
});


B:

users.filter(user => user.active);


ANSWER:

B


WHY?

Requirement:

"Sirf active users chahiye."


That's selection.

Selection → filter()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 16 — ASYNC + ARRAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q65. Is code mein problem kya hai?

users.forEach(async user => {

    await sendEmail(user);

});


ANSWER:

forEach() async callback ko wait nahi karta.


Agar tumhe parallel execution chahiye:

await Promise.all(
    users.map(user =>
        sendEmail(user)
    )
);


Flow:

users[]
 ↓
map()
 ↓
Promise[]
 ↓
Promise.all()
 ↓
wait for all


VERY IMPORTANT NODE.JS PATTERN.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q66. Agar API calls sequentially karni hain toh?

ANSWER:

for (const user of users) {

    await sendEmail(user);

}


Use:

for...of


Not:

forEach(async ...)


Difference:

Promise.all()

→ parallel


for...of + await

→ sequential


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 17 — FLAT + FLATMAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q67. Nested array flatten karo.

const numbers = [
    [1, 2],
    [3, 4],
    [5, 6]
];


ANSWER:

const result = numbers.flat();


OUTPUT:

[1, 2, 3, 4, 5, 6]


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q68. flatMap() ka use karo.

const users = [
    {
        name: "A",
        skills: ["JS", "React"]
    },
    {
        name: "B",
        skills: ["Node", "MongoDB"]
    }
];


ANSWER:

const skills = users.flatMap(
    user => user.skills
);


OUTPUT:

[
    "JS",
    "React",
    "Node",
    "MongoDB"
]


Mental model:

flatMap()

≈

map()
+
flat()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 18 — REAL MERN QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q69. API se products aaye hain. Sirf electronics products display karne hain.

const products = [
    { name: "Laptop", category: "electronics" },
    { name: "Shoes", category: "fashion" },
    { name: "Phone", category: "electronics" }
];


ANSWER:

const electronics = products.filter(
    product => product.category === "electronics"
);


Then React:

electronics.map(product => (

    <ProductCard
        key={product.id}
        product={product}
    />

));


Flow:

API
 ↓
filter()
 ↓
map()
 ↓
UI


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q70. Cart ka total + GST calculate karo.

const cart = [
    { price: 1000, quantity: 2 },
    { price: 500, quantity: 1 }
];


GST = 18%


ANSWER:

const subtotal = cart.reduce(
    (total, item) =>
        total + item.price * item.quantity,
    0
);


const gst = subtotal * 0.18;

const grandTotal = subtotal + gst;


Calculation:

1000 × 2 = 2000

500 × 1 = 500

Subtotal = 2500

GST = 450

Grand Total = 2950


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q71. Admin dashboard mein completed, pending aur cancelled orders count
nikalo.

const orders = [
    { status: "completed" },
    { status: "pending" },
    { status: "completed" },
    { status: "cancelled" },
    { status: "completed" }
];


ANSWER:

const completed = orders.filter(
    order => order.status === "completed"
).length;


const pending = orders.filter(
    order => order.status === "pending"
).length;


const cancelled = orders.filter(
    order => order.status === "cancelled"
).length;


OUTPUT:

completed = 3
pending = 1
cancelled = 1


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q72. Ek array mein duplicate users ho sakte hain. Unique IDs nikalo.

const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" }
];


ANSWER:

const uniqueIds = [
    ...new Set(users.map(user => user.id))
];


OUTPUT:

[1, 2]


Flow:

users
 ↓
map()
 ↓
IDs
 ↓
Set
 ↓
spread
 ↓
array


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 19 — ADVANCED REDUCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q73. Array ko object mein convert karo.

const users = [
    { id: 101, name: "A" },
    { id: 102, name: "B" }
];


Expected:

{
    101: { id: 101, name: "A" },
    102: { id: 102, name: "B" }
}


ANSWER:

const result = users.reduce((acc, user) => {

    acc[user.id] = user;

    return acc;

}, {});


This pattern is useful when you want fast lookup by ID.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q74. Products ki total quantity nikalo.

const cart = [
    { name: "Laptop", quantity: 2 },
    { name: "Mouse", quantity: 3 },
    { name: "Keyboard", quantity: 1 }
];


ANSWER:

const totalQuantity = cart.reduce(
    (total, item) =>
        total + item.quantity,
    0
);


OUTPUT:

6


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q75. Most expensive product find karo.

const products = [
    { name: "Laptop", price: 70000 },
    { name: "Phone", price: 50000 },
    { name: "Monitor", price: 30000 }
];


ANSWER:

const expensive = products.reduce(
    (max, product) =>
        product.price > max.price
            ? product
            : max
);


OUTPUT:

{
    name: "Laptop",
    price: 70000
}


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 20 — INTERVIEW LEVEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q76. map(), filter() aur reduce() ko ek line mein explain karo.

ANSWER:

map()
→ Every element ko transform karta hai.


filter()
→ Condition ke basis par elements select karta hai.


reduce()
→ Multiple elements ko ek final result mein combine karta hai.


Interview answer:

"map transforms, filter selects, and reduce aggregates."


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q77. Which methods return a new array?

Common examples:

map()
filter()
slice()
concat()
flat()
flatMap()


These do NOT mutate the original array.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q78. Kaunse common methods mutate karte hain?

ANSWER:

push()
pop()
shift()
unshift()
splice()
sort()
reverse()


Important React consideration:

State array ko directly mutate karne se bachna chahiye.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q79. map() ki time complexity kya hoti hai?

ANSWER:

O(n)


Because array ke har element ko process karta hai.


Example:

100 elements

→ approximately 100 iterations


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q80. filter() ki time complexity?

ANSWER:

O(n)


Because har element ko condition check karni padti hai.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q81. reduce() ki time complexity?

ANSWER:

O(n)


Because normally har element process hota hai.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q82. find() kab stop karta hai?

ANSWER:

Jab first matching element mil jaata hai.


Example:

const numbers = [2, 4, 6, 8, 10];

numbers.find(num => num === 6);


It checks:

2
4
6 ← FOUND


Uske baad remaining elements ko check karne ki zarurat nahi.


Worst case:

O(n)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q83. some() aur every() ka short mental model?

ANSWER:

some():

"ANY ONE?"


every():

"ALL?"


Example:

some():

Kya koi admin hai?


every():

Kya sab users verified hain?


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 21 — VERY IMPORTANT INTERVIEW TRAPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q84. Output?

const arr = [1, 2, 3];

const result = arr.map(x => {
    return x * 2;
});

console.log(arr);
console.log(result);


ANSWER:

arr:

[1, 2, 3]


result:

[2, 4, 6]


map() original array ko change nahi karta.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q85. Output?

const arr = [3, 1, 2];

const result = arr.sort();

console.log(arr);
console.log(result);


ANSWER:

Dono:

[1, 2, 3]


WHY?

sort() original array ko mutate karta hai.

result aur arr same mutated array ko refer karte hain.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q86. Output?

const users = [
    { name: "A" },
    { name: "B" }
];

const copy = [...users];

copy[0].name = "X";

console.log(users[0].name);


ANSWER:

X


WHY?

Spread ne sirf array ko shallow-copy kiya.

Objects same references hain.


Mental model:

users
 ↓
[ objectA, objectB ]

copy
 ↓
[ same objectA, same objectB ]


Array new hai.

Objects same hain.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q87. React mein ye kyun avoid karna chahiye?

users.push(newUser);

setUsers(users);


ANSWER:

Because original state array mutate ho gaya.


Better:

setUsers(prev => [
    ...prev,
    newUser
]);


This creates a new array reference.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 22 — FINAL REAL-WORLD CHALLENGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q88. Product search system banao.

Requirements:

1. Search by name
2. Only products in stock
3. Price below 50,000
4. Return product names


ANSWER:

const result = products

    .filter(product =>
        product.name
            .toLowerCase()
            .includes(search.toLowerCase())
    )

    .filter(product =>
        product.stock > 0
    )

    .filter(product =>
        product.price < 50000
    )

    .map(product =>
        product.name
    );


Flow:

products
 ↓
search filter
 ↓
stock filter
 ↓
price filter
 ↓
map
 ↓
names


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q89. Completed orders ka:

1. Count
2. Revenue
3. Customer names

nikalo.


ANSWER:

const completedOrders = orders.filter(
    order => order.status === "completed"
);


const count = completedOrders.length;


const revenue = completedOrders.reduce(
    (total, order) =>
        total + order.amount,
    0
);


const customers = completedOrders.map(
    order => order.customer
);


Yahan humne:

filter()
length
reduce()
map()


sab use kiya.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q90. Cart validation system banao.

Requirement:

Agar:

1. Cart empty hai → "Cart is empty"
2. Koi item out of stock hai → "Some items unavailable"
3. Sab available hain → "Ready for checkout"


ANSWER:

if (cart.length === 0) {

    console.log("Cart is empty");

}
else if (
    cart.some(item => item.stock === 0)
) {

    console.log("Some items unavailable");

}
else {

    console.log("Ready for checkout");

}


This is a very realistic e-commerce condition.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 23 — METHOD SELECTION QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Q91. "Har product ka naam uppercase karo."

ANSWER:

map()


Q92. "₹5000 se zyada wale products nikalo."

ANSWER:

filter()


Q93. "ID 101 wala product find karo."

ANSWER:

find()


Q94. "Kya koi product out of stock hai?"

ANSWER:

some()


Q95. "Kya sab products active hain?"

ANSWER:

every()


Q96. "Total revenue calculate karo."

ANSWER:

reduce()


Q97. "Har user ko email bhejo."

ANSWER:

forEach()

or async case mein:

Promise.all(
    users.map(...)
)


depending on required async behavior.


Q98. "User ID ka index find karo."

ANSWER:

findIndex()


Q99. "Role 'admin' array mein exist karta hai?"

ANSWER:

includes()


Q100. "Products ko price ke according sort karo."

ANSWER:

sort()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL MASTER CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


                 ARRAY HOF MASTER MAP


map()
│
├── Every element
├── Transform
├── Returns NEW ARRAY
└── Example:
    products.map(p => p.name)


filter()
│
├── Select elements
├── Condition
├── Returns NEW ARRAY
└── Example:
    products.filter(p => p.stock > 0)


reduce()
│
├── Combine
├── Aggregate
├── Returns ONE final result
└── Example:
    cart.reduce((sum, item) => sum + item.price, 0)


forEach()
│
├── Perform action
├── Does NOT return new array
└── Example:
    users.forEach(user => console.log(user))


find()
│
├── Find ONE
├── Returns first match
└── No match → undefined


findIndex()
│
├── Find index
└── No match → -1


some()
│
├── ANY?
└── Returns true / false


every()
│
├── ALL?
└── Returns true / false


includes()
│
├── Does value exist?
└── Returns true / false


sort()
│
├── Sort
└── MUTATES original array


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE 10-SECOND DECISION TREE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Question:

"Har item ko change karna hai?"

        ↓

      map()


"Sirf kuch items chahiye?"

        ↓

     filter()


"Ek matching item chahiye?"

        ↓

      find()


"Sabko combine karke ek result chahiye?"

        ↓

     reduce()


"Har item par koi action karna hai?"

        ↓

     forEach()


"Kya koi ek condition satisfy karta hai?"

        ↓

      some()


"Kya sab condition satisfy karte hain?"

        ↓

      every()


"Kya specific value exist karti hai?"

        ↓

     includes()


"Sorting karni hai?"

        ↓

      sort()


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MERN DEVELOPER MASTER FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


                 MONGODB
                    ↓
              Express API
                    ↓
             API Response
                    ↓
              Array of Objects
                    ↓
        ┌───────────┼────────────┐
        ↓           ↓            ↓
      filter()    map()       reduce()
        ↓           ↓            ↓
      SELECT     TRANSFORM    CALCULATE
        ↓           ↓            ↓
        └───────────┼────────────┘
                    ↓
                React State
                    ↓
              React Components
                    ↓
                    UI


Most important React CRUD patterns:

ADD:

setItems(prev => [
    ...prev,
    newItem
]);


DELETE:

setItems(prev =>
    prev.filter(item => item.id !== id)
);


UPDATE:

setItems(prev =>
    prev.map(item =>
        item.id === id
            ? { ...item, name: newName }
            : item
    )
);


This combination:

spread
+
map
+
filter


should become muscle memory for a MERN developer.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT YOU SHOULD NOW BE ABLE TO DO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


After completing these questions, you should be comfortable with:

✓ Arrays
✓ Array of Objects
✓ Indexing
✓ length
✓ Mutation
✓ Immutability
✓ Spread
✓ Destructuring
✓ Callback functions
✓ Higher Order Functions
✓ map()
✓ filter()
✓ reduce()
✓ forEach()
✓ find()
✓ findIndex()
✓ some()
✓ every()
✓ includes()
✓ sort()
✓ slice()
✓ splice()
✓ flat()
✓ flatMap()
✓ Method chaining
✓ Async + map()
✓ Promise.all()
✓ React array state
✓ CRUD with arrays
✓ Search
✓ Filtering
✓ Sorting
✓ Cart calculations
✓ Dashboard calculations
✓ Permissions
✓ API data transformation
✓ Basic performance
✓ Common interview traps


ONE LAST IMPORTANT THING:

JavaScript Array HOFs ≠ Array DSA.

HOFs help you WRITE real MERN applications.

DSA patterns help you SOLVE coding interview problems.

For product-based companies, you need both:

MERN ARRAY SKILLS
        +
DSA ARRAY PATTERNS

DSA side:

Two Pointers
Sliding Window
Prefix Sum
Hashing
Binary Search
Kadane
Intervals
3Sum
4Sum
Subarrays
Matrix
Sorting

So after you are comfortable with these Array HOF questions,
your next step should be to practice ARRAY DSA patterns rather than
learning another random JavaScript array method.


*/