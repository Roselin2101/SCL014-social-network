import { iniciarSesionUsuarioPass, iniciarSesionGoogle } from '../../firebase.js'
export const iniciarSesion = () =>{
    const divIniciarSesion =  document.createElement('div');
    const viewIniciarSesion = `
<div class="contenedor">
   <form id="iniciarForm" class="formulario1">
       <div><img class="logoD" src='./img/logoDesserts.jpg'></div>
       <div class="input-contenedor">
        <input id="input-Email" class="inputEmail" type="email" placeholder="E-mail" required>
        </div>
        <div class="input-contenedor">
        <input id= "input-Password" class="inputinit" type="password" id="logpassword" placeholder="Contraseña" required>
        </div>
        <div class="input-contenedor">
        <button id="btn1" type="submit" value="Inicia sesión" class="button1">Iniciar Sesión</button>
        </div><p class="recuperarContraseña"> ¿Olvidaste tu contraseña?
        <a id="btn-recuperar"><button class="recuperar">Recuperar</button></a></p></div>
        <div class= "formulario2">
        <div class= "inputGoogle">
        <input id="logGoogle" type="image" class="googleImg" src="./img/logoGoogle.png" > 
        </div>
        <div>
      <p>¿No tienes cuenta?</p>
     <a href="#/registrarse"><button id=btnRegistrar class="Registrar" >Regístrate aquí</button></a>
      </div>
  </form>
</div>
    `;

divIniciarSesion.innerHTML = viewIniciarSesion;

// Elementos y eventos asociados a Google para iniciar sesion 
const iniciarGoogle= divIniciarSesion.querySelector('#logGoogle')
iniciarGoogle.addEventListener('click', ()=>{
  iniciarSesionGoogle();
});

// Elementos y eventos asociados a  iniciar sesion con usuarios, correo, contraseña
const iniciarSesionFormulario = divIniciarSesion.querySelector('#iniciarForm')
iniciarSesionFormulario.addEventListener('submit',(event)=>{
event.preventDefault();
let emailRegistrado= divIniciarSesion.querySelector('#input-Email').value;
let passwordRegistrado= divIniciarSesion.querySelector('#input-Password').value;
// console.log(emailRegistrado,passwordRegistrado);
iniciarSesionUsuarioPass(emailRegistrado, passwordRegistrado);

}); 

return divIniciarSesion;

}

// });
