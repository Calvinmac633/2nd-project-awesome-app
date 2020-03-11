

CREATE DATABASE calendar_tasks;
USE calendar_tasks;

INSERT INTO tasks(date, note, createdAt, updatedAt)
VALUES ("03/16/2020", "This is the note for note 1", CURRENT_TIME(), CURRENT_TIME()),
	("03/23/2020", "This is the note for note 222222", CURRENT_TIME(), CURRENT_TIME());