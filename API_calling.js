/*
# API CALLING IN JAVASCRIPT — MERN DEVELOPER GUIDE

============================================================
1. WHAT IS AN API?
============================================================

API stands for:

    Application Programming Interface

In simple words:

    An API allows two different software systems to communicate
    with each other.

For a MERN application:

    React (Frontend)
          |
          | API Request
          ↓
    Node + Express (Backend)
          |
          | Database Query
          ↓
    MongoDB
          |
          | Data
          ↓
    Express
          |
          | API Response
          ↓
    React
          |
          ↓
    User sees the data


REAL INDUSTRY EXAMPLE:

Suppose you open Amazon and search for:

    "iPhone"

React/frontend sends:

    GET /api/products?search=iPhone

Backend receives the request.

Backend asks MongoDB:

    "Give me products matching iPhone"

MongoDB returns products.

Backend sends JSON:

    [
        {
            "name": "iPhone 16",
            "price": 79999
        },
        {
            "name": "iPhone 16 Pro",
            "price": 119999
        }
    ]

React receives this data and displays the products.

This complete communication is called API communication/API calling.


============================================================
2. WHAT IS API CALLING?
============================================================

API calling means:

    Sending a request to an API
    and receiving a response from that API.

Example:

    Frontend
       ↓
    fetch("/api/products")
       ↓
    Backend
       ↓
    MongoDB
       ↓
    Backend
       ↓
    JSON response
       ↓
    Frontend


============================================================
3. WHAT IS fetch()?
============================================================

JavaScript provides fetch() to make HTTP requests.

Example:

    fetch("/api/products");


fetch() returns a Promise.

So normally we use:

    const response = await fetch("/api/products");


Important:

    fetch()
        ↓
    returns Promise
        ↓
    await
        ↓
    response


QUESTION:
Does fetch() immediately give you the actual data?

ANSWER:

No.

fetch() gives you a Promise representing the future response.


============================================================
4. BASIC GET REQUEST
============================================================

GET is used when we want to READ data.

Example:

    async function getProducts() {

        const response = await fetch("/api/products");

        const data = await response.json();

        console.log(data);
    }


FLOW:

    fetch()
       ↓
    HTTP Response
       ↓
    response.json()
       ↓
    JavaScript object/array


IMPORTANT:

response.json() is ALSO asynchronous.

So:

    const response = await fetch("/api/products");

    const data = await response.json();


Both need await.


============================================================
5. REAL MERN EXAMPLE
============================================================

FRONTEND:

    async function getProducts() {

        const response = await fetch(
            "http://localhost:5000/api/products"
        );

        const data = await response.json();

        console.log(data);
    }


BACKEND:

    app.get("/api/products", async (req, res) => {

        const products = await Product.find();

        res.json(products);
    });


DATABASE:

    MongoDB
        ↓
    Product.find()
        ↓
    products
        ↓
    res.json(products)
        ↓
    React


This is the basic MERN API flow.


============================================================
6. HTTP METHODS
============================================================

As a MERN developer, you mainly need these:

    GET
    POST
    PUT
    PATCH
    DELETE


GET
----

Used to READ data.

Example:

    GET /api/products


Meaning:

    "Give me products."


POST
----

Used to CREATE data.

Example:

    POST /api/products


Meaning:

    "Create a new product."


PUT
---

Usually used to replace/update an entire resource.

Example:

    PUT /api/products/123


PATCH
-----

Used to partially update a resource.

Example:

    PATCH /api/products/123

DELETE
------
Used to delete data.
Example:

    DELETE /api/products/123


Easy way to remember:

    GET       → READ
    POST      → CREATE
    PUT/PATCH → UPDATE
    DELETE    → DELETE


============================================================
7. POST REQUEST
============================================================

Suppose user creates an account.

Frontend sends:

    POST /api/users

with data:

    {
        "name": "Navneet",
        "email": "navneet@example.com",
        "password": "123456"
    }


JavaScript:

    const response = await fetch("/api/users", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: "Navneet",
            email: "navneet@example.com",
            password: "123456"
        })
    });


IMPORTANT PARTS:

    method
        ↓
    HTTP method

    headers
        ↓
    information about the request

    body
        ↓
    data we are sending


============================================================
8. WHY JSON.stringify()?
============================================================

JavaScript object:

    {
        name: "Navneet",
        age: 20
    }


HTTP request body commonly sends JSON text.

So:

    JSON.stringify({
        name: "Navneet",
        age: 20
    });


becomes:

    '{"name":"Navneet","age":20}'


Think:

    JavaScript Object
          ↓
    JSON.stringify()
          ↓
    JSON text
          ↓
    HTTP request


On the backend:

    express.json()

converts incoming JSON into a JavaScript object.

Example:

    app.use(express.json());


Then:

    req.body


contains:

    {
        name: "Navneet",
        age: 20
    }


============================================================
9. HEADERS
============================================================

Headers contain additional information about a request.

Example:

    headers: {
        "Content-Type": "application/json"
    }


This tells the backend:

    "I am sending JSON data."


Another very important header:

    Authorization


Example:

    headers: {
        Authorization: `Bearer ${token}`
    }


This is commonly used for authentication.


============================================================
10. REQUEST BODY
============================================================

Body contains data sent to the server.

Example:

    POST /api/users

    body:

    {
        "name": "Navneet",
        "email": "navneet@gmail.com"
    }


Backend:

    app.post("/api/users", (req, res) => {

        console.log(req.body);

    });


You will frequently use:

    req.body


in Express.


============================================================
11. URL PARAMETERS
============================================================

Suppose:

    GET /api/products/123


Here:

    123

can be a product ID.

Express:

    app.get("/api/products/:id", (req, res) => {

        console.log(req.params.id);

    });


Output:

    123


Frontend:

    fetch("/api/products/123");


Backend:

    req.params.id


Use params when the value identifies a specific resource.


============================================================
12. QUERY PARAMETERS
============================================================

Example:

    /api/products?category=mobile&sort=price


These are query parameters.

Backend:

    req.query


Example:

    app.get("/api/products", (req, res) => {

        console.log(req.query);

    });


You may get:

    {
        category: "mobile",
        sort: "price"
    }


Real industry use:

    Search
    Filtering
    Sorting
    Pagination


Example:

    /api/products?page=2&limit=10

    /api/products?search=iphone

    /api/products?category=laptop


============================================================
13. PARAMS VS QUERY
============================================================

PARAM:

    /products/123

    req.params.id


Usually identifies a specific resource.


QUERY:

    /products?category=mobile

    req.query.category


Usually controls filtering/search/sorting/pagination.


Easy memory:

    /products/123
              ↑
            params


    /products?category=mobile
              ↑
            query


============================================================
14. API RESPONSE
============================================================

Backend sends a response.

Example:

    res.json({
        message: "Product created successfully"
    });


Frontend:

    const response = await fetch("/api/products");

    const data = await response.json();


data could be:

    {
        message: "Product created successfully"
    }


Most MERN APIs return JSON.


============================================================
15. HTTP STATUS CODES
============================================================

You MUST understand these.

200
----

    Success

Example:

    Product fetched successfully.


201
----

    Created

Example:

    New user successfully created.


400
----

    Bad Request

Example:

    Required email is missing.


401
----

    Unauthorized

Example:

    User is not logged in / token invalid.


403
----

    Forbidden

Example:

    User is logged in but doesn't have permission.


404
----

    Not Found

Example:

    Product does not exist.


500
----

    Internal Server Error

Example:

    Something went wrong on the server.


Important:

    401 ≠ 403

    401 → You are not properly authenticated.

    403 → You are authenticated but not allowed.


============================================================
16. response.ok
============================================================

With fetch():

    const response = await fetch("/api/products");


You should often check:

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }


Then:

    const data = await response.json();


Why?

Because fetch() does NOT automatically reject the Promise
for HTTP errors such as:

    404
    500


So this is a good pattern:

    const response = await fetch("/api/products");

    if (!response.ok) {
        throw new Error("Request failed");
    }

    const data = await response.json();


============================================================
17. ERROR HANDLING
============================================================

Industry-style basic pattern:

    async function getProducts() {

        try {

            const response = await fetch("/api/products");

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const data = await response.json();

            console.log(data);

        } catch (error) {

            console.error(error);

        }
    }


Flow:

    API call
       ↓
    success?
       ↓
      YES
       ↓
    process data

    NO
       ↓
    catch error


In React, you might show:

    "Unable to load products."


instead of only console.error().


============================================================
18. API CALLING IN REACT
============================================================

Usually API calls are made inside useEffect when you want
data when a component loads.

Example:

    import { useEffect, useState } from "react";

    function Products() {

        const [products, setProducts] = useState([]);

        useEffect(() => {

            async function getProducts() {

                const response = await fetch("/api/products");

                const data = await response.json();

                setProducts(data);
            }

            getProducts();

        }, []);

        return (
            <div>
                {products.map((product) => (
                    <p key={product._id}>
                        {product.name}
                    </p>
                ))}
            </div>
        );
    }


Flow:

    Component loads
          ↓
    useEffect()
          ↓
    fetch()
          ↓
    Express API
          ↓
    MongoDB
          ↓
    response
          ↓
    setProducts()
          ↓
    React re-renders
          ↓
    Products appear


============================================================
19. LOADING STATE
============================================================

Real applications should handle loading.

Example:

    const [loading, setLoading] = useState(true);


    async function getProducts() {

        try {

            setLoading(true);

            const response = await fetch("/api/products");

            if (!response.ok) {
                throw new Error("Failed");
            }

            const data = await response.json();

            setProducts(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    }


UI:

    if (loading) {
        return <p>Loading...</p>;
    }


Real websites should not leave the user wondering whether
the application is working.


============================================================
20. ERROR STATE
============================================================

You should usually maintain:

    loading
    data
    error


Example:

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


This gives you:

    Loading
       ↓
    API request
       ↓
    ┌───────────────┐
    │               │
  Success         Error
    │               │
    ↓               ↓
  data            error


This is a very common React pattern.


============================================================
21. ASYNC/AWAIT + API CALLING
============================================================

You should be very comfortable with this:

    async function getUser() {

        try {

            const response = await fetch("/api/user");

            if (!response.ok) {
                throw new Error("Failed");
            }

            const user = await response.json();

            console.log(user);

        } catch (error) {

            console.error(error);

        }
    }


Remember:

    async
      ↓
    allows await

    await
      ↓
    waits for Promise result

    fetch
      ↓
    returns Promise

    response.json()
      ↓
    returns Promise


============================================================
22. API CALLING WITH AXIOS
============================================================

In MERN projects you may see:

    fetch()

or:

    axios


Example with Axios:

    const response = await axios.get("/api/products");

    console.log(response.data);


POST:

    const response = await axios.post(
        "/api/users",
        {
            name: "Navneet",
            email: "navneet@gmail.com"
        }
    );


With Axios:

    response.data

usually directly gives the response body.


With fetch:

    const response = await fetch(...);

    const data = await response.json();


You don't need to master Axios immediately.

First become strong with fetch.


============================================================
23. API + AUTHENTICATION
============================================================

Real MERN applications often have:

    Login
       ↓
    Backend verifies credentials
       ↓
    Backend generates token
       ↓
    Frontend stores token
       ↓
    Frontend sends token with future requests


Example:

    const response = await fetch("/api/profile", {

        headers: {
            Authorization: `Bearer ${token}`
        }
    });


Backend:

    req.headers.authorization


Middleware verifies the token.

Then:

    request allowed
         OR
    request rejected


This is one of the most important real-world API flows.


============================================================
24. CORS
============================================================

Suppose:

Frontend:

    http://localhost:5173


Backend:

    http://localhost:5000


These are different origins.

The browser may block requests unless the backend
allows the frontend origin.

This is where CORS comes in.

Express commonly uses:

    import cors from "cors";

    app.use(cors());


In production, you should configure allowed origins
properly instead of blindly allowing everything.


Important:

CORS is mainly a browser security mechanism.

It does NOT mean:

    "Frontend and backend cannot communicate."


It means:

    "The browser controls which cross-origin requests
     frontend JavaScript is allowed to make."


============================================================
25. API ROUTE STRUCTURE IN EXPRESS
============================================================

A clean MERN backend often looks like:

    /api/users
    /api/products
    /api/orders
    /api/auth


Example:

    app.use("/api/products", productRoutes);


Then inside routes:

    router.get("/", getProducts);

    router.get("/:id", getProduct);

    router.post("/", createProduct);

    router.patch("/:id", updateProduct);

    router.delete("/:id", deleteProduct);


This is much cleaner than putting everything in server.js.


============================================================
26. REAL INDUSTRY EXAMPLE — E-COMMERCE
============================================================

Imagine a product page.

User clicks:

    "Add to Cart"


React:

    POST /api/cart


Request:

    {
        productId: "123",
        quantity: 2
    }


Express:

    router.post("/cart", addToCart);


Controller:

    const product = await Product.findById(productId);

    // update cart


MongoDB:

    Save cart


Backend:

    res.status(200).json(updatedCart);


React:

    setCart(updatedCart);


UI:

    Cart count changes from:

        2

    to:

        4


Complete flow:

    User
      ↓
    React event
      ↓
    API call
      ↓
    Express route
      ↓
    Controller
      ↓
    MongoDB
      ↓
    Response
      ↓
    React state
      ↓
    UI update


This is the kind of API flow you will work with as a MERN developer.


============================================================
27. API LAYER IN REAL PROJECTS
============================================================

In a small project:

    fetch("/api/products")


may be enough.

But in a larger project, you may create:

    services/
        productApi.js
        userApi.js
        orderApi.js


Example:

    export async function getProducts() {

        const response = await fetch("/api/products");

        if (!response.ok) {
            throw new Error("Failed");
        }

        return response.json();
    }


Then React:

    const products = await getProducts();


This keeps API logic separate from UI logic.


============================================================
28. NEVER TRUST FRONTEND DATA
============================================================

This is VERY important.

Suppose frontend sends:

    {
        price: 100,
        quantity: 5
    }


Do NOT blindly trust it.

A malicious user can modify the request.

Backend should validate:

    price
    quantity
    user permissions
    product existence
    stock
    authentication
    authorization


Frontend validation improves user experience.

Backend validation provides security.


Remember:

    Frontend validation
        =
    User experience


    Backend validation
        =
    Security + correctness


============================================================
29. API CALLING AND SECURITY
============================================================

As a MERN developer, understand these basics:

    1. Never trust req.body.

    2. Validate input.

    3. Authenticate users.

    4. Authorize users.

    5. Hash passwords.

    6. Use HTTPS in production.

    7. Do not expose secrets in frontend code.

    8. Never put database credentials in React.

    9. Handle errors properly.

    10. Validate IDs and request parameters.

    11. Use appropriate CORS configuration.

    12. Protect sensitive routes.


============================================================
30. COMMON API MISTAKES
============================================================

MISTAKE 1:

    const data = fetch("/api/products");

    console.log(data);


This prints a Promise.

Correct:

    const response = await fetch("/api/products");

    const data = await response.json();


------------------------------------------------------------

MISTAKE 2:

    const response = await fetch("/api/products");

    console.log(response);


Thinking response itself is the data.

Correct:

    const data = await response.json();


------------------------------------------------------------

MISTAKE 3:

Not checking:

    response.ok


Correct:

    if (!response.ok) {
        throw new Error("Request failed");
    }


------------------------------------------------------------

MISTAKE 4:

Sending object directly:

    body: {
        name: "Navneet"
    }


Usually incorrect for JSON.

Correct:

    body: JSON.stringify({
        name: "Navneet"
    });


------------------------------------------------------------

MISTAKE 5:

Forgetting:

    Content-Type


Correct:

    headers: {
        "Content-Type": "application/json"
    }


------------------------------------------------------------

MISTAKE 6:

Putting database credentials in React.

NEVER DO THIS.


============================================================
31. API CALLING VS API
============================================================

API:

    The interface/endpoints through which systems communicate.


API calling:

    Actually sending a request to that API.


Example:

    API:

    GET /api/products


    API call:

    fetch("/api/products")


Think:

    API = Door

    API call = Opening the door and asking for something


============================================================
32. API REQUEST VS API RESPONSE
============================================================

REQUEST:

Frontend → Backend


Contains things like:

    method
    URL
    headers
    params
    query
    body


RESPONSE:

Backend → Frontend


Contains things like:

    status code
    headers
    JSON data
    error information


Mental model:

    REQUEST
       ↓
    "Here is what I want."

       ↓

    BACKEND

       ↓

    RESPONSE
       ↓
    "Here is the result."


============================================================
33. THE MOST IMPORTANT API CONCEPTS FOR MERN
============================================================

You should know these REALLY well:

    ✓ What an API is

    ✓ What API calling means

    ✓ HTTP

    ✓ GET

    ✓ POST

    ✓ PUT

    ✓ PATCH

    ✓ DELETE

    ✓ fetch()

    ✓ Promises

    ✓ async/await

    ✓ request

    ✓ response

    ✓ headers

    ✓ body

    ✓ JSON

    ✓ JSON.stringify()

    ✓ response.json()

    ✓ status codes

    ✓ response.ok

    ✓ req.body

    ✓ req.params

    ✓ req.query

    ✓ Authentication

    ✓ Authorization

    ✓ JWT basics

    ✓ CORS basics

    ✓ Loading state

    ✓ Error state

    ✓ React API calls

    ✓ Express routes

    ✓ Controllers

    ✓ MongoDB/Mongoose interaction

    ✓ API validation

    ✓ Basic API security


You do NOT need to memorize every HTTP specification.


============================================================
34. INTERVIEW QUESTIONS
============================================================

Q1. What is an API?

ANSWER:

An API is an interface that allows different software systems
to communicate with each other.


------------------------------------------------------------

Q2. What is API calling?

ANSWER:

API calling means sending a request to an API and receiving
a response.


------------------------------------------------------------

Q3. What does fetch() return?

ANSWER:

fetch() returns a Promise that resolves to a Response object.


------------------------------------------------------------

Q4. Does fetch() directly return JSON data?

ANSWER:

No.

It returns a Response object.

We use:

    response.json()

to read the JSON body.


------------------------------------------------------------

Q5. Why is response.json() asynchronous?

ANSWER:

Because reading and parsing the response body takes time,
so it returns a Promise.


------------------------------------------------------------

Q6. What is GET used for?

ANSWER:

Reading/fetching data.


------------------------------------------------------------

Q7. What is POST used for?

ANSWER:

Creating/sending new data.


------------------------------------------------------------

Q8. What is PATCH used for?

ANSWER:

Partially updating existing data.


------------------------------------------------------------

Q9. What is DELETE used for?

ANSWER:

Deleting data.


------------------------------------------------------------

Q10. What is req.body?

ANSWER:

It contains data sent in the request body.


------------------------------------------------------------

Q11. What is req.params?

ANSWER:

It contains route parameters.

Example:

    /users/:id

Then:

    req.params.id


------------------------------------------------------------

Q12. What is req.query?

ANSWER:

It contains query parameters.

Example:

    /products?search=phone

Then:

    req.query.search


------------------------------------------------------------

Q13. What is the difference between params and query?

ANSWER:

Params usually identify a specific resource.

Query parameters usually control filtering, searching,
sorting, or pagination.


------------------------------------------------------------

Q14. What does JSON.stringify() do?

ANSWER:

It converts a JavaScript value/object into a JSON string.


------------------------------------------------------------

Q15. What does response.json() do?

ANSWER:

It reads the response body and parses JSON into a JavaScript
value.


------------------------------------------------------------

Q16. Does fetch reject when the server returns 404?

ANSWER:

Usually no.

fetch() can successfully receive an HTTP response with
status 404.

You should check:

    response.ok


------------------------------------------------------------

Q17. What does status 200 mean?

ANSWER:

Successful request.


------------------------------------------------------------

Q18. What does 201 mean?

ANSWER:

Resource successfully created.


------------------------------------------------------------

Q19. What does 400 mean?

ANSWER:

Bad request.


------------------------------------------------------------

Q20. What does 401 mean?

ANSWER:

Authentication is missing or invalid.


------------------------------------------------------------

Q21. What does 403 mean?

ANSWER:

The user is authenticated but does not have permission.


------------------------------------------------------------

Q22. What does 404 mean?

ANSWER:

Requested resource was not found.


------------------------------------------------------------

Q23. What does 500 mean?

ANSWER:

Internal server error.


------------------------------------------------------------

Q24. Why do we use try/catch with API calls?

ANSWER:

To handle errors from asynchronous operations.


------------------------------------------------------------

Q25. What is CORS?

ANSWER:

CORS is a browser security mechanism that controls whether
frontend JavaScript can make requests to another origin.


------------------------------------------------------------

Q26. Why do we use Authorization headers?

ANSWER:

To send authentication credentials, commonly a token,
with a request.


------------------------------------------------------------

Q27. Why should backend validation always exist?

ANSWER:

Because frontend data can be manipulated.

The backend must never blindly trust the client.


------------------------------------------------------------

Q28. What is the difference between authentication
and authorization?

ANSWER:

Authentication:

    "Who are you?"

Authorization:

    "What are you allowed to do?"


------------------------------------------------------------

Q29. Where does API calling fit into MERN?

ANSWER:

React
  ↓
API call
  ↓
Express
  ↓
Controller
  ↓
Mongoose
  ↓
MongoDB

Then the response travels back to React.


============================================================
35. PRACTICE QUESTIONS
============================================================

Try answering these yourself before looking at the answers.


Q30. Write a GET API call to:

    /api/products


ANSWER:

    const response = await fetch("/api/products");

    const data = await response.json();


------------------------------------------------------------

Q31. Write a POST request to create a user.

ANSWER:

    const response = await fetch("/api/users", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: "Navneet",
            email: "navneet@gmail.com"
        })
    });


------------------------------------------------------------

Q32. How would you check whether the request failed?

ANSWER:

    if (!response.ok) {
        throw new Error("Request failed");
    }


------------------------------------------------------------

Q33. Backend route:

    /api/products/:id

Frontend calls:

    /api/products/50

What is:

    req.params.id

ANSWER:

    50


------------------------------------------------------------

Q34. URL:

    /api/products?category=mobile

What is:

    req.query.category

ANSWER:

    "mobile"


------------------------------------------------------------

Q35. Why do we use JSON.stringify() in a POST request?

ANSWER:

To convert the JavaScript object into JSON text that can be
sent as the request body.


------------------------------------------------------------

Q36. What happens after React calls:

    fetch("/api/products")

ANSWER:

    React
      ↓
    HTTP request
      ↓
    Express route
      ↓
    Controller
      ↓
    MongoDB
      ↓
    Response
      ↓
    Promise resolves
      ↓
    response.json()
      ↓
    Data
      ↓
    setState()
      ↓
    React re-renders


============================================================
36. ONE COMPLETE MERN EXAMPLE
============================================================

FRONTEND:

    async function createProduct() {

        try {

            const response = await fetch("/api/products", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "Laptop",
                    price: 60000
                })
            });

            if (!response.ok) {
                throw new Error("Failed to create product");
            }

            const data = await response.json();

            console.log(data);

        } catch (error) {

            console.error(error);

        }
    }


BACKEND:

    router.post("/products", async (req, res) => {

        try {

            const { name, price } = req.body;

            const product = await Product.create({
                name,
                price
            });

            res.status(201).json(product);

        } catch (error) {

            res.status(500).json({
                message: "Failed to create product"
            });
        }
    });


DATABASE:

    MongoDB
        ↑
    Mongoose
        ↑
    Express
        ↑
    fetch()
        ↑
    React


This is the basic pattern you should understand deeply.


============================================================
37. FINAL MENTAL MODEL
============================================================

Whenever you see:

    fetch("/api/products")


Think:

    1. Where is the frontend?

    2. What URL is being called?

    3. Which HTTP method?

    4. Is there a request body?

    5. Are there headers?

    6. Are there params/query parameters?

    7. Which Express route receives it?

    8. Which controller runs?

    9. What database operation happens?

    10. What status code is returned?

    11. What JSON is returned?

    12. How does React handle the response?

    13. What happens if the request fails?


============================================================
38. THE BIG MERN PICTURE
============================================================

                    USER
                      ↓
                 React UI
                      ↓
                Event Handler
                      ↓
                  fetch()
                      ↓
                HTTP REQUEST
                      ↓
             Express API Route
                      ↓
                Controller
                      ↓
                 Mongoose
                      ↓
                  MongoDB
                      ↓
                  Database
                      ↓
                Mongoose
                      ↓
                Controller
                      ↓
             HTTP RESPONSE
                      ↓
              React receives data
                      ↓
                 setState()
                      ↓
                React re-renders
                      ↓
                    UI


THIS IS THE CORE API CALLING FLOW
YOU WILL USE AGAIN AND AGAIN IN MERN.


============================================================
39. WHAT YOU SHOULD LEARN NEXT
============================================================

After understanding API calling, your next important concepts
should be:

    1. REST API
    2. Express routing
    3. Controllers
    4. Middleware
    5. req.body / req.params / req.query
    6. CRUD APIs
    7. MongoDB + Mongoose
    8. Authentication
    9. JWT
    10. Authorization
    11. CORS
    12. API validation
    13. Error-handling middleware
    14. Axios
    15. React API architecture
    16. Loading/error states
    17. Environment variables
    18. API security
    19. Pagination/filtering/search
    20. Deployment and production APIs


============================================================
ONE-LINE CHEAT SHEET
============================================================

API
→ Communication interface

API call
→ Request sent to an API

fetch()
→ Makes HTTP request and returns Promise

GET
→ Read

POST
→ Create

PUT/PATCH
→ Update

DELETE
→ Delete

req.body
→ Data sent in request body

req.params
→ Values from URL path

req.query
→ Values after ?

response.json()
→ Read JSON response

response.ok
→ Check HTTP success

200
→ Success

201
→ Created

400
→ Bad request

401
→ Unauthorized

403
→ Forbidden

404
→ Not found

500
→ Server error

CORS
→ Browser cross-origin access control

Authentication
→ Who are you?

Authorization
→ What are you allowed to do?


FINAL MEMORY:

    React
      ↓
    API Request
      ↓
    Express
      ↓
    MongoDB
      ↓
    API Response
      ↓
    React State
      ↓
    UI


If you understand this flow clearly, you have the foundation
needed for real MERN API development.
*/