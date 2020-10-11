export const iniciarSesion = () =>{
    const divIniciarSesion =  document.createElement('div');
    
    const viewIniciarSesion = `
    <h1> Hola soy el inicio de sesión<h1>
    `
    divIniciarSesion.innerHTML= viewIniciarSesion;
   
    return divIniciarSesion;
}