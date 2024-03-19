// Import required modules
const express = require("express");

// Create an instance of express
const app = express();
const port = 3000; // You can change the port as needed

// Define a route for the API endpoint
app.get("/hello", (req, res) => {
  res.send("Hello, world!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
