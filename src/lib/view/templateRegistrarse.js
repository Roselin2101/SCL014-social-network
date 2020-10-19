
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
    const formulario = divRegistrarse.querySelector('#logForm');
    formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let name= divRegistrarse.querySelector('#nombreRegistro').value;
    let email = divRegistrarse.querySelector('#emailRegistro').value;
    let password= divRegistrarse.querySelector('#registroPassword').value;
    let password2= divRegistrarse.querySelector('#registroPassword2').value;
    
    auth
    .createUserWithEmailAndPassword(email, password)
    .then( userCredential => {
        if (userCredential) {
            window.location.hash = '#/inicio';
            console.log('hola')
            // ...
          } else {
            window.location.hash = '#/';
            // User is signed out.
            // ...
          }
        
        // return response.send(responseString);
            console.log(userCredential);
                //User is signed in.
    }) .catch(error => { alert("Error")})
    formulario.reset();
    })

            // console.log(userCredential);
    
    return divRegistrarse;
};


// const btn3 = document.getElementById("btn3");
// btn3.addEventListener("click", () => {
//     let name= document.getElementById("nombreRegistro").value;
//     let email = document.getElementById("emailRegistro").value;
//     let password = document.getElementById("registroPassword").value;
//     let password2= document.getElementById("registroPassword2").value;
//     console.log(name, email, password, password2)
// });



// const formulario = divRegistrarse.querySelector('#logForm');
// formulario.addEventListener('submit', (event) => {
// event.preventDefault();
// let name= divRegistrarse.querySelector('#nombreRegistro').value;
// let email = divRegistrarse.querySelector('#emailRegistro').value;
// let password= divRegistrarse.querySelector('#registropassword').value;
// let password2= divRegistrarse.querySelector('#registropassword2').value;
// console.log( name, email, password, password2)
// });
// auth
    // .createUserWithEmailAndPassword(ingresarName,ingresarEmail, ingresaPassword)
    // .then( userCredential => {
    //         console.log(registro)
    //     })



