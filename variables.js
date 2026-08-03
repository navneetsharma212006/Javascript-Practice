//var can be updated , redeclared , function scoped 

//let can be updated , but not redeclared , block scoped 

// const cant be updated and redclared , and is block scoped 
//but in a class , For objects and arrays, you cannot replace the whole object, but you can modify its contents.

/*

const person = {
    name: "Navneet"
};

person.name = "Rahul";

console.log(person);

*/

//while declaring a variable , always use camelcase - first word small othe wrod capital 



//q1 - find the cope of a variable



// let x = 20; 
// {
//     let x = 40;
//     {
//         let x = 60 ;
//         console.log(x);
//     }
//     console.log(x);
// }

// console.log(x);

/*

Global Scope
x = 10

Block 1
x = 20

Block 2
x = 30

Now there are three different variables, all named x.

This is called shadowing.

JavaScript always looks for the variable in the nearest scope first.

ex- 

let x = 10;

{
    let x = 20;
    x = 50;

    {
        x = 100;
    }

    console.log(x);
}

console.log(x);

output - 100 , 10 
*/


//q2 - var vs let - 


// let x = 10;

// {
//     let x = 20;
//     x = 50;

//     {
//         x = 100;
//     }

//     console.log(x);
// }

// console.log(x);


//q3 - 

// let x = 10 
// {

//     var y= 10 ;
//     let x = 30 ;

//     console.log(x,y);
// }

// console.log(x,y); 


//q4 - 

// console.log(a);

// var a = 10;

// console.log(b)
// let b = 20;

// console.log(c);

// const c = 30;


//q 5 - 

// const details = {
//     name : "Navneet",
//     age : 20
// }

// details.name = "Rahul";

// delete details.age;
// console.log(details);


//q6 - 

// const arr = [10, 20];

// arr[0] = 100;

// arr.push(30);

// arr.pop();

// console.log(arr);

// q7 -

// let score =100;

// function printScore(){

//     if(score){

//         let score =200;
//         console.log(score);
//     }

//     console.log(score);
// }

// printScore();

// console.log(score)


//q8 - 

// let x = 1;

// function test() {
//     console.log(x);

//     if (true) {
//         let x = 2;
//         console.log(x);
//     }

//     console.log(x);
// }

// test();

// console.log(x);



