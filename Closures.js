/*
# CLOSURES IN JAVASCRIPT — DEEP MERN DEVELOPER GUIDE

============================================================
1. FIRST: WHAT IS A CLOSURE?
============================================================

A closure happens when a function remembers and can access
variables from its outer scope even after the outer function
has finished executing.

Simple definition:

    Closure =
    A function + the variables from its surrounding scope
    that the function remembers.

Example:

    function outer() {

        let message = "Hello";

        function inner() {
            console.log(message);
        }

        return inner;
    }


    const fn = outer();

    fn();


Output:

    Hello


The surprising part is:

    outer()
    
has already finished.

But:

    fn()

can still access:

    message


That is a closure.


============================================================
2. WHY DOES THIS HAPPEN?
============================================================

Let's understand the execution step by step.

Code:

    function outer() {

        let message = "Hello";

        function inner() {
            console.log(message);
        }

        return inner;
    }


    const fn = outer();


STEP 1:

outer() is called.

JavaScript creates the outer function's execution context.


Inside it:

    message = "Hello"

and:

    inner()

is created.


STEP 2:

outer() returns:

    inner


So:

    fn

now points to:

    inner


STEP 3:

Normally you might think:

    "outer() finished,
     so message should disappear."


But JavaScript knows that:

    inner()

still needs:

    message


So the function maintains access to the variables
from its lexical environment.


STEP 4:

Now:

    fn();


is called.

Inside fn():

    console.log(message);


JavaScript finds:

    message = "Hello"


Therefore:

    Hello


============================================================
3. THE MOST IMPORTANT IDEA
============================================================

DO NOT think:

    "The function copies the variable."


Instead think:

    "The function retains access to its
     surrounding lexical environment."


This distinction is important.


Example:

    function outer() {

        let count = 0;

        return function inner() {
            count++;
            console.log(count);
        };
    }


    const counter = outer();


The returned function has access to:

    count


That is closure.


============================================================
4. CLOSURE REQUIRES LEXICAL SCOPE
============================================================

Closures make sense only after understanding
lexical scope.

Example:

    let name = "Navneet";

    function greet() {

        console.log(name);

    }


    greet();


greet() can access:

    name


because name exists in its surrounding lexical scope.


Now:

    function outer() {

        let message = "Hello";

        function inner() {

            console.log(message);

        }

        return inner;
    }


inner() is lexically inside outer().

Therefore inner() has access to outer()'s variables.


============================================================
5. SIMPLEST CLOSURE EXAMPLE
============================================================

    function outer() {

        let x = 10;

        function inner() {

            console.log(x);

        }

        return inner;
    }


    const fn = outer();

    fn();


Output:

    10


Why?

    inner()
       ↓
    remembers/accesses
       ↓
    x = 10
       ↓
    from outer()


That is a closure.


============================================================
6. CLOSURE WITH CHANGING DATA
============================================================

This is where closures become powerful.

    function counter() {

        let count = 0;

        return function () {

            count++;

            console.log(count);
        };
    }


    const increment = counter();


    increment();
    increment();
    increment();


Output:

    1
    2
    3


Why?

Because the returned function continues to access
the SAME count variable.


It is not:

    0 → create new count
    0 → create new count
    0 → create new count


It is:

    count = 0

    increment()
        ↓
    count = 1

    increment()
        ↓
    count = 2

    increment()
        ↓
    count = 3


============================================================
7. THIS IS THE KEY PROPERTY OF CLOSURES
============================================================

A closure can remember and modify
variables from its outer scope.

Example:

    function counter() {

        let count = 0;

        return function () {

            count++;

            return count;
        };
    }


    const counter1 = counter();

    console.log(counter1()); // 1
    console.log(counter1()); // 2
    console.log(counter1()); // 3


The variable:

    count

is not directly accessible from outside.

You cannot do:

    console.log(count);


because count belongs to the outer function's scope.


============================================================
8. CLOSURE CREATES "PRIVATE" STATE
============================================================

This is one of the most important practical uses.

Example:

    function createBankAccount() {

        let balance = 0;

        return {

            deposit(amount) {
                balance += amount;
            },

            getBalance() {
                return balance;
            }
        };
    }


    const account = createBankAccount();


    account.deposit(500);

    console.log(account.getBalance());


Output:

    500


But:

    account.balance


is:

    undefined


The balance is private.

Only the returned functions can access it.


This is called encapsulation through closures.


============================================================
9. WHY IS PRIVATE STATE USEFUL?
============================================================

Suppose you have:

    let balance = 5000;


If anyone can directly modify it:

    balance = -100000;


your application can become inconsistent.


Instead:

    function createAccount() {

        let balance = 0;

        return {

            deposit(amount) {

                if (amount > 0) {
                    balance += amount;
                }

            },

            getBalance() {

                return balance;
            }
        };
    }


Now users cannot directly access balance.

They must use controlled functions.


============================================================
10. MULTIPLE CLOSURES HAVE SEPARATE STATE
============================================================

This is very important.

    function counter() {

        let count = 0;

        return function () {

            count++;

            return count;
        };
    }


    const counter1 = counter();

    const counter2 = counter();


    console.log(counter1()); // 1
    console.log(counter1()); // 2

    console.log(counter2()); // 1
    console.log(counter2()); // 2


Why?

Because:

    counter1

has its own closure.


And:

    counter2

has a different closure.


Think:

    counter()
       ↓
    count = 0
       ↓
    closure A


    counter()
       ↓
    count = 0
       ↓
    closure B


They do not share the same count.


============================================================
11. CLOSURE WITH PARAMETERS
============================================================

Example:

    function createGreeting(name) {

        return function () {

            console.log("Hello " + name);

        };
    }


    const greetNavneet =
        createGreeting("Navneet");


    const greetRahul =
        createGreeting("Rahul");


    greetNavneet();

    greetRahul();


Output:

    Hello Navneet
    Hello Rahul


Each returned function remembers
the parameter passed to its specific call.


============================================================
12. CLOSURE + FUNCTION FACTORY
============================================================

A function that creates other functions
is often called a function factory.

Example:

    function multiplyBy(number) {

        return function (value) {

            return value * number;
        };
    }


    const double = multiplyBy(2);

    const triple = multiplyBy(3);


    console.log(double(5)); // 10

    console.log(triple(5)); // 15


Why does double remember 2?

Because of closure.


Why does triple remember 3?

Because of another closure.


============================================================
13. CLOSURE + HOF
============================================================

Closures are closely related to
Higher-Order Functions.

Example:

    function createMultiplier(number) {

        return function (value) {

            return value * number;
        };
    }


Here:

    createMultiplier()

returns a function.

So it is a Higher-Order Function.


And the returned function remembers:

    number


So it is also a closure.


Relationship:

    HOF
      ↓
    function returns function
      ↓
    returned function remembers outer variables
      ↓
    Closure


============================================================
14. CLOSURE + CALLBACKS
============================================================

This is VERY important for JavaScript.

Example:

    function greetLater(name) {

        setTimeout(() => {

            console.log("Hello", name);

        }, 2000);
    }


    greetLater("Navneet");


The callback:

    () => {
        console.log("Hello", name);
    }


uses:

    name


from the outer function.


Even after greetLater() has returned,
the callback can access name.


That is closure.


============================================================
15. CLOSURE + setTimeout
============================================================

Example:

    function startTimer() {

        let message = "Timer finished";

        setTimeout(() => {

            console.log(message);

        }, 2000);
    }


    startTimer();


After:

    startTimer()

finishes,

the callback still has access to:

    message


because of closure.


Flow:

    startTimer()
        ↓
    message created
        ↓
    callback created
        ↓
    setTimeout registers callback
        ↓
    startTimer finishes
        ↓
    2 seconds pass
        ↓
    callback runs
        ↓
    callback accesses message
        ↓
    "Timer finished"


============================================================
16. CLOSURE + EVENT LISTENERS
============================================================

Very common in browser JavaScript.

Example:

    function setupButton(buttonId) {

        const button =
            document.querySelector(buttonId);

        let clickCount = 0;

        button.addEventListener("click", () => {

            clickCount++;

            console.log(clickCount);

        });
    }


    setupButton("#submitButton");


The event callback remembers:

    clickCount


Even though:

    setupButton()

has already finished.


Every click:

    clickCount++;

works because of closure.


============================================================
17. CLOSURE + API CALLS
============================================================

Closures can appear in API-related code too.

Example:

    function createApiClient(baseUrl) {

        return async function (endpoint) {

            const response =
                await fetch(baseUrl + endpoint);

            return response.json();
        };
    }


    const api =
        createApiClient("https://api.example.com");


    api("/users");

    api("/products");


The returned function remembers:

    baseUrl


So you don't have to repeatedly write:

    https://api.example.com


This is a practical function-factory pattern.


============================================================
18. REAL MERN USE CASE — EXPRESS MIDDLEWARE
============================================================

This is one of the most useful examples
for a MERN developer.

Suppose you want middleware that checks
whether a user has a specific role.

You can create:

    function requireRole(requiredRole) {

        return function (req, res, next) {

            if (req.user.role !== requiredRole) {

                return res.status(403).json({
                    message: "Access denied"
                });
            }

            next();
        };
    }


Then:

    router.get(
        "/admin",
        requireRole("admin"),
        getAdminData
    );


What happens?

First:

    requireRole("admin")


returns a function.

That returned function remembers:

    requiredRole = "admin"


Later Express executes the middleware.

It still knows:

    requiredRole


This is closure in a very realistic backend scenario.


============================================================
19. WHY THIS IS USEFUL IN EXPRESS
============================================================

You can create reusable middleware.

Instead of:

    adminMiddleware
    managerMiddleware
    employeeMiddleware


you can create one factory:

    requireRole(role)


Then:

    requireRole("admin")

or:

    requireRole("manager")

or:

    requireRole("employee")


The returned middleware remembers the role.


This pattern is common in backend development.


============================================================
20. REAL MERN USE CASE — RATE LIMIT CONFIGURATION
============================================================

You may create configurable middleware:

    function createRateLimiter(limit) {

        let requests = 0;

        return function (req, res, next) {

            requests++;

            if (requests > limit) {

                return res.status(429).json({
                    message: "Too many requests"
                });
            }

            next();
        };
    }


    const limiter =
        createRateLimiter(100);


The returned middleware remembers:

    limit = 100


This is a simplified example.

Real production rate limiting normally needs
more sophisticated tracking, often using Redis
or another shared store when running multiple servers.

But the closure concept is the same.


============================================================
21. CLOSURE + REACT
============================================================

Closures are extremely important in React.

React functions naturally create closures.

Example:

    function Counter() {

        const [count, setCount] =
            useState(0);

        function handleClick() {

            console.log(count);

        }

        return (
            <button onClick={handleClick}>
                Click
            </button>
        );
    }


handleClick() can access:

    count


because it closes over the variables
from the component's render scope.


============================================================
22. REACT EVENT HANDLER CLOSURE
============================================================

Example:

    function Product({ product }) {

        const handleBuy = () => {

            console.log(product.id);

        };

        return (
            <button onClick={handleBuy}>
                Buy
            </button>
        );
    }


handleBuy remembers:

    product


This is closure.


You don't manually create a closure using
some special "closure" keyword.

JavaScript creates this relationship naturally.


============================================================
23. VERY IMPORTANT REACT CONCEPT:
# STALE CLOSURE
============================================================

This is something every React developer should understand.

Consider:

    function Counter() {

        const [count, setCount] =
            useState(0);

        function handleClick() {

            setTimeout(() => {

                console.log(count);

            }, 3000);
        }

        return (
            <button onClick={handleClick}>
                Show Count
            </button>
        );
    }


Suppose:

    count = 0

when the button is clicked.


The callback closes over that render's:

    count


If the state changes before 3 seconds pass,
the callback does not magically change the
value it already closed over.

This can produce a:

    stale closure


The callback sees the value from the render
in which it was created.


============================================================
24. WHY STALE CLOSURES HAPPEN
============================================================

React function components work with renders.

Imagine:

    Render 1:

    count = 0

    ↓

    handleClick created
    ↓
    callback closes over count = 0


Then:

    Render 2:

    count = 1


A new version of the function is created
for the new render.

The old callback still belongs to the old render.


Think:

    Render 1
       ↓
    count = 0
       ↓
    closure A


    Render 2
       ↓
    count = 1
       ↓
    closure B


Closure A does not automatically become closure B.


============================================================
25. HOW TO HANDLE STALE STATE
============================================================

If you need the latest state while updating
based on previous state, use the functional
state update.

Instead of:

    setCount(count + 1);


you can use:

    setCount(prevCount => prevCount + 1);


This is especially important when multiple
updates depend on the previous state.


Example:

    setCount(prev => prev + 1);

    setCount(prev => prev + 1);

    setCount(prev => prev + 1);


This correctly expresses:

    previous value
        ↓
    +1
        ↓
    next value


You should understand this connection between
closures and React state.


============================================================
26. CLOSURE + LOOPS
============================================================

This is a famous interview question.

Consider:

    for (var i = 0; i < 3; i++) {

        setTimeout(() => {

            console.log(i);

        }, 1000);
    }


Many beginners expect:

    0
    1
    2


But the output is:

    3
    3
    3


Why?

Because var is function-scoped.

All callbacks close over the same i.

By the time callbacks execute:

    i = 3


So they all read:

    3


============================================================
27. let FIXES THE COMMON LOOP CASE
============================================================

Now:

    for (let i = 0; i < 3; i++) {

        setTimeout(() => {

            console.log(i);

        }, 1000);
    }


Output:

    0
    1
    2


Why?

Because let is block-scoped.

Each loop iteration gets its own
iteration binding for i.

So conceptually:

    iteration 1
        i = 0
        ↓
        callback closes over 0


    iteration 2
        i = 1
        ↓
        callback closes over 1


    iteration 3
        i = 2
        ↓
        callback closes over 2


This is a very common closure interview question.


============================================================
28. CLOSURE + PRIVATE VARIABLES
============================================================

Another practical pattern:

    function createUser() {

        let password = "secret123";

        return {

            login(input) {

                return input === password;
            }

        };
    }


    const user = createUser();


    console.log(
        user.login("secret123")
    );


Output:

    true


But:

    console.log(user.password);


gives:

    undefined


The password variable is not exposed
through the returned object.


IMPORTANT:

This is conceptual encapsulation,
NOT a secure replacement for proper password
storage.

Never store real passwords in plaintext.


============================================================
29. CLOSURE DOES NOT MEAN "COPY"
============================================================

This is a very important interview concept.

Example:

    function outer() {

        let count = 0;

        return function () {

            count++;

            return count;
        };
    }


    const fn = outer();


The function doesn't simply copy:

    count = 0


into itself.

It maintains access to the surrounding
lexical environment containing count.


Therefore changes persist:

    fn() → 1
    fn() → 2
    fn() → 3


============================================================
30. WHEN DOES THE OUTER VARIABLE DISAPPEAR?
============================================================

Normally, JavaScript can garbage-collect data
when it is no longer reachable.

But if a returned function still references
an outer variable, that environment may remain
reachable.

Example:

    function outer() {

        let largeData = "...";

        return function () {

            console.log(largeData);

        };
    }


    const fn = outer();


As long as fn can access largeData,
the required environment may remain alive.


When:

    fn = null;


and nothing else references the relevant data,
the engine can eventually garbage-collect it.


You don't manually free memory in normal JavaScript.


============================================================
31. CLOSURE AND MEMORY
============================================================

Closures are useful, but don't create unnecessary
long-lived references to huge objects.

For example:

    function createSomething() {

        const hugeData = veryLargeObject;

        return function () {

            console.log("Hello");

        };
    }


If the returned function does not actually need
hugeData, avoid unnecessarily capturing it.


In long-lived applications, unnecessary references
can contribute to memory usage.


For most beginner applications:

    Understand the concept.

Do not obsess over memory optimization yet.


============================================================
32. CLOSURE + MODULES
============================================================

Modern JavaScript modules also provide strong
encapsulation.

Example:

    // counter.js

    let count = 0;

    export function increment() {
        count++;
    }

    export function getCount() {
        return count;
    }


Another file can use:

    import {
        increment,
        getCount
    } from "./counter.js";


But it cannot directly access:

    count


Modules provide a broader encapsulation mechanism,
while closures are the underlying JavaScript concept
you should understand separately.


============================================================
33. CLOSURE + DEBOUNCING
============================================================

This is a VERY useful real-world frontend example.

Suppose a user types:

    i
    ip
    iph
    ipho
    iphone


You don't want to send an API request for every
single keystroke.

You can create a debounce function:

    function debounce(callback, delay) {

        let timer;

        return function (...args) {

            clearTimeout(timer);

            timer = setTimeout(() => {

                callback(...args);

            }, delay);
        };
    }


Use:

    const searchProducts = debounce(
        (query) => {

            console.log("API call:", query);

        },
        500
    );


Now:

    searchProducts("i");
    searchProducts("ip");
    searchProducts("iph");
    searchProducts("ipho");
    searchProducts("iphone");


The returned function remembers:

    timer


That is closure.


After the user stops typing for 500ms,
the API call runs.


Real use cases:

    Search boxes
    Autocomplete
    API optimization
    Resize handlers
    Input validation


============================================================
34. DEBOUNCE MENTAL MODEL
============================================================

    User types
       ↓
    searchProducts()
       ↓
    clear previous timer
       ↓
    create new timer
       ↓
    user types again
       ↓
    clear previous timer
       ↓
    create new timer
       ↓
    user stops typing
       ↓
    timer finishes
       ↓
    API call


The function remembers:

    timer


because of closure.


============================================================
35. CLOSURE + THROTTLING
============================================================

Throttle is another related pattern.

Idea:

    "Run at most once during a specified interval."


Useful for:

    scroll events
    resize events
    mouse movement
    frequent UI events


A throttle implementation can also use
a closure to remember:

    last execution time
    timer state


You don't need to memorize the implementation
yet.

Understand why closure is useful:

    closure
       ↓
    remember state
       ↓
    control repeated function execution


============================================================
36. CLOSURE + CONFIGURATION
============================================================

Example:

    function createLogger(prefix) {

        return function (message) {

            console.log(
                `[${prefix}] ${message}`
            );
        };
    }


    const apiLogger =
        createLogger("API");


    const dbLogger =
        createLogger("DB");


    apiLogger("Request received");

    dbLogger("Database connected");


Output:

    [API] Request received

    [DB] Database connected


Each function remembers its own prefix.


============================================================
37. CLOSURE + CURRYING
============================================================

Closures are also involved in currying.

Example:

    function multiply(a) {

        return function (b) {

            return a * b;
        };
    }


    const multiplyBy10 =
        multiply(10);


    console.log(
        multiplyBy10(5)
    );


Output:

    50


The returned function remembers:

    a = 10


This is another example of:

    function returning function
        +
    remembered outer variable
        =
    closure


You don't need advanced functional programming
to use closures effectively in MERN.


============================================================
38. CLOSURE VS SCOPE
============================================================

These are NOT the same thing.

SCOPE:

    Determines where a variable can be accessed.


CLOSURE:

    Happens when a function retains access to
    variables from its surrounding lexical scope.


Example:

    function outer() {

        let x = 10;

        function inner() {

            console.log(x);

        }

        return inner;
    }


Scope explains:

    inner can access x.


Closure explains:

    inner continues to access x even after
    outer() has finished.


============================================================
39. CLOSURE VS HOISTING
============================================================

They are completely different concepts.

Hoisting:

    JavaScript's handling of declarations during
    execution-context creation.


Closure:

    A function retaining access to its
    lexical environment.


Do not mix them.


============================================================
40. CLOSURE VS CALLBACK
============================================================

Callback:

    A function passed to another function
    to be called later or by that function.


Closure:

    A function that retains access to variables
    from its surrounding lexical scope.


They can happen together.

Example:

    function greet(name) {

        setTimeout(() => {

            console.log(name);

        }, 1000);
    }


Here:

    setTimeout callback
        =
    callback


And:

    callback remembers name
        =
    closure


============================================================
41. CLOSURE VS HOF
============================================================

HOF:

    Function that accepts a function
    or returns a function.


Closure:

    Function retains access to surrounding
    lexical variables.


Example:

    function createMultiplier(x) {

        return function (y) {

            return x * y;

        };
    }


This is:

    HOF
    +
    Closure


============================================================
42. REAL MERN USE CASES YOU SHOULD REMEMBER
============================================================

As a MERN developer, closures commonly appear in:

    1. React event handlers

    2. React state/update logic

    3. useEffect callbacks

    4. setTimeout / setInterval

    5. Event listeners

    6. Express middleware factories

    7. Authentication/authorization middleware

    8. Debouncing search requests

    9. Throttling frequent events

    10. Function factories

    11. Private state

    12. Configuration functions

    13. Callbacks

    14. Promise callbacks

    15. Module/encapsulation patterns


You do NOT need to force closures into every piece
of code.

Just recognize when a function is remembering
variables from its surrounding scope.


============================================================
43. MOST IMPORTANT INTERVIEW EXAMPLE
============================================================

    function counter() {

        let count = 0;

        return function () {

            return ++count;

        };
    }


    const c1 = counter();

    console.log(c1()); // 1
    console.log(c1()); // 2

    const c2 = counter();

    console.log(c2()); // 1


QUESTION:

Why does c1 continue from 2?

ANSWER:

Because c1's function has a closure over the
count variable created by its specific counter()
call.


QUESTION:

Why does c2 start from 1?

ANSWER:

Because c2 was created by a separate call to
counter(), which created a separate lexical environment.


============================================================
44. INTERVIEW QUESTION:
# LOOP + CLOSURE
============================================================

What is the output?

    for (var i = 0; i < 3; i++) {

        setTimeout(() => {
            console.log(i);
        }, 1000);

    }


ANSWER:

    3
    3
    3


WHY?

All callbacks close over the same function-scoped
variable i.

When they execute, the loop has already completed:

    i = 3


------------------------------------------------------------

Now:

    for (let i = 0; i < 3; i++) {

        setTimeout(() => {
            console.log(i);
        }, 1000);

    }


ANSWER:

    0
    1
    2


Because each iteration gets its own block-scoped
binding for i.


============================================================
45. INTERVIEW QUESTIONS
============================================================

Q1. What is a closure?

ANSWER:

A closure is created when a function retains access
to variables from its surrounding lexical environment,
even after the outer function has finished executing.


------------------------------------------------------------

Q2. Why do closures exist?

ANSWER:

Because JavaScript functions retain access to their
lexical environment.


------------------------------------------------------------

Q3. Does a closure copy variables?

ANSWER:

No.

The function retains access to the relevant
lexical environment.


------------------------------------------------------------

Q4. Can a closure modify an outer variable?

ANSWER:

Yes, if the variable is mutable.

Example:

    let count = 0;

    return function () {
        count++;
    };


------------------------------------------------------------

Q5. What is a practical use of closures?

ANSWER:

Private state, callbacks, event handlers, debouncing,
function factories, React handlers, and Express middleware.


------------------------------------------------------------

Q6. How do closures provide private state?

ANSWER:

Variables declared inside an outer function are not
directly accessible from outside, but returned inner
functions can access them.


------------------------------------------------------------

Q7. What is a function factory?

ANSWER:

A function that creates and returns another function.


------------------------------------------------------------

Q8. Why is the returned function in a function factory
often a closure?

ANSWER:

Because it can remember values from the outer function.


------------------------------------------------------------

Q9. What is a stale closure?

ANSWER:

A situation, especially common in React, where a callback
uses values captured from an older render rather than
the latest state.


------------------------------------------------------------

Q10. Why does var produce 3,3,3 in the common
setTimeout loop example?

ANSWER:

All callbacks close over the same function-scoped i,
which becomes 3 before the callbacks execute.


------------------------------------------------------------

Q11. Why does let produce 0,1,2?

ANSWER:

Each loop iteration gets its own block-scoped binding.


------------------------------------------------------------

Q12. Can closures cause memory issues?

ANSWER:

They can keep referenced data alive as long as the closure
remains reachable, so unnecessary long-lived references
should be avoided.


------------------------------------------------------------

Q13. Is every callback a closure?

ANSWER:

Not necessarily in the useful sense.

A callback is defined by how it is passed/called.

It becomes a closure when it retains access to surrounding
lexical variables.


------------------------------------------------------------

Q14. Is every HOF a closure?

ANSWER:

No.

A higher-order function is about accepting/returning
functions.

A closure is about retaining access to lexical scope.

They often appear together.


------------------------------------------------------------

Q15. Can closures access global variables?

ANSWER:

A function can access variables in outer scopes,
including globals.

But the important closure concept usually focuses on
retaining access to surrounding lexical environments.


============================================================
46. PRACTICE QUESTIONS
============================================================

Try these yourself before reading the answer.


Q16. What is the output?

    function outer() {

        let x = 10;

        return function () {

            console.log(x);

        };
    }


    const fn = outer();

    fn();


ANSWER:

    10


Why?

The returned function closes over x.


------------------------------------------------------------

Q17. What is the output?

    function counter() {

        let count = 0;

        return function () {

            count++;

            return count;
        };
    }


    const c = counter();

    console.log(c());
    console.log(c());
    console.log(c());


ANSWER:

    1
    2
    3


------------------------------------------------------------

Q18. What is the output?

    function counter() {

        let count = 0;

        return () => ++count;
    }


    const a = counter();

    const b = counter();


    console.log(a());
    console.log(a());
    console.log(b());


ANSWER:

    1
    2
    1


Because a and b have separate closures.


------------------------------------------------------------

Q19. What is the output?

    function greet(name) {

        return function () {

            console.log("Hello " + name);

        };
    }


    const fn = greet("Navneet");

    fn();


ANSWER:

    Hello Navneet


------------------------------------------------------------

Q20. Find the closure variable:

    function createMultiplier(x) {

        return function (y) {

            return x * y;

        };
    }


ANSWER:

    x


The returned function remembers x.


------------------------------------------------------------

Q21. What is wrong with this assumption?

    "outer() finished, therefore inner() cannot
     access outer variables."


ANSWER:

That is incorrect.

If inner() is returned/referenced and closes over
outer variables, those variables remain accessible
through the closure.


------------------------------------------------------------

Q22. Why is this useful?

    function createLogger(prefix) {

        return function(message) {

            console.log(prefix, message);

        };
    }


ANSWER:

The returned logger remembers prefix.

You can create specialized loggers without repeatedly
passing the prefix.


------------------------------------------------------------

Q23. Identify the closure in:

    function search(delay) {

        let timer;

        return function(query) {

            clearTimeout(timer);

            timer = setTimeout(() => {
                console.log(query);
            }, delay);

        };
    }


ANSWER:

The returned function closes over:

    timer
    delay


And the setTimeout callback also closes over:

    query


============================================================
47. FINAL MENTAL MODEL
============================================================

When you see:

    function outer() {

        let x = 10;

        return function inner() {

            console.log(x);

        };
    }


Think:

        outer()
          |
          | creates
          ↓
        x = 10
          |
          | creates
          ↓
        inner()
          |
          | remembers
          ↓
        x = 10
          |
          | outer finishes
          ↓
        inner still works
          |
          ↓
        Closure


The formula:

    INNER FUNCTION
          +
    OUTER VARIABLES
          +
    ACCESS RETAINED
          =
       CLOSURE


============================================================
48. CLOSURE IN MERN — BIG PICTURE
============================================================

                JAVASCRIPT CLOSURES
                        |
        ┌───────────────┼────────────────┐
        ↓               ↓                ↓
      React          Express          Browser
        ↓               ↓                ↓
  Event handlers    Middleware       Event listeners
  useEffect         factories        setTimeout
  state logic       auth logic       debounce
        ↓               ↓                ↓
        └───────────────┼────────────────┘
                        ↓
              Remember outer variables


Examples:

React:

    handleClick → remembers state/props


Express:

    requireRole("admin")
        ↓
    middleware remembers "admin"


Frontend:

    debounce()
        ↓
    returned function remembers timer


JavaScript:

    counter()
        ↓
    returned function remembers count


============================================================
49. WHAT YOU ACTUALLY NEED TO MASTER
============================================================

Do NOT try to memorize every closure trick.

For MERN development, master these:

    ✓ Lexical scope

    ✓ Inner function accessing outer variables

    ✓ Function returning function

    ✓ Outer function finishing but inner function
      still accessing its variables

    ✓ Closure can retain state

    ✓ Multiple function calls create separate closures

    ✓ Private state

    ✓ Closures with callbacks

    ✓ Closures with setTimeout

    ✓ Closures with event listeners

    ✓ Closures in React

    ✓ Stale closures in React

    ✓ Closures in Express middleware factories

    ✓ Debouncing

    ✓ var vs let loop closure problem

    ✓ Closure vs callback

    ✓ Closure vs HOF

    ✓ Basic memory implications


You do NOT need to memorize complicated closure
implementations before building real applications.


============================================================
ONE-LINE DEFINITION FOR INTERVIEWS
============================================================

"A closure is a function together with access to its
surrounding lexical environment, allowing it to retain
and use outer-scope variables even after the outer
function has finished executing."


============================================================
FINAL MEMORY TRICK
============================================================

Remember:

    SCOPE
      ↓
    Where can the function find variables?


    CLOSURE
      ↓
    The function keeps access to those surrounding
    variables.


    CLOSURE + STATE
      ↓
    Private state


    CLOSURE + CALLBACK
      ↓
    setTimeout / events / async callbacks


    CLOSURE + HOF
      ↓
    Function factories


    CLOSURE + REACT
      ↓
    Event handlers / effects / stale closures


    CLOSURE + EXPRESS
      ↓
    Configurable middleware


    CLOSURE + TIMER
      ↓
    Debouncing / throttling


The single most important example to understand is:

    function counter() {

        let count = 0;

        return function () {

            count++;

            return count;
        };
    }


    const counter1 = counter();

    counter1(); // 1
    counter1(); // 2
    counter1(); // 3


If you completely understand WHY count survives after
counter() has finished, you understand the core idea
of closures.
*/