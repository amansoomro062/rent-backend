const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require employee routes
const personRoutes = require('./src/routes/person.route')
const personRoutes2 = require('./src/routes/person2.route')

// using as middleware
app.use('/api/v1/person',personRoutes)
app.use('/api/v1/person/cnic',personRoutes2)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});