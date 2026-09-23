/*
╔══════════════════════════════════════════════════════════════════════╗
║                    IIFE IN JAVASCRIPT                              ║
║              Immediately Invoked Function Expression               ║
╚══════════════════════════════════════════════════════════════════════╝


1. WHAT IS AN IIFE?

IIFE stands for:

    Immediately Invoked Function Expression


It is a function that:

    1. is created
    2. is immediately executed


Normal function:

    function greet() {
        console.log("Hello");
    }


You have to call it:

    greet();


IIFE:

    (function greet() {
        console.log("Hello");
    })();


It runs immediately.

Output:

    Hello


The important idea is:

    DEFINE FUNCTION
         +
    EXECUTE IT IMMEDIATELY



2. BASIC IIFE SYNTAX

The most common syntax is:

    (function() {

        // code

    })();


There are two important parts:

    (function() {
        // function
    })


This turns the function into a:

    FUNCTION EXPRESSION


Then:

    ();


immediately invokes it.


So:

    (function() {
        console.log("Hello");
    })();


means:

    Create function
        ↓
    Turn it into an expression
        ↓
    Immediately call it



3. WHY DO WE NEED THE PARENTHESES?

This:

    function() {
        console.log("Hello");
    }


by itself is a function declaration without a name,
which is invalid in this position.

JavaScript needs to understand:

    "Treat this function as an expression."


So we write:

    (function() {
        console.log("Hello");
    })


Now JavaScript understands that this is a function expression.


Then:

    ();


calls it.


Therefore:

    (function() {
        console.log("Hello");
    })();


means:

    Function expression
          +
    immediate invocation



4. SIMPLE EXAMPLE

    (function() {

        const message = "Hello Navneet";

        console.log(message);

    })();


Output:

    Hello Navneet


There is no need to write:

    functionName();


because the function is invoked immediately.



5. IIFE WITH ARROW FUNCTION

IIFEs can also be written using arrow functions.

Example:

    (() => {

        console.log("Hello");

    })();


Output:

    Hello


Another example:

    (() => {

        const name = "Navneet";

        console.log(name);

    })();



6. IIFE CAN ACCEPT ARGUMENTS

An IIFE can receive arguments.

Example:

    (function(name) {

        console.log("Hello " + name);

    })("Navneet");


Output:

    Hello Navneet


Here:

    "Navneet"

is passed to:

    name


So IIFE works like a normal function.

The difference is:

    it executes immediately.



7. IIFE CAN RETURN A VALUE

An IIFE can also return something.

Example:

    const result = (function() {

        return 10 + 20;

    })();


Now:

    console.log(result);


Output:

    30


Execution:

    function executes
          ↓
    returns 30
          ↓
    result = 30



8. IIFE CREATES ITS OWN SCOPE

This is one of the most important reasons IIFEs
were historically useful.

Example:

    (function() {

        const secret = "12345";

        console.log(secret);

    })();


Outside the IIFE:

    console.log(secret);


This gives:

    ReferenceError


Why?

Because:

    secret

exists inside the function's scope.



9. REAL INDUSTRY USE CASE:
   PRIVATE VARIABLES

Before modern JavaScript modules became standard,
IIFEs were commonly used to create private variables.

Example:

    const userModule = (function() {

        const users = [];

        function addUser(user) {
            users.push(user);
        }

        function getUsers() {
            return users;
        }

        return {
            addUser,
            getUsers
        };

    })();


Now:

    userModule.addUser({
        name: "Navneet"
    });


And:

    console.log(
        userModule.getUsers()
    );


But this:

    console.log(userModule.users);


doesn't work.


Why?

Because:

    users

is private to the IIFE.


The outside world can access only what the IIFE
returns.



10. THIS IS CALLED THE MODULE PATTERN

The previous example is commonly called the:

    Module Pattern


Structure:

    IIFE
      ↓
    private variables
      ↓
    private functions
      ↓
    return public functions
      ↓
    public API


Example:

    const cart = (function() {

        let items = [];

        function addItem(item) {
            items.push(item);
        }

        function getItems() {
            return items;
        }

        return {
            addItem,
            getItems
        };

    })();


Outside code gets:

    addItem()
    getItems()


But not direct access to:

    items



11. WHY WAS THIS USEFUL?

Imagine a large application.

You don't want every part of your application
to freely modify internal data.

Instead:

    Private data
         ↓
    Controlled functions
         ↓
    Public API


This is a basic form of:

    Encapsulation



12. IMPORTANT CONNECTION:
    IIFE + CLOSURE

This is where your previous topic becomes important.

Example:

    const counter = (function() {

        let count = 0;

        return function() {

            count++;

            return count;

        };

    })();


Now:

    console.log(counter());
    console.log(counter());
    console.log(counter());


Output:

    1
    2
    3


Why does the returned function remember:

    count?


Because of:

    CLOSURE


The returned function retains access to:

    count

even after the IIFE has finished executing.



13. IIFE + CLOSURE FLOW

Think:

    IIFE starts
       ↓
    count = 0
       ↓
    returns inner function
       ↓
    IIFE finishes
       ↓
    inner function still remembers count
       ↓
    counter()
       ↓
    count becomes 1
       ↓
    counter()
       ↓
    count becomes 2


This is a very important connection:

    IIFE
      +
    Closure
      =
    Private persistent state



14. REAL INDUSTRY USE CASE:
    APPLICATION CONFIGURATION

Historically, an IIFE could be used to initialize
application configuration.

Example:

    const appConfig = (function() {

        const apiUrl = "https://api.example.com";

        const environment = "production";

        return {
            getApiUrl() {
                return apiUrl;
            },

            getEnvironment() {
                return environment;
            }
        };

    })();


Now:

    appConfig.getApiUrl();


returns:

    https://api.example.com


But:

    appConfig.apiUrl


is not directly accessible.


Again:

    private data
        ↓
    controlled access



15. REAL INDUSTRY USE CASE:
    INITIALIZATION CODE

Sometimes an application needs to perform something
only once when a module/application starts.

Example:

    (() => {

        console.log("Application initialized");

        // setup code
        // configuration
        // event registration

    })();


This can be useful when you have setup logic that should
execute immediately.



16. IIFE WITH DOM

Older frontend JavaScript applications commonly used IIFEs
to keep variables out of the global scope.

Example:

    (() => {

        const button =
            document.querySelector("#loginButton");

        button.addEventListener("click", () => {
            console.log("Login clicked");
        });

    })();


The variables:

    button

remain inside the IIFE.

They don't become global variables.



17. WHY WAS GLOBAL SCOPE A PROBLEM?

Imagine two JavaScript files.

File 1:

    const user = "Navneet";


File 2:

    const user = "Rahul";


Depending on how scripts are loaded/scoped, naming collisions
could become a problem in older global-script architectures.

IIFEs helped isolate variables:

    (function() {

        const user = "Navneet";

    })();


    (function() {

        const user = "Rahul";

    })();


Each IIFE has its own function scope.



18. IIFE AND VAR

IIFEs were especially useful with:

    var


because:

    var

is function-scoped.


Example:

    (function() {

        var secret = "hello";

    })();


Outside:

    console.log(secret);


Error:

    ReferenceError


The IIFE creates a function boundary.



19. MODERN JAVASCRIPT HAS BETTER OPTIONS

This is extremely important for a modern MERN developer.

You should NOT use IIFE everywhere.

Modern JavaScript has:

    let
    const
    ES Modules
    import
    export


For example:

    // user.js

    const users = [];

    export function addUser(user) {
        users.push(user);
    }

    export function getUsers() {
        return users;
    }


Then:

    import {
        addUser,
        getUsers
    } from "./user.js";


ES Modules provide proper module-level organization
and encapsulation.

So in modern applications:

    ES Modules

are generally preferred over using IIFEs as a
module system.



20. IIFE VS ES MODULES

OLD STYLE:

    IIFE
      ↓
    private scope
      ↓
    return public API


MODERN STYLE:

    ES Module
      ↓
    module scope
      ↓
    export what should be public


For modern MERN projects:

    import/export

is the standard approach.



21. IIFE IN REACT

You generally do NOT need IIFEs for normal React components.

For example, don't write:

    function App() {

        const value = (() => {

            // complicated logic

            return 10;

        })();

    }


unless there is a specific reason.

React already gives you:

    Components
    Module scope
    Hooks
    State
    Effects
    Utility functions


So IIFEs are much less common in modern React applications.



22. IIFE IN NODE.JS / EXPRESS

Modern Node.js applications also usually use:

    ES Modules

or:

    CommonJS modules


instead of IIFEs for organizing application code.

Example:

    import express from "express";

    const app = express();


You generally don't need:

    (function() {

        // entire Express application

    })();


However, understanding IIFEs helps when you encounter
older JavaScript or libraries that use the pattern.



23. IIFE AND ASYNC FUNCTIONS

An IIFE can also be asynchronous.

This is called an:

    Async IIFE


Example:

    (async () => {

        const response =
            await fetch("/api/products");

        const products =
            await response.json();

        console.log(products);

    })();


This pattern was particularly useful before top-level
await became widely available in ES modules.


Today, depending on your module setup, you may simply use:

    const response =
        await fetch("/api/products");


at module top level.

So async IIFEs are useful to recognize, but you don't
need to use them everywhere.



24. REAL NODE.JS EXAMPLE

Suppose you want to run some initialization code
immediately:

    (async () => {

        try {

            await connectDatabase();

            console.log(
                "Database connected"
            );

        } catch (error) {

            console.error(error);

        }

    })();


The function:

    async () => { ... }


is created and immediately called.

This can be useful for one-time startup logic.

However, in a modern Express application, you may prefer
a named startup function:

    async function startServer() {

        await connectDatabase();

        app.listen(5000);
    }

    startServer();


This is often easier to read and test.



25. IIFE VS NORMAL FUNCTION

NORMAL FUNCTION:

    function greet() {
        console.log("Hello");
    }

    greet();


You decide when to execute it.


IIFE:

    (function greet() {
        console.log("Hello");
    })();


It executes immediately.


So:

    Normal function
        =
    define now, execute later


    IIFE
        =
    define and execute immediately



26. IIFE VS FUNCTION EXPRESSION

Function expression:

    const greet = function() {
        console.log("Hello");
    };


Nothing runs immediately.

You later call:

    greet();


IIFE:

    (function() {
        console.log("Hello");
    })();


It runs immediately.



27. NAMED IIFE

An IIFE can have a name.

Example:

    (function initializeApp() {

        console.log("App started");

    })();


The name:

    initializeApp

can make debugging/stack traces easier.


But you don't normally call:

    initializeApp();


from outside.

The purpose is immediate execution.



28. IIFE WITH PARAMETERS

Example:

    (function(name, age) {

        console.log(name);
        console.log(age);

    })("Navneet", 20);


Output:

    Navneet
    20


This works just like normal function parameters.



29. IIFE CAN RETURN OBJECTS

Example:

    const calculator = (function() {

        function add(a, b) {
            return a + b;
        }

        function subtract(a, b) {
            return a - b;
        }

        return {
            add,
            subtract
        };

    })();


Usage:

    calculator.add(10, 5);

    calculator.subtract(10, 5);


This is another example of the module pattern.



30. IMPORTANT:
    IIFE DOES NOT MEAN PRIVATE BY ITSELF

The IIFE creates a private scope.

But if you return something:

    return {
        secret
    };


then that value becomes accessible through the returned
object.

Example:

    const module = (function() {

        const secret = "123";

        return {
            secret
        };

    })();


Now:

    module.secret


works.

So:

    IIFE creates the scope.

    What you expose from that scope
    determines what outside code can access.



31. IIFE AND ENCAPSULATION

The basic pattern is:

    PRIVATE STATE
          ↓
    PRIVATE FUNCTIONS
          ↓
    PUBLIC FUNCTIONS
          ↓
    OUTSIDE CODE


Example:

    const bankAccount = (function() {

        let balance = 1000;

        function deposit(amount) {
            balance += amount;
        }

        function getBalance() {
            return balance;
        }

        return {
            deposit,
            getBalance
        };

    })();


Outside:

    bankAccount.deposit(500);

    bankAccount.getBalance();


Output:

    1500


But:

    bankAccount.balance


is:

    undefined


because balance was not exposed.



32. IIFE + HOF + CLOSURE

You have learned these concepts separately.

Now connect them.

IIFE:

    Executes immediately.


Closure:

    Inner function remembers outer variables.


HOF:

    Function accepts or returns another function.


Example:

    const counter = (function() {

        let count = 0;

        return function() {
            count++;
            return count;
        };

    })();


Here:

    IIFE
        ↓
    executes immediately


    Closure
        ↓
    returned function remembers count


    HOF concept
        ↓
    IIFE returns a function



33. COMMON MISTAKE

This:

    function() {
        console.log("Hello");
    }


is not a valid standalone statement in the way
you might expect.

Correct IIFE:

    (function() {
        console.log("Hello");
    })();


or:

    (function() {
        console.log("Hello");
    }());


Both are valid common IIFE forms.



34. TWO COMMON IIFE STYLES

Style 1:

    (function() {

        console.log("Hello");

    })();


Style 2:

    (function() {

        console.log("Hello");

    }());


Both immediately execute the function.


Most important thing:

    Don't get stuck memorizing the tiny difference.


Understand:

    function expression
          +
    immediate invocation



35. ARROW IIFE

Modern syntax:

    (() => {

        console.log("Hello");

    })();


With parameter:

    ((name) => {

        console.log(`Hello ${name}`);

    })("Navneet");


With return value:

    const result = (() => {

        return 10 + 20;

    })();


result:

    30



36. WHEN SHOULD A MERN DEVELOPER USE IIFE?

Use it when there is a genuine need for:

    immediate one-time execution
    isolated local scope
    one-time initialization
    legacy code compatibility
    specific closure/module patterns
    async initialization in certain contexts


Do NOT use it simply because:

    "I know IIFE, so I should use IIFE."



37. WHEN SHOULD YOU NOT USE IIFE?

For modern MERN projects, don't use IIFE just to:

    create modules
    hide normal variables
    organize every function
    replace React components
    replace ES modules


Prefer:

    const
    let
    functions
    ES Modules
    import/export
    React components
    proper project structure



38. IMPORTANT INTERVIEW QUESTION:
    WHY WAS IIFE POPULAR?

Answer:

Before ES modules and block-scoped let/const became standard,
IIFEs were commonly used to:

    create private scope
    avoid global variables
    prevent naming collisions
    encapsulate implementation details
    create module-like patterns



39. IMPORTANT INTERVIEW QUESTION:
    DOES IIFE CREATE A NEW SCOPE?

Answer:

Yes.

An IIFE is a function, so it creates a function scope.

Variables declared inside it are not directly accessible
outside the function.



40. IMPORTANT INTERVIEW QUESTION:
    WHY USE IIFE INSTEAD OF A NORMAL FUNCTION?

Answer:

When you want code to execute immediately and don't need
to call the function again later.

It can also provide an isolated scope for temporary or
private variables.



41. IMPORTANT INTERVIEW QUESTION:
    CAN IIFE RETURN A VALUE?

Answer:

Yes.

Example:

    const result = (() => {
        return 10 + 20;
    })();


result:

    30



42. IMPORTANT INTERVIEW QUESTION:
    CAN IIFE ACCEPT ARGUMENTS?

Answer:

Yes.

Example:

    ((name) => {
        console.log(name);
    })("Navneet");



43. IMPORTANT INTERVIEW QUESTION:
    WHAT IS AN ASYNC IIFE?

Answer:

An async IIFE is an immediately invoked function expression
declared with async.

Example:

    (async () => {

        const data = await fetchData();

        console.log(data);

    })();



44. IMPORTANT INTERVIEW QUESTION:
    IS IIFE STILL IMPORTANT IN MODERN JAVASCRIPT?

Answer:

Yes, you should understand it because you may encounter it
in existing code, libraries, interviews, and older JavaScript
patterns.

But it is much less necessary for creating modules because
modern JavaScript provides ES modules.



45. PRACTICE QUESTION 1

What is the output?

    (function() {
        console.log("Hello");
    })();


Answer:

    Hello


Because the function is immediately invoked.



46. PRACTICE QUESTION 2

What is the output?

    const result = (function() {
        return 10 + 20;
    })();

    console.log(result);


Answer:

    30



47. PRACTICE QUESTION 3

What happens here?

    (function() {

        const secret = "password";

    })();

    console.log(secret);


Answer:

    ReferenceError


Because:

    secret

exists only inside the IIFE's function scope.



48. PRACTICE QUESTION 4

What is the output?

    const counter = (function() {

        let count = 0;

        return function() {
            count++;
            return count;
        };

    })();

    console.log(counter());
    console.log(counter());
    console.log(counter());


Answer:

    1
    2
    3


Why?

The returned function forms a closure over:

    count



49. PRACTICE QUESTION 5

What is the output?

    ((name) => {

        return `Hello ${name}`;

    })("Navneet");


Answer:

    "Hello Navneet"



50. PRACTICE QUESTION 6

What is the purpose of this?

    const config = (function() {

        const apiUrl = "/api";

        return {
            getApiUrl() {
                return apiUrl;
            }
        };

    })();


Answer:

It creates a private:

    apiUrl


and exposes only:

    getApiUrl()


This is an example of encapsulation using an IIFE.



51. PRACTICE QUESTION 7

Is this an IIFE?

    function greet() {
        console.log("Hello");
    }


Answer:

No.

This is a function declaration.

It has not been invoked.



52. PRACTICE QUESTION 8

Is this an IIFE?

    const greet = function() {
        console.log("Hello");
    };


Answer:

No.

This is a function expression stored in:

    greet


It only executes when:

    greet();


is called.



53. PRACTICE QUESTION 9

Is this an IIFE?

    (function() {
        console.log("Hello");
    })();


Answer:

Yes.

It is:

    Function Expression
          +
    Immediate Invocation



54. PRACTICE QUESTION 10

Why can this function still access count?

    const counter = (function() {

        let count = 0;

        return function() {
            count++;
            return count;
        };

    })();


Answer:

Because the returned function forms a closure.

It retains access to the lexical environment where:

    count

was created.



55. IIFE VS CLOSURE

Don't confuse them.

IIFE:

    HOW the function is executed

    "Immediately."


Closure:

    HOW a function retains access to
    variables from its outer scope.


Example:

    const counter = (function() {

        let count = 0;

        return function() {
            count++;
        };

    })();


Here:

    IIFE
        ↓
    executes immediately


    Closure
        ↓
    returned function remembers count



56. IIFE VS HOF

IIFE:

    A function that is immediately executed.


HOF:

    A function that accepts or returns another function.


They are different concepts.

An IIFE can also participate in a higher-order pattern
if it returns a function.



57. IIFE VS ARROW FUNCTION

Arrow function:

    const add = (a, b) => a + b;


It is just a function.

Arrow IIFE:

    ((a, b) => a + b)(10, 20);


This executes immediately.

Output:

    30



58. HOW MUCH IIFE DO YOU NEED FOR MERN?

You do NOT need to spend huge amounts of time on IIFE.

For your MERN preparation, know these:

    ✓ What IIFE means

    ✓ Basic syntax

    ✓ Why parentheses are used

    ✓ Immediate execution

    ✓ Function scope

    ✓ Passing arguments

    ✓ Returning values

    ✓ IIFE + closure

    ✓ Private variables

    ✓ Module Pattern

    ✓ Async IIFE

    ✓ Why IIFE was popular

    ✓ Why ES Modules are preferred today

    ✓ Where you may encounter IIFEs



59. FINAL MERN MENTAL MODEL

OLD JAVASCRIPT:

    IIFE
       ↓
    private scope
       ↓
    module pattern


MODERN JAVASCRIPT:

    ES Modules
       ↓
    import / export
       ↓
    module scope


MERN:

    React
       ↓
    ES Modules
       ↓
    Node.js
       ↓
    Express
       ↓
    MongoDB


You may still encounter IIFEs in:

    older frontend code
    libraries
    plugins
    legacy projects
    interviews
    initialization code



╔══════════════════════════════════════════════════════════════════════╗
║                         FINAL CHEAT SHEET                           ║
╚══════════════════════════════════════════════════════════════════════╝

IIFE:

    Immediately Invoked Function Expression


BASIC:

    (function() {
        // code
    })();


ARROW:

    (() => {
        // code
    })();


WITH ARGUMENT:

    ((name) => {
        console.log(name);
    })("Navneet");


WITH RETURN:

    const result = (() => {
        return 10 + 20;
    })();


MAIN PURPOSES:

    Immediate execution
    Isolated scope
    Avoid global variables
    Encapsulation
    One-time initialization
    Legacy module patterns


IMPORTANT CONNECTION:

    IIFE
      +
    Closure
      ↓
    Private persistent state


MODERN ALTERNATIVE:

    ES Modules
        ↓
    import / export


MERN REAL-WORLD RELEVANCE:

    React:
        Usually not needed for normal components.

    Node.js:
        Usually ES Modules/CommonJS are preferred.

    Express:
        Usually not necessary for normal route/controller code.

    Legacy JavaScript:
        Very common.

    Initialization:
        Sometimes useful.


INTERVIEW ONE-LINER:

    "An IIFE, or Immediately Invoked Function Expression,
    is a function expression that is executed immediately
    after it is created. It is commonly used to create an
    isolated scope, encapsulate variables, and perform
    one-time initialization."


FINAL MENTAL MODEL:

    CREATE FUNCTION
          ↓
    MAKE IT AN EXPRESSION
          ↓
    INVOKE IT IMMEDIATELY
          ↓
    CREATE ISOLATED SCOPE
          ↓
    OPTIONAL:
    RETURN VALUES / PRIVATE STATE
*/