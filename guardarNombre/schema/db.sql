create database datos;
use datos;

create table usuarios(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombres varchar(255) NOT NULL
);


create database datosb;
use datosb;
create table usuariosb(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombres varchar(255) NOT NULL
);

create database datosc;
use datosc;
create table usuariosc(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombres varchar(255) NOT NULL
);