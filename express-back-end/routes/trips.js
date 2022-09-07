const express = require('express');
const router = express.Router();

module.exports = (tripService) => {

  router.get("/:userId", async (req, res) => {
    let userId = req.params.userId
    try {
      const trips = await tripService.getTrips(userId);
      if(!trips) throw "Trips Not Found"
      res.send(trips.rows);

    } catch (err) {
      console.error("err from cities search API:", err);
    }

  })

  router.get("/edit/:tripId", async (req, res) => {
    let tripId = req.params.tripId
    try {
      const trips = await tripService.getTripById(tripId);
      if(!trips) throw "Trips Not Found"
      res.send(trips.rows);

    } catch (err) {
      console.error("err from cities search API:", err);
    }

  })

  router.post("/", async (req, res) => {
    const tripSummary = req.body;
    try {
      await tripService.postTrips(tripSummary)
      res.send('success')
    } catch (err) {

      console.error("err from posting columns:", err);
      res.status(400).send('Not Found');
    }
  })


    router.post("/delete", async (req, res) => {
      const tripId = req.body.tripId
      try {
        await tripService.deleteTrip(tripId)
        res.send('success')
      } catch (err) {

        console.error("err from deleting a trip:", err);
        res.status(400).send('deleting Failed');
      }
  })

  return router;
}
