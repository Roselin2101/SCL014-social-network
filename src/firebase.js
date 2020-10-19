export const iniciarSesionUsuarioPass = (emailRegistrado,passwordRegistrado)=> {
auth
.signInWithEmailAndPassword(emailRegistrado, passwordRegistrado) 
.then ( userCredential => {
    
    if (userCredential) {
        window.location.hash = '#/inicio';
        console.log('hola')
        // ...
      } else {
        window.location.hash = '#/';
        // User is signed out.
        // ...
      }
    // return response.send(responseString);
        console.log(userCredential);
            //User is signed in.
}) .catch(error => { alert("Error Usuario No Registrado")})

}; 
