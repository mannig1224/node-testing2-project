const router = require("express").Router();
const Users = require("./users-model");

router.get("/", (req, res, next) => { // done for you
    Users.getUsers()
      .then(users => {
        res.json(users);
      })
      .catch(next);
  });

router.post("/", async (req, res, next) => {
    try {
        const user = await Users.add(req.body);
        res.status(200).json(user);
      } catch (err) {
        next(err)
      }
})

router.delete('/:id', async (req, res, next) => {
    // DO YOUR MAGIC
    try {
      await Users.deleteById(req.params.id)
      res.json(req.account)
    } catch (err) {
      next(err)
    }
  })

  module.exports = router;