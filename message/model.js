const Sequelize = require("sequelize");
const sequelize = require("../db");

const Message = sequelize.define(
  "message", {
  title: {
    text: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

Event.belongsTo(User);
User.hasMany(Event);

module.exports = Event;
