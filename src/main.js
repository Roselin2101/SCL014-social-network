// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
import { menu } from './lib/view/templateMenu.js'
import { iniciarSesion } from './lib/view/templateIniciarSesion.js'
import { registrarse } from './lib/view/templateRegistrarse.js'
import { changeRouter} from './router.js'
import { cerrarSesion } from './lib/view/templateCerrarSesion.js';
import { perfil } from './lib/view/templatePerfil.js';



// document.getElementById('root').innerHTML= iniciarSesion();
// document.getElementById('root').appendChild(iniciarSesion());
// window.addEventListener('hashchange', ()=> {
// console.log(window.location.hash)
// });
// const btnIniciarSesion=document.getElementById("btn1");
// btnIniciarSesion.addEventListener('click', ()=>{ 
//     perfil();
// })

// const btnRegistrarse=document.getElementById("btnRegistrar");
// btnRegistrarse.addEventListener('click', ()=>{
//     registrarse();
// })


const init = () => {
    document.getElementById('root').appendChild(iniciarSesion());
    window.addEventListener('hashchange', ()=> {
    // console.log(window.location.hash)
    changeRouter(window.location.hash)
    // showTemplate(window.location.hash)
    myFunction();

});
}

window.addEventListener('load', init)