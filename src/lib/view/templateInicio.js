export const inicio = () =>{
    const divinicio  =  document.createElement('div');
    
    const viewinicio  = `
    <header>
            <div class="container">
                <div class="logoDsw"> <div><img class="logoD" src='./img/logoDesserts.jpg'></div>
                <nav id= "sitio-nav" class="sitioNav">
                    <li><a href="#">Perfil</a></li>
                    <li><a href="#/cerrarSesion">Cerrar sesion</a> </li>
                    <li><a href="#/menu">Menu</a> </li>
                </nav>
            </div>
        </header>
    `
    divinicio .innerHTML= viewinicio ;
   
    return divinicio ;
}