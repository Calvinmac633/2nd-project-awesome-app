module.exports = function (sequelize, DataTypes) {
    const Task = sequelize.define("Task", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.STRING,
            allowNull: true
        },
        task_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date_id: {
            type: DataTypes.INTEGER,
            references: 'calendars',
            referencesKey: 'id', 
            allowNull: false,
        }
    });
    return Task;
}