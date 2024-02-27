// Import express module
import express from "express";

// Create a new express app
const app = express();

// Define sample data (simulated response data)
const sampleData = {
  name: "Stefan Schooneveld",
  occupation: "Web Developer",
  location: "Netherlands",
  // Add more sample data as needed
};

// Set EJS as the template engine and specify the 'views' directory
app.set("view engine", "ejs");
app.set("views", "./views");

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Define a route for the index page
app.get("/", function (req, res) {
  // Render the 'index' template and pass the sample data to it
  res.render("index", sampleData);
});

// Set the port number for the Express app
app.set("port", process.env.PORT || 8000);

// Start the Express server and listen on the specified port
app.listen(app.get("port"), function () {
  // Display a message in the console indicating that the application has started
  console.log(`Application started on http://localhost:${app.get("port")}`);
});
