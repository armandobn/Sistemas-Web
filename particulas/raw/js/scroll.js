
window.addEventListener('scroll',()=>{
  const scrollable= document.documentElement.scrollHeight - window.innerHeight;
  const scrolled= window.scrollY;

  const scroll01=scrollable/3;

  console.log("scrollHeigth "+document.documentElement.scrollHeight);
  console.log("window.innerHeigt "+window.innerHeight);
  console.log("scrollable "+scrollable);
  console.log("scrolled "+scrolled);

  console.log("scrolll01 "+scroll01);
  
  if(Math.ceil(scrolled)<=scroll01*2){
    html_new = `     
    <img class='col-1 col-sm-6 col-md-6 col-lg-6 col-xl-6' src="raw/img/person01.png" alt="" >
    `;
        document.getElementById("seleccionado").innerHTML = html_new;
        document.getElementById('seleccionado').style.animation= 'desplazamiento 2s';
    //alert('Primero');
  }else if(Math.ceil(scrolled)>=scroll01*2 && Math.ceil(scrolled)<=scroll01*3 ){
    
    html_new = `     
    <img class='col-1 col-sm-6 col-md-6 col-lg-6 col-xl-6' src="raw/img/person02.png" alt="" >
    `;
        document.getElementById("seleccionado").innerHTML = html_new;
        document.getElementById('seleccionado').style.animation= 'desplazamientoa 2s';
    //console.log("Seungod");
    //alert('Segundo');
  }else if(Math.ceil(scrolled)==scroll01*3){
    //alert('Tercero');
  }

  if(Math.ceil(scrolled)===scrollable){
    //alert('ss');
  }

});

/*
let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
  let Desplazamiento_Actual = window.pageYOffset;

  console.log("ubicacionPrincipal "+ ubicacionPrincipal);
  console.log("ubicacion actual "+Desplazamiento_Actual);

  if(ubicacionPrincipal >= Desplazamiento_Actual){
    //document.getElementById('navbar').style.top= '100px';
    html_new = `     
    <img src="raw/img/person01.png" alt="" style="height: 600px;">
    `;
        document.getElementById("seleccionado").innerHTML = html_new;
  }else{
    html_new = `     
    <img src="raw/img/person02.png" alt="" style="height: 500px;">
    `;
        document.getElementById("seleccionado").innerHTML = html_new;
    //document.getElementById('navbar').style.top='0px';
  }

  ubicacionPrincipal=Desplazamiento_Actual;

}
*/
/*
window.addEventListener('scroll',function(){
  let animacion = this.document.getElementById('animado');
  let posicionObj1 = animacion.getBoundingClientRect().top;

  console.log("Posicion Objeto"+posicionObj1); 
  let tamanoDePantalla = window.innerHeight/3.5;

  console.log("pantalla"+ tamanoDePantalla);

  if(posicionObj1 >= tamanoDePantalla){
    animacion.style.height='10px';
  }else{
    animacion.style.height='100px';
  }

});
*/

/*
window.addEventListener('scroll',function(){
  let animacion = this.document.getElementById('animado');
  let posicionObj1 = animacion.getBoundingClientRect().top;
  console.log("posicion"+posicionObj1); 
  let tamanoDePantalla = window.innerHeight/3.5;

  console.log("pantalla"+ tamanoDePantalla);

  if(posicionObj1 >= tamanoDePantalla){
    animacion.style.height='10px';
  }else{
    animacion.style.height='100px';
  }

});
*/