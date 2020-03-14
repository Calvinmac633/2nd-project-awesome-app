module.exports = function(sequelize, DataTypes) {
  const Calendar = sequelize.define("Tasks", {
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Calendar;
};
