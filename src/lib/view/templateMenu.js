export const menu = () => {
    const divMenu =  document.createElement('div');    
    const viewMenu = `
    <ul>
       <li>
       <a href="#/">IniciarSesion</a>
       </li>
       <li>
       <a href="#/registrarse">Registrarse</a>
       </li>
       <li>
       <a href="#/perfil">Perfil</a>
       </li>
       <li>
       <a href="#/inicio">Inicio</a></li>
       <li> 
       <a href="#/cerrarSesion">CerrarSesión</a></li>
    </ul>
    `
    divMenu.innerHTML = viewMenu;
    return divMenu;
}