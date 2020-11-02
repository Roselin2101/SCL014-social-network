
import { iniciarSesion } from './lib/view/templateIniciarSesion.js'
import { changeRouter} from './router.js'



const init = () => {
    document.getElementById('root').appendChild(iniciarSesion());
    window.addEventListener('hashchange', ()=> {
    console.log(window.location.hash);
    changeRouter(window.location.hash);
   
});
};
window.addEventListener('load', init);