import{ registrarseAutenticarse } from '../../firebase.js'
export const registrarse = () =>{
  // creacion de nueva cuenta con  mail -contraseña 
    const divRegistrarse =  document.createElement('div');    
    const viewRegistrarse = `
 <div id="contenedorformulario3">
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
</form> 
</div>
    `;

    divRegistrarse.innerHTML = viewRegistrarse;

    // Variables desde los ID  
    const formulario = divRegistrarse.querySelector('#logForm');
    formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let name= divRegistrarse.querySelector('#nombreRegistro').value;
    let email = divRegistrarse.querySelector('#emailRegistro').value;
    let password= divRegistrarse.querySelector('#registroPassword').value;
    let password2= divRegistrarse.querySelector('#registroPassword2').value;
    registrarseAutenticarse(email, password)
   
});
return divRegistrarse;

}



