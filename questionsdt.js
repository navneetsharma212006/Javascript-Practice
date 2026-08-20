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