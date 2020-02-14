const Sequelize = require("sequelize");
const sequelize = require("../db");

const Message = sequelize.define(
  "message", {
  text: {
    type: Sequelize.STRING,
  },
});

// Event.belongsTo(User);
// User.hasMany(Event);

module.exports = Message;
