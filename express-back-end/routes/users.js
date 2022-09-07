/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (userService) => {
  router.get("/", async (req, res) => {
    try {
      const [users] = await Promise.all([
        await userService.getUser()
      ]);

      res.send({users});
    } catch (err) {
      console.error(err);
    }

  });

  router.post("/", async (req, res) => {
    const userInput = req.body;
    const password =userInput.password;
    try {
      res.clearCookie()
      const [user] = await Promise.all ([
        await userService.getUserByEmail(userInput)
      ]);
      if(user) {
        if (user.password === password) {
          res.cookie('user', JSON.stringify({
            name: user.first_name,
            id: user.id
          }))
          res.send({ user })
        } else {
          res. cookie(null)
          res.end()
        }
      } else {
        res.end()
      }
    } catch(error) {
      console.log(error)
    }
  })
  return router;
}
