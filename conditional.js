/*
=========================================================
      JAVASCRIPT CONDITIONAL STATEMENTS & SWITCH CASE
                  COMPLETE NOTES
=========================================================


=========================================================
1. WHAT ARE CONDITIONAL STATEMENTS?
=========================================================

Conditional statements are used to make decisions
in a program.

Simple meaning:

IF a condition is true
    ↓
Do something

ELSE
    ↓
Do something else


Real-life example:

If it is raining
    Take an umbrella

Else
    Don't take an umbrella


In JavaScript, the main conditional statements are:

1. if
2. if...else
3. if...else if...else
4. Nested if
5. Ternary operator
6. switch case


=========================================================
2. IF STATEMENT
=========================================================

The if statement runs code ONLY when the condition
is true.


Syntax:

if (condition) {
    // code
}


Example:

let age = 20;

if (age >= 18) {
    console.log("You can vote");
}


Output:

You can vote


Working:

age = 20

Check:

20 >= 18

↓

true

↓

Run the code inside if


---------------------------------------------------------


Example when condition is false:

let age = 16;

if (age >= 18) {
    console.log("You can vote");
}


Output:

Nothing


Because:

16 >= 18

↓

false

The if block does not execute.


=========================================================
3. IF...ELSE STATEMENT
=========================================================

Use if...else when there are two possible results.


Syntax:

if (condition) {
    // runs when true
} else {
    // runs when false
}


Example:

let age = 16;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}


Output:

You cannot vote


Working:

age = 16

↓

16 >= 18

↓

false

↓

else block runs


=========================================================
4. IF...ELSE IF...ELSE
=========================================================

Use this when you have multiple conditions.


Example:

let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}


Output:

Grade B


---------------------------------------------------------

HOW DOES JAVASCRIPT CHECK IT?

JavaScript checks from TOP to BOTTOM.


marks = 75


Check:

marks >= 90

↓

false


Check:

marks >= 75

↓

true


Print:

Grade B


IMPORTANT:

Once JavaScript finds a true condition,
it runs that block and stops checking the
remaining else-if conditions.


=========================================================
5. ORDER OF CONDITIONS IS IMPORTANT
=========================================================

Wrong example:

let marks = 95;

if (marks >= 50) {
    console.log("Pass");
}
else if (marks >= 90) {
    console.log("Excellent");
}


Output:

Pass


Why?

Because:

95 >= 50

↓

true


JavaScript immediately executes:

"Pass"


It never reaches:

marks >= 90


---------------------------------------------------------

Correct version:

let marks = 95;

if (marks >= 90) {
    console.log("Excellent");
}
else if (marks >= 50) {
    console.log("Pass");
}


Output:

Excellent


RULE:

When conditions overlap, generally put the
more specific or stricter condition first.


=========================================================
6. NESTED IF
=========================================================

Nested if means:

An if statement inside another if statement.


Example:

let age = 20;
let hasLicense = true;

if (age >= 18) {

    if (hasLicense) {
        console.log("You can drive");
    }

}


Output:

You can drive


Working:

Check age

↓

age >= 18

↓

true

↓

Go inside the first if

↓

Check hasLicense

↓

true

↓

You can drive


---------------------------------------------------------


Another example:

let age = 20;
let hasLicense = false;

if (age >= 18) {

    if (hasLicense) {
        console.log("You can drive");
    } else {
        console.log("You need a license");
    }

} else {
    console.log("You are underage");
}


Output:

You need a license


=========================================================
7. COMPARISON OPERATORS IN CONDITIONS
=========================================================

Common comparison operators:


>       Greater than

<       Less than

>=      Greater than or equal to

<=      Less than or equal to

===     Strictly equal

!==     Strictly not equal


Example:

let age = 20;

if (age === 20) {
    console.log("Age is 20");
}


Output:

Age is 20


---------------------------------------------------------

Industry standard:

Prefer:

===

instead of:

==


Example:

let age = "20";

console.log(age == 20);

Output:

true


Because == can perform type conversion.


But:

console.log(age === 20);

Output:

false


Because:

"20" → String

20   → Number


Different data types.


=========================================================
8. LOGICAL OPERATORS IN CONDITIONS
=========================================================

Logical operators help combine conditions.


AND

&&


OR

||


NOT

!


---------------------------------------------------------
AND (&&)
---------------------------------------------------------

Both conditions must be true.


let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive");
}


Output:

You can drive


Truth table:

true  && true   → true

true  && false  → false

false && true   → false

false && false  → false


---------------------------------------------------------
OR (||)
---------------------------------------------------------

At least ONE condition must be true.


let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {
    console.log("Access granted");
}


Output:

Access granted


Truth table:

true  || true   → true

true  || false  → true

false || true   → true

false || false  → false


---------------------------------------------------------
NOT (!)
---------------------------------------------------------

NOT reverses the boolean value.


let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please login");
}


Output:

Please login


Because:

isLoggedIn

↓

false


!false

↓

true


=========================================================
9. TRUTHY AND FALSY IN CONDITIONS
=========================================================

JavaScript conditions do not always need to contain
true or false directly.


Example:

let userName = "Navneet";

if (userName) {
    console.log("User exists");
}


Output:

User exists


Because:

A non-empty string is truthy.


---------------------------------------------------------

Falsy values in JavaScript:

false

0

-0

0n

""

null

undefined

NaN


Example:

let userName = "";

if (userName) {
    console.log("User exists");
} else {
    console.log("User does not exist");
}


Output:

User does not exist


Because:

"" is falsy.


=========================================================
10. TERNARY OPERATOR
=========================================================

The ternary operator is a short form of a simple
if...else statement.


Syntax:

condition ? valueIfTrue : valueIfFalse


Example:

let age = 20;

let result = age >= 18
    ? "Adult"
    : "Minor";

console.log(result);


Output:

Adult


Equivalent if...else:

let result;

if (age >= 18) {
    result = "Adult";
} else {
    result = "Minor";
}


---------------------------------------------------------

Another example:

const isLoggedIn = true;

const message = isLoggedIn
    ? "Welcome back"
    : "Please login";


Industry rule:

Use ternary for simple conditions.

Avoid deeply nested ternary operators because they
become difficult to read.


=========================================================
11. SWITCH CASE
=========================================================

switch is useful when you want to compare ONE value
against MULTIPLE fixed options.


Syntax:

switch (value) {

    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}


Example:

let day = 2;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}


Output:

Tuesday


=========================================================
12. HOW SWITCH WORKS
=========================================================

Example:

let day = 2;


switch (day) {


JavaScript checks:

Is day === 1?

↓

No


Is day === 2?

↓

Yes


Run:

console.log("Tuesday");


Then:

break

↓

Exit the switch.


=========================================================
13. WHY DO WE USE break?
=========================================================

break stops the switch after a matching case.


Example WITHOUT break:

let day = 1;

switch (day) {

    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wednesday");
}


Output:

Monday
Tuesday
Wednesday


Why?

After finding case 1, JavaScript continues executing
the cases below it.

This is called:

FALL THROUGH


---------------------------------------------------------


Correct example:

let day = 1;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;
}


Output:

Monday


=========================================================
14. DEFAULT CASE
=========================================================

default runs when none of the cases match.


Example:

let role = "guest";

switch (role) {

    case "admin":
        console.log("Full access");
        break;

    case "user":
        console.log("Limited access");
        break;

    default:
        console.log("Invalid role");
}


Output:

Invalid role


=========================================================
15. MULTIPLE CASES WITH SAME OUTPUT
=========================================================

Example:

let day = "Saturday";

switch (day) {

    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Weekday");
}


Output:

Weekend


Meaning:

If day is:

Saturday

OR

Sunday

↓

Weekend


Equivalent if condition:

if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend");
}


=========================================================
16. SWITCH USES STRICT COMPARISON
=========================================================

switch compares values using behavior similar to ===.


Example:

let value = "1";

switch (value) {

    case 1:
        console.log("Number");
        break;

    case "1":
        console.log("String");
        break;
}


Output:

String


Because:

"1" and 1 have different types.


"1" → String

1   → Number


=========================================================
17. IF...ELSE VS SWITCH
=========================================================


USE IF...ELSE WHEN:


You are checking ranges.

Example:

let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}


Because:

marks >= 90

marks >= 75


These are comparisons.


---------------------------------------------------------


USE SWITCH WHEN:


You are comparing one value against fixed options.


Example:

let role = "admin";

switch (role) {

    case "admin":
        console.log("Admin Dashboard");
        break;

    case "manager":
        console.log("Manager Dashboard");
        break;

    case "employee":
        console.log("Employee Dashboard");
        break;

    default:
        console.log("Invalid role");
}


=========================================================
18. REAL-WORLD EXAMPLE — LOGIN
=========================================================

const isLoggedIn = true;

if (isLoggedIn) {
    console.log("Show Dashboard");
} else {
    console.log("Show Login Page");
}


This type of condition is very common in:

Authentication
React applications
Protected routes


=========================================================
19. REAL-WORLD EXAMPLE — USER ROLE
=========================================================

const role = "manager";

switch (role) {

    case "admin":
        console.log("Full system access");
        break;

    case "manager":
        console.log("Manager access");
        break;

    case "employee":
        console.log("Limited access");
        break;

    default:
        console.log("Access denied");
}


This is commonly used for:

Role-based access
Authorization
Dashboard permissions


=========================================================
20. REAL-WORLD EXAMPLE — STOCK STATUS
=========================================================

const stockStatus = "LOW";


if (stockStatus === "OUT") {

    console.log("Out of Stock");

}
else if (stockStatus === "LOW") {

    console.log("Low Stock Warning");

}
else if (stockStatus === "AVAILABLE") {

    console.log("Stock Available");

}
else {

    console.log("Unknown Status");

}


The same logic using switch:


switch (stockStatus) {

    case "OUT":
        console.log("Out of Stock");
        break;

    case "LOW":
        console.log("Low Stock Warning");
        break;

    case "AVAILABLE":
        console.log("Stock Available");
        break;

    default:
        console.log("Unknown Status");
}


=========================================================
INDUSTRY BEST PRACTICES
=========================================================


1. Prefer === over ==

Good:

if (role === "admin") {
}


---------------------------------------------------------


2. Use meaningful variable names.

Good:

isLoggedIn

hasPermission

isAdmin

hasLicense


Avoid:

x

flag

value


---------------------------------------------------------


3. Avoid deeply nested conditions when possible.


Difficult:

if (user) {

    if (user.isActive) {

        if (user.isVerified) {

            console.log("Access granted");

        }

    }

}


A clearer approach:

if (!user) {

    console.log("User not found");

}
else if (!user.isActive) {

    console.log("User is inactive");

}
else if (!user.isVerified) {

    console.log("User is not verified");

}
else {

    console.log("Access granted");

}


=========================================================
QUICK REVISION
=========================================================


if

→ Run code if a condition is true.


if...else

→ Choose between two possibilities.


if...else if...else

→ Check multiple conditions.


Nested if

→ An if inside another if.


&&

→ Both conditions must be true.


||

→ At least one condition must be true.


!

→ Reverses true/false.


Ternary Operator

→ Short form of simple if...else.


switch

→ Compare one value with multiple fixed options.


case

→ A possible matching value.


break

→ Stops the switch.


default

→ Runs when no case matches.


=========================================================
EASY DECISION GUIDE
=========================================================


Checking a range?

Example:

marks >= 90

↓

Use if...else


--------------------------------


Checking one value against fixed options?

Example:

role = "admin"
role = "manager"
role = "employee"

↓

Use switch


--------------------------------


Simple true/false decision?

↓

Use if...else
or
Ternary operator


=========================================================
REMEMBER
=========================================================

CONDITION

↓

true or false

↓

DECISION

↓

Run the appropriate code


Example:

if (condition) {
    Run this if true
} else {
    Run this if false
}
*/