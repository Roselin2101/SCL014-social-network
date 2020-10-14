// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
import { menu } from './lib/view/templateMenu.js'
import { iniciarSesion } from './lib/view/templateIniciarSesion.js'
import { registrarse } from './lib/view/templateRegistrarse.js'
import { changeRouter} from './router.js'
import { cerrarSesion } from './lib/view/templateCerrarSesion.js';



// document.getElementById('root').innerHTML= iniciarSesion();
// document.getElementById('root').appendChild(iniciarSesion());
// window.addEventListener('hashchange', ()=> {
// console.log(window.location.hash)
// });


const init = () => {
    document.getElementById('root').appendChild(iniciarSesion());
    window.addEventListener('hashchange', ()=> {
    // console.log(window.location.hash)
    changeRouter(window.location.hash)
    myFunction();

});
}

window.addEventListener('load', init)