const express = require("express");
const router = express.Router();
const { getUsers, getUserById } = require("../../controllers/user");

router.get("/", (req, res) => {
  res.json({ success: true });
});

router.get("/all", (req, res) => {
  res.json({ succes: true, data: getUsers() });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = getUserById(id);
  res.json({ succes: true, data });
});

module.exports = router;
