/*
=========================================================
             JAVASCRIPT DATA TYPES
=========================================================

JavaScript data types tell us:

"What kind of value is stored in a variable?"

Example:

let age = 20;

Here:

age → variable
20  → value
20  → Number data type


=========================================================
1. TWO MAIN CATEGORIES
=========================================================

JavaScript data types are mainly divided into:

1. Primitive Data Types
2. Non-Primitive / Reference Data Types


                    DATA TYPES
                        |
              +---------+---------+
              |                   |
          Primitive          Non-Primitive
              |                   |
       +------+------+        Object
       |      |      |
     Number String Boolean
       |
    Undefined
       |
      Null
       |
     BigInt
       |
     Symbol


=========================================================
2. PRIMITIVE DATA TYPES
=========================================================

Primitive values are basic/single values.

JavaScript has 7 primitive data types:

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol


=========================================================
3. NUMBER
=========================================================

Number is used for numerical values.

Example:

let age = 20;
let price = 99.99;
let temperature = -10;

console.log(age);
console.log(price);

JavaScript does NOT have separate:

int
float
double

Instead, normal numbers use:

Number


Example:

let a = 10;
let b = 10.5;

Both are:

Number


Check the type:

console.log(typeof a);

Output:

number


---------------------------------------------------------
Special Number Values
---------------------------------------------------------

Infinity:

let x = 10 / 0;

console.log(x);

Output:

Infinity


NaN:

let x = "hello" * 5;

console.log(x);

Output:

NaN

NaN means:

Not a Number


=========================================================
4. STRING
=========================================================

String represents text.

Example:

let name = "Navneet";

let city = 'Indore';

let message = `Hello World`;


Three ways to create strings:

"Hello"

'Hello'

`Hello`


Check:

console.log(typeof name);

Output:

string


---------------------------------------------------------
Template Literals
---------------------------------------------------------

Template literals use backticks:

`

Example:

let name = "Navneet";
let age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);


Output:

My name is Navneet and I am 20 years old.


This is very commonly used in modern JavaScript.


=========================================================
5. BOOLEAN
=========================================================

Boolean has only two values:

true
false


Example:

let isLoggedIn = true;

let isAdmin = false;


Check:

console.log(typeof isLoggedIn);

Output:

boolean


Booleans are heavily used in:

if statements
conditions
loops
authentication
permissions


Example:

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome");
}


=========================================================
6. UNDEFINED
=========================================================

Undefined means:

"A variable exists, but it currently has no value."


Example:

let x;

console.log(x);

Output:

undefined


Check:

console.log(typeof x);

Output:

undefined


Another example:

let user;

console.log(user);


Important:

undefined usually means:

JavaScript has not been given a value yet.


Example:

let age;

age = 20;


Before:

age → undefined


After:

age → 20


=========================================================
7. NULL
=========================================================

null means:

"Intentionally empty."

Example:

let user = null;


This means:

"I intentionally don't have a user right now."


Example:

let selectedUser = null;


// Later

selectedUser = {
    name: "Navneet"
};


Difference:

undefined
→ value has not been assigned


null
→ intentionally empty


---------------------------------------------------------
Important JavaScript Oddity
---------------------------------------------------------

console.log(typeof null);

Output:

object


This is a historical JavaScript behavior.

Although:

null

is a primitive value.

Remember for interviews:

typeof null === "object"

but null itself is NOT an object.


=========================================================
8. BIGINT
=========================================================

BigInt is used for very large integers.

Normal Number has limitations for very large integers.

Example:

const bigNumber = 123456789012345678901234567890n;


Notice the:

n

at the end.


Check:

console.log(typeof bigNumber);

Output:

bigint


Example:

const a = 12345678901234567890n;
const b = 10n;

console.log(a + b);


Important:

BigInt and Number should not normally be mixed directly.

Example:

10n + 10;

This gives an error.


Use:

10n + 10n;


=========================================================
9. SYMBOL
=========================================================

Symbol is used to create unique values.

Example:

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);

Output:

false


Even though both contain:

"id"

they are different unique symbols.


Think:

Symbol = unique identifier


Example:

const userId = Symbol("userId");


Symbols are less common for beginners, but they are
part of JavaScript's primitive data types.


=========================================================
10. OBJECT
=========================================================

Objects store data in:

key : value

pairs.

Example:

const person = {
    name: "Navneet",
    age: 20
};


Here:

name → key
"Navneet" → value

age → key
20 → value


Access:

console.log(person.name);

Output:

Navneet


Another way:

console.log(person["name"]);


Output:

Navneet


Check:

console.log(typeof person);

Output:

object


=========================================================
11. ARRAY
=========================================================

Arrays are used to store multiple values.

Example:

const numbers = [10, 20, 30, 40];


Access using index:

console.log(numbers[0]);

Output:

10


Remember:

Array indexing starts from 0.

Index:

0 → 10
1 → 20
2 → 30
3 → 40


Important:

Array is technically an object in JavaScript.

Therefore:

console.log(typeof numbers);

Output:

object


=========================================================
12. FUNCTION
=========================================================

Functions are reusable blocks of code.

Example:

function greet() {
    console.log("Hello");
}


Check:

console.log(typeof greet);

Output:

function


Technically functions are objects in JavaScript, but:

typeof function

returns:

"function"


Example:

const add = function(a, b) {
    return a + b;
};


=========================================================
13. PRIMITIVE VS REFERENCE
=========================================================

This is VERY important.

Primitive:

number
string
boolean
undefined
null
bigint
symbol


Reference:

object
array
function


---------------------------------------------------------
Primitive Example
---------------------------------------------------------

let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);


Output:

10
20


Why?

The value is copied.

Think:

a → 10

b → 10

Then:

b → 20

a is still:

10


---------------------------------------------------------
Reference Example
---------------------------------------------------------

const person1 = {
    name: "Navneet"
};

const person2 = person1;

person2.name = "Rahul";

console.log(person1.name);


Output:

Rahul


Why?

Both variables refer to the same object.


Think:

person1
   |
   +------+
          |
       OBJECT
          |
      name: Navneet
          |
   +------+
   |
person2


After:

person2.name = "Rahul";


The same object becomes:

{
    name: "Rahul"
}


Therefore:

person1.name

also gives:

Rahul


=========================================================
14. typeof OPERATOR
=========================================================

typeof is used to check the type of a value.

Examples:

console.log(typeof 10);

Output:

number


console.log(typeof "Hello");

Output:

string


console.log(typeof true);

Output:

boolean


console.log(typeof undefined);

Output:

undefined


console.log(typeof 10n);

Output:

bigint


console.log(typeof Symbol("id"));

Output:

symbol


console.log(typeof {});

Output:

object


console.log(typeof []);

Output:

object


console.log(typeof function(){});

Output:

function


---------------------------------------------------------
Important typeof table
---------------------------------------------------------

Value                    typeof result

10                       "number"

"Hello"                  "string"

true                     "boolean"

undefined                "undefined"

null                     "object"    ← weird JS behavior

10n                      "bigint"

Symbol("id")             "symbol"

{}                       "object"

[]                       "object"

function(){}             "function"


=========================================================
15. DYNAMIC TYPING
=========================================================

JavaScript is dynamically typed.

This means a variable can hold different types of values
at different times.

Example:

let value = 10;

console.log(typeof value);

Output:

number


Then:

value = "Hello";

console.log(typeof value);

Output:

string


Then:

value = true;

console.log(typeof value);

Output:

boolean


Same variable:

value


Different types over time.


=========================================================
16. STATIC VS DYNAMIC TYPING
=========================================================

JavaScript:

Dynamic typing


Example:

let value = 10;

value = "Hello";

Allowed.


In languages like Java:

int value = 10;

value = "Hello";

Not allowed.


So:

JavaScript → dynamically typed

Java → statically typed


=========================================================
17. TYPE COERCION
=========================================================

JavaScript can automatically convert one type into
another in some situations.

Example:

let x = "10";
let y = 5;

console.log(x + y);


Output:

105


Why?

Because + with a string causes string concatenation.

"10" + 5

becomes:

"105"


---------------------------------------------------------

Another example:

console.log("10" - 5);

Output:

5


JavaScript converts:

"10"

into:

10


This automatic conversion is called:

Type Coercion


=========================================================
18. EXPLICIT TYPE CONVERSION
=========================================================

You can manually convert values.

String:

let x = 10;

let result = String(x);


Number:

let x = "20";

let result = Number(x);


Boolean:

let x = 1;

let result = Boolean(x);


Examples:

Number("100")

→ 100


String(100)

→ "100"


Boolean(1)

→ true


=========================================================
19. TRUTHY AND FALSY VALUES
=========================================================

JavaScript treats some values as false when used in
conditions.

Falsy values include:

false
0
-0
0n
""
null
undefined
NaN


Example:

let name = "";

if (name) {
    console.log("Name exists");
} else {
    console.log("Name doesn't exist");
}


Output:

Name doesn't exist


Most other values are truthy.


Example:

if ("Hello") {
    console.log("Hello");
}


Output:

Hello


Important:

"0"

is truthy because it is a non-empty string.


=========================================================
20. QUICK CHEAT SHEET
=========================================================

Primitive:

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol


Non-Primitive:

8. Object
9. Array
10. Function


---------------------------------------------------------
Most important for MERN
---------------------------------------------------------

You should become VERY comfortable with:

Number
String
Boolean
Undefined
Null
Object
Array
Function


Then learn deeply:

Type coercion
Type conversion
Truthy / Falsy
typeof
Primitive vs Reference


=========================================================
INTERVIEW CHEAT SHEET
=========================================================

Q: How many primitive data types are there?

A:

7

Number
String
Boolean
Undefined
Null
BigInt
Symbol


Q: Is Array a primitive?

A:

No.

Array is an object/reference type.


Q: Is Function a primitive?

A:

No.

Functions are objects, although typeof function
returns "function".


Q: What is typeof null?

A:

"object"


Q: Is JavaScript statically or dynamically typed?

A:

Dynamically typed.


Q: Difference between undefined and null?

A:

undefined
→ value hasn't been assigned


null
→ intentionally empty


Q: What is type coercion?

A:

Automatic conversion of one data type into another.


=========================================================
LEARNING ORDER FOR YOU
=========================================================

Since you have already studied variables, learn data types
in this order:

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Object
7. Array
8. Function
9. Primitive vs Reference
10. typeof
11. Type Conversion
12. Type Coercion
13. Truthy / Falsy
14. == vs ===


After these, you will have a strong foundation for moving
into:

Operators
     ↓
Conditions
     ↓
Loops
     ↓
Functions
     ↓
Arrays
     ↓
Objects
     ↓
DOM
     ↓
ES6+
     ↓
Async JavaScript
     ↓
React
     ↓
MERN
=========================================================
*/



