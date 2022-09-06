// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const tripRoutes = require("./routes/trips");
const itineraryRoutes = require("./routes/itineraries")

//All Queries Factories
const usersQueriesFactory = require("./queries/users_queries");
const userServicesFactory = require("./services/users_services");
const tripQueriesFactory = require("./queries/trips_queries");
const tripsServicesFactory = require("./services/trips_services");
const itineraryQueriesFactory = require ('./queries/itineraries_queries')
const itineraryServicesFactory = require('./services/itineraries_services');
const cityQueriesFactory = require('./queries/cities_queries');
const cityServicesFactory = require('./services/cities_services');



//All Services

const usersQueries = usersQueriesFactory(db);
const userServices = userServicesFactory(usersQueries);

const tripsQueries = tripsQueriesFactory(db);
const tripServices = tripsQueriesFactory(tripsQueries);

const itinerariesQueries = itineraryQueriesFactory(db);
const itineraryServices = itineraryServicesFactory(itinerariesQueries);

const citiesQueries = cityQueriesFactory(db);
const cityServices = cityServicesFactory(citiesQueries);


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/users", usersRoutes(userServices));
app.use("/trips", tripRoutes(tripServices));
app.use("/itineraries", itineraryRoutes(itineraryServices));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
