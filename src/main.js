// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
import { menu } from './lib/view/templateMenu.js'
import { iniciarSesion } from './lib/view/templateIniciarSesion.js'
import { registrarse } from './lib/view/templateRegistrarse.js'
import { changeRouter} from './router.js'
import { cerrarSesion } from './lib/view/templateCerrarSesion.js';


myFunction();
// document.getElementById('root').innerHTML= iniciarSesion();
// document.getElementById('root').appendChild(iniciarSesion());
// window.addEventListener('hashchange', ()=> {
// console.log(window.location.hash)
// });



// auth

    // .createUserWithEmailAndPassword(ingresarName,ingresarEmail, ingresaPassword)
    // .then( userCredential => {
    //         console.log(registro)
    //     })

const init = () => {
    document.getElementById('root').appendChild(iniciarSesion());
    window.addEventListener('hashchange', ()=> {
    myFunction();
    console.log(window.location.hash)
    changeRouter(window.location.hash)

});
}

window.addEventListener('load', init)