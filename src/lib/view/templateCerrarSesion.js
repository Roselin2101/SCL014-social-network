export const cerrarSesion = () =>{
    const divcerrarSesion =  document.createElement('div');
    
    const viewcerrarSesion = `
    <h2> Hola soy el cierre de sesion <h2>
    `
    divcerrarSesion.innerHTML= viewcerrarSesion;
   
    return divcerrarSesion;
}