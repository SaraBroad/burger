CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar (40) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Donatello', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Leonardo', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Michaelangelo', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Raphael', true);