const app = require('./app');

// Config
require('dotenv').config({ path: 'config/config.env' });
// Connecting to database

app.listen(3000, () => {
  console.log(`Server is working on http://localhost:${3000}`);
});
