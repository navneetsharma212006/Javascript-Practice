/*
=========================================================
        JAVASCRIPT LOGICAL OPERATORS
     INDUSTRY EXAMPLES + PRACTICE QUESTIONS
        BEGINNER → ADVANCED WITH ANSWERS
=========================================================


=========================================================
1. WHAT ARE LOGICAL OPERATORS?
=========================================================

Logical operators are used to combine, modify,
or check multiple conditions.

The three main logical operators are:

&&    AND

||    OR

!     NOT


Simple idea:

Condition 1 + Condition 2

↓

Logical Operator

↓

Final Result


=========================================================
2. AND OPERATOR (&&)
=========================================================

AND means:

ALL conditions must be true.
Example:

let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive");
}


Output:

You can drive


Because:

age >= 18        → true

hasLicense        → true


true && true

↓

true


---------------------------------------------------------
AND TRUTH TABLE
---------------------------------------------------------

true  && true   → true

true  && false  → false

false && true   → false

false && false  → false


Remember:

AND = Everything required must be true.


=========================================================
3. OR OPERATOR (||)
=========================================================

OR means:

At least ONE condition must be true.


Example:

let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {
    console.log("Access granted");
}


Output:

Access granted


Because:

false || true

↓

true


---------------------------------------------------------
OR TRUTH TABLE
---------------------------------------------------------

true  || true   → true

true  || false  → true

false || true   → true

false || false  → false


Remember:

OR = At least one condition must be true.


=========================================================
4. NOT OPERATOR (!)
=========================================================

NOT reverses a boolean value.


Example:

let isLoggedIn = false;

console.log(!isLoggedIn);


Output:

true


Because:

!false

↓

true


Another example:

let isLoggedIn = true;

if (!isLoggedIn) {
    console.log("Please login");
}


The condition becomes:

!true

↓

false


So the code does not run.


=========================================================
5. INDUSTRY EXAMPLE — LOGIN SYSTEM
=========================================================

Imagine a website.

A user can access the dashboard only if:

1. User is logged in
2. User account is active


const isLoggedIn = true;
const isActive = true;

if (isLoggedIn && isActive) {
    console.log("Show Dashboard");
} else {
    console.log("Access Denied");
}


This is a common use of:

&&


=========================================================
6. INDUSTRY EXAMPLE — ADMIN ACCESS
=========================================================

Suppose a user can access a page if they are:

Admin

OR

Manager


const role = "manager";

if (role === "admin" || role === "manager") {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


This is a common use of:

||


=========================================================
7. INDUSTRY EXAMPLE — PROTECTED ROUTE
=========================================================

Suppose a user should be redirected to login
if they are NOT logged in.


const isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Redirect to Login");
}


Here:

!isLoggedIn

means:

User is NOT logged in.


=========================================================
8. INDUSTRY EXAMPLE — E-COMMERCE CHECKOUT
=========================================================

A customer can place an order only when:

1. User is logged in
2. Cart is not empty
3. Payment is successful


const isLoggedIn = true;
const cartItems = 3;
const isPaymentSuccessful = true;

if (
    isLoggedIn &&
    cartItems > 0 &&
    isPaymentSuccessful
) {
    console.log("Order Placed");
} else {
    console.log("Cannot Place Order");
}


This is a realistic example of multiple AND
conditions.


=========================================================
9. INDUSTRY EXAMPLE — DISCOUNT SYSTEM
=========================================================

Give a discount if the customer:

Is a premium member

OR

Has a valid coupon.


const isPremiumMember = false;
const hasCoupon = true;

if (isPremiumMember || hasCoupon) {
    console.log("Discount Applied");
}


Output:

Discount Applied


=========================================================
10. INDUSTRY EXAMPLE — USER VALIDATION
=========================================================

A user should NOT proceed if:

The email is missing

OR

The password is missing.


const email = "";
const password = "123456";

if (!email || !password) {
    console.log("Email and password are required");
} else {
    console.log("Login request sent");
}


Working:

email = ""

!email

↓

true


true || false

↓

true


So validation fails.


=========================================================
11. INDUSTRY EXAMPLE — INVENTORY SYSTEM
=========================================================

A product can be sold only if:

Stock is available

AND

Product is active.


const stock = 10;
const isActive = true;

if (stock > 0 && isActive) {
    console.log("Product can be sold");
} else {
    console.log("Product cannot be sold");
}


This type of logic is commonly used in:

E-commerce
Inventory Management
Showroom Management Systems


=========================================================
12. COMBINING &&, ||, AND !
=========================================================

You can combine logical operators.


Example:

const isLoggedIn = true;
const isAdmin = false;
const isManager = true;

if (
    isLoggedIn &&
    (isAdmin || isManager)
) {
    console.log("Access Granted");
}


Working:

isAdmin || isManager

↓

false || true

↓

true


Now:

isLoggedIn && true

↓

true && true

↓

true


Output:

Access Granted


IMPORTANT:

Use brackets when combining multiple logical
operators because it makes the code easier to read.


=========================================================
13. SHORT-CIRCUIT BEHAVIOR
=========================================================

Logical operators can stop checking early.


---------------------------------------------------------
&& SHORT-CIRCUIT
---------------------------------------------------------

If the first condition is false,
JavaScript already knows the result is false.


false && anything

↓

false


Example:

const isLoggedIn = false;

if (isLoggedIn && checkUserPermission()) {
    console.log("Access");
}


checkUserPermission() will not run.


Why?

Because:

false && anything

will always be:

false


---------------------------------------------------------
|| SHORT-CIRCUIT
---------------------------------------------------------

If the first condition is true,
JavaScript already knows the result is true.


true || anything

↓

true


Example:

const isAdmin = true;

if (isAdmin || checkPermission()) {
    console.log("Access");
}


checkPermission() will not run.


=========================================================
14. USING || FOR DEFAULT VALUES
=========================================================

Example:

let userName = "";

let displayName = userName || "Guest";

console.log(displayName);


Output:

Guest


Because:

"" is falsy.


So JavaScript uses:

"Guest"


Another example:

const savedTheme = null;

const theme = savedTheme || "light";


If savedTheme does not have a truthy value,
"light" will be used.


=========================================================
15. IMPORTANT: || CAN CAUSE PROBLEMS
=========================================================

Suppose:

const userAge = 0;

const displayAge = userAge || 18;


Output:

18


But 0 might actually be a valid value.


For null or undefined defaults, modern JavaScript
often uses:

??


Example:

const userAge = 0;

const displayAge = userAge ?? 18;


Output:

0


Difference:

|| uses the right side when the left side is FALSY.

?? uses the right side only when the left side is:

null

or

undefined


=========================================================
PRACTICE QUESTIONS
=========================================================


=========================================================
LEVEL 1 — BEGINNER
=========================================================


Q1. What will be the output?

console.log(true && true);


ANSWER:

true


Explanation:

Both values are true.


---------------------------------------------------------


Q2. What will be the output?

console.log(true && false);


ANSWER:

false


Explanation:

AND requires both conditions to be true.


---------------------------------------------------------


Q3. What will be the output?

console.log(false || true);


ANSWER:

true


Explanation:

OR requires at least one value to be true.


---------------------------------------------------------


Q4. What will be the output?

console.log(false || false);


ANSWER:

false


Explanation:

Both values are false.


---------------------------------------------------------


Q5. What will be the output?

console.log(!true);


ANSWER:

false


Explanation:

NOT reverses true.


---------------------------------------------------------


Q6. What will be the output?

console.log(!false);


ANSWER:

true


Explanation:

NOT reverses false.


---------------------------------------------------------


Q7. What will be the output?

let age = 20;

console.log(age >= 18 && age < 30);


ANSWER:

true


Explanation:

20 >= 18

↓

true


20 < 30

↓

true


true && true

↓

true


---------------------------------------------------------


Q8. What will be the output?

let age = 15;

console.log(age >= 18 || age === 15);


ANSWER:

true


Because:

15 >= 18

↓

false


15 === 15

↓

true


false || true

↓

true


=========================================================
LEVEL 2 — EASY TO MEDIUM
=========================================================


Q9. What will be the output?

let isLoggedIn = true;
let isVerified = false;

if (isLoggedIn && isVerified) {
    console.log("Dashboard");
} else {
    console.log("Access Denied");
}


ANSWER:

Access Denied


Because:

true && false

↓

false


---------------------------------------------------------


Q10. What will be the output?

let role = "admin";

if (role === "admin" || role === "manager") {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


ANSWER:

Access Granted


---------------------------------------------------------


Q11. What will be the output?

let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please Login");
}


ANSWER:

Please Login


Because:

!false

↓

true


---------------------------------------------------------


Q12. What will be the output?

let marks = 85;

if (marks >= 90 || marks >= 80) {
    console.log("Good");
} else {
    console.log("Average");
}


ANSWER:

Good


Because:

marks >= 90

↓

false


marks >= 80

↓

true


false || true

↓

true


---------------------------------------------------------


Q13. What will be the output?

let stock = 0;
let isActive = true;

if (stock > 0 && isActive) {
    console.log("Available");
} else {
    console.log("Unavailable");
}


ANSWER:

Unavailable


Because:

stock > 0

↓

false


false && true

↓

false


=========================================================
LEVEL 3 — MEDIUM
=========================================================


Q14. Predict the output.

const isLoggedIn = true;
const role = "user";
const isVerified = true;

if (
    isLoggedIn &&
    (role === "admin" || isVerified)
) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


ANSWER:

Access Granted


Working:

role === "admin"

↓

false


isVerified

↓

true


false || true

↓

true


isLoggedIn && true

↓

true


---------------------------------------------------------


Q15. What will be the output?

let x = 10;

console.log(x > 5 && x < 20 || x === 100);


ANSWER:

true


Working:

x > 5

↓

true


x < 20

↓

true


true && true

↓

true


true || false

↓

true


---------------------------------------------------------


Q16. What will be the output?

let value = "";

console.log(value || "Default Value");


ANSWER:

Default Value


Because:

"" is falsy.


---------------------------------------------------------


Q17. What will be the output?

let value = "Hello";

console.log(value || "Default Value");


ANSWER:

Hello


Because:

"Hello" is truthy.


---------------------------------------------------------


Q18. What will be the output?

let value = 0;

console.log(value || 100);


ANSWER:

100


Because:

0 is falsy.


=========================================================
LEVEL 4 — MEDIUM TO HARD
=========================================================


Q19. What will be the output?

let x = 0;

console.log(x ?? 100);


ANSWER:

0


Because:

?? only uses the default value when the left
side is null or undefined.


0 is NOT null or undefined.


---------------------------------------------------------


Q20. What will be the output?

const user = null;

if (!user || !user.isActive) {
    console.log("Invalid User");
}


ANSWER:

Invalid User


IMPORTANT:

Because user is null:

!user

↓

true


Due to || short-circuiting:

!user.isActive

will NOT be evaluated.


This prevents an error.


---------------------------------------------------------


Q21. What will happen?

let count = 0;

function increase() {
    count++;
    return true;
}

console.log(false && increase());
console.log(count);


ANSWER:

false

0


Explanation:

false && increase()


JavaScript already knows the result is false.

So:

increase()

does NOT run.


This is short-circuit evaluation.


---------------------------------------------------------


Q22. What will be the output?

let count = 0;

function increase() {
    count++;
    return false;
}

console.log(true || increase());
console.log(count);


ANSWER:

true

0


Because:

true || anything

↓

true


So increase() does not run.


=========================================================
LEVEL 5 — HARD
=========================================================


Q23. What will be the output?

const isLoggedIn = true;
const isBlocked = false;
const role = "admin";

if (
    isLoggedIn &&
    !isBlocked &&
    (role === "admin" || role === "manager")
) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


ANSWER:

Access Granted


Working:

isLoggedIn

↓

true


!isBlocked

↓

!false

↓

true


role === "admin"

↓

true


true || false

↓

true


Final:

true && true && true

↓

true


---------------------------------------------------------


Q24. What will be the output?

let a = "";

let result = a && "Hello";

console.log(result);


ANSWER:

""


Important:

&& does not always return true or false.

It returns one of the actual values.


For:

a && "Hello"


Since a is falsy, JavaScript returns:

a


Which is:

""


---------------------------------------------------------


Q25. What will be the output?

let a = "JavaScript";

let result = a && "Hello";

console.log(result);


ANSWER:

Hello


Because:

a is truthy.

So JavaScript evaluates and returns:

"Hello"


---------------------------------------------------------


Q26. What will be the output?

let a = "";

let result = a || "Default";

console.log(result);


ANSWER:

Default


Because:

a is falsy.


---------------------------------------------------------


Q27. What will be the output?

let a = "User";

let result = a || "Default";

console.log(result);


ANSWER:

User


Because:

a is truthy.


=========================================================
LEVEL 6 — ADVANCED INDUSTRY STYLE QUESTIONS
=========================================================


Q28. Predict the output.

const user = {
    isLoggedIn: true,
    role: "employee",
    isActive: true
};

const canAccess =
    user.isLoggedIn &&
    user.isActive &&
    (user.role === "admin" ||
     user.role === "manager");

console.log(canAccess);


ANSWER:

false


Because:

true && true && false

↓

false


An employee is not admin or manager.


---------------------------------------------------------


Q29. What will be the output?

const user = null;

const name = user && user.name;

console.log(name);


ANSWER:

null


Because:

user is null, which is falsy.

So JavaScript stops immediately and returns:

null


---------------------------------------------------------


Q30. What will be the output?

const user = {
    name: "Navneet"
};

const name = user && user.name;

console.log(name);


ANSWER:

Navneet


Because:

user exists and is truthy.

So JavaScript evaluates:

user.name


=========================================================
FINAL INTERVIEW CHEAT SHEET
=========================================================


&&  AND
---------------------------------------------------------

All required conditions must be truthy.

Example:

isLoggedIn && hasPermission


---------------------------------------------------------


||  OR
---------------------------------------------------------

At least one condition must be truthy.

Example:

isAdmin || isManager


---------------------------------------------------------


!   NOT
---------------------------------------------------------

Reverses a boolean/truthy-falsy value.

Example:

!isLoggedIn


---------------------------------------------------------


&& SHORT CIRCUIT
---------------------------------------------------------

If the left side is falsy:

JavaScript stops.

Example:

false && functionCall()


functionCall() does not execute.


---------------------------------------------------------


|| SHORT CIRCUIT
---------------------------------------------------------

If the left side is truthy:

JavaScript stops.

Example:

true || functionCall()


functionCall() does not execute.


---------------------------------------------------------


IMPORTANT INDUSTRY PATTERN
=========================================================


Access Control:

const canAccess =
    isLoggedIn &&
    isActive &&
    hasPermission;


Validation:

if (!email || !password) {
    console.log("Required fields missing");
}


Role Check:

if (role === "admin" || role === "manager") {
    console.log("Authorized");
}


Block User:

if (isLoggedIn && !isBlocked) {
    console.log("Allow access");
}


=========================================================
BEST WAY TO MASTER THIS TOPIC
=========================================================

Practice in this order:

1. Truth table of &&

2. Truth table of ||

3. ! operator

4. Combine && and ||

5. Use brackets ()

6. Truthy and falsy values

7. Short-circuit behavior

8. Default values with ||

9. Difference between || and ??

10. Real-world authentication and validation logic


Once you can solve these questions without running
the code, your understanding of JavaScript logical
operators will be strong enough for practical
JavaScript and MERN development.
=========================================================
*/


