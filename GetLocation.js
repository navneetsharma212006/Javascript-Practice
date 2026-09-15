/*
# GETTING CURRENT LOCATION IN JAVASCRIPT
# Geolocation API — MERN Developer Guide

============================================================
1. WHAT DOES "GET CURRENT LOCATION" MEAN?
============================================================

In JavaScript, the browser provides the Geolocation API.

It can ask the user for their current location and give you
coordinates such as:

    latitude
    longitude

Example:

    Latitude: 22.7196
    Longitude: 75.8577


IMPORTANT:

JavaScript does NOT automatically get a user's location.

The browser asks the user for permission first.

Typical browser message:

    "Allow this site to access your location?"

The user can:

    Allow
    Block


============================================================
2. WHY IS LOCATION IMPORTANT IN REAL APPLICATIONS?
============================================================

Real-world applications use location for:

    → Food delivery
    → Cab booking
    → Maps
    → Nearby stores
    → Weather
    → Ride tracking
    → Delivery tracking
    → Logistics
    → Attendance systems
    → Location-based search
    → "Find stores near me"


For example:

    Swiggy/Zomato-style application

User clicks:

    "Use my current location"


Browser:

    ↓ asks permission

User:

    Allow


JavaScript gets:

    latitude
    longitude


Then the frontend can send those coordinates to the backend.

    React
      ↓
    latitude + longitude
      ↓
    API
      ↓
    Express
      ↓
    Location-based query
      ↓
    Response
      ↓
    Nearby restaurants
      ↓
    React UI


============================================================
3. THE GELOCATION API
============================================================

The main API is:

    navigator.geolocation


Check:

    console.log(navigator.geolocation);


It provides methods such as:

    getCurrentPosition()
    watchPosition()
    clearWatch()


For most beginner MERN applications,
start with:

    getCurrentPosition()


============================================================
4. GETTING CURRENT LOCATION
============================================================

Basic example:

    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position);
        }
    );


The callback runs when the location is successfully obtained.


A more useful version:

    navigator.geolocation.getCurrentPosition(
        (position) => {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;

            console.log(latitude);
            console.log(longitude);
        }
    );


============================================================
5. UNDERSTAND THE RESULT
============================================================

The browser gives you a Position object.

Important structure:

    position
        ↓
    coords
        ↓
    latitude
    longitude
    accuracy


Example:

    position.coords.latitude

    position.coords.longitude

    position.coords.accuracy


You will mainly use:

    latitude
    longitude


============================================================
6. WHAT IS LATITUDE?
============================================================

Latitude tells you how far north or south a location is
from the Equator.

Example:

    22.7196


It is measured from:

    -90 to +90


Roughly:

    Positive → Northern Hemisphere
    Negative → Southern Hemisphere


You do not need to memorize the geography deeply for
MERN development.

Just remember:

    latitude = north/south position


============================================================
7. WHAT IS LONGITUDE?
============================================================

Longitude tells you how far east or west a location is
from the Prime Meridian.

Example:

    75.8577


Range:

    -180 to +180


Remember:

    longitude = east/west position


Together:

    latitude + longitude

identify a point on Earth.


============================================================
8. REAL INDUSTRY EXAMPLE
============================================================

Suppose you are building:

    "Find nearby automobile service centers"


User clicks:

    Find nearby service centers


Frontend:

    navigator.geolocation.getCurrentPosition(...)


Suppose browser returns:

    latitude = 22.7196
    longitude = 75.8577


Frontend sends:

    GET /api/service-centers
        ?lat=22.7196
        &lng=75.8577


Backend:

    Express receives:

    req.query.lat
    req.query.lng


Backend can then find service centers near
those coordinates.

Response:

    [
        {
            name: "ABC Motors",
            distance: 1.2
        },
        {
            name: "XYZ Service Center",
            distance: 2.8
        }
    ]


React displays:

    Nearby Service Centers

    ABC Motors       1.2 km
    XYZ Service      2.8 km


This is a very realistic MERN use case.


============================================================
9. THE ERROR CALLBACK
============================================================

You should NOT only handle success.

Use:

    navigator.geolocation.getCurrentPosition(
        (position) => {

            console.log(position.coords);

        },

        (error) => {

            console.error(error);

        }
    );


There are two callbacks:

    SUCCESS
        ↓
    location obtained


    ERROR
        ↓
    location could not be obtained


============================================================
10. COMPLETE BASIC PATTERN
============================================================

A good basic pattern:

    navigator.geolocation.getCurrentPosition(

        (position) => {

            const {
                latitude,
                longitude
            } = position.coords;

            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);

        },

        (error) => {

            console.error(
                "Location error:",
                error.message
            );

        }
    );


This is the core code you should remember.


============================================================
11. IMPORTANT ERROR CODES
============================================================

The Geolocation API can give you these important errors:

    1 → PERMISSION_DENIED

    2 → POSITION_UNAVAILABLE

    3 → TIMEOUT


PERMISSION_DENIED:

User denied location permission.


POSITION_UNAVAILABLE:

The device could not determine its location.


TIMEOUT:

The browser could not obtain the location
within the allowed time.


Example:

    (error) => {

        if (error.code === 1) {
            console.log("Permission denied");
        }

        if (error.code === 2) {
            console.log("Location unavailable");
        }

        if (error.code === 3) {
            console.log("Location request timed out");
        }
    }


============================================================
12. LOCATION PERMISSION
============================================================

This is VERY important.

A website cannot silently assume it can access
the user's location.

The browser normally asks:

    Allow location?

The user controls this permission.


Your application should handle both:

    Permission granted

and:

    Permission denied


Never make the entire application unusable simply because
the user doesn't want to share their location.


============================================================
13. HTTPS REQUIREMENT
============================================================

Geolocation is generally available only in secure contexts.

Production:

    https://example.com


is secure.

Local development:

    http://localhost:3000


is treated as a secure context by browsers for development
purposes.

So this normally works during local development:

    http://localhost:3000


But an ordinary non-secure HTTP production website may not
be allowed to use browser geolocation.


IMPORTANT:

    Production → HTTPS


============================================================
14. getCurrentPosition()
============================================================

This gets a location once.

Example:

    navigator.geolocation.getCurrentPosition(
        success,
        error
    );


Think:

    User asks:

    "Where am I right now?"


You get:

    One location result.


Good for:

    Nearby stores
    Current city
    Delivery address assistance
    Weather location
    One-time location lookup


============================================================
15. watchPosition()
============================================================

Sometimes you need continuous location updates.

Example:

    navigator.geolocation.watchPosition(
        (position) => {

            console.log(
                position.coords.latitude,
                position.coords.longitude
            );

        }
    );


This keeps watching the device's location.

When location changes:

    callback runs again.


Useful for:

    Cab tracking
    Delivery tracking
    Running apps
    Navigation
    Vehicle tracking


Mental model:

    getCurrentPosition()

        "Tell me my location once."


    watchPosition()

        "Keep telling me when my location changes."


============================================================
16. clearWatch()
============================================================

If you use:

    watchPosition()


you should be able to stop watching.

Example:

    const watchId =
        navigator.geolocation.watchPosition(
            success,
            error
        );


Stop it:

    navigator.geolocation.clearWatch(watchId);


Flow:

    watchPosition()
          ↓
    watchId
          ↓
    clearWatch(watchId)
          ↓
    Stop watching


============================================================
17. ACCURACY
============================================================

You can access:

    position.coords.accuracy


Example:

    console.log(
        position.coords.accuracy
    );


This represents the accuracy radius in meters.

For example:

    accuracy = 20


roughly means the actual position is expected
to be within about 20 meters of the reported
coordinates, according to the browser/device's estimate.


Important:

    More precise does NOT always mean perfect.


GPS, Wi-Fi, cell networks, device hardware and environment
can affect accuracy.


============================================================
18. OTHER COORDINATES
============================================================

The coordinates object can contain:

    latitude
    longitude
    accuracy
    altitude
    altitudeAccuracy
    heading
    speed


Example:

    position.coords.latitude

    position.coords.longitude

    position.coords.speed


For normal MERN applications, the main ones are:

    latitude
    longitude
    accuracy


You do not need to memorize every coordinate property.


============================================================
19. HIGH ACCURACY OPTION
============================================================

You can request higher accuracy:

    navigator.geolocation.getCurrentPosition(

        success,

        error,

        {
            enableHighAccuracy: true
        }
    );


This tells the browser/device:

    "Prefer a more accurate location if possible."


But higher accuracy can:

    consume more battery
    take longer
    still not guarantee perfect accuracy


So don't blindly use:

    enableHighAccuracy: true

for every application.


============================================================
20. TIMEOUT
============================================================

You can specify how long to wait.

Example:

    navigator.geolocation.getCurrentPosition(

        success,

        error,

        {
            timeout: 10000
        }
    );


Here:

    10000 ms = 10 seconds


If the location cannot be obtained within the allowed
time, a timeout error may occur.


============================================================
21. maximumAge
============================================================

You can also tell the browser whether an older cached
location is acceptable.

Example:

    {
        maximumAge: 60000
    }


This means a location cached within the last:

    60 seconds

may be acceptable.


This can reduce unnecessary location work.


============================================================
22. COMMON OPTIONS TO KNOW
============================================================

The important options are:

    {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
    }


Remember:

    enableHighAccuracy
        → prefer higher accuracy


    timeout
        → maximum time to wait


    maximumAge
        → acceptable age of cached location


You do not need to memorize advanced browser internals.


============================================================
23. REACT USE CASE
============================================================

Suppose you build:

    Nearby Stores


Component:

    function NearbyStores() {

        const [location, setLocation] =
            useState(null);

        const getLocation = () => {

            navigator.geolocation.getCurrentPosition(

                (position) => {

                    setLocation({
                        latitude:
                            position.coords.latitude,

                        longitude:
                            position.coords.longitude
                    });

                },

                (error) => {

                    console.error(error);

                }
            );
        };

        return (
            <button onClick={getLocation}>
                Use My Location
            </button>
        );
    }


Flow:

    User clicks button
          ↓
    getLocation()
          ↓
    Browser asks permission
          ↓
    User allows
          ↓
    Coordinates received
          ↓
    setLocation()
          ↓
    React re-renders


============================================================
24. REACT + API CALL
============================================================

Now connect it with your MERN backend.

Example:

    const getNearbyStores = () => {

        navigator.geolocation.getCurrentPosition(

            async (position) => {

                const lat =
                    position.coords.latitude;

                const lng =
                    position.coords.longitude;

                const response = await fetch(
                    `/api/stores/nearby?lat=${lat}&lng=${lng}`
                );

                const stores =
                    await response.json();

                setStores(stores);
            },

            (error) => {

                console.error(error);

            }
        );
    };


Now you have:

    Browser Location
          ↓
    React
          ↓
    API Request
          ↓
    Express
          ↓
    MongoDB
          ↓
    Nearby Stores
          ↓
    React UI


This is the important MERN connection.


============================================================
25. EXPRESS BACKEND
============================================================

Frontend sends:

    /api/stores/nearby?lat=22.7196&lng=75.8577


Express:

    router.get("/stores/nearby", async (req, res) => {

        const { lat, lng } = req.query;

        console.log(lat);
        console.log(lng);

        // Find nearby stores...

        res.json({
            message: "Nearby stores"
        });
    });


Notice:

    req.query.lat
    req.query.lng


because they came from query parameters.


============================================================
26. IMPORTANT: LAT/LNG ARE NOT AN ADDRESS
============================================================

This is a VERY important distinction.

Coordinates:

    latitude
    longitude


are NOT:

    "MG Road, Indore"


They represent a geographical point.


To convert:

    coordinates
        ↓
    address


you need:

    Reverse Geocoding


Example:

    22.7196, 75.8577
          ↓
    Reverse Geocoding API
          ↓
    Address


Similarly:

    Address
       ↓
    Geocoding
       ↓
    Latitude + Longitude


Remember:

    Address → coordinates
        = Geocoding


    Coordinates → address
        = Reverse geocoding


============================================================
27. BROWSER LOCATION VS IP LOCATION
============================================================

Do not confuse these.

Browser Geolocation:

    navigator.geolocation


can use device/browser location sources such as
GPS, Wi-Fi and other available signals.

IP-based location:

    User IP
       ↓
    IP location service
       ↓
    Approximate location


IP location is generally much less precise.

For example:

    IP location → city/region approximation

Browser/device location → potentially much more precise


============================================================
28. LOCATION SHOULD NOT ALWAYS BE REQUIRED
============================================================

Bad UX:

    Application opens

    ↓

    "Allow location or you cannot use the website."


Better:

    "Use my current location"

    or

    "Enter location manually"


Why?

Because users may:

    deny permission
    be on a VPN
    be using a desktop
    have location disabled
    not want to share location


Good applications provide alternatives.


============================================================
29. PRIVACY
============================================================

Location is sensitive information.

As a developer:

    → Request location only when needed.
    → Explain why you need it.
    → Don't collect more than necessary.
    → Don't unnecessarily store exact coordinates.
    → Protect location data on the backend.
    → Follow applicable privacy requirements.


Example:

Bad:

    Request location immediately when the website loads
    without explaining why.


Better:

    "We use your location to show stores near you."

    [Use My Location]


============================================================
30. DO NOT TRUST LOCATION FROM THE CLIENT
============================================================

This is important for MERN security.

Frontend sends:

    lat = 22.7196
    lng = 75.8577


A user can modify the request.

Therefore, do not assume:

    "The frontend coordinates must be correct."


For sensitive operations such as:

    attendance
    delivery confirmation
    fraud prevention
    geo-restricted actions


the backend must apply appropriate validation and
business rules.

Client-provided location is still client-provided data.


============================================================
31. LOCATION + MONGODB
============================================================

MongoDB can store geographical data using GeoJSON.

Example:

    {
        type: "Point",
        coordinates: [
            75.8577,
            22.7196
        ]
    }


VERY IMPORTANT:

GeoJSON coordinates are:

    [longitude, latitude]


NOT:

    [latitude, longitude]


This is a common beginner mistake.


Example:

    coordinates: [
        75.8577,   // longitude
        22.7196    // latitude
    ]


MongoDB can then use geospatial indexes and queries
to find nearby locations efficiently.


============================================================
32. REAL INDUSTRY MERN ARCHITECTURE
============================================================

Example:

    Food Delivery Application


STEP 1:

User clicks:

    "Use my location"


STEP 2:

Browser:

    navigator.geolocation


STEP 3:

Gets:

    latitude
    longitude


STEP 4:

React sends:

    GET /api/restaurants/nearby
        ?lat=...
        &lng=...


STEP 5:

Express receives:

    req.query.lat
    req.query.lng


STEP 6:

Backend validates input.


STEP 7:

MongoDB performs a geospatial query.


STEP 8:

Backend returns:

    restaurant list
    distance
    other required data


STEP 9:

React displays:

    Restaurants near you


Complete flow:

    USER
      ↓
    React
      ↓
    Browser Geolocation API
      ↓
    Latitude + Longitude
      ↓
    fetch()
      ↓
    Express
      ↓
    Validation
      ↓
    MongoDB Geo Query
      ↓
    Response
      ↓
    React
      ↓
    UI


============================================================
33. COMMON MISTAKES
============================================================

MISTAKE 1:

Trying:

    navigator.location


Wrong.

Correct:

    navigator.geolocation


------------------------------------------------------------

MISTAKE 2:

Expecting:

    getCurrentPosition()

to return the coordinates directly.

Wrong mental model:

    const location =
        navigator.geolocation.getCurrentPosition();


The method uses callbacks.

Correct:

    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(
                position.coords.latitude
            );
        }
    );


------------------------------------------------------------

MISTAKE 3:

Ignoring permission denial.

Always handle the error callback.


------------------------------------------------------------

MISTAKE 4:

Using location without HTTPS in production.

Use:

    HTTPS


------------------------------------------------------------

MISTAKE 5:

Sending:

    [latitude, longitude]

to MongoDB GeoJSON.

GeoJSON expects:

    [longitude, latitude]


------------------------------------------------------------

MISTAKE 6:

Assuming coordinates are an address.

Coordinates need geocoding/reverse geocoding
if you need human-readable addresses.


------------------------------------------------------------

MISTAKE 7:

Sending exact location to your backend without
thinking about privacy.

Only collect what the feature actually needs.


============================================================
34. INTERVIEW QUESTIONS
============================================================

Q1. How do you get the user's current location in JavaScript?

ANSWER:

Use the browser Geolocation API:

    navigator.geolocation.getCurrentPosition()


------------------------------------------------------------

Q2. What does getCurrentPosition() do?

ANSWER:

It requests the user's current geographical position.


------------------------------------------------------------

Q3. Does getCurrentPosition() return the location directly?

ANSWER:

No.

It provides the result through success/error callbacks.


------------------------------------------------------------

Q4. What are the two most important location values?

ANSWER:

    latitude
    longitude


------------------------------------------------------------

Q5. What is latitude?

ANSWER:

It represents the north/south position of a location.


------------------------------------------------------------

Q6. What is longitude?

ANSWER:

It represents the east/west position of a location.


------------------------------------------------------------

Q7. What is navigator.geolocation?

ANSWER:

It is the browser API that provides access to
device location information, subject to permission
and browser/security restrictions.


------------------------------------------------------------

Q8. Why does the browser ask for permission?

ANSWER:

Because location is sensitive user information and
websites should not access it without user permission.


------------------------------------------------------------

Q9. What is watchPosition()?

ANSWER:

It continuously watches the device's position and
calls the callback when the position changes.


------------------------------------------------------------

Q10. How do you stop watchPosition()?

ANSWER:

    navigator.geolocation.clearWatch(watchId);


------------------------------------------------------------

Q11. What does accuracy mean?

ANSWER:

It represents the estimated accuracy of the reported
position, in meters.


------------------------------------------------------------

Q12. What does enableHighAccuracy do?

ANSWER:

It tells the browser/device to prefer a more accurate
location when possible.


------------------------------------------------------------

Q13. What is the difference between geocoding and
reverse geocoding?

ANSWER:

Geocoding:

    Address → coordinates


Reverse geocoding:

    Coordinates → address


------------------------------------------------------------

Q14. Are latitude and longitude an address?

ANSWER:

No.

They represent a geographical point.


------------------------------------------------------------

Q15. What is the order of coordinates in GeoJSON?

ANSWER:

    [longitude, latitude]


This is extremely important.


------------------------------------------------------------

Q16. Can frontend location data be trusted for security?

ANSWER:

No.

Client-provided data can be manipulated.

The backend must apply appropriate validation and
business rules.


------------------------------------------------------------

Q17. Give a real MERN use case.

ANSWER:

A food delivery application can get the user's
coordinates using browser geolocation, send them to
Express, perform a MongoDB geospatial query, and
return nearby restaurants.


============================================================
35. PRACTICE QUESTIONS
============================================================

Try solving these yourself first.


Q18. Write JavaScript that gets the user's latitude.

ANSWER:

    navigator.geolocation.getCurrentPosition(
        (position) => {

            console.log(
                position.coords.latitude
            );

        }
    );


------------------------------------------------------------

Q19. How do you get longitude?

ANSWER:

    position.coords.longitude


------------------------------------------------------------

Q20. How do you get accuracy?

ANSWER:

    position.coords.accuracy


------------------------------------------------------------

Q21. Write code that handles location errors.

ANSWER:

    navigator.geolocation.getCurrentPosition(

        (position) => {
            console.log(position.coords);
        },

        (error) => {
            console.error(error.message);
        }

    );


------------------------------------------------------------

Q22. Which method should you use if you only need
the location once?

ANSWER:

    getCurrentPosition()


------------------------------------------------------------

Q23. Which method should you use for continuous
tracking?

ANSWER:

    watchPosition()


------------------------------------------------------------

Q24. How do you stop continuous tracking?

ANSWER:

    clearWatch(watchId)


------------------------------------------------------------

Q25. A user denies location permission.
What should your application do?

ANSWER:

Show a useful fallback such as:

    "Location permission denied.
     Please enter your location manually."


The application should not unnecessarily break.


------------------------------------------------------------

Q26. Your frontend receives:

    latitude = 22.7196
    longitude = 75.8577

How could you send this to Express?

ANSWER:

    fetch(
        `/api/stores/nearby?lat=${latitude}&lng=${longitude}`
    );


------------------------------------------------------------

Q27. In Express, how would you access those values?

ANSWER:

    const { lat, lng } = req.query;


------------------------------------------------------------

Q28. What is wrong with this MongoDB GeoJSON?

    coordinates: [
        22.7196,
        75.8577
    ]


ANSWER:

The order is wrong.

GeoJSON uses:

    [longitude, latitude]


Correct:

    coordinates: [
        75.8577,
        22.7196
    ]


============================================================
36. FINAL CHEAT SHEET
============================================================

navigator.geolocation
→ Browser location API


getCurrentPosition()
→ Get location once


watchPosition()
→ Continuously track location


clearWatch()
→ Stop tracking


latitude
→ North/South


longitude
→ East/West


accuracy
→ Estimated accuracy in meters


enableHighAccuracy
→ Prefer higher accuracy


timeout
→ Maximum time to wait


maximumAge
→ Acceptable cached location age


Geocoding
→ Address → Coordinates


Reverse Geocoding
→ Coordinates → Address


GeoJSON
→ [longitude, latitude]


Permission
→ User must grant access


Production
→ Use HTTPS


Security
→ Never blindly trust client location


Privacy
→ Request and store only what is necessary


============================================================
37. THE MERN MENTAL MODEL
============================================================

For a location-based MERN application:

    USER
      ↓
    Click "Use My Location"
      ↓
    navigator.geolocation
      ↓
    Browser permission
      ↓
    latitude + longitude
      ↓
    React state
      ↓
    fetch()
      ↓
    Express API
      ↓
    req.query
      ↓
    Validation
      ↓
    MongoDB geospatial query
      ↓
    Nearby results
      ↓
    JSON response
      ↓
    React state
      ↓
    UI


The key thing to remember is:

    Browser Geolocation
            =
    Get coordinates


    API call
            =
    Send coordinates to backend


    Express
            =
    Process the request


    MongoDB geospatial query
            =
    Find nearby data


    React
            =
    Display the result


For MERN, you mainly need to be strong in:

    navigator.geolocation
    getCurrentPosition()
    watchPosition()
    latitude / longitude
    permission handling
    error handling
    fetch + API integration
    req.query
    GeoJSON [longitude, latitude]
    MongoDB geospatial basics
    privacy + security

You do NOT need to memorize every Geolocation API property
right now. Master this flow first.
*/