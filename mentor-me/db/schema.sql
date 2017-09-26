-- Use to creat MySQL database
DROP DATABASE IF EXISTS mentorMe_db;
CREATE DATABASE mentorMe_db;

-- Created table just to test seeds
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	firstName varchar(20) NOT NULL,
    lastName varchar(20) NOT NULL, 
    email varchar(20) NOT NULL,
    password varchar(10) NOT NULL,
    photo varchar(200) NULL,
    city varchar(20) NOT NULL,
    state varchar(20) NOT NULL,
    zip int(5) NOT NULL,
    aboutMe varchar(200) NOT NULL,
    skill1 varchar(50) NULL,
    cost1 varchar(4) NULL,  
    skill2 varchar(50) NULL,
    cost2 varchar(4) NULL, 
    skill3 varchar(50) NULL,
    cost3 varchar(4) NULL, 
    skill4 varchar(50) NULL,
    cost4 varchar(4) NULL, 
    skill5 varchar(50) NULL,
    cost5 varchar(4) NULL,
    PRIMARY KEY(id)
);

SELECT*FROM users;