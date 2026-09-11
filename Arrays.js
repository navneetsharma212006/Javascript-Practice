/*
╔══════════════════════════════════════════════════════════════════════╗
║                         ARRAYS IN JAVASCRIPT                       ║
║                 MERN DEVELOPER — IMPORTANT PARTS                   ║
╚══════════════════════════════════════════════════════════════════════╝


Q1. What is an Array in JavaScript?

Answer:

An array is a data structure used to store multiple values
inside a single variable.

Example:

const fruits = ["Apple", "Banana", "Mango"];


Instead of:

const fruit1 = "Apple";
const fruit2 = "Banana";
const fruit3 = "Mango";


We can use:

const fruits = ["Apple", "Banana", "Mango"];


Think:

Array = ordered collection of values


──────────────────────────────────────────────────────────────────────


Q2. Why are arrays extremely important in MERN?

Answer:

Because real applications constantly work with lists of data.

Examples:

Users
Products
Orders
Cart items
Messages
Comments
Notifications
Categories
Skills
Permissions


Example API response:

[
    {
        "name": "Keyboard",
        "price": 1500
    },
    {
        "name": "Mouse",
        "price": 800
    }
]


This is an array containing objects.


You will work with this type of data constantly in React and Node.js.


──────────────────────────────────────────────────────────────────────


Q3. How do you create an array?

Answer:

Use square brackets:

const fruits = ["Apple", "Banana", "Mango"];


You can also create an empty array:

const users = [];


Then add data later.


──────────────────────────────────────────────────────────────────────


Q4. Can an array contain different data types?

Answer:

YES.

Example:

const data = [
    "Navneet",
    20,
    true,
    null
];


An array can contain:

String
Number
Boolean
Object
Array
etc.


However, in professional applications, arrays usually contain
related types of data.


Example:

const users = [
    {
        name: "Navneet",
        age: 20
    },
    {
        name: "Rahul",
        age: 21
    }
];


This is much more common in MERN.


──────────────────────────────────────────────────────────────────────


Q5. What is an index?

Answer:

An index is the position of an element in an array.

IMPORTANT:

Array indexes start from 0.


Example:

const fruits = ["Apple", "Banana", "Mango"];


Index:

0 → Apple
1 → Banana
2 → Mango


Access:

console.log(fruits[0]);

Output:

Apple


console.log(fruits[2]);

Output:

Mango


──────────────────────────────────────────────────────────────────────


Q6. Why does JavaScript start array indexes from 0?

Answer:

This is simply how JavaScript arrays are designed.

So:

first element → index 0
second element → index 1
third element → index 2


This is extremely important when working with:

loops
map
filter
array algorithms
React lists


──────────────────────────────────────────────────────────────────────


Q7. How do you get the length of an array?

Answer:

Use:

.length


Example:

const users = ["Navneet", "Rahul", "Aman"];

console.log(users.length);


Output:

3


Important:

length is the number of elements.

The last index is:

length - 1


So:

users[users.length - 1]


gives the last element.


──────────────────────────────────────────────────────────────────────


Q8. How do you get the last element?

Answer:

Traditional approach:

const users = ["Navneet", "Rahul", "Aman"];

console.log(users[users.length - 1]);


Output:

Aman


Modern JavaScript also provides:

users.at(-1)


Example:

console.log(users.at(-1));


Output:

Aman


Both are useful.


──────────────────────────────────────────────────────────────────────


Q9. What happens if you access an index that doesn't exist?

Answer:

You get:

undefined


Example:

const users = ["Navneet", "Rahul"];

console.log(users[5]);


Output:

undefined


This is important when handling API data.


──────────────────────────────────────────────────────────────────────


Q10. Can you change an array element?

Answer:

YES.

Example:

const users = ["Navneet", "Rahul"];

users[0] = "Aman";

console.log(users);


Output:

["Aman", "Rahul"]


Arrays are mutable.


──────────────────────────────────────────────────────────────────────


Q11. What is push()?

Answer:

push() adds an element to the END of an array.

Example:

const users = ["Navneet", "Rahul"];

users.push("Aman");

console.log(users);


Output:

["Navneet", "Rahul", "Aman"]


push() changes the original array.


──────────────────────────────────────────────────────────────────────


Q12. What is pop()?

Answer:

pop() removes the LAST element.

Example:

const users = ["Navneet", "Rahul", "Aman"];

users.pop();

console.log(users);


Output:

["Navneet", "Rahul"]


pop() changes the original array.


──────────────────────────────────────────────────────────────────────


Q13. What is unshift()?

Answer:

unshift() adds an element to the BEGINNING.

Example:

const users = ["Rahul", "Aman"];

users.unshift("Navneet");

console.log(users);


Output:

["Navneet", "Rahul", "Aman"]


It changes the original array.


──────────────────────────────────────────────────────────────────────


Q14. What is shift()?

Answer:

shift() removes the FIRST element.

Example:

const users = ["Navneet", "Rahul", "Aman"];

users.shift();

console.log(users);


Output:

["Rahul", "Aman"]


It changes the original array.


──────────────────────────────────────────────────────────────────────


Q15. What are the four basic methods?

Answer:


push()
→ add to end


pop()
→ remove from end


unshift()
→ add to beginning


shift()
→ remove from beginning


Remember:

        START             END

         ↓                 ↓

     shift()          pop()
     unshift()        push()


These are the basic array operations.


──────────────────────────────────────────────────────────────────────


Q16. What is splice()?

Answer:

splice() is used to ADD, REMOVE, or REPLACE elements
at a specific position.


Example:

const users = ["A", "B", "C", "D"];

users.splice(1, 1);


Meaning:

Start at index 1
Remove 1 element


Result:

["A", "C", "D"]


splice() changes the original array.


──────────────────────────────────────────────────────────────────────


Q17. How do you add an element using splice()?

Answer:

Example:

const users = ["A", "B", "D"];

users.splice(2, 0, "C");


Meaning:

index → 2
remove → 0
add → "C"


Result:

["A", "B", "C", "D"]


──────────────────────────────────────────────────────────────────────


Q18. What is slice()?

Answer:

slice() creates a portion of an array WITHOUT changing
the original array.


Example:

const users = ["A", "B", "C", "D"];

const result = users.slice(1, 3);

console.log(result);


Output:

["B", "C"]


Original array:

["A", "B", "C", "D"]


is unchanged.


IMPORTANT:

slice() → does NOT mutate

splice() → DOES mutate


──────────────────────────────────────────────────────────────────────


Q19. What is the easiest way to remember splice vs slice?

Answer:


slice:

"Give me a portion."


splice:

"Change the original array."


Example:

slice()

const result = users.slice(1, 3);


splice()

users.splice(1, 1);


Remember:

SLICE → copy a section

SPLICE → modify original


──────────────────────────────────────────────────────────────────────


Q20. How do you check whether an array contains a value?

Answer:

Use:

includes()


Example:

const skills = ["JavaScript", "React", "Node"];

console.log(skills.includes("React"));


Output:

true


Example:

console.log(skills.includes("Python"));


Output:

false


Very useful for:

permissions
roles
selected items
feature checks


──────────────────────────────────────────────────────────────────────


Q21. What is indexOf()?

Answer:

indexOf() returns the index of a value.

Example:

const skills = ["JavaScript", "React", "Node"];

console.log(skills.indexOf("React"));


Output:

1


If the value doesn't exist:

-1


Example:

skills.indexOf("Python");


Output:

-1


──────────────────────────────────────────────────────────────────────


Q22. What is find()?

Answer:

find() returns the FIRST element that matches a condition.


Example:

const users = [
    { id: 1, name: "Navneet" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" }
];


const user = users.find((user) => user.id === 2);


Result:

{ id: 2, name: "Rahul" }


This is extremely useful in MERN applications.


──────────────────────────────────────────────────────────────────────


Q23. What is findIndex()?

Answer:

findIndex() returns the index of the first matching element.


Example:

const users = [
    { id: 1, name: "Navneet" },
    { id: 2, name: "Rahul" }
];


const index = users.findIndex((user) => user.id === 2);


Output:

1


If no element matches:

-1


──────────────────────────────────────────────────────────────────────


Q24. What is map()?

Answer:

map() creates a NEW array by transforming every element.


Example:

const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);


Output:

[2, 4, 6]


Original:

[1, 2, 3]


is unchanged.


This is one of the MOST IMPORTANT array methods
for React development.


──────────────────────────────────────────────────────────────────────


Q25. What is a real React use case for map()?

Answer:

Suppose your API returns:

const products = [
    {
        id: 1,
        name: "Keyboard",
        price: 1500
    },
    {
        id: 2,
        name: "Mouse",
        price: 800
    }
];


React can render:

products.map((product) => (
    <div key={product.id}>
        {product.name}
        {product.price}
    </div>
));


This is one of the most common array patterns in React.


──────────────────────────────────────────────────────────────────────


Q26. What is filter()?

Answer:

filter() creates a NEW array containing elements
that satisfy a condition.


Example:

const numbers = [10, 15, 20, 25];

const result = numbers.filter((number) => number > 15);


Output:

[20, 25]


filter() does not change the original array.


──────────────────────────────────────────────────────────────────────


Q27. What is a real MERN use case for filter()?

Answer:

Suppose you have products:

const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "Monitor", price: 5000 }
];


You want products under ₹2000:

const cheapProducts = products.filter(
    (product) => product.price < 2000
);


Result:

Keyboard
Mouse


This is commonly used for:

search
filtering
category selection
price ranges
active users


──────────────────────────────────────────────────────────────────────


Q28. What is reduce()?

Answer:

reduce() combines array elements into ONE final value.


Example:

const prices = [100, 200, 300];

const total = prices.reduce(
    (sum, price) => sum + price,
    0
);


Output:

600


Think:

map → transform every item

filter → select some items

reduce → combine items into one result


──────────────────────────────────────────────────────────────────────


Q29. What is a real MERN use case for reduce()?

Answer:

Shopping cart.


Example:

const cart = [
    { name: "Keyboard", price: 1500, quantity: 2 },
    { name: "Mouse", price: 800, quantity: 1 }
];


Calculate total:

const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
);


Calculation:

1500 × 2 = 3000

800 × 1 = 800

Total:

3800


This is a realistic e-commerce use case.


──────────────────────────────────────────────────────────────────────


Q30. What is forEach()?

Answer:

forEach() executes a function for every element.


Example:

const users = ["Navneet", "Rahul", "Aman"];

users.forEach((user) => {
    console.log(user);
});


Output:

Navneet
Rahul
Aman


Important:

forEach() does NOT create a new array.


Use it when you simply want to perform an action for each item.


──────────────────────────────────────────────────────────────────────


Q31. What is the difference between map() and forEach()?

Answer:


map():

Transforms data and returns a NEW array.


const result = numbers.map(
    (number) => number * 2
);


forEach():

Performs an action but does not create a new array.


numbers.forEach((number) => {
    console.log(number);
});


Simple rule:

Need a new array → map()

Just perform an action → forEach()


──────────────────────────────────────────────────────────────────────


Q32. What is some()?

Answer:

some() checks whether AT LEAST ONE element satisfies a condition.


Example:

const users = [
    { name: "Navneet", isAdmin: false },
    { name: "Rahul", isAdmin: true }
];


const hasAdmin = users.some(
    (user) => user.isAdmin
);


Output:

true


Real use:

"Does this order contain an expensive product?"

"Does this user have admin permission?"

"Is anyone online?"


──────────────────────────────────────────────────────────────────────


Q33. What is every()?

Answer:

every() checks whether ALL elements satisfy a condition.


Example:

const ages = [20, 25, 30];

const result = ages.every(
    (age) => age >= 18
);


Output:

true


Real use:

"Are all required fields valid?"

"Are all products in stock?"

"Have all users completed verification?"


──────────────────────────────────────────────────────────────────────


Q34. What is sort()?

Answer:

sort() sorts an array.


IMPORTANT:

By default, JavaScript sorts values as strings.


Example:

const numbers = [10, 2, 5];

numbers.sort();

console.log(numbers);


You may get:

[10, 2, 5]


because JavaScript compares them like strings.


For numbers:

numbers.sort((a, b) => a - b);


Ascending:

[2, 5, 10]


Descending:

numbers.sort((a, b) => b - a);


IMPORTANT:

sort() mutates the original array.


──────────────────────────────────────────────────────────────────────


Q35. Why is sort() important in MERN?

Answer:

You may need to sort:

products by price
users by name
orders by date
messages by time
ratings
search results


Example:

products.sort((a, b) => a.price - b.price);


This sorts products from cheapest to most expensive.


──────────────────────────────────────────────────────────────────────


Q36. What is reverse()?

Answer:

reverse() reverses the array.


Example:

const numbers = [1, 2, 3];

numbers.reverse();

console.log(numbers);


Output:

[3, 2, 1]


IMPORTANT:

reverse() mutates the original array.


──────────────────────────────────────────────────────────────────────


Q37. What are modern non-mutating alternatives to sort() and reverse()?

Answer:

Modern JavaScript provides:

toSorted()

toReversed()


Example:

const numbers = [3, 1, 2];

const sorted = numbers.toSorted(
    (a, b) => a - b
);


Original:

[3, 1, 2]


New array:

[1, 2, 3]


Similarly:

const reversed = numbers.toReversed();


These are useful when you want to preserve the original array,
which is especially helpful in React state management.


──────────────────────────────────────────────────────────────────────


Q38. What is join()?

Answer:

join() converts array elements into a string.


Example:

const skills = ["JavaScript", "React", "Node"];

const result = skills.join(", ");


Output:

"JavaScript, React, Node"


Useful when displaying or sending comma-separated data.


──────────────────────────────────────────────────────────────────────


Q39. What is split()?

Answer:

split() belongs to strings, not arrays.


It converts a string into an array.


Example:

const skills = "JavaScript,React,Node";

const result = skills.split(",");


Output:

["JavaScript", "React", "Node"]


Very common when processing user input.


Remember:

split() → String → Array

join() → Array → String


──────────────────────────────────────────────────────────────────────


Q40. What is concat()?

Answer:

concat() combines arrays.


Example:

const frontend = ["React", "CSS"];

const backend = ["Node", "Express"];

const skills = frontend.concat(backend);


Result:

["React", "CSS", "Node", "Express"]


It creates a new array.


──────────────────────────────────────────────────────────────────────


Q41. What is the spread operator with arrays?

Answer:

The spread operator:

...


can copy or combine arrays.


Example:

const numbers = [1, 2, 3];

const copy = [...numbers];


Now:

copy

contains:

[1, 2, 3]


This is extremely important in React.


──────────────────────────────────────────────────────────────────────


Q42. Why is spread important in React?

Answer:

React state should generally be updated without mutating
the existing array directly.


Bad:

const users = ["A", "B"];

users.push("C");


Better:

setUsers([
    ...users,
    "C"
]);


The spread operator creates a new array.


This is a very important React concept.


──────────────────────────────────────────────────────────────────────


Q43. How do you remove an item from a React array?

Answer:

Suppose:

const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" }
];


Remove id 2:

setUsers(
    users.filter((user) => user.id !== 2)
);


This creates a new array without that user.


This pattern is extremely common in React.


──────────────────────────────────────────────────────────────────────


Q44. How do you update an object inside a React array?

Answer:

Example:

const users = [
    { id: 1, name: "A", active: false },
    { id: 2, name: "B", active: false }
];


Update user 2:

setUsers(
    users.map((user) =>
        user.id === 2
            ? { ...user, active: true }
            : user
    )
);


This is an extremely important React pattern.


Think:

map → find the item → create updated object

filter → remove the item


──────────────────────────────────────────────────────────────────────


Q45. What is an Array of Objects?

Answer:

It is an array where each element is an object.


Example:

const users = [
    {
        id: 1,
        name: "Navneet",
        age: 20
    },
    {
        id: 2,
        name: "Rahul",
        age: 21
    }
];


This is probably the MOST important array structure
for MERN development.


Why?

Because API responses commonly look exactly like this.


──────────────────────────────────────────────────────────────────────


Q46. How do you access data inside an array of objects?

Answer:

Example:

const users = [
    {
        name: "Navneet",
        age: 20
    }
];


Access array element:

users[0]


Access object property:

users[0].name


Output:

Navneet


So:

users
→ Array

users[0]
→ Object

users[0].name
→ String


──────────────────────────────────────────────────────────────────────


Q47. How do you search an array of objects?

Answer:

Use find().


Example:

const users = [
    { id: 1, name: "Navneet" },
    { id: 2, name: "Rahul" }
];


const user = users.find(
    (user) => user.id === 2
);


Result:

{
    id: 2,
    name: "Rahul"
}


This is a very common pattern.


──────────────────────────────────────────────────────────────────────


Q48. How do you filter an array of objects?

Answer:

Use filter().


Example:

const users = [
    { name: "Navneet", age: 20 },
    { name: "Rahul", age: 17 },
    { name: "Aman", age: 22 }
];


const adults = users.filter(
    (user) => user.age >= 18
);


Result:

Navneet
Aman


──────────────────────────────────────────────────────────────────────


Q49. What is shallow copying of an array?

Answer:

When you do:

const copy = [...users];


you create a new array.


But nested objects are still referenced.


Example:

const users = [
    {
        name: "Navneet"
    }
];


const copy = [...users];

copy[0].name = "Rahul";


Now:

users[0].name


is also:

"Rahul"


Why?

The outer array was copied,
but the object inside was still shared.


This is called a:

Shallow copy.


This concept is important when working with React state.


──────────────────────────────────────────────────────────────────────


Q50. What is a common array reference mistake?

Answer:

Example:

const arr1 = [1, 2, 3];

const arr2 = arr1;

arr2.push(4);


Now:

console.log(arr1);


Output:

[1, 2, 3, 4]


Why?

arr1 and arr2 point to the SAME array.


Think:

arr1 ───────┐
            ↓
        [1, 2, 3, 4]
            ↑
arr2 ───────┘


──────────────────────────────────────────────────────────────────────


Q51. How can you create a new array instead?

Answer:

Use spread:

const arr1 = [1, 2, 3];

const arr2 = [...arr1];

arr2.push(4);


Now:

arr1:

[1, 2, 3]


arr2:

[1, 2, 3, 4]


Different arrays.


──────────────────────────────────────────────────────────────────────


Q52. What is flat()?

Answer:

flat() converts nested arrays into a flatter array.


Example:

const numbers = [
    [1, 2],
    [3, 4]
];


const result = numbers.flat();


Output:

[1, 2, 3, 4]


Useful when API data or processing creates nested arrays.


──────────────────────────────────────────────────────────────────────


Q53. What is flatMap()?

Answer:

flatMap() combines:

map()
+
flat()


Example:

const users = [
    {
        name: "A",
        skills: ["React", "Node"]
    },
    {
        name: "B",
        skills: ["MongoDB"]
    }
];


const skills = users.flatMap(
    (user) => user.skills
);


Result:

["React", "Node", "MongoDB"]


Useful, but you don't need to master it before
map/filter/reduce.


──────────────────────────────────────────────────────────────────────


Q54. What happens if you use delete on an array element?

Answer:

Avoid it.


Example:

const numbers = [10, 20, 30];

delete numbers[1];


You may get:

[10, empty, 30]


It creates a hole rather than properly removing the element.


Use:

splice()

or, in React:

filter()


instead.


──────────────────────────────────────────────────────────────────────


Q55. What is array chaining?

Answer:

You can use multiple array methods together.


Example:

const users = [
    { name: "A", age: 20 },
    { name: "B", age: 17 },
    { name: "C", age: 25 }
];


const names = users
    .filter((user) => user.age >= 18)
    .map((user) => user.name);


Result:

["A", "C"]


Flow:

users

↓ filter

adults

↓ map

names


This is extremely common in React.


──────────────────────────────────────────────────────────────────────


Q56. What is an important async array mistake?

Answer:

Do NOT assume forEach waits for async operations.


Example:

users.forEach(async (user) => {
    await fetchUser(user);
});


The outer code does NOT wait for all of these operations.


For sequential execution:

for (const user of users) {
    await fetchUser(user);
}


For parallel execution:

await Promise.all(
    users.map((user) => fetchUser(user))
);


This is important in Node.js backend development.


──────────────────────────────────────────────────────────────────────


Q57. What is Promise.all with map()?

Answer:

It is a common way to run multiple async operations concurrently.


Example:

const results = await Promise.all(
    users.map((user) => fetchUserData(user.id))
);


Flow:

users

↓ map

Promises

↓ Promise.all

Wait for all

↓


results


This is useful for:

multiple API calls
batch operations
parallel database-related work


Use it carefully when the operations are independent.


──────────────────────────────────────────────────────────────────────


Q58. What is the time complexity of common array operations?

Answer:


Access by index:

arr[index]

→ O(1)


push():

→ O(1) average


pop():

→ O(1)


shift():

→ O(n)


unshift():

→ O(n)


Searching:

includes()
indexOf()
find()

→ O(n)


map():

→ O(n)


filter():

→ O(n)


reduce():

→ O(n)


Sorting:

sort()

→ generally O(n log n)


You don't need to memorize every implementation detail,
but understanding these helps with performance and DSA.


──────────────────────────────────────────────────────────────────────


Q59. Why is array knowledge important for DSA too?

Answer:

Arrays are one of the foundations of DSA.


Many important patterns operate on arrays:

Two Pointers
Sliding Window
Prefix Sum
Binary Search
Hashing
Kadane's Algorithm
Sorting
3Sum
Two Sum


So JavaScript array knowledge helps with MERN,
while algorithmic array knowledge helps with coding interviews.


They are related, but they are NOT the same thing.


──────────────────────────────────────────────────────────────────────


Q60. What are the array methods I should MASTER for MERN?

Answer:

MASTER these:


push()
pop()

map()
filter()
reduce()
forEach()

find()
findIndex()

some()
every()

includes()
indexOf()

slice()
splice()

sort()

join()
split()

concat()

Array.isArray()

spread operator ...


These will cover a huge amount of your day-to-day work.


──────────────────────────────────────────────────────────────────────


Q61. Which array concepts are especially important for React?

Answer:

Focus heavily on:


1. map()

→ rendering lists


2. filter()

→ removing/filtering items


3. spread (...)

→ immutable updates


4. find()

→ finding an item


5. some()

→ checking existence


6. reduce()

→ totals/calculations


7. Array of objects

→ API data


8. Avoiding direct mutation

→ important for React state


──────────────────────────────────────────────────────────────────────


Q62. Real industry example — E-commerce application

Answer:


Backend returns:

const products = [
    {
        id: 1,
        name: "Keyboard",
        price: 1500,
        inStock: true
    },
    {
        id: 2,
        name: "Mouse",
        price: 800,
        inStock: false
    }
];


Search:

products.filter(
    (product) => product.name.includes("Key")
);


Available products:

products.filter(
    (product) => product.inStock
);


Find one product:

products.find(
    (product) => product.id === 1
);


Calculate total:

cart.reduce(
    (total, item) =>
        total + item.price * item.quantity,
    0
);


Render products:

products.map(
    (product) => ...
);


One application can use:

filter
find
reduce
map
includes

all together.


──────────────────────────────────────────────────────────────────────


Q63. Real industry example — Admin dashboard

Answer:

Suppose the API returns:

const users = [
    { name: "A", role: "admin", active: true },
    { name: "B", role: "user", active: true },
    { name: "C", role: "user", active: false }
];


Get admins:

users.filter(
    (user) => user.role === "admin"
);


Get active users:

users.filter(
    (user) => user.active
);


Check whether an admin exists:

users.some(
    (user) => user.role === "admin"
);


Display names:

users.map(
    (user) => user.name
);


This is exactly how arrays are used in real applications.


──────────────────────────────────────────────────────────────────────


                    PRACTICE QUESTIONS
                 Try solving before reading
──────────────────────────────────────────────────────────────────────


Q64. What is the output?

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);


Answer:

Apple


──────────────────────────────────────────────────────────────────────


Q65. What is the output?

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);


Answer:

3


──────────────────────────────────────────────────────────────────────


Q66. What is the output?

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[fruits.length - 1]);


Answer:

Mango


──────────────────────────────────────────────────────────────────────


Q67. What is the output?

const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);


Answer:

[1, 2, 3, 4]


──────────────────────────────────────────────────────────────────────


Q68. What is the output?

const numbers = [1, 2, 3];

numbers.pop();

console.log(numbers);


Answer:

[1, 2]


──────────────────────────────────────────────────────────────────────


Q69. What is the output?

const numbers = [1, 2, 3];

numbers.shift();

console.log(numbers);


Answer:

[2, 3]


──────────────────────────────────────────────────────────────────────


Q70. What is the output?

const numbers = [1, 2, 3];

numbers.unshift(0);

console.log(numbers);


Answer:

[0, 1, 2, 3]


──────────────────────────────────────────────────────────────────────


Q71. What is the output?

const numbers = [1, 2, 3, 4];

const result = numbers.slice(1, 3);

console.log(result);


Answer:

[2, 3]


──────────────────────────────────────────────────────────────────────


Q72. What is the output?

const numbers = [1, 2, 3, 4];

numbers.splice(1, 2);

console.log(numbers);


Answer:

[1, 4]


Because:

start = 1
remove = 2


It removes:

2 and 3


──────────────────────────────────────────────────────────────────────


Q73. What is the output?

const numbers = [1, 2, 3];

const result = numbers.map(
    (num) => num * 2
);

console.log(result);


Answer:

[2, 4, 6]


──────────────────────────────────────────────────────────────────────


Q74. What is the output?

const numbers = [10, 15, 20, 25];

const result = numbers.filter(
    (num) => num > 15
);

console.log(result);


Answer:

[20, 25]


──────────────────────────────────────────────────────────────────────


Q75. What is the output?

const numbers = [10, 20, 30];

const result = numbers.reduce(
    (sum, num) => sum + num,
    0
);

console.log(result);


Answer:

60


──────────────────────────────────────────────────────────────────────


Q76. What is the output?

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


Q77. What is the output?

const users = [
    { name: "A", age: 20 },
    { name: "B", age: 16 },
    { name: "C", age: 25 }
];

const adults = users.filter(
    (user) => user.age >= 18
);

console.log(adults.length);


Answer:

2


──────────────────────────────────────────────────────────────────────


Q78. What is the output?

const users = [
    { name: "A", isAdmin: false },
    { name: "B", isAdmin: true }
];

console.log(
    users.some((user) => user.isAdmin)
);


Answer:

true


Because at least one user is an admin.


──────────────────────────────────────────────────────────────────────


Q79. What is the output?

const numbers = [2, 4, 6];

console.log(
    numbers.every((num) => num % 2 === 0)
);


Answer:

true


Every number is even.


──────────────────────────────────────────────────────────────────────


Q80. What is the output?

const numbers = [1, 2, 3];

const copy = [...numbers];

copy.push(4);

console.log(numbers);
console.log(copy);


Answer:

numbers:

[1, 2, 3]


copy:

[1, 2, 3, 4]


They are different arrays.


──────────────────────────────────────────────────────────────────────


Q81. What is the output?

const numbers = [1, 2, 3];

const copy = numbers;

copy.push(4);

console.log(numbers);


Answer:

[1, 2, 3, 4]


Because both variables reference the same array.


──────────────────────────────────────────────────────────────────────


Q82. What is the output?

const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "Monitor", price: 5000 }
];

const total = products.reduce(
    (sum, product) => sum + product.price,
    0
);

console.log(total);


Answer:

7300


Calculation:

1500 + 800 + 5000 = 7300


──────────────────────────────────────────────────────────────────────


Q83. Write code to get only product names.

const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 }
];


Answer:

const names = products.map(
    (product) => product.name
);


Result:

["Keyboard", "Mouse"]


──────────────────────────────────────────────────────────────────────


Q84. Write code to get products cheaper than 1000.

Answer:

const result = products.filter(
    (product) => product.price < 1000
);


──────────────────────────────────────────────────────────────────────


Q85. Write code to find product with id 2.

Answer:

const product = products.find(
    (product) => product.id === 2
);


──────────────────────────────────────────────────────────────────────


Q86. Write code to remove user with id 2.

Answer:

setUsers(
    users.filter(
        (user) => user.id !== 2
    )
);


This is an important React pattern.


──────────────────────────────────────────────────────────────────────


Q87. Write code to add a new user to a React array.

Answer:

setUsers([
    ...users,
    newUser
]);


The original array is not directly mutated.


──────────────────────────────────────────────────────────────────────


Q88. Which method should you use?

"Create a new array by changing every item."

Answer:

map()


──────────────────────────────────────────────────────────────────────


Q89. Which method should you use?

"Keep only products whose price is below ₹2000."

Answer:

filter()


──────────────────────────────────────────────────────────────────────


Q90. Which method should you use?

"Calculate the total cart price."

Answer:

reduce()


──────────────────────────────────────────────────────────────────────


Q91. Which method should you use?

"Find one user by ID."

Answer:

find()


──────────────────────────────────────────────────────────────────────


Q92. Which method should you use?

"Check whether at least one user is an admin."

Answer:

some()


──────────────────────────────────────────────────────────────────────


Q93. Which method should you use?

"Check whether all products are in stock."

Answer:

every()


──────────────────────────────────────────────────────────────────────


Q94. Which method should you use?

"Run some code for every item but don't need a new array."

Answer:

forEach()


──────────────────────────────────────────────────────────────────────


Q95. Which method should you use?

"Sort products by price."

Answer:

sort()


Example:

products.sort(
    (a, b) => a.price - b.price
);


──────────────────────────────────────────────────────────────────────


                    FINAL MERN CHEAT SHEET
──────────────────────────────────────────────────────────────────────


ARRAY BASICS

const users = [];

users[0]

users.length

users.at(-1)


ADD / REMOVE

push()       → add at end

pop()        → remove from end

unshift()    → add at beginning

shift()      → remove from beginning


MODIFY

splice()     → modify original array

slice()      → get portion without modifying original


SEARCH

includes()   → does value exist?

indexOf()    → where is value?

find()       → find first matching element

findIndex()  → find index of first match


TRANSFORM

map()        → create new transformed array

filter()     → create new filtered array

reduce()     → combine into one result


CHECK

some()       → at least one?

every()      → all?


LOOP

forEach()    → perform action for each item


SORT

sort()       → sort original array

toSorted()   → sorted copy


REVERSE

reverse()    → reverse original array

toReversed() → reversed copy


COMBINE

concat()

spread ...


CONVERT

split()      → String → Array

join()       → Array → String


NESTED ARRAYS

flat()

flatMap()


TYPE CHECK

Array.isArray(value)


──────────────────────────────────────────────────────────────────────


                 THE MOST IMPORTANT DIFFERENCE
──────────────────────────────────────────────────────────────────────


map()

"I want to TRANSFORM every item."

Example:

[1, 2, 3]

↓

[2, 4, 6]


filter()

"I want to KEEP some items."

Example:

[10, 15, 20]

↓

[15, 20]


find()

"I want ONE matching item."

Example:

users

↓

one user


some()

"Does AT LEAST ONE match?"


every()

"Do ALL match?"


reduce()

"I want ONE final result."


forEach()

"I just want to DO something for each item."


──────────────────────────────────────────────────────────────────────


                 MOST IMPORTANT REACT PATTERNS
──────────────────────────────────────────────────────────────────────


Render:

users.map(
    (user) => <UserCard key={user.id} user={user} />
);


Remove:

setUsers(
    users.filter(
        (user) => user.id !== id
    )
);


Add:

setUsers([
    ...users,
    newUser
]);


Update:

setUsers(
    users.map((user) =>
        user.id === id
            ? { ...user, name: "Rahul" }
            : user
    )
);


Calculate:

const total = cart.reduce(
    (sum, item) =>
        sum + item.price * item.quantity,
    0
);


These patterns are worth practicing until they become natural.


──────────────────────────────────────────────────────────────────────


                    FINAL MENTAL MODEL
──────────────────────────────────────────────────────────────────────


              ARRAY
                |
        ┌───────┼────────┐
        ↓       ↓        ↓
      Data    Objects   Values
        |
        ↓
   ┌────┴─────────────────────────────┐
   ↓            ↓          ↓          ↓
  map()      filter()    find()    reduce()
   ↓            ↓          ↓          ↓
transform     select     one item   one result
   |
   ↓
React UI / API / Business Logic
   |
   ↓
Express
   |
   ↓
MongoDB


For MERN, your most important array skills are:

Array of Objects
        ↓
map()
filter()
find()
reduce()
some()
every()
        ↓
Spread operator
        ↓
Immutable updates
        ↓
React state
        ↓
API data


If you become very comfortable with these,
you will use arrays naturally throughout MERN development.

*/