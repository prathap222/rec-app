const express = require('express');
const router  = express.Router();
const activitiesRoutes = require("./activities");
const citiesRoutes = require("./cities");
const usersRoutes = require("./users");


module.exports = (activityServices, cityServices, userServices) => {

  router.use("/activities", activitiesRoutes(activityServices));
  router.use("/cities", citiesRoutes(cityServices));
  router.use("/users", usersRoutes(userServices));

  return router;
};