/*

/*

=========================================================
        JAVASCRIPT LOOPS - PRACTICE QUESTIONS
        BEGINNER → ADVANCED
        WITH ANSWERS + EXPLANATIONS
=========================================================

IMPORTANT:

Try to solve each question yourself first.

Only then check the answer.

The goal is to understand:

1. for loop
2. while loop
3. do...while loop
4. for...of
5. for...in
6. break
7. continue
8. nested loops
9. infinite loops
10. real-world array processing


=========================================================
LEVEL 1 — BEGINNER
=========================================================


---------------------------------------------------------
Q1. Print numbers from 1 to 5
---------------------------------------------------------

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


ANSWER:

1
2
3
4
5


Working:

i = 1 → print 1 → i++

i = 2 → print 2 → i++

i = 3 → print 3 → i++

i = 4 → print 4 → i++

i = 5 → print 5 → i++

i = 6

6 <= 5 → false

Loop stops.


=========================================================


---------------------------------------------------------
Q2. What will be the output?
---------------------------------------------------------

for (let i = 0; i < 3; i++) {
    console.log(i);
}


ANSWER:

0
1
2


Explanation:

The loop starts at 0.

It continues while:

i < 3


When i becomes 3:

3 < 3 → false

So the loop stops.


=========================================================


---------------------------------------------------------
Q3. Print numbers from 10 to 1
---------------------------------------------------------

ANSWER:

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


Output:

10
9
8
7
6
5
4
3
2
1


=========================================================


---------------------------------------------------------
Q4. Print only even numbers from 1 to 10
---------------------------------------------------------

ANSWER:

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }

}


Output:

2
4
6
8
10


% means remainder.

Example:

4 % 2 = 0

So 4 is even.


=========================================================


---------------------------------------------------------
Q5. What will be the output?
---------------------------------------------------------

let i = 1;

while (i <= 3) {
    console.log(i);
    i++;
}


ANSWER:

1
2
3


=========================================================


---------------------------------------------------------
Q6. What will happen?
---------------------------------------------------------

let i = 1;

while (i <= 5) {
    console.log(i);
}


ANSWER:

Infinite Loop


Why?

Because i never changes.

i is always:

1


So:

1 <= 5

is always true.


Correct code:

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


=========================================================
LEVEL 2 — BASIC UNDERSTANDING
=========================================================


---------------------------------------------------------
Q7. What will be the output?
---------------------------------------------------------

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        break;
    }

    console.log(i);
}


ANSWER:

1
2


Explanation:

When i becomes 3:

break

stops the complete loop.


=========================================================


---------------------------------------------------------
Q8. What will be the output?
---------------------------------------------------------

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}


ANSWER:

1
2
4
5


Explanation:

continue skips only the current iteration.

When:

i = 3

↓

continue

↓

console.log(3) is skipped.


The loop continues.


=========================================================


---------------------------------------------------------
Q9. What will be the output?
---------------------------------------------------------

for (let i = 0; i < 5; i += 2) {
    console.log(i);
}


ANSWER:

0
2
4


Working:

i = 0

i = 0 + 2 = 2

i = 2 + 2 = 4

i = 4 + 2 = 6

6 < 5 → false


=========================================================


---------------------------------------------------------
Q10. What will be the output?
---------------------------------------------------------

let i = 5;

while (i > 0) {
    console.log(i);
    i -= 2;
}


ANSWER:

5
3
1


=========================================================


---------------------------------------------------------
Q11. What will be the output?
---------------------------------------------------------

let i = 10;

do {
    console.log(i);
} while (i < 5);


ANSWER:

10


Explanation:

do...while executes the code first.

After that:

10 < 5

↓

false


So it stops.


=========================================================
LEVEL 3 — ARRAYS WITH LOOPS
=========================================================


---------------------------------------------------------
Q12. Print every element of the array
---------------------------------------------------------

const numbers = [10, 20, 30, 40];


ANSWER:

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


Output:

10
20
30
40


=========================================================


---------------------------------------------------------
Q13. What will be the output?
---------------------------------------------------------

const fruits = ["Apple", "Mango", "Banana"];

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}


ANSWER:

0 Apple
1 Mango
2 Banana


=========================================================


---------------------------------------------------------
Q14. Find the sum of all numbers
---------------------------------------------------------

const numbers = [10, 20, 30, 40];


ANSWER:

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);


Output:

100


Working:

sum = 0

0 + 10 = 10

10 + 20 = 30

30 + 30 = 60

60 + 40 = 100


=========================================================


---------------------------------------------------------
Q15. Find the largest number
---------------------------------------------------------

const numbers = [10, 50, 20, 80, 40];


ANSWER:

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        largest = numbers[i];
    }

}

console.log(largest);


Output:

80


=========================================================


---------------------------------------------------------
Q16. Count how many even numbers exist
---------------------------------------------------------

const numbers = [10, 15, 20, 23, 30];


ANSWER:

let count = 0;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        count++;
    }

}

console.log(count);


Output:

3


Even numbers:

10
20
30


=========================================================
LEVEL 4 — for...of
=========================================================


---------------------------------------------------------
Q17. Print all values using for...of
---------------------------------------------------------

const technologies = [
    "JavaScript",
    "React",
    "Node.js"
];


ANSWER:

for (const technology of technologies) {
    console.log(technology);
}


Output:

JavaScript
React
Node.js


=========================================================


---------------------------------------------------------
Q18. Find the total using for...of
---------------------------------------------------------

const prices = [100, 200, 300];


ANSWER:

let total = 0;

for (const price of prices) {
    total += price;
}

console.log(total);


Output:

600


=========================================================


---------------------------------------------------------
Q19. What will be the output?
---------------------------------------------------------

const name = "JS";

for (const character of name) {
    console.log(character);
}


ANSWER:

J
S


Reason:

Strings are iterable.

So for...of can loop through each character.


=========================================================
LEVEL 5 — for...in
=========================================================


---------------------------------------------------------
Q20. What will be the output?
---------------------------------------------------------

const user = {
    name: "Navneet",
    age: 20,
    role: "Developer"
};

for (const key in user) {
    console.log(key);
}


ANSWER:

name
age
role


for...in gives:

KEYS


=========================================================


---------------------------------------------------------
Q21. Print both key and value
---------------------------------------------------------

const user = {
    name: "Navneet",
    age: 20
};


ANSWER:

for (const key in user) {
    console.log(key, user[key]);
}


Output:

name Navneet
age 20


=========================================================
LEVEL 6 — break AND continue
=========================================================


---------------------------------------------------------
Q22. Find "React" and stop searching
---------------------------------------------------------

const technologies = [
    "HTML",
    "CSS",
    "React",
    "Node.js"
];


ANSWER:

for (const technology of technologies) {

    if (technology === "React") {
        console.log("React Found");
        break;
    }

}


Output:

React Found


After finding React:

break

stops the loop.


=========================================================


---------------------------------------------------------
Q23. Skip negative numbers
---------------------------------------------------------

const numbers = [10, -5, 20, -10, 30];


ANSWER:

for (const number of numbers) {

    if (number < 0) {
        continue;
    }

    console.log(number);
}


Output:

10
20
30


=========================================================
LEVEL 7 — NESTED LOOPS
=========================================================


---------------------------------------------------------
Q24. What will be the output?
---------------------------------------------------------

for (let i = 1; i <= 2; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }

}


ANSWER:

1 1
1 2
1 3
2 1
2 2
2 3


Working:

First:

i = 1

Inner loop completely runs:

j = 1
j = 2
j = 3


Then:

i = 2

Inner loop again completely runs.


=========================================================


---------------------------------------------------------
Q25. Print this pattern
---------------------------------------------------------

*
**
***
****


ANSWER:

for (let i = 1; i <= 4; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}


=========================================================
LEVEL 8 — MEDIUM TO HARD
=========================================================


---------------------------------------------------------
Q26. Reverse an array manually
---------------------------------------------------------

const numbers = [10, 20, 30, 40];


ANSWER:

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}


Output:

40
30
20
10


=========================================================


---------------------------------------------------------
Q27. Count positive and negative numbers
---------------------------------------------------------

const numbers = [10, -5, 0, 20, -10];


ANSWER:

let positive = 0;
let negative = 0;

for (const number of numbers) {

    if (number > 0) {
        positive++;
    } else if (number < 0) {
        negative++;
    }

}

console.log("Positive:", positive);
console.log("Negative:", negative);


Output:

Positive: 2
Negative: 2


0 is neither positive nor negative.


=========================================================


---------------------------------------------------------
Q28. Find the first even number and stop
---------------------------------------------------------

const numbers = [11, 15, 21, 28, 30];


ANSWER:

for (const number of numbers) {

    if (number % 2 === 0) {
        console.log(number);
        break;
    }

}


Output:

28


Why?

The loop finds:

11 → not even
15 → not even
21 → not even
28 → even

↓

Print

↓

break


30 is never checked.


=========================================================
LEVEL 9 — INDUSTRY BASED QUESTIONS
=========================================================


---------------------------------------------------------
Q29. Calculate shopping cart total
---------------------------------------------------------

const cart = [
    { name: "Phone", price: 20000 },
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 }
];


ANSWER:

let totalAmount = 0;

for (const item of cart) {
    totalAmount += item.price;
}

console.log(totalAmount);


Output:

71000


Industry use:

E-commerce

Billing system

Invoice system


=========================================================


---------------------------------------------------------
Q30. Calculate total revenue from completed orders only
---------------------------------------------------------

const orders = [

    {
        id: 1,
        amount: 1000,
        status: "completed"
    },

    {
        id: 2,
        amount: 2000,
        status: "pending"
    },

    {
        id: 3,
        amount: 500,
        status: "completed"
    }

];


ANSWER:

let revenue = 0;

for (const order of orders) {

    if (order.status !== "completed") {
        continue;
    }

    revenue += order.amount;
}

console.log(revenue);


Output:

1500


=========================================================


---------------------------------------------------------
Q31. Find an out-of-stock product
---------------------------------------------------------

const products = [

    { name: "Tyre", stock: 10 },

    { name: "Battery", stock: 0 },

    { name: "Engine", stock: 5 }

];


ANSWER:

for (const product of products) {

    if (product.stock === 0) {

        console.log(
            product.name + " is out of stock"
        );

        break;
    }

}


Output:

Battery is out of stock


=========================================================
LEVEL 10 — ADVANCED
=========================================================


---------------------------------------------------------
Q32. What will be the output?
---------------------------------------------------------

let sum = 0;

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    sum += i;
}

console.log(sum);


ANSWER:

12


Working:

i = 1

sum = 0 + 1

↓

1


i = 2

sum = 1 + 2

↓

3


i = 3

continue

↓

Skip


i = 4

sum = 3 + 4

↓

7


i = 5

sum = 7 + 5

↓

12


=========================================================


---------------------------------------------------------
Q33. What will be the output?
---------------------------------------------------------

let count = 0;

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 2; j++) {
        count++;
    }

}

console.log(count);


ANSWER:

6


Reason:

Outer loop runs:

3 times


Inner loop runs:

2 times for every outer iteration.


Total:

3 × 2

=

6


=========================================================


---------------------------------------------------------
Q34. Find duplicate numbers
---------------------------------------------------------

const numbers = [1, 2, 3, 2, 4, 3];


ANSWER:

for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

        if (numbers[i] === numbers[j]) {
            console.log("Duplicate:", numbers[i]);
        }

    }

}


Output:

Duplicate: 2
Duplicate: 3


Explanation:

Each number is compared with the numbers after it.


=========================================================


---------------------------------------------------------
Q35. HARD — Calculate total stock value
---------------------------------------------------------

const products = [

    {
        name: "Tyre",
        price: 5000,
        stock: 10
    },

    {
        name: "Battery",
        price: 8000,
        stock: 5
    },

    {
        name: "Engine",
        price: 50000,
        stock: 2
    }

];


QUESTION:

Calculate:

price × stock

for every product.

Then calculate the total inventory value.


ANSWER:

let totalValue = 0;

for (const product of products) {

    const productValue =
        product.price * product.stock;

    totalValue += productValue;
}

console.log(totalValue);


Working:

Tyre:

5000 × 10

=

50000


Battery:

8000 × 5

=

40000


Engine:

50000 × 2

=

100000


Total:

50000 + 40000 + 100000

=

190000


Output:

190000


=========================================================
FINAL PRACTICE CHALLENGES
=========================================================

Try solving these WITHOUT seeing the answer first.


Q36.

Find the smallest number in:

const numbers = [40, 10, 90, 5, 30];


ANSWER:

let smallest = numbers[0];

for (const number of numbers) {

    if (number < smallest) {
        smallest = number;
    }

}

console.log(smallest);


Output:

5


---------------------------------------------------------


Q37.

Count how many users are active.


const users = [

    { name: "A", active: true },
    { name: "B", active: false },
    { name: "C", active: true },
    { name: "D", active: true }

];


ANSWER:

let activeUsers = 0;

for (const user of users) {

    if (user.active) {
        activeUsers++;
    }

}

console.log(activeUsers);


Output:

3


---------------------------------------------------------


Q38.

Print only products whose price is greater than 1000.


const products = [

    { name: "Mouse", price: 500 },

    { name: "Keyboard", price: 1500 },

    { name: "Monitor", price: 10000 }

];


ANSWER:

for (const product of products) {

    if (product.price > 1000) {
        console.log(product.name);
    }

}


Output:

Keyboard
Monitor


---------------------------------------------------------


Q39.

What is the difference between break and continue?


ANSWER:


break

↓

Stops the COMPLETE loop.


continue

↓

Skips only the CURRENT iteration.


Example:

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}


Output:

1
2
4
5


=========================================================
MOST IMPORTANT CONCEPTS TO MASTER
=========================================================


1. for loop

Understand:

for (initialization; condition; update)


---------------------------------------------------------


2. Array iteration

Understand:

array[i]


and:

array.length


---------------------------------------------------------


3. while

Understand that the variable controlling
the loop must eventually change.


---------------------------------------------------------


4. do...while

Remember:

Runs at least once.


---------------------------------------------------------


5. for...of

Gives:

VALUES


Example:

for (const item of items)


---------------------------------------------------------


6. for...in

Gives:

KEYS


Example:

for (const key in object)


---------------------------------------------------------


7. break

Stops the loop.


---------------------------------------------------------


8. continue

Skips one iteration.


---------------------------------------------------------


9. Nested loops

Inner loop completes for every iteration
of the outer loop.


---------------------------------------------------------


10. Industry pattern

The most common pattern you will see is:


for (const item of items) {

    if (someCondition) {
        continue;
    }

    // Process item

}


=========================================================
AFTER YOU CAN SOLVE THESE QUESTIONS COMFORTABLY
=========================================================

Your understanding of JavaScript loops will be strong.

The next important topic should be:

ARRAYS

Then learn:

1. push()
2. pop()
3. shift()
4. unshift()
5. slice()
6. splice()
7. map()
8. filter()
9. find()
10. reduce()
11. some()
12. every()

These array methods are used constantly in
JavaScript, React, Node.js, Express.js, and
MERN applications.
=========================================================
*/
