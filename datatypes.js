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