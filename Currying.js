/*
╔══════════════════════════════════════════════════════════════════════╗
║                     CURRYING IN JAVASCRIPT                         ║
╚══════════════════════════════════════════════════════════════════════╝


1. WHAT IS CURRYING?

Currying means converting a function that takes multiple arguments:

    function add(a, b, c) {
        return a + b + c;
    }

into a sequence of functions where each function takes one argument:

    function add(a) {
        return function(b) {
            return function(c) {
                return a + b + c;
            };
        };
    }


Instead of:

    add(10, 20, 30)

we use:

    add(10)(20)(30)


The main idea is:

    Multiple arguments
           ↓
    One argument at a time
           ↓
    Returning another function


MENTAL MODEL:

    f(a, b, c)

becomes:

    f(a)(b)(c)



2. SIMPLE EXAMPLE

    function add(a) {
        return function(b) {
            return function(c) {
                return a + b + c;
            };
        };
    }

    console.log(add(10)(20)(30));

Output:

    60


Let's understand what happens:

    add(10)

returns:

    function(b) {
        return function(c) {
            return 10 + b + c;
        };
    }


Then:

    add(10)(20)

returns:

    function(c) {
        return 10 + 20 + c;
    }


Then:

    add(10)(20)(30)

returns:

    10 + 20 + 30

    = 60



3. WHY DOES CURRYING WORK?

Currying works because of:

    CLOSURES


The inner functions remember variables from their outer functions.

Example:

    function add(a) {
        return function(b) {
            return function(c) {
                return a + b + c;
            };
        };
    }


When we call:

    add(10)

the inner function remembers:

    a = 10


Then:

    add(10)(20)

the next function remembers:

    a = 10
    b = 20


Finally:

    add(10)(20)(30)

has access to:

    a = 10
    b = 20
    c = 30


So:

    CURRYING
         +
    CLOSURES

work together very often.



4. CURRYING VS NORMAL FUNCTION

Normal function:

    function multiply(a, b, c) {
        return a * b * c;
    }

    multiply(2, 3, 4);


Curried function:

    function multiply(a) {
        return function(b) {
            return function(c) {
                return a * b * c;
            };
        };
    }

    multiply(2)(3)(4);


Both produce:

    24


The difference is how arguments are supplied.



5. IMPORTANT: CURRYING IS NOT JUST "CALLING FUNCTIONS MULTIPLE TIMES"

This is NOT necessarily currying:

    greet();
    greet();
    greet();


Currying specifically means:

    A function receives one argument
    and returns another function
    that receives the next argument.


Pattern:

    function(a) {
        return function(b) {
            return ...
        };
    }



6. REAL INDUSTRY USE CASE #1
   CONFIGURABLE FUNCTIONS

Imagine an e-commerce application.

You want to calculate prices with:

    tax
    discount
    final price


Instead of repeatedly passing the same tax:

    calculatePrice(1000, 18, 10)
    calculatePrice(2000, 18, 10)
    calculatePrice(500, 18, 10)


You can create a reusable function:

    function calculatePrice(taxRate) {

        return function(discount) {

            return function(price) {

                const tax = price * taxRate / 100;

                const discountedPrice =
                    price - (price * discount / 100);

                return discountedPrice + tax;
            };
        };
    }


Now:

    const calculateProductPrice = calculatePrice(18);

The function remembers:

    taxRate = 18


Then:

    const calculateFinalPrice =
        calculateProductPrice(10);


Now it remembers:

    taxRate = 18
    discount = 10


Finally:

    console.log(calculateFinalPrice(1000));


This is useful when some configuration remains the same
for many operations.



7. REAL INDUSTRY USE CASE #2
   EXPRESS / NODE.JS MIDDLEWARE

This is especially relevant for MERN developers.

Suppose your application has different roles:

    admin
    manager
    employee


You could create a reusable authorization function:

    function requireRole(requiredRole) {

        return function(req, res, next) {

            if (req.user.role !== requiredRole) {
                return res.status(403).json({
                    message: "Access denied"
                });
            }

            next();
        };
    }


Now:

    router.get(
        "/admin",
        requireRole("admin"),
        getAdminData
    );


And:

    router.get(
        "/manager",
        requireRole("manager"),
        getManagerData
    );


Here:

    requireRole("admin")

creates a specialized middleware.

The returned function remembers:

    requiredRole = "admin"


This is closely related to:

    Currying
    +
    Closures
    +
    Higher-Order Functions



8. REAL INDUSTRY USE CASE #3
   LOGGING

Imagine you want different loggers:

    user logger
    payment logger
    database logger


You could create:

    function createLogger(moduleName) {

        return function(message) {

            console.log(
                `[${moduleName}] ${message}`
            );
        };
    }


Now:

    const userLogger = createLogger("USER");

    const paymentLogger = createLogger("PAYMENT");


Then:

    userLogger("User logged in");

    paymentLogger("Payment successful");


Output:

    [USER] User logged in
    [PAYMENT] Payment successful


Again, the returned function remembers:

    moduleName



9. CURRYING AND PARTIAL APPLICATION

These two concepts are related but NOT exactly the same.

CURRYING:

    Converts:

        f(a, b, c)

    into:

        f(a)(b)(c)


PARTIAL APPLICATION:

    Supplies some arguments now
    and receives the remaining arguments later.


Example:

    function multiply(a, b, c) {
        return a * b * c;
    }


Partial application:

    function multiplyByTwo(b, c) {
        return multiply(2, b, c);
    }


Now:

    multiplyByTwo(3, 4);

    // 24


Here we fixed:

    a = 2


Important interview distinction:

    Currying
    → one argument at a time


    Partial application
    → pre-filling some arguments



10. CURRYING WITH ARROW FUNCTIONS

Normal syntax:

    function add(a) {
        return function(b) {
            return function(c) {
                return a + b + c;
            };
        };
    }


Arrow syntax:

    const add =
        a =>
        b =>
        c =>
        a + b + c;


Usage:

    add(10)(20)(30);


Output:

    60


This syntax is common in functional JavaScript.



11. A VERY IMPORTANT INDUSTRY PATTERN

Suppose you have:

    function hasPermission(role, permission) {
        return rolePermissions[role]?.includes(permission);
    }


You repeatedly check permissions for an admin.

Instead, you can create a specialized function:

    function checkPermission(role) {

        return function(permission) {

            return rolePermissions[role]?.includes(permission);
        };
    }


Now:

    const adminPermission =
        checkPermission("admin");


Then:

    adminPermission("delete_user");

    adminPermission("create_user");

    adminPermission("update_user");


The role is already remembered.

This can make repeated business logic cleaner.



12. CURRYING WITH ARRAY METHODS

Currying is also useful when creating reusable functions
for map/filter/reduce.

Example:

    function greaterThan(limit) {

        return function(number) {
            return number > limit;
        };
    }


Now:

    const greaterThan100 =
        greaterThan(100);


Use it:

    const numbers = [50, 120, 200, 80, 300];

    const result =
        numbers.filter(greaterThan100);


Output:

    [120, 200, 300]


This is useful because:

    greaterThan(100)

creates a reusable condition.



13. CURRYING + HOF

Remember:

    HOF = Higher-Order Function

A function is a HOF if it:

    1. accepts another function
       OR
    2. returns another function


Curried functions usually return functions.

Example:

    function greaterThan(limit) {

        return function(number) {
            return number > limit;
        };
    }


Here:

    greaterThan()

returns a function.

Therefore:

    greaterThan()

is a Higher-Order Function.


This is one reason currying and HOF concepts often appear together.



14. CURRYING + CLOSURE

This is extremely important.

Example:

    function multiplyBy(x) {

        return function(number) {
            return number * x;
        };
    }


Create:

    const multiplyBy10 = multiplyBy(10);


Now:

    multiplyBy10(5);

    // 50


Why does the returned function know:

    x = 10

?


Because of a closure.

So remember:

    Currying
        ↓
    creates functions step-by-step

    Closure
        ↓
    allows returned functions to remember
    outer variables



15. CURRYING IN REACT

You may sometimes see curried event handlers.

For example:

    function handleChange(field) {

        return function(event) {

            setFormData(prev => ({
                ...prev,
                [field]: event.target.value
            }));
        };
    }


Then:

    <input
        onChange={handleChange("email")}
    />

    <input
        onChange={handleChange("password")}
    />


Here:

    handleChange("email")

creates a function that remembers:

    field = "email"


Then React calls that returned function when
the input changes.


However, in modern React code, you should not force currying
everywhere.

Use it when it actually makes reusable logic clearer.



16. CURRYING IN FUNCTIONAL PROGRAMMING

Currying is strongly associated with:

    Functional Programming


The idea is to create small reusable functions.

For example:

    const greaterThan10 = greaterThan(10);

    const greaterThan100 = greaterThan(100);


Instead of writing:

    number > 10

everywhere,

you create reusable behavior.



17. GENERIC CURRY FUNCTION

You can even create a utility that curries functions.

Example:

    function curry(fn) {

        return function curried(...args) {

            if (args.length >= fn.length) {
                return fn(...args);
            }

            return function(...nextArgs) {
                return curried(
                    ...args,
                    ...nextArgs
                );
            };
        };
    }


Suppose:

    function add(a, b, c) {
        return a + b + c;
    }


Create:

    const curriedAdd = curry(add);


Now:

    curriedAdd(10)(20)(30);

    // 60


You can also do:

    curriedAdd(10, 20)(30);

or:

    curriedAdd(10)(20, 30);


This is a more advanced concept.

For normal MERN development, you should understand the concept,
but you usually do NOT need to write a generic curry utility
every day.



18. CURRYING WITH MULTIPLE ARGUMENTS

Important:

Currying does not always mean the function must literally
receive exactly one argument in every implementation.

The core idea is transforming a multi-argument function into
a chain of function calls.

For example:

    function add(a) {
        return function(b, c) {
            return a + b + c;
        };
    }


Usage:

    add(10)(20, 30);


But the classic definition you will see in interviews is:

    f(a, b, c)

        →

    f(a)(b)(c)



19. CURRYING DOES NOT ALWAYS MAKE CODE BETTER

Do NOT curry everything.

Bad:

    calculate()(product)()(price)()(...)


This can make code:

    harder to read
    harder to debug
    harder to maintain


Use currying when it provides a real benefit:

    reusable configuration
    reusable business logic
    middleware factories
    function composition
    functional programming
    creating specialized functions



20. COMMON MISTAKE

This:

    function add(a) {
        return function(b) {
            return a + b;
        };
    }


Correct:

    add(10)(20);


Incorrect:

    add(10, 20);


Why?

Because:

    add()

only accepts the first argument.

It returns another function.

You must call that returned function.



21. COMMON MISTAKE: FORGETTING TO CALL THE NEXT FUNCTION

    const result = add(10);

What is result?

NOT:

    10


It is:

    a function


Because:

    add(10)

returns:

    function(b) {
        return 10 + b;
    }


Therefore:

    result(20)

gives:

    30



22. CURRYING VS CLOSURE VS HOF

These three concepts are related but different.

CLOSURE:

    A function remembers variables
    from its surrounding scope.


HOF:

    A function accepts or returns another function.


CURRYING:

    A multi-argument function is transformed
    into a sequence of function calls.


Example:

    function multiplyBy(x) {

        return function(number) {
            return x * number;
        };
    }


Here:

    Closure
        →
    remembers x


    HOF
        →
    multiplyBy returns a function


    Currying-like pattern
        →
    arguments are supplied through chained calls



23. REAL MERN EXAMPLE

Imagine your backend has:

    requireRole("admin")


You want:

    GET /admin/users
    GET /admin/reports
    DELETE /admin/users/:id


You can create:

    function requireRole(role) {

        return function(req, res, next) {

            if (!req.user) {
                return res.status(401).json({
                    message: "Not authenticated"
                });
            }

            if (req.user.role !== role) {
                return res.status(403).json({
                    message: "Forbidden"
                });
            }

            next();
        };
    }


Then:

    router.get(
        "/admin/users",
        requireRole("admin"),
        getUsers
    );


    router.get(
        "/admin/reports",
        requireRole("admin"),
        getReports
    );


This gives you reusable authorization behavior.

The important concept is:

    requireRole("admin")
             ↓
    returns middleware
             ↓
    middleware remembers "admin"



24. WHERE YOU MAY SEE CURRYING IN MERN

Frontend:

    React event handlers
    reusable filters
    reusable validation functions
    utility functions
    functional programming patterns


Backend:

    Express middleware factories
    authorization
    logging
    configuration
    reusable business rules
    validation


General JavaScript:

    HOFs
    closures
    callbacks
    function composition
    functional programming



25. INTERVIEW QUESTION

Q1. What is currying?

Answer:

Currying is the technique of transforming a function that
takes multiple arguments into a sequence of functions where
arguments are supplied one at a time.


Example:

    add(a, b, c)

becomes:

    add(a)(b)(c)



Q2. Why does currying work well with closures?

Answer:

Because each returned function can remember arguments from
the previous function calls through lexical scope and closures.



Q3. What is the difference between currying and partial
application?

Answer:

Currying transforms:

    f(a, b, c)

into:

    f(a)(b)(c)


Partial application pre-fills some arguments and returns
a function for the remaining arguments.



Q4. Is every function that returns another function curried?

Answer:

No.

A function returning another function is a Higher-Order
Function, but currying specifically refers to transforming
a multi-argument function into a sequence of function calls.



Q5. What concept makes variables available to returned
functions?

Answer:

Closures.



Q6. What does this return?

    function add(a) {
        return function(b) {
            return a + b;
        };
    }

    const result = add(10);


Answer:

    result

is a function.

It remembers:

    a = 10



Q7. What is the output?

    function add(a) {
        return function(b) {
            return a + b;
        };
    }

    console.log(add(5)(10));


Answer:

    15



Q8. What is the output?

    function multiply(a) {
        return function(b) {
            return a * b;
        };
    }

    const double = multiply(2);

    console.log(double(10));
    console.log(double(20));


Answer:

    20
    40


The returned function remembers:

    a = 2



Q9. Why can currying be useful in Express?

Answer:

It can create configurable middleware.

Example:

    requireRole("admin")

can return middleware that checks whether the current user
has the admin role.



Q10. Is currying mandatory in MERN development?

Answer:

No.

You should understand it because it is an important JavaScript
and functional programming concept.

But you should use it only when it improves:

    reusability
    configuration
    readability
    composition



26. PRACTICE QUESTIONS

Try these yourself before looking at the answers.


Question 1:

Convert this into a curried function:

    function add(a, b) {
        return a + b;
    }


Answer:

    function add(a) {
        return function(b) {
            return a + b;
        };
    }


Usage:

    add(10)(20);



Question 2:

Create:

    multiply(5)(4)

which should return:

    20


Answer:

    function multiply(a) {
        return function(b) {
            return a * b;
        };
    }



Question 3:

Create:

    greet("Navneet")("Good morning")

which should return:

    "Good morning, Navneet"


Answer:

    function greet(name) {
        return function(message) {
            return `${message}, ${name}`;
        };
    }



Question 4:

What is the output?

    function add(a) {
        return function(b) {
            return function(c) {
                return a + b + c;
            };
        };
    }

    console.log(add(1)(2)(3));


Answer:

    6



Question 5:

What does this function remember?

    function multiplyBy(x) {
        return function(number) {
            return number * x;
        };
    }

    const multiplyBy10 = multiplyBy(10);


Answer:

It remembers:

    x = 10


because of closure.



Question 6:

Create a function:

    greaterThan(50)

that can be used like:

    const check = greaterThan(50);

    check(100);  // true
    check(20);   // false


Answer:

    function greaterThan(limit) {
        return function(number) {
            return number > limit;
        };
    }



Question 7:

Why does this work?

    const check = greaterThan(100);

    [50, 150, 200].filter(check);


Answer:

Because:

    greaterThan(100)

returns a function.

That returned function is passed to:

    filter()

So this combines:

    Currying-like function creation
    +
    Closure
    +
    Higher-Order Function



Question 8:

What will this print?

    function counter(start) {

        return function() {
            start++;
            return start;
        };
    }

    const count = counter(10);

    console.log(count());
    console.log(count());
    console.log(count());


Answer:

    11
    12
    13


The returned function remembers and modifies:

    start



27. THE MOST IMPORTANT THING TO REMEMBER

Do not try to memorize complicated definitions.

Remember this:

    NORMAL:

    add(10, 20, 30)


    CURRIED:

    add(10)(20)(30)


The function is broken into steps:

    first argument
          ↓
    returns function
          ↓
    second argument
          ↓
    returns function
          ↓
    third argument
          ↓
    final result



28. MERN DEVELOPER MENTAL MODEL

You should connect these concepts:

    CLOSURE
       ↓
    remembers outer variables


    HOF
       ↓
    accepts or returns functions


    CURRYING
       ↓
    supplies function arguments step-by-step


    EXPRESS
       ↓
    middleware factories


    REACT
       ↓
    reusable handlers / configuration


    JAVASCRIPT
       ↓
    functional programming + reusable utilities



FINAL CHEAT SHEET

    Currying
        =
    f(a, b, c) → f(a)(b)(c)


    Main benefit:
        Reusable and specialized functions


    Main concept behind it:
        Closures


    Closely related:
        Higher-Order Functions


    Different from:
        Partial Application


    MERN use cases:
        Express middleware factories
        authorization
        logging
        reusable validation
        configurable utilities
        React handlers
        functional programming


INTERVIEW ONE-LINER:

    "Currying is the process of transforming a function that
    takes multiple arguments into a sequence of functions that
    each take an argument and return the next function."



FINAL MENTAL MODEL:

    MULTIPLE ARGUMENTS
            ↓
        CURRYING
            ↓
    ONE ARGUMENT AT A TIME
            ↓
    RETURN ANOTHER FUNCTION
            ↓
        CLOSURE
            ↓
    REMEMBER PREVIOUS VALUES
            ↓
    CREATE REUSABLE FUNCTIONS
*/