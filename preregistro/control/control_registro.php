<?php 

  require_once '../app/conexion.php'; //Vamos a crearlo
  require_once '../app/php_mailer/PHPMailerAutoload.php';

  $conexion = conexion();

  $datos_recibidos = array(

    $conexion->real_escape_string(htmlentities($_POST['registro_nombre'])),
    $conexion->real_escape_string(htmlentities($_POST['registro_paterno'])),
    $conexion->real_escape_string(htmlentities($_POST['registro_materno'])),
    $conexion->real_escape_string(htmlentities($_POST['registro_fecha_nacimiento'])),
    $conexion->real_escape_string(htmlentities($_POST['registro_telefono'])),
    $conexion->real_escape_string(htmlentities($_POST['registro_carrera'])),
    $conexion->real_escape_string(htmlentities($_POST['registro_email'])),
    $conexion->real_escape_string(htmlentities($_POST['registro_password']))
    
  );

  //Datos para mail
  $mail_temp = $datos_recibidos[6];
  $pass_temp = $datos_recibidos[7];
  // este paso no deberia de ser necesario y jalar directamente desde el arreglo
  //pero no se que pasa, si era la version del php del server o si algo mapeaba mal
  //el caso es que ya en el servidor final no jalaba bien si no hacias este puenteo
  //y ala fecha no me responden mi duda del porque pasa esto asi que por esto
  //les decia lo tedioso de php

  function enviar_mail($mail,$password){
    
    //Este primer bloque se dedica a conextarse con el servicio de correo que usaremos GMAIL

    $correo = new PHPMailer();
    $correo->isSMTP()
    $correo->SMTPAuth = true;
    $correo->SMTPSecure = 'tls';
    $correo->Host = 'smtp.gmail.com';
    $correo->Port = '587';
    $correo->Username = 'TU CORREO DE GMAIL VA AQUI';
    $correo->Password = 'TU PASSWORD DEL CORREO VA AQUI';
   
    //Este segundo bloque se encarga de la construccion del mensaje como tal

    $correo->setFrom('TU CORREO OTRA VEZ', 'ITMA 2');
    $correo->addAddress($mail, 'Querido futuro estudiante...');
    $correo->Subject= 'Proceso de Preregistro TecNM Campus Milpa Alta II';

    //El cuerpo del mail es a tu gusto, yo mostrare el que actualmente esta en linea
    //Como apreciaran el cuerpo del mai es texto plano pero soporta HTML basico
    //La imagen se tuvo que leer desde web ya que es un mail y no era viable adjuntar imagenes para despues leerlas
    $correo->Body = '

    <img src="http://itmilpaalta2.net/preregistro/img/logo.png" style="width: 300px; height: auto;">
    <h3>Sistema de preregistro del TecNM Campus Milpa Alta II</h3><br><br>
    <h5>Tus datos de acceso son:</h5>
    <br>
    <p>Usuario:  '.$mail.'</p>
    <p>Password:  '.$password.'</p>
    <br>
    <p>Ingresa con tu cuenta y sube tus documentos en formato <strong>PDF</strong> para seguir tu proceso</p>
    <p>Accede al sistema desde <a href="http://www.itmilpaalta2.net/preregistro">aquí
    <br>
    <p><h3>M&aacute;s Informaci&oacute;n</h3>
    <a href="http://www.itmilpaalta2.net/">Visitar
    <p>Mandanos un mail:  <strong>dda_milpaalta2@tecnm.mx</strong></p>
    <p>Tel Institucional:  <strong>58446824</strong></p>
    <p>What\'s App: <strong>5562128790</strong></p>

 ';

    $correo->isHTML(true); 
    if($correo->send()){
      return '100';
    }else{
      return '404';
      //Banderas de verificacion para controlar desde el manager
    }

    //Vamos a pararle aqui por favor, requiero que por favor actualicen sus repos
    //recuerden que si no esta ahi su avance no lo revisare
    //y les comrparto el mio

  }

  function verifica_correo_existente($correo){
    $conexion = conexion();
    $query = 'SELECT * FROM usuario WHERE mail_usuario=?';
    $query = $conexion->prepare($query);
    $query = bind_baram('s', $correo);
    $query->execute();// las flechas de php no soportan espacios(si le dejas esp. dara error)
    
    if(($query->get_result()->num_rows)>0){
      return "Correo Existente";
    }else{
      return "Sin problemas";
    }

    $conexion->close();
    
  }

  if(verifica_correo_existente($datos_recibidos[6] == 'Correo Existente')){
    $resultado_total = array(
      'resultado_db' => 'correo ya existente'
      //aqui meteremos mas datos para el mail pero dejen pasarles la dependencia
      //xq resulta que se deprecio y debido ajustar en una simple linea pero si no lo haces
      // da lata
    );
  }


?>