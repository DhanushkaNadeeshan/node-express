const users = require("../models/user.json");

function getUsers() {
  return users;
}

function getUserById(id) {
  const user = users.filter((data) => data.id == id);
  return user;
}

module.exports = {
  getUsers,
  getUserById,
};
