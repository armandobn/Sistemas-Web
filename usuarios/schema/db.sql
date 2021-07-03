create database tarea;

use tarea;

create table usuario(
  id_usuario int not null auto_increment, primary key (id_usuario),
  nombre varchar(250),
  paterno varchar(250),
  materno varchar(250),
  sexo varchar(250),
  nacimiento date,
  email varchar(250),
  contrasenia varchar(250)
);

create table usuario(
  id_usuario int not null auto_increment, primary key (id_usuario),
  nombre varchar(250),
  paterno varchar(250),
  materno varchar(250),
  sexo varchar(250),
  nacimiento date,
  email varchar(250),
  contrasenia varchar(250)
);


create table usuario(
  id_usuario int not null auto_increment, primary key (id_usuario),
  nombre varchar(250),
  paterno varchar(250),
  materno varchar(250),
  sexo varchar(250),
  nacimiento date,
  email varchar(250),
  contrasenia varchar(250)
);



create table tarea(
  id_tarea int not null auto_increment, primary key (id_tarea),
  nombre_tarea varchar(250),
  descripcion varchar(250),
  id_usuario,
  foreign key (id_usuario) references usuario(id_usuario)
);
