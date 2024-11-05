const express = require('express');
const app = express();
const port = 5000;

// Define the route for the home page ('/')
app.get('/', (req, res) => {
  res.send('Hello World with voloum');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