/*

=========================================================
JAVASCRIPT VARIABLES - COMPLETE INTERVIEW NOTES
=========================================================

---------------------------------------------------------
1. let vs const vs var
---------------------------------------------------------

var
----
- Old way (before ES6)
- Function scoped
- Can be updated
- Can be redeclared
- Hoisted with value = undefined
- Avoid using in modern JavaScript

Example:

var age = 20;

age = 21;      // Allowed
var age = 30;  // Allowed


let
----
- Introduced in ES6
- Block scoped
- Can be updated
- Cannot be redeclared in the same scope

Example:

let age = 20;

age = 25;      // Allowed

// let age = 30;  Error


Use let when the value changes.

Example:

let score = 0;

score++;

---------------------------------------------------------

const
------
- Block scoped
- Cannot be reassigned
- Must be initialized while declaring

Example:

const PI = 3.14;

// PI = 3.14159;  Error


Use const when the variable should always refer to the same value.

---------------------------------------------------------

Industry Rule

Does the value change?

          |
      +---+---+
      |       |
     No      Yes
      |       |
   const     let

Never use var in new projects.

=========================================================
2. Block Scope vs Function Scope
=========================================================

Block Scope
-----------

Variables declared with let and const exist only inside {}.

Example:

{
    let x = 10;
}

console.log(x);

Output:

ReferenceError


Reason:
The variable belongs only to that block.

---------------------------------------------------------

Function Scope
--------------

var belongs to the entire function.

Example:

function test() {
    var x = 10;
}

console.log(x);

Output:

ReferenceError


But

{
    var x = 10;
}

console.log(x);

Output:

10

Reason:
var ignores blocks and is only limited by functions.

=========================================================
3. Hoisting
=========================================================

Definition:

Before executing the code, JavaScript moves declarations to the top.

Example:

console.log(a);

var a = 10;

Internally JavaScript behaves like:

var a;

console.log(a);

a = 10;

Output:

undefined

---------------------------------------------------------

With let

console.log(a);

let a = 10;

Output:

ReferenceError

---------------------------------------------------------

With const

console.log(a);

const a = 10;

Output:

ReferenceError

---------------------------------------------------------

Interview Rule

Keyword      Hoisted?      Initial Value

var          Yes           undefined

let          Yes           Uninitialized

const        Yes           Uninitialized

Important:

let and const ARE hoisted.

The difference is that they stay inside the
Temporal Dead Zone until initialized.

=========================================================
4. Temporal Dead Zone (TDZ)
=========================================================

Definition:

The period between

Variable Creation

and

Variable Initialization

is called the Temporal Dead Zone.

Example:

console.log(name);

let name = "Navneet";

Output:

ReferenceError

Timeline:

Program Starts

↓

Variable Created

↓

TDZ Starts

↓

let name = "Navneet"

↓

TDZ Ends

=========================================================
5. Variable Shadowing
=========================================================

Definition:

When an inner variable has the same name
as an outer variable.

Example:

let x = 10;

{
    let x = 20;

    console.log(x);
}

console.log(x);

Output:

20

10

Reason:

The inner x hides (shadows) the outer x.

=========================================================
6. Lexical Scope
=========================================================

Definition:

A function can access variables from
where it is defined,
NOT where it is called.

Example:

let name = "Navneet";

function greet() {
    console.log(name);
}

greet();

Output:

Navneet

---------------------------------------------------------

Nested Example

let a = 1;

function one() {

    let b = 2;

    function two() {

        let c = 3;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    two();
}

one();

Output:

1

2

3

Variable Lookup:

Current Function

↓

Parent Function

↓

Global Scope

=========================================================
7. Global Scope Pollution
=========================================================

Definition:

Creating too many global variables.

Bad Example:

let count = 0;

Imagine 20 different files changing count.

You never know who modified it.

---------------------------------------------------------

Better Example

function calculate() {

    let count = 0;

}

Reason:

Keep variables inside functions whenever possible.

=========================================================
8. Reassignment vs Mutation
=========================================================

Reassignment
------------

Changing what the variable points to.

Example:

let x = 10;

x = 20;

This is reassignment.

---------------------------------------------------------

const Example

const x = 10;

x = 20;

Output:

TypeError

---------------------------------------------------------

Mutation
--------

Changing the contents of an object or array.

Example:

const user = {

    name: "Navneet"

};

user.name = "Rahul";

Works perfectly.

Reason:

The object itself is NOT replaced.

Only one property changes.

---------------------------------------------------------

Array Example

const arr = [1,2];

arr.push(3);

console.log(arr);

Output:

[1,2,3]

Works.

---------------------------------------------------------

But

arr = [];

Output:

TypeError

Remember:

const

Cannot replace object

Can modify object contents

=========================================================
9. Naming Conventions & Clean Code
=========================================================

Use camelCase

Good

let firstName;

let totalAmount;

let isLoggedIn;

---------------------------------------------------------

Constants

const MAX_RETRIES = 5;

const API_URL = "...";

Use UPPER_CASE only for real constants.

---------------------------------------------------------

Boolean Variables

Good

const isLoggedIn;

const hasPermission;

const canEdit;

const shouldRetry;

Bad

let flag;

let login;

let value;

---------------------------------------------------------

Meaningful Names

Bad

let a;

let x;

let temp;

Good

const studentName;

let totalMarks;

const currentUser;

---------------------------------------------------------

Avoid Magic Numbers

Bad

if(score > 90)

Good

const PASSING_SCORE = 90;

if(score > PASSING_SCORE)

=========================================================
10. When to Choose const over let
=========================================================

Industry Standard:

Always start with const.

Use let only if reassignment is needed.

---------------------------------------------------------

Use const

const API_URL = "...";

const companyName = "Google";

const PI = 3.14;

const user = {};

const numbers = [];

---------------------------------------------------------

Use let

let score = 0;

score++;

let page = 1;

page++;

let currentTheme = "light";

currentTheme = "dark";

---------------------------------------------------------

Real React Example

const [user, setUser] = useState(null);

const API_URL = "https://api.example.com";

let retryCount = 0;

Explanation:

- user (state value) is declared with const because the binding itself
  is never reassigned directly; updates happen through setUser().
- API_URL never changes.
- retryCount changes, so use let.

=========================================================
INTERVIEW CHEAT SHEET
=========================================================

var
- Function scoped
- Can redeclare
- Can reassign
- Avoid in modern projects

---------------------------------------------------------

let
- Block scoped
- Can reassign
- Cannot redeclare

---------------------------------------------------------

const
- Block scoped
- Cannot reassign
- Best choice by default

---------------------------------------------------------

Block Scope

Exists only inside {}

---------------------------------------------------------

Function Scope

Exists only inside a function

---------------------------------------------------------

Hoisting

Declarations move to the top before execution

---------------------------------------------------------

TDZ

let and const cannot be accessed before initialization

---------------------------------------------------------

Shadowing

Inner variable hides outer variable

---------------------------------------------------------

Lexical Scope

Functions access variables from where they are defined

---------------------------------------------------------

Global Scope Pollution

Too many global variables create bugs

---------------------------------------------------------

Reassignment

Changing the variable to point to another value

---------------------------------------------------------

Mutation

Changing object or array contents without replacing them

---------------------------------------------------------

Industry Standard

Default → const

Needs reassignment → let

Avoid → var


*/
