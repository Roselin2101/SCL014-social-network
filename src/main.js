// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { menu } from './lib/view/templateMenu.js'
import { iniciarSesion } from './lib/view/templateIniciarSesion.js'
import {registrarse } from './lib/view/templateRegistrarse.js'

myFunction();
document.getElementById('root').innerHTML= menu();
// document.getElementById('root').appendChild(iniciarSesion());
// window.addEventListener('hashchange', ()=> {
// console.log(window.location.hash)
// });