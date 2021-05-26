create database traductor;
use traductor;

create table colores(
  id int not null auto_increment, 
  color_es varchar(255),
  color_en varchar(255),
  hexadecimal varchar(255),
  primary key (id)
);

insert into colores(color_es, color_en, hexadecimal) values
("azul","blue","086EF8"),
("rojo", "red","F70606"),
("rosa", "pink","ff0080"),
("amarillo", "yellow","ffff00"),
("naranja", "orange","EF7F1A"),
("verde", "green","008000"),
("blanco", "white","ffffff"),
("morado", "purple","572364"),
("marron", "brown","804000"),
("lila", "lavander","C8A2C8");