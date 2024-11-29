DROP DATABASE vocales;

CREATE DATABASE vocales;

USE vocales;

CREATE TABLE analisis (
    id int NOT NULL AUTO_INCREMENT,
    texto varchar(200) NOT NULL,
    val_a int,
    val_e int,
    val_i int,
    val_o int,
    val_u int,
    PRIMARY KEY (id)
);

INSERT INTO analisis (texto, val_a, val_e, val_i, val_o, val_u) VALUES ("Este es un texto de entrada", 1, 2, 3, 4, 5);
