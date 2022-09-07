const express = require('express');
const router  = express.Router();

module.exports = (activityServices) => {

  // router.get("/", (req, res) => {
  //   res.render("index");
  // });

  router.get("/", async (req, res) => {
    let userInput = req.body;
    try {
      const [activities] = await Promise.all([
        await activityServices.getAllActivitiesByCity('vancouver')
      ]);
      res.send({ activities });
    } catch (err) {
      console.error(err);
    }
  });

  router.get("/:city", async (req, res) => {
    let userInput = req.params.city
    console.log(`The userinput is: ${userInput}`);
    try {
      const [activities] = await Promise.all([
        await activityServices.getAllActivitiesByCity(userInput)
      ]);
      res.send({ activities });
    } catch (err) {
      console.error(err);
    }
  })

  router.get("/:city/:movies", async (req, res) => {
    let userInput = req.params.city
    console.log(`The userinput is: ${userInput}`);
    try {
      const [activities] = await Promise.all([
        await activityServices.getMoviesByCity(userInput)
      ]);
      res.send({ activities });
    } catch (err) {
      console.error(err);
    }
  })


  router.get("/:city/:adventure", async (req, res) => {
    let userInput = req.params.city
    console.log(`The userinput is: ${userInput}`);
    try {
      const [activities] = await Promise.all([
        await activityServices.getAdventureByCity(userInput)
      ]);
      res.send({ activities });
    } catch (err) {
      console.error(err);
    }
  })

  router.get("/:city/:parks", async (req, res) => {
    let userInput = req.params.city
    console.log(`The userinput is: ${userInput}`);
    try {
      const [activities] = await Promise.all([
        await activityServices.getParksByCity(userInput)
      ]);
      res.send({ activities });
    } catch (err) {
      console.error(err);
    }
  })

  router.get("/:city/:restaurant", async (req, res) => {
    let userInput = req.params.city
    console.log(`The userinput is: ${userInput}`);
    try {
      const [activities] = await Promise.all([
        await activityServices.getRestaurantByCity(userInput)
      ]);
      res.send({ activities });
    } catch (err) {
      console.error(err);
    }
  })

  return router;
};
