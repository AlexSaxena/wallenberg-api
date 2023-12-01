// Import Dependencies
const express = require('express');

// Express App
const app = express();

// Routes
app.get('/', (req, res) => {
  res.json({ general: 'Kenobi' });
});

// Server Startup
app.listen(3001);
