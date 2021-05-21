<?php 
$arreglo=array(); 

  for($i=0; $i<5; $i++){
    $arreglo[$i]=rand(1,100);
  }

  $tabla="";
  for($i=0; $i<count($arreglo); $i++){
    $tabla=$tabla.'<td>'.$arreglo[$i].'</td>';
  }
  
 
echo json_encode($arreglo);

/*
echo '
  <table class="table table stripped">
    <thead>
      <th>Numeros</th>
    </thead>
    <tbody>
    <td>'.$tabla.'</td>
    </tbody>
  </table>

    ';


    */
?>