/*
╔══════════════════════════════════════════════════════════════════════╗
║                  FUNCTION COMPOSITION IN JAVASCRIPT                ║
╚══════════════════════════════════════════════════════════════════════╝


1. WHAT IS FUNCTION COMPOSITION?

Function composition means:

    Taking the output of one function
    and using it as the input of another function.

Simple example:

    function double(x) {
        return x * 2;
    }

    function addTen(x) {
        return x + 10;
    }


We can connect them:

    double(5)
        ↓
       10
        ↓
    addTen(10)
        ↓
       20


So:

    addTen(double(5))

Output:

    20


The basic idea is:

    Input
      ↓
    Function 1
      ↓
    Function 2
      ↓
    Function 3
      ↓
    Final Output


This is called FUNCTION COMPOSITION.



2. REAL-LIFE ANALOGY

Imagine a food processing pipeline:

    Raw vegetables
          ↓
       Wash
          ↓
       Cut
          ↓
       Cook
          ↓
       Serve


Each step takes the output of the previous step.

JavaScript composition works in the same way:

    data
      ↓
    validate()
      ↓
    transform()
      ↓
    format()
      ↓
    output



3. SIMPLE JAVASCRIPT EXAMPLE

    function double(x) {
        return x * 2;
    }

    function square(x) {
        return x * x;
    }


Suppose:

    double(5)

gives:

    10


Then:

    square(10)

gives:

    100


So we can compose them:

    square(double(5));

Output:

    100



4. WHY IS COMPOSITION USEFUL?

Without composition, you may create a huge function:

    function processUser(user) {

        // validate user

        // normalize user

        // remove unnecessary fields

        // format data

        // calculate something

        // create response

        // etc.
    }


This can become difficult to:

    understand
    test
    reuse
    debug
    maintain


With composition:

    validateUser()
        ↓
    normalizeUser()
        ↓
    formatUser()
        ↓
    createResponse()


Each function has one responsibility.

This follows an important clean-code idea:

    SMALL FUNCTIONS
          +
    SINGLE RESPONSIBILITY
          +
    COMPOSITION
          =
    REUSABLE CODE



5. FUNCTION COMPOSITION EXAMPLE

Suppose we have:

    function trim(text) {
        return text.trim();
    }

    function toLowerCase(text) {
        return text.toLowerCase();
    }

    function removeSpaces(text) {
        return text.replaceAll(" ", "");
    }


We want:

    "  Hello World  "

to become:

    "helloworld"


We can manually compose:

    removeSpaces(
        toLowerCase(
            trim("  Hello World  ")
        )
    );


Execution:

    "  Hello World  "
            ↓
         trim()
            ↓
      "Hello World"
            ↓
      toLowerCase()
            ↓
      "hello world"
            ↓
      removeSpaces()
            ↓
       "helloworld"



6. THE PROBLEM WITH DEEPLY NESTED FUNCTIONS

This:

    removeSpaces(
        toLowerCase(
            trim(
                text
            )
        )
    );


can become difficult to read when you have many functions.

For example:

    function1(
        function2(
            function3(
                function4(
                    function5(
                        data
                    )
                )
            )
        )
    );


This is sometimes called:

    FUNCTION NESTING


Composition gives us a cleaner way to express pipelines.



7. CREATING A compose() FUNCTION

We can create a reusable composition utility:

    function compose(f, g) {
        return function(value) {
            return f(g(value));
        };
    }


Example:

    function double(x) {
        return x * 2;
    }

    function addTen(x) {
        return x + 10;
    }


Create:

    const composed = compose(
        addTen,
        double
    );


Then:

    composed(5);


Execution:

    5
    ↓
    double(5)
    ↓
    10
    ↓
    addTen(10)
    ↓
    20


Output:

    20



8. IMPORTANT: ORDER MATTERS

Composition is NOT random.

Suppose:

    function double(x) {
        return x * 2;
    }

    function addTen(x) {
        return x + 10;
    }


This:

    addTen(double(5))

gives:

    20


But:

    double(addTen(5))

gives:

    30


Because:

    double(5)
        → 10
    addTen(10)
        → 20


while:

    addTen(5)
        → 15
    double(15)
        → 30


Therefore:

    FUNCTION ORDER MATTERS.



9. compose() DIRECTION

A common convention for:

    compose(f, g)

is:

    compose(f, g)(x)

means:

    f(g(x))


So execution happens:

    right → left


Example:

    compose(
        addTen,
        double
    )(5)


means:

    addTen(
        double(5)
    )


Execution:

    5
    ↓
    double
    ↓
    10
    ↓
    addTen
    ↓
    20



10. pipe()

There is another very important concept:

    pipe()


Pipe usually applies functions:

    left → right


Example:

    function pipe(...functions) {

        return function(value) {

            return functions.reduce(
                (result, fn) => fn(result),
                value
            );
        };
    }


Now:

    const process = pipe(
        trim,
        toLowerCase,
        removeSpaces
    );


Then:

    process("  Hello World  ");


Execution is easier to read:

    "  Hello World  "
            ↓
          trim
            ↓
       "Hello World"
            ↓
       toLowerCase
            ↓
       "hello world"
            ↓
       removeSpaces
            ↓
       "helloworld"



11. compose() VS pipe()

This is important for interviews.

    compose()

usually works:

    RIGHT → LEFT


    compose(f, g, h)(x)

means approximately:

    f(g(h(x)))


While:

    pipe()

usually works:

    LEFT → RIGHT


    pipe(f, g, h)(x)

means:

    h(g(f(x)))


Mental model:

    compose:
        ← ← ←


    pipe:
        → → →



12. WHICH ONE IS EASIER TO READ?

For many developers:

    pipe()

is easier to understand because it reads
like a normal workflow:

    input
      ↓
    validate
      ↓
    transform
      ↓
    format
      ↓
    output


For example:

    pipe(
        validateUser,
        normalizeUser,
        formatUser
    );


It reads almost like:

    validate
        →
    normalize
        →
    format



13. REAL INDUSTRY USE CASE #1
    DATA PROCESSING

Imagine your backend receives:

    "  NAVNEET SHARMA  "


You want:

    "navneet sharma"


Create small functions:

    function trimName(name) {
        return name.trim();
    }

    function lowercaseName(name) {
        return name.toLowerCase();
    }


Then:

    const normalizeName = pipe(
        trimName,
        lowercaseName
    );


Now:

    normalizeName("  NAVNEET SHARMA  ");


returns:

    "navneet sharma"


This is much easier to reuse and test.



14. REAL INDUSTRY USE CASE #2
    FORM VALIDATION

Imagine a React registration form.

You may need:

    validateEmail
    validatePassword
    trimInput
    normalizeEmail


Instead of one giant function:

    function processEmail(email) {

        // trim

        // lowercase

        // validate

        // etc.
    }


You can create small functions:

    trimInput
        ↓
    lowercase
        ↓
    validateEmail


For example:

    const processEmail = pipe(
        trimInput,
        lowercase,
        validateEmail
    );


Now:

    processEmail(email);


This creates a clean processing pipeline.



15. REAL INDUSTRY USE CASE #3
    EXPRESS MIDDLEWARE

This is especially important for MERN developers.

Express itself is heavily based on a pipeline idea.

Example:

    app.use(
        authenticateUser
    );

    app.use(
        authorizeUser
    );

    app.use(
        validateRequest
    );


Conceptually:

    Request
       ↓
    authenticate
       ↓
    authorize
       ↓
    validate
       ↓
    controller
       ↓
    response


Each middleware performs a step in the request pipeline.

This is closely related to the idea of composing functions/middleware.

Important:

    Express middleware is not exactly the same thing
    as pure mathematical function composition.

Express middleware uses:

    req
    res
    next

and can control whether the pipeline continues.

But the underlying idea of:

    small operations
        +
    connecting them into a pipeline

is very similar.



16. REAL MERN REQUEST FLOW

A typical backend request might look like:

    HTTP Request
         ↓
    Authentication
         ↓
    Authorization
         ↓
    Validation
         ↓
    Business Logic
         ↓
    Database
         ↓
    Format Response
         ↓
    HTTP Response


Instead of putting everything into one giant controller,
you can keep responsibilities separated.

For example:

    authenticateUser
    authorizeAdmin
    validateProduct
    createProduct
    formatProductResponse


This makes the code easier to maintain.



17. REAL INDUSTRY USE CASE #4
    API RESPONSE TRANSFORMATION

Suppose MongoDB returns:

    {
        _id: "123",
        firstName: "Navneet",
        lastName: "Sharma",
        password: "secret"
    }


You don't want to send the password to the frontend.

You can have separate functions:

    removeSensitiveFields()
        ↓
    createPublicUser()
        ↓
    formatResponse()


Then compose them into a pipeline.

Conceptually:

    MongoDB data
         ↓
    removeSensitiveFields
         ↓
    transformUser
         ↓
    formatResponse
         ↓
    React frontend



18. REAL INDUSTRY USE CASE #5
    SEARCH / FILTER PIPELINE

Suppose an e-commerce application receives products.

You may need:

    filterByCategory
        ↓
    filterByPrice
        ↓
    sortProducts
        ↓
    formatProducts


Each step can be a small function.

Example:

    const processProducts = pipe(
        filterByCategory,
        filterByPrice,
        sortProducts
    );


This gives you a reusable processing pipeline.



19. COMPOSITION + HIGHER-ORDER FUNCTIONS

Composition becomes much easier when you understand HOFs.

A Higher-Order Function can:

    accept a function

or:

    return a function


A composition utility does exactly that.

Example:

    function compose(f, g) {

        return function(value) {
            return f(g(value));
        };
    }


compose():

    receives functions
          ↓
    returns a function


Therefore:

    compose()

is a Higher-Order Function.



20. COMPOSITION + CURRYING

These concepts can also work together.

Currying:

    function add(a) {
        return function(b) {
            return a + b;
        };
    }


Composition:

    output of one function
          ↓
    input of another function


They solve different problems.

Currying helps with:

    creating specialized functions


Composition helps with:

    connecting functions together



21. COMPOSITION + CLOSURES

Composition utilities often return functions.

For example:

    function compose(f, g) {

        return function(value) {
            return f(g(value));
        };
    }


The returned function can access:

    f
    g


These are remembered through closure.

So your previous concepts connect:

    HOF
      ↓
    Closure
      ↓
    Currying
      ↓
    Composition



22. PURE FUNCTIONS AND COMPOSITION

Composition works especially well with:

    PURE FUNCTIONS


A pure function:

    same input
        →
    same output


and ideally:

    does not modify external state.


Example:

    function double(x) {
        return x * 2;
    }


This is pure.

So:

    pipe(
        double,
        addTen,
        square
    );


is easy to reason about.



23. WHY PURE FUNCTIONS ARE USEFUL

Suppose:

    function double(x) {
        return x * 2;
    }

    function addTen(x) {
        return x + 10;
    }

    function square(x) {
        return x * x;
    }


Pipeline:

    pipe(
        double,
        addTen,
        square
    );


Input:

    5


Step 1:

    double(5)

    = 10


Step 2:

    addTen(10)

    = 20


Step 3:

    square(20)

    = 400


Final:

    400


Every step is easy to test independently.



24. COMPOSITION IN REACT

You don't need to write a custom compose() function
every time you use React.

But the concept appears frequently.

For example, data transformation:

    API data
       ↓
    filter
       ↓
    map
       ↓
    sort
       ↓
    display


Example:

    const visibleProducts = products
        .filter(product => product.inStock)
        .filter(product => product.price < 5000)
        .map(product => ({
            id: product._id,
            name: product.name,
            price: product.price
        }));


This is essentially a transformation pipeline.

It is not technically the same as using a dedicated
function-composition utility, but the composition idea
is present.



25. ARRAY METHODS ARE PIPELINE-FRIENDLY

You have already learned:

    map()
    filter()
    reduce()
    find()
    some()
    every()


These can be chained:

    products
        .filter(product => product.inStock)
        .map(product => product.name)
        .sort();


Conceptually:

    products
       ↓
    filter
       ↓
    map
       ↓
    sort


This is one of the most practical forms of composition
you will use as a MERN developer.



26. COMPOSITION VS CHAINING

They look similar but are different concepts.

CHAINING:

    products
        .filter(...)
        .map(...)
        .sort(...)


You are calling methods one after another.

COMPOSITION:

    const process = pipe(
        filterProducts,
        transformProducts,
        sortProducts
    );


Then:

    process(products);


Both create a pipeline-like flow.

Composition is more general because it can connect
ordinary functions, not just methods on the same object.



27. COMPOSITION VS NESTED FUNCTION CALLS

Nested:

    format(
        transform(
            validate(data)
        )
    );


Composition:

    const process = pipe(
        validate,
        transform,
        format
    );


Then:

    process(data);


The second approach can be easier to read when there
are many processing steps.



28. IMPORTANT RULE: FUNCTION OUTPUT MUST MATCH
    THE NEXT FUNCTION'S INPUT

Suppose:

    function getName(user) {
        return user.name;
    }


Then:

    function uppercase(name) {
        return name.toUpperCase();
    }


These compose nicely:

    pipe(
        getName,
        uppercase
    );


Because:

    getName(user)
        ↓
      name
        ↓
    uppercase(name)


But if the first function returns an object and the next
function expects a number, your pipeline won't work correctly.

So always think:

    OUTPUT OF FUNCTION 1
             =
    INPUT EXPECTED BY FUNCTION 2



29. ASYNC COMPOSITION

This is important for MERN.

Consider:

    async function getUser(id) {
        // database/API call
    }


Then:

    async function getOrders(user) {
        // database/API call
    }


You can conceptually create:

    user
      ↓
    getUser
      ↓
    getOrders
      ↓
    response


But asynchronous composition needs special handling
because functions return:

    Promise


Example:

    const user = await getUser(id);

    const orders = await getOrders(user);


The pipeline is:

    id
     ↓
    Promise<User>
     ↓
    await
     ↓
    User
     ↓
    Promise<Orders>
     ↓
    await
     ↓
    Orders


Do NOT assume a normal synchronous compose() utility
automatically handles async functions correctly.



30. COMMON MISTAKE: MIXING ASYNC AND SYNC COMPOSITION

Suppose:

    function double(x) {
        return x * 2;
    }

    async function fetchNumber() {
        return 10;
    }


If you do:

    double(fetchNumber());


You are passing a Promise to double().

You don't get:

    20


You need:

    const number = await fetchNumber();

    const result = double(number);


Or an async-aware pipeline.

For normal MERN development:

    async/await

is usually clearer than building complicated
async composition utilities.



31. COMPOSITION AND ERROR HANDLING

Real applications need errors.

Suppose:

    validate()
      ↓
    transform()
      ↓
    saveToDatabase()


If validation fails, the pipeline should stop.

With synchronous code:

    try {
        const result = process(data);
    } catch (error) {
        console.error(error);
    }


With async backend code:

    try {
        const result = await process(data);
    } catch (error) {
        console.error(error);
    }


In Express, errors are usually passed to centralized
error-handling middleware.

This keeps business logic cleaner.



32. DON'T OVERUSE COMPOSITION

Composition is a tool.

Don't create:

    compose(
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i
    );


just because you can.

If a normal function is easier to understand:

    use the normal function.


Good code is not:

    "the most functional code possible."


Good code is:

    readable
    maintainable
    testable
    reusable



33. WHAT A MERN DEVELOPER REALLY NEEDS TO KNOW

You do NOT need to become a functional programming expert.

You should understand:

    1. What composition means

    2. Output → input relationship

    3. compose()

    4. pipe()

    5. compose vs pipe

    6. Function order

    7. Pure functions

    8. HOF connection

    9. Closure connection

    10. Currying connection

    11. Array method pipelines

    12. Express middleware pipelines

    13. Basic async composition

    14. When NOT to use composition



34. INTERVIEW QUESTIONS


Q1. What is function composition?

Answer:

Function composition means combining multiple functions
so that the output of one function becomes the input of
another function.


Example:

    f(g(x))



Q2. What is the main benefit of composition?

Answer:

It allows us to build complex behavior from small,
reusable functions.



Q3. What is the output of:

    function double(x) {
        return x * 2;
    }

    function addFive(x) {
        return x + 5;
    }

    console.log(addFive(double(10)));


Answer:

    25



Q4. Why?

Answer:

First:

    double(10)
    = 20


Then:

    addFive(20)
    = 25



Q5. What does compose(f, g)(x) usually mean?

Answer:

    f(g(x))


So execution happens:

    g first
    then f



Q6. What is pipe()?

Answer:

pipe() is a pattern/utility that passes the result of
one function into the next function from left to right.


Example:

    pipe(
        validate,
        transform,
        format
    );



Q7. compose vs pipe?

Answer:

Usually:

    compose:
        right → left


    pipe:
        left → right



Q8. What is the output?

    function double(x) {
        return x * 2;
    }

    function square(x) {
        return x * x;
    }

    const process = pipe(
        double,
        square
    );

    console.log(process(3));


Answer:

    36


Because:

    3
    ↓
    double
    ↓
    6
    ↓
    square
    ↓
    36



Q9. Why should functions in a pipeline have compatible
inputs and outputs?

Answer:

Because the output of one function becomes the input of
the next function.



Q10. Is Express middleware composition exactly the same
as mathematical function composition?

Answer:

No.

Express middleware has:

    req
    res
    next

and controls the request lifecycle.

However, both use the general idea of combining smaller
operations into a processing pipeline.



Q11. How are array methods related to composition?

Answer:

Methods such as:

    filter()
    map()
    sort()

can be chained to create a sequence of data transformations.



Q12. Why are pure functions useful for composition?

Answer:

Because they are predictable.

Given the same input, they produce the same output,
making pipelines easier to test and reason about.



Q13. Can async functions be composed with a normal
synchronous compose()?

Answer:

Not safely in general.

Async functions return Promises, so you need to handle
the Promise with:

    await

or use an async-aware composition pattern.



Q14. Is composition mandatory in MERN?

Answer:

No.

It is a useful JavaScript design pattern.

You should understand it and recognize it in code,
but you should not force it into every project.



35. PRACTICE QUESTIONS


Question 1:

Create:

    double(5)
        ↓
    add10()
        ↓
    square()


using composition.

Expected result:

    400


Answer:

    function double(x) {
        return x * 2;
    }

    function add10(x) {
        return x + 10;
    }

    function square(x) {
        return x * x;
    }

    const result =
        square(
            add10(
                double(5)
            )
        );

    console.log(result);

Output:

    400



Question 2:

What is the output?

    function add2(x) {
        return x + 2;
    }

    function multiply3(x) {
        return x * 3;
    }

    console.log(
        multiply3(add2(4))
    );


Answer:

    18


Because:

    4 + 2 = 6

    6 × 3 = 18



Question 3:

What is the output?

    function add2(x) {
        return x + 2;
    }

    function multiply3(x) {
        return x * 3;
    }

    console.log(
        add2(multiply3(4))
    );


Answer:

    14


Because:

    4 × 3 = 12

    12 + 2 = 14


This demonstrates why function order matters.



Question 4:

Create a pipe() function that can execute:

    double
    add10
    square


Answer:

    function pipe(...functions) {

        return function(value) {

            return functions.reduce(
                (result, fn) => fn(result),
                value
            );
        };
    }


Then:

    const process = pipe(
        double,
        add10,
        square
    );


    console.log(process(5));

Output:

    400



Question 5:

Create a function that converts:

    "  NAVNEET  "

into:

    "navneet"


Answer:

    function trim(text) {
        return text.trim();
    }

    function lowercase(text) {
        return text.toLowerCase();
    }


    const process = pipe(
        trim,
        lowercase
    );


    console.log(
        process("  NAVNEET  ")
    );


Output:

    "navneet"



Question 6:

Given:

    const products = [
        { name: "Laptop", price: 80000, inStock: true },
        { name: "Mouse", price: 1000, inStock: false },
        { name: "Keyboard", price: 3000, inStock: true }
    ];


Create a pipeline that:

    1. keeps only in-stock products
    2. keeps products below 50000
    3. returns only product names


Answer:

    const result = products
        .filter(product => product.inStock)
        .filter(product => product.price < 50000)
        .map(product => product.name);


Output:

    ["Keyboard"]



36. FINAL CONNECTION WITH YOUR PREVIOUS TOPICS

You have now covered several concepts that are strongly
connected:

    FUNCTIONS
        ↓
    CALLBACKS
        ↓
    HIGHER-ORDER FUNCTIONS
        ↓
    CLOSURES
        ↓
    CURRYING
        ↓
    COMPOSITION


Think of them like this:


    HOF
    "I can work with functions."


    CLOSURE
    "I can remember variables from my outer scope."


    CURRYING
    "I can create functions step-by-step."


    COMPOSITION
    "I can connect functions together."



37. FINAL MERN MENTAL MODEL

A real backend feature can conceptually look like:

    HTTP Request
          ↓
    authenticateUser
          ↓
    authorizeUser
          ↓
    validateRequest
          ↓
    businessLogic
          ↓
    databaseOperation
          ↓
    transformData
          ↓
    formatResponse
          ↓
    HTTP Response


Each step can be a small piece of logic.

That is the real value of composition:

    SMALL FUNCTIONS
          ↓
    CONNECT THEM
          ↓
    BUILD COMPLEX BEHAVIOR



╔══════════════════════════════════════════════════════════════════════╗
║                         FINAL CHEAT SHEET                           ║
╚══════════════════════════════════════════════════════════════════════╝

COMPOSITION:

    output of one function
            ↓
    input of another function


compose():

    usually RIGHT → LEFT

    compose(f, g)(x)
    = f(g(x))


pipe():

    usually LEFT → RIGHT

    pipe(f, g)(x)
    = g(f(x))


MAIN BENEFITS:

    Reusability
    Readability
    Testability
    Small functions
    Separation of responsibilities
    Data-processing pipelines


MERN USE CASES:

    React data transformations
    form processing
    validation
    API response transformation
    Express middleware pipelines
    business logic
    search/filter pipelines
    reusable utilities


MOST IMPORTANT RULE:

    FUNCTION 1 OUTPUT
           ↓
    FUNCTION 2 INPUT


DO NOT MEMORIZE:

    complicated compose libraries


DO UNDERSTAND:

    data
      ↓
    function
      ↓
    output
      ↓
    next function
      ↓
    output
      ↓
    final result


INTERVIEW ONE-LINER:

    "Function composition is the process of combining small
    functions so that the output of one function becomes the
    input of another, allowing complex behavior to be built
    from reusable pieces."
*/