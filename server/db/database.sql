-- create database and make it more visually pleasing when writing commands


CREATE DATABASE perntodo;


CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);