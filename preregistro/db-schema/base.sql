create DATABASE preregistro; utf8 bin


create table if not exists usuario(
  id_usuario int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre_usuario varchar(45) NOT NULL,
  paterno_usuario varchar(45) NOT NULL,
  materno_usuario varchar(45) NOT NULL,
  fecha_nacimiento_usuario date NOT NULL,
  telefono_usuario varchar(45) NOT NULL,
  carrera_usuario varchar(45) NOT NULL,
  mail_usuario varchar(45) NOT NULL,
  password_usuario varchar(45) NOT NULL,
  subio_archivos int default 0,
  dda_autorizo int default 0,
  rf_autorizo int default 0,
  habilitar_examen int default 0,
  calificacion_usuario int default 0,
  rol int NOT NULL default 0
)ENGINE=InnoDB;