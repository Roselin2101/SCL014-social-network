import { iniciarSesion } from './lib/view/templateIniciarSesion.js';
import { registrarse } from './lib/view/templateRegistrarse.js';
import { perfil } from './lib/view/templatePerfil.js';
import { inicio } from './lib/view/templateInicio.js';
import { recuperar } from './lib/view/templateRecuperar.js'; 

export const changeRouter = (hash) => {
    if(hash ==='#/'){
       return showTemplate(hash)
    }else if(hash ==='#/registrarse'){
       return showTemplate(hash)
    } else if(hash === '#/recuperar'){
        return showTemplate(hash)
    } else if(hash === '#/perfil'){
        return showTemplate(hash)
    } else if(hash === '#/inicio'){
        return showTemplate(hash)
    }    
    }
let contenidoRoot = document.getElementById('root');
  const showTemplate = (hash) =>{
    contenidoRoot.innerHTML = " ";

      switch(hash){
           case '#/':
           contenidoRoot.appendChild(iniciarSesion());
            break;
            case '#/registrarse':
           contenidoRoot.appendChild(registrarse());
           break; 
           case '#/perfil': 
           contenidoRoot.appendChild(perfil());
           break;
           case '#/recuperar':
           contenidoRoot.appendChild(recuperar());
           break;
           case '#/inicio':
           contenidoRoot.appendChild(inicio());
           break 
            default:
                return  contenidoRoot.innerHTML= `<h2> 404 No Existe</h2>`            
  }

};