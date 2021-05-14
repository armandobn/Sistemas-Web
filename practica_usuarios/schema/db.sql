create DATABASE datos;

use datos;

create table if not exists usuario(
  id_usuario int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre_usuario varchar(45) NOT NULL,
  paterno_usuario varchar(45) NOT NULL,
  materno_usuario varchar(45) NOT NULL,
  estatura_usuario varchar(45) NOT NULL,
  edad_usuario varchar(45) NOT NULL,
  peso_usuario varchar(45) NOT NULL
)ENGINE=InnoDB;