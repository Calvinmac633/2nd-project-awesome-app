module.exports = function(sequelize, DataTypes) {
  const Task = sequelize.define("Tasks", {
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Task;
};
