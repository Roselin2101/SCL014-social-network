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

        <div id='containerPublicacion' class='containerPublic' p-6 > 
        <h3>Titulo</h3>
        <textarea id= "publicacion" class= "publicar"></textarea>
        </div>
    `;
    divinicio .innerHTML= viewinicio;
    //elemento para desplegar el boton de 
//  let tooggle = divinicio.getElementById('.menu-toggle');
// tooggle.addEventListener('click', ()=>{
//  let cambiarSiteNav = divinicio.getElementById('sitio-nav');
//  cambiarSiteNav.classList.toggle('site-nav-open');
// })
    //elementos para realizar el cierre de sesion 
const cerrarSesion= divinicio.querySelector('#cierre')
cerrarSesion.addEventListener('click', ()=>{
    cerrarSesionApp();
}); 
   
    return divinicio ;
}