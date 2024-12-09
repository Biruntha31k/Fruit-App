const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS for all origins (you can restrict it to specific origins for security)
app.use(cors());

// Use express.json() for parsing JSON requests and express.urlencoded for form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let Farr = []; // This will store the fruit names

// Route to handle POST requests and add a fruit to Farr
app.post("/", (req, res) => {
  console.log(req.body.fruitName); // Log the fruit name sent from the frontend

  // Add the fruit name to the Farr array
  Farr.push(req.body.fruitName);

  // Send the updated Farr array back to the frontend as a JSON response
  res.json(Farr); // Respond with the updated list of fruits in JSON format
});

// Start the server
app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
