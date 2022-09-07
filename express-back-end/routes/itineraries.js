const express = require('express');
const router = express.Router();

module.exports = (itineraryServices) => {

  router.get('/:itineraryId', (req, res) => {
    const itineraryId = req.params.tripId

    itineraryServices.getItineraryId(itineraryId)
    .then(resolve => {
      res.send(resolve.rows)
    })
    .catch(err => console.error('err', err))
  })

  return router;
}
