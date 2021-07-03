create database factorial;

use factorial;

create table usuarios(
  id int not null auto_increment,
  usuario varchar(255),
  password varchar(255),
  historial varchar(255),
  primary key (id)
);