import { cerrarSesionApp, posteame, leeme } from "../../firebase.js";
export const inicio = () => {
  const divinicio = document.createElement("div");

  const viewinicio = `
    <header>
            <div class="container">
                <img class="logoD" src='./img/logoDesserts.jpg'>
                <nav id= "sitio-nav" class="sitioNav">
                 <ul>  
                    <li><a href="#/perfil">Perfil</a></li>
                    <li><a href="" id="cierre">Cerrar sesion</a> </li>
                </ul>
                </nav>
                </div>
            <div class="menu-toggle">
            <div class="hamburguesa"></div>
            </div>
        </header> 

        <!--Contenido Principal-->

 <form id= "task-form">
    <div class="form-Titulo">
     <input id="titulo"class="tituloClass" placeholder="Titulo"/>
       </div>
        <div class="form-group">
       <textarea id="task-description" row="4" class="form-control" placehold="Description">
        </textarea>
       </div>
     <button class ="btn-primary" id= "btn-task-form">Publicar</button>
 </form>
  <div id='vista'></div>
 

        `;
  divinicio.innerHTML = viewinicio;
  // informacion para cerrar sesion
  const cerrarSesion = divinicio.querySelector("#cierre");
  cerrarSesion.addEventListener("click", () => {
    cerrarSesionApp();
  });
  // variables para guardar post
  const formularioPublic = divinicio.querySelector("#task-form");
  formularioPublic.addEventListener("submit", (event) => {
    event.preventDefault();
    const titulo = divinicio.querySelector("#titulo").value;
    const descripcion = divinicio.querySelector("#task-description").value;
    const id_user = firebase.auth().currentUser.uid;

    posteame(titulo, descripcion, id_user);
    formularioPublic.reset();
  });
  leeme();
  return divinicio;
};
