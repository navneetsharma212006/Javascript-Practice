/*
╔══════════════════════════════════════════════════════════════════════╗
║                    JAVASCRIPT DATA TYPES                            ║
║                 MERN DEVELOPER — IMPORTANT PARTS                   ║
╚══════════════════════════════════════════════════════════════════════╝


Q1. What is a data type in JavaScript?

Answer:

A data type tells JavaScript what kind of value a variable is storing.

Example:

const name = "Navneet";       // String
const age = 20;              // Number
const isLoggedIn = true;     // Boolean
const user = { name: "Navneet" }; // Object


Think:

"Navneet"  → text
20          → number
true        → yes/no
{}          → collection of data


──────────────────────────────────────────────────────────────────────


Q2. What are the main data types in JavaScript?

Answer:

JavaScript has two major categories:

1. Primitive data types
2. Non-primitive / Reference data types


Primitive:

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol


Reference:

- Object
- Array
- Function


For MERN development, the MOST important ones are:

String
Number
Boolean
Null
Undefined
Object
Array


You will use these constantly.


──────────────────────────────────────────────────────────────────────


Q3. What is a String?

Answer:

A String represents text.

Example:

const name = "Navneet";
const city = "Indore";
const message = "Login successful";


Strings can use:

"double quotes"
'single quotes'
`template literals`


Example:

const name = "Navneet";

console.log(name);


Real MERN use:

A user object received from an API may look like:

const user = {
    name: "Navneet",
    email: "navneet@gmail.com"
};


name and email are strings.


──────────────────────────────────────────────────────────────────────


Q4. What is a Number?

Answer:

Number represents numeric values.

Example:

const age = 20;
const price = 999;
const rating = 4.5;


JavaScript uses the Number type for:

integers
decimals
positive numbers
negative numbers


Example:

const quantity = 5;
const price = 500;

const total = quantity * price;

console.log(total); // 2500


Real MERN use:

E-commerce:

const product = {
    name: "Keyboard",
    price: 1500,
    quantity: 2
};


price and quantity are Numbers.


──────────────────────────────────────────────────────────────────────


Q5. What is a Boolean?

Answer:

Boolean has only two values:

true
false


Example:

const isLoggedIn = true;
const isAdmin = false;


Real MERN use:

Authentication:

const user = {
    name: "Navneet",
    isLoggedIn: true
};


Authorization:

const isAdmin = false;

if (isAdmin) {
    console.log("Access granted");
}


You will use Booleans heavily in:

login
logout
authentication
authorization
permissions
form validation
loading states
feature flags


──────────────────────────────────────────────────────────────────────


Q6. What is Undefined?

Answer:

Undefined usually means:

"A value has not been assigned."


Example:

let username;

console.log(username);

Output:

undefined


Another common example:

const user = {};

console.log(user.email);

Output:

undefined


Because email does not exist inside the object.


Real MERN use:

const user = {
    name: "Navneet"
};

console.log(user.profilePicture);

If profilePicture doesn't exist:

undefined


This is very common when working with API data.


──────────────────────────────────────────────────────────────────────


Q7. What is Null?

Answer:

null means:

"There is intentionally no value."


Example:

const profilePicture = null;


This is different from undefined.

undefined:

The value is missing / not assigned.


null:

We intentionally say there is no value.


Example:

const user = {
    name: "Navneet",
    profilePicture: null
};


This means:

"The user currently doesn't have a profile picture."


Real MERN use:

Database fields can contain null:

{
    name: "Navneet",
    phoneNumber: null
}


──────────────────────────────────────────────────────────────────────


Q8. What is the difference between undefined and null?

Answer:

undefined:

Value is not available / not assigned.

null:

Value is intentionally empty.


Example:

let a;

console.log(a); // undefined


const b = null;

console.log(b); // null


Easy way to remember:

undefined → "nothing assigned"

null → "intentionally nothing"


──────────────────────────────────────────────────────────────────────


Q9. What is an Object?

Answer:

An object stores related data using key-value pairs.

Example:

const user = {
    name: "Navneet",
    age: 20,
    isLoggedIn: true
};


Here:

name → String
age → Number
isLoggedIn → Boolean


Objects are EXTREMELY important in MERN.


──────────────────────────────────────────────────────────────────────


Q10. Why are Objects so important in MERN?

Answer:

Because APIs and databases constantly work with objects.

Example API response:

{
    "name": "Navneet",
    "age": 20,
    "email": "navneet@gmail.com"
}


In React:

const user = {
    name: "Navneet",
    age: 20
};


In Express:

req.body


is commonly an object.


In MongoDB:

A document is represented using object-like data.


So you will work with objects everywhere.


──────────────────────────────────────────────────────────────────────


Q11. What is an Array?

Answer:

An array stores multiple values in a single variable.

Example:

const fruits = [
    "Apple",
    "Banana",
    "Mango"
];


Access using index:

console.log(fruits[0]);

Output:

Apple


Indexes start from 0.


──────────────────────────────────────────────────────────────────────


Q12. Why are Arrays important in MERN?

Answer:

APIs frequently return lists of data.

Example:

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


React can render these products:

products.map(product => {
    return product.name;
});


You will use arrays for:

products
users
orders
messages
comments
notifications
cart items


──────────────────────────────────────────────────────────────────────


Q13. Can an array contain different data types?

Answer:

Yes.

JavaScript allows this:

const data = [
    "Navneet",
    20,
    true,
    null
];


But in professional code, arrays usually contain related data.

Better:

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


──────────────────────────────────────────────────────────────────────


Q14. Is an Array an Object?

Answer:

Technically, yes.

In JavaScript:

typeof []

returns:

"object"


But arrays have special behavior and methods.

So for practical development:

Object → key-value data

Array → ordered collection of values


To specifically check for an array:

Array.isArray(value)


Example:

const users = [];

console.log(Array.isArray(users));

Output:

true


This is much better than:

typeof users === "object"


──────────────────────────────────────────────────────────────────────


Q15. What is a Function as a data type?

Answer:

Functions are special values in JavaScript.

Example:

function greet() {
    console.log("Hello");
}


You can store a function in a variable:

const greet = function() {
    console.log("Hello");
};


You can also pass functions as arguments.

This is why JavaScript is called a:

"First-class function language"


Functions are extremely important in:

React
Express
callbacks
event handlers
array methods
middleware
async programming


──────────────────────────────────────────────────────────────────────


Q16. What is typeof?

Answer:

typeof is used to check the type of a value.

Example:

console.log(typeof "Navneet");
// string

console.log(typeof 20);
// number

console.log(typeof true);
// boolean

console.log(typeof undefined);
// undefined


Example:

const user = {};

console.log(typeof user);
// object


──────────────────────────────────────────────────────────────────────


Q17. What is the important typeof problem with null?

Answer:

This is one of JavaScript's famous quirks:

console.log(typeof null);

Output:

"object"


Even though null is NOT actually an object.


So:

typeof null === "object"


is true.


This is a historical JavaScript behavior.


Don't try to "fix" it.


If you need to check null:

value === null


Example:

const user = null;

console.log(user === null);

Output:

true


──────────────────────────────────────────────────────────────────────


Q18. How do you check whether something is an array?

Answer:

Use:

Array.isArray()


Example:

const users = [];

console.log(Array.isArray(users));

Output:

true


This is the standard approach.


──────────────────────────────────────────────────────────────────────


Q19. What is the difference between primitive and reference data types?

Answer:

This is VERY important for MERN.


Primitive values:

String
Number
Boolean
Undefined
Null
BigInt
Symbol


Reference values:

Object
Array
Function


The important difference is how they behave when copied.


Example:

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20


The primitive value was copied.


──────────────────────────────────────────────────────────────────────


Q20. What happens when we copy an object?

Answer:

Example:

const user1 = {
    name: "Navneet"
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name);


Output:

Rahul


Why?

Because user1 and user2 refer to the SAME object.


Think:

user1 ───────┐
             ↓
          { name: "Rahul" }
             ↑
user2 ───────┘


This concept is extremely important in React.


──────────────────────────────────────────────────────────────────────


Q21. Why is reference behavior important in React?

Answer:

React state should usually be updated immutably.

Bad:

const user = {
    name: "Navneet"
};

user.name = "Rahul";


Better when updating React state:

setUser({
    ...user,
    name: "Rahul"
});


The spread operator creates a new object.


This helps React detect that state has changed.


──────────────────────────────────────────────────────────────────────


Q22. What is type conversion?

Answer:

Type conversion means changing one data type into another.


Example:

const age = "20";

console.log(typeof age);
// string


Convert it:

const numberAge = Number(age);

console.log(typeof numberAge);
// number


This is VERY common in MERN applications.


──────────────────────────────────────────────────────────────────────


Q23. Why does type conversion matter in MERN?

Answer:

HTML form values are commonly received as strings.


Example:

<input value="20">


JavaScript may give:

"20"


not:

20


If you want a number:

const age = Number(inputValue);


This matters when sending data to your backend.


Example:

const quantity = Number(req.body.quantity);


──────────────────────────────────────────────────────────────────────


Q24. What happens with "10" + 5?

Answer:

JavaScript performs string concatenation.

"10" + 5


Result:

"105"


Because one value is a string.


But:

"10" - 5


Result:

5


JavaScript converts the string to a number for subtraction.


This behavior is called:

Type coercion.


──────────────────────────────────────────────────────────────────────


Q25. What is type coercion?

Answer:

Type coercion means JavaScript automatically converts one type into another during an operation.


Example:

console.log("10" + 5);

Output:

"105"


Example:

console.log("10" - 5);

Output:

5


This is why you should be careful with values coming from:

forms
URL parameters
query parameters
request bodies
APIs


──────────────────────────────────────────────────────────────────────


Q26. What is NaN?

Answer:

NaN means:

Not a Number


Example:

const result = Number("hello");

console.log(result);

Output:

NaN


It means JavaScript could not produce a valid number.


Check it using:

Number.isNaN()


Example:

console.log(Number.isNaN(NaN));

Output:

true


──────────────────────────────────────────────────────────────────────


Q27. What is a common real-world NaN problem?

Answer:

Suppose an e-commerce application receives:

const quantity = "abc";

const total = Number(quantity) * 500;

console.log(total);


Result:

NaN


So input validation is important.


Example:

const quantity = Number(input);

if (Number.isNaN(quantity)) {
    console.log("Invalid quantity");
}


──────────────────────────────────────────────────────────────────────


Q28. What is BigInt?

Answer:

BigInt is used for very large integers beyond the safe integer range of Number.


Example:

const bigNumber = 123456789012345678901234567890n;


Notice the:

n


at the end.


For normal MERN development, you will rarely need BigInt.


Just know what it is.


──────────────────────────────────────────────────────────────────────


Q29. What is Symbol?

Answer:

Symbol creates a unique value.


Example:

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);

Output:

false


Even though both descriptions are "id", the symbols are unique.


For normal MERN development:

You don't need to use Symbol frequently.


Just understand that it exists.


──────────────────────────────────────────────────────────────────────


Q30. What data types will I use MOST as a MERN developer?

Answer:

Focus heavily on:

1. String
2. Number
3. Boolean
4. Object
5. Array
6. Null
7. Undefined


Then understand:

8. Function
9. Type conversion
10. typeof
11. NaN
12. Primitive vs reference


BigInt and Symbol are lower priority.


──────────────────────────────────────────────────────────────────────


Q31. What does JSON have to do with data types?

Answer:

A LOT.


MERN applications constantly exchange JSON data between frontend and backend.


Example:

{
    "name": "Navneet",
    "age": 20,
    "isAdmin": false,
    "skills": ["JavaScript", "React"]
}


Here we have:

name → String

age → Number

isAdmin → Boolean

skills → Array


This is the type of data you will constantly send through APIs.


──────────────────────────────────────────────────────────────────────


Q32. What is the typical MERN data flow?

Answer:


React frontend

        ↓

User enters data

        ↓

JavaScript values

        ↓

JSON request

        ↓

Express backend

        ↓

MongoDB

        ↓

JSON response

        ↓

React

        ↓

UI


Understanding data types helps you understand this entire flow.


──────────────────────────────────────────────────────────────────────


Q33. Real industry example: Login system

Answer:

Frontend:

const loginData = {
    email: "navneet@gmail.com",
    password: "123456"
};


email → String

password → String


Backend:

req.body


is an object containing those values.


Backend may return:

{
    "success": true,
    "message": "Login successful",
    "user": {
        "name": "Navneet",
        "isAdmin": false
    }
}


Here:

success → Boolean

message → String

user → Object

name → String

isAdmin → Boolean


This is why data types are important in real MERN applications.


──────────────────────────────────────────────────────────────────────


Q34. Real industry example: E-commerce product

Answer:

const product = {
    name: "Mechanical Keyboard",
    price: 2499,
    quantity: 5,
    inStock: true,
    discount: null,
    tags: ["keyboard", "gaming"]
};


Types:

name → String

price → Number

quantity → Number

inStock → Boolean

discount → Null

tags → Array


This single object contains several important JavaScript data types.


──────────────────────────────────────────────────────────────────────


Q35. What is truthy and falsy?

Answer:

JavaScript values can behave like true or false inside conditions.


Falsy values include:

false
0
""
null
undefined
NaN


Example:

const username = "";

if (username) {
    console.log("Username exists");
}


Nothing runs because "" is falsy.


Example:

const user = null;

if (!user) {
    console.log("User not found");
}


Very common in MERN.


──────────────────────────────────────────────────────────────────────


Q36. Why is truthy/falsy important in React?

Answer:

You often conditionally render UI.


Example:

{isLoading && <p>Loading...</p>}


If:

isLoading = true

the loading message appears.


If:

isLoading = false

it doesn't appear.


Another example:

{user && <Profile user={user} />}


If user exists:

Profile appears.


If user is null:

Profile doesn't appear.


──────────────────────────────────────────────────────────────────────


Q37. Is an empty array [] truthy or falsy?

Answer:

TRUE.


Example:

if ([]) {
    console.log("Runs");
}


It runs.


This is a common beginner mistake.


Similarly:

if ({}) {
    console.log("Runs");
}


It also runs.


Both arrays and objects are truthy, even when empty.


──────────────────────────────────────────────────────────────────────


Q38. What is the difference between == and ===?

Answer:

Prefer:

===


because it checks:

value
AND
type


Example:

5 === 5

true


But:

5 === "5"

false


Because:

number !== string


With ==:

5 == "5"

true


because JavaScript performs type coercion.


Industry rule:

Use === and !== by default.


──────────────────────────────────────────────────────────────────────


Q39. Why is === preferred in MERN development?

Answer:

Because it avoids unexpected type conversion.


Example:

const userId = "123";

if (userId === 123) {
    console.log("Match");
}


This will NOT run.


Because:

"123" → String

123 → Number


This forces you to handle types intentionally.


──────────────────────────────────────────────────────────────────────


Q40. What should I remember about JavaScript data types for interviews?

Answer:

Know these extremely well:


1. Primitive vs reference

2. String

3. Number

4. Boolean

5. Null

6. Undefined

7. Object

8. Array

9. Function

10. typeof

11. typeof null === "object"

12. Array.isArray()

13. Type conversion

14. Type coercion

15. NaN

16. Truthy/falsy

17. == vs ===

18. Object/array reference behavior

19. JSON data types

20. React state and immutable updates


──────────────────────────────────────────────────────────────────────


                    PRACTICE QUESTIONS
                 Try answering before reading
──────────────────────────────────────────────────────────────────────


Q41. What is the type of this value?

const name = "Navneet";


Answer:

String


──────────────────────────────────────────────────────────────────────


Q42. What is the type?

const age = 20;


Answer:

Number


──────────────────────────────────────────────────────────────────────


Q43. What is the type?

const loggedIn = false;


Answer:

Boolean


──────────────────────────────────────────────────────────────────────


Q44. What is the value?

let username;

console.log(username);


Answer:

undefined


──────────────────────────────────────────────────────────────────────


Q45. What is the value?

const user = null;

console.log(user);


Answer:

null


──────────────────────────────────────────────────────────────────────


Q46. What does this print?

console.log(typeof "Hello");


Answer:

"string"


──────────────────────────────────────────────────────────────────────


Q47. What does this print?

console.log(typeof 100);


Answer:

"number"


──────────────────────────────────────────────────────────────────────


Q48. What does this print?

console.log(typeof true);


Answer:

"boolean"


──────────────────────────────────────────────────────────────────────


Q49. What does this print?

console.log(typeof {});


Answer:

"object"


──────────────────────────────────────────────────────────────────────


Q50. What does this print?

console.log(typeof []);


Answer:

"object"


But remember:

Array.isArray([])

returns:

true


──────────────────────────────────────────────────────────────────────


Q51. What does this print?

console.log(typeof null);


Answer:

"object"


This is a JavaScript historical quirk.


──────────────────────────────────────────────────────────────────────


Q52. What does this print?

console.log("5" + 2);


Answer:

"52"


Because + with a string performs concatenation.


──────────────────────────────────────────────────────────────────────


Q53. What does this print?

console.log("5" - 2);


Answer:

3


JavaScript converts "5" to a number.


──────────────────────────────────────────────────────────────────────


Q54. What does this print?

console.log(5 === "5");


Answer:

false


Number !== String


──────────────────────────────────────────────────────────────────────


Q55. What does this print?

console.log(5 == "5");


Answer:

true


Because == performs type coercion.


Prefer === in professional code.


──────────────────────────────────────────────────────────────────────


Q56. What does this print?

if ([]) {
    console.log("Hello");
}


Answer:

Hello


Because an empty array is truthy.


──────────────────────────────────────────────────────────────────────


Q57. What does this print?

if ("") {
    console.log("Hello");
}


Answer:

Nothing.


An empty string is falsy.


──────────────────────────────────────────────────────────────────────


Q58. What does this print?

const user1 = {
    name: "Navneet"
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name);


Answer:

Rahul


Because both variables reference the same object.


──────────────────────────────────────────────────────────────────────


Q59. What does this print?

const age = "20";

console.log(typeof age);


Answer:

"string"


Even though it contains a number-looking value.


──────────────────────────────────────────────────────────────────────


Q60. How do you convert it into a number?

const age = "20";


Answer:

const numberAge = Number(age);


Now:

typeof numberAge

is:

"number"


──────────────────────────────────────────────────────────────────────


Q61. What is the type of this?

const users = [
    {
        name: "Navneet"
    },
    {
        name: "Rahul"
    }
];


Answer:

Array


And each element inside the array is an Object.


So:

users → Array

users[0] → Object

users[0].name → String


──────────────────────────────────────────────────────────────────────


Q62. What types exist in this object?

const product = {
    name: "Laptop",
    price: 50000,
    available: true,
    discount: null,
    tags: ["electronics", "laptop"]
};


Answer:

name → String

price → Number

available → Boolean

discount → Null

tags → Array


──────────────────────────────────────────────────────────────────────


Q63. What should you use to check whether a value is an array?

Answer:

Array.isArray(value)


Example:

Array.isArray(products)


──────────────────────────────────────────────────────────────────────


Q64. What should you use to compare values safely?

Answer:

===


Example:

if (userId === selectedUserId) {
    // ...
}


──────────────────────────────────────────────────────────────────────


Q65. Why can data types cause bugs in MERN applications?

Answer:

Because data can come from different sources:

HTML forms
URL parameters
query parameters
JSON
APIs
MongoDB
user input


For example:

"100"


and:

100


look similar to humans.


But JavaScript treats them differently:

String
vs
Number


So developers must understand and validate data types.


──────────────────────────────────────────────────────────────────────


                    FINAL MERN CHEAT SHEET
──────────────────────────────────────────────────────────────────────


String

"Navneet"

→ text


Number

100
99.5

→ numbers


Boolean

true
false

→ yes/no, states, permissions


Undefined

let x;

→ value not assigned


Null

const image = null;

→ intentionally empty


Object

{
    name: "Navneet",
    age: 20
}

→ structured data


Array

["React", "Node", "MongoDB"]

→ list of data


Function

function login() {}

→ reusable behavior


typeof

typeof value

→ checks type


Array.isArray()

→ checks whether value is an array


Number()

→ converts to number


String()

→ converts to string


Boolean()

→ converts to boolean


Number.isNaN()

→ checks for NaN


===

→ strict comparison


Truthy/Falsy

→ important for conditions and React rendering


Primitive vs Reference

→ VERY important for React state and objects/arrays


JSON

→ VERY important for communication between React ↔ Express


──────────────────────────────────────────────────────────────────────


                 THE MOST IMPORTANT MENTAL MODEL
──────────────────────────────────────────────────────────────────────


JavaScript value

        ↓

What type is it?

        ↓

String / Number / Boolean
Null / Undefined
Object / Array / Function

        ↓

How does this type behave?

        ↓

Can I compare it?
Can I convert it?
Can I mutate it?
Can I send it through JSON?
Can I use it in a condition?

        ↓

React
   ↓
Express
   ↓
MongoDB
   ↓
Express
   ↓
React


That is why understanding data types is
one of the foundations of becoming a strong MERN developer.
*/