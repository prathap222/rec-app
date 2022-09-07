const express = require('express');
const router  = express.Router();


module.exports = (citiesServices) => {

  router.get("/:input", async (req, res) => {
    let userInput = req.params.input
    console.log("userinput: ", userInput)
    try {
      const [cities, image_url] = await Promise.all([
        await citiesServices.getCity(userInput)
      ]);
      if(!cities) throw "Cities Not Found"
      res.send({ cities, image_url });
    } catch (err) {
      console.error("err from cities search API:", err);
    }
  });

  return router;
};
