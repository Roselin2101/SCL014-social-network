import { recuperarContraseña } from "../../firebase.js";
export const recuperar = () => {
  const divRecuperar = document.createElement("div");
  const viewRecuperar = `
    <div id="contenedorInput" >
    <input id="emailRecuperar"class="input-recuperar" type="email" placeholder="E-mail"></div>
    <div id="contenedorInput">
    <button id="recuperarContraseña">Enviar</button><p>
    `;
  // evento para recibir codigo y recuperar contraseña
  divRecuperar.innerHTML = viewRecuperar;
  const recuperarCuenta = divRecuperar.querySelector("#recuperarContraseña");
  recuperarCuenta.addEventListener("click", (event) => {
    event.preventDefault();
    let emailAddress = divRecuperar.querySelector("#emailRecuperar").value;
    // recuperarCuenta.reset();
    recuperarContraseña(emailAddress);
    console.log("holaa ya envie el correo con el codigo");
  });

  return divRecuperar;
};
