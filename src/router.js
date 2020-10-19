import { iniciarSesion } from './lib/view/templateIniciarSesion.js';
import { registrarse } from './lib/view/templateRegistrarse.js';
import { perfil } from './lib/view/templatePerfil.js';
import { inicio } from './lib/view/templateInicio.js';
import { cerrarSesion } from './lib/view/templateCerrarSesion.js';
import { menu } from './lib/view/templateMenu.js';

export const changeRouter = (hash) => {
    if(hash ==='#/'){
       return showTemplate(hash)
    }else if(hash ==='#/registrarse'){
       return showTemplate(hash)
    } else if(hash === '#/menu'){
        return showTemplate(hash)
    } else if(hash === '#/perfil'){
        return showTemplate(hash)
    } else if(hash === '#/cerrarSesion'){
        return showTemplate(hash)
    } else if(hash === '#/inicio'){
        return showTemplate(hash)
    }    
    }
let contenidoRoot = document.getElementById('root');
 export  const showTemplate = (hash) =>{
    contenidoRoot.innerHTML = " ";

      switch(hash){
           case '#/':{
            contenidoRoot.appendChild(iniciarSesion());
            break;
           }
            case '#/registrarse':
           contenidoRoot.appendChild(registrarse());
           break; 
           case '#/perfil': 
           contenidoRoot.appendChild(perfil());
           break;
           case '#/menu':
           contenidoRoot.appendChild(menu());
           break;
           case '#/inicio':
           contenidoRoot.appendChild(inicio());
           break;
           case '#/cerrarSesion':
           contenidoRoot.appendChild(cerrarSesion());
           break
            default:
                return  contenidoRoot.innerHTML= `<h2> 404 No Existe</h2>`            
  }

};