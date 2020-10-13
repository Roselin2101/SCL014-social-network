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
    } else if(hash === '#/perfil'){
        return showTemplate(hash)
    } else if(hash === '#/cerrarSesion'){
        return showTemplate(hash)
    } else if(hash === '#/inicio'){
        return showTemplate(hash)
    }  else {
        return showTemplate(hash)
    }
  }

  const showTemplate = (hash) =>{
      const contenidoRoot = document.getElementById('root');
    //   contenidoRoot.innerHTML = menu();

      switch(hash){
           case '#/':
              contenidoRoot.innerHTML=" " ;
              contenidoRoot.appendChild(iniciarSesion());
              break;
           case '#/registrarse':
               contenidoRoot.innerHTML=" " ;
               contenidoRoot.appendChild(registrarse());
              break;
           case '#/perfil':
               contenidoRoot.appendChild(perfil());
               break;
           case '#/menu':
               contenidoRoot.appendChild(menu())
               break; 
           case '#/inicio': 
                contenidoRoot.appendChild(inicio());
                break;
           case '#/cerrarSesion':
                 contenidoRoot.appendChild(cerrarSesion());
                break;
            default:
                contenidoRoot.innerHTML= `<h2>No Existe</h2>`
            
  }
}
        
