module.exports = function(sequelize, DataTypes) {
  const Calendar = sequelize.define("Calendar", {
    month: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Calendar;
};
