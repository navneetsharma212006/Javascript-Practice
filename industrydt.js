/*
=========================================================
          JAVASCRIPT DATA TYPES IN INDUSTRY
=========================================================

Imagine you are building a real application:

Automobile Showroom Management System
OR
E-commerce Website
OR
User Management System

Every piece of data has a data type.

For example:

User Name       → String
Age             → Number
Logged In       → Boolean
User Details    → Object
Products        → Array
No Selected User→ null
API Response    → Object / Array
Functions       → Function


=========================================================
1. STRING IN INDUSTRY
=========================================================

Strings are used for text data.

Real examples:

const userName = "Navneet";
const email = "navneet@gmail.com";
const city = "Indore";
const vehicleModel = "Honda City";


---------------------------------------------------------
In a real API response:
---------------------------------------------------------

const user = {
    name: "Navneet",
    email: "navneet@gmail.com",
    role: "admin"
};


---------------------------------------------------------
In React:
---------------------------------------------------------

const message = "Welcome back!";

return <h1>{message}</h1>;


Strings are used everywhere:

User names
Emails
Passwords
Addresses
Product names
Vehicle names
URLs
Error messages
API endpoints


Example:

const API_URL = "/api/users";


=========================================================
2. NUMBER IN INDUSTRY
=========================================================

Numbers are used for calculations.

Example from an e-commerce application:

const productPrice = 500;
const quantity = 3;

const totalPrice = productPrice * quantity;

console.log(totalPrice);

Output:

1500


---------------------------------------------------------
Real examples:
---------------------------------------------------------

const age = 20;
const stock = 50;
const price = 1200000;
const gstPercentage = 18;
const discount = 10;


In your ASM-type project:

const availableStock = 10;
const vehiclePrice = 1200000;
const gstPercent = 18;


Example:

const gstAmount = vehiclePrice * gstPercent / 100;


=========================================================
3. BOOLEAN IN INDUSTRY
=========================================================

Boolean is extremely common.

It controls:

Yes / No
True / False
Active / Inactive


Example:

const isLoggedIn = true;

if (isLoggedIn) {
    console.log("Show Dashboard");
}


---------------------------------------------------------
Real examples:
---------------------------------------------------------

const isAdmin = true;
const isLoading = false;
const isVerified = true;
const hasPermission = false;
const isActive = true;


---------------------------------------------------------
React Example
---------------------------------------------------------

const [isLoading, setIsLoading] = useState(false);


When API starts:

setIsLoading(true);


When API finishes:

setIsLoading(false);


Then:

if (isLoading) {
    return <p>Loading...</p>;
}


This is a very common industry pattern.


=========================================================
4. UNDEFINED IN INDUSTRY
=========================================================

undefined usually means:

"The value is not available yet."


Example:

let user;

console.log(user);

Output:

undefined


---------------------------------------------------------
Real API situation:
---------------------------------------------------------

const response = {};

console.log(response.user);

Output:

undefined


Because:

user property does not exist.


---------------------------------------------------------
React Example
---------------------------------------------------------

const [user, setUser] = useState();

Initially:

user → undefined


After API call:

setUser({
    name: "Navneet"
});


Industry developers often check:

if (user === undefined) {
    console.log("User data not loaded yet");
}


=========================================================
5. NULL IN INDUSTRY
=========================================================

null means:

"We intentionally have no value."


Very common example:

const selectedUser = null;


Imagine a user has not selected any customer.

selectedCustomer = null


After selecting:

selectedCustomer = {
    id: 101,
    name: "Rahul"
};


---------------------------------------------------------
Database Example
---------------------------------------------------------

A customer might not have a phone number.

phone_number:

NULL


This means:

The value is intentionally absent.


---------------------------------------------------------
React Example
---------------------------------------------------------

const [selectedVehicle, setSelectedVehicle] = useState(null);


Initially:

No vehicle selected.

selectedVehicle → null


After selection:

setSelectedVehicle(vehicle);


This is a very common React pattern.


=========================================================
6. OBJECT IN INDUSTRY
=========================================================

Objects are probably one of the MOST USED
data types in JavaScript.

They represent a single entity.

Example:

const user = {
    id: 1,
    name: "Navneet",
    email: "navneet@gmail.com",
    role: "developer",
    isActive: true
};


A real application receives data like this from APIs.

Example:

const response = {
    success: true,
    message: "User fetched successfully",
    data: {
        id: 1,
        name: "Navneet"
    }
};


---------------------------------------------------------
ASM Example
---------------------------------------------------------

const vehicle = {
    vehicleId: "V001",
    modelName: "Honda City",
    color: "White",
    price: 1200000,
    availableStock: 5
};


Objects are used for:

Users
Products
Vehicles
Orders
Invoices
API responses
Configurations
Database records


=========================================================
7. ARRAY IN INDUSTRY
=========================================================

Arrays are used when you have MULTIPLE items.

Example:

const users = [
    {
        name: "Navneet",
        role: "Admin"
    },
    {
        name: "Rahul",
        role: "User"
    }
];


---------------------------------------------------------
API Example
---------------------------------------------------------

const vehicles = [
    {
        id: 1,
        name: "Honda City"
    },
    {
        id: 2,
        name: "Hyundai Creta"
    }
];


---------------------------------------------------------
React Example
---------------------------------------------------------

const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" }
];


products.map((product) => {
    return <p>{product.name}</p>;
});


This displays multiple products.

Arrays are heavily used for:

Product lists
User lists
Orders
Notifications
Comments
Search results
API data


=========================================================
8. FUNCTION IN INDUSTRY
=========================================================

Functions contain reusable logic.

Example:

function calculateTotal(price, quantity) {
    return price * quantity;
}


Usage:

const total = calculateTotal(500, 3);


---------------------------------------------------------
Real Example
---------------------------------------------------------

function calculateGST(price, gstPercent) {
    return price * gstPercent / 100;
}


---------------------------------------------------------
React Example
---------------------------------------------------------

const handleLogin = () => {

    console.log("User logged in");

};


Functions are used for:

Button click handling
API calls
Calculations
Data validation
Authentication
Business logic
Event handling


=========================================================
9. BIGINT IN INDUSTRY
=========================================================

BigInt is used when numbers are extremely large.

Example:

const largeNumber = 999999999999999999999n;


It is less commonly used in normal MERN applications.

You might see it in:

Financial systems
Cryptography
Blockchain
Large ID systems


For normal application development:

Number is usually enough.


=========================================================
10. SYMBOL IN INDUSTRY
=========================================================

Symbol creates unique identifiers.

Example:

const id = Symbol("id");


It is not something you will use every day as a MERN
developer.

You may encounter it in:

Libraries
Framework internals
Advanced JavaScript
Object meta-programming


For now:

Understand what it is, but don't spend too much time
practicing it.


=========================================================
11. PRIMITIVE VS REFERENCE IN REAL PROJECTS
=========================================================

This is VERY important in industry.

Primitive example:

let price = 100;

let newPrice = price;

newPrice = 200;


price is still:

100


Because the value was copied.


---------------------------------------------------------
Object example:
---------------------------------------------------------

const user1 = {
    name: "Navneet"
};

const user2 = user1;

user2.name = "Rahul";


Now:

console.log(user1.name);

Output:

Rahul


Both variables point to the same object.


---------------------------------------------------------
Why is this important?
---------------------------------------------------------

Imagine:

const originalUser = {
    name: "Navneet",
    role: "Admin"
};

const updatedUser = originalUser;

updatedUser.role = "User";


Now originalUser is ALSO changed.


This can cause serious bugs.


Industry solution:

Create a copy.

const updatedUser = {
    ...originalUser,
    role: "User"
};


Now:

originalUser.role → "Admin"

updatedUser.role → "User"


This is called:

IMMUTABLE UPDATE


This is EXTREMELY important in React.


=========================================================
12. DATA TYPES IN REACT
=========================================================

A typical React component uses many data types.

Example:

function Product() {

    const productName = "Laptop";
    // String


    const price = 50000;
    // Number


    const isAvailable = true;
    // Boolean


    const selectedProduct = null;
    // Null


    const product = {
        id: 1,
        name: "Laptop"
    };
    // Object


    const products = [
        "Laptop",
        "Mobile",
        "Tablet"
    ];
    // Array


    const calculateDiscount = () => {
        return price * 0.1;
    };
    // Function

}


This is basically what happens in real applications.


=========================================================
13. DATA TYPES IN API RESPONSES
=========================================================

Backend APIs usually send JSON.

Example:

{
    "success": true,
    "message": "Vehicles fetched successfully",
    "totalCount": 2,
    "data": [
        {
            "id": 1,
            "modelName": "Honda City",
            "price": 1200000,
            "available": true
        },
        {
            "id": 2,
            "modelName": "Hyundai Creta",
            "price": 1850000,
            "available": false
        }
    ]
}


Data types:

success
→ Boolean


message
→ String


totalCount
→ Number


data
→ Array


Each vehicle
→ Object


price
→ Number


available
→ Boolean


This is exactly the kind of data you will constantly
work with as a MERN developer.


=========================================================
14. MOST IMPORTANT DATA TYPES FOR YOU
=========================================================

As a MERN developer, focus heavily on:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Object
7. Array
8. Function


Then deeply understand:

Primitive vs Reference
Object copying
Array copying
Mutation
Immutability
Destructuring
Spread operator
Type conversion
Type coercion
Truthy and Falsy values


=========================================================
REAL INDUSTRY EXAMPLE
=========================================================

Imagine you are building:

Create Purchase Order


const purchaseOrder = {

    poNumber: "PO-1001",
    // String


    supplierName: "ABC Motors",
    // String


    totalAmount: 250000,
    // Number


    gstPercent: 18,
    // Number


    isApproved: false,
    // Boolean


    approvedBy: null,
    // Null


    items: [
        {
            productName: "Engine Oil",
            quantity: 10,
            price: 500
        },
        {
            productName: "Brake Pad",
            quantity: 5,
            price: 1000
        }
    ]
    // Array containing Objects

};


Function:

const calculateTotal = (items) => {

    return items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

};


=========================================================
INDUSTRY MENTAL MODEL
=========================================================

When you build a real application, think:

Single piece of information
        ↓
Primitive

Example:

const name = "Navneet";


One real-world entity
        ↓
Object

Example:

const user = {
    name: "Navneet",
    age: 20
};


Multiple entities
        ↓
Array

Example:

const users = [
    {...},
    {...},
    {...}
];


Logic / action
        ↓
Function

Example:

const handleLogin = () => {};



=========================================================
FINAL RULE
=========================================================

In real JavaScript/MERN projects, you will use:

String
Number
Boolean
Object
Array
Function

EVERY SINGLE DAY.

You will frequently deal with:

null
undefined

You should understand:

BigInt
Symbol

But you won't need them often as a beginner MERN developer.

Your next most important topic after understanding
basic data types should be:

TYPE CONVERSION
        ↓
TYPE COERCION
        ↓
TRUTHY AND FALSY
        ↓
OPERATORS
        ↓
CONDITIONS
        ↓
LOOPS
        ↓
FUNCTIONS
        ↓
ARRAYS AND OBJECTS (DEEP)
*/