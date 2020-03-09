module.exports = function(sequelize, DataTypes) {
  const Task = sequelize.define("Task", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true
    },
    taskDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dateId: {
      type: DataTypes.INTEGER,
      references: {
        model: "calendars",
        key: "id"
      },
      allowNull: false
    }
  });
  return Task;
};
