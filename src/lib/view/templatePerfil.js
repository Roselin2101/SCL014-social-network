export const perfil = () =>{
    const divPerfil =  document.createElement('div');
    
    const viewPerfil = `
    <h2> Hola soy el perfil <h2>
    `
    divPerfil.innerHTML= viewPerfil;
   
    return divPerfil;
}