/*
=========================================================
          JAVASCRIPT DATA TYPES IN INDUSTRY
=========================================================

Imagine you are building a real application:

Automobile Showroom Management System
OR
E-commerce Website
OR
User Management System

Every piece of data has a data type.

For example:

User Name       → String
Age             → Number
Logged In       → Boolean
User Details    → Object
Products        → Array
No Selected User→ null
API Response    → Object / Array
Functions       → Function


=========================================================
1. STRING IN INDUSTRY
=========================================================

Strings are used for text data.

Real examples:

const userName = "Navneet";
const email = "navneet@gmail.com";
const city = "Indore";
const vehicleModel = "Honda City";


---------------------------------------------------------
In a real API response:
---------------------------------------------------------

const user = {
    name: "Navneet",
    email: "navneet@gmail.com",
    role: "admin"
};


---------------------------------------------------------
In React:
---------------------------------------------------------

const message = "Welcome back!";

return <h1>{message}</h1>;


Strings are used everywhere:

User names
Emails
Passwords
Addresses
Product names
Vehicle names
URLs
Error messages
API endpoints


Example:

const API_URL = "/api/users";


=========================================================
2. NUMBER IN INDUSTRY
=========================================================

Numbers are used for calculations.

Example from an e-commerce application:

const productPrice = 500;
const quantity = 3;

const totalPrice = productPrice * quantity;

console.log(totalPrice);

Output:

1500


---------------------------------------------------------
Real examples:
---------------------------------------------------------

const age = 20;
const stock = 50;
const price = 1200000;
const gstPercentage = 18;
const discount = 10;


In your ASM-type project:

const availableStock = 10;
const vehiclePrice = 1200000;
const gstPercent = 18;


Example:

const gstAmount = vehiclePrice * gstPercent / 100;


=========================================================
3. BOOLEAN IN INDUSTRY
=========================================================

Boolean is extremely common.

It controls:

Yes / No
True / False
Active / Inactive


Example:

const isLoggedIn = true;

if (isLoggedIn) {
    console.log("Show Dashboard");
}


---------------------------------------------------------
Real examples:
---------------------------------------------------------

const isAdmin = true;
const isLoading = false;
const isVerified = true;
const hasPermission = false;
const isActive = true;


---------------------------------------------------------
React Example
---------------------------------------------------------

const [isLoading, setIsLoading] = useState(false);


When API starts:

setIsLoading(true);


When API finishes:

setIsLoading(false);


Then:

if (isLoading) {
    return <p>Loading...</p>;
}


This is a very common industry pattern.


=========================================================
4. UNDEFINED IN INDUSTRY
=========================================================

undefined usually means:

"The value is not available yet."


Example:

let user;

console.log(user);

Output:

undefined


---------------------------------------------------------
Real API situation:
---------------------------------------------------------

const response = {};

console.log(response.user);

Output:

undefined


Because:

user property does not exist.


---------------------------------------------------------
React Example
---------------------------------------------------------

const [user, setUser] = useState();

Initially:

user → undefined


After API call:

setUser({
    name: "Navneet"
});


Industry developers often check:

if (user === undefined) {
    console.log("User data not loaded yet");
}


=========================================================
5. NULL IN INDUSTRY
=========================================================

null means:

"We intentionally have no value."


Very common example:

const selectedUser = null;


Imagine a user has not selected any customer.

selectedCustomer = null


After selecting:

selectedCustomer = {
    id: 101,
    name: "Rahul"
};


---------------------------------------------------------
Database Example
---------------------------------------------------------

A customer might not have a phone number.

phone_number:

NULL


This means:

The value is intentionally absent.


---------------------------------------------------------
React Example
---------------------------------------------------------

const [selectedVehicle, setSelectedVehicle] = useState(null);


Initially:

No vehicle selected.

selectedVehicle → null


After selection:

setSelectedVehicle(vehicle);


This is a very common React pattern.


=========================================================
6. OBJECT IN INDUSTRY
=========================================================

Objects are probably one of the MOST USED
data types in JavaScript.

They represent a single entity.

Example:

const user = {
    id: 1,
    name: "Navneet",
    email: "navneet@gmail.com",
    role: "developer",
    isActive: true
};


A real application receives data like this from APIs.

Example:

const response = {
    success: true,
    message: "User fetched successfully",
    data: {
        id: 1,
        name: "Navneet"
    }
};


---------------------------------------------------------
ASM Example
---------------------------------------------------------

const vehicle = {
    vehicleId: "V001",
    modelName: "Honda City",
    color: "White",
    price: 1200000,
    availableStock: 5
};


Objects are used for:

Users
Products
Vehicles
Orders
Invoices
API responses
Configurations
Database records


=========================================================
7. ARRAY IN INDUSTRY
=========================================================

Arrays are used when you have MULTIPLE items.

Example:

const users = [
    {
        name: "Navneet",
        role: "Admin"
    },
    {
        name: "Rahul",
        role: "User"
    }
];


---------------------------------------------------------
API Example
---------------------------------------------------------

const vehicles = [
    {
        id: 1,
        name: "Honda City"
    },
    {
        id: 2,
        name: "Hyundai Creta"
    }
];


---------------------------------------------------------
React Example
---------------------------------------------------------

const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" }
];


products.map((product) => {
    return <p>{product.name}</p>;
});


This displays multiple products.

Arrays are heavily used for:

Product lists
User lists
Orders
Notifications
Comments
Search results
API data


=========================================================
8. FUNCTION IN INDUSTRY
=========================================================

Functions contain reusable logic.

Example:

function calculateTotal(price, quantity) {
    return price * quantity;
}


Usage:

const total = calculateTotal(500, 3);


---------------------------------------------------------
Real Example
---------------------------------------------------------

function calculateGST(price, gstPercent) {
    return price * gstPercent / 100;
}


---------------------------------------------------------
React Example
---------------------------------------------------------

const handleLogin = () => {

    console.log("User logged in");

};


Functions are used for:

Button click handling
API calls
Calculations
Data validation
Authentication
Business logic
Event handling


=========================================================
9. BIGINT IN INDUSTRY
=========================================================

BigInt is used when numbers are extremely large.

Example:

const largeNumber = 999999999999999999999n;


It is less commonly used in normal MERN applications.

You might see it in:

Financial systems
Cryptography
Blockchain
Large ID systems


For normal application development:

Number is usually enough.


=========================================================
10. SYMBOL IN INDUSTRY
=========================================================

Symbol creates unique identifiers.

Example:

const id = Symbol("id");


It is not something you will use every day as a MERN
developer.

You may encounter it in:

Libraries
Framework internals
Advanced JavaScript
Object meta-programming


For now:

Understand what it is, but don't spend too much time
practicing it.


=========================================================
11. PRIMITIVE VS REFERENCE IN REAL PROJECTS
=========================================================

This is VERY important in industry.

Primitive example:

let price = 100;

let newPrice = price;

newPrice = 200;


price is still:

100


Because the value was copied.


---------------------------------------------------------
Object example:
---------------------------------------------------------

const user1 = {
    name: "Navneet"
};

const user2 = user1;

user2.name = "Rahul";


Now:

console.log(user1.name);

Output:

Rahul


Both variables point to the same object.


---------------------------------------------------------
Why is this important?
---------------------------------------------------------

Imagine:

const originalUser = {
    name: "Navneet",
    role: "Admin"
};

const updatedUser = originalUser;

updatedUser.role = "User";


Now originalUser is ALSO changed.


This can cause serious bugs.


Industry solution:

Create a copy.

const updatedUser = {
    ...originalUser,
    role: "User"
};


Now:

originalUser.role → "Admin"

updatedUser.role → "User"


This is called:

IMMUTABLE UPDATE


This is EXTREMELY important in React.


=========================================================
12. DATA TYPES IN REACT
=========================================================

A typical React component uses many data types.

Example:

function Product() {

    const productName = "Laptop";
    // String


    const price = 50000;
    // Number


    const isAvailable = true;
    // Boolean


    const selectedProduct = null;
    // Null


    const product = {
        id: 1,
        name: "Laptop"
    };
    // Object


    const products = [
        "Laptop",
        "Mobile",
        "Tablet"
    ];
    // Array


    const calculateDiscount = () => {
        return price * 0.1;
    };
    // Function

}


This is basically what happens in real applications.


=========================================================
13. DATA TYPES IN API RESPONSES
=========================================================

Backend APIs usually send JSON.

Example:

{
    "success": true,
    "message": "Vehicles fetched successfully",
    "totalCount": 2,
    "data": [
        {
            "id": 1,
            "modelName": "Honda City",
            "price": 1200000,
            "available": true
        },
        {
            "id": 2,
            "modelName": "Hyundai Creta",
            "price": 1850000,
            "available": false
        }
    ]
}


Data types:

success
→ Boolean


message
→ String


totalCount
→ Number


data
→ Array


Each vehicle
→ Object


price
→ Number


available
→ Boolean


This is exactly the kind of data you will constantly
work with as a MERN developer.


=========================================================
14. MOST IMPORTANT DATA TYPES FOR YOU
=========================================================

As a MERN developer, focus heavily on:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Object
7. Array
8. Function


Then deeply understand:

Primitive vs Reference
Object copying
Array copying
Mutation
Immutability
Destructuring
Spread operator
Type conversion
Type coercion
Truthy and Falsy values


=========================================================
REAL INDUSTRY EXAMPLE
=========================================================

Imagine you are building:

Create Purchase Order


const purchaseOrder = {

    poNumber: "PO-1001",
    // String


    supplierName: "ABC Motors",
    // String


    totalAmount: 250000,
    // Number


    gstPercent: 18,
    // Number


    isApproved: false,
    // Boolean


    approvedBy: null,
    // Null


    items: [
        {
            productName: "Engine Oil",
            quantity: 10,
            price: 500
        },
        {
            productName: "Brake Pad",
            quantity: 5,
            price: 1000
        }
    ]
    // Array containing Objects

};


Function:

const calculateTotal = (items) => {

    return items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

};


=========================================================
INDUSTRY MENTAL MODEL
=========================================================

When you build a real application, think:

Single piece of information
        ↓
Primitive

Example:

const name = "Navneet";


One real-world entity
        ↓
Object

Example:

const user = {
    name: "Navneet",
    age: 20
};


Multiple entities
        ↓
Array

Example:

const users = [
    {...},
    {...},
    {...}
];


Logic / action
        ↓
Function

Example:

const handleLogin = () => {};



=========================================================
FINAL RULE
=========================================================

In real JavaScript/MERN projects, you will use:

String
Number
Boolean
Object
Array
Function

EVERY SINGLE DAY.

You will frequently deal with:

null
undefined

You should understand:

BigInt
Symbol

But you won't need them often as a beginner MERN developer.

Your next most important topic after understanding
basic data types should be:

TYPE CONVERSION
        ↓
TYPE COERCION
        ↓
TRUTHY AND FALSY
        ↓
OPERATORS
        ↓
CONDITIONS
        ↓
LOOPS
        ↓
FUNCTIONS
        ↓
ARRAYS AND OBJECTS (DEEP)
*/




