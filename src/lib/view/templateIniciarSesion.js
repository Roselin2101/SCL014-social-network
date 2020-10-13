export const iniciarSesion = () =>{
    const divIniciarSesion =  document.createElement('div');
    
    const viewIniciarSesion = `
<div class="contenedor">
   <form id="iniciarForm" class="formulario1">
       <div><img class="logoD" src='./img/logoDesserts.jpg'></div>
       <div class="input-contenedor">
        <input id="input-Email"class="inputEmail" type="email" placeholder="E-mail" required>
        </div>
        <div class="input-contenedor">
        <input class="inputinit" type="password" id="logpassword" placeholder="Contraseña" required>
        </div>
        <div class="input-contenedor">
        <button id="btn1" type="submit" value="Inicia sesión" class="button1">Iniciar Sesión</button>
        </div><p class="recuperarContraseña"> ¿Olvidaste tu contraseña?
        <a id="btn-recuperar"><button class="recuperar">Recuperar</button></a></p></div>
        <div class= "formulario2">
        <div class= "inputGoogle">
        <button id="loginGoogle" class="btnGoogle">Inicia sesión con: <img class="googleImg" src="./img/logoGoogle.png"> </button>
        </div>
        <div>
      <p>¿No tienes cuenta?</p>
      <a id="btnRegistrar" href="#/registrarse"><button class="Registrar">Regístrate aquí</button></a>
      </div>
  </form>
</div>
    `;
    divIniciarSesion.innerHTML = viewIniciarSesion;
    return divIniciarSesion;
};

// const formulario = document.querySelector('#iniciarForm')
// formulario.addEventListener('submit', (e) =>{
//         e.preventDefault();
//   console.log(enviando)
//     });
// const llamarFormulario = document.querySelector('#iniciarForm');
// llamarFormulario.addEventListener('submit', (e) =>{
//  e.preventDefault();
//  e.stopPropagation();
// let ingresarEmail= document.querySelector('#input-Email').value;
// let ingresarPaasw = document.querySelector('#logpassword').value;
// console.log(ingresarEmail, ingresarPaasw)

// }) 
