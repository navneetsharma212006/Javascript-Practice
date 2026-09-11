/*
============================================================
                 JAVASCRIPT PROMISES
       Beginner → Intermediate → MERN → Interview
============================================================


------------------------------------------------------------
Q1. What is a Promise in JavaScript?
------------------------------------------------------------

A Promise is an object that represents the eventual result
of an asynchronous operation.

In simple words:

"Something is happening now, but the result will come later."

For example:

→ Calling an API
→ Reading a file
→ Querying a database
→ Waiting for a timer
→ Uploading a file


Example:

const promise = fetch("/api/users");


The request does not immediately give you the final
user data.

Instead, fetch() gives you a Promise.

Later:

        Promise
           ↓
    operation finishes
           ↓
      success OR failure
           ↓
        result


------------------------------------------------------------
Q2. Why do we need Promises?
------------------------------------------------------------

JavaScript often performs operations that take time.

For example:

Frontend
   ↓
Request API
   ↓
Internet
   ↓
Express server
   ↓
MongoDB
   ↓
Express response
   ↓
Frontend


This does not happen instantly.

JavaScript needs a way to say:

"Start this operation and tell me what happens when
it finishes."


Promises solve this problem.


------------------------------------------------------------
Q3. What is an asynchronous operation?
------------------------------------------------------------

An asynchronous operation is an operation whose result
is available later instead of immediately.


Example:

const result = fetch("/api/users");


The request takes time.

JavaScript does not need to freeze the entire application
while waiting for the server.


It can continue doing other work.


This is one of the most important concepts in JavaScript.


============================================================
                PROMISE STATES
============================================================


Q4. What are the three states of a Promise?
------------------------------------------------------------

A Promise has three main states:


1. PENDING

The operation is still running.


2. FULFILLED

The operation completed successfully.


3. REJECTED

The operation failed.


Think:


             PENDING
            /       \
           /         \
          ↓           ↓
     FULFILLED     REJECTED
       success       failure


A Promise starts as:

PENDING


Then it eventually becomes either:

FULFILLED

or:

REJECTED


------------------------------------------------------------
Q5. Can a Promise go back from fulfilled to pending?
------------------------------------------------------------

No.

Once a Promise is settled:

FULFILLED

or:

REJECTED


it cannot go back to:

PENDING


Also, a Promise can settle only once.


============================================================
              CREATING A PROMISE
============================================================


Q6. How do you create a Promise manually?
------------------------------------------------------------

Example:

const promise = new Promise((resolve, reject) => {

    // asynchronous operation

});


A Promise constructor receives a function called
the executor.

The executor receives two functions:

resolve

reject


------------------------------------------------------------
Q7. What is resolve?
------------------------------------------------------------

resolve() means:

"The operation succeeded."


Example:

const promise = new Promise((resolve, reject) => {

    resolve("Success");

});


The Promise becomes:

FULFILLED


with the value:

"Success"


------------------------------------------------------------
Q8. What is reject?
------------------------------------------------------------

reject() means:

"The operation failed."


Example:

const promise = new Promise((resolve, reject) => {

    reject("Something went wrong");

});


The Promise becomes:

REJECTED.


------------------------------------------------------------
Q9. What is the difference between resolve() and reject()?
------------------------------------------------------------

resolve()

→ success


reject()

→ failure


Example:

const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {

        resolve("Operation successful");

    } else {

        reject("Operation failed");

    }

});


============================================================
              REAL EXAMPLE
============================================================


Q10. Create a Promise that resolves after 2 seconds.
------------------------------------------------------------

Answer:

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve("Data received");

    }, 2000);

});


Initially:

PENDING


After 2 seconds:

FULFILLED


with:

"Data received"


------------------------------------------------------------
Q11. How do you get the result of a Promise?
------------------------------------------------------------

Using:

.then()


Example:

promise.then((result) => {

    console.log(result);

});


If the Promise resolves with:

"Data received"


then:

result

will contain:

"Data received"


------------------------------------------------------------
Q12. What does .then() do?
------------------------------------------------------------

.then() runs when the Promise is fulfilled.


Example:

promise.then((result) => {

    console.log(result);

});


Think:

Promise succeeds
      ↓
.then()
      ↓
success code


------------------------------------------------------------
Q13. What does .catch() do?
------------------------------------------------------------

.catch() handles Promise rejection/errors.


Example:

promise.catch((error) => {

    console.log(error);

});


Think:

Promise fails
      ↓
.catch()
      ↓
error handling


------------------------------------------------------------
Q14. What does .finally() do?
------------------------------------------------------------

.finally() runs after the Promise settles,
regardless of whether it succeeded or failed.


Example:

promise.finally(() => {

    console.log("Finished");

});


So:

SUCCESS → finally()

FAILURE → finally()


A common use case is stopping a loading indicator.


============================================================
             COMPLETE PROMISE FLOW
============================================================


const promise = fetch("/api/users");


promise
    .then((response) => {

        return response.json();

    })
    .then((data) => {

        console.log(data);

    })
    .catch((error) => {

        console.log(error);

    })
    .finally(() => {

        console.log("Request finished");

    });


Flow:


fetch()
   ↓
Promise
   ↓
.then()
   ↓
response.json()
   ↓
another Promise
   ↓
.then()
   ↓
data
   ↓
.catch() if something fails
   ↓
.finally() when finished


============================================================
              REAL INDUSTRY USE CASE #1
                    LOGIN API
============================================================


Imagine a MERN application.

User enters:

Email
Password

Then clicks:

Login


Frontend:

fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({
        email: email,
        password: password
    })
})


fetch() returns a Promise.


We can handle it:

fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({
        email: email,
        password: password
    })
})
.then((response) => {

    return response.json();

})
.then((data) => {

    console.log("Login successful");
    console.log(data);

})
.catch((error) => {

    console.log("Login failed");
});


Real flow:


User clicks Login
        ↓
Event handler
        ↓
fetch()
        ↓
Promise
        ↓
HTTP request
        ↓
Express backend
        ↓
Database
        ↓
Response
        ↓
Promise fulfilled/rejected
        ↓
.then() / .catch()
        ↓
Update UI


This is one of the most important real-world uses
of Promises for a MERN developer.


============================================================
              REAL INDUSTRY USE CASE #2
                  FETCH PRODUCTS
============================================================


Example:

fetch("/api/products")
.then((response) => {

    return response.json();

})
.then((products) => {

    console.log(products);

})
.catch((error) => {

    console.error(error);

});


Real application:


React page
   ↓
GET /api/products
   ↓
Express
   ↓
MongoDB
   ↓
Products
   ↓
JSON response
   ↓
Frontend
   ↓
Display products


Promises allow us to work with the response
when it becomes available.


============================================================
Q15. What is Promise chaining?
============================================================

When one .then() returns another Promise,
you can continue with another .then().


Example:

fetch("/api/users")
.then((response) => {

    return response.json();

})
.then((users) => {

    console.log(users);

});


Here:

fetch()
   ↓
response
   ↓
response.json()
   ↓
users


This is called:

Promise chaining.


------------------------------------------------------------
Q16. Why does response.json() need another .then()?
------------------------------------------------------------

Because:

response.json()


also returns a Promise.


So:

fetch()
    ↓
Promise
    ↓
response
    ↓
response.json()
    ↓
Promise
    ↓
JSON data


Therefore:

fetch("/api/users")
.then((response) => {

    return response.json();

})
.then((data) => {

    console.log(data);

});


------------------------------------------------------------
Q17. Why is return important in Promise chaining?
------------------------------------------------------------

Consider:

fetch("/api/users")
.then((response) => {

    return response.json();

})
.then((data) => {

    console.log(data);

});


The:

return response.json();


passes the resolved value to the next .then().


Without returning it:

fetch("/api/users")
.then((response) => {

    response.json();

})
.then((data) => {

    console.log(data);

});


the next .then() does not receive the JSON result
from response.json().


This is a very common beginner mistake.


============================================================
              PROMISE + ASYNC/AWAIT
============================================================


Q18. What is async/await?
------------------------------------------------------------

async/await is a cleaner way of working with Promises.


Instead of:

fetch("/api/users")
.then((response) => {

    return response.json();

})
.then((data) => {

    console.log(data);

});


We can write:

async function getUsers() {

    const response =
        await fetch("/api/users");

    const data =
        await response.json();

    console.log(data);

}


The underlying operation is still Promise-based.


This is extremely important for MERN development.


------------------------------------------------------------
Q19. Does await remove the Promise?
------------------------------------------------------------

No.

This is very important.


fetch()

still returns a Promise.


await simply waits for that Promise to settle
inside an async function.


Example:

const response = await fetch("/api/users");


Conceptually:

Promise
   ↓
await
   ↓
resolved value


------------------------------------------------------------
Q20. Where can await normally be used?
------------------------------------------------------------

Inside an async function.


Example:

async function getUsers() {

    const response =
        await fetch("/api/users");

}


Modern JavaScript also supports top-level await
in environments/modules that allow it.


For normal MERN development, first master:

async function
+
await


------------------------------------------------------------
Q21. What does async do to a function?
------------------------------------------------------------

An async function ALWAYS returns a Promise.


Example:

async function greet() {

    return "Hello";

}


Even though we returned:

"Hello"


the function actually returns a Promise
that fulfills with:

"Hello"


Therefore:

greet().then((message) => {

    console.log(message);

});


------------------------------------------------------------
Q22. What happens if an async function returns a value?
------------------------------------------------------------

Example:

async function getName() {

    return "Navneet";

}


The result is effectively:

Promise("Navneet")


So:

getName().then((name) => {

    console.log(name);

});


Output:

Navneet


------------------------------------------------------------
Q23. What happens if an async function throws an error?
------------------------------------------------------------

Example:

async function test() {

    throw new Error("Failed");

}


The returned Promise becomes:

REJECTED.


You can handle it with:

test().catch((error) => {

    console.log(error);

});


============================================================
              TRY / CATCH + ASYNC/AWAIT
============================================================


Q24. How do you handle errors with async/await?
------------------------------------------------------------

Use:

try/catch


Example:

async function getUsers() {

    try {

        const response =
            await fetch("/api/users");

        const data =
            await response.json();

        console.log(data);

    } catch (error) {

        console.error(error);

    }

}


Flow:

try
 ↓
Promise operation
 ↓
success → continue

failure
 ↓
catch


This is the common modern style used in MERN applications.


============================================================
              IMPORTANT FETCH DETAIL
============================================================


Q25. Does fetch() reject when the server returns
404 or 500?
------------------------------------------------------------

This is a VERY important point.

fetch() normally rejects for network-level failures,
but an HTTP error such as:

404
500
401
403

does NOT automatically cause fetch() to reject.


You should check:

response.ok


Example:

const response =
    await fetch("/api/users");


if (!response.ok) {

    throw new Error(
        `HTTP error: ${response.status}`
    );

}


Then:

catch

can handle it.


A production-quality request often checks:

response.ok


before treating the response as successful.


============================================================
              PROMISE.ALL()
============================================================


Q26. What is Promise.all()?
------------------------------------------------------------

Promise.all() allows you to run multiple Promises
and wait until ALL of them fulfill.


Example:

const usersPromise =
    fetch("/api/users");

const productsPromise =
    fetch("/api/products");

const ordersPromise =
    fetch("/api/orders");


const results = await Promise.all([
    usersPromise,
    productsPromise,
    ordersPromise
]);


All three requests can be in progress concurrently.


------------------------------------------------------------
Q27. Why is Promise.all() useful in real applications?
------------------------------------------------------------

Imagine a dashboard needs:

→ User information
→ Orders
→ Notifications


You could request them together:


const [
    userResponse,
    ordersResponse,
    notificationsResponse
] = await Promise.all([

    fetch("/api/user"),
    fetch("/api/orders"),
    fetch("/api/notifications")

]);


This can be much better than unnecessarily waiting
for each independent request one after another.


Flow:


Request 1 ────────→
Request 2 ─────→
Request 3 ──────────→

          ↓

     Wait for all


------------------------------------------------------------
Q28. What happens if one Promise in Promise.all() rejects?
------------------------------------------------------------

Promise.all() rejects as soon as one of its input
Promises rejects.


Example:

await Promise.all([

    promise1,
    promise2,
    promise3

]);


If promise2 rejects:

Promise.all()

rejects.


This is called:

fail-fast behavior.


------------------------------------------------------------
Q29. When should you NOT use Promise.all()?
------------------------------------------------------------

Do not use it when operations depend on each other.


Example:

Step 1:
Create user

↓

Step 2:
Use newly created user ID

↓

Step 3:
Create user's profile


These operations have dependencies.

You cannot meaningfully run all of them at the same
time.


Use sequential awaits:

const user = await createUser();

const profile =
    await createProfile(user.id);


============================================================
              OTHER PROMISE METHODS
============================================================


Q30. What is Promise.allSettled()?
------------------------------------------------------------

Promise.allSettled() waits for ALL Promises to finish,
whether they fulfill or reject.


Example:

const results = await Promise.allSettled([

    fetch("/api/users"),
    fetch("/api/products"),
    fetch("/api/orders")

]);


You receive information about each result.


Useful when:

"You want every operation's result,
even if some fail."


------------------------------------------------------------
Q31. What is Promise.race()?
------------------------------------------------------------

Promise.race() settles as soon as the FIRST input
Promise settles.

That can mean:

first fulfilled

OR

first rejected.


Useful for timeout patterns and "whichever finishes first"
logic.


------------------------------------------------------------
Q32. What is Promise.any()?
------------------------------------------------------------

Promise.any() fulfills when the FIRST input Promise
fulfills.


It ignores rejected Promises until all of them reject.


If all reject:

Promise.any()

rejects with an AggregateError.


A common conceptual use case:

Try multiple equivalent sources and use the first
successful result.


============================================================
              PROMISE.ALL VS RACE VS ANY
============================================================


Q33. What is the difference between all(), allSettled(),
race(), and any()?
------------------------------------------------------------

Promise.all()

→ Wait for ALL
→ Reject if ANY rejects


Promise.allSettled()

→ Wait for ALL
→ Gives every result
→ Never rejects because of an individual input rejection


Promise.race()

→ First Promise to SETTLE wins
→ Success OR failure


Promise.any()

→ First Promise to FULFILL wins
→ Rejects only if ALL reject


Remember:


ALL
    → Everyone must succeed


ALL SETTLED
    → Everyone must finish


RACE
    → First to finish wins


ANY
    → First success wins


============================================================
              PROMISE CONCURRENCY
============================================================


Q34. What is the difference between sequential and
concurrent Promise execution?
------------------------------------------------------------

Sequential:

const users =
    await fetchUsers();

const products =
    await fetchProducts();


The second operation starts after the first finishes.


Concurrent:

const usersPromise =
    fetchUsers();

const productsPromise =
    fetchProducts();


const users =
    await usersPromise;

const products =
    await productsPromise;


Both operations were started before waiting for
their results.


Or more clearly:

const [users, products] =
    await Promise.all([
        fetchUsers(),
        fetchProducts()
    ]);


Use concurrency when operations are independent.


============================================================
              COMMON PROMISE MISTAKES
============================================================


Q35. What is wrong here?

const result = fetch("/api/users");

console.log(result);
------------------------------------------------------------

Nothing is necessarily wrong.

But:

result

is a Promise, NOT the final user data.


You need:

const response =
    await fetch("/api/users");


or:

fetch("/api/users")
.then(...);


------------------------------------------------------------
Q36. What is wrong here?

const data = fetch("/api/users");

console.log(data.name);
------------------------------------------------------------

Wrong because:

data

is a Promise.

The actual user data is available later.


You must first wait for the Promise.


------------------------------------------------------------
Q37. What is wrong here?

async function getUsers() {

    const data =
        await fetch("/api/users");

    return data;

}

console.log(getUsers());
------------------------------------------------------------

getUsers() returns a Promise.

It does NOT directly return the final value.


You would use:

const data = await getUsers();


inside an async context.


Or:

getUsers().then((data) => {

    console.log(data);

});


------------------------------------------------------------
Q38. What happens if you forget await?
------------------------------------------------------------

Example:

const response =
    fetch("/api/users");


response is:

Promise<Response>


not:

Response


If you need the resolved result:

const response =
    await fetch("/api/users");


------------------------------------------------------------
Q39. What is wrong with this?

const response =
    await fetch("/api/users");

const data =
    response.json();

console.log(data);
------------------------------------------------------------

response.json()

returns a Promise.


So:

data

is still a Promise.


Correct:

const data =
    await response.json();


------------------------------------------------------------
Q40. What is wrong with this?

try {

    fetch("/api/users");

} catch (error) {

    console.log(error);

}
------------------------------------------------------------

The try/catch does not automatically catch a later
Promise rejection if the Promise is not awaited/handled.


Correct:

try {

    await fetch("/api/users");

} catch (error) {

    console.log(error);

}


Or use:

fetch("/api/users")
    .catch((error) => {
        console.log(error);
    });


============================================================
              PROMISES IN NODE / EXPRESS
============================================================


Q41. Are Promises used in the Express backend?
------------------------------------------------------------

Yes.

Very frequently.


For example, database operations are asynchronous.


Example:

app.get("/users", async (req, res) => {

    const users = await User.find();

    res.json(users);

});


Mongoose's:

User.find()

returns a Promise.


So:

await User.find();


waits for the database result.


------------------------------------------------------------
Q42. Give a real MERN backend example.
------------------------------------------------------------

Example:

app.get("/products", async (req, res) => {

    try {

        const products =
            await Product.find();

        res.json(products);

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch products"
        });

    }

});


Flow:


React
 ↓
GET /api/products
 ↓
Express
 ↓
Product.find()
 ↓
Promise
 ↓
MongoDB
 ↓
Promise fulfilled
 ↓
products
 ↓
res.json(products)
 ↓
React


Promises are everywhere in MERN applications.


============================================================
              PROMISES + DATABASE
============================================================


Q43. Why is MongoDB/Mongoose code commonly written
with await?
------------------------------------------------------------

Because database operations are asynchronous.


Example:

const user =
    await User.findOne({
        email: "user@example.com"
    });


Mongoose returns a Promise-like query that can
be awaited.


Without waiting, you do not yet have the final
database result.


============================================================
              PROMISES + ERROR HANDLING
============================================================


Q44. What is a good production pattern for async Express routes?
------------------------------------------------------------

Basic pattern:

app.get("/users", async (req, res) => {

    try {

        const users =
            await User.find();

        res.status(200).json(users);

    } catch (error) {

        res.status(500).json({
            message: "Internal server error"
        });

    }

});


This gives you:

async
+
await
+
try/catch
+
HTTP response


These are essential backend skills.


============================================================
              PROMISES + CALLBACKS
============================================================


Q45. What problem did Promises help solve?
------------------------------------------------------------

Before Promises, asynchronous JavaScript was often
written using nested callbacks.


Example:

doSomething((result) => {

    doSomethingElse(result, (result2) => {

        doAnotherThing(result2, (result3) => {

            console.log(result3);

        });

    });

});


Deep nesting can become difficult to read and maintain.


This is commonly called:

Callback Hell.


Promises provide a cleaner structure:

doSomething()
    .then(doSomethingElse)
    .then(doAnotherThing)
    .catch(handleError);


And async/await makes it even more readable.


============================================================
              PROMISE MICROTASK CONCEPT
============================================================


Q46. Do Promise callbacks execute immediately?
------------------------------------------------------------

No.

Promise handlers such as:

.then()

.catch()

.finally()


run asynchronously through the JavaScript
microtask queue.


Example:

console.log("A");

Promise.resolve().then(() => {

    console.log("B");

});

console.log("C");


Output:

A
C
B


Why?

The synchronous code runs first.

Then the Promise callback runs as a microtask.


------------------------------------------------------------
Q47. What is the output?

console.log("1");

Promise.resolve().then(() => {
    console.log("2");
});

console.log("3");
------------------------------------------------------------

Answer:

1
3
2


Because the Promise callback runs after the current
synchronous code finishes.


You should understand this conceptually for interviews.


============================================================
              PROMISE + SETTIMEOUT
============================================================


Q48. Which runs first?

Promise.resolve().then(() => {
    console.log("Promise");
});

setTimeout(() => {
    console.log("Timeout");
}, 0);
------------------------------------------------------------

Answer:

Promise

then:

Timeout


Typical output:

Promise
Timeout


Promise callbacks use the microtask queue,
which is processed before the timer task in this case.


You don't need to memorize the entire event loop yet,
but you should understand that Promises are asynchronous
and their handlers use microtasks.


============================================================
              MERN INDUSTRY PATTERN
============================================================


Q49. Show the complete frontend Promise pattern.
------------------------------------------------------------

Example:

async function getProducts() {

    try {

        const response =
            await fetch("/api/products");

        if (!response.ok) {

            throw new Error(
                "Failed to fetch products"
            );

        }

        const products =
            await response.json();

        console.log(products);

    } catch (error) {

        console.error(error);

    }

}


This is a very useful pattern to understand.


Flow:


async function
      ↓
await fetch()
      ↓
Promise
      ↓
HTTP response
      ↓
check response.ok
      ↓
await response.json()
      ↓
data
      ↓
use data


============================================================
              INTERVIEW QUESTIONS
============================================================


Q50. What is a Promise?

Answer:

"A Promise is an object representing the eventual
completion or failure of an asynchronous operation
and its resulting value."


------------------------------------------------------------
Q51. What are the states of a Promise?

Answer:

Pending

Fulfilled

Rejected


------------------------------------------------------------
Q52. What is resolve()?

Answer:

It fulfills the Promise with a value.


------------------------------------------------------------
Q53. What is reject()?

Answer:

It rejects the Promise with a reason/error.


------------------------------------------------------------
Q54. What does .then() do?

Answer:

It registers a callback that runs when the Promise
fulfills.


------------------------------------------------------------
Q55. What does .catch() do?

Answer:

It handles Promise rejection/errors.


------------------------------------------------------------
Q56. What does .finally() do?

Answer:

It runs after the Promise settles, regardless of
whether it fulfilled or rejected.


------------------------------------------------------------
Q57. What is async/await?

Answer:

A syntax built on top of Promises that makes
asynchronous code easier to read and write.


------------------------------------------------------------
Q58. Does async always return a Promise?

Answer:

Yes.


------------------------------------------------------------
Q59. What does await do?

Answer:

It pauses execution of the surrounding async function
until the awaited Promise settles and gives you its
fulfilled value, or throws if it rejects.


------------------------------------------------------------
Q60. What is Promise.all()?

Answer:

It waits for multiple Promises and fulfills when all
fulfill. It rejects if any input Promise rejects.


------------------------------------------------------------
Q61. What is Promise.allSettled()?

Answer:

It waits for all input Promises to settle and provides
the outcome of each one.


------------------------------------------------------------
Q62. What is Promise.race()?

Answer:

It settles with the first input Promise to settle.


------------------------------------------------------------
Q63. What is Promise.any()?

Answer:

It fulfills with the first input Promise to fulfill.
It rejects if all input Promises reject.


------------------------------------------------------------
Q64. Why is Promise chaining useful?

Answer:

It allows asynchronous operations to be performed in
sequence while passing results between steps.


------------------------------------------------------------
Q65. Why is async/await commonly preferred in MERN code?

Answer:

Because it often makes asynchronous code easier to read,
especially when there are multiple dependent operations
and try/catch error handling.


============================================================
              PRACTICE QUESTIONS
============================================================


Q66. What will this print?

const promise = Promise.resolve("Hello");

promise.then((value) => {

    console.log(value);

});


Answer:

Hello


------------------------------------------------------------
Q67. What will this print?

console.log("Start");

Promise.resolve().then(() => {

    console.log("Middle");

});

console.log("End");


Answer:

Start
End
Middle


------------------------------------------------------------
Q68. What does this function return?

async function test() {

    return 10;

}


Answer:

A Promise that fulfills with:

10


------------------------------------------------------------
Q69. What happens here?

async function test() {

    throw new Error("Failed");

}


Answer:

The function returns a rejected Promise.


------------------------------------------------------------
Q70. Complete this code:

fetch("/api/users")
    .then(__________)
    .then(__________)
    .catch(__________);
------------------------------------------------------------

Answer:

fetch("/api/users")
    .then((response) => {

        return response.json();

    })
    .then((data) => {

        console.log(data);

    })
    .catch((error) => {

        console.error(error);

    });


------------------------------------------------------------
Q71. Convert this Promise chain into async/await:

fetch("/api/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});
------------------------------------------------------------

Answer:

async function getUsers() {

    try {

        const response =
            await fetch("/api/users");

        const data =
            await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}


------------------------------------------------------------
Q72. You need users, products, and orders independently.
How should you request them?
------------------------------------------------------------

Answer:

Use Promise.all():

const [
    users,
    products,
    orders
] = await Promise.all([

    getUsers(),
    getProducts(),
    getOrders()

]);


This allows the independent operations to run
concurrently.


============================================================
              WHAT YOU REALLY NEED TO MASTER
============================================================


For MERN development, MASTER these first:


1. What a Promise is

2. Pending / Fulfilled / Rejected

3. resolve()

4. reject()

5. .then()

6. .catch()

7. .finally()

8. Promise chaining

9. async

10. await

11. try/catch

12. fetch() returns a Promise

13. response.json() returns a Promise

14. Check response.ok for fetch()

15. Promise.all()

16. Sequential vs concurrent async operations

17. Mongoose/database operations with await

18. Async Express route handlers

19. Error handling

20. Basic event loop/microtask understanding


You do NOT need to memorize every Promise API immediately.


============================================================
              MOST IMPORTANT MENTAL MODEL
============================================================


                    ASYNC OPERATION
                          ↓
                       Promise
                          ↓
                 ┌────────┴────────┐
                 ↓                 ↓
              SUCCESS            FAILURE
                 ↓                 ↓
              resolve            reject
                 ↓                 ↓
              .then()           .catch()


With async/await:


             async function
                   ↓
                await
                   ↓
              Promise
                   ↓
        ┌──────────┴──────────┐
        ↓                     ↓
     success               failure
        ↓                     ↓
   continue code          catch(error)


============================================================
                  MERN BIG PICTURE
============================================================


USER
 ↓
Click Login
 ↓
React event handler
 ↓
fetch()
 ↓
Promise
 ↓
HTTP request
 ↓
Express
 ↓
Mongoose
 ↓
MongoDB
 ↓
Promise
 ↓
Database result
 ↓
Express response
 ↓
Frontend Promise resolves
 ↓
await / .then()
 ↓
Update React state
 ↓
React re-renders
 ↓
USER SEES RESULT


This is why Promises are one of the CORE concepts
you need to understand before going deeper into:

→ Fetch API
→ Axios
→ REST APIs
→ Express
→ MongoDB/Mongoose
→ Authentication
→ React API calls
→ useEffect
→ async/await
→ Error handling
→ Full-stack MERN development


FINAL RULE:

Don't think:

"Promise = API"


Think:

"Promise = a JavaScript object representing a result
that will be available later."


API requests are just ONE of the most common places
where you encounter Promises.
============================================================

*/