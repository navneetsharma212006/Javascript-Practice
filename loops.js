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