"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Calendars", [
      {
        month: "March",
        date: 1,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 2,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 3,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 4,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 5,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 6,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 7,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 8,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 9,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 10,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 11,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 12,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 13,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 14,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 15,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 16,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 17,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 18,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 19,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 20,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 21,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 22,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 23,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 24,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 25,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 26,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 27,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 28,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 29,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 30,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: "March",
        date: 31,
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Calendars", null, {});
  }
};
