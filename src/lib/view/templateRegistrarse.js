
export const registrarse = () =>{
    const divRegistrarse =  document.createElement('div');    
    const viewRegistrarse = `
 <div id="Contenedorformulario3">
    <form id="logForm" class="formulario3">
    <div id= "contenedorImagen">
     <img src="img/logoDesserts.jpg" class="logoDesserts" id="logo">
     </div>
     <div id="contenedorInput" >
     <input id="nombreRegistro"class="input-registro" type="text" placeholder="Nombre"></div>
     <div id="contenedorInput" >
     <input id="emailRegistro"class="input-registro" type="email" placeholder="E-mail"></div>
     <div id="contenedorInput">
     <input id= "registroPassword"class="input-registro" type="password" placeholder="Contraseña"></div>
     <div id="contenedorInput">
    <input id="registroPassword2"class="input-registro" type="password" placeholder="Vuelva ingresar contraseña"></div>
    <div id="contenedorBtn">
    <button id="btn3" class="Registrar">Regístrarme</button></a>
    </div>
  </div>
</form> 
    `;
    divRegistrarse.innerHTML = viewRegistrarse;
    return divRegistrarse;
};

// const llenarFormulario = document.querySelector('#logForm');
// llenarFormulario.addEventListener('submit', (event) => {
// event.preventDefault();
// let name= document.querySelector('#nombreRegistro').value;
// let email = document.querySelector('#emailRegistro').value;
// let ingresaPassword= document.querySelector('#registropassword').value;
// let ingresePassword2= document.querySelector('#registropassword2').value;
// console.log( name, email, password, password2)
// });