/*
/*
=========================================================
       JAVASCRIPT DATA TYPES - PRACTICE QUESTIONS
              BEGINNER → ADVANCED
        QUESTIONS + RESPECTIVE ANSWERS
=========================================================


#########################################################
LEVEL 1 — BEGINNER
#########################################################


Q1. Identify the data type of each variable.

let a = 10;
let b = "Hello";
let c = true;
let d;
let e = null;


ANSWER:

a → Number
b → String
c → Boolean
d → Undefined
e → Null


---------------------------------------------------------


Q2. What is the output?

console.log(typeof 100);
console.log(typeof "100");
console.log(typeof true);
console.log(typeof undefined);


ANSWER:

number
string
boolean
undefined


---------------------------------------------------------


Q3. What are the 7 primitive data types in JavaScript?


ANSWER:

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol


---------------------------------------------------------


Q4. What is the difference between undefined and null?


ANSWER:

undefined
→ A variable exists but no value has been assigned.

Example:

let user;

console.log(user);

Output:

undefined


null
→ We intentionally assign an empty value.

Example:

let selectedUser = null;


---------------------------------------------------------


Q5. What is the output?

let x = 10;

console.log(typeof x);

x = "Hello";

console.log(typeof x);

x = true;

console.log(typeof x);


ANSWER:

number
string
boolean


Reason:

JavaScript is dynamically typed.

A variable can hold different types at different times.


#########################################################
LEVEL 2 — BASIC TO INTERMEDIATE
#########################################################


Q6. What is the output?

console.log(typeof null);


ANSWER:

object


IMPORTANT:

This is a historical bug/behavior of JavaScript.

typeof null returns:

object

But null is a primitive value.


---------------------------------------------------------


Q7. What is the output?

console.log(typeof []);
console.log(typeof {});


ANSWER:

object
object


Reason:

Arrays are also objects in JavaScript.


---------------------------------------------------------


Q8. How do you correctly check whether a value is an array?

const numbers = [10, 20, 30];


ANSWER:

Array.isArray(numbers);


Output:

true


---------------------------------------------------------


Q9. What is the output?

let a = "10";
let b = 20;

console.log(a + b);


ANSWER:

1020


Reason:

"10" + 20

Since one value is a string, + performs string
concatenation.


---------------------------------------------------------


Q10. What is the output?

console.log("10" - 5);


ANSWER:

5


Reason:

The - operator converts "10" into a number.

"10" → 10

10 - 5

= 5


---------------------------------------------------------


Q11. What is the output?

console.log("5" + 2);
console.log("5" - 2);
console.log("5" * 2);
console.log("10" / 2);


ANSWER:

52
3
10
5


---------------------------------------------------------


Q12. What is type coercion?


ANSWER:

Type coercion means JavaScript automatically converts
one data type into another.

Example:

"10" - 5

JavaScript converts:

"10" → 10

Result:

5


#########################################################
LEVEL 3 — TRUTHY AND FALSY
#########################################################


Q13. What is the output?

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(null));
console.log(Boolean(undefined));


ANSWER:

false
true
false
true
false
false


---------------------------------------------------------


Q14. What are the falsy values in JavaScript?


ANSWER:

false
0
-0
0n
""
null
undefined
NaN


Everything else is generally truthy.


---------------------------------------------------------


Q15. What is the output?

console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean("0"));
console.log(Boolean(0));


ANSWER:

true
true
true
false


IMPORTANT:

Empty arrays are truthy.

[]

Empty objects are truthy.

{}

Non-empty strings are truthy.

"0"

But number 0 is falsy.


---------------------------------------------------------


Q16. What is the output?

if ("Hello") {
    console.log("A");
}

if ("") {
    console.log("B");
}


ANSWER:

A


Reason:

"Hello" → Truthy

"" → Falsy


---------------------------------------------------------


Q17. What is the output?

if (0) {
    console.log("A");
} else {
    console.log("B");
}


ANSWER:

B


Reason:

0 is falsy.


#########################################################
LEVEL 4 — PRIMITIVE VS REFERENCE
#########################################################


Q18. What is the output?

let a = 10;

let b = a;

b = 20;

console.log(a);
console.log(b);


ANSWER:

10
20


Reason:

Numbers are primitive values.

The value of a is copied into b.


---------------------------------------------------------


Q19. What is the output?

const person1 = {
    name: "Navneet"
};

const person2 = person1;

person2.name = "Rahul";

console.log(person1.name);
console.log(person2.name);


ANSWER:

Rahul
Rahul


Reason:

person1 and person2 refer to the same object.


Visual representation:


person1 ──────┐
              ↓
       { name: "Rahul" }
              ↑
person2 ──────┘


---------------------------------------------------------


Q20. What is the output?

const arr1 = [10, 20];

const arr2 = arr1;

arr2.push(30);

console.log(arr1);
console.log(arr2);


ANSWER:

[10, 20, 30]
[10, 20, 30]


Reason:

Both variables refer to the same array.


---------------------------------------------------------


Q21. How do you create a copy of an array?


ANSWER:

const arr1 = [10, 20, 30];

const arr2 = [...arr1];


Now:

arr2.push(40);


arr1:

[10, 20, 30]


arr2:

[10, 20, 30, 40]


#########################################################
LEVEL 5 — OBJECT COPYING
#########################################################


Q22. What is the output?

const user = {
    name: "Navneet",
    age: 20
};

const copy = {
    ...user
};

copy.name = "Rahul";

console.log(user.name);
console.log(copy.name);


ANSWER:

Navneet
Rahul


Reason:

The spread operator creates a new object.


---------------------------------------------------------


Q23. What is the output?

const user = {
    name: "Navneet"
};

const copy = user;

copy.name = "Rahul";

console.log(user.name);


ANSWER:

Rahul


Reason:

No copy was created.

Both variables point to the same object.


---------------------------------------------------------


Q24. What is the difference?

const user1 = user;

VS

const user2 = { ...user };


ANSWER:


const user1 = user;

→ Both variables refer to the same object.


const user2 = { ...user };

→ A new shallow copy is created.


#########################################################
LEVEL 6 — TYPE CONVERSION
#########################################################


Q25. What is the output?

console.log(Number("100"));
console.log(Number("50.5"));
console.log(Number(true));
console.log(Number(false));


ANSWER:

100
50.5
1
0


---------------------------------------------------------


Q26. What is the output?

console.log(Number(""));
console.log(Number(" "));
console.log(Number("Hello"));


ANSWER:

0
0
NaN


---------------------------------------------------------


Q27. What is the output?

console.log(String(100));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));


ANSWER:

"100"
"true"
"null"
"undefined"


---------------------------------------------------------


Q28. What is the output?

console.log(Boolean("false"));
console.log(Boolean("0"));
console.log(Boolean("true"));


ANSWER:

true
true
true


Reason:

All of these are non-empty strings.


#########################################################
LEVEL 7 — == VS ===
#########################################################


Q29. What is the output?

console.log(10 == "10");
console.log(10 === "10");


ANSWER:

true
false


Reason:


==

Checks values after possible type conversion.


===

Checks:

Value
AND
Data Type


Industry standard:

Prefer ===


---------------------------------------------------------


Q30. What is the output?

console.log(null == undefined);
console.log(null === undefined);


ANSWER:

true
false


---------------------------------------------------------


Q31. What is the output?

console.log([] == false);
console.log([] === false);


ANSWER:

true
false


This is another reason why === is preferred.


#########################################################
LEVEL 8 — ADVANCED TYPE COERCION
#########################################################


Q32. What is the output?

console.log(1 + "2" + 3);


ANSWER:

123


Working:

1 + "2"

↓

"12"


"12" + 3

↓

"123"


---------------------------------------------------------


Q33. What is the output?

console.log(1 + 2 + "3");


ANSWER:

33


Working:

1 + 2

↓

3


3 + "3"

↓

"33"


---------------------------------------------------------


Q34. What is the output?

console.log("10" - 5 + 2);


ANSWER:

7


Working:

"10" - 5

↓

5


5 + 2

↓

7


---------------------------------------------------------


Q35. What is the output?

console.log("5" * "2");


ANSWER:

10


Reason:

The * operator converts both strings into numbers.


#########################################################
LEVEL 9 — SHALLOW COPY
#########################################################


Q36. What is the output?

const user = {
    name: "Navneet",
    address: {
        city: "Indore"
    }
};

const copy = {
    ...user
};

copy.address.city = "Delhi";

console.log(user.address.city);


ANSWER:

Delhi


Reason:

Spread operator creates a shallow copy.

The outer object is copied.

But nested objects are still shared.


Visual representation:


user                     copy

 ↓                         ↓

address ───────────────────┐
                           ↓

                   {
                       city: "Delhi"
                   }


---------------------------------------------------------


Q37. How can we safely update a nested object?

const user = {
    name: "Navneet",
    address: {
        city: "Indore"
    }
};


ANSWER:

const updatedUser = {
    ...user,
    address: {
        ...user.address,
        city: "Delhi"
    }
};


Now:

user.address.city

→ Indore


updatedUser.address.city

→ Delhi


#########################################################
LEVEL 10 — MERN STYLE QUESTIONS
#########################################################


Q38. Identify the data types.

const response = {
    success: true,
    message: "Users fetched",
    total: 2,
    data: [
        {
            id: 1,
            name: "Navneet",
            isActive: true
        }
    ]
};


ANSWER:


response

→ Object


response.success

→ Boolean


response.message

→ String


response.total

→ Number


response.data

→ Array


response.data[0]

→ Object


response.data[0].id

→ Number


response.data[0].name

→ String


response.data[0].isActive

→ Boolean


#########################################################
FINAL CHALLENGE
#########################################################


Q39. What is the output?

const user = {
    name: "Navneet",
    skills: ["JavaScript", "React"]
};

const copy = {
    ...user
};

copy.name = "Rahul";

copy.skills.push("Node.js");

console.log(user);
console.log(copy);


ANSWER:


user:

{
    name: "Navneet",
    skills: [
        "JavaScript",
        "React",
        "Node.js"
    ]
}


copy:

{
    name: "Rahul",
    skills: [
        "JavaScript",
        "React",
        "Node.js"
    ]
}


Reason:


name

→ Primitive value

The spread operator copies it.


skills

→ Array / Reference value

The nested array is still shared because
the spread operator creates only a shallow copy.


=========================================================
MOST IMPORTANT CONCEPTS TO MASTER
=========================================================


After solving all questions, you should clearly understand:


✓ Primitive Data Types

✓ Reference Values

✓ String

✓ Number

✓ Boolean

✓ Undefined

✓ Null

✓ Object

✓ Array

✓ typeof

✓ Array.isArray()

✓ Type Conversion

✓ Type Coercion

✓ Truthy Values

✓ Falsy Values

✓ == vs ===

✓ Primitive Copying

✓ Object References

✓ Array References

✓ Spread Operator

✓ Shallow Copy

✓ Nested Object Updates


=========================================================
INDUSTRY PRIORITY
=========================================================


For JavaScript and MERN development, focus MOST on:

1. Object
2. Array
3. Primitive vs Reference
4. Type Conversion
5. Type Coercion
6. Truthy and Falsy
7. == vs ===
8. Spread Operator
9. Shallow Copy
10. Immutability


If you understand these properly, your JavaScript
foundation for data types will be very strong.


*/

