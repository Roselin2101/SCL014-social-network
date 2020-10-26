import { cerrarSesionApp } from '../../firebase.js'
export const inicio = () =>{
    const divinicio  =  document.createElement('div');
    
    const viewinicio  = `

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
<textarea id="task-descroption" row="3" class="form-control" placehold="Description">
</textarea>
</div>
 <button class ="btn-primary" id= "btn-task-form">Publicar</button>
</form>
<p id='post'> </p>
    `;
    divinicio .innerHTML= viewinicio;

const cerrarSesion= divinicio.querySelector('#cierre')
cerrarSesion.addEventListener('click', ()=>{
    cerrarSesionApp();
}); 
const formularioPublic= divinicio.querySelector('#task-form');
formularioPublic.addEventListener('submit', async (event) => {
event.preventDefault();
const titulo = divinicio.querySelector('#titulo');
const  descripcion = divinicio.querySelector('#task-descroption');
await guardarPublicaciones(titulo.value, descripcion.value);
formularioPublic.reset();
titulo.focus();



});

    return divinicio ;
}