module.exports = function(sequelize, DataTypes) {
  const Calendar = sequelize.define("Tasks", {
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Calendar;
};
