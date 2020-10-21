//registrandose
export const registrarseAutenticarse= (email, password)=>{
    auth
    .createUserWithEmailAndPassword(email, password)
    .then( userCredential => {
        if (userCredential) {
            window.location.hash = '#/';
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
    formulario.reset();

}
//ingresar sesion con cuenta ya registrada

export const iniciarSesionUsuarioPass = (emailRegistrado,passwordRegistrado)=> {
auth
.signInWithEmailAndPassword(emailRegistrado, passwordRegistrado) 
.then ( userCredential => {
    
    if (userCredential) {
        window.location.hash ='#/inicio';
        console.log('hola')
        // ...
      } else {
        window.location.hash ='#/';
        // User is signed out.
        // ...
      }
    // return response.send(responseString);
        console.log(userCredential);
            //User is signed in.
}) .catch(error =>  { alert("Error")})
   iniciarSesionFormulario.reset();

}

export const iniciarSesionGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;

    window.location.hash='#/inicio'

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